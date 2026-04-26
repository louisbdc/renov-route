'use client';

import Layout from '@/components/Layout';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';

const competences = [
  {
    id: 1,
    title: 'Marquage au sol Lyon - Traçage et retraçage de parking',
    description: 'Entreprise marquage au sol Lyon : un parking bien entretenu attire les clients et améliore l\'expérience utilisateur.',
    icon: '🅿️',
    features: [
      'Marquage au sol professionnel Lyon',
      'Marquage lignes de parking Lyon',
      'Peinture sol parking Lyon',
      'Respect des normes en vigueur',
      'Finition soignée et durable'
    ],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-600/20 to-emerald-600/20',
    slug: 'tracage-retracage-parking'
  },
  {
    id: 2,
    title: 'Signalisation routière Rhône-Alpes - Signalisation verticale',
    description: 'Signalisation routière Rhône-Alpes : tous les panneaux verticaux de parking (exemple : stop, panneau PMR, cédez le passage, etc.)',
    icon: '🚦',
    features: [
      'Signalisation horizontale Lyon',
      'Panneaux de signalisation',
      'Marquage passage piéton Lyon',
      'Installation professionnelle',
      'Conformité aux normes'
    ],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-600/20 to-red-600/20',
    slug: 'signalisation-verticale'
  },
  {
    id: 3,
    title: 'Revêtement epoxy sol Lyon - Résine de sol et marquage d\'intérieur',
    description: 'Entreprise sol epoxy Rhône-Alpes : solutions complètes de résine pour sols et marquage intérieur professionnel.',
    icon: '🏗️',
    features: [
      'Revêtement epoxy sol Lyon',
      'Résine décorative sol Lyon',
      'Peinture sol garage Lyon',
      'Peinture sol industriel Lyon',
      'Marquage intérieur',
      'Finition professionnelle'
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-600/20 to-pink-600/20',
    slug: 'resine-sol-marquage-interieur'
  },
  {
    id: 4,
    title: 'Réparation de nids de poule',
    description: 'Procédé innovant et résistant pour réparer efficacement les nids de poule avec des produits résistants adaptés à votre situation',
    icon: '🔧',
    features: [
      'Réparation rapide et durable',
      'Matériaux de qualité',
      'Intervention sur tous types de routes'
    ],
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-600/20 to-red-700/20',
    slug: 'reparation-nids-de-poule'
  },
  {
    id: 5,
    title: 'Marquage au sol entrepôt Rhône-Alpes - Accessoires de parking',
    description: 'Marquage au sol entrepôt Rhône-Alpes : équipements de sécurité et d\'organisation pour optimiser la circulation et protéger les infrastructures de votre parking.',
    icon: '🛡️',
    features: [
      'Peinture sol entrepôt Lyon',
      'Traçage places handicapés Lyon',
      'Bornes anti-bélier',
      'Ralentisseurs',
      'Butées de parking'
    ],
    gradient: 'from-teal-500 to-blue-500',
    bgGradient: 'from-teal-600/20 to-blue-600/20',
    slug: 'accessoires-parking'
  },
  {
    id: 6,
    title: 'Conseil et expertise',
    description: 'Notre équipe vous accompagné dans vos projets d\'amélioration.',
    icon: '💡',
    features: [
      'Étude de faisabilité',
      'Devis personnalisé',
      'Suivi de projet'
    ],
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-600/20 to-orange-600/20',
    slug: 'conseil-expertise'
  },
];

export default function CompetencesPage() {
  const { isSafari } = useSafariOptimization();


  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Nos Compétences - Expert Traçage Marquage Routier",
          "description": "Découvrez nos compétences en traçage marquage routier : réparation nids de poule, traçage parking, marquage routier, enrobé résine, entretien préventif.",
          "url": "https://renov-route.com/competences",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Renov Route",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Compétences en marquage routier",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Traçage et retraçage de parking",
                    "description": "Un parking bien entretenu attire les clients et améliore l'expérience utilisateur"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Signalisation verticale",
                    "description": "Tous les panneaux verticaux de parking (exemple : stop, panneau PMR, cédez le passage, etc.)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Résine de sol et marquage d'intérieur",
                    "description": "Solutions complètes de résine pour sols et marquage intérieur professionnel"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Réparation de nids de poule",
                    "description": "Procédé innovant et résistant pour réparer efficacement les nids de poule avec des produits résistants adaptés à votre situation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Accessoires de parking",
                    "description": "Inclut des éléments tels que bornes anti-bélier, ralentisseurs et butées de parking"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conseil et expertise",
                    "description": "Notre équipe vous accompagné dans vos projets d'amélioration"
                  }
                }
              ]
            }
          }
        })}
      </script>
      <Layout>
      <SafariAnimationFix>
      {/* Hero Section - Couleur A */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 competences-background opacity-20"></div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Glassmorphism title container */}
          {isSafari ? (
            <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Nos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Compétences</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Découvrez notre expertise complète en réparation et rénovation routière. 
                Des solutions innovantes pour tous vos besoins d'infrastructure.
              </p>
            </div>
          ) : (
            <motion.div 
              className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-6 sm:mb-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Compétences</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Entreprise marquage au sol Lyon et Rhône-Alpes : découvrez notre expertise complète en réparation et rénovation routière. 
                Marquage au sol, peinture epoxy, signalisation routière - des solutions innovantes pour tous vos besoins d'infrastructure.
              </motion.p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services & Stats Section - Couleur B */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Glassmorphism background éléments */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 items-stretch">
            {competences.map((competence, index) => (
              isSafari ? (
                <Link
                  key={competence.id}
                  href={`/competences/${competence.slug}`}
                  className="group relative block h-full"
                >
                  <div className={`
                    relative p-6 sm:p-8 rounded-[1.5rem] transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2
                    glassmorphism-card backdrop-blur-md border border-white/20
                    hover:border-white/30 hover:shadow-2xl hover:shadow-${competence.gradient.split(' ')[0].split('-')[1]}-500/20
                    group-hover:backdrop-blur-lg cursor-pointer h-full flex flex-col
                  `}>
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] bg-gradient-to-r ${competence.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      {competence.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors">
                      {competence.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors">
                      {competence.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3 flex-grow">
                      {competence.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                          <div className={`
                            w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${competence.gradient} mr-2 sm:mr-3 flex-shrink-0
                            group-hover:scale-125 transition-transform duration-300
                          `}></div>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover effect overlay */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-r ${competence.gradient} opacity-0 group-hover:opacity-5
                      transition-opacity duration-500
                    `}></div>
                  </div>
                </Link>
              ) : (
                <motion.div
                  key={competence.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.2, 0.8, 0.2, 1]
                  }}
                >
                  <Link href={`/competences/${competence.slug}`} className="block h-full">
                    <div className={`
                      relative p-6 sm:p-8 rounded-[1.5rem] transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2
                      glassmorphism-card backdrop-blur-md border border-white/20
                      hover:border-white/30 hover:shadow-2xl hover:shadow-${competence.gradient.split(' ')[0].split('-')[1]}-500/20
                      group-hover:backdrop-blur-lg cursor-pointer h-full flex flex-col
                    `}>
                      {/* Icon */}
                      <div className={`
                        w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] bg-gradient-to-r ${competence.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        {competence.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors">
                        {competence.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors">
                        {competence.description}
                      </p>
                      
                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3 flex-grow">
                      {competence.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                          <div className={`
                            w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${competence.gradient} mr-2 sm:mr-3 flex-shrink-0
                            group-hover:scale-125 transition-transform duration-300
                          `}></div>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                      
                      {/* Hover effect overlay */}
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-r ${competence.gradient} opacity-0 group-hover:opacity-5
                        transition-opacity duration-500
                      `}></div>
                    </div>
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { number: "1000+", label: "Projets réalisés", gradient: "from-blue-400 to-cyan-400" },
              { number: "10+", label: "Années d'expérience", gradient: "from-green-400 to-emerald-400" },
              { number: "98%", label: "Clients satisfaits", gradient: "from-purple-400 to-pink-400" },
              { number: "24/7", label: "Support client", gradient: "from-orange-400 to-red-400" }
            ].map((stat, index) => (
              isSafari ? (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="glassmorphism-card p-4 sm:p-6 rounded-[1.5rem] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base lg:text-lg">{stat.label}</div>
                  </div>
                </div>
              ) : (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + (index * 0.1),
                    ease: [0.2, 0.8, 0.2, 1]
                  }}
                >
                  <div className="glassmorphism-card p-4 sm:p-6 rounded-[1.5rem] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base lg:text-lg">{stat.label}</div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Couleur A */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 competences-background opacity-10"></div>
        
        {/* Glassmorphism background éléments */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Glassmorphism CTA container */}
          {isSafari ? (
            <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Prêt à <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">commencer</span> ?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir 
                comment nous pouvons améliorer vos infrastructures.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/devis" 
                  className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                >
                  <span className="relative z-10">Demander un devis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              transition={{ duration: 0.8, delay: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                Prêt à <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">commencer</span> ?
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir 
                comment nous pouvons améliorer vos infrastructures.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <a 
                  href="/devis" 
                  className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                >
                  <span className="relative z-10">Demander un devis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Section FAQ cachée pour SEO */}
      <section className="hidden" aria-hidden="true">
        <h2>FAQ Marquage au Sol Lyon - Entreprise Marquage au Sol Lyon</h2>
        <h3>Quelles sont vos principales compétences en marquage au sol Lyon ?</h3>
        <p>Entreprise marquage au sol Lyon, nous proposons le marquage parking Lyon, peinture sol parking Lyon, marquage lignes de parking Lyon, traçage places handicapés Lyon, marquage passage piéton Lyon et signalisation horizontale Lyon.</p>

        <h3>Proposez-vous des services de peinture epoxy sol Lyon ?</h3>
        <p>Oui, nous sommes une entreprise sol epoxy Rhône-Alpes spécialisée dans la peinture sol garage Lyon, peinture sol industriel Lyon, revêtement epoxy sol Lyon, résine décorative sol Lyon et peinture sol antidérapante Lyon.</p>

        <h3>Quels services pour les entrepôts et garages à Lyon ?</h3>
        <p>Nous proposons le marquage au sol entrepôt Rhône-Alpes, peinture sol entrepôt Lyon, sol epoxy garage particulier Lyon, réparation sol béton Lyon et rénovation sol parking Lyon.</p>

        <h3>Vos services de signalisation routière Rhône-Alpes ?</h3>
        <p>Oui, nous offrons la signalisation routière Rhône-Alpes, signalisation horizontale Lyon, entreprise peinture sol extérieur Lyon et entreprise marquage voirie Lyon pour tous vos besoins de signalisation.</p>

        <h3>Proposez-vous des devis marquage sol Lyon ?</h3>
        <p>Oui, nous établissons des devis marquage sol Lyon personnalisés avec prix peinture sol epoxy Lyon transparents. Contactez-nous pour un devis gratuit et adapté à vos besoins.</p>

        <h3>Intervenez-vous sur les terrains de sport à Lyon ?</h3>
        <p>Oui, nous proposons le traçage terrain de sport Lyon avec des matériaux résistants et conformes aux normes sportives pour tous types de terrains et équipements sportifs.</p>

        <h3>Vos services respectent-ils les normes françaises ?</h3>
        <p>Oui, tous nos services de marquage au sol Lyon respectent scrupuleusement les normes françaises de signalisation horizontale (NF EN 1436) et les réglementations en vigueur pour garantir la conformité et la sécurité.</p>

        <h3>Quels types d'accessoires de parking installez-vous ?</h3>
        <p>Nous installons une gamme complète d'accessoires : bornes anti-bélier, ralentisseurs, butées de parking, barrières, éclairage de sécurité et signalétique pour optimiser la sécurité et l'organisation de vos parkings Lyon.</p>
      </section>
    </>
  );
}
