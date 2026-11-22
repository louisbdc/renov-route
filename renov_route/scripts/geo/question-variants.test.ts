import assert from 'node:assert/strict'
import test from 'node:test'
import FAQ_DATA from '../../src/lib/guides/faq-data'
import { VARIANTS_A_D } from '../../src/lib/guides/question-variants/a-d'
import { VARIANTS_E_N } from '../../src/lib/guides/question-variants/e-n'
import { VARIANTS_O_Z } from '../../src/lib/guides/question-variants/o-z'

const MAX_VARIANTS_PER_QUESTION = 12
const FILES = [VARIANTS_A_D, VARIANTS_E_N, VARIANTS_O_Z]
const normalize = (text: string): string =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const entries = FILES.flatMap(file =>
  Object.entries(file).flatMap(([slug, questions]) =>
    Object.entries(questions).map(([question, variants]) => ({ slug, question, variants })),
  ),
)

test('chaque variante se rattache à une question existante', () => {
  for (const { slug, question } of entries) {
    assert.ok(FAQ_DATA[slug]?.some(item => item.question === question), `${slug} : ${question}`)
  }
})

test('une formulation ne pointe que vers une seule réponse du site', () => {
  const owners = new Map<string, string>()
  for (const items of Object.values(FAQ_DATA)) {
    for (const item of items) owners.set(normalize(item.question), item.question)
  }
  const seen = new Set<string>()
  for (const { slug, question, variants } of entries) {
    for (const variant of variants) {
      const key = normalize(variant)
      assert.ok(!seen.has(key), `variante en double : ${variant}`)
      assert.ok(!owners.has(key), `variante identique à une question FAQ : ${slug} : ${variant}`)
      seen.add(key)
    }
    assert.ok(variants.length <= MAX_VARIANTS_PER_QUESTION, `trop de variantes : ${question}`)
  }
})

test('chaque variante est une vraie question', () => {
  for (const { variants } of entries) {
    for (const variant of variants) assert.match(variant, /\S.{8,}\?$/, variant)
  }
})
