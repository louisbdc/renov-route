import Script from 'next/script'

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
    author: {
      '@type': 'Organization',
      name: 'Rénov Route',
      url: 'https://renov-route.com',
    },
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
    <Script
      id={`article-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
