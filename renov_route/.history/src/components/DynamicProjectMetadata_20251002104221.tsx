'use client';

import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';
import { caseStudies } from '@/lib/data/case-studies';

export default function DynamicProjectMetadata() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('project');
  
  if (!projectId) {
    return null;
  }

  const project = caseStudies.find(cs => cs.id === projectId);
  
  if (!project) {
    return null;
  }

  const pageTitle = `${project.title} - Réalisation Renov Route`;
  const pageDescription = `${project.summary} Découvrez ce projet de ${project.category} pour ${project.client} réalisé en ${project.year}.`;
  const canonicalUrl = `https://renov-route.com/realisations?project=${project.id}`;
  const imageUrl = project.thumbnail.startsWith('/') ? `https://renov-route.com${project.thumbnail}` : project.thumbnail;

  // Données structurées pour le projet
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary,
    "url": canonicalUrl,
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
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${project.stack.join(", ")}, ${project.category}, ${project.client}, marquage routier, traçage parking`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Renov Route" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Renov Route" />
        <meta property="article:published_time" content={`${project.year}-01-01T00:00:00Z`} />
        <meta property="article:section" content={project.category} />
        <meta property="article:tag" content={project.stack.join(",")} />
      </Head>
      
      <Script
        id="project-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
