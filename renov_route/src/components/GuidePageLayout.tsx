'use client'

import React, { type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import AuthorByline from '@/components/AuthorByline'
import type { Guide } from '@/lib/guides'
import { GUIDE_CATEGORIES, guides } from '@/lib/guides'
import { getGuideImage } from '@/lib/guide-images'
import { toInternalHref } from '@/lib/internal-href'
import { getRelatedGuides, getCategorySiblings, getClusterPillar } from '@/lib/guide-linking'

interface BreadcrumbItem {
  name: string
  url: string
}

interface GuidePageLayoutProps {
  guide: Guide
  children: ReactNode
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}


export default function GuidePageLayout({ guide, children }: GuidePageLayoutProps) {
  const breadcrumb: BreadcrumbItem[] = [
    { name: 'Accueil', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: guide.title, url: `/guides/${guide.slug}` },
  ]

  const relatedGuides = getRelatedGuides(guide, guides)
  const categorySiblings = getCategorySiblings(guide, guides)
  const clusterPillar = getClusterPillar(guide, guides)
  const categoryLabel = GUIDE_CATEGORIES[guide.category]
  const coverImage = getGuideImage(guide.slug)

  return (
    <Layout>
      <SafariAnimationFix>

        {/* Hero — dark éditorial, optional guide-specific cover image */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 relative overflow-hidden bg-[#0F172A]">
          {coverImage && (
            <div className="absolute inset-0">
              <Image
                src={coverImage}
                alt={guide.title}
                fill
                priority
                className="object-cover md:grayscale opacity-25"
                sizes="100vw"
              />
            </div>
          )}
          {!coverImage && (
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)',
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative max-w-3xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="mb-10">
              <ol className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {breadcrumb.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <li aria-hidden="true" className="text-slate-600 select-none">/</li>}
                    <li>
                      {i < breadcrumb.length - 1 ? (
                        <Link href={toInternalHref(item.url)} className="hover:text-[#FACC15] transition-colors">{item.name}</Link>
                      ) : (
                        <span className="text-white truncate max-w-xs inline-block align-bottom">{item.name}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>

            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                {categoryLabel}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {formatDate(guide.publishDate)}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {guide.readingTime} min de lecture
              </span>
            </MotionDiv>

            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white"
            >
              {guide.title}
            </MotionH1>
          </div>
        </section>

        {/* Article content */}
        <section className="py-16 sm:py-20 px-6 bg-white">
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
        <section className="py-20 sm:py-24 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
              Besoin d&apos;un <span className="text-[#FACC15]">devis</span> ?
            </h2>
            <MotionP
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-slate-300 mb-10 leading-relaxed text-lg font-medium"
            >
              Basés à Lyon, nous réalisons le <Link href="/marquage-au-sol-lyon/" className="text-[#FACC15] underline underline-offset-2 hover:text-white transition-colors">marquage au sol à Lyon</Link> et dans toute la France. Diagnostic gratuit et devis personnalisé sous 48h.
            </MotionP>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
              >
                Tous nos guides
              </Link>
            </div>
          </div>
        </section>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <section className="py-20 sm:py-24 px-6 bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-12">
                Articles liés
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map(related => {
                  const relatedImage = getGuideImage(related.slug)
                  return (
                    <Link
                      key={related.slug}
                      href={`/guides/${related.slug}`}
                      className="bg-white border border-slate-200 card-editorial-hover group overflow-hidden flex flex-col"
                    >
                      {relatedImage && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={relatedImage}
                            alt={related.title}
                            fill
                            className="object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15]">
                          {GUIDE_CATEGORIES[related.category]}
                        </span>
                        <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] mt-3 mb-3 group-hover:text-[#FACC15] transition-colors leading-tight">
                          {related.title}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-2 font-medium leading-relaxed">{related.excerpt}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Index de la catégorie courante — maillage interne resserré.
            On ne liste plus les 57 autres guides : les liens sortants restent
            dans le cluster thématique, ce qui concentre le signal de pertinence
            au lieu de le diluer sur tout le catalogue. */}
        {categorySiblings.length > 0 && (
          <section className="py-16 sm:py-20 px-6 bg-white border-t border-slate-200">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-3">
                {categoryLabel} — tous les guides
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-10">
                {clusterPillar ? (
                  <>
                    Pour une vue d&apos;ensemble du sujet, commencez par notre guide de référence&nbsp;:{' '}
                    <Link
                      href={`/guides/${clusterPillar.slug}`}
                      className="text-[#0F172A] font-bold underline underline-offset-2 hover:text-[#FACC15] transition-colors"
                    >
                      {clusterPillar.title}
                    </Link>
                    .
                  </>
                ) : (
                  <>Les autres ressources de cette thématique.</>
                )}
              </p>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {categorySiblings.map(g => (
                  <li key={g.slug}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="text-sm text-slate-600 hover:text-[#0F172A] hover:underline font-medium leading-snug block"
                    >
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/guides"
                className="inline-block mt-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A] border-b-2 border-[#FACC15] pb-1 hover:text-[#FACC15] transition-colors"
              >
                Voir toutes les thématiques
              </Link>
            </div>
          </section>
        )}

      </SafariAnimationFix>
    </Layout>
  )
}
