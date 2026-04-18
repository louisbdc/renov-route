'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

export default function Hero() {
  const { trackQuoteRequest } = useConversionTracking()
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/realisations/background_competence_page.avif"
          alt="Réalisations de marquage au sol et signalisation routière - Renov Route"
          fill
          priority
          className="object-cover grayscale opacity-25"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/80 to-[#0F172A]" />

      <div className="relative z-10 container-custom">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
            Portfolio · 1000+ projets
          </span>

          <MotionH1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos réalisations <br />
            en <span className="text-[#FACC15]">marquage</span> <br />
            & traçage.
          </MotionH1>

          <MotionP
            className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez notre portfolio de plus de 1 000 projets de marquage au sol, traçage de parking et réparation de nids de poule réalisés à travers toute la France.
          </MotionP>

          <MotionDiv
            className="flex flex-wrap gap-8 mb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <span className="text-[#FACC15] font-black text-2xl tracking-tighter">1000+</span>
              projets
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FACC15] font-black text-2xl tracking-tighter">10+</span>
              ans d&apos;expérience
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FACC15] font-black text-2xl tracking-tighter">FR</span>
              entière
            </span>
          </MotionDiv>

          <MotionDiv
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/devis"
              onClick={() => trackQuoteRequest('realisations_hero')}
              className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[8px_8px_0_rgba(250,204,21,0.25)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Demander un devis
            </Link>

            <Link
              href="#projects-grid"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
            >
              Voir nos projets
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  )
}
