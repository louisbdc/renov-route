'use client';

import Layout from '@/components/Layout';
import Head from 'next/head';
import CustomDropdown from '@/components/CustomDropdown';
import SecureForm, { SecureInput, SecureTextarea, SecureFileInput } from '@/components/SecureForm';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { validateContactFormWithFieldErrors } from '@/lib/form-validation';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [subject, setSubject] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isSafari } = useSafariOptimization();

  const subjectOptions = [
    { value: 'devis', label: 'Demande de devis' },
    { value: 'reparation', label: 'Réparation de nids de poule' },
    { value: 'tracage', label: 'Traçage de parking' },
    { value: 'marquage', label: 'Marquage routier' },
    { value: 'autre', label: 'Autre' }
  ];

  const handleContactSubmit = async (formData: FormData) => {
    try {
      setIsLoading(true);
      setFieldErrors({});
      
      const { data: validatedData, errors } = validateContactFormWithFieldErrors(formData);
      
      if (errors && Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        throw new Error('Erreurs de validation détectées');
      }
      
      if (!validatedData) {
        throw new Error('Erreur de validation');
      }
      
      console.log('Données validées:', validatedData);
      
      // Simulation d'envoi (remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 15000);
      
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <Head>
        <title>Contact - Expert Traçage Marquage Routier | Renov Route</title>
        <meta name="description" content="Contactez Renov Route pour vos projets de traçage marquage routier. Devis gratuit, intervention rapide. Téléphone : 07 86 81 96 92. Email : contact@renov-route.com" />
        <meta name="keywords" content="contact marquage routier, devis traçage gratuit, téléphone expert marquage, email contact, adresse Renov Route, demande devis, consultation marquage" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Contact - Expert Traçage Marquage Routier | Renov Route" />
        <meta property="og:description" content="Contactez Renov Route pour vos projets de traçage marquage routier. Devis gratuit, intervention rapide." />
        <meta property="og:url" content="https://renov-route.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact - Expert Traçage Marquage Routier | Renov Route" />
        <meta name="twitter:description" content="Contactez Renov Route pour vos projets de traçage marquage routier. Devis gratuit, intervention rapide." />
        <link rel="canonical" href="https://renov-route.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact - Expert Traçage Marquage Routier",
            "description": "Contactez Renov Route pour vos projets de traçage marquage routier. Devis gratuit, intervention rapide.",
            "url": "https://renov-route.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Renov Route",
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
          })}
        </script>
      </Head>
      <Layout>
      <SafariAnimationFix>
      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4 animated-gradient-slow">
        <div className="max-w-6xl mx-auto">
          {isSafari ? (
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">Informations de contact</h2>
            </div>
          ) : (
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Informations de contact</h2>
            </motion.div>
          )}
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            {isSafari ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">Téléphone</p>
                        <a href="tel:0786819692" className="text-white text-lg hover:text-primary-500 transition-colors">
                          07 86 81 96 92
                        </a>
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
                        <a href="mailto:contact@renov-route.com" className="text-white text-lg hover:text-primary-500 transition-colors">
                          contact@renov-route.com
                        </a>
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
                          69160 Tassin la demi-lune<br />
                          France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">Téléphone</p>
                        <a href="tel:0786819692" className="text-white text-lg hover:text-primary-500 transition-colors">
                          07 86 81 96 92
                        </a>
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
                        <a href="mailto:contact@renov-route.com" className="text-white text-lg hover:text-primary-500 transition-colors">
                          contact@renov-route.com
                        </a>
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
                          69160 Tassin la demi-lune<br />
                          France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact Form */}
            {isSafari ? (
              <div className="glassmorphism-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Demande Envoyée !
                    </h4>
                    <p className="text-gray-300 text-lg">
                      Merci pour votre confiance. Nous vous recontacterons dans les 24h 
                      pour vous proposer un devis personnalisé.
                    </p>
                    <div className="mt-6 p-4 bg-primary-500/20 rounded-xl border border-primary-400/30">
                      <p className="text-primary-200 text-sm font-medium">
                        📧 Un email de confirmation vous a été envoyé
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    await handleContactSubmit(formData);
                  }} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <SecureInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        placeholder="Votre prénom"
                        required
                      />
                      <SecureInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        placeholder="Votre nom de famille"
                        required
                      />
                    </div>
                    
                    <SecureInput
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="exemple@email.com"
                      required
                    />
                    
                    <SecureInput
                      type="tel"
                      id="phone"
                      name="phone"
                      label="Téléphone"
                      placeholder="06 12 34 56 78"
                    />
                    
                    <CustomDropdown
                      id="subject"
                      name="subject"
                      label="Sujet"
                      options={subjectOptions}
                      value={subject}
                      onChange={setSubject}
                      placeholder="Choisissez le type de demande"
                    />
                    
                    <SecureTextarea
                      id="message"
                      name="message"
                      label="Message"
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                      rows={5}
                      required
                    />
                    
                    <SecureFileInput
                      id="files"
                      name="files"
                      label="Fichiers joints (optionnel)"
                      accept="image/*,application/pdf,text/*"
                      multiple={true}
                      maxFiles={3}
                      maxSize={10}
                    />
                    
                    <button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-400 text-center leading-relaxed">
                      * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle 
                      conformément au RGPD.
                    </p>
                  </form>
                )}
              </div>
            ) : (
              <motion.div 
                className="glassmorphism-card p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Demande Envoyée !
                    </h4>
                    <p className="text-gray-300 text-lg">
                      Merci pour votre confiance. Nous vous recontacterons dans les 24h 
                      pour vous proposer un devis personnalisé.
                    </p>
                    <div className="mt-6 p-4 bg-primary-500/20 rounded-xl border border-primary-400/30">
                      <p className="text-primary-200 text-sm font-medium">
                        📧 Un email de confirmation vous a été envoyé
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    await handleContactSubmit(formData);
                  }} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <SecureInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        placeholder="Votre prénom"
                        required
                      />
                      <SecureInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        placeholder="Votre nom de famille"
                        required
                      />
                    </div>
                    
                    <SecureInput
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="exemple@email.com"
                      required
                    />
                    
                    <SecureInput
                      type="tel"
                      id="phone"
                      name="phone"
                      label="Téléphone"
                      placeholder="06 12 34 56 78"
                    />
                    
                    <CustomDropdown
                      id="subject"
                      name="subject"
                      label="Sujet"
                      options={subjectOptions}
                      value={subject}
                      onChange={setSubject}
                      placeholder="Choisissez le type de demande"
                    />
                    
                    <SecureTextarea
                      id="message"
                      name="message"
                      label="Message"
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                      rows={5}
                      required
                    />
                    
                    <SecureFileInput
                      id="files"
                      name="files"
                      label="Fichiers joints (optionnel)"
                      accept="image/*,application/pdf,text/*"
                      multiple={true}
                      maxFiles={3}
                      maxSize={10}
                    />
                    
                    <button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-400 text-center leading-relaxed">
                      * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle 
                      conformément au RGPD.
                    </p>
                  </form>
              )}
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
