'use client'

import Link from 'next/link'
import { MotionSection, MotionDiv } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

interface CtaBandProps {
  className?: string
}

export default function CtaBand({ className = '' }: CtaBandProps) {
  const { trackQuoteRequest } = useConversionTracking()
  return (
    <MotionSection
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container-custom">
        <div className="glass-panel p-8 lg:p-12 text-center backdrop-blur-md bg-white/10 border border-white/20 relative overflow-hidden">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-display text-h1 font-bold mb-6 text-white">
              Vous avez un projet en tête ?
            </h2>

            <p className="text-body-lg leading-relaxed mb-8 text-white/90">
              Contactez-nous pour discuter de votre projet de marquage routier ou de rénovation de parking.
              Nous vous accompagnons de l&apos;étude à la réalisation avec expertise et professionnalisme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/devis"
                onClick={() => trackQuoteRequest('realisations_cta_band')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-body-lg rounded-lg transition-all duration-300 hover:scale-105 focus-ring"
              >
                Demander un devis
              </Link>

              <Link
                href="/qui-sommes-nous"
                className="px-8 py-4 border-2 border-white/50 text-white font-bold text-body-lg rounded-lg transition-all duration-300 hover:bg-white/20 hover:border-white/70 focus-ring"
              >
                Commencer une conversation
              </Link>
            </div>

            {/* Contact info */}
            <MotionDiv
              className="mt-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-caption">
                <div>
                  <div className="font-semibold mb-1 text-white">Téléphone</div>
                  <div className="text-white/80">07 86 81 96 92</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Email</div>
                  <div className="text-white/80">contact@renov-route.fr</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Zone d&apos;intervention</div>
                  <div className="text-white/80">Toute la France</div>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
