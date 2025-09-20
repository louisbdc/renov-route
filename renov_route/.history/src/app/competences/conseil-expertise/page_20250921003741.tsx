'use client';

import Layout from '@/components/Layout';
import Head from 'next/head';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';
import ServiceStructuredData from '@/components/ServiceStructuredData';

export const metadata: Metadata = {
  title: "Conseil & Expertise - Accompagnement Projets Marquage Routier",
  description: "Notre équipe d'experts vous accompagne dans vos projets d'amélioration avec études de faisabilité, devis personnalisés et suivi de projet. Conseil gratuit pour vos projets de marquage routier.",
  keywords: "conseil marquage routier, expertise marquage, étude faisabilité, devis personnalisé, suivi projet, conseil gratuit marquage",
  openGraph: {
    title: "Conseil & Expertise - Accompagnement Projets Marquage Routier",
    description: "Notre équipe d'experts vous accompagne dans vos projets d'amélioration avec études de faisabilité, devis personnalisés et suivi de projet.",
    url: "https://renov-route.com/competences/conseil-expertise",
    type: "website",
    images: [
      {
        url: "https://renov-route.com/assets/images/conseil-expertise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Conseil Expertise - Renov Route"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Conseil & Expertise - Accompagnement Projets Marquage Routier",
    description: "Notre équipe d'experts vous accompagne dans vos projets d'amélioration. Conseil gratuit.",
    images: ["https://renov-route.com/assets/images/conseil-expertise-twitter.jpg"]
  },
  alternates: {
    canonical: "https://renov-route.com/competences/conseil-expertise"
  }
};

export default function ConseilExpertisePage() {
  const { isSafari } = useSafariOptimization();

  useEffect(() => {
    // Ajouter la balise canonique
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://renov-route.com/competences/conseil-expertise';
    
    // Vérifier si elle n'existe pas déjà
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <>
      <ServiceStructuredData serviceType="conseil-expertise" />
      <Head>
        <title>Conseil et Expertise - Accompagnement Professionnel | Renov Route</title>
        <meta name="description" content="Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé, suivi de projet. Notre équipe vous accompagne dans vos projets d'infrastructure." />
        <meta name="keywords" content="conseil expertise, étude faisabilité, devis personnalisé, suivi projet, accompagnement professionnel, expertise infrastructure, conseil technique" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Conseil et Expertise - Accompagnement Professionnel | Renov Route" />
        <meta property="og:description" content="Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé, suivi de projet." />
        <meta property="og:url" content="https://renov-route.com/competences/conseil-expertise" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Conseil et Expertise - Accompagnement Professionnel | Renov Route" />
        <meta name="twitter:description" content="Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé." />
        <link rel="canonical" href="https://renov-route.com/competences/conseil-expertise" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conseil et Expertise",
            "description": "Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé, suivi de projet.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Renov Route"
            },
            "areaServed": "France",
            "serviceType": "Conseil technique"
          })}
        </script>
      </Head>
      <Layout>
        <SafariAnimationFix>
          {/* Hero Section */}
          <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 competences-background opacity-20"></div>
            
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
                  <span className="text-white">Conseil et expertise</span>
                </div>
              </nav>

              {/* Glassmorphism title container */}
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl sm:text-4xl">
                      💡
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Conseil et Expertise</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Notre équipe vous accompagne dans vos projets d'amélioration. 
                    Étude de faisabilité, devis personnalisé et suivi de projet professionnel.
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl sm:text-4xl">
                      💡
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Conseil et Expertise</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Notre équipe vous accompagne dans vos projets d'amélioration. 
                    Étude de faisabilité, devis personnalisé et suivi de projet professionnel.
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  {isSafari ? (
                    <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Accompagnement personnalisé
                      </h2>
                      <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                          Chaque projet d'infrastructure est unique et nécessite une approche sur mesure. 
                          Notre équipe d'experts vous accompagne de la conception à la réalisation, 
                          en passant par l'étude de faisabilité et le suivi de projet.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Forts de plus de 10 ans d'expérience, nous maîtrisons tous les aspects 
                          techniques et réglementaires des projets routiers. Nous vous aidons à 
                          optimiser vos investissements et à choisir les solutions les plus adaptées 
                          à vos contraintes et objectifs.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre approche collaborative nous permet de comprendre vos enjeux spécifiques 
                          et de vous proposer des solutions innovantes qui répondent parfaitement 
                          à vos besoins, tout en respectant votre budget et vos délais.
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
                        Accompagnement personnalisé
                      </motion.h2>
                      <motion.div 
                        className="space-y-4 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg leading-relaxed">
                          Chaque projet d'infrastructure est unique et nécessite une approche sur mesure. 
                          Notre équipe d'experts vous accompagne de la conception à la réalisation, 
                          en passant par l'étude de faisabilité et le suivi de projet.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Forts de plus de 10 ans d'expérience, nous maîtrisons tous les aspects 
                          techniques et réglementaires des projets routiers. Nous vous aidons à 
                          optimiser vos investissements et à choisir les solutions les plus adaptées 
                          à vos contraintes et objectifs.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Notre approche collaborative nous permet de comprendre vos enjeux spécifiques 
                          et de vous proposer des solutions innovantes qui répondent parfaitement 
                          à vos besoins, tout en respectant votre budget et vos délais.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "📋",
                      title: "Étude de faisabilité",
                      description: "Analyse technique et économique de votre projet d'infrastructure"
                    },
                    {
                      icon: "💰",
                      title: "Devis personnalisé",
                      description: "Estimation précise et transparente adaptée à vos besoins"
                    },
                    {
                      icon: "👥",
                      title: "Suivi de projet",
                      description: "Accompagnement tout au long de la réalisation de votre projet"
                    },
                    {
                      icon: "🎯",
                      title: "Solutions sur mesure",
                      description: "Recommandations personnalisées adaptées à vos contraintes"
                    }
                  ].map((feature, index) => (
                    isSafari ? (
                      <div key={index} className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-md border border-white/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-xl flex-shrink-0">
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
                          <div className="w-12 h-12 rounded-[0.75rem] bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-xl flex-shrink-0">
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
                      Nos <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Services</span> de conseil
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Une gamme complète de services de conseil et d'expertise pour vos projets
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
                      Nos <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Services</span> de conseil
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Une gamme complète de services de conseil et d'expertise pour vos projets
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: "📊",
                    title: "Audit technique",
                    description: "Évaluation complète de l'état de vos infrastructures existantes"
                  },
                  {
                    icon: "📋",
                    title: "Étude de faisabilité",
                    description: "Analyse technique et économique de vos projets d'amélioration"
                  },
                  {
                    icon: "💰",
                    title: "Devis détaillé",
                    description: "Estimation précise et transparente de tous les coûts de projet"
                  },
                  {
                    icon: "📅",
                    title: "Planification",
                    description: "Établissement d'un planning détaillé et réaliste de votre projet"
                  },
                  {
                    icon: "👥",
                    title: "Suivi de projet",
                    description: "Accompagnement et supervision tout au long de la réalisation"
                  },
                  {
                    icon: "🎯",
                    title: "Conseil stratégique",
                    description: "Recommandations pour optimiser vos investissements infrastructure"
                  }
                ].map((service, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
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
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
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
                      Notre <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Méthode</span> d'Accompagnement
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Un processus structuré pour vous accompagner efficacement dans vos projets
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
                      Notre <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Méthode</span> d'Accompagnement
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Un processus structuré pour vous accompagner efficacement dans vos projets
                    </motion.p>
                  </motion.div>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Écoute",
                    description: "Compréhension de vos besoins et contraintes spécifiques"
                  },
                  {
                    step: "02",
                    title: "Analyse",
                    description: "Étude technique et évaluation des solutions possibles"
                  },
                  {
                    step: "03",
                    title: "Proposition",
                    description: "Recommandations personnalisées avec devis détaillé"
                  },
                  {
                    step: "04",
                    title: "Accompagnement",
                    description: "Suivi et support tout au long de la réalisation"
                  }
                ].map((step, index) => (
                  isSafari ? (
                    <div key={index} className="glassmorphism-card p-6 rounded-[1.5rem] backdrop-blur-md border border-white/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
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
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
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
            <div className="absolute inset-0 competences-background opacity-10"></div>
            
            {/* Glassmorphism background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              {isSafari ? (
                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Besoin d'<span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">expertise</span> ?
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour bénéficier de notre expertise et de nos conseils personnalisés 
                    pour vos projets d'infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    Besoin d'<span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">expertise</span> ?
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Contactez-nous pour bénéficier de notre expertise et de nos conseils personnalisés 
                    pour vos projets d'infrastructure.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a 
                      href="/devis" 
                      className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                    >
                      <span className="relative z-10">Demander un devis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
