'use client'

interface ArticleSchemaProps {
  headline: string
  datePublished: string
  dateModified?: string
  description: string
  url: string
}

export default function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  description,
  url,
}: ArticleSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified: dateModified ?? datePublished,
    description,
    url,
    author: [
      {
        '@type': 'Person',
        name: 'Xavier de Caumont',
        url: 'https://renov-route.com/qui-sommes-nous/',
        jobTitle: 'Fondateur de Rénov Route',
      },
      {
        '@type': 'Organization',
        name: 'Rénov Route',
        url: 'https://renov-route.com',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Rénov Route',
      url: 'https://renov-route.com',
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
      id={`article-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
