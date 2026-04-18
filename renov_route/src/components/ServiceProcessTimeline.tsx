'use client'

import { useRef } from 'react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSafari } from './SafariAnimationFix'

interface TimelineStep {
  step: string
  title: string
  description: string
  icon?: ReactNode
  image?: string
  imageAlt?: string
}

interface ServiceProcessTimelineProps {
  title: string
  subtitle?: string
  steps: TimelineStep[]
  alt?: boolean
}

function TimelineStepCard({
  step,
  index,
  total,
  isSafari,
}: {
  step: TimelineStep
  index: number
  total: number
  isSafari: boolean
}) {
  const isEven = index % 2 === 0

  const content = (
    <>
      {/* Large background step number — decorative, behind text */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-2 sm:-right-4 text-[5rem] sm:text-[7rem] font-bold text-slate-100 font-display leading-none select-none pointer-events-none -z-10"
      >
        {step.step}
      </div>

      {/* Mobile: step indicator */}
      <div className="relative flex items-center gap-3 mb-4 sm:hidden">
        <div className="w-10 h-10 rounded-full bg-[#FACC15]/20 border border-[#FACC15]/50 flex items-center justify-center flex-shrink-0">
          {step.icon ? (
            <div className="text-[#FACC15]">{step.icon}</div>
          ) : (
            <span className="text-[#FACC15] font-bold font-display">{step.step}</span>
          )}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#FACC15]/40 to-transparent" />
      </div>

      <h3 className="relative text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 font-display">{step.title}</h3>
      <p className="relative text-slate-500 text-sm sm:text-base leading-relaxed">{step.description}</p>
    </>
  )

  const imageBlock = step.image ? (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
      {isSafari ? (
        <Image
          src={step.image}
          alt={step.imageAlt || `${step.title} - Étape ${step.step} du processus Rénov Route`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : (
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={step.image}
            alt={step.imageAlt || `${step.title} - Étape ${step.step} du processus Rénov Route`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </motion.div>
      )}
    </div>
  ) : null

  const cardInner = (
    <div className={`grid sm:grid-cols-2 gap-6 sm:gap-10 items-center ${!isEven && imageBlock ? 'sm:[direction:rtl]' : ''}`}>
      <div className={`relative isolate ${!isEven && imageBlock ? 'sm:[direction:ltr]' : ''}`}>
        {content}
      </div>
      {imageBlock ? (
        <div className={!isEven ? 'sm:[direction:ltr]' : ''}>
          {imageBlock}
        </div>
      ) : (
        <div className="hidden sm:flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center">
            {step.icon ? (
              <div className="text-[#FACC15] scale-150">{step.icon}</div>
            ) : (
              <span className="text-[#FACC15] font-bold font-display text-4xl">{step.step}</span>
            )}
          </div>
        </div>
      )}
    </div>
  )

  if (isSafari) {
    return (
      <div className="relative py-8 sm:py-12">
        {cardInner}
        {index < total - 1 && (
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-0 h-8">
            <div className="w-px h-full bg-gradient-to-b from-[#FACC15]/40 to-transparent" />
          </div>
        )}
      </div>
    )
  }

  return (
    <motion.div
      className="relative py-8 sm:py-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
    >
      {cardInner}

      {/* Connector to next step */}
      {index < total - 1 && (
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-0 h-8">
          <motion.div
            className="w-px h-full bg-gradient-to-b from-[#FACC15]/40 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      )}
    </motion.div>
  )
}

function ProgressLine({ containerRef, isSafari }: { containerRef: React.RefObject<HTMLDivElement | null>; isSafari: boolean }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  })

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  if (isSafari) {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden sm:block">
        <div className="w-px h-full bg-[#FACC15]/20" />
      </div>
    )
  }

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden sm:block">
      {/* Track */}
      <div className="w-px h-full bg-slate-100" />
      {/* Fill */}
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-[#FACC15] via-amber-400 to-[#FACC15]/0"
        style={{ height }}
      />
      {/* Glow dot at tip */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
        style={{ top: height }}
      />
    </div>
  )
}

export default function ServiceProcessTimeline({
  title,
  subtitle,
  steps,
  alt = false,
}: ServiceProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isSafari = useSafari()

  const heading = isSafari ? (
    <div className="mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 font-display">{title}</h2>
      {subtitle && <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  ) : (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 font-display">{title}</h2>
      {subtitle && <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )

  return (
    <section className={`py-16 sm:py-24 px-4 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        {heading}

        <div ref={containerRef} className="relative">
          <ProgressLine containerRef={containerRef} isSafari={isSafari} />

          {/* Desktop step indicators on the progress line */}
          {steps.map((step, i) => {
            const topPercent = steps.length > 1
              ? (i / (steps.length - 1)) * 100
              : 50

            return (
              <div
                key={`dot-${i}`}
                className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center z-10"
                style={{ top: `calc(${topPercent}% + 2rem)` }}
              >
                {isSafari ? (
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#FACC15]/50 flex items-center justify-center">
                    <span className="text-[#FACC15] font-bold font-display text-sm">{step.step}</span>
                  </div>
                ) : (
                  <motion.div
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#FACC15]/50 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <span className="text-[#FACC15] font-bold font-display text-sm">{step.step}</span>
                  </motion.div>
                )}
              </div>
            )
          })}

          {steps.map((step, i) => (
            <TimelineStepCard
              key={i}
              step={step}
              index={i}
              total={steps.length}
              isSafari={isSafari}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
