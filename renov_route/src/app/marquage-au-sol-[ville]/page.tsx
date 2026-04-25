import { notFound } from 'next/navigation'
import LocalCityPage from '@/components/LocalCityPage'
import { CITIES, getCityBySlug } from '@/lib/data/cities'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ ville: string }>
}

export function generateStaticParams() {
  return CITIES.map(c => ({ ville: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville } = await params
  const city = getCityBySlug(ville)
  if (!city) return { title: 'Page introuvable' }

  const title = `Marquage au sol ${city.name} (${city.postalCode}) — Renov Route, expert depuis 2014`
  const description = `Entreprise de marquage au sol à ${city.name} : parking, voirie, industriel, PMR. Depuis 2014, 1 000+ chantiers. Devis gratuit sous 24h. Certif NF EN 1436.`
  const url = `https://renov-route.com/marquage-au-sol-${city.slug}/`

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
  const { ville } = await params
  const city = getCityBySlug(ville)
  if (!city) notFound()
  return <LocalCityPage city={city} />
}
