export interface Guide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishDate: string
  updatedDate?: string
  category: keyof typeof GUIDE_CATEGORIES
  readingTime: number
  excerpt: string
}

export const GUIDE_CATEGORIES = {
  'renovation-parking': 'Rénovation de parking',
  'prix-tarifs': 'Prix & tarifs',
  'normes-pmr': 'Normes PMR',
  'nids-de-poule': 'Nids de poule',
  'marquage-parking': 'Marquage de parking',
  'securite-parking': 'Sécurité & équipements',
} as const

export { default as guides } from './guides/index'
