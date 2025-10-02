'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import { ContactTracker } from '@/components/AnalyticsTracker';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import Script from 'next/script';

export default function ContactPage() {
  const { isSafari } = useSafariOptimization();



  return (
    <>
      <StructuredData type="contact" />
      {/* Métadonnées gérées via metadata dans `layout.tsx` */}
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
      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4 animated-gradient-slow">
        <div className="max-w-6xl mx-auto">
          {isSafari ? (
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Qui sommes-nous ?</h2>
              <p className="text-xl text-gray-300 mb-4">contact@renov-route.com</p>
              <p className="text-lg text-primary-500 font-semibold">Tel : 07 86 81 96 92</p>
            </div>
          ) : (
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Qui sommes-nous ?</h2>
              <p className="text-xl text-gray-300 mb-4">contact@renov-route.com</p>
              <p className="text-lg text-primary-500 font-semibold">Tel : 07 86 81 96 92</p>
            </motion.div>
          )}
          
          {/* Première ligne : Coordonnées (gauche) et Photo (droite) */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Coordonnées - Gauche */}
            {isSafari ? (
              <div className="glassmorphism-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Téléphone</p>
                      <ContactTracker type="phone" value="0786819692">
                        <a href="tel:0786819692" className="text-white text-lg hover:text-primary-500 transition-colors">
                          07 86 81 96 92
                        </a>
                      </ContactTracker>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <ContactTracker type="email" value="contact@renov-route.com">
                        <a href="mailto:contact@renov-route.com" className="text-white text-lg hover:text-primary-500 transition-colors">
                          contact@renov-route.com
                        </a>
                      </ContactTracker>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Adresse</p>
                      <p className="text-white text-lg">
                        6, allée du ruisseau de Ribbes<br />
                        69160 Tassin la demi-lune, Rhône Alpes<br />
                        Siret : 818 745 515 00010
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                className="glassmorphism-card p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Téléphone</p>
                      <ContactTracker type="phone" value="0786819692">
                        <a href="tel:0786819692" className="text-white text-lg hover:text-primary-500 transition-colors">
                          07 86 81 96 92
                        </a>
                      </ContactTracker>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <ContactTracker type="email" value="contact@renov-route.com">
                        <a href="mailto:contact@renov-route.com" className="text-white text-lg hover:text-primary-500 transition-colors">
                          contact@renov-route.com
                        </a>
                      </ContactTracker>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Adresse</p>
                      <p className="text-white text-lg">
                        6, allée du ruisseau de Ribbes<br />
                        69160 Tassin la demi-lune, Rhône Alpes<br />
                        Siret : 818 745 515 00010
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Photo - Droite */}
            {isSafari ? (
              <div className="glassmorphism-card p-0 overflow-hidden">
                <div className="relative w-full h-96">
                  <Image
                    src="/assets/images/XAVIER DE CAUMONT 2.jpg"
                    alt="Xavier de Caumont - Fondateur Rénov Route"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                  <p className="text-white text-xl font-semibold">Xavier de Caumont</p>
                  <p className="text-gray-300">Fondateur de Rénov Route</p>
                </div>
              </div>
            ) : (
              <motion.div 
                className="glassmorphism-card p-0 overflow-hidden relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="relative w-full h-96">
                  <Image
                    src="/assets/images/XAVIER DE CAUMONT 2.jpg"
                    alt="Xavier de Caumont - Fondateur Rénov Route"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                  <p className="text-white text-xl font-semibold">Xavier de Caumont</p>
                  <p className="text-gray-300">Fondateur de Rénov Route</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Section À Propos */}
          <div className="max-w-4xl mx-auto">
            {isSafari ? (
              <div className="glassmorphism-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">À Propos de Rénov Route</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    La sécurité routière est un véritable enjeu pour les gouvernements successifs depuis plus de 10 ans. 
                    La mortalité routière a chuté de moitié, mais reste supérieure à 3000 morts par an.
                  </p>
                  <p>
                    La signalétique et l'état des routes sont mis en cause dans 47% des accidents. 
                    (source 40 millions d'automobilistes)
                  </p>
                  <p>
                    Les communes et les entreprises ont la responsabilité de l'entretien de leur réseau/parkings, 
                    mais les budgets tendent à se resserrer.
                  </p>
                  <p>
                    L'histoire de Rénov Route commence par une rencontre fortuite : un client nous a approché 
                    pour retracer 40 parkings. Cette demande, qui semblait ambitieuse à l'époque, a marqué un tournant 
                    décisif dans notre parcours. Nous avons relevé le défi avec détermination, et cette première 
                    mission a révélé notre passion pour l'excellence du marquage routier.
                  </p>
                  <p>
                    Depuis cette expérience fondatrice, le marquage routier est devenu notre métier. Nous avons 
                    développé une expertise technique pointue et une approche innovante qui nous permettent 
                    aujourd'hui de répondre aux défis les plus complexes du secteur.
                  </p>
                </div>
              </div>
            ) : (
              <motion.div 
                className="glassmorphism-card p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">À Propos de Rénov Route</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    La sécurité routière est un véritable enjeu pour les gouvernements successifs depuis plus de 10 ans. 
                    La mortalité routière a chuté de moitié, mais reste supérieure à 3000 morts par an.
                  </p>
                  <p>
                    La signalétique et l'état des routes sont mis en cause dans 47% des accidents. 
                    (source 40 millions d'automobilistes)
                  </p>
                  <p>
                    Les communes et les entreprises ont la responsabilité de l'entretien de leur réseau/parkings, 
                    mais les budgets tendent à se resserrer.
                  </p>
                  <p>
                    L'histoire de Rénov Route commence par une rencontre fortuite : un client nous a approché 
                    pour retracer 40 parkings. Cette demande, qui semblait ambitieuse à l'époque, a marqué un tournant 
                    décisif dans notre parcours. Nous avons relevé le défi avec détermination, et cette première 
                    mission a révélé notre passion pour l'excellence du marquage routier.
                  </p>
                  <p>
                    Depuis cette expérience fondatrice, le marquage routier est devenu notre métier. Nous avons 
                    développé une expertise technique pointue et une approche innovante qui nous permettent 
                    aujourd'hui de répondre aux défis les plus complexes du secteur.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      </SafariAnimationFix>
      </Layout>
    </>
  );
}
