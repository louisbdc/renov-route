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
        className="block bg-[#1a1f2e] border border-white/10 rounded-xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20 focus-ring"
      >
        {/* Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <div className="aspect-video relative">
            <Image
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-h3 text-white font-semibold group-hover:text-primary transition-colors duration-200">
            {caseStudy.title}
          </h3>

          {/* Meta */}
          <div className="flex flex-wrap gap-2 text-caption text-gray-400">
            <span>{caseStudy.client}</span>
            <span>&bull;</span>
            <span>{caseStudy.year}</span>
          </div>

          {/* Summary */}
          <p className="text-gray-300 text-body leading-relaxed line-clamp-2">
            {caseStudy.summary}
          </p>

          {/* CTA */}
          <div className="pt-2">
            <span className="flex items-center gap-2 text-primary font-medium">
              Voir le projet
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </MotionArticle>
  )
}
