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
      className={`py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A] ${className}`}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-8">
            Vous avez un <br />
            projet en <span className="text-[#FACC15]">tête ?</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Contactez-nous pour discuter de votre projet de marquage routier ou de rénovation de parking. Nous vous accompagnons de l&apos;étude à la réalisation avec expertise et professionnalisme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/devis"
              onClick={() => trackQuoteRequest('realisations_cta_band')}
              className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Demander un devis
            </Link>

            <Link
              href="/qui-sommes-nous"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
            >
              Nous découvrir
            </Link>
          </div>

          <MotionDiv
            className="mt-16 pt-10 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-2">Téléphone</div>
                <div className="text-white text-lg font-bold">07 86 81 96 92</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-2">Email</div>
                <div className="text-white text-lg font-bold break-all">contact@renov-route.fr</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-2">Zone</div>
                <div className="text-white text-lg font-bold">Toute la France</div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
