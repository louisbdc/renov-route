'use client'

import React, { type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

// ─── Types ───────────────────────────────────────────────────────────────────

interface BreadcrumbItem { name: string; url: string }
interface Feature { icon: ReactNode; title: string; description: string }
export interface GridItem { icon: ReactNode; title: string; description: string }
export interface StepItem { step: string; title: string; description: string }
export interface FaqItem { question: string; answer: string }

interface ServicePageLayoutProps {
  breadcrumb: BreadcrumbItem[]
  heroIcon: ReactNode
  heroTitle: ReactNode
  heroSubtitle: string
  heroBackgroundImage?: string
  heroImageAlt?: string
  accentColor?: string
  descriptionHeading: string
  descriptionParagraphs: ReactNode[]
  features: Feature[]
  children?: ReactNode
  ctaTitle: ReactNode
  ctaSubtitle: string
}

// ─── Main layout ─────────────────────────────────────────────────────────────

export default function ServicePageLayout({
  breadcrumb,
  heroIcon,
  heroTitle,
  heroSubtitle,
  heroBackgroundImage,
  heroImageAlt,
  accentColor: _accentColor,
  descriptionHeading,
  descriptionParagraphs,
  features,
  children,
  ctaTitle,
  ctaSubtitle,
}: ServicePageLayoutProps) {
  const { trackQuoteRequest } = useConversionTracking()

  return (
    <Layout>
      <SafariAnimationFix>

        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0d11]" />
          <Image
            src={heroBackgroundImage || '/assets/images/realisations/background_competence_page.avif'}
            alt={heroImageAlt || ''}
            fill
            className="absolute inset-0 object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141922]/20 via-transparent to-[#141922]" />

          <div className="relative max-w-4xl mx-auto text-center">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-sm text-gray-400">
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

            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-white/5 border border-white/10 text-amber-400"
            >
              {heroIcon}
            </MotionDiv>

            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-display"
            >
              {heroTitle}
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {heroSubtitle}
            </MotionP>
          </div>
        </section>

        {/* Description + Features */}
        <section className="py-16 sm:py-20 px-4 bg-[#0a0d11]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
                  {descriptionHeading}
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
                  {descriptionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <MotionDiv
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-white/10 bg-[#0a0d11] hover:border-white/20 transition-colors"
                  >
                    <div className="mt-0.5 text-amber-400 flex-shrink-0 text-xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Variable middle sections from each page */}
        {children}

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-[#0a0d11]/90" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">{ctaTitle}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/devis"
                onClick={() => trackQuoteRequest(`service_${heroTitle}`)}
                className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/competences"
                className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                Nos autres compétences
              </Link>
            </div>
          </div>
        </section>

      </SafariAnimationFix>
    </Layout>
  )
}

// ─── Reusable section components ─────────────────────────────────────────────

export function ServiceItemsGrid({
  title,
  subtitle,
  items,
  cols = 3,
  alt = false,
}: {
  title: string
  subtitle?: string
  items: GridItem[]
  cols?: 3 | 4
  alt?: boolean
}) {
  const gridCols = cols === 4
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#0C0F14]' : 'bg-[#0a0d11]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">{title}</h2>
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
        <div className={`grid gap-4 sm:gap-5 ${gridCols}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-white/10 bg-[#0a0d11] hover:border-white/20 hover:bg-[#141922] transition-colors"
            >
              <div className="text-amber-400 mb-3 text-2xl">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceSteps({
  title,
  steps,
  alt = false,
}: {
  title: string
  steps: StepItem[]
  alt?: boolean
}) {
  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#0C0F14]' : 'bg-[#0a0d11]'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12 font-display">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-white/10 mb-3 leading-none tabular-nums">{step.step}</div>
              <div className="w-8 h-px bg-amber-500/50 mb-4" />
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceFAQ({
  items,
  alt = false,
}: {
  items: FaqItem[]
  alt?: boolean
}) {
  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#0C0F14]' : 'bg-[#0a0d11]'}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 font-display">Questions fréquentes</h2>
        <div className="space-y-7">
          {items.map((item, i) => (
            <div key={i} className="border-l-2 border-amber-500/40 pl-5">
              <h3 className="font-semibold text-white mb-2">{item.question}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
