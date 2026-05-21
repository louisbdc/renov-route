'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv } from '@/components/MotionWrapper'
import { GUIDE_CATEGORIES } from '@/lib/guides'
import type { Guide } from '@/lib/guides'
import { getGuideImage } from '@/lib/guide-images'

type CategoryKey = keyof typeof GUIDE_CATEGORIES

interface GuidesFilterableListProps {
  guides: Guide[]
}

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
            className="object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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

export default function GuidesFilterableList({ guides }: GuidesFilterableListProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all')

  const filteredGuides = activeCategory === 'all'
    ? guides
    : guides.filter(g => g.category === activeCategory)

  const catégories = Object.entries(GUIDE_CATEGORIES) as [CategoryKey, string][]

  return (
    <>
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
        {catégories.map(([key, label]) => (
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
    </>
  )
}
