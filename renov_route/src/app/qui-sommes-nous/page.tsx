'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import { ContactTracker } from '@/components/AnalyticsTracker';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      <StructuredData type="contact" />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://renov-route.com/" },
        { name: "Qui sommes-nous", url: "https://renov-route.com/qui-sommes-nous/" }
      ]} />
      <Script
        id="ldjson-qui-sommes-nous"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Qui sommes-nous - Expert Réparation Nids de Poule et Marquage Routier",
            "description": "Découvrez Rénov Route, expert en traçage marquage routier et réparation de nids de poule. Notre histoire, notre équipe et notre mission pour la sécurité routière.",
            "url": "https://renov-route.com/qui-sommes-nous",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Rénov Route",
              "telephone": "07 86 81 96 92",
              "email": "contact@renov-route.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6, allée du ruisseau de Ribbes",
                "addressLocality": "Tassin la demi-lune",
                "postalCode": "69160",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "07 86 81 96 92",
                "contactType": "customer service",
                "availableLanguage": "French",
                "areaServed": "FR"
              }
            }
          })
        }}
      />
      <Layout>
        <SafariAnimationFix>
          <section className="pt-32 pb-20 px-4 bg-[#141922]">
            <div className="max-w-6xl mx-auto">
              <MotionDiv
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-display">Qui sommes-nous ?</h1>
                <p className="text-gray-400 text-lg">contact@renov-route.com — Tel : 07 86 81 96 92</p>
              </MotionDiv>

              {/* Coordonnées + Photo */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Coordonnées */}
                <MotionDiv
                  className="p-8 rounded-2xl border border-white/10 bg-[#141922]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-6">Nos coordonnées</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium mb-0.5">Téléphone</p>
                        <ContactTracker type="phone" value="0786819692">
                          <a href="tel:0786819692" className="text-white text-base sm:text-lg hover:text-amber-400 transition-colors">
                            07 86 81 96 92
                          </a>
                        </ContactTracker>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium mb-0.5">Email</p>
                        <ContactTracker type="email" value="contact@renov-route.com">
                          <a href="mailto:contact@renov-route.com" className="text-white text-base sm:text-lg hover:text-amber-400 transition-colors">
                            contact@renov-route.com
                          </a>
                        </ContactTracker>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium mb-0.5">Adresse</p>
                        <p className="text-white text-base sm:text-lg">
                          6, allée du ruisseau de Ribbes<br />
                          69160 Tassin la demi-lune, Rhône Alpes<br />
                          Siret : 818 745 515 00010
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>

                {/* Photo */}
                <MotionDiv
                  className="rounded-2xl border border-white/10 overflow-hidden relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative w-full h-80 sm:h-96">
                    <Image
                      src="/assets/images/xavier-de-caumont.jpg"
                      alt="Xavier de Caumont - Fondateur Rénov Route"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                    <p className="text-white text-lg font-semibold">Xavier de Caumont</p>
                    <p className="text-gray-300 text-sm">Fondateur de Rénov Route</p>
                  </div>
                </MotionDiv>
              </div>

              {/* À Propos */}
              <MotionDiv
                className="max-w-4xl mx-auto p-8 rounded-2xl border border-white/10 bg-[#141922]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-white mb-6">À Propos de Rénov Route</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    La sécurité routière est un véritable enjeu pour les gouvernements successifs depuis plus de 10 ans.
                    La mortalité routière a chuté de moitié, mais reste supérieure à 3000 morts par an.
                  </p>
                  <p>
                    La signalétique et l&apos;état des routes sont mis en cause dans 47% des accidents.
                    (source 40 millions d&apos;automobilistes)
                  </p>
                  <p>
                    Les communes et les entreprises ont la responsabilité de l&apos;entretien de leur réseau/parkings,
                    mais les budgets tendent à se resserrer.
                  </p>
                  <p>
                    L&apos;histoire de Rénov Route commence par une rencontre fortuite : un client nous a approché
                    pour retracer 40 parkings. Cette demande, qui semblait ambitieuse à l&apos;époque, a marqué un tournant
                    décisif dans notre parcours. Nous avons relevé le défi avec détermination, et cette première
                    mission a révélé notre passion pour l&apos;excellence du marquage routier.
                  </p>
                  <p>
                    Depuis cette expérience fondatrice, le marquage routier est devenu notre métier. Nous avons
                    développé une expertise technique pointue et une approche innovante qui nous permettent
                    aujourd&apos;hui de répondre aux défis les plus complexes du secteur.
                  </p>
                  <p>
                    Basés à Tassin-la-Demi-Lune près de Lyon, nous intervenons dans toute la région Rhône-Alpes
                    et sur l&apos;ensemble du territoire français. Notre équipe de professionnels qualifiés maîtrise
                    toutes les techniques de marquage au sol : peinture routière, résine époxy, thermoplastique
                    et enrobé à froid pour la réparation de nids de poule.
                  </p>
                  <p>
                    Nous travaillons avec des enseignes reconnues comme Carrefour, Lidl, Intermarché, McDonald&apos;s
                    et Burger King, ainsi qu&apos;avec des collectivités locales et des institutions comme l&apos;Armée de Terre.
                    Cette confiance témoigne de notre engagement envers la qualité et le respect des délais.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
