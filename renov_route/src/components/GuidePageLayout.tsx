'use client'

import React, { type ReactNode } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import AuthorByline from '@/components/AuthorByline'
import type { Guide } from '@/lib/guides'
import { GUIDE_CATEGORIES, guides } from '@/lib/guides'

// ─── Types ───────────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string
  url: string
}

interface GuidePageLayoutProps {
  guide: Guide
  children: ReactNode
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getRelatedGuides(currentGuide: Guide): Guide[] {
  return guides
    .filter(g => g.slug !== currentGuide.slug && g.category === currentGuide.category)
    .slice(0, 3)
}

// ─── Main layout ─────────────────────────────────────────────────────────────

export default function GuidePageLayout({ guide, children }: GuidePageLayoutProps) {
  const breadcrumb: BreadcrumbItem[] = [
    { name: 'Accueil', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: guide.title, url: `/guides/${guide.slug}` },
  ]

  const relatedGuides = getRelatedGuides(guide)
  const categoryLabel = GUIDE_CATEGORIES[guide.category]

  return (
    <Layout>
      <SafariAnimationFix>

        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0d11]" />
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d11]/60 to-[#0a0d11]" />

          <div className="relative max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-gray-400">
                {breadcrumb.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <li aria-hidden="true" className="text-gray-600 select-none">/</li>}
                    <li>
                      {i < breadcrumb.length - 1 ? (
                        <Link href={item.url} className="hover:text-white transition-colors">{item.name}</Link>
                      ) : (
                        <span className="text-gray-200">{item.name}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>

            {/* Category + Meta */}
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-5 text-sm"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 font-medium border border-amber-500/20">
                {categoryLabel}
              </span>
              <span className="text-gray-400">
                {formatDate(guide.publishDate)}
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400">
                {guide.readingTime} min de lecture
              </span>
            </MotionDiv>

            {/* Title */}
            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {guide.title}
            </MotionH1>
          </div>
        </section>

        {/* Article content */}
        <section className="pb-16 sm:pb-20 px-4 bg-[#0a0d11]">
          <div className="max-w-3xl mx-auto">
            <AuthorByline dateModified={guide.updatedDate ?? guide.publishDate} />
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="guide-article"
            >
              {children}
            </MotionDiv>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-[#0a0d11]/90" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Besoin d&apos;un devis pour votre parking ?
            </h2>
            <MotionP
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 mb-8 leading-relaxed"
            >
              Notre équipe intervient dans toute la France. Diagnostic gratuit et devis personnalisé sous 48h.
            </MotionP>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/devis"
                className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/guides"
                className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                Tous nos guides
              </Link>
            </div>
          </div>
        </section>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <section className="py-12 sm:py-16 px-4 bg-[#0a0d11] border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">Articles liés</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map(related => (
                  <Link
                    key={related.slug}
                    href={`/guides/${related.slug}`}
                    className="p-5 rounded-xl border border-white/10 bg-[#0a0d11] hover:border-white/20 hover:bg-[#141922] transition-colors group"
                  >
                    <span className="text-xs text-amber-400 font-medium">
                      {GUIDE_CATEGORIES[related.category]}
                    </span>
                    <h3 className="font-semibold text-white mt-2 mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </SafariAnimationFix>
    </Layout>
  )
}
