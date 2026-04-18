import type { Metadata } from 'next'
import { guides } from '@/lib/guides'
import CONTENT_MAP from '@/lib/guides/content-map'
import GuidePageLayout from '@/components/GuidePageLayout'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import HowToSchema from '@/components/HowToSchema'
import { GUIDE_CATEGORIES } from '@/lib/guides'
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
  const published = guide.publishDate
  const modified = guide.updatedDate ?? guide.publishDate
  const section = GUIDE_CATEGORIES[guide.category]

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    authors: [{ name: 'Xavier de Caumont', url: 'https://renov-route.com/qui-sommes-nous/' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
      locale: 'fr_FR',
      siteName: 'Rénov Route',
      publishedTime: published,
      modifiedTime: modified,
      authors: ['https://renov-route.com/qui-sommes-nous/'],
      section,
      images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
    other: {
      'article:published_time': published,
      'article:modified_time': modified,
      'article:author': 'Xavier de Caumont',
      'article:section': section,
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
  const section = GUIDE_CATEGORIES[guide.category]

  return (
    <>
      <ArticleSchema
        headline={guide.title}
        datePublished={guide.publishDate}
        dateModified={guide.updatedDate}
        description={guide.metaDescription}
        url={url}
        articleSection={section}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://renov-route.com/' },
          { name: 'Guides', url: 'https://renov-route.com/guides/' },
          { name: guide.title, url },
        ]}
      />
      {guide.howTo && (
        <HowToSchema
          name={guide.howTo.name}
          description={guide.howTo.description}
          url={url}
          totalTime={guide.howTo.totalTime}
          steps={guide.howTo.steps}
        />
      )}
      <GuidePageLayout guide={guide}>
        <ContentComponent />
      </GuidePageLayout>
    </>
  )
}
