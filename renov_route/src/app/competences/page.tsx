'use client'

import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'
import {
  TbParking,
  TbTrafficCone,
  TbBrush,
  TbHammer,
  TbShieldCheck,
  TbClipboardList,
  TbArrowRight,
} from 'react-icons/tb'

const SERVICES = [
  {
    num: '01',
    title: 'Traçage & retraçage de parking',
    description: 'Marquage au sol durable pour centres commerciaux, entreprises et espaces publics. Conformité PMR.',
    icon: <TbParking size={24} />,
    slug: 'tracage-retracage-parking',
  },
  {
    num: '02',
    title: 'Signalisation verticale',
    description: 'Installation de panneaux STOP, cédez le passage, PMR et signalisation informative pour tous vos espaces.',
    icon: <TbTrafficCone size={24} />,
    slug: 'signalisation-verticale',
  },
  {
    num: '03',
    title: 'Résine de sol & marquage intérieur',
    description: 'Revêtements époxy pour usines, entrepôts et ateliers. Délimitation de zones de travail et marquage de sécurité.',
    icon: <TbBrush size={24} />,
    slug: 'resine-sol-marquage-interieur',
  },
  {
    num: '04',
    title: 'Réparation de nids de poule',
    description: 'Réparation par injection de résine haute performance. Intervention rapide sur routes, parkings et voies privées.',
    icon: <TbHammer size={24} />,
    slug: 'reparation-nids-de-poule',
  },
  {
    num: '05',
    title: 'Accessoires de parking',
    description: 'Bornes anti-bélier, ralentisseurs, butées de parking et barrières pour sécuriser et organiser vos espaces.',
    icon: <TbShieldCheck size={24} />,
    slug: 'accessoires-parking',
  },
  {
    num: '06',
    title: 'Conseil & expertise',
    description: "Étude de faisabilité, devis personnalisé et suivi de projet. Un interlocuteur technique du diagnostic à la réception.",
    icon: <TbClipboardList size={24} />,
    slug: 'conseil-expertise',
  },
]

export default function CompetencesPage() {
  const { trackServiceInterest, trackQuoteRequest } = useConversionTracking()
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Nos Compétences - Renov Route',
          description: 'Marquage routier, signalisation verticale, résine de sol, réparation de nids de poule et accessoires de parking en Rhône-Alpes.',
          url: 'https://renov-route.com/competences',
          mainEntity: {
            '@type': 'LocalBusiness',
            name: 'Renov Route',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services de voirie et marquage',
              itemListElement: SERVICES.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.title, description: s.description },
              })),
            },
          },
        })}
      </script>

      <Layout>
        <SafariAnimationFix>

          {/* Hero */}
          <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0C0F14]" />
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F14]/30 via-transparent to-[#0C0F14]" />

            <div className="relative max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-sm text-sky-400 border border-sky-400/20 bg-sky-400/5 rounded-full px-4 py-1.5 mb-8"
              >
                Lyon &amp; Rhône-Alpes
              </MotionDiv>

              <MotionH1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Nos Compétences
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Marquage routier, signalisation et réfection de voirie.
                Six services, un seul interlocuteur technique.
              </MotionP>
            </div>
          </section>

          {/* Services grid */}
          <section className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/competences/${service.slug}`}
                    onClick={() => trackServiceInterest(service.title)}
                    className="group relative flex flex-col p-6 sm:p-8 bg-[#0C0F14] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-mono text-gray-600 tabular-nums">{service.num}</span>
                      <div className="text-sky-400 group-hover:text-sky-300 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-sky-400 group-hover:gap-2.5 transition-all duration-200">
                      <span>Découvrir</span>
                      <TbArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section className="py-14 sm:py-16 px-4 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-[#0C0F14]/92" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-8">
                Demandez un devis gratuit — nous répondons sous 48 h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/devis"
                  onClick={() => trackQuoteRequest('competences_cta')}
                  className="bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/qui-sommes-nous"
                  className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-white/5"
                >
                  Qui sommes-nous
                </Link>
              </div>
            </div>
          </section>

        </SafariAnimationFix>
      </Layout>
    </>
  )
}
