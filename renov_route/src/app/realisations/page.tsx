import { Suspense } from 'react'
import Layout from '@/components/Layout'
import ClientRealisationsContent from '@/components/realisations/ClientRealisationsContent'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Script from 'next/script'

export default function RealisationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://renov-route.com/" },
        { name: "Réalisations", url: "https://renov-route.com/realisations/" }
      ]} />
      <Script
        id="ldjson-realisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nos Réalisations - Projets Traçage Marquage Routier",
            "description": "Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 1000+ projets réalisés avec succès.",
            "url": "https://renov-route.com/realisations",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Portfolio de réalisations Renov Route",
              "description": "Collection de projets de traçage marquage routier réalisés par Renov Route",
              "numberOfItems": "1000+",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Projets de traçage parking",
                    "description": "Réalisations de marquage et retraçage de parkings pour diverses entreprises"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Marquage routier",
                    "description": "Projets de signalisation horizontale et marquage routier"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Réparation nids de poule",
                    "description": "Interventions de réparation de nids de poule avec enrobé résine"
                  }
                }
              ]
            }
          })
        }}
      />
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen bg-[#141922] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-500 mx-auto mb-4" />
              <p className="text-gray-400">Chargement des réalisations...</p>
            </div>
          </div>
        }>
          <ClientRealisationsContent />
        </Suspense>
      </Layout>
    </>
  )
}
