import { Suspense } from 'react'
import Layout from '@/components/Layout'
import ClientRealisationsContent from '@/components/realisations/ClientRealisationsContent'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Script from 'next/script'
import { caseStudies } from '@/lib/data/case-studies'

const BASE_URL = 'https://renov-route.com'

export default function RealisationsPage() {
  const itemListElement = caseStudies.map((study, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/realisations/${study.slug}/#project`,
      name: study.title,
      description: study.summary,
      url: `${BASE_URL}/realisations/${study.slug}/`,
      image: `${BASE_URL}${study.thumbnail}`,
      dateCreated: `${study.year}-01-01`,
      about: study.industry,
      keywords: study.stack.join(', '),
      creator: { '@id': `${BASE_URL}/#organization` },
      provider: { '@id': `${BASE_URL}/#organization` },
      locationCreated: study.client,
    },
  }))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: `${BASE_URL}/` },
          { name: 'Réalisations', url: `${BASE_URL}/realisations/` },
        ]}
      />
      <Script
        id="ldjson-realisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': `${BASE_URL}/realisations/#collection`,
            name: 'Réalisations Rénov Route — Projets traçage, marquage et rénovation parking',
            description:
              'Portfolio de projets Rénov Route : parkings de grande distribution, sites industriels, écoles, collectivités. Clients : Carrefour, Lidl, Intermarché, McDonald\'s, EM Lyon, Armée de Terre et plus.',
            url: `${BASE_URL}/realisations/`,
            inLanguage: 'fr-FR',
            isPartOf: { '@id': `${BASE_URL}/#website` },
            about: { '@id': `${BASE_URL}/#organization` },
            mainEntity: {
              '@type': 'ItemList',
              name: 'Portfolio Rénov Route',
              description: '12 réalisations sélectionnées parmi plus de 1 000 projets réalisés depuis 2014',
              numberOfItems: caseStudies.length,
              itemListOrder: 'https://schema.org/ItemListOrderDescending',
              itemListElement,
            },
          }),
        }}
      />
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#0F172A] border-t-transparent mx-auto mb-4" />
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Chargement des réalisations</p>
              </div>
            </div>
          }
        >
          <ClientRealisationsContent />
        </Suspense>
      </Layout>
    </>
  )
}
