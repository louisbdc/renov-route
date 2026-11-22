'use client'

interface FAQItem {
  question: string
  answer: string
  variants?: string[]
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export type { FAQItem }

export default function FAQSchema({ items }: FAQSchemaProps) {
  if (items.length === 0) return null

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      ...(item.variants?.length ? { alternateName: item.variants } : {}),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
     
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
