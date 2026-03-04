import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { caseStudies, CaseStudy } from '@/lib/data/case-studies'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ProjectPageLayout from '@/components/realisations/ProjectPageLayout'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = caseStudies.find(cs => cs.slug === slug)
  if (!project) return {}

  const url = `https://renov-route.com/realisations/${project.slug}/`
  const imageUrl = project.thumbnail.startsWith('/')
    ? `https://renov-route.com${project.thumbnail}`
    : project.thumbnail

  return {
    title: `${project.title} - Réalisation Renov Route`,
    description: `${project.summary} Projet de ${project.category} pour ${project.client} réalisé en ${project.year}.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} - Réalisation Renov Route`,
      description: project.summary,
      url,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
    },
  }
}

function getRelatedProjects(project: CaseStudy): CaseStudy[] {
  return caseStudies
    .filter(cs => cs.id !== project.id && cs.category === project.category)
    .slice(0, 3)
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = caseStudies.find(cs => cs.slug === slug)
  if (!project) return notFound()

  const relatedProjects = getRelatedProjects(project)
  const url = `https://renov-route.com/realisations/${project.slug}/`
  const imageUrl = project.thumbnail.startsWith('/')
    ? `https://renov-route.com${project.thumbnail}`
    : project.thumbnail

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary,
    "url": url,
    "image": imageUrl,
    "dateCreated": `${project.year}-01-01`,
    "creator": {
      "@type": "Organization",
      "name": "Renov Route",
      "url": "https://renov-route.com"
    },
    "about": {
      "@type": "Thing",
      "name": "Marquage routier et traçage parking"
    },
    "keywords": project.stack.join(", "),
    "genre": project.category,
    "inLanguage": "fr-FR"
  }

  return (
    <>
      <Script
        id="project-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://renov-route.com/' },
          { name: 'Réalisations', url: 'https://renov-route.com/realisations/' },
          { name: project.title, url },
        ]}
      />
      <ProjectPageLayout project={project} relatedProjects={relatedProjects} />
    </>
  )
}
