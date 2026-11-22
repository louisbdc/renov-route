// Lecture des fichiers saisis à la main : prompts CSV et réponses IA collées.
// Aucun moteur IA n'est interrogé ici. Format documenté dans scripts/geo/README.md.

const COMPOUND_SUFFIXES = new Set(['gouv.fr', 'asso.fr', 'com.fr', 'co.uk'])
const URL_OR_DOMAIN =
  /https?:\/\/[^\s<>()[\]"'`]+|(?<![@\w./-])(?:[a-z0-9-]+\.)+(?:fr|com|org|net|eu|io|info)(?![a-z0-9-])(?:\/[^\s<>()[\]"'`]*)?/gi
const MARKDOWN_LINK = /\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g
const SOURCES_HEADING = /^\s*[#*_ ]*sources?[*_ ]*:?[*_ ]*\s*$/i
const BLOCK_PREFIX = '=== '

export function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let quoted = false
  const source = text.replace(/^﻿/, '').replace(/\r\n/g, '\n')
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i]
    if (quoted) {
      if (char === '"' && source[i + 1] === '"') { cell += '"'; i += 1 }
      else if (char === '"') quoted = false
      else cell += char
    } else if (char === '"') quoted = true
    else if (char === ',') { row.push(cell); cell = '' }
    else if (char === '\n') { rows.push([...row, cell]); row = []; cell = '' }
    else cell += char
  }
  if (cell || row.length) rows.push([...row, cell])
  const [header = [], ...body] = rows.filter((r) => r.some((value) => value.trim()))
  return body.map((values) => Object.fromEntries(header.map((key, i) => [key.trim(), (values[i] ?? '').trim()])))
}

export function rootDomain(hostname) {
  const parts = hostname.toLowerCase().replace(/^www\./, '').split('.')
  if (parts.length <= 2) return parts.join('.')
  const lastTwo = parts.slice(-2).join('.')
  return COMPOUND_SUFFIXES.has(lastTwo) ? parts.slice(-3).join('.') : lastTwo
}

function normalizeUrl(raw) {
  const cleaned = raw.replace(/[.,;:!?]+$/, '')
  try {
    const url = new URL(/^https?:/i.test(cleaned) ? cleaned : `https://${cleaned}`)
    for (const key of [...url.searchParams.keys()]) {
      if (key.toLowerCase().startsWith('utm_')) url.searchParams.delete(key)
    }
    return { url: url.href.replace(/\/$/, ''), domain: rootDomain(url.hostname) }
  } catch {
    return null // une chaîne qui ressemble à une URL sans en être une n'est pas une source
  }
}

// Les URL sont masquées à longueur égale : « renov-route.com » dans une URL est
// une citation, pas une mention de la marque dans le texte.
export function extractCitations(raw) {
  const labels = new Map([...raw.matchAll(MARKDOWN_LINK)].map((m) => [m[2], m[1]]))
  const found = [...raw.matchAll(URL_OR_DOMAIN)].flatMap((match) => {
    const normalized = normalizeUrl(match[0])
    return normalized ? [{ ...normalized, label: labels.get(match[0]) ?? '' }] : []
  })
  const citations = [...new Map(found.map((c) => [c.url, c])).values()]
  return { citations, blanked: raw.replace(URL_OR_DOMAIN, (m) => ' '.repeat(m.length)) }
}

function parseBody(body) {
  const lines = body.split('\n')
  const headingIndex = lines.findLastIndex((line) => SOURCES_HEADING.test(line))
  const main = headingIndex < 0 ? body : lines.slice(0, headingIndex).join('\n')
  const sources = headingIndex < 0 ? '' : lines.slice(headingIndex + 1).join('\n')
  const fromMain = extractCitations(main)
  const fromSources = extractCitations(sources)
  const citations = [...new Map([...fromMain.citations, ...fromSources.citations].map((c) => [c.url, c])).values()]
  return { text: fromMain.blanked.trim(), citations }
}

function parseBlock(lines, lineNumber) {
  const separator = lines.findIndex((line, i) => i > 0 && line.trim() === '---')
  if (separator < 0) throw new Error(`Ligne ${lineNumber} : séparateur --- manquant après le prompt`)
  const body = lines.slice(separator + 1).join('\n').trim()
  if (!body) return [] // bloc du modèle pas encore rempli
  const meta = Object.fromEntries(lines.slice(1, separator).flatMap((line) => {
    const index = line.indexOf(':')
    return index < 0 ? [] : [[line.slice(0, index).trim().toLowerCase(), line.slice(index + 1).trim()]]
  }))
  const prompt = lines[0].slice(BLOCK_PREFIX.length).trim()
  if (!prompt) throw new Error(`Ligne ${lineNumber} : prompt vide`)
  return [{ prompt, engine: (meta.moteur || 'inconnu').toLowerCase(), date: meta.date ?? '', ...parseBody(body) }]
}

export function parseAnswers(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const starts = lines.flatMap((line, i) => (line.startsWith(BLOCK_PREFIX) ? [i] : []))
  return starts.flatMap((start, index) => parseBlock(lines.slice(start, starts[index + 1] ?? lines.length), start + 1))
}

export function answersTemplate(prompts, engine = 'chatgpt') {
  const intro = [
    '# Réponses IA collées à la main (format : scripts/geo/README.md)',
    '# Coller chaque réponse sous son ---, sources comprises. Un bloc vide est ignoré.',
    '',
  ]
  const blocks = prompts.flatMap(({ prompt }) => [`${BLOCK_PREFIX}${prompt}`, `moteur: ${engine}`, 'date:', '---', '', ''])
  return [...intro, ...blocks].join('\n')
}
