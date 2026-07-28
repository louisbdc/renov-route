/**
 * Avis clients — source unique.
 *
 * Ils étaient dupliqués entre l'affichage (app/page.tsx) et le JSON-LD
 * (StructuredData.tsx), avec un `reviewCount` à maintenir à la main : toute
 * modification d'un côté désynchronisait l'autre.
 *
 * N'ajouter ici que des avis réellement reçus, avec leur texte exact. Un
 * témoignage inventé est un faux avis : c'est une pratique trompeuse, et
 * sanctionnée (art. L121-2 du code de la consommation).
 *
 * Note sur le référencement : depuis 2019, Google n'affiche pas d'étoiles pour
 * les avis auto-hébergés concernant sa propre entité (« self-serving reviews »).
 * Ce balisage sert la compréhension de l'entité et la preuve sociale, pas les
 * rich snippets — les étoiles visibles en SERP viennent de la fiche Business
 * Profile.
 */

export interface CustomerReview {
  /** Nom de l'auteur tel qu'il apparaît sur l'avis d'origine. */
  author: string
  /** Texte exact de l'avis, sans reformulation. */
  text: string
  /** Note sur 5. */
  rating: number
  /** Date de publication au format ISO (YYYY-MM-DD). */
  datePublished: string
}

/** Fiche Google Business Profile — destination des liens « Avis Google ». */
export const GOOGLE_BUSINESS_PROFILE_URL = 'https://share.google/EtiXRDpgqMZlrsGzF'

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    author: 'Bertrand de LONGEVIALLE',
    text: 'Compétence et réactivité ! je recommande !',
    rating: 5,
    datePublished: '2018-01-01',
  },
  {
    author: 'Estelle Pons',
    text: "Une solution simple, rapide et peu onéreuse pour reboucher des trous en formation sur les routes et parking. Un bon plan pour les copropriétés",
    rating: 5,
    datePublished: '2018-01-01',
  },
]

/** Nombre d'avis, dérivé — plus de `reviewCount` à maintenir à la main. */
export const REVIEW_COUNT = CUSTOMER_REVIEWS.length

/** Note moyenne, arrondie au dixième. */
export const AVERAGE_RATING =
  Math.round(
    (CUSTOMER_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / CUSTOMER_REVIEWS.length) * 10
  ) / 10

/** Avis au format schema.org Review, pour le JSON-LD. */
export const reviewsJsonLd = CUSTOMER_REVIEWS.map(review => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: review.author },
  reviewRating: { '@type': 'Rating', ratingValue: review.rating, bestRating: 5 },
  datePublished: review.datePublished,
  reviewBody: review.text,
}))
