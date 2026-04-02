'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

export default function Hero() {
  const { trackQuoteRequest } = useConversionTracking()
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/realisations/background_competence_page.avif"
          alt="Réalisations de marquage au sol et signalisation routière - Renov Route"
          fill
          priority
          className="object-cover brightness-[0.3]"
          sizes="100vw"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-panel p-12 max-w-4xl mx-auto"
        >
          <MotionH1
            className="text-display text-h1 text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos réalisations en{' '}
            <span className="relative inline-block">
              <span className="relative z-10">marquage routier</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-accent to-primary" />
            </span>
            {' '}
            <br className="hidden sm:block" />
            <span className="text-text-primary">et traçage de parking</span>
          </MotionH1>

          <MotionP
            className="text-body text-body-lg text-text-secondary mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez notre portfolio de plus de 1000 projets de marquage au sol,
            traçage de parking et réparation de nids de poule réalisés à travers toute la France.
          </MotionP>

          {/* Social proof */}
          <MotionDiv
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">1000+</span> projets réalisés
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">10+</span> ans d&apos;expérience
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">France</span> entière
            </span>
          </MotionDiv>

          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/devis"
              onClick={() => trackQuoteRequest('realisations_hero')}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white font-semibold py-4 px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 backdrop-blur-sm border border-white/20 focus-ring"
            >
              <span className="relative z-10">Demander un devis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#projects-grid"
              className="px-8 py-4 border-2 border-glass-border text-text-primary font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary focus-ring"
            >
              Voir nos projets
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  )
}
