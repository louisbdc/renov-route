'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import Hero from '@/components/realisations/Hero'
import Filters, { FilterState } from '@/components/realisations/Filters'
import CaseGrid from '@/components/realisations/CaseGrid'
import FeaturedCase from '@/components/realisations/FeaturedCase'
import CtaBand from '@/components/realisations/CtaBand'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { caseStudies } from '@/lib/data/case-studies'

function RealisationsContent() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    industries: [],
    years: [],
    search: ''
  })

  const [visibleProjects, setVisibleProjects] = useState(9)

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      if (filters.categories.length > 0 && !filters.categories.includes(caseStudy.category)) {
        return false
      }
      if (filters.industries.length > 0 && !filters.industries.includes(caseStudy.industry)) {
        return false
      }
      if (filters.years.length > 0 && !filters.years.includes(caseStudy.year.toString())) {
        return false
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const searchableText = [
          caseStudy.title,
          caseStudy.client,
          caseStudy.industry,
          caseStudy.summary,
          ...caseStudy.stack
        ].join(' ').toLowerCase()
        if (!searchableText.includes(searchTerm)) {
          return false
        }
      }
      return true
    })
  }, [filters])

  const featuredCase = caseStudies[0]

  const visibleCaseStudies = useMemo(() => {
    return filteredCaseStudies.slice(0, visibleProjects)
  }, [filteredCaseStudies, visibleProjects])

  const hasMoreProjects = visibleProjects < filteredCaseStudies.length

  useEffect(() => {
    setVisibleProjects(9)
  }, [filters])

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 9, filteredCaseStudies.length))
  }

  return (
    <SafariAnimationFix>
      {/* Hero Section */}
      <Hero />

      {/* Filters Section */}
      <section id="case-studies" className="py-12">
        <div className="container-custom">
          <Filters onFilterChange={setFilters} />
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-8">
          <div className="container-custom">
            <FeaturedCase caseStudy={featuredCase} />
          </div>
        </section>
      )}

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

          <CaseGrid caseStudies={visibleCaseStudies} />

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="group relative bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white font-semibold py-4 px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 backdrop-blur-sm border border-white/20 text-lg"
              >
                <span className="relative z-10 flex items-center">
                  Découvrir plus de projets
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </SafariAnimationFix>
  )
}

export default function ClientRealisationsContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="glassmorphism-card p-8 rounded-[2rem] border border-white/20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4" />
          <p className="text-white text-lg">Chargement des réalisations...</p>
        </div>
      </div>
    }>
      <RealisationsContent />
    </Suspense>
  )
}
