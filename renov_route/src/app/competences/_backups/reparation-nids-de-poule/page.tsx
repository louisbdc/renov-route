'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceStructuredData from '@/components/ServiceStructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function ReparationNidsDePoulePage() {
  const { isSafari } = useSafariOptimization();


  return (
    <>
      <ServiceStructuredData serviceType="reparation-nids-de-poule" />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://www.renov-route.com/" },
        { name: "Compétences", url: "https://www.renov-route.com/competences" },
        { name: "Réparation nids de poule", url: "https://www.renov-route.com/competences/reparation-nids-de-poule" }
      ]} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Réparation de Nids de Poule",
            "description": "Réparation professionnelle de nids de poule avec de la résine. Procédé innovant, durable et résistant.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Renov Route"
            },
            "areaServed": "France",
            "serviceType": "Réparation routière"
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
                  <span className="text-white">Réparation de nids de poule</span>
                </div>
              </nav>

              {/* Glassmorphism title container */}
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-3xl sm:text-4xl">
                      🔧
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Réparation de <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Nids de Poule</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Procédé innovant et résistant pour réparer efficacement les nids de poule 
                    avec de la résine de haute qualité. Une solution durable et professionnelle.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-3xl sm:text-4xl">
                      🔧
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Réparation de <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Nids de Poule</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Procédé innovant et résistant pour réparer efficacement les nids de poule 
                    avec de la résine de haute qualité. Une solution durable et professionnelle.
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  {isSafari ? (
                    <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Notre expertise en réparation de nids de poule
                      </h2>
                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Les nids de poule représentent un véritable fléau pour les infrastructures routières. 
                          Ils causent des dommages aux véhicules, réduisent la sécurité des usagers et dégradent 
                          l'image de votre établissement.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre procédé de réparation à la résine révolutionne la maintenance routière. 
                          Contrairement aux méthodes traditionnelles, notre solution offre une durabilité 
                          exceptionnelle et une résistance aux intempéries.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous utilisons des matériaux de pointe et des techniques éprouvées pour garantir 
                          des réparations qui durent dans le temps, réduisant ainsi les coûts de maintenance 
                          à long terme.
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
                        Notre expertise en réparation de nids de poule
                      </motion.h2>
                      <motion.div 
                        className="space-y-4 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg leading-relaxed">
                          Les nids de poule représentent un véritable fléau pour les infrastructures routières. 
                          Ils causent des dommages aux véhicules, réduisent la sécurité des usagers et dégradent 
                          l'image de votre établissement.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre procédé de réparation à la résine révolutionne la maintenance routière. 
                          Contrairement aux méthodes traditionnelles, notre solution offre une durabilité 
                          exceptionnelle et une résistance aux intempéries.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous utilisons des matériaux de pointe et des techniques éprouvées pour garantir 
                          des réparations qui durent dans le temps, réduisant ainsi les coûts de maintenance 
                          à long terme.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "⚡",
                      title: "Réparation rapide",
                      description: "Intervention en moins de 2 heures pour la plupart des nids de poule"
                    },
                    {
                      icon: "🛡️",
                      title: "Durabilité exceptionnelle",
                      description: "Résistance aux intempéries et au trafic intense pendant des années"
                    },
                    {
                      icon: "🔧",
                      title: "Matériaux de qualité",
                      description: "Résine haute performance et additifs spéciaux pour une adhérence parfaite"
                    },
                    {
                      icon: "🚗",
                      title: "Tous types de routes",
                      description: "Intervention sur routes, parkings, cours d'entreprises et voies privées"
                    }
                  ].map((feature, index) => (
                    isSafari ? (
                      <div key={index} className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-xl flex-shrink-0">
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
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-xl flex-shrink-0">
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

          {/* Process Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Notre <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Processus</span> de Réparation
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Un processus structuré et professionnel pour garantir des résultats durables
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
                      Notre <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Processus</span> de Réparation
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Un processus structuré et professionnel pour garantir des résultats durables
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Diagnostic",
                    description: "Analyse approfondie du nid de poule et évaluation des dommages"
                  },
                  {
                    step: "02",
                    title: "Préparation",
                    description: "Nettoyage et préparation de la surface pour une adhérence optimale"
                  },
                  {
                    step: "03",
                    title: "Réparation",
                    description: "Application de la résine spécialisée selon nos techniques éprouvées"
                  },
                  {
                    step: "04",
                    title: "Finition",
                    description: "Contrôle qualité et finition professionnelle pour un résultat parfait"
                  }
                ].map((step, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{step.description}</p>
                    </div>
                  ) : (
                    <motion.div 
                      key={index}
                      className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{step.description}</p>
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Besoin d'une <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">réparation</span> ?
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour un diagnostic gratuit et un devis personnalisé. 
                    Nos experts sont à votre disposition pour tous vos besoins de réparation routière.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    Besoin d'une <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">réparation</span> ?
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Contactez-nous pour un diagnostic gratuit et un devis personnalisé. 
                    Nos experts sont à votre disposition pour tous vos besoins de réparation routière.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
