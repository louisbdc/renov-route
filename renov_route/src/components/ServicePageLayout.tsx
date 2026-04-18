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

        {/* Hero — dark editorial */}
        <section className="pt-28 sm:pt-36 pb-20 sm:pb-24 px-6 relative overflow-hidden bg-[#0F172A]">
          <Image
            src={heroBackgroundImage || '/assets/images/realisations/background_competence_page.avif'}
            alt={heroImageAlt || ''}
            fill
            className="absolute inset-0 object-cover grayscale opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative max-w-5xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="mb-10">
              <ol className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {breadcrumb.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <li aria-hidden="true" className="text-slate-600 select-none">/</li>}
                    <li>
                      {i < breadcrumb.length - 1 ? (
                        <Link href={item.url} className="hover:text-[#FACC15] transition-colors">{item.name}</Link>
                      ) : (
                        <span className="text-white">{item.name}</span>
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
              className="inline-flex items-center gap-3 text-[#FACC15] mb-8"
            >
              <div className="text-[#FACC15]">{heroIcon}</div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em]">
                Compétence
              </span>
            </MotionDiv>

            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
            >
              {heroTitle}
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium"
            >
              {heroSubtitle}
            </MotionP>
          </div>
        </section>

        {/* Description + Features */}
        <section className="py-20 sm:py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-8">
                  {descriptionHeading}
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
                  {descriptionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <MotionDiv
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                    className="flex items-start gap-4 p-6 bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-[#FACC15] transition-colors"
                  >
                    <div className="mt-1 text-[#FACC15] flex-shrink-0 text-xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-black uppercase tracking-tight text-[#0F172A] mb-1">{feature.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Variable middle sections */}
        {children}

        {/* Final CTA */}
        <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed font-medium">{ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                onClick={() => trackQuoteRequest(`service_${heroTitle}`)}
                className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/competences"
                className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
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
    <section className={`py-20 sm:py-28 px-6 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">{title}</h2>
          {subtitle && <p className="text-slate-500 font-medium">{subtitle}</p>}
        </div>
        <div className={`grid gap-px bg-slate-200 border border-slate-200 ${gridCols}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white hover:bg-[#F8FAFC] transition-colors group"
            >
              <div className="text-[#FACC15] mb-4 text-2xl">{item.icon}</div>
              <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] mb-3 group-hover:text-[#FACC15] transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
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
    <section className={`py-20 sm:py-28 px-6 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-12 sm:mb-16">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-6xl font-black italic tracking-tighter text-slate-200 mb-4 leading-none tabular-nums">{step.step}</div>
              <div className="w-12 h-1 bg-[#FACC15] mb-5" />
              <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.description}</p>
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
    <section className={`py-20 sm:py-28 px-6 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-12">Questions fréquentes</h2>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="border-l-4 border-[#0F172A] pl-6 py-4">
              <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] mb-3">{item.question}</h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
