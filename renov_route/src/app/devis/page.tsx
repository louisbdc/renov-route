'use client';

import Layout from '@/components/Layout';
import { SecureInput, SecureTextarea, FieldErrorsContext } from '@/components/SecureForm';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import { useState, useEffect } from 'react';
import { validateDevisFormWithFieldErrors } from '@/lib/form-validation';
import { FaPaperPlane, FaPhone } from 'react-icons/fa';
import { sendDevisEmail } from '@/lib/email';
import { TbCircleCheck, TbClock, TbShieldCheck } from 'react-icons/tb';
import { useFormTracking } from '@/hooks/useAnalyticsTracking';
import { GoogleAnalytics } from '@/lib/analytics';

const advantages = [
  {
    icon: <TbCircleCheck size={22} />,
    title: "Devis gratuit",
    description: "Estimation gratuite et sans engagement"
  },
  {
    icon: <TbClock size={22} />,
    title: "Réponse rapide",
    description: "Devis sous 24h, intervention rapide"
  },
  {
    icon: <TbShieldCheck size={22} />,
    title: "Garantie qualité",
    description: "Matériaux de qualité, travail soigné"
  }
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Devis Gratuit - Traçage Marquage Routier",
  "description": "Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h.",
  "url": "https://renov-route.com/devis",
  "mainEntity": {
    "@type": "Service",
    "name": "Devis gratuit traçage marquage routier",
    "description": "Service de devis gratuit pour tous projets de traçage marquage routier, réparation nids de poule, marquage parking",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Renov Route"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Devis gratuit et sans engagement"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  }
};

export default function DevisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { onFieldFocus, onFormView, onFormError, markSubmitted } = useFormTracking('devis');

  useEffect(() => {
    onFormView();
  }, [onFormView]);

  const handleDevisSubmit = async (data: FormData, formEl: HTMLFormElement) => {
    try {
      setIsLoading(true);
      setFieldErrors({});

      const { data: validatedData, errors } = validateDevisFormWithFieldErrors(data);

      if (errors && Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        onFormError(Object.keys(errors).join(','));
        return;
      }

      if (!validatedData) {
        setFieldErrors({ general: 'Erreur de validation' });
        onFormError('validation_failed');
        return;
      }

      await sendDevisEmail(formEl);

      markSubmitted();
      GoogleAnalytics.getInstance().trackFormSubmission('devis');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 15000);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setFieldErrors({ general: "Une erreur inattendue s'est produite" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewDevis = () => {
    setIsSubmitted(false);
    setFieldErrors({});
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Layout>
        <SafariAnimationFix>
          <section className="pt-24 sm:pt-32 pb-20 px-4 bg-[#141922]">
            <div className="max-w-6xl mx-auto">
              {isSubmitted ? (
                <div className="max-w-2xl mx-auto text-center py-16 border border-white/10 bg-[#141922] rounded-2xl px-8">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">Devis Envoyé !</h2>
                  <p className="text-gray-300 text-lg mb-4">
                    Merci pour votre confiance. Nous vous recontacterons dans les 24h
                    pour vous proposer un devis personnalisé.
                  </p>
                  <p className="text-amber-400 text-sm font-medium mb-8">
                    Un email de confirmation vous a été envoyé
                  </p>
                  <button
                    onClick={handleNewDevis}
                    className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <div className="grid lg:grid-cols-5 gap-8 relative">
                  {/* Form Column */}
                  <div className="lg:col-span-3">
                    <MotionDiv
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        Demandez votre devis gratuit
                      </h1>
                      <p className="text-gray-400 leading-relaxed">
                        Remplissez le formulaire ci-dessous. Nous vous recontacterons sous 24 heures avec une estimation personnalisée.
                      </p>
                    </MotionDiv>

                    <MotionDiv
                      className="border border-white/10 bg-[#141922] rounded-2xl p-6 sm:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {fieldErrors.general && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-400/30 rounded-xl">
                          <p className="text-red-300 text-sm font-medium">{fieldErrors.general}</p>
                        </div>
                      )}

                      <FieldErrorsContext.Provider value={fieldErrors}>
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                              const data = new FormData(e.currentTarget);
                              await handleDevisSubmit(data, e.currentTarget);
                            } catch (error) {
                              console.error('Erreur lors de la soumission:', error);
                            }
                          }}
                          onFocus={(e) => {
                            const target = e.target as HTMLElement;
                            const fieldName = (target as HTMLInputElement).name || target.id || '';
                            if (fieldName) onFieldFocus(fieldName);
                          }}
                          className="space-y-6"
                        >
                          {/* Coordonnées */}
                          <div className="space-y-4">
                            <SecureInput type="text" id="name" name="name" label="Nom complet" placeholder="Votre nom" required />
                            <div className="grid sm:grid-cols-2 gap-4">
                              <SecureInput type="email" id="email" name="email" label="Email" placeholder="exemple@email.com" required />
                              <SecureInput type="tel" id="phone" name="phone" label="Téléphone" placeholder="06 12 34 56 78" required />
                            </div>
                          </div>

                          {/* Message */}
                          <SecureTextarea
                            id="description"
                            name="description"
                            label="Message"
                            placeholder="Décrivez votre projet, vos besoins spécifiques..."
                            rows={3}
                          />
                          <p className="text-gray-500 text-xs -mt-4">Optionnel</p>

                          {/* Submit */}
                          <button
                            type="submit"
                            className="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                              </svg>
                            ) : (
                              <>
                                <FaPaperPlane className="w-5 h-5" />
                                <span>Envoyer ma demande de devis</span>
                              </>
                            )}
                          </button>
                          <p className="text-gray-500 text-sm text-center">
                            * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle
                            conformément au RGPD.
                          </p>
                        </form>
                      </FieldErrorsContext.Provider>
                    </MotionDiv>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-2 space-y-5">
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="lg:mt-36 space-y-5"
                    >
                      {/* Avantages */}
                      {advantages.map((advantage, index) => (
                        <div
                          key={index}
                          className="p-5 rounded-xl border border-white/10 bg-[#141922]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-amber-400 mt-0.5">{advantage.icon}</div>
                            <div>
                              <h3 className="text-base font-bold text-white mb-1 font-display">{advantage.title}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Phone card */}
                      <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
                        <div className="flex items-start gap-3">
                          <div className="text-amber-400 mt-0.5">
                            <FaPhone size={18} />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white mb-1 font-display">Appelez-nous</h3>
                            <a
                              href="tel:+33786819692"
                              className="text-amber-400 font-semibold text-lg hover:text-amber-300 transition-colors"
                            >
                              07 86 81 96 92
                            </a>
                            <p className="text-gray-400 text-sm mt-1">Lun-Ven 8h-18h</p>
                          </div>
                        </div>
                      </div>
                    </MotionDiv>
                  </div>
                </div>
              )}
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
