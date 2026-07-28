import { notFound } from 'next/navigation'
import LocalCityPage from '@/components/LocalCityPage'
import { CITIES, getCityBySlug, isIndexableCity, CONSOLIDATED_CITY_SLUGS } from '@/lib/data/cities'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const dynamicParams = false

const PREFIX = 'marquage-au-sol-'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Arrondissements de Lyon consolidés : 301 vers /marquage-au-sol-lyon/ (voir vercel.json).
// On ne génère plus ces pages (thin/doorway) pour stopper la cannibalisation du pilier Lyon.

export function generateStaticParams() {
  return CITIES
    .filter(c => !CONSOLIDATED_CITY_SLUGS.has(c.slug))
    .map(c => ({ slug: `${PREFIX}${c.slug}` }))
}

function resolveCity(slug: string) {
  if (!slug.startsWith(PREFIX)) return undefined
  const cityKey = slug.slice(PREFIX.length)
  return getCityBySlug(cityKey)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = resolveCity(slug)
  if (!city) return { title: 'Page introuvable' }

  const title = `Marquage au sol ${city.name} (${city.postalCode}) — Rénov'Route, expert depuis 2016`
  const description = `Entreprise de marquage au sol à ${city.name} : parking, voirie, industriel, PMR. Depuis 2016, 1 000+ chantiers. Devis gratuit en 48h. Certif NF EN 1436.`
  const url = `https://renov-route.com/${slug}/`

  // Les communes sans contenu différencié restent accessibles mais ne sont pas
  // indexées : elles n'apportent rien de plus que /marquage-au-sol-lyon/.
  const indexable = isIndexableCity(city)

  return {
    title,
    description,
    robots: indexable
      ? undefined
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://renov-route.com/assets/images/og-image.jpg'],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const city = resolveCity(slug)
  if (!city) notFound()
  return <LocalCityPage city={city} />
}
