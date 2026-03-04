import type { Metadata } from 'next'
import { guides } from '@/lib/guides'
import CONTENT_MAP from '@/lib/guides/content-map'
import FAQ_DATA from '@/lib/guides/faq-data'
import GuidePageLayout from '@/components/GuidePageLayout'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) return {}

  const url = `https://renov-route.com/guides/${guide.slug}/`

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
      publishedTime: guide.publishDate,
      modifiedTime: guide.updatedDate ?? guide.publishDate,
      images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) return notFound()

  const ContentComponent = CONTENT_MAP[slug]
  if (!ContentComponent) return notFound()

  const url = `https://renov-route.com/guides/${guide.slug}/`
  const faqItems = FAQ_DATA[slug] ?? []

  return (
    <>
      <ArticleSchema
        headline={guide.title}
        datePublished={guide.publishDate}
        dateModified={guide.updatedDate}
        description={guide.metaDescription}
        url={url}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://renov-route.com/' },
          { name: 'Guides', url: 'https://renov-route.com/guides/' },
          { name: guide.title, url },
        ]}
      />
      {faqItems.length > 0 && <FAQSchema items={faqItems} />}
      <GuidePageLayout guide={guide}>
        <ContentComponent />
      </GuidePageLayout>
    </>
  )
}
