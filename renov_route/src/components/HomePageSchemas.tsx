'use client'

interface FAQItem {
  question: string
  answer: string
}

interface HomePageSchemasProps {
  faqItems: FAQItem[]
}

export default function HomePageSchemas({ faqItems }: HomePageSchemasProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          })
        }}
      />
    </>
  )
}
