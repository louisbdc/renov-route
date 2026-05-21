import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionH1, MotionP } from '@/components/MotionWrapper'
import { guides } from '@/lib/guides'
import GuidesFilterableList from '@/components/GuidesFilterableList'

export default function GuidesPage() {
  return (
    <Layout>
      <SafariAnimationFix>

        {/* Hero — dark éditorial */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center md:grayscale opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/80 to-[#0F172A]" />

          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
              Documentation technique
            </span>
            <MotionH1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
            >
              Guides & <br /><span className="text-[#FACC15]">conseils parking.</span>
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium"
            >
              Retrouvez nos guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les tarifs. Des conseils d&apos;experts pour vos projets.
            </MotionP>
          </div>
        </section>

        {/* Filters + Grid (client component pour le filtre interactif) */}
        <section className="py-20 sm:py-24 px-6 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto">
            <GuidesFilterableList guides={guides} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
              Un projet de <span className="text-[#FACC15]">parking ?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
              Contactez-nous pour un diagnostic gratuit et un devis personnalisé.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

      </SafariAnimationFix>
    </Layout>
  )
}
