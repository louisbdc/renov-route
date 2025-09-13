'use client';

import Layout from '@/components/Layout';
import Head from 'next/head';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MarquageRoutierPage() {
  const { isSafari } = useSafariOptimization();

  return (
    <>
      <Head>
        <title>Marquage Routier - Signalisation Horizontale Professionnelle | Renov Route</title>
        <meta name="description" content="Marquage routier professionnel : lignes de circulation, signalisation de sécurité, marquage personnalisé. Améliorez la sécurité et la circulation de vos routes." />
        <meta name="keywords" content="marquage routier, signalisation horizontale, lignes de circulation, marquage sécurité, signalisation route, marquage personnalisé, sécurité routière" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Marquage Routier - Signalisation Horizontale Professionnelle | Renov Route" />
        <meta property="og:description" content="Marquage routier professionnel : lignes de circulation, signalisation de sécurité, marquage personnalisé." />
        <meta property="og:url" content="https://renov-route.com/competences/marquage-routier" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Marquage Routier - Signalisation Horizontale Professionnelle | Renov Route" />
        <meta name="twitter:description" content="Marquage routier professionnel : lignes de circulation, signalisation de sécurité." />
        <link rel="canonical" href="https://renov-route.com/competences/marquage-routier" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marquage Routier",
            "description": "Marquage routier professionnel : lignes de circulation, signalisation de sécurité, marquage personnalisé.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Renov Route"
            },
            "areaServed": "France",
            "serviceType": "Marquage routier"
          })}
        </script>
      </Head>
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
                  <span className="text-white">Marquage routier</span>
                </div>
              </nav>

              {/* Glassmorphism title container */}
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🛣️
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Marquage Routier</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Signalisation horizontale pour améliorer la sécurité et la circulation. 
                    Marquage professionnel conforme aux normes et adapté à vos besoins.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl sm:text-4xl">
                      🛣️
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Marquage Routier</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Signalisation horizontale pour améliorer la sécurité et la circulation. 
                    Marquage professionnel conforme aux normes et adapté à vos besoins.
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  {isSafari ? (
                    <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Signalisation Horizontale Professionnelle
                      </h2>
                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Le marquage routier est un élément fondamental de la sécurité et de l'organisation 
                          de la circulation. Il guide les usagers, délimite les zones de circulation et 
                          améliore la lisibilité de la route.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre expertise couvre tous types de marquage : lignes de circulation, 
                          signalisation de sécurité, marquage personnalisé pour entreprises et collectivités. 
                          Nous utilisons des matériaux de haute qualité et respectons scrupuleusement 
                          les normes en vigueur.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Que ce soit pour une route départementale, un parking d'entreprise ou un 
                          espace public, nous adaptons nos solutions à vos contraintes spécifiques 
                          pour garantir efficacité et durabilité.
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
                        Signalisation Horizontale Professionnelle
                      </motion.h2>
                      <motion.div 
                        className="space-y-4 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg leading-relaxed">
                          Le marquage routier est un élément fondamental de la sécurité et de l'organisation 
                          de la circulation. Il guide les usagers, délimite les zones de circulation et 
                          améliore la lisibilité de la route.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre expertise couvre tous types de marquage : lignes de circulation, 
                          signalisation de sécurité, marquage personnalisé pour entreprises et collectivités. 
                          Nous utilisons des matériaux de haute qualité et respectons scrupuleusement 
                          les normes en vigueur.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Que ce soit pour une route départementale, un parking d'entreprise ou un 
                          espace public, nous adaptons nos solutions à vos contraintes spécifiques 
                          pour garantir efficacité et durabilité.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "🚦",
                      title: "Sécurité Renforcée",
                      description: "Marquage conforme aux normes pour améliorer la sécurité des usagers"
                    },
                    {
                      icon: "📏",
                      title: "Précision Maximale",
                      description: "Tracés parfaitement alignés et respectant les dimensions réglementaires"
                    },
                    {
                      icon: "🎨",
                      title: "Personnalisation",
                      description: "Marquage sur mesure adapté à votre identité et vos contraintes"
                    },
                    {
                      icon: "⚡",
                      title: "Intervention Rapide",
                      description: "Réalisation efficace pour minimiser les perturbations de circulation"
                    }
                  ].map((feature, index) => (
                    isSafari ? (
                      <div key={index} className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-xl flex-shrink-0">
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
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-xl flex-shrink-0">
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
                      Types de <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Marquage</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Une gamme complète de services de marquage routier pour tous vos besoins
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
                      Types de <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Marquage</span>
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Une gamme complète de services de marquage routier pour tous vos besoins
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: "➖",
                    title: "Lignes de Circulation",
                    description: "Lignes continues, discontinues, doubles et de dépassement"
                  },
                  {
                    icon: "⚠️",
                    title: "Signalisation de Sécurité",
                    description: "Zébras, flèches directionnelles, marquage de danger"
                  },
                  {
                    icon: "🚶",
                    title: "Passages Piétons",
                    description: "Zébras piétons, îlots refuges et zones de sécurité"
                  },
                  {
                    icon: "🚗",
                    title: "Marquage de Stationnement",
                    description: "Délimitation des places, zones de chargement"
                  },
                  {
                    icon: "🔄",
                    title: "Marquage Directionnel",
                    description: "Flèches, sens interdits, zones de circulation"
                  },
                  {
                    icon: "🏢",
                    title: "Marquage Personnalisé",
                    description: "Logos, textes, marquage d'entreprise sur mesure"
                  }
                ].map((service, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl">
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
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl">
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

          {/* Process Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                {isSafari ? (
                  <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Notre <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Méthode</span> de Travail
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Un processus rigoureux pour garantir des résultats conformes et durables
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
                      Notre <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Méthode</span> de Travail
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Un processus rigoureux pour garantir des résultats conformes et durables
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Analyse du Site",
                    description: "Étude de la circulation et identification des besoins de marquage"
                  },
                  {
                    step: "02",
                    title: "Conception",
                    description: "Création du plan de marquage conforme aux normes en vigueur"
                  },
                  {
                    step: "03",
                    title: "Préparation",
                    description: "Nettoyage et préparation de la chaussée pour un marquage optimal"
                  },
                  {
                    step: "04",
                    title: "Réalisation",
                    description: "Application du marquage avec précision et contrôle qualité"
                  }
                ].map((step, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl">
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
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl">
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Améliorez la <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">sécurité</span> de vos routes
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons 
                    optimiser la signalisation de vos infrastructures routières.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/contact" 
                      className="group glassmorphism-card border-2 border-white/20 hover:border-white/40 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:bg-white/5 backdrop-blur-sm text-sm sm:text-base"
                    >
                      Nous contacter
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
                    Améliorez la <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">sécurité</span> de vos routes
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons 
                    optimiser la signalisation de vos infrastructures routières.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/contact" 
                      className="group glassmorphism-card border-2 border-white/20 hover:border-white/40 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:bg-white/5 backdrop-blur-sm text-sm sm:text-base"
                    >
                      Nous contacter
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
