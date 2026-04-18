'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CaseStudy } from '@/lib/data/case-studies'
import { MotionArticle } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

interface CaseCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseCard({ caseStudy, index }: CaseCardProps) {
  const { trackCaseStudyView } = useConversionTracking()

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.2, 0.8, 0.2, 1]
      }}
      className="group"
    >
      <Link
        href={`/realisations/${caseStudy.slug}`}
        onClick={() => trackCaseStudyView(caseStudy.title)}
        className="block bg-white border border-slate-200 card-editorial-hover focus-ring h-full"
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>

        <div className="p-6 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-[#FACC15]">
            <span>{caseStudy.client}</span>
            <span className="text-slate-300">·</span>
            <span>{caseStudy.year}</span>
          </div>

          <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] group-hover:text-[#FACC15] transition-colors leading-tight">
            {caseStudy.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
            {caseStudy.summary}
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
              Voir le projet
              <svg
                className="w-4 h-4 text-[#FACC15] group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </MotionArticle>
  )
}
