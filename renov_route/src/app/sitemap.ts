import { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'
import { caseStudiesData } from '@/lib/data/case-studies-data'
import { CITIES } from '@/lib/data/cities'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renov-route.com'
  const currentDate = new Date().toISOString()
  const lastModifiedDates: Record<string, string> = {
    '/': '2026-03-05',
    '/marquage-au-sol-lyon': '2026-04-27',
    '/competences': '2026-03-01',
    '/competences/tracage-retracage-parking': '2026-02-15',
    '/competences/signalisation-verticale': '2026-02-15',
    '/competences/resine-sol-marquage-interieur': '2026-02-15',
    '/competences/reparation-nids-de-poule': '2026-02-15',
    '/competences/accessoires-parking': '2026-02-15',
    '/competences/conseil-expertise': '2026-02-15',
    '/realisations': '2026-02-20',
    '/qui-sommes-nous': '2026-01-15',
    '/devis': '2026-01-15',
    '/faq': '2026-02-01',
    '/mentions-legales': '2025-06-01',
    '/privacy-policy': '2025-06-01',
    '/guides': '2026-03-01',
  }
  const getLastMod = (path: string) => lastModifiedDates[path] || currentDate

  const ogImage = { url: `${baseUrl}/assets/images/og-image.jpg` }

  const realisationImages = caseStudiesData.flatMap(cs =>
    cs.images.map(img => ({ url: `${baseUrl}${img}` }))
  )

  const guideEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides/`,
      lastModified: getLastMod('/guides'),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [ogImage.url],
    },
    ...guides.map(g => ({
      url: `${baseUrl}/guides/${g.slug}/`,
      lastModified: g.updatedDate ?? g.publishDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    {
      url: `${baseUrl}/`,
      lastModified: getLastMod('/'),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [ogImage.url, `${baseUrl}/assets/images/background_home_page.avif`],
    },
    {
      url: `${baseUrl}/marquage-au-sol-lyon/`,
      lastModified: getLastMod('/marquage-au-sol-lyon'),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/`,
      lastModified: getLastMod('/competences'),
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/tracage-retracage-parking/`,
      lastModified: getLastMod('/competences/tracage-retracage-parking'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/signalisation-verticale/`,
      lastModified: getLastMod('/competences/signalisation-verticale'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/résine-sol-marquage-intérieur/`,
      lastModified: getLastMod('/competences/resine-sol-marquage-interieur'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/reparation-nids-de-poule/`,
      lastModified: getLastMod('/competences/reparation-nids-de-poule'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/accessoires-parking/`,
      lastModified: getLastMod('/competences/accessoires-parking'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/conseil-expertise/`,
      lastModified: getLastMod('/competences/conseil-expertise'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/realisations/`,
      lastModified: getLastMod('/realisations'),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: realisationImages.map(img => img.url),
    },
    {
      url: `${baseUrl}/qui-sommes-nous/`,
      lastModified: getLastMod('/qui-sommes-nous'),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/devis/`,
      lastModified: getLastMod('/devis'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: getLastMod('/faq'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/mentions-legales/`,
      lastModified: getLastMod('/mentions-legales'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: getLastMod('/privacy-policy'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...guideEntries,
    ...caseStudiesData.map(cs => ({
      url: `${baseUrl}/realisations/${cs.slug}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      images: cs.images.map(img => `${baseUrl}${img}`),
    })),
    ...CITIES.map(c => ({
      url: `${baseUrl}/marquage-au-sol-${c.slug}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: c.distanceFromTassin <= 10 ? 0.85 : 0.7,
      images: [ogImage.url],
    })),
  ]
}
