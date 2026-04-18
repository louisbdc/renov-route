'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CaseStudy } from '@/lib/data/case-studies'
import { MotionSection, MotionDiv, MotionSpan } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

interface FeaturedCaseProps {
  caseStudy: CaseStudy
  className?: string
}

export default function FeaturedCase({ caseStudy, className = '' }: FeaturedCaseProps) {
  const { trackCaseStudyView } = useConversionTracking()
  return (
    <MotionSection
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-[#0F172A] p-8 lg:p-12 group relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.05 }} />
      <Link href={`/realisations/${caseStudy.slug}`} onClick={() => trackCaseStudyView(caseStudy.title)} className="block relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <MotionSpan
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 bg-[#FACC15] text-[#0F172A] text-[10px] font-black uppercase tracking-[0.25em] rounded-sm mb-6"
              >
                Projet vedette
              </MotionSpan>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
                {caseStudy.title}
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                {caseStudy.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="border-l-2 border-[#FACC15] pl-4 py-2"
                >
                  <div className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-none mb-2">
                    {kpi.value}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300 pt-4">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15]">
                Lire l&apos;histoire complète
              </span>
              <svg
                className="w-5 h-5 text-[#FACC15] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden border-2 border-[#FACC15] shadow-[12px_12px_0_#FACC15]">
              <Image
                src={caseStudy.heroMedia}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#FACC15] text-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                {caseStudy.year}
              </div>

              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white text-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                {caseStudy.industry}
              </div>
            </div>
          </MotionDiv>
        </div>
      </Link>
    </MotionSection>
  )
}
