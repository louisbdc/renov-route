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
    icon: <TbParking size={28} />,
    slug: 'tracage-retracage-parking',
  },
  {
    num: '02',
    title: 'Signalisation verticale',
    description: 'Installation de panneaux STOP, cédez le passage, PMR et signalisation informative pour tous vos espaces.',
    icon: <TbTrafficCone size={28} />,
    slug: 'signalisation-verticale',
  },
  {
    num: '03',
    title: 'Résine de sol & marquage intérieur',
    description: 'Revêtements époxy pour usines, entrepôts et ateliers. Délimitation de zones de travail et marquage de sécurité.',
    icon: <TbBrush size={28} />,
    slug: 'resine-sol-marquage-interieur',
  },
  {
    num: '04',
    title: 'Réparation de nids de poule',
    description: 'Réparation par injection de résine haute performance. Intervention rapide sur routes, parkings et voies privées.',
    icon: <TbHammer size={28} />,
    slug: 'reparation-nids-de-poule',
  },
  {
    num: '05',
    title: 'Accessoires de parking',
    description: 'Bornes anti-bélier, ralentisseurs, butées de parking et barrières pour sécuriser et organiser vos espaces.',
    icon: <TbShieldCheck size={28} />,
    slug: 'accessoires-parking',
  },
  {
    num: '06',
    title: 'Conseil & expertise',
    description: "Étude de faisabilité, devis personnalisé et suivi de projet. Un interlocuteur technique du diagnostic à la réception.",
    icon: <TbClipboardList size={28} />,
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

          {/* Hero, dark editorial */}
          <section className="pt-28 sm:pt-36 pb-20 sm:pb-24 px-6 relative overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center grayscale opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/80 to-[#0F172A]" />

            <div className="relative max-w-5xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-8"
              >
                Lyon &amp; Rhône-Alpes · 6 compétences
              </MotionDiv>

              <MotionH1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
              >
                Nos <span className="text-[#FACC15]">compétences</span> <br />en marquage.
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium"
              >
                Marquage routier, signalisation et réfection de voirie. Six services, un seul interlocuteur technique.
              </MotionP>
            </div>
          </section>

          {/* Description */}
          <section className="py-20 sm:py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium"
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

          {/* Services grid, editorial */}
          <section className="py-20 sm:py-28 px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-2xl">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
                  Domaines d&apos;intervention
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A]">
                  Six expertises, <br /><span className="text-slate-300">un interlocuteur.</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/competences/${service.slug}`}
                    onClick={() => trackServiceInterest(service.title)}
                    className="group relative flex flex-col p-8 bg-white hover:bg-[#F8FAFC] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 tabular-nums">{service.num}</span>
                      <div className="text-[#FACC15]">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4 group-hover:text-[#FACC15] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium flex-grow mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
                      Découvrir
                      <TbArrowRight size={14} className="text-[#FACC15] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Guides associés */}
          <section className="py-20 sm:py-28 px-6 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-2xl">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
                  Documentation
                </span>
                <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">
                  Guides pratiques.
                </h2>
                <p className="text-slate-500 font-medium">
                  Retrouvez nos guides détaillés pour approfondir chaque sujet.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
                    className="group flex items-start gap-4 p-6 bg-white border border-slate-200 card-editorial-hover"
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FACC15] bg-[#0F172A] rounded-sm px-2 py-1 whitespace-nowrap">{guide.tag}</span>
                    <span className="text-sm text-[#0F172A] font-semibold group-hover:text-[#FACC15] transition-colors leading-snug">{guide.title}</span>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/guides/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#0F172A] border-b-2 border-[#0F172A] pb-1 hover:text-[#FACC15] hover:border-[#FACC15] transition-all">
                  Voir tous nos guides
                  <TbArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
                Un projet en <span className="text-[#FACC15]">tête ?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                Demandez un devis gratuit ; nous répondons sous 48 h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/devis"
                  onClick={() => trackQuoteRequest('competences_cta')}
                  className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/qui-sommes-nous"
                  className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
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
