#!/usr/bin/env node
// Usage :
//   node scripts/geo/analyze-answers.mjs init     crée le fichier de réponses à remplir
//   node scripts/geo/analyze-answers.mjs report   écrit scripts/geo/reports/geo-gap-AAAA-MM-JJ.md
// Options : --answers <fichier>  --out <dossier>  --engine <nom> (init)

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { analyze, promptKey, validateBrands } from './geo-gap.mjs'
import { renderReport } from './geo-report.mjs'
import { answersTemplate, parseAnswers, parseCsv } from './parse-answers.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const PROMPT_COLUMNS = ['prompt', 'categorie', 'keyword']

function loadPrompts() {
  const rows = parseCsv(readFileSync(join(HERE, 'data/prompts.csv'), 'utf8'))
  const missing = PROMPT_COLUMNS.filter((column) => !(column in (rows[0] ?? {})))
  if (missing.length) throw new Error(`prompts.csv : colonne(s) manquante(s) ${missing.join(', ')}`)
  const empty = rows.findIndex((row) => !row.prompt)
  if (empty >= 0) throw new Error(`prompts.csv : prompt vide à la ligne ${empty + 2}`)
  return rows
}

function init(answersPath, engine) {
  try {
    writeFileSync(answersPath, answersTemplate(loadPrompts(), engine), { flag: 'wx' })
  } catch (error) {
    if (error.code === 'EEXIST') throw new Error(`${answersPath} existe déjà : rien n'a été écrasé`)
    throw error
  }
  console.log(`Modèle créé : ${answersPath}`)
}

function report(answersPath, outDir) {
  const prompts = loadPrompts()
  const categories = new Map(prompts.map((p) => [promptKey(p.prompt), p.categorie]))
  const parsed = parseAnswers(readFileSync(answersPath, 'utf8'))
  if (!parsed.length) throw new Error(`Aucune réponse remplie dans ${answersPath}`)
  const unknown = parsed.filter((a) => !categories.has(promptKey(a.prompt)))
  if (unknown.length) console.warn(`${unknown.length} réponse(s) sur un prompt hors catalogue, comptée(s) sans catégorie.`)
  const answers = parsed.map((a) => ({ ...a, category: categories.get(promptKey(a.prompt)) ?? '' }))
  const { brands } = JSON.parse(readFileSync(join(HERE, 'data/brands.json'), 'utf8'))
  const summary = analyze(answers, validateBrands(brands))
  const today = new Date().toISOString().slice(0, 10)
  const path = join(outDir, `geo-gap-${today}.md`)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path, renderReport(summary, { generatedOn: today, totalPrompts: prompts.length }))
  console.log(`Rapport : ${path}`)
  console.log(`${summary.answers} réponse(s), ${summary.absentPrompts.length} prompt(s) sans ${summary.ownBrand}, ${summary.sources.length} domaine(s) source.`)
}

function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { answers: { type: 'string' }, out: { type: 'string' }, engine: { type: 'string' } },
  })
  const answersPath = values.answers ?? join(HERE, 'data/answers.md')
  const command = positionals[0]
  if (command === 'init') return init(answersPath, values.engine ?? 'chatgpt')
  if (command === 'report') return report(answersPath, values.out ?? join(HERE, 'reports'))
  throw new Error('Commande attendue : init ou report')
}

try {
  main()
} catch (error) {
  console.error(`ERREUR : ${error.message}`)
  process.exitCode = 1
}
