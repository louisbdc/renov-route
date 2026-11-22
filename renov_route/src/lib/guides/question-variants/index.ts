import type { FAQItem } from '@/components/FAQSchema'
import FAQ_DATA from '../faq-data'
import { VARIANTS_A_D } from './a-d'
import { VARIANTS_E_N } from './e-n'
import { VARIANTS_O_Z } from './o-z'
import type { QuestionVariantsBySlug } from './types'

export const QUESTION_VARIANTS: QuestionVariantsBySlug = {
  ...VARIANTS_A_D,
  ...VARIANTS_E_N,
  ...VARIANTS_O_Z,
}

export function getGuideFaqItems(slug: string): FAQItem[] {
  return (FAQ_DATA[slug] ?? []).map(item => ({
    ...item,
    variants: QUESTION_VARIANTS[slug]?.[item.question],
  }))
}
