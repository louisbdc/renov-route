'use client'

import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { guides, GUIDE_CATEGORIES } from '@/lib/guides'
import type { Guide } from '@/lib/guides'
import { useState } from 'react'

type CategoryKey = keyof typeof GUIDE_CATEGORIES

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col h-full p-6 rounded-2xl border border-white/15 bg-[#1e2330] backdrop-blur-sm hover:border-amber-400/30 hover:bg-white/[0.1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5"
    >
      <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 font-medium border border-amber-500/25 mb-4">
        {GUIDE_CATEGORIES[guide.category]}
      </span>
      <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
        {guide.title}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
        {guide.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/10">
        <span>{formatDate(guide.publishDate)}</span>
        <span>{guide.readingTime} min de lecture</span>
      </div>
    </Link>
  )
}

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all')

  const filteredGuides = activeCategory === 'all'
    ? guides
    : guides.filter(g => g.category === activeCategory)

  const categories = Object.entries(GUIDE_CATEGORIES) as [CategoryKey, string][]

  return (
    <Layout>
      <SafariAnimationFix>

        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0d11]" />
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141922]/20 via-transparent to-[#141922]" />

          <div className="relative max-w-4xl mx-auto text-center">
            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-display"
            >
              Guides & conseils parking
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Retrouvez nos guides pratiques sur la rénovation de parking, le marquage au sol,
              les normes PMR et les tarifs. Des conseils d&apos;experts pour vos projets.
            </MotionP>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="pb-16 sm:pb-20 px-4 bg-[#0a0d11]">
          <div className="max-w-5xl mx-auto">

            {/* Category filters */}
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === 'all'
                    ? 'bg-amber-500 text-gray-900 border-amber-500'
                    : 'text-gray-300 border-white/15 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                Tous
              </button>
              {categories.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeCategory === key
                      ? 'bg-amber-500 text-gray-900 border-amber-500'
                      : 'text-gray-300 border-white/15 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </MotionDiv>

            {/* Guides grid */}
            {filteredGuides.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {filteredGuides.map((guide, i) => (
                  <MotionDiv
                    key={guide.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  >
                    <GuideCard guide={guide} />
                  </MotionDiv>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 py-12">
                Aucun guide dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-[#0a0d11]/90" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              Un projet de parking ?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Contactez-nous pour un diagnostic gratuit et un devis personnalisé.
            </p>
            <Link
              href="/devis"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

      </SafariAnimationFix>
    </Layout>
  )
}
