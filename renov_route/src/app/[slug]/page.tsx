import { notFound } from 'next/navigation'
import LocalCityPage from '@/components/LocalCityPage'
import { CITIES, getCityBySlug } from '@/lib/data/cities'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const dynamicParams = false

const PREFIX = 'marquage-au-sol-'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return CITIES.map(c => ({ slug: `${PREFIX}${c.slug}` }))
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

  const title = `Marquage au sol ${city.name} (${city.postalCode}) — Renov Route, expert depuis 2014`
  const description = `Entreprise de marquage au sol à ${city.name} : parking, voirie, industriel, PMR. Depuis 2014, 1 000+ chantiers. Devis gratuit sous 24h. Certif NF EN 1436.`
  const url = `https://renov-route.com/${slug}/`

  return {
    title,
    description,
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
