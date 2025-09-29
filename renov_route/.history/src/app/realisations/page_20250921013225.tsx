import Layout from '@/components/Layout';
import Hero from '@/components/realisations/Hero';
import CtaBand from '@/components/realisations/CtaBand';
import { caseStudies } from '@/lib/data/case-studies';
import ClientSEOHead from '@/components/ClientSEOHead';
import ClientRealisationsContent from '@/components/realisations/ClientRealisationsContent';

// Contenu statique pour le SEO - sera pré-généré
function StaticContent() {
  const featuredCase = caseStudies[2];
  
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
        {/* Hero Section - Contenu statique */}
        <Hero isSafari={false} />

        {/* Featured Case Study - Contenu statique avec glassmorphism */}
        {featuredCase && (
          <section className="py-16">
            <div className="container-custom">
              <div className="glassmorphism-card p-0 overflow-hidden relative rounded-[2rem] border border-white/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={featuredCase.images[0]}
                      alt={featuredCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-md">
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {featuredCase.category}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {featuredCase.title}
                    </h2>
                    <p className="text-lg text-gray-200 mb-6">
                      {featuredCase.summary}
                    </p>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span className="font-semibold">{featuredCase.client}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredCase.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section projets - Contenu statique pour le SEO */}
        <section id="projects-grid" className="py-16">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-h2 text-text-primary font-semibold mb-4">
                Tous nos projets
              </h2>
              <p className="text-text-secondary">
                Découvrez notre portfolio de {caseStudies.length} projets de traçage marquage routier réalisés avec succès
              </p>
            </div>
            
            {/* Grille statique des premiers projets pour le SEO */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 6).map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={caseStudy.images[0]}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {caseStudy.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-semibold">{caseStudy.client}</span>
                      <span>{caseStudy.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <CtaBand />
      </Layout>
    </>
  );
}

// Page principale - Server Component (rendu statique)
export default function RealisationsPage() {
  return (
    <>
      <StaticContent />
      <ClientRealisationsContent />
    </>
  );
}
