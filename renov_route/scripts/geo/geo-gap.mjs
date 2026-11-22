// Analyse pure des réponses IA : part de voix, prompts sans Rénov Route, sources à conquérir.
// Le levier concret est la liste des sources : on ne modifie pas une IA, on peut
// en revanche figurer dans l'annuaire, le comparatif ou le fil qu'elle cite.

const KIND_WEIGHT = { direct: 2, market: 1 }
const WITNESS_CATEGORY = 'marque'
const MAX_EXAMPLES = 3
const SEPARATORS = "-'’_‑–—"
const REFERENCE_DOMAINS = new Set(['afnor.org', 'cerema.fr', 'wikipedia.org', 'service-public.fr'])
const DIRECTORY_DOMAINS = new Set([
  'pagesjaunes.fr', 'societe.com', 'pappers.fr', 'verif.com', 'kompass.com', 'europages.fr', 'mappy.com',
])
const FORUM_DOMAINS = new Set(['reddit.com', 'quora.com'])

// Même longueur que l'entrée : un offset trouvé ici reste valable dans le texte d'origine.
export function fold(text) {
  return (text ?? '').split('').map((char) => {
    const base = char.toLowerCase().normalize('NFD')[0] ?? ' '
    return SEPARATORS.includes(base) ? ' ' : base
  }).join('')
}

export const promptKey = (prompt) => fold(prompt).replace(/\s+/g, ' ').trim()

function aliasPattern(alias) {
  const body = fold(alias).split(/\s+/).filter(Boolean)
    .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+')
  return new RegExp(`(?<![a-z0-9])${body}(?![a-z0-9])`)
}

export function firstMention(text, brand) {
  const folded = fold(text)
  const offsets = brand.aliases.map((alias) => folded.search(aliasPattern(alias))).filter((i) => i >= 0)
  return offsets.length ? Math.min(...offsets) : null
}

const isCited = (brand, citations) => citations.some(
  (c) => brand.domains.includes(c.domain) || (c.label && firstMention(c.label, brand) !== null),
)

export function analyzeAnswer(answer, brands) {
  const presences = brands.flatMap((brand) => {
    const offset = firstMention(answer.text, brand)
    const cited = isCited(brand, answer.citations)
    return offset !== null || cited ? [{ brand: brand.name, offset, cited }] : []
  }).sort((a, b) => (a.offset ?? Infinity) - (b.offset ?? Infinity))
  return { answer, presences, has: (name) => presences.some((p) => p.brand === name) }
}

export function classifyDomain(domain) {
  if (domain.endsWith('.gouv.fr') || REFERENCE_DOMAINS.has(domain)) return 'référence'
  if (DIRECTORY_DOMAINS.has(domain)) return 'annuaire'
  if (FORUM_DOMAINS.has(domain) || domain.includes('forum')) return 'forum'
  return 'média/autre'
}

function brandShare(brand, engine, items, totalPresent) {
  const hits = items.flatMap((item) => {
    const presence = item.presences.find((p) => p.brand === brand.name)
    if (!presence) return []
    const named = item.presences.filter((p) => p.offset !== null).map((p) => p.brand)
    return [{ presence, rank: presence.offset === null ? null : named.indexOf(brand.name) + 1 }]
  })
  const ranks = hits.flatMap((h) => (h.rank === null ? [] : [h.rank]))
  return {
    brand: brand.name,
    kind: brand.kind,
    engine,
    answers: items.length,
    present: hits.length,
    mentioned: hits.filter((h) => h.presence.offset !== null).length,
    cited: hits.filter((h) => h.presence.cited).length,
    rate: items.length ? hits.length / items.length : 0,
    share: totalPresent ? hits.length / totalPresent : 0,
    avgRank: ranks.length ? Math.round((ranks.reduce((a, b) => a + b, 0) / ranks.length) * 10) / 10 : null,
  }
}

function computeShares(items, brands) {
  const engines = [...new Set(items.map((x) => x.answer.engine))].sort()
  return engines.flatMap((engine) => {
    const subset = items.filter((x) => x.answer.engine === engine)
    const totalPresent = subset.reduce((sum, x) => sum + x.presences.length, 0)
    return brands.map((brand) => brandShare(brand, engine, subset, totalPresent))
  })
}

// Un prompt n'est « absent » que si la marque ne figure dans aucun de ses tirages.
function computeAbsentPrompts(items, own, kinds) {
  const byPrompt = Map.groupBy(items, (x) => promptKey(x.answer.prompt))
  const absent = [...byPrompt.values()].filter((group) => !group.some((x) => x.has(own.name)))
  return absent.map((group) => {
    const competitors = [...new Set(group.flatMap((x) => x.presences.map((p) => p.brand)))]
    return {
      prompt: group[0].answer.prompt,
      category: group[0].answer.category ?? '',
      engines: [...new Set(group.map((x) => x.answer.engine))],
      competitors,
      score: competitors.reduce((sum, name) => sum + (KIND_WEIGHT[kinds[name]] ?? 0), 0),
    }
  }).sort((a, b) => b.score - a.score || a.prompt.localeCompare(b.prompt, 'fr'))
}

function computeSources(items, own, brands) {
  const excluded = new Set(brands.flatMap((b) => b.domains))
  const absent = items.filter((x) => !x.has(own.name))
  const hits = absent.flatMap((item) => item.answer.citations
    .filter((c) => c.domain && !excluded.has(c.domain))
    .map((citation) => ({ item, citation })))
  return [...Map.groupBy(hits, (h) => h.citation.domain).entries()].map(([domain, group]) => {
    const answers = new Set(group.map((h) => h.item))
    return {
      domain,
      type: classifyDomain(domain),
      answers: answers.size,
      brands: [...new Set([...answers].flatMap((x) => x.presences.map((p) => p.brand)))].sort(),
      urls: [...new Set(group.map((h) => h.citation.url))].slice(0, MAX_EXAMPLES),
      prompts: [...new Set([...answers].map((x) => x.answer.prompt))].slice(0, MAX_EXAMPLES),
    }
  }).sort((a, b) => b.answers - a.answers || b.brands.length - a.brands.length || a.domain.localeCompare(b.domain))
}

export function validateBrands(brands) {
  if (brands.filter((b) => b.kind === 'own').length !== 1) {
    throw new Error('brands.json : il faut exactement une marque de type "own"')
  }
  const invalid = brands.filter((b) => !b.name || !b.aliases?.length || !Array.isArray(b.domains) || !['own', 'direct', 'market'].includes(b.kind))
  if (invalid.length) throw new Error(`brands.json : entrée invalide (${invalid.map((b) => b.name ?? '?').join(', ')})`)
  return brands
}

export function analyze(answers, brandList) {
  const brands = validateBrands(brandList)
  const own = brands.find((b) => b.kind === 'own')
  const kinds = Object.fromEntries(brands.map((b) => [b.name, b.kind]))
  const analyzed = answers.map((answer) => analyzeAnswer(answer, brands))
  // Les prompts de marque nomment forcément la marque : ils fausseraient la part de voix.
  const tracked = analyzed.filter((x) => x.answer.category !== WITNESS_CATEGORY)
  return {
    ownBrand: own.name,
    answers: analyzed.length,
    trackedAnswers: tracked.length,
    shares: computeShares(tracked, brands),
    absentPrompts: computeAbsentPrompts(tracked, own, kinds),
    wins: tracked.filter((x) => x.has(own.name)),
    witnesses: analyzed.filter((x) => x.answer.category === WITNESS_CATEGORY),
    sources: computeSources(tracked, own, brands),
  }
}
