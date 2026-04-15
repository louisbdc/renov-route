'use client'

import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'
import StructuredData from '@/components/StructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
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
      <StructuredData type="competences" />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://renov-route.com/" },
        { name: "Compétences", url: "https://renov-route.com/competences/" }
      ]} />
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
                className="inline-flex items-center gap-2 text-sm text-amber-400 border border-amber-400/20 bg-amber-400/5 rounded-full px-4 py-1.5 mb-8"
              >
                Lyon &amp; Rhône-Alpes
              </MotionDiv>

              <MotionH1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-display"
              >
                Nos Compétences en Marquage Routier
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

          {/* Descriptive section */}
          <section className="py-12 sm:py-16 px-4 bg-[#0C0F14]">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 text-gray-300 leading-relaxed text-lg"
              >
                <p>
                  Depuis plus de 10 ans, Rénov Route accompagne les entreprises, collectivités et gestionnaires de parkings dans tous leurs projets de marquage au sol et de voirie en région Rhône-Alpes et sur l&apos;ensemble du territoire français. Notre équipe intervient sur plus de 200 chantiers par an, du simple retraçage de places de parking à la rénovation complète de surfaces industrielles.
                </p>
                <p>
                  Nos six domaines d&apos;expertise couvrent l&apos;intégralité de la chaîne : traçage et retraçage de parking, signalisation verticale, résine de sol et marquage intérieur, réparation de nids de poule, accessoires de sécurité et conseil technique. Un interlocuteur unique coordonne chaque projet, du diagnostic initial à la réception des travaux, pour garantir des délais maîtrisés et un résultat conforme aux normes en vigueur.
                </p>
              </MotionDiv>
            </div>
          </section>

          {/* Services grid */}
          <section className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 font-display">Nos domaines d&apos;intervention</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0C0F14] rounded-2xl overflow-hidden border border-white/10">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/competences/${service.slug}`}
                    onClick={() => trackServiceInterest(service.title)}
                    className="group relative flex flex-col p-6 sm:p-8 bg-[#0a0d11] border border-white/10 hover:bg-[#242b37] hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-mono text-gray-600 tabular-nums">{service.num}</span>
                      <div className="text-amber-400 group-hover:text-amber-300 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-100 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-amber-400 group-hover:gap-2.5 transition-all duration-200">
                      <span>Découvrir</span>
                      <TbArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Guides associés */}
          <section className="py-16 sm:py-20 px-4 bg-[#0C0F14] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">Guides pratiques associés</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-10">
                Retrouvez nos guides détaillés pour approfondir chaque sujet.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'Prix marquage au sol parking', href: '/guides/prix-marquage-sol-parking/', tag: 'Marquage' },
                  { title: 'Réglementation marquage au sol', href: '/guides/reglementation-marquage-sol-parking/', tag: 'Marquage' },
                  { title: 'Normes PMR parking', href: '/guides/normes-pmr-parking/', tag: 'PMR' },
                  { title: 'Résine de sol parking : prix et types', href: '/guides/resine-sol-parking-prix-types/', tag: 'Résine' },
                  { title: 'Nids de poule : solutions 2026', href: '/guides/nids-de-poule-hiver-2026-solutions/', tag: 'Réparation' },
                  { title: 'Signalisation parking : réglementation', href: '/guides/signalisation-parking-reglementation/', tag: 'Signalisation' },
                  { title: 'Butée de parking : types et pose', href: '/guides/butee-parking-types-pose-prix/', tag: 'Accessoires' },
                  { title: 'Ralentisseur parking : normes', href: '/guides/ralentisseur-parking-norme/', tag: 'Accessoires' },
                  { title: 'Coût rénovation parking', href: '/guides/cout-renovation-parking/', tag: 'Budget' },
                ].map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-[#0a0d11] hover:border-white/15 hover:bg-[#141922] transition-colors"
                  >
                    <span className="text-xs font-medium text-amber-400 bg-amber-400/10 rounded-full px-2.5 py-1 whitespace-nowrap">{guide.tag}</span>
                    <span className="text-sm text-white group-hover:text-amber-100 transition-colors leading-snug">{guide.title}</span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/guides/" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors">
                  Voir tous nos guides
                  <TbArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section className="py-14 sm:py-16 px-4 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-[#0C0F14]/92" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                Un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-8">
                Demandez un devis gratuit — nous répondons sous 48 h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/devis"
                  onClick={() => trackQuoteRequest('competences_cta')}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
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
