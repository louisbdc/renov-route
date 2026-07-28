import type { Guide } from './guides'
import { GUIDE_CATEGORIES } from './guides'

/**
 * Maillage interne des guides.
 *
 * Problème résolu : chaque guide affichait un index plat des 57 autres guides.
 * Sitewide, cela diluait le PageRank interne et brouillait le signal de
 * pertinence — plusieurs pages recevaient exactement les mêmes ancres pour un
 * même sujet, ce qui alimente la cannibalisation observée en Search Console
 * (« marquage au sol », « dimension place pmr », « norme signalétique
 * parking »… se disputent chacun 3 à 4 URL).
 *
 * Stratégie :
 *  1. un guide pilier par catégorie, désigné comme cible canonique du cluster ;
 *  2. des guides liés choisis par proximité lexicale réelle, pas par ordre
 *     d'insertion dans le tableau ;
 *  3. un index limité à la catégorie courante au lieu du catalogue complet.
 */

/**
 * Guide de référence de chaque cluster. Choisi sur la page qui capte déjà le
 * plus d'impressions du cluster en Search Console : concentrer les liens
 * internes vers elle plutôt que de les répartir renforce le signal.
 */
export const CATEGORY_PILLARS: Record<keyof typeof GUIDE_CATEGORIES, string> = {
  'marquage-parking': 'marquage-au-sol-signification-couleurs',
  'normes-pmr': 'normes-pmr-parking',
  'prix-tarifs': 'prix-marquage-sol-parking',
  'renovation-parking': 'cout-renovation-parking',
  'securite-parking': 'arceau-parking-types-prix',
  'nids-de-poule': 'enrobe-froid-vs-resine-nids-de-poule',
}

/** Mots vides français à ignorer dans le calcul de proximité. */
const STOP_WORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'a', 'au', 'aux',
  'en', 'sur', 'pour', 'par', 'avec', 'sans', 'dans', 'ce', 'ces', 'son', 'ses',
  'que', 'qui', 'quoi', 'tout', 'tous', 'guide', 'complet', 'tarifs', 'types',
  'quel', 'quelle', 'comment', 'pourquoi', 'est', 'sont', 'ne', 'pas', 'plus',
])

function tokenize(text: string): Set<string> {
  const normalized = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
  const tokens = normalized.split(/[\s-]+/).filter(t => t.length > 2 && !STOP_WORDS.has(t))
  return new Set(tokens)
}

/** Indice de Jaccard entre deux ensembles de tokens. */
function similarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0
  let intersection = 0
  for (const token of a) {
    if (b.has(token)) intersection++
  }
  const union = a.size + b.size - intersection
  return union === 0 ? 0 : intersection / union
}

function guideTokens(guide: Guide): Set<string> {
  return tokenize(`${guide.title} ${guide.slug} ${guide.excerpt}`)
}

/**
 * Guides liés, classés par pertinence réelle.
 *
 * Un guide de la même catégorie est privilégié (bonus), mais un guide d'une
 * autre catégorie lexicalement très proche peut le devancer — c'est ce qui
 * permet à « prix-tarifs » (une seule entrée) de rester relié au reste.
 */
export function getRelatedGuides(current: Guide, allGuides: Guide[], limit = 6): Guide[] {
  const currentTokens = guideTokens(current)
  const SAME_CATEGORY_BONUS = 0.15

  return allGuides
    .filter(g => g.slug !== current.slug)
    .map(guide => {
      const base = similarity(currentTokens, guideTokens(guide))
      const bonus = guide.category === current.category ? SAME_CATEGORY_BONUS : 0
      return { guide, score: base + bonus }
    })
    .sort((a, b) => b.score - a.score || a.guide.slug.localeCompare(b.guide.slug))
    .slice(0, limit)
    .map(entry => entry.guide)
}

/**
 * Guides de la même catégorie, pour l'index de bas de page.
 * Remplace l'ancien catalogue intégral : on passe de ~57 liens sortants par
 * guide à une dizaine, tous thématiquement cohérents.
 */
export function getCategorySiblings(current: Guide, allGuides: Guide[]): Guide[] {
  return allGuides
    .filter(g => g.slug !== current.slug && g.category === current.category)
    .sort((a, b) => a.title.localeCompare(b.title, 'fr'))
}

/**
 * Guide pilier du cluster, s'il diffère du guide courant.
 * Sert à poser un lien explicite « guide de référence » depuis chaque page
 * satellite vers la page que l'on veut voir ranker sur la requête générique.
 */
export function getClusterPillar(current: Guide, allGuides: Guide[]): Guide | undefined {
  const pillarSlug = CATEGORY_PILLARS[current.category]
  if (!pillarSlug || pillarSlug === current.slug) return undefined
  return allGuides.find(g => g.slug === pillarSlug)
}

/** Vrai si le guide est le pilier de sa catégorie. */
export function isPillar(guide: Guide): boolean {
  return CATEGORY_PILLARS[guide.category] === guide.slug
}
