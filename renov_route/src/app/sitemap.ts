import { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'
import { caseStudiesData } from '@/lib/data/case-studies-data'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renov-route.com'
  const currentDate = new Date().toISOString()

  const ogImage = { url: `${baseUrl}/assets/images/og-image.jpg` }

  const realisationImages = caseStudiesData.flatMap(cs =>
    cs.images.map(img => ({ url: `${baseUrl}${img}` }))
  )

  const guideEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [ogImage.url],
    },
    ...guides.map(g => ({
      url: `${baseUrl}/guides/${g.slug}`,
      lastModified: g.updatedDate ?? g.publishDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [ogImage.url, `${baseUrl}/assets/images/background_home_page.avif`],
    },
    {
      url: `${baseUrl}/competences`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/tracage-retracage-parking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/signalisation-verticale`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/resine-sol-marquage-interieur`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/reparation-nids-de-poule`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/accessoires-parking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/competences/conseil-expertise`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: realisationImages.map(img => img.url),
    },
    {
      url: `${baseUrl}/qui-sommes-nous`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [ogImage.url],
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...guideEntries,
    ...caseStudiesData.map(cs => ({
      url: `${baseUrl}/realisations/${cs.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      images: cs.images.map(img => `${baseUrl}${img}`),
    })),
  ]
}
