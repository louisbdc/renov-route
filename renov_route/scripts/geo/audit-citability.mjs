#!/usr/bin/env node
// Audit de citabilité des guides, sans réseau ni IA : lit les sources TSX et classe
// du guide le plus faible au plus solide. Usage : node scripts/geo/audit-citability.mjs [--out dossier]
// shortcut: lecture du JSX par regex, suffisante car les guides n'utilisent ni .map ni composant de texte hors KeyAnswer et Link ; passer à un parseur si cela change.

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'

const HERE = dirname(fileURLToPath(import.meta.url))
const GUIDES_DIR = join(HERE, '../../src/lib/guides')

const POINTS = { answer: 35, faq: 20, sourced: 25, passages: 20 }
const ANSWER_WORDS = { min: 30, max: 80 }
const PASSAGE_WORDS = { min: 15, max: 120 }
const MIN_FAQ_QUESTIONS = 3
// Une partie des chiffres sont des prix d'expérience : viser 100 % sourcés n'aurait pas de sens.
const TARGET_SOURCED_RATIO = 0.3

const ENTITIES = { apos: "'", quot: '"', amp: '&', laquo: '«', raquo: '»', nbsp: ' ', eacute: 'é', egrave: 'è', agrave: 'à', euro: '€', rsquo: '’', hellip: '…' }
const FIGURE = /\d[\d\s.,]*\s?(?:€|%|m²|m2|cm|mm|ml\b|m\b|km\/h|ans?\b|mois\b|jours?\b|heures?\b|h\b|places?\b|lux\b)/i
// « selon » seul est exclu : « 8 à 15 €/m² selon le support » n'est pas une source.
const SOURCE = /\b(?:selon|d['’]après)\s+(?:l['’]|les?\s+|la\s+)?(?:étude|enquête|rapport|ministère|INSEE|ADEME)|\barrêté\s+(?:du|n°)|\bdécret\s+(?:du|n°)|\barticles?\s+[LRD]?\.?\s?\d|\bart\.\s?[LRD]?\.?\s?\d|\b[LRD]\.\s?\d{3}|\bNF\s?(?:EN|P)\b|\bISO\s?\d|Légifrance|Cerema|AFNOR|code de la (?:route|construction)|instruction interministérielle|\bIISR\b|\bloi\s+(?:du|n°)/i
const EXTERNAL_LINK = /href="https?:\/\/(?!(?:www\.)?renov-route\.com)/i

const wordCount = (text) => text.split(/\s+/).filter(Boolean).length

export function jsxToText(jsx) {
  return jsx
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\{\s*['"`]\s*['"`]\s*\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(\w+);/g, (match, name) => ENTITIES[name] ?? match)
    .replace(/\s+/g, ' ')
    .trim()
}

function scoreAnswer(intro) {
  const key = intro.match(/<KeyAnswer\b[^>]*>([\s\S]*?)<\/KeyAnswer>/)
  if (key) {
    const words = wordCount(jsxToText(key[1]))
    const inRange = words >= ANSWER_WORDS.min && words <= ANSWER_WORDS.max
    return { points: inRange ? POINTS.answer : Math.round(POINTS.answer * 0.7), label: `KeyAnswer (${words} mots)`, ok: inRange }
  }
  const first = intro.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)
  const text = first ? jsxToText(first[1]) : ''
  const usable = text && wordCount(text) <= ANSWER_WORDS.max && FIGURE.test(text)
  return usable
    ? { points: Math.round(POINTS.answer * 0.4), label: 'intro chiffrée, sans KeyAnswer', ok: false }
    : { points: 0, label: 'aucune', ok: false }
}

function scoreFaq(body, schemaQuestions) {
  const sections = body.split(/(?=<h2\b)/)
  const faq = sections.find((s) => /^<h2\b[^>]*>[^<]*(?:FAQ|questions? fréquentes)/i.test(s))
  const visible = faq ? (faq.match(/<h3\b/g) ?? []).length : 0
  const part = (count) => (count >= MIN_FAQ_QUESTIONS ? POINTS.faq / 2 : count > 0 ? POINTS.faq / 4 : 0)
  return { points: part(visible) + part(schemaQuestions), visible, schema: schemaQuestions }
}

function passagesOf(body) {
  const items = [...body.matchAll(/<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)]
    .filter((m) => !/<(?:p|ul|ol)\b/.test(m[2]))
    .map((m) => ({ tag: m[1], raw: m[2], text: jsxToText(m[2]) }))
  return items.filter((item) => item.text)
}

function scoreSourced(passages) {
  const withFigure = passages.filter((p) => FIGURE.test(p.text))
  const sourced = withFigure.filter((p) => SOURCE.test(p.text) || EXTERNAL_LINK.test(p.raw))
  const ratio = withFigure.length ? sourced.length / withFigure.length : 0
  return { points: Math.round(POINTS.sourced * Math.min(1, ratio / TARGET_SOURCED_RATIO)), figures: withFigure.length, sourced: sourced.length, ratio }
}

function scorePassages(passages) {
  const counts = passages.filter((p) => p.tag === 'p').map((p) => wordCount(p.text))
  const good = counts.filter((n) => n >= PASSAGE_WORDS.min && n <= PASSAGE_WORDS.max).length
  const ratio = counts.length ? good / counts.length : 0
  return { points: Math.round(POINTS.passages * ratio), paragraphs: counts.length, tooLong: counts.filter((n) => n > PASSAGE_WORDS.max).length, ratio }
}

function actionsFor({ answer, faq, sourced, passages }) {
  return [
    ...(answer.ok ? [] : [answer.label.startsWith('KeyAnswer') ? `ajuster le KeyAnswer à ${ANSWER_WORDS.min}-${ANSWER_WORDS.max} mots` : 'ajouter un KeyAnswer chiffré']),
    ...(faq.visible < MIN_FAQ_QUESTIONS ? ['ajouter une FAQ visible'] : []),
    ...(faq.schema < MIN_FAQ_QUESTIONS ? ['renseigner FAQ_DATA'] : []),
    ...(sourced.ratio < TARGET_SOURCED_RATIO ? ['sourcer les chiffres (texte officiel, norme)'] : []),
    ...(passages.tooLong ? [`découper ${passages.tooLong} paragraphe(s) trop long(s)`] : []),
  ]
}

export function auditGuide(source, schemaQuestions = 0) {
  const slug = source.match(/slug:\s*['"]([^'"]+)/)?.[1]
  const start = source.indexOf('export default function')
  if (!slug || start < 0) throw new Error(`Guide illisible (slug ou composant absent) : ${slug ?? source.slice(0, 40)}`)
  const body = source.slice(start)
  const firstH2 = body.search(/<h2\b/)
  const passages = passagesOf(body)
  const parts = {
    answer: scoreAnswer(firstH2 < 0 ? body : body.slice(0, firstH2)),
    faq: scoreFaq(body, schemaQuestions),
    sourced: scoreSourced(passages),
    passages: scorePassages(passages),
  }
  const score = Math.round(parts.answer.points + parts.faq.points + parts.sourced.points + parts.passages.points)
  return { slug, score, ...parts, actions: actionsFor(parts) }
}

export function parseFaqCounts(text) {
  const parts = text.split(/^ {2}'?([a-z0-9-]+)'?: \[/m)
  return Object.fromEntries(parts.slice(1).flatMap((part, i) =>
    (i % 2 === 0 ? [[part, (parts[i + 2].match(/\bquestion:/g) ?? []).length]] : [])))
}

function renderAudit(results, generatedOn) {
  const average = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
  const count = (test) => results.filter(test).length
  const rows = results.map((r, i) =>
    `| ${i + 1} | ${r.slug} | **${r.score}** | ${r.answer.points}/${POINTS.answer} | ${r.faq.points}/${POINTS.faq} (${r.faq.visible} vis., ${r.faq.schema} schéma) | ${r.sourced.points}/${POINTS.sourced} (${r.sourced.sourced}/${r.sourced.figures}) | ${r.passages.points}/${POINTS.passages} | ${r.actions.join(' ; ') || 'rien de prioritaire'} |`)
  return [
    '# Audit de citabilité des guides', '',
    `_Généré le ${generatedOn}. ${results.length} guides, score moyen ${average}/100. Heuristique sur le code source : elle mesure la structure, pas la justesse du contenu._`, '',
    `- Sans KeyAnswer : ${count((r) => !r.answer.label.startsWith('KeyAnswer'))}`,
    `- Sans FAQ visible suffisante : ${count((r) => r.faq.visible < MIN_FAQ_QUESTIONS)}`,
    `- FAQ_DATA absente ou trop courte : ${count((r) => r.faq.schema < MIN_FAQ_QUESTIONS)}`,
    `- Moins de ${TARGET_SOURCED_RATIO * 100} % des passages chiffrés sourcés : ${count((r) => r.sourced.ratio < TARGET_SOURCED_RATIO)}`, '',
    '| # | Guide | Score | Réponse | FAQ | Chiffres sourcés | Passages | À faire |',
    '|---|---|---|---|---|---|---|---|',
    ...rows, '',
  ].join('\n')
}

function main() {
  const { values } = parseArgs({ options: { out: { type: 'string' } } })
  const faqCounts = parseFaqCounts(readFileSync(join(GUIDES_DIR, 'faq-data.ts'), 'utf8'))
  const files = readdirSync(GUIDES_DIR).filter((file) => file.endsWith('.tsx'))
  const results = files.map((file) => {
    const source = readFileSync(join(GUIDES_DIR, file), 'utf8')
    const slug = source.match(/slug:\s*['"]([^'"]+)/)?.[1]
    return auditGuide(source, faqCounts[slug] ?? 0)
  }).sort((a, b) => a.score - b.score || a.slug.localeCompare(b.slug))
  const today = new Date().toISOString().slice(0, 10)
  const outDir = values.out ?? join(HERE, 'reports')
  const path = join(outDir, `citabilite-${today}.md`)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path, renderAudit(results, today))
  const average = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
  console.log(`${results.length} guides, score moyen ${average}/100. Rapport : ${path}`)
  console.log('10 guides à retravailler en priorité :')
  results.slice(0, 10).forEach((r, i) => console.log(`${i + 1}. ${r.score}/100  ${r.slug}`))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main()
  } catch (error) {
    console.error(`ERREUR : ${error.message}`)
    process.exitCode = 1
  }
}
