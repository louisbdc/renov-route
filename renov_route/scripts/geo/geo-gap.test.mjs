// Lancer : node --test scripts/geo/geo-gap.test.mjs
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { auditGuide, jsxToText, parseFaqCounts } from './audit-citability.mjs'
import { analyze, firstMention, fold } from './geo-gap.mjs'
import { renderReport } from './geo-report.mjs'
import { answersTemplate, extractCitations, parseAnswers, parseCsv, rootDomain } from './parse-answers.mjs'

const OWN = { name: 'Rénov Route', kind: 'own', domains: ['renov-route.com'], aliases: ['Rénov Route', 'renovroute'] }
const DIRECT = { name: 'Traceur Alpha', kind: 'direct', domains: ['traceur-alpha.fr'], aliases: ['Traceur Alpha'] }
const MARKET = { name: 'Signal Beta', kind: 'market', domains: ['signal-beta.com'], aliases: ['Signal Beta'] }
const BRANDS = [OWN, DIRECT, MARKET]

const FIXTURE = `# commentaire ignoré
=== Quelle entreprise de marquage à Lyon ?
moteur: chatgpt
date: 2026-11-22
---
Je conseille Traceur Alpha puis Signal Beta.

Sources :
- [Annuaire](https://www.pagesjaunes.fr/a?utm_source=chatgpt.com)
- https://traceur-alpha.fr/contact

=== Quel prix pour tracer 50 places ?
moteur: chatgpt
---
Comptez 3 000 €, voir pagesjaunes.fr et https://www.legifrance.gouv.fr/loda/id/1.

=== Qui peut refaire mon parking ?
moteur: chatgpt
---
Rénov'Route intervient à Lyon, comme Signal Beta.
https://renov-route.com/guides/

=== Prompt laissé vide
moteur: chatgpt
date:
---

=== Qu'est-ce que Rénov Route ?
moteur: chatgpt
---
Rénov Route est une entreprise de marquage.
`

const CATEGORY = { "Qu'est-ce que Rénov Route ?": 'marque' }
const answers = () => parseAnswers(FIXTURE).map((a) => ({ ...a, category: CATEGORY[a.prompt] ?? 'recommandation' }))

test('fold garde la longueur pour que les offsets restent valables', () => {
  const text = 'Rénov’Route-Élise'
  assert.equal(fold(text).length, text.length)
  assert.equal(fold(text), 'renov route elise')
})

test('la mention ignore casse, accents et apostrophe, et exige des frontières de mot', () => {
  assert.equal(firstMention("Chez RENOV'ROUTE", OWN), 5)
  assert.equal(firstMention('Une rénovroutement', OWN), null)
})

test('une URL est une citation, pas une mention', () => {
  const { citations, blanked } = extractCitations('Voir https://renov-route.com/a?utm_source=x.')
  assert.equal(citations[0].url, 'https://renov-route.com/a')
  assert.equal(firstMention(blanked, OWN), null)
})

test('rootDomain conserve les domaines .gouv.fr', () => {
  assert.equal(rootDomain('www.legifrance.gouv.fr'), 'legifrance.gouv.fr')
  assert.equal(rootDomain('blog.exemple.fr'), 'exemple.fr')
})

test('parseCsv gère les virgules et guillemets', () => {
  const rows = parseCsv('prompt,categorie,keyword\n"Bonjour, ""toi"" ?",prix,k\n')
  assert.deepEqual(rows, [{ prompt: 'Bonjour, "toi" ?', categorie: 'prix', keyword: 'k' }])
})

test('parseAnswers ignore les blocs vides et refuse un bloc sans séparateur', () => {
  assert.equal(parseAnswers(FIXTURE).length, 4)
  assert.throws(() => parseAnswers('=== Question\nréponse'), /séparateur/)
})

test('le modèle généré se relit sans réponse', () => {
  assert.deepEqual(parseAnswers(answersTemplate([{ prompt: 'Une question ?' }])), [])
})

test('part de voix : les prompts de marque sont exclus', () => {
  const summary = analyze(answers(), BRANDS)
  const own = summary.shares.find((s) => s.brand === OWN.name)
  const market = summary.shares.find((s) => s.brand === MARKET.name)
  assert.equal(summary.trackedAnswers, 3)
  assert.equal(summary.witnesses.length, 1)
  assert.deepEqual([own.present, own.answers, own.cited], [1, 3, 1])
  assert.equal(market.present, 2)
  assert.equal(market.share, 0.5)
  assert.equal(market.avgRank, 2) // deuxième marque nommée dans ses deux réponses
})

test('prompts absents : triés par score de concurrence', () => {
  const { absentPrompts } = analyze(answers(), BRANDS)
  assert.deepEqual(absentPrompts.map((p) => [p.prompt, p.score]), [
    ['Quelle entreprise de marquage à Lyon ?', 3],
    ['Quel prix pour tracer 50 places ?', 0],
  ])
})

test('un prompt présent sur un seul tirage n\'est pas absent', () => {
  const base = { prompt: 'Q', engine: 'chatgpt', category: 'prix', citations: [] }
  const { absentPrompts } = analyze([{ ...base, text: 'rien' }, { ...base, engine: 'perplexity', text: 'Rénov Route' }], BRANDS)
  assert.deepEqual(absentPrompts, [])
})

test('sources : réponses sans la marque, sites de marques exclus', () => {
  const { sources } = analyze(answers(), BRANDS)
  assert.equal(sources[0].domain, 'pagesjaunes.fr')
  assert.equal(sources[0].answers, 2)
  assert.equal(sources[0].type, 'annuaire')
  assert.equal(sources.find((s) => s.domain === 'legifrance.gouv.fr').type, 'référence')
  assert.ok(!sources.some((s) => ['traceur-alpha.fr', 'renov-route.com'].includes(s.domain)))
})

test('analyze refuse une config sans marque propre', () => {
  assert.throws(() => analyze(answers(), [DIRECT]), /own/)
})

test('le rapport contient toutes les sections', () => {
  const body = renderReport(analyze(answers(), BRANDS), { generatedOn: '2026-11-22', totalPrompts: 100 })
  for (const heading of ['## En bref', '## 1. Part de voix', '## 2. Prompts', '## 3. Domaines', '## 4. Où', '## 5. Prompts de marque', '## Limites']) {
    assert.ok(body.includes(heading), heading)
  }
})

const guide = (intro, rest = '') => `export const meta = { slug: 'g' }
export default function Content() { return (<>${intro}<h2>Partie</h2>${rest}</>) }`
const ANSWER_40 = Array.from({ length: 40 }, () => 'mot').join(' ')

test('audit : KeyAnswer de bonne longueur et FAQ complète marquent tous leurs points', () => {
  const faq = '<h2>FAQ : tracer</h2><h3>a</h3><p>b</p><h3>c</h3><p>d</p><h3>e</h3><p>f</p>'
  const result = auditGuide(guide(`<KeyAnswer question="q"><p>${ANSWER_40}</p></KeyAnswer>`, faq), 3)
  assert.equal(result.answer.points, 35)
  assert.equal(result.faq.points, 20)
})

test('audit : sans réponse directe ni FAQ, les actions le disent', () => {
  const result = auditGuide(guide('<p>Une introduction sans aucun chiffre.</p>'))
  assert.equal(result.answer.points, 0)
  assert.ok(result.actions.includes('ajouter un KeyAnswer chiffré'))
  assert.ok(result.actions.includes('ajouter une FAQ visible'))
})

test('audit : un chiffre avec référence officielle compte comme sourcé', () => {
  const result = auditGuide(guide('<p>x</p>', "<p>La largeur est de 3,30 m selon l&apos;arrêté du 8 décembre 2014.</p><p>Comptez 12 € le mètre.</p>"))
  assert.deepEqual([result.sourced.figures, result.sourced.sourced], [2, 1])
})

test('audit : « selon le support » ne compte pas comme une source', () => {
  const result = auditGuide(guide('<p>x</p>', '<p>Comptez 8 à 15 €/m² selon le support.</p>'))
  assert.deepEqual([result.sourced.figures, result.sourced.sourced], [1, 0])
})

test('jsxToText et parseFaqCounts', () => {
  assert.equal(jsxToText("<p>L&apos;été{' '}<strong>chaud</strong></p>"), "L'été chaud")
  assert.deepEqual(parseFaqCounts("{\n  'a-b': [\n { question: 'x' }, { question: 'y' },\n ],\n  'c': [\n { question: 'z' },\n ],\n}"), { 'a-b': 2, c: 1 })
})
