'use client';

import Layout from '@/components/Layout';
import PartnersBanner from '@/components/PartnersBanner';
import SEOLinks from '@/components/SEOLinks';
import StructuredData from '@/components/StructuredData';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
    const { isSafari } = useSafariOptimization();


    return (
        <>
            <meta name="target" content="all" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Renov Route" />
            <meta name="application-name" content="Renov Route" />
            <meta name="msapplication-TileColor" content="#1f2937" />
            <meta name="msapplication-TileImage" content="/assets/logos/logo.avif" />
            <meta name="theme-color" content="#1f2937" />
            <meta name="color-scheme" content="dark" />
            <meta name="supported-color-schemes" content="dark" />
            <link rel="alternate" hrefLang="fr" href="https://renov-route.com" />
            <link rel="alternate" hrefLang="x-default" href="https://renov-route.com" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/assets/logos/logo.avif" />
            <link rel="icon" type="image/avif" href="/assets/logos/logo.avif" />
            <link rel="shortcut icon" href="/assets/logos/logo.avif" />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Renov Route",
                    "description": "Expert traçage marquage routier et parking en France. Réparation nids de poule, retraçage parking, marquage routier, enrobé résine.",
                    "url": "https://renov-route.com",
                    "logo": "https://renov-route.com/assets/logos/logo.avif",
                    "image": "https://renov-route.com/assets/images/og-image.jpg",
                    "telephone": "07 86 81 96 92",
                    "email": "contact@renov-route.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "6, allée du ruisseau de Ribbes",
                        "addressLocality": "Tassin la demi-lune",
                        "postalCode": "69160",
                        "addressCountry": "FR"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "45.7640",
                        "longitude": "4.8357"
                    },
                    "areaServed": {
                        "@type": "Country",
                        "name": "France"
                    },
                    "serviceType": [
                        "Traçage marquage routier",
                        "Marquage parking",
                        "Retraçage parking",
                        "Réparation nids de poule",
                        "Enrobé résine",
                        "Marquage routier",
                        "Signalisation horizontale",
                        "Rénovation parking"
                    ],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Services de marquage routier",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Traçage de parking",
                                    "description": "Marquage professionnel et durable pour optimiser l'utilisation de vos espaces de stationnement"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Réparation de nids de poule",
                                    "description": "Procédé innovant et résistant pour réparer efficacement les nids de poule avec de la résine"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Marquage routier",
                                    "description": "Signalisation horizontale pour améliorer la sécurité et la circulation"
                                }
                            }
                        ]
                    },
                    "openingHours": "Mo-Fr 08:00-18:00",
                    "priceRange": "€€",
                    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
                    "currenciesAccepted": "EUR",
                    "foundingDate": "2014",
                    "numberOfEmployees": "5-10",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "127",
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "sameAs": [
                        "https://www.facebook.com/renovroute",
                        "https://www.linkedin.com/company/renov-route",
                        "https://www.instagram.com/renov_route"
                    ]
                })}
            </script>
            <Layout>
                <SafariAnimationFix>
                    {/* Hero Section - Couleur A */}
                    <section
                        id="hero"
                        className="relative min-h-screen flex items-center overflow-hidden hero-background-mobile"
                        style={{
                            backgroundImage: 'url(/assets/images/background_home_page.avif)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            // Safari optimization: avoid fixed attachment which causes rendering issues
                            backgroundAttachment: isSafari ? 'scroll' : 'fixed'
                        }}
                    >
                        {/* Glassmorphism overlay sur la moitié gauche - masqué sur mobile */}
                        <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800/80 to-gray-900/70"></div>

                        {/* Glassmorphism background elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3"></div>
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>

                        <div className="relative z-10 w-full h-full">
                            <div className="flex items-center min-h-screen">
                                {/* Content - Partie gauche avec glassmorphism centré dans la moitié gauche */}
                                <div className="text-white px-2 sm:px-4 lg:px-6 flex items-center justify-center min-h-screen w-full md:w-1/2 pt-16 md:pt-0">
                                    {/* Glassmorphism content container */}
                                    {isSafari ? (
                                        <div className="glassmorphism-card p-3 sm:p-4 md:p-6 rounded-[1.5rem] border border-white/20 text-left w-full">
                                            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                                                    <span className="font-bold">TRACAGE</span>
                                                    <span className="block font-normal">
                                                        MARQUAGE
                                                    </span>
                                                    <span className="block font-normal">
                                                        ROUTIER
                                                    </span>
                                                </h1>

                                                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light italic">
                                                    Nous redonnons vie à vos parkings
                                                </p>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-col gap-2 sm:gap-3 pt-3 sm:pt-4">
                                                <Link
                                                    href="/realisations"
                                                    className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-[1rem] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1  border border-white/20 text-xs sm:text-sm"
                                                >
                                                    <span className="relative z-10 flex items-center">
                                                        Nos réalisations
                                                        <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/devis"
                                                    className="group glassmorphism-card inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white/20 text-white font-semibold rounded-[1rem] hover:border-white/40 hover:bg-white/5 transition-all duration-300  text-xs sm:text-sm"
                                                >
                                                    <svg className="mr-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    Devis gratuit
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <motion.div
                                            className="glassmorphism-card p-3 sm:p-4 md:p-6 rounded-[1.5rem] border border-white/20 text-left w-full"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.2, 0.8, 0.2, 1],
                                                // Optimisation Safari
                                                type: "tween"
                                            }}
                                            style={{
                                                // Force hardware acceleration
                                                transform: 'translateZ(0)',
                                                WebkitTransform: 'translateZ(0)',
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility: 'hidden'
                                            }}
                                        >
                                            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                                <motion.h1
                                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                >
                                                    <span className="font-bold">TRAÇAGE</span>
                                                    <span className="block font-normal">
                                                        MARQUAGE
                                                    </span>
                                                    <span className="block font-normal">
                                                        ROUTIER
                                                    </span>
                                                </motion.h1>

                                                <motion.p
                                                    className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light italic"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.4 }}
                                                >
                                                    Entreprise marquage au sol Lyon : nous redonnons vie à vos parkings
                                                </motion.p>
                                            </div>

                                            {/* CTA Buttons */}
                                            <motion.div
                                                className="flex flex-col gap-2 sm:gap-3 pt-3 sm:pt-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.6 }}
                                            >
                                                <Link
                                                    href="/realisations"
                                                    className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-[1rem] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1  border border-white/20 text-xs sm:text-sm"
                                                >
                                                    <span className="relative z-10 flex items-center">
                                                        Nos réalisations
                                                        <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </span>
                                                </Link>

                                                <Link
                                                    href="/devis"
                                                    className="group glassmorphism-card inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white/20 text-white font-semibold rounded-[1rem] hover:border-white/40 hover:bg-white/5 transition-all duration-300  text-xs sm:text-sm"
                                                >
                                                    <svg className="mr-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    Devis gratuit
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section - Couleur B */}
                    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                        {/* Glassmorphism background elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 "></div>
                        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Glassmorphism title container */}
                            {isSafari ? (
                                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Nos compétences en traçage marquage routier</h2>
                                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                                        Spécialiste de traçage marquage routier, retraçage, réparation de nid de poule interieur et exterieur
                                    </p>
                                </div>
                            ) : (
                                <motion.div
                                    className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                                >
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Nos compétences en traçage marquage routier</h2>
                                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                                        Spécialiste de traçage marquage routier, retraçage, réparation de nid de poule interieur et exterieur
                                    </p>
                                </motion.div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-8 services-grid mb-8 sm:mb-12 lg:mb-16 mt-4 sm:mt-0">
                                {[
                                    {
                                        icon: "🎯",
                                        title: "Solutions sur mesure & polyvalence",
                                        description: "Spécialistes de l'adaptation, nous relevons tous vos défis : du projet le plus standard au plus atypique, chaque demande trouve sa solution. Expertise technique et créativité au service de vos besoins.",
                                        gradient: "from-green-500 to-emerald-500"
                                    },
                                    {
                                        icon: "🏗️",
                                        title: "Rénovation de parking et marquage routier",
                                        description: "Remise à neuf complète de vos parkings : réparation nids de poule, retraçage parking, marquage d'entrepôt et amélioration de l'aspect visuel.",
                                        gradient: "from-blue-500 to-cyan-500"
                                    }
                                ].map((service, index) => (
                                    isSafari ? (
                                        <div
                                            key={index}
                                            className="glassmorphism-card p-5 sm:p-8 rounded-[1.5rem] border border-white/20 hover:border-white/30 transition-all duration-300 group"
                                        >
                                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] bg-gradient-to-r ${service.gradient} flex items-center justify-center text-xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-base sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                                            <p className="text-gray-100 text-xs sm:text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <motion.div
                                            key={index}
                                            className="glassmorphism-card p-5 sm:p-8 rounded-[1.5rem] border border-white/20 hover:border-white/30 transition-all duration-300 group"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 1.0 + (index * 0.1),
                                                ease: [0.2, 0.8, 0.2, 1]
                                            }}
                                        >
                                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] bg-gradient-to-r ${service.gradient} flex items-center justify-center text-xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-base sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                                            <p className="text-gray-100 text-xs sm:text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                        </motion.div>
                                    )
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* References Section - Couleur C */}
                    <section id="references" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700"></div>

                        {/* Glassmorphism background elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 "></div>
                        <div className="absolute top-0 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/6 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/6 rounded-full blur-3xl"></div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Glassmorphism title container */}
                            {isSafari ? (
                                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Nos références en traçage marquage routier</h2>
                                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                                        Nous sommes fiers de travailler avec des entreprises de renom dans toute la France pour leurs projets de marquage routier, traçage parking, accessibilité PMR et réparation nids de poule.
                                    </p>
                                </div>
                            ) : (
                                <motion.div
                                    className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                                >
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Nos références en traçage marquage routier</h2>
                                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                                        Nous sommes fiers de travailler avec des entreprises de renom dans toute la France pour leurs projets de marquage routier, traçage parking, accessibilité PMR et réparation nids de poule.
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Partners Banner - Full Width with glassmorphism container */}
                        {isSafari ? (
                            <div className="w-full relative">
                                <div className="glassmorphism-card mx-2 sm:mx-4 rounded-[1.5rem]  border border-white/10 overflow-hidden">
                                    <PartnersBanner />
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                className="w-full relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
                            >
                                <div className="glassmorphism-card mx-2 sm:mx-4 rounded-[1.5rem]  border border-white/10 overflow-hidden">
                                    <PartnersBanner />
                                </div>
                            </motion.div>
                        )}

                    </section>

                    {/* Testimonials Section - Couleur B */}
                    {/* <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>

                        {/* Glassmorphism background elements */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 "></div>
                        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>

                        <div className="relative max-w-6xl mx-auto">
                            <TestimonialCarousel />
                        </div>
                    </section> */}

                    {/* Contact Section - Couleur A */}
                    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>

                        {/* Glassmorphism background elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 "></div>
                        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Glassmorphism title container */}
                            {isSafari ? (
                                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Contactez-nous pour vos projets de marquage routier</h2>
                                </div>
                            ) : (
                                <motion.div
                                    className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] mb-8 sm:mb-12 lg:mb-16  border border-white/20 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
                                >
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Contactez-nous pour vos projets de marquage routier</h2>
                                </motion.div>
                            )}

                            {/* Contact Info - Centré */}
                            {isSafari ? (
                                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem]  border border-white/20 max-w-2xl mx-auto">
                                    <div className="space-y-6 sm:space-y-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Informations de contact</h3>
                                        <div className="space-y-4 sm:space-y-6">
                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Téléphone</p>
                                                    <a href="tel:0786819692" className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors">
                                                        07 86 81 96 92
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Email</p>
                                                    <a href="mailto:contact@renov-route.com" className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors break-all">
                                                        contact@renov-route.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Adresse</p>
                                                    <p className="text-white text-base sm:text-lg">
                                                        6, allée du ruisseau de Ribbes<br />
                                                        69160 Tassin la demi-lune<br />
                                                        France
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-4 sm:pt-6 text-center">
                                            <Link
                                                href="/devis"
                                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-[1rem] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                                            >
                                                <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Demander un devis
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <motion.div
                                    className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem]  border border-white/20 max-w-2xl mx-auto"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
                                >
                                    <div className="space-y-6 sm:space-y-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Informations de contact</h3>
                                        <div className="space-y-4 sm:space-y-6">
                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Téléphone</p>
                                                    <a href="tel:0786819692" className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors">
                                                        07 86 81 96 92
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Email</p>
                                                    <a href="mailto:contact@renov-route.com" className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors break-all">
                                                        contact@renov-route.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base">Adresse</p>
                                                    <p className="text-white text-base sm:text-lg">
                                                        6, allée du ruisseau de Ribbes<br />
                                                        69160 Tassin la demi-lune<br />
                                                        France
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-4 sm:pt-6 text-center">
                                            <Link
                                                href="/devis"
                                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-[1rem] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                                            >
                                                <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Demander un devis
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </section>

                    {/* Section FAQ SEO - Now Visible and Styled */}
                    <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                        {/* Glassmorphism background elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 "></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-3xl"></div>

                        <div className="relative max-w-4xl mx-auto">
                            {isSafari ? (
                                <div className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] border border-white/20">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">Questions Fréquentes</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Qu'est-ce que le traçage marquage routier ?</h3>
                                            <p className="text-gray-300">Le traçage marquage routier consiste à appliquer des marquages au sol pour la signalisation horizontale des routes, parkings et espaces publics. Cela inclut les lignes de circulation, les places de parking, les passages piétons et autres signalisations de sécurité.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Comment réparer les nids de poule ?</h3>
                                            <p className="text-gray-300">La réparation des nids de poule se fait avec de l'enrobé résine à froid, un procédé innovant et résistant qui permet une réparation rapide et durable des trous dans la chaussée.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quels sont les avantages du retraçage de parking ?</h3>
                                            <p className="text-gray-300">Le retraçage de parking améliore l'organisation des espaces de stationnement, optimise l'utilisation des places disponibles et améliore l'expérience utilisateur des clients.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Combien coûte un devis de marquage routier ?</h3>
                                            <p className="text-gray-300">Nos devis de traçage marquage routier sont gratuits et sans engagement. Le prix dépend de la surface à marquer, du type de marquage et de la complexité du projet.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Dans quelles régions intervenez-vous ?</h3>
                                            <p className="text-gray-300">Nous intervenons dans toute la France, avec une expertise particulière en Auvergne-Rhône-Alpes, notamment à Lyon et dans sa région.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quels matériaux utilisez-vous pour le marquage ?</h3>
                                            <p className="text-gray-300">Nous utilisons des peintures de marquage routier de haute qualité, de l'enrobé résine, et des matériaux conformes aux normes françaises de signalisation horizontale.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <motion.div
                                    className="glassmorphism-card p-6 sm:p-8 md:p-12 rounded-[2rem] border border-white/20"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                                >
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 text-center">Questions Fréquentes</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Qu'est-ce que le traçage marquage routier ?</h3>
                                            <p className="text-gray-300">Le traçage marquage routier consiste à appliquer des marquages au sol pour la signalisation horizontale des routes, parkings et espaces publics. Cela inclut les lignes de circulation, les places de parking, les passages piétons et autres signalisations de sécurité.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Comment réparer les nids de poule ?</h3>
                                            <p className="text-gray-300">La réparation des nids de poule se fait avec de l'enrobé résine à froid, un procédé innovant et résistant qui permet une réparation rapide et durable des trous dans la chaussée.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quels sont les avantages du retraçage de parking ?</h3>
                                            <p className="text-gray-300">Le retraçage de parking améliore l'organisation des espaces de stationnement, optimise l'utilisation des places disponibles et améliore l'expérience utilisateur des clients.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Combien coûte un devis de marquage routier ?</h3>
                                            <p className="text-gray-300">Nos devis de traçage marquage routier sont gratuits et sans engagement. Le prix dépend de la surface à marquer, du type de marquage et de la complexité du projet.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Dans quelles régions intervenez-vous ?</h3>
                                            <p className="text-gray-300">Nous intervenons dans toute la France, avec une expertise particulière en Auvergne-Rhône-Alpes, notamment à Lyon et dans sa région.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quels matériaux utilisez-vous pour le marquage ?</h3>
                                            <p className="text-gray-300">Nous utilisons des peintures de marquage routier de haute qualité, de l'enrobé résine, et des matériaux conformes aux normes françaises de signalisation horizontale.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </section>

                    {/* Liens SEO pour le maillage interne */}
                    <SEOLinks />

                    {/* Données structurées */}
                    <StructuredData type="homepage" />
                </SafariAnimationFix>
            </Layout>
        </>
    );
}