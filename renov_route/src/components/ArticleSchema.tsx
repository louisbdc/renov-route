'use client'

interface ArticleSchemaProps {
  headline: string
  datePublished: string
  dateModified?: string
  description: string
  url: string
  wordCount?: number
  articleSection?: string
}

export default function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  description,
  url,
  wordCount,
  articleSection,
}: ArticleSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified: dateModified ?? datePublished,
    description,
    url,
    inLanguage: 'fr-FR',
    ...(wordCount ? { wordCount } : {}),
    ...(articleSection ? { articleSection } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.guide-article p:first-of-type'],
    },
    image: 'https://renov-route.com/assets/images/og-image.jpg',
    author: {
      '@type': 'Person',
      '@id': 'https://renov-route.com/#xavier-de-caumont',
      name: 'Xavier de Caumont',
      url: 'https://renov-route.com/qui-sommes-nous/',
      image: 'https://renov-route.com/assets/images/xavier-de-caumont.jpg',
      jobTitle: 'Fondateur de Rénov Route',
      description:
        'Fondateur de Rénov Route, 10+ ans d\'expertise en marquage au sol, traçage de parking et rénovation de chaussée. Directeur de la publication.',
      worksFor: { '@id': 'https://renov-route.com/#organization' },
      knowsAbout: [
        'Marquage routier',
        'Traçage parking',
        'Signalisation horizontale',
        'Norme NF EN 1436',
        'Mise en conformité PMR',
        'Résine polyuréthane',
      ],
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://renov-route.com/#organization',
      name: 'Rénov Route',
      logo: {
        '@type': 'ImageObject',
        url: 'https://renov-route.com/assets/logos/logo.avif',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
