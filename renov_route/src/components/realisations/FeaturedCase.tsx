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
      className={`glass-panel p-8 lg:p-12 group backdrop-blur-md bg-white/10 border border-white/20 ${className}`}
    >
      <Link href={`/realisations/${caseStudy.slug}`} onClick={() => trackCaseStudyView(caseStudy.title)} className="block">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <MotionSpan
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 bg-bg-base text-primary text-caption font-semibold rounded-full mb-4"
              >
                Projet Vedette
              </MotionSpan>

              <h2 className="text-display text-h1 font-bold mb-4 text-white">
                {caseStudy.title}
              </h2>

              <p className="text-body-lg leading-relaxed mb-6 text-white/90">
                {caseStudy.summary}
              </p>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="text-center p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-caption font-medium text-white/80">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
              <span className="text-body-lg font-semibold text-white">
                Lire l&apos;histoire complète
              </span>
              <svg
                className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Image */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={caseStudy.heroMedia}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Floating elements */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl">
                {caseStudy.year}
              </div>

              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl">
                {caseStudy.industry}
              </div>
            </div>
          </MotionDiv>
        </div>
      </Link>
    </MotionSection>
  )
}
