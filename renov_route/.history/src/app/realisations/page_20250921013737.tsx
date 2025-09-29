import { Suspense } from 'react';
import Layout from '@/components/Layout';
import ClientRealisationsContent from '@/components/realisations/ClientRealisationsContent';
import ClientSEOHead from '@/components/ClientSEOHead';
import { caseStudies } from '@/lib/data/case-studies';

export default function RealisationsPage() {
  return (
    <>
      <ClientSEOHead 
        title="Nos Réalisations - Projets Traçage Marquage Routier | Renov Route"
        description="Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 1000+ projets réalisés avec succès."
        keywords="réalisations marquage routier, portfolio projets parking, projets traçage parking, réalisations réparation nids poule, projets Carrefour, projets Lidl, projets Intermarché, portfolio Renov Route"
        canonicalUrl="https://renov-route.com/realisations"
      />
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className="glassmorphism-card p-8 rounded-[2rem] border border-white/20 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white text-lg">Chargement des réalisations...</p>
            </div>
          </div>
        }>
          <ClientRealisationsContent />
        </Suspense>
      </Layout>
    </>
  );
}

export default function RealisationsPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <RealisationsContent />
    </Suspense>
  );
}
