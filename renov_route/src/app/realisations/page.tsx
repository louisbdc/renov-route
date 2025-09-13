'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Hero from '@/components/realisations/Hero';
import Filters, { FilterState } from '@/components/realisations/Filters';
import CaseGrid from '@/components/realisations/CaseGrid';
import FeaturedCase from '@/components/realisations/FeaturedCase';
import CtaBand from '@/components/realisations/CtaBand';
import CaseModal from '@/components/realisations/CaseModal';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { caseStudies, CaseStudy } from '@/lib/data/case-studies';

function RealisationsContent() {
  const searchParams = useSearchParams();
  const { isSafari } = useSafariOptimization();
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    industries: [],
    years: [],
    search: ''
  });
  
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter case studies based on current filters
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      // Category filter - if categories are selected, case study must match one of them
      if (filters.categories.length > 0 && !filters.categories.includes(caseStudy.category)) {
        return false;
      }

      // Industry filter - if industries are selected, case study must match one of them
      if (filters.industries.length > 0 && !filters.industries.includes(caseStudy.industry)) {
        return false;
      }

      // Year filter - if years are selected, case study must match one of them
      if (filters.years.length > 0 && !filters.years.includes(caseStudy.year.toString())) {
        return false;
      }

      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = [
          caseStudy.title,
          caseStudy.client,
          caseStudy.industry,
          caseStudy.summary,
          ...caseStudy.stack
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(searchTerm)) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Get featured case study (first case)
  const featuredCase = caseStudies[2];

  const handleOpenModal = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  // Gérer l'ouverture automatique du modal basé sur le paramètre de requête
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const caseStudy = caseStudies.find(cs => cs.id === projectId);
      if (caseStudy) {
        setSelectedCase(caseStudy);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  return (
    <>
      <Head>
        <title>Nos Réalisations - Projets Traçage Marquage Routier | Renov Route</title>
        <meta name="description" content="Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 500+ projets réalisés avec succès en France." />
        <meta name="keywords" content="réalisations marquage routier, projets parking, portfolio traçage, exemples marquage, projets réussis, références clients, travaux réalisés, galerie projets, études de cas marquage" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Nos Réalisations - Projets Traçage Marquage Routier | Renov Route" />
        <meta property="og:description" content="Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 500+ projets réalisés." />
        <meta property="og:url" content="https://renov-route.com/realisations" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Nos Réalisations - Projets Traçage Marquage Routier | Renov Route" />
        <meta name="twitter:description" content="Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule." />
        <link rel="canonical" href="https://renov-route.com/realisations" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nos Réalisations - Projets Traçage Marquage Routier",
            "description": "Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 500+ projets réalisés avec succès.",
            "url": "https://renov-route.com/realisations",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Portfolio de réalisations Renov Route",
              "description": "Collection de projets de traçage marquage routier réalisés par Renov Route",
              "numberOfItems": "500+",
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
      </Head>
      <Layout>
      <SafariAnimationFix>
      {/* Hero Section */}
      <Hero isSafari={isSafari} />

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-16">
          <div className="container-custom">
            <FeaturedCase 
              caseStudy={featuredCase} 
              onOpenModal={handleOpenModal}
              isSafari={isSafari}
            />
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section id="case-studies" className="py-16">
        <div className="container-custom">
          <Filters onFilterChange={setFilters} />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="projects-grid" className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-h2 text-text-primary font-semibold mb-4">
              Tous nos projets
            </h2>
            <p className="text-text-secondary">
              {filteredCaseStudies.length} projet{filteredCaseStudies.length > 1 ? 's' : ''} trouvé{filteredCaseStudies.length > 1 ? 's' : ''}
            </p>
          </div>
          
          <CaseGrid 
            caseStudies={filteredCaseStudies} 
            onOpenModal={handleOpenModal}
            isSafari={isSafari}
          />
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />

      {/* Modal */}
      <CaseModal
        caseStudy={selectedCase}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      </SafariAnimationFix>
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
