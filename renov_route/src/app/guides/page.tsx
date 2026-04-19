'use client'

import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { guides, GUIDE_CATEGORIES } from '@/lib/guides'
import type { Guide } from '@/lib/guides'
import { getGuideImage } from '@/lib/guide-images'
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
  const image = getGuideImage(guide.slug)
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col h-full bg-white border border-slate-200 card-editorial-hover overflow-hidden"
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={guide.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-500" />
          <span className="absolute top-4 left-4 inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FACC15] text-[#0F172A] rounded-sm">
            {GUIDE_CATEGORIES[guide.category]}
          </span>
        </div>
      ) : (
        <div className="px-6 pt-6">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FACC15] text-[#0F172A] rounded-sm">
            {GUIDE_CATEGORIES[guide.category]}
          </span>
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4 group-hover:text-[#FACC15] transition-colors leading-tight">
          {guide.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1 font-medium">
          {guide.excerpt}
        </p>
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pt-5 border-t border-slate-100">
          <span>{formatDate(guide.publishDate)}</span>
          <span>{guide.readingTime} min de lecture</span>
        </div>
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

        {/* Hero — dark editorial */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center grayscale opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
              Documentation technique
            </span>
            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
            >
              Guides & <br /><span className="text-[#FACC15]">conseils parking.</span>
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium"
            >
              Retrouvez nos guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les tarifs. Des conseils d&apos;experts pour vos projets.
            </MotionP>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-20 sm:py-24 px-6 bg-[#D1DCE5]">
          <div className="max-w-7xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-16"
            >
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm border ${
                  activeCategory === 'all'
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'text-[#0F172A] border-slate-200 hover:border-[#0F172A] bg-white'
                }`}
              >
                Tous
              </button>
              {categories.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm border ${
                    activeCategory === key
                      ? 'bg-[#0F172A] text-white border-[#0F172A]'
                      : 'text-[#0F172A] border-slate-200 hover:border-[#0F172A] bg-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </MotionDiv>

            {filteredGuides.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-center text-slate-500 py-12 font-medium">
                Aucun guide dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
              Un projet de <span className="text-[#FACC15]">parking ?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
              Contactez-nous pour un diagnostic gratuit et un devis personnalisé.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

      </SafariAnimationFix>
    </Layout>
  )
}
