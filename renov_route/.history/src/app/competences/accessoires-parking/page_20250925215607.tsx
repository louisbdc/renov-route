'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import ServiceStructuredData from '@/components/ServiceStructuredData';
import SEOHead from '@/components/SEOHead';

export default function AccessoiresParkingPage() {
  const { isSafari } = useSafariOptimization();

  useEffect(() => {
    // Ajouter la balise canonique
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://renov-route.com/competences/accessoires-parking';
    
    // Vérifier si elle n'existe pas déjà
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <>
      <ServiceStructuredData serviceType="accessoires-parking" />
      <SEOHead 
        title="Accessoires Parking - Bornes, Ralentisseurs & Butées"
        description="Équipements de sécurité et d'organisation pour optimiser la circulation et protéger les infrastructures de votre parking : bornes anti-bélier, ralentisseurs, butées de parking."
        keywords="accessoires parking, bornes anti-bélier, ralentisseurs, butées parking, équipements parking, sécurité parking, organisation parking"
        pageKey="accessoires-parking"
        canonicalUrl="https://renov-route.com/competences/accessoires-parking"
      />
        <title>Accessoires de Parking - Bornes, Ralentisseurs, Butées | Renov Route</title>
        <meta name="description" content="Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking. Installation et maintenance d'équipements de sécurité pour parkings." />
        <meta name="keywords" content="accessoires parking, bornes anti-bélier, ralentisseurs, butées parking, équipements sécurité, mobilier urbain, protection parking" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Accessoires de Parking - Bornes, Ralentisseurs, Butées | Renov Route" />
        <meta property="og:description" content="Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking." />
        <meta property="og:url" content="https://renov-route.com/competences/accessoires-parking" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Accessoires de Parking - Bornes, Ralentisseurs, Butées | Renov Route" />
        <meta name="twitter:description" content="Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Accessoires de Parking",
            "description": "Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Renov Route"
            },
            "areaServed": "France",
            "serviceType": "Équipements de parking"
          })}
        </script>
      <Layout>
        <SafariAnimationFix>
          {/* Hero Section */}
          <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-20"></div>
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            
            <div className="relative max-w-6xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <span>/</span>
                  <Link href="/competences" className="hover:text-white transition-colors">Compétences</Link>
                  <span>/</span>
                  <span className="text-white">Accessoires de parking</span>
                </div>
              </nav>

              {/* Glassmorphism title container */}
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🛡️
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Accessoires de Parking</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Équipements de sécurité et accessoires pour parkings : bornes anti-bélier, 
                    ralentisseurs, butées de parking et mobilier urbain professionnel.
                  </p>
                </div>
              ) : (
                <motion.div 
                  className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <motion.div 
                    className="flex items-center justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🛡️
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Accessoires de Parking</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Équipements de sécurité et accessoires pour parkings : bornes anti-bélier, 
                    ralentisseurs, butées de parking et mobilier urbain professionnel.
                  </motion.p>
                </motion.div>
              )}
            </div>
          </section>

          {/* Description Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            {/* Glassmorphism background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  {isSafari ? (
                    <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Équipements de sécurité pour parkings
                      </h2>
                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Les accessoires de parking sont essentiels pour organiser la circulation, 
                          protéger les infrastructures et assurer la sécurité des usagers. 
                          Ils contribuent à optimiser l'utilisation de l'espace et à prévenir les accidents.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous installons une gamme complète d'équipements : bornes anti-bélier pour 
                          protéger les bâtiments, ralentisseurs pour contrôler la vitesse, butées de 
                          parking pour délimiter les places, et divers accessoires de sécurité et 
                          d'organisation.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Tous nos équipements sont sélectionnés pour leur robustesse et leur conformité 
                          aux normes. Nous vous conseillons sur le choix et l'implantation optimale 
                          selon vos contraintes spécifiques.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.h2 
                        className="text-2xl sm:text-3xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Équipements de sécurité pour parkings
                      </motion.h2>
                      <motion.div 
                        className="space-y-4 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg leading-relaxed">
                          Les accessoires de parking sont essentiels pour organiser la circulation, 
                          protéger les infrastructures et assurer la sécurité des usagers. 
                          Ils contribuent à optimiser l'utilisation de l'espace et à prévenir les accidents.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous installons une gamme complète d'équipements : bornes anti-bélier pour 
                          protéger les bâtiments, ralentisseurs pour contrôler la vitesse, butées de 
                          parking pour délimiter les places, et divers accessoires de sécurité et 
                          d'organisation.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Tous nos équipements sont sélectionnés pour leur robustesse et leur conformité 
                          aux normes. Nous vous conseillons sur le choix et l'implantation optimale 
                          selon vos contraintes spécifiques.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "🛡️",
                      title: "Protection renforcée",
                      description: "Équipements robustes pour protéger vos infrastructures et véhicules"
                    },
                    {
                      icon: "🚗",
                      title: "Contrôle de circulation",
                      description: "Gestion efficace des flux de véhicules et de la vitesse"
                    },
                    {
                      icon: "📐",
                      title: "Installation précise",
                      description: "Pose professionnelle respectant les normes et contraintes techniques"
                    },
                    {
                      icon: "🔧",
                      title: "Maintenance incluse",
                      description: "Service après-vente et maintenance pour garantir la durabilité"
                    }
                  ].map((feature, index) => (
                    isSafari ? (
                      <div key={index} className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-xl flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.div 
                        key={index}
                        className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-xl flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Nos <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Équipements</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Une gamme complète d'accessoires de parking pour tous vos besoins
                    </p>
                  </div>
                ) : (
                  <motion.div 
                    className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Nos <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Équipements</span>
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Une gamme complète d'accessoires de parking pour tous vos besoins
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: "🏛️",
                    title: "Bornes anti-bélier",
                    description: "Protection efficace des façades et infrastructures contre les chocs"
                  },
                  {
                    icon: "🚧",
                    title: "Ralentisseurs",
                    description: "Contrôle de la vitesse pour améliorer la sécurité de circulation"
                  },
                  {
                    icon: "🛑",
                    title: "Butées de parking",
                    description: "Délimitation précise des places de stationnement"
                  },
                  {
                    icon: "🚪",
                    title: "Barrières et portiques",
                    description: "Contrôle d'accès et délimitation des zones de parking"
                  },
                  {
                    icon: "💡",
                    title: "Éclairage de sécurité",
                    description: "Solutions d'éclairage pour améliorer la visibilité et la sécurité"
                  },
                  {
                    icon: "📋",
                    title: "Signalétique",
                    description: "Panneaux d'information et de direction pour guider les usagers"
                  }
                ].map((product, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-2xl">
                        {product.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{product.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{product.description}</p>
                    </div>
                  ) : (
                    <motion.div 
                      key={index}
                      className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-2xl">
                        {product.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{product.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{product.description}</p>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Avantages</span> de nos Équipements
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Pourquoi choisir nos accessoires de parking pour vos espaces
                    </p>
                  </div>
                ) : (
                  <motion.div 
                    className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Avantages</span> de nos Équipements
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Pourquoi choisir nos accessoires de parking pour vos espaces
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    icon: "🛡️",
                    title: "Sécurité renforcée",
                    description: "Protection optimale des personnes, véhicules et infrastructures"
                  },
                  {
                    icon: "💰",
                    title: "Économies",
                    description: "Réduction des coûts de réparation et d'assurance"
                  },
                  {
                    icon: "⚡",
                    title: "Installation rapide",
                    description: "Mise en place efficace avec interruption minimale"
                  },
                  {
                    icon: "🔧",
                    title: "Maintenance simple",
                    description: "Équipements robustes nécessitant peu d'entretien"
                  }
                ].map((benefit, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-2xl">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  ) : (
                    <motion.div 
                      key={index}
                      className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-2xl">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{benefit.description}</p>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/realisations/background_competence_page.avif')] bg-cover bg-center opacity-10"></div>
            
            {/* Glassmorphism background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Sécurisez votre <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">parking</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour un devis personnalisé et découvrez comment nos accessoires 
                    de parking peuvent améliorer la sécurité et l'organisation de vos espaces.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/qui-sommes-nous" 
                      className="group glassmorphism-card border-2 border-white/20 hover:border-white/40 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:bg-white/5 backdrop-blur-sm text-sm sm:text-base"
                    >
                      Qui sommes-nous
                    </a>
                  </div>
                </div>
              ) : (
                <motion.div 
                  className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Sécurisez votre <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">parking</span>
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Contactez-nous pour un devis personnalisé et découvrez comment nos accessoires 
                    de parking peuvent améliorer la sécurité et l'organisation de vos espaces.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/qui-sommes-nous" 
                      className="group glassmorphism-card border-2 border-white/20 hover:border-white/40 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:bg-white/5 backdrop-blur-sm text-sm sm:text-base"
                    >
                      Qui sommes-nous
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
