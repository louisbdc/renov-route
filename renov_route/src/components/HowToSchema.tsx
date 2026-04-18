'use client'

export interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  url: string
  totalTime?: string
  estimatedCost?: { value: string; currency?: string }
  supply?: string[]
  tool?: string[]
  steps: HowToStep[]
}

export default function HowToSchema({
  name,
  description,
  url,
  totalTime,
  estimatedCost,
  supply,
  tool,
  steps,
}: HowToSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: 'fr-FR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(totalTime ? { totalTime } : {}),
    ...(estimatedCost
      ? {
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: estimatedCost.currency ?? 'EUR',
            value: estimatedCost.value,
          },
        }
      : {}),
    ...(supply && supply.length
      ? { supply: supply.map(s => ({ '@type': 'HowToSupply', name: s })) }
      : {}),
    ...(tool && tool.length
      ? { tool: tool.map(t => ({ '@type': 'HowToTool', name: t })) }
      : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
      ...(s.image ? { image: s.image } : {}),
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
