'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';
import Hero from '@/components/realisations/Hero';
import Filters, { FilterState } from '@/components/realisations/Filters';
import CaseGrid from '@/components/realisations/CaseGrid';
import FeaturedCase from '@/components/realisations/FeaturedCase';
import CtaBand from '@/components/realisations/CtaBand';
import CaseModal from '@/components/realisations/CaseModal';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { caseStudies, CaseStudy } from '@/lib/data/case-studies';
import ClientSEOHead from '@/components/ClientSEOHead';

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
  const [visibleProjects, setVisibleProjects] = useState(9);

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

  // Get visible projects based on current filter and pagination
  const visibleCaseStudies = useMemo(() => {
    return filteredCaseStudies.slice(0, visibleProjects);
  }, [filteredCaseStudies, visibleProjects]);

  // Check if there are more projects to show
  const hasMoreProjects = visibleProjects < filteredCaseStudies.length;

  // Reset visible projects when filters change
  useEffect(() => {
    setVisibleProjects(9);
  }, [filters]);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 9, filteredCaseStudies.length));
  };

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
      <SEOHead 
        title="Nos Réalisations - Projets Traçage Marquage Routier | Renov Route"
        description="Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 1000+ projets réalisés avec succès."
        keywords="réalisations marquage routier, portfolio projets parking, projets traçage parking, réalisations réparation nids poule, projets Carrefour, projets Lidl, projets Intermarché, portfolio Renov Route"
        pageKey="realisations"
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
              Affichage de {visibleCaseStudies.length} sur {filteredCaseStudies.length} projet{filteredCaseStudies.length > 1 ? 's' : ''} trouvé{filteredCaseStudies.length > 1 ? 's' : ''}
            </p>
          </div>
          
          <CaseGrid 
            caseStudies={visibleCaseStudies} 
            onOpenModal={handleOpenModal}
            isSafari={isSafari}
          />

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 backdrop-blur-sm border border-white/20 text-lg"
              >
                <span className="relative z-10 flex items-center">
                  Découvrir plus de projets
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}
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
