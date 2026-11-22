// Rendu Markdown du rapport GEO.

const KIND_LABELS = { own: 'Rénov Route', direct: 'concurrent direct', market: 'marché' }
const REFERENCE_TYPE = 'référence'
const pct = (value) => `${Math.round(value * 100)} %`
const cell = (text) => String(text ?? '').replace(/\|/g, '/').replace(/\s+/g, ' ').trim()

function headline(summary, totalPrompts) {
  const own = summary.shares.filter((s) => s.brand === summary.ownBrand)
  const rivals = summary.shares.filter((s) => s.kind !== 'own' && s.present).sort((a, b) => b.present - a.present)
  const target = summary.sources.find((s) => s.type !== REFERENCE_TYPE)
  const withRival = summary.absentPrompts.filter((p) => p.competitors.length).length
  return [
    '## En bref', '',
    `- ${summary.answers} réponse(s) analysée(s), dont ${summary.trackedAnswers} hors prompts de marque, pour ${totalPrompts} prompts au catalogue.`,
    ...own.map((s) => `- **${s.brand}** apparaît dans ${s.present} réponse(s) ${s.engine} sur ${s.answers} (${pct(s.rate)}).`),
    ...(rivals[0] ? [`- Marque suivie la plus présente : **${rivals[0].brand}** (${rivals[0].present}/${rivals[0].answers} sur ${rivals[0].engine}).`] : []),
    `- ${summary.absentPrompts.length} prompt(s) sans ${summary.ownBrand}, dont ${withRival} avec une marque suivie.`,
    ...(target ? [`- Source n°1 à conquérir : **${target.domain}** (${target.answers} réponse(s) sans ${summary.ownBrand}).`] : []),
    '',
  ]
}

function shareTable(summary) {
  const rows = [...summary.shares]
    .filter((s) => s.present || s.kind === 'own')
    .sort((a, b) => a.engine.localeCompare(b.engine) || b.present - a.present)
    .map((s) => `| ${s.kind === 'own' ? `**${s.brand}**` : s.brand} | ${KIND_LABELS[s.kind]} | ${s.engine} | ${s.present}/${s.answers} (${pct(s.rate)}) | ${pct(s.share)} | ${s.mentioned} | ${s.cited} | ${s.avgRank ?? '–'} |`)
  return [
    '## 1. Part de voix', '',
    'Présence = nommée ou citée en source. Part de voix = part de la marque parmi toutes les présences de marques suivies du moteur. Rang = ordre de première mention.', '',
    '| Marque | Type | Moteur | Présence | Part de voix | Nommée | Citée | Rang moyen |',
    '|---|---|---|---|---|---|---|---|',
    ...rows, '',
  ]
}

function absentTable(summary, limit) {
  const header = [`## 2. Prompts où ${summary.ownBrand} est absente`, '']
  if (!summary.absentPrompts.length) return [...header, 'Aucun.', '']
  const rows = summary.absentPrompts.slice(0, limit).map((p, i) =>
    `| ${i + 1} | ${cell(p.prompt)} | ${cell(p.category) || '–'} | ${p.engines.join(', ')} | ${cell(p.competitors.join(', ')) || '–'} | ${p.score} |`)
  const more = summary.absentPrompts.length - limit
  return [
    ...header,
    'Score = 2 par concurrent direct + 1 par marque du marché.', '',
    '| # | Prompt | Catégorie | Moteurs | Marques présentes | Score |',
    '|---|---|---|---|---|---|',
    ...rows,
    ...(more > 0 ? ['', `_${more} autre(s) non affiché(s)._`] : []),
    '',
  ]
}

function sourceTable(summary, limit) {
  const header = [
    '## 3. Domaines sources à conquérir', '',
    `Domaines cités dans les réponses **sans ${summary.ownBrand}**, sites des marques suivies exclus. Les « référence » (Légifrance, AFNOR…) ne se conquièrent pas : il faut les citer dans les guides.`, '',
  ]
  if (!summary.sources.length) return [...header, 'Aucune source relevée.', '']
  const rows = summary.sources.slice(0, limit).map((s) =>
    `| ${s.domain} | ${s.type} | ${s.answers} | ${cell(s.brands.join(', ')) || '–'} | ${s.urls.map(cell).join('<br>')} |`)
  return [...header, '| Domaine | Type | Réponses | Marques présentes | Exemples d\'URL |', '|---|---|---|---|---|', ...rows, '']
}

function presenceLines(title, items, ownBrand, emptyLabel) {
  if (!items.length) return [`## ${title}`, '', emptyLabel, '']
  const lines = items.map((item) => {
    const presence = item.presences.find((p) => p.brand === ownBrand)
    const how = !presence ? 'absente' : presence.offset !== null ? 'nommée' : 'citée en source'
    return `- ${item.answer.engine} · « ${cell(item.answer.prompt)} » (${how})`
  })
  return [`## ${title}`, '', ...lines, '']
}

const LIMITS = [
  '## Limites', '',
  '- Les réponses varient d\'un essai à l\'autre : sans plusieurs tirages par prompt, c\'est un diagnostic, pas une mesure.',
  '- Une réponse sans source vient de la mémoire du modèle : seule la notoriété la fait bouger.',
  '- Seules les marques de `scripts/geo/data/brands.json` sont détectées.',
  '',
]

export function renderReport(summary, { generatedOn, totalPrompts, top = 40 }) {
  const lines = [
    `# GEO : part de voix de ${summary.ownBrand} dans les réponses IA`, '',
    `_Généré le ${generatedOn} à partir de réponses collées à la main._`, '',
    ...headline(summary, totalPrompts),
    ...shareTable(summary),
    ...absentTable(summary, top),
    ...sourceTable(summary, top),
    ...presenceLines(`4. Où ${summary.ownBrand} apparaît déjà`, summary.wins, summary.ownBrand, 'Nulle part dans cet échantillon.'),
    ...presenceLines('5. Prompts de marque témoins (hors part de voix)', summary.witnesses, summary.ownBrand, 'Aucun témoin renseigné.'),
    ...LIMITS,
  ]
  return `${lines.join('\n')}\n`
}
