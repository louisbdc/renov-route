'use client'

import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import SEOLinks from '@/components/SEOLinks'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionWrapper'
import {
  TbMapPin,
  TbParking,
  TbRoad,
  TbBuildingFactory2,
  TbWheelchair,
  TbPalette,
  TbCertificate,
  TbClock,
  TbShield,
  TbAward,
} from 'react-icons/tb'
import type { City } from '@/lib/data/cities'
import { getNearbyCities, CITIES } from '@/lib/data/cities'

interface LocalCityPageProps {
  city: City
}

const SERVICES = [
  { icon: <TbParking size={22} />, title: 'Marquage de parking', description: "Places, flèches, passages piétons, zones PMR, numérotation. Pour parkings de centres commerciaux, entreprises, hôtels et copropriétés.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbRoad size={22} />, title: 'Marquage routier & voirie', description: "Signalisation horizontale : lignes, bandes, flèches, zébras, îlots. Voirie publique et privée.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbBuildingFactory2 size={22} />, title: 'Marquage industriel', description: "Marquage au sol d'entrepôts, ateliers et zones logistiques : allées de circulation, zones de stockage, cheminements piétons.", link: '/competences/resine-sol-marquage-interieur/' },
  { icon: <TbWheelchair size={22} />, title: 'Mise en conformité PMR', description: "Places handicapées, bandes de guidage, signalétique au sol conforme aux normes d'accessibilité.", link: '/guides/mise-en-conformite-parking-pmr/' },
  { icon: <TbPalette size={22} />, title: 'Résine de sol & revêtement', description: "Résine époxy, polyuréthane, revêtements antidérapants pour sols industriels, garages, ateliers.", link: '/competences/resine-sol-marquage-interieur/' },
  { icon: <TbShield size={22} />, title: 'Réparation nids de poule', description: "Rebouchage à froid ou à chaud, traitement de fissures, sécurisation des chaussées dégradées.", link: '/competences/reparation-nids-de-poule/' },
]

function buildIntro(city: City): string {
  if (city.distanceFromTassin === 0) {
    return `Renov Route est implanté à ${city.name} depuis 2014 — c'est notre commune historique. Une équipe qui connaît parfaitement le terrain local, mobilisable rapidement avec un devis transparent.`
  }
  if (city.isArrondissement) {
    return `Spécialiste du marquage au sol à ${city.name}, Renov Route intervient sur tous les parkings, voiries et copropriétés de l'arrondissement. À ${city.distanceFromTassin} km de notre siège de Tassin-la-Demi-Lune, nos équipes sont sur place dans la journée.`
  }
  if (city.isRhoneAlpes) {
    return `Renov Route accompagné les gestionnaires de parkings et collectivités à ${city.name} (${city.postalCode}) depuis 2014. À ${city.distanceFromTassin} km de Lyon, nous intervenons régulièrement en ${city.department.name} avec le même niveau de qualité que sur l'agglomération lyonnaise.`
  }
  return `Entreprise de marquage au sol à ${city.name}, Renov Route intervient sur l'ensemble des parkings, voiries et zones d'activités de la commune (${city.postalCode}). À ${city.distanceFromTassin} km de notre siège de Tassin-la-Demi-Lune, nos équipes sont sur place rapidement avec un devis transparent.`
}

function buildSecondParagraph(city: City): string {
  const projets = city.references && city.references.length
    ? `Nous avons notamment réalisé ${city.references.length === 1 ? 'le chantier' : 'les chantiers'} de ${city.references.map(r => r.client).join(', ')}.`
    : `Plus de 1 000 chantiers réalisés depuis 2014, de Carrefour à Lidl en passant par McDonald's et de nombreuses copropriétés et collectivités locales.`
  return `${projets} Que vous soyez syndic, gestionnaire de centre commercial, responsable d'entreprise ou collectivité, nous adaptons notre intervention à vos contraintes (horaires, accès, trafic) et vous remettons un devis détaillé sous 24 heures.`
}

export default function LocalCityPage({ city }: LocalCityPageProps) {
  const nearby = getNearbyCities(city, 5)
  const intro = buildIntro(city)
  const second = buildSecondParagraph(city)

  // Schéma LocalBusiness ciblé sur la zone
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `https://renov-route.com/marquage-au-sol-${city.slug}/#business`,
    name: `Renov Route — Marquage au sol ${city.name}`,
    description: `Entreprise de marquage au sol et signalisation horizontale intervenant à ${city.name} (${city.postalCode}). Parking, voirie, industriel, PMR. Devis gratuit sous 24h.`,
    url: `https://renov-route.com/marquage-au-sol-${city.slug}/`,
    téléphone: '+33786819692',
    email: 'contact@renov-route.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6, allée du ruisseau de Ribbes',
      addressLocality: 'Tassin-la-Demi-Lune',
      postalCode: '69160',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        postalCode: city.postalCode,
        addressRegion: city.region,
        addressCountry: 'FR',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coords.lat,
      longitude: city.coords.lng,
    },
    serviceType: ['Marquage au sol', 'Traçage parking', 'Signalisation horizontale', 'Mise en conformité PMR', 'Résine de sol'],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    }],
    priceRange: '€€',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://renov-route.com/' },
      { '@type': 'ListItem', position: 2, name: 'Marquage au sol Lyon', item: 'https://renov-route.com/marquage-au-sol-lyon/' },
      { '@type': 'ListItem', position: 3, name: `Marquage au sol ${city.name}`, item: `https://renov-route.com/marquage-au-sol-${city.slug}/` },
    ],
  }

  // Maps embed URL (sans clé API, pour la fiche locale)
  const mapsEmbed = `https://www.google.com/maps?q=${city.coords.lat},${city.coords.lng}&z=13&output=embed`

  return (
    <Layout>
      <SafariAnimationFix>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className="pt-28 sm:pt-36 pb-20 sm:pb-24 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/80 to-[#0F172A]" />
          <div className="relative max-w-5xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="mb-10">
              <ol className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <li><Link href="/" className="hover:text-[#FACC15]">Accueil</Link></li>
                <li aria-hidden="true" className="text-slate-600">/</li>
                <li><Link href="/marquage-au-sol-lyon/" className="hover:text-[#FACC15]">Marquage au sol Lyon</Link></li>
                <li aria-hidden="true" className="text-slate-600">/</li>
                <li><span className="text-white">{city.name}</span></li>
              </ol>
            </nav>

            <MotionDiv initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 text-[#FACC15] mb-8">
              <TbMapPin size={20} />
              <span className="text-[11px] font-black uppercase tracking-[0.25em]">{city.fullName}</span>
            </MotionDiv>

            <MotionH1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8">
              Marquage au sol<br /><span className="text-[#FACC15]">{city.name}</span>
            </MotionH1>

            <MotionP initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium">
              {intro}
            </MotionP>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span className="flex items-center gap-2"><TbAward size={16} className="text-[#FACC15]" /> Depuis 2014</span>
              <span className="flex items-center gap-2"><TbCertificate size={16} className="text-[#FACC15]" /> 1 000+ chantiers</span>
              <span className="flex items-center gap-2"><TbShield size={16} className="text-[#FACC15]" /> Certif NF EN 1436</span>
              <span className="flex items-center gap-2"><TbClock size={16} className="text-[#FACC15]" /> Devis 24h</span>
            </div>
          </div>
        </section>

        {/* Description + caractéristiques locales */}
        <section className="py-20 sm:py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-8">
                  Votre expert marquage au sol à {city.name}
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
                  <p>{second}</p>
                  {city.emblematic && (
                    <p>Notre équipe connaît parfaitement la commune et ses quartiers : <strong>{city.emblematic}</strong>. Cette connaissance terrain nous permet d'anticiper les contraintes (accès, horaires de livraison, règlements de copropriété) et de planifier nos interventions sans accroc.</p>
                  )}
                  <p>
                    Tous nos marquages sont réalisés avec des peintures routières <Link href="/guides/norme-nf-en-1436-marquage-routier/" className="underline hover:text-[#FACC15]">certifiées NF EN 1436</Link>, garantissant une durabilité de 2 à 5 ans selon le trafic.
                  </p>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="aspect-[4/3] w-full overflow-hidden border border-slate-200">
                <iframe
                  src={mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localisation ${city.name}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-28 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 max-w-2xl">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">Nos prestations</span>
              <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">
                Tous nos services à {city.name}
              </h2>
            </div>
            <div className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <Link key={i} href={service.link} className="p-8 bg-white hover:bg-[#F8FAFC] transition-colors group">
                  <div className="text-[#FACC15] mb-4 text-2xl">{service.icon}</div>
                  <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] mb-3 group-hover:text-[#FACC15] transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Références locales */}
        {city.references && city.references.length > 0 && (
          <section className="py-20 sm:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-12">
                Nos chantiers à {city.name}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {city.references.map(ref => (
                  ref.caseStudySlug ? (
                    <Link key={ref.client} href={`/realisations/${ref.caseStudySlug}/`} className="block p-8 bg-[#F8FAFC] border-l-4 border-[#FACC15] hover:bg-white hover:border-[#0F172A] transition-all">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-3 block">Étude de cas</span>
                      <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A]">{ref.client}</h3>
                      <span className="inline-block mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#0F172A]">Voir le chantier →</span>
                    </Link>
                  ) : (
                    <div key={ref.client} className="p-8 bg-[#F8FAFC] border-l-4 border-[#FACC15]">
                      <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A]">{ref.client}</h3>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Communes voisines */}
        {nearby.length > 0 && (
          <section className="py-16 sm:py-20 px-6 bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-3">
                Nous intervenons aussi à proximité de {city.name}
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-8">
                Nos équipes couvrent l'ensemble de la métropole et de la région.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nearby.map(n => (
                  <Link key={n.slug} href={`/marquage-au-sol-${n.slug}/`} className="flex items-center gap-3 p-5 bg-white border border-slate-200 hover:border-[#FACC15] transition-colors group">
                    <TbMapPin size={20} className="text-[#FACC15]" />
                    <div>
                      <div className="font-black uppercase tracking-tight text-[#0F172A] group-hover:text-[#FACC15] transition-colors">{n.name}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{n.postalCode} · {n.distanceFromTassin} km</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
              Un projet à <span className="text-[#FACC15]">{city.name}</span> ?
            </h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed font-medium">
              Devis gratuit sous 24h après visite sur site. Intervention rapide partout en {city.region}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Demander un devis gratuit
              </Link>
              <a href="tel:+33786819692" className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all">
                07 86 81 96 92
              </a>
            </div>
          </div>
        </section>

        <SEOLinks />
      </SafariAnimationFix>
    </Layout>
  )
}

export function getAllCitySlugs(): string[] {
  return CITIES.map(c => c.slug)
}
