'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '@/components/Layout';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import { ContactTracker } from '@/components/AnalyticsTracker';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { caseStudies } from '@/lib/data/case-studies';

const STATS = [
  { value: '2014', label: 'Année de création' },
  { value: '1 000+', label: 'Parkings réalisés' },
  { value: '10+', label: "Ans d'expertise" },
  { value: '20+', label: 'Enseignes partenaires' },
  { value: '5/5', label: 'Note Google' },
  { value: 'NF EN 1436', label: 'Peintures certifiées' },
];

const PARTNERS = [
  { name: 'Carrefour', logo: '/assets/images/references/Logo_Carrefour.webp' },
  { name: 'Lidl', logo: '/assets/images/references/Lidl-Logo.webp' },
  { name: 'Intermarché', logo: '/assets/images/references/Intermarche_logo.webp' },
  { name: 'Aldi', logo: '/assets/images/references/Aldi_logo.webp' },
  { name: 'Casino', logo: '/assets/images/references/Logo_of_Casino.webp' },
  { name: "McDonald's", logo: '/assets/images/references/McDonald_logo.webp' },
  { name: 'Burger King', logo: '/assets/images/references/burger_king_logo.png' },
  { name: 'Armée de Terre', logo: '/assets/images/references/Logo_of_the_French_Army.webp' },
  { name: 'Armée de l\'Air', logo: '/assets/images/references/logo-armee-air.webp' },
  { name: 'La Poste', logo: '/assets/images/references/Logo-laposte.webp' },
  { name: 'Suez', logo: '/assets/images/references/Logo_Suez.webp' },
  { name: 'Apave', logo: '/assets/images/references/Apave-Logo.webp' },
  { name: 'Kiloutou', logo: '/assets/images/references/Kiloutou_logo.webp' },
  { name: 'Brico Dépôt', logo: '/assets/images/references/Brico_Depot.png' },
  { name: 'Richardson', logo: '/assets/images/references/Logo-RICHARDSON.webp' },
  { name: 'La Halle', logo: '/assets/images/references/la-halle.webp' },
  { name: 'Hexatrans', logo: '/assets/images/references/logo-hexatrans.webp' },
  { name: 'Galyo', logo: '/assets/images/references/galyo.avif' },
  { name: 'Carglass', logo: '/assets/images/references/Carglass_logo.png' },
];

const SERVICES = [
  { name: 'Traçage de parking', href: '/competences/tracage-retracage-parking/', desc: 'Marquage au sol conforme NF EN 1436 et normes PMR' },
  { name: 'Réparation nids de poule', href: '/competences/reparation-nids-de-poule/', desc: 'Résine polyuréthane, durée de vie 5 à 10 ans' },
  { name: 'Signalisation verticale', href: '/competences/signalisation-verticale/', desc: 'Panneaux PMR, stop, limitation de vitesse' },
  { name: 'Résine de sol', href: '/competences/resine-sol-marquage-interieur/', desc: 'Époxy et polyuréthane pour intérieur et industriel' },
  { name: 'Accessoires parking', href: '/competences/accessoires-parking/', desc: 'Bornes, barrières, butées, ralentisseurs' },
  { name: 'Conseil et expertise', href: '/competences/conseil-expertise/', desc: 'Audit, diagnostic PMR, étude de faisabilité' },
];

const featuredRealisations = caseStudies.slice(0, 3);

export default function ContactPage() {
  return (
    <>
      <StructuredData type="contact" />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: 'https://renov-route.com/' },
          { name: 'Qui sommes-nous', url: 'https://renov-route.com/qui-sommes-nous/' },
        ]}
      />
      <Script
        id="ldjson-qui-sommes-nous"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            '@id': 'https://renov-route.com/qui-sommes-nous/#profile',
            name: 'Xavier de Caumont, Fondateur de Rénov Route',
            description:
              "Page fondateur et entreprise : Xavier de Caumont, créateur de Rénov Route en 2014, société spécialisée dans le marquage au sol et la rénovation de parking basée à Tassin-la-Demi-Lune.",
            url: 'https://renov-route.com/qui-sommes-nous/',
            inLanguage: 'fr-FR',
            isPartOf: { '@id': 'https://renov-route.com/#website' },
            about: { '@id': 'https://renov-route.com/#organization' },
            mainEntity: {
              '@type': 'Person',
              '@id': 'https://renov-route.com/#xavier-de-caumont',
              name: 'Xavier de Caumont',
              givenName: 'Xavier',
              familyName: 'de Caumont',
              url: 'https://renov-route.com/qui-sommes-nous/',
              image: 'https://renov-route.com/assets/images/xavier-de-caumont.jpg',
              jobTitle: 'Fondateur de Rénov Route',
              description:
                "Fondateur de Rénov Route en 2014, Xavier de Caumont dirige une équipe spécialisée dans le marquage au sol, le traçage de parking et la réparation de chaussée. Directeur de la publication du site renov-route.com. Plus de 1 000 parkings réalisés depuis 2014.",
              worksFor: { '@id': 'https://renov-route.com/#organization' },
              knowsAbout: [
                'Marquage routier',
                'Traçage parking',
                'Signalisation horizontale',
                'Norme NF EN 1436',
                'Mise en conformité PMR',
                'Résine polyuréthane',
                'Enrobé à froid',
              ],
              nationality: { '@type': 'Country', name: 'France' },
              workLocation: {
                '@type': 'Place',
                name: 'Rénov Route, Tassin-la-Demi-Lune',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '6 allée du ruisseau de Ribbes',
                  addressLocality: 'Tassin-la-Demi-Lune',
                  postalCode: '69160',
                  addressRegion: 'Auvergne-Rhône-Alpes',
                  addressCountry: 'FR',
                },
              },
            },
          }),
        }}
      />
      <Layout>
        <SafariAnimationFix>
          {/* Hero */}
          <section className="pt-28 sm:pt-32 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Qui sommes-nous
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display leading-tight">
                  Rénov Route, experts du marquage au sol et de la rénovation parking depuis 2014
                </h1>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                  Entreprise française basée à Tassin-la-Demi-Lune près de Lyon, spécialisée dans le
                  traçage de parking, la réparation de chaussée à la résine polyuréthane, la
                  signalisation horizontale et la mise en conformité PMR. Plus de 1 000 parkings
                  réalisés depuis 2014 pour des enseignes nationales et des collectivités.
                </p>
              </MotionDiv>

              {/* Stats grid */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
              >
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-[#FACC15] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </MotionDiv>
            </div>
          </section>

          {/* Coordonnées + Fondateur */}
          <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Coordonnées */}
                <MotionDiv
                  className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-[#0F172A] mb-6">Nos coordonnées</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FACC15] p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium mb-0.5">Téléphone</p>
                        <ContactTracker type="phone" value="0786819692">
                          <a href="tel:0786819692" className="text-[#0F172A] text-base sm:text-lg hover:text-[#FACC15] transition-colors">
                            07 86 81 96 92
                          </a>
                        </ContactTracker>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#FACC15] p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium mb-0.5">Email</p>
                        <ContactTracker type="email" value="contact@renov-route.com">
                          <a href="mailto:contact@renov-route.com" className="text-[#0F172A] text-base sm:text-lg hover:text-[#FACC15] transition-colors">
                            contact@renov-route.com
                          </a>
                        </ContactTracker>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#FACC15] p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium mb-0.5">Adresse</p>
                        <p className="text-[#0F172A] text-base sm:text-lg">
                          6, allée du ruisseau de Ribbes<br />
                          69160 Tassin-la-Demi-Lune, Auvergne-Rhône-Alpes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#FACC15] p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium mb-0.5">Informations légales</p>
                        <p className="text-[#0F172A] text-sm sm:text-base leading-relaxed">
                          SARL au capital de 10 000 €<br />
                          SIRET 818 745 515 00010 · RCS Lyon<br />
                          Directeur de la publication : Xavier de Caumont
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>

                {/* Fondateur */}
                <MotionDiv
                  className="border border-slate-200 overflow-hidden relative flex flex-col bg-[#0F172A]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative w-full h-80 sm:h-96">
                    <Image
                      src="/assets/images/xavier-de-caumont.jpg"
                      alt="Xavier de Caumont, Fondateur Rénov Route"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 bg-[#0F172A]">
                    <p className="text-[#FACC15] text-[11px] font-black uppercase tracking-[0.25em] mb-3">
                      Fondateur
                    </p>
                    <p className="text-white text-2xl sm:text-3xl font-black italic uppercase tracking-tight mb-3">Xavier de Caumont</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      10+ ans d&apos;expertise marquage au sol · Directeur de la publication · Dirige
                      l&apos;équipe Rénov Route depuis 2014
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </section>

          {/* Notre histoire */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Notre histoire
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 font-display">
                  D&apos;un premier contrat de 40 parkings à plus de 1 000 projets
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    L&apos;histoire de Rénov Route commence en 2014 par une rencontre fortuite : un
                    client nous approche pour retracer <strong>40 parkings</strong>. La demande
                    semble ambitieuse à l&apos;époque, mais elle marque le tournant décisif de notre
                    parcours. Nous relevons le défi, et cette première mission révèle notre passion
                    pour l&apos;excellence du marquage routier.
                  </p>
                  <p>
                    Depuis cette expérience fondatrice, le marquage routier et la rénovation de
                    parking sont devenus notre métier. Nous avons progressivement construit une
                    expertise technique pointue qui nous permet aujourd&apos;hui de traiter aussi
                    bien le petit parking de copropriété que la flotte de 50 parkings d&apos;une
                    enseigne de grande distribution.
                  </p>
                  <p>
                    Plus de dix ans plus tard, Rénov Route a réalisé{' '}
                    <strong>plus de 1 000 parkings</strong> en France. L&apos;entreprise compte une
                    équipe de 5 à 10 professionnels qualifiés et intervient dans toute la France
                    depuis son siège de Tassin-la-Demi-Lune.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </section>

          {/* Notre mission */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Notre mission
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 font-display">
                  Rendre la route et les parkings plus sûrs, durables et conformes
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    La sécurité routière est un enjeu majeur pour les gouvernements successifs depuis
                    plus de dix ans. La mortalité routière a chuté de moitié, mais elle reste
                    supérieure à <strong>3 000 morts par an</strong>. Selon 40 millions
                    d&apos;automobilistes, la signalétique et l&apos;état des routes sont mis en
                    cause dans <strong>47 % des accidents</strong>.
                  </p>
                  <p>
                    Les communes, les entreprises et les copropriétés ont la responsabilité de
                    l&apos;entretien de leur réseau ou de leurs parkings, mais les budgets tendent
                    à se resserrer. Notre mission consiste à livrer des prestations durables,
                    conformes aux normes en vigueur et au meilleur rapport qualité-prix, pour que
                    nos clients ne refassent pas les mêmes travaux tous les deux ans.
                  </p>
                  <p>
                    Nous sommes également engagés sur la{' '}
                    <strong>mise en conformité PMR</strong> des parkings. Les sanctions peuvent
                    atteindre 45 000 € pour une personne physique et 225 000 € pour une personne
                    morale. Notre service conseil et expertise accompagne nos clients depuis le
                    diagnostic jusqu&apos;à la réception des travaux.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </section>

          {/* Notre expertise */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Notre expertise
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
                  Certifications, techniques maîtrisées et conformité réglementaire
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Notre équipe maîtrise toutes les techniques de marquage au sol et de réparation de
                  chaussée. Nous travaillons exclusivement avec des matériaux certifiés et appliquons
                  les normes françaises et européennes en vigueur.
                </p>
              </MotionDiv>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Certification NF EN 1436</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Toutes nos peintures de marquage routier sont certifiées NF EN 1436, la norme
                    européenne de référence pour la signalisation horizontale.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Peinture acrylique routière</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Solution polyvalente pour marquage de parking et voirie. Durée de vie 3 à 5 ans
                    selon trafic.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Résine thermoplastique</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Haute résistance pour zones à fort trafic (grandes surfaces, sites industriels).
                    Très bonne rétroréflexion nocturne.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Résine époxy &amp; polyuréthane</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Pour sols industriels, entrepôts, parkings souterrains et marquage
                    d&apos;intérieur. Résistante aux hydrocarbures.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Enrobé à froid &amp; résine polyuréthane</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Réparation durable de nids de poule. Notre procédé à la résine polyuréthane tient
                    5 à 10 ans, contre quelques mois pour l&apos;enrobé à froid en sac.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-[#0F172A] font-semibold mb-3">Conformité PMR &amp; normes ERP</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Dimensions, marquage, signalisation, cheminement accessible : nous appliquons
                    strictement l&apos;arrêté du 20 avril 2017 et les règles du Code de la
                    construction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Nos services
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
                  Ce que nous proposons
                </h2>
              </MotionDiv>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-[#141922] transition-colors group"
                  >
                    <h3 className="font-semibold text-[#0F172A] group-hover:text-amber-300 transition-colors mb-2">
                      {s.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Ils nous font confiance */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Ils nous font confiance
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
                  Plus de 20 enseignes nationales, collectivités et institutions
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Grandes surfaces, restauration rapide, armée, services publics : des
                  organisations exigeantes qui ont choisi Rénov Route pour le traçage de leurs
                  parkings et la rénovation de leurs voiries.
                </p>
              </MotionDiv>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                {PARTNERS.map((p, i) => (
                  <div
                    key={i}
                    className="aspect-square p-3 sm:p-4 rounded-xl border border-slate-200 bg-white/95 flex items-center justify-center hover:border-amber-500/40 transition-colors"
                    title={p.name}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={p.logo}
                        alt={`Logo ${p.name}`}
                        fill
                        sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Réalisations teaser */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
              >
                <div>
                  <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                    Nos réalisations
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display">
                    Quelques projets récents
                  </h2>
                </div>
                <Link
                  href="/realisations"
                  className="text-[#FACC15] hover:text-amber-300 font-medium text-sm sm:text-base transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Voir toutes les réalisations
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </MotionDiv>

              <div className="grid md:grid-cols-3 gap-5">
                {featuredRealisations.map((r, i) => (
                  <Link
                    key={i}
                    href={`/realisations/${r.slug}`}
                    className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={r.thumbnail}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-[#FACC15] font-semibold uppercase tracking-wide mb-2">
                        {r.industry} · {r.year}
                      </p>
                      <h3 className="font-semibold text-[#0F172A] group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                        {r.client}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {r.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Zones d'intervention */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Zones d&apos;intervention
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 font-display">
                  Lyon, Auvergne-Rhône-Alpes et toute la France
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Basés à Tassin-la-Demi-Lune (69) près de Lyon, nous intervenons sur toute la
                    métropole lyonnaise (Lyon, Villeurbanne, Vénissieux, Écully, Caluire-et-Cuire,
                    Rillieux-la-Pape, Bron, Saint-Priest, Vaulx-en-Velin) et dans tout le département
                    du Rhône.
                  </p>
                  <p>
                    Nous couvrons également l&apos;ensemble de la région Auvergne-Rhône-Alpes :
                    Saint-Étienne, Grenoble, Valence, Annecy, Chambéry, Bourg-en-Bresse, Vienne. Nous
                    intervenons sur l&apos;ensemble du territoire français pour les enseignes ayant
                    besoin d&apos;un prestataire unique sur leur parc national.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </section>

          {/* Nos engagements */}
          <section className="py-14 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
              >
                <p className="text-[#FACC15] text-sm font-semibold mb-3 tracking-wide uppercase">
                  Nos engagements
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
                  Pourquoi nos clients nous choisissent
                </h2>
              </MotionDiv>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <p className="text-2xl font-bold text-[#FACC15] mb-2">24 h</p>
                  <h3 className="text-[#0F172A] font-semibold mb-2">Devis gratuit</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Étude et devis personnalisé envoyés sous 24 heures. Sans engagement.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <p className="text-2xl font-bold text-[#FACC15] mb-2">48 h</p>
                  <h3 className="text-[#0F172A] font-semibold mb-2">Intervention rapide</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Intervention sur site sous 48 h pour les urgences (nids de poule,
                    non-conformité PMR).
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <p className="text-2xl font-bold text-[#FACC15] mb-2">5-10 ans</p>
                  <h3 className="text-[#0F172A] font-semibold mb-2">Durabilité garantie</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Nos peintures NF EN 1436 tiennent 3 à 5 ans. Notre résine polyuréthane pour nids
                    de poule tient 5 à 10 ans.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <p className="text-2xl font-bold text-[#FACC15] mb-2">100 %</p>
                  <h3 className="text-[#0F172A] font-semibold mb-2">Transparence</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Prix clairs, fourchettes affichées sur nos guides, pas de mauvaise surprise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4 border-t border-slate-100">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
                Un projet de marquage ou de rénovation parking ?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Diagnostic gratuit sur site, devis personnalisé sous 24 heures. Aucun engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/devis"
                  className="bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-semibold py-3 px-7 rounded-lg transition-colors duration-200"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/realisations"
                  className="border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-[#F8FAFC]"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
