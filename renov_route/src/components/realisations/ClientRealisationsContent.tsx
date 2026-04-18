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

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-12">
          <div className="container-custom">
            <FeaturedCase caseStudy={featuredCase} />
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section id="case-studies" className="py-8">
        <div className="container-custom">
          <Filters onFilterChange={setFilters} />
        </div>
      </section>


      {/* Case Studies Grid */}
      <section id="projects-grid" className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">
              Tous nos projets.
            </h2>
            <p className="text-slate-500 font-medium text-[10px] uppercase tracking-[0.2em]">
              {visibleCaseStudies.length} sur {filteredCaseStudies.length} projet{filteredCaseStudies.length > 1 ? 's' : ''} trouvé{filteredCaseStudies.length > 1 ? 's' : ''}
            </p>
          </div>

          <CaseGrid caseStudies={visibleCaseStudies} />

          {hasMoreProjects && (
            <div className="text-center mt-16">
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-5 px-10 rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Découvrir plus de projets
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="p-10 border border-slate-200 bg-white text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#0F172A] border-t-transparent mx-auto mb-4" />
          <p className="text-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em]">Chargement</p>
        </div>
      </div>
    }>
      <RealisationsContent />
    </Suspense>
  )
}
