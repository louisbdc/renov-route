'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceStructuredData from '@/components/ServiceStructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function ResineSolMarquageInterieurPage() {
  const { isSafari } = useSafariOptimization();


  return (
    <>
      <ServiceStructuredData serviceType="resine-sol-marquage-interieur" />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://www.renov-route.com/" },
        { name: "Compétences", url: "https://www.renov-route.com/competences" },
        { name: "Résine de sol et marquage intérieur", url: "https://www.renov-route.com/competences/resine-sol-marquage-interieur" }
      ]} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Résine de Sol et Marquage d'Intérieur",
            "description": "Solutions complètes de résine pour sols et marquage intérieur professionnel. Revêtements durables, marquage industriel.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Renov Route"
            },
            "areaServed": "France",
            "serviceType": "Revêtement de sol et marquage"
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
                  <span className="text-white">Résine de sol et marquage d'intérieur</span>
                </div>
              </nav>

              {/* Glassmorphism title container */}
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🏗️
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Résine de Sol</span><br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">& Marquage d'Intérieur</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Solutions complètes de résine pour sols et marquage intérieur professionnel. 
                    Revêtements durables et esthétiques pour tous vos espaces industriels et commerciaux.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🏗️
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Résine de Sol</span><br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">& Marquage d'Intérieur</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Solutions complètes de résine pour sols et marquage intérieur professionnel. 
                    Revêtements durables et esthétiques pour tous vos espaces industriels et commerciaux.
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  {isSafari ? (
                    <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Solutions de revêtement et marquage intérieur
                      </h2>
                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Nos solutions de résine de sol et marquage d'intérieur transforment vos espaces 
                          industriels et commerciaux. La résine époxy offre une surface durable, 
                          hygiénique et esthétique, parfaite pour les environnements exigeants.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous réalisons tous types de marquage intérieur : délimitation de zones de travail, 
                          circuits de circulation, zones de stockage, marquage de sécurité et signalétique 
                          au sol. Chaque projet est adapté à vos contraintes opérationnelles.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre expertise couvre les usines, entrepôts, ateliers, centres commerciaux, 
                          parkings couverts et espaces logistiques. Nous garantissons des finitions 
                          professionnelles et durables.
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
                        Solutions de revêtement et marquage intérieur
                      </motion.h2>
                      <motion.div 
                        className="space-y-4 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg leading-relaxed">
                          Nos solutions de résine de sol et marquage d'intérieur transforment vos espaces 
                          industriels et commerciaux. La résine époxy offre une surface durable, 
                          hygiénique et esthétique, parfaite pour les environnements exigeants.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Nous réalisons tous types de marquage intérieur : délimitation de zones de travail, 
                          circuits de circulation, zones de stockage, marquage de sécurité et signalétique 
                          au sol. Chaque projet est adapté à vos contraintes opérationnelles.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre expertise couvre les usines, entrepôts, ateliers, centres commerciaux, 
                          parkings couverts et espaces logistiques. Nous garantissons des finitions 
                          professionnelles et durables.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "💪",
                      title: "Résistance exceptionnelle",
                      description: "Revêtements résistants au trafic intense et aux produits chimiques"
                    },
                    {
                      icon: "🧼",
                      title: "Facilité d'entretien",
                      description: "Surface lisse et non poreuse, facile à nettoyer et hygiénique"
                    },
                    {
                      icon: "🎨",
                      title: "Personnalisation",
                      description: "Large choix de couleurs et finitions pour s'adapter à votre identité"
                    },
                    {
                      icon: "🛡️",
                      title: "Sécurité renforcée",
                      description: "Options antidérapantes et marquage de sécurité intégré"
                    }
                  ].map((feature, index) => (
                    isSafari ? (
                      <div key={index} className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl flex-shrink-0">
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
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl flex-shrink-0">
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

          {/* Services Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Nos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span> Complètes
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Une gamme complète de services de résine de sol et marquage intérieur
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
                      Nos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span> Complètes
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Une gamme complète de services de résine de sol et marquage intérieur
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: "🏭",
                    title: "Résine époxy industrielle",
                    description: "Revêtements haute performance pour environnements industriels exigeants"
                  },
                  {
                    icon: "🎨",
                    title: "Résine décorative",
                    description: "Solutions esthétiques pour espaces commerciaux et d'accueil"
                  },
                  {
                    icon: "🛡️",
                    title: "Résine antidérapante",
                    description: "Surfaces sécurisées pour zones à risques de glissade"
                  },
                  {
                    icon: "📍",
                    title: "Marquage de circulation",
                    description: "Délimitation des allées et circuits de circulation intérieure"
                  },
                  {
                    icon: "📦",
                    title: "Marquage de zones",
                    description: "Délimitation des zones de stockage, travail et sécurité"
                  },
                  {
                    icon: "⚠️",
                    title: "Signalétique de sécurité",
                    description: "Marquage d'urgence, sorties de secours et zones dangereuses"
                  }
                ].map((service, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                        {service.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                    </div>
                  ) : (
                    <motion.div 
                      key={index}
                      className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                        {service.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span> et Secteurs
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Nos solutions s'adaptent à tous types d'espaces industriels et commerciaux
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
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span> et Secteurs
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Nos solutions s'adaptent à tous types d'espaces industriels et commerciaux
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    icon: "🏭",
                    title: "Usines",
                    description: "Sols industriels résistants aux contraintes de production"
                  },
                  {
                    icon: "📦",
                    title: "Entrepôts",
                    description: "Revêtements optimisés pour la logistique et le stockage"
                  },
                  {
                    icon: "🔧",
                    title: "Ateliers",
                    description: "Solutions adaptées aux environnements de maintenance"
                  },
                  {
                    icon: "🏢",
                    title: "Espaces commerciaux",
                    description: "Finitions esthétiques pour zones d'accueil du public"
                  }
                ].map((application, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                        {application.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{application.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{application.description}</p>
                    </div>
                  ) : (
                    <motion.div 
                      key={index}
                      className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                        {application.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{application.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{application.description}</p>
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Transformez vos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">espaces intérieurs</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons 
                    améliorer vos sols et marquage intérieur avec nos solutions de résine professionnelles.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    Transformez vos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">espaces intérieurs</span>
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons 
                    améliorer vos sols et marquage intérieur avec nos solutions de résine professionnelles.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
