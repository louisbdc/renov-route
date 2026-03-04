'use client';

import Layout from '@/components/Layout';
import CustomDropdown from '@/components/CustomDropdown';
import { SecureInput, SecureTextarea, SecureCheckbox, FieldErrorsContext } from '@/components/SecureForm';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import { useState } from 'react';
import { validateDevisFormWithFieldErrors } from '@/lib/form-validation';
import { FaPaperPlane } from 'react-icons/fa';
import { sendDevisEmail } from '@/lib/email';
import { TbCircleCheck, TbClock, TbShieldCheck } from 'react-icons/tb';

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
  const [formData, setFormData] = useState({
    bestTime: '',
    projectTypes: [] as string[],
    otherProjectType: '',
    contactMethods: ['phone', 'email'] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const bestTimeOptions = [
    { value: 'morning', label: 'Matin (8h-12h)' },
    { value: 'afternoon', label: 'Après-midi (14h-18h)' },
    { value: 'evening', label: 'Soirée (18h-20h)' },
    { value: 'anytime', label: "N'importe quand" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectTypeChange = (projectType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, projectType]
        : prev.projectTypes.filter(type => type !== projectType)
    }));
  };

  const handleContactMethodChange = (method: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      contactMethods: checked
        ? [...prev.contactMethods, method]
        : prev.contactMethods.filter(m => m !== method)
    }));
  };

  const handleDevisSubmit = async (data: FormData, formEl: HTMLFormElement) => {
    try {
      setIsLoading(true);
      setFieldErrors({});

      const { data: validatedData, errors } = validateDevisFormWithFieldErrors(data);

      if (errors && Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        return;
      }

      if (!validatedData) {
        setFieldErrors({ general: 'Erreur de validation' });
        return;
      }

      await sendDevisEmail(formEl);

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
    setFormData({
      bestTime: '',
      projectTypes: [],
      otherProjectType: '',
      contactMethods: ['phone', 'email']
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Layout>
        <SafariAnimationFix>
          {/* Form Section */}
          <section className="pt-24 sm:pt-32 pb-20 px-4 bg-[#141922]">
            <div className="max-w-4xl mx-auto">
              <MotionDiv
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Demandez votre devis gratuit
                </h1>
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                  Remplissez le formulaire ci-dessous. Nous vous recontacterons dans les plus brefs délais avec une estimation personnalisée sous 24 heures.
                </p>
              </MotionDiv>

              {isSubmitted ? (
                <div className="text-center py-16 border border-white/10 bg-white/[0.03] rounded-2xl px-8">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Devis Envoyé !</h4>
                  <p className="text-gray-300 text-lg mb-4">
                    Merci pour votre confiance. Nous vous recontacterons dans les 24h
                    pour vous proposer un devis personnalisé.
                  </p>
                  <p className="text-sky-400 text-sm font-medium mb-8">
                    Un email de confirmation vous a été envoyé
                  </p>
                  <button
                    onClick={handleNewDevis}
                    className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <MotionDiv
                  className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 sm:p-8"
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
                      className="space-y-8"
                    >
                      {/* Informations personnelles */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Informations personnelles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <SecureInput type="text" id="firstName" name="firstName" label="Prénom" placeholder="Votre prénom" required />
                          <SecureInput type="text" id="lastName" name="lastName" label="Nom" placeholder="Votre nom de famille" required />
                          <SecureInput type="email" id="email" name="email" label="Email" placeholder="exemple@email.com" required />
                          <SecureInput type="tel" id="phone" name="phone" label="Téléphone" placeholder="06 12 34 56 78" required />
                        </div>
                      </div>

                      {/* Informations entreprise */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Informations entreprise</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <SecureInput type="text" id="company" name="company" label="Nom de l'entreprise (optionnel)" placeholder="Nom de votre société" />
                          <SecureInput type="text" id="siret" name="siret" label="SIRET (optionnel)" placeholder="12345678901234" />
                        </div>
                      </div>

                      {/* Adresse du projet */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Adresse du projet</h3>
                        <div className="space-y-6">
                          <SecureInput type="text" id="address" name="address" label="Adresse complète" placeholder="123 rue de la Paix" required />
                          <div className="grid md:grid-cols-2 gap-6">
                            <SecureInput type="text" id="city" name="city" label="Ville" placeholder="Paris" required />
                            <SecureInput type="text" id="postalCode" name="postalCode" label="Code postal" placeholder="75001" required />
                          </div>
                        </div>
                      </div>

                      {/* Type de projet */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Type de projet</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <SecureCheckbox name="projectType" value="tracage-retracage" label="Traçage / retraçage de parking" checked={formData.projectTypes.includes('tracage-retracage')} onChange={(checked) => handleProjectTypeChange('tracage-retracage', checked)} />
                          <SecureCheckbox name="projectType" value="signalisation-verticale" label="Signalisation verticale" checked={formData.projectTypes.includes('signalisation-verticale')} onChange={(checked) => handleProjectTypeChange('signalisation-verticale', checked)} />
                          <SecureCheckbox name="projectType" value="resine-sol-marquage" label="Résine de sol et marquage d'intérieur" checked={formData.projectTypes.includes('resine-sol-marquage')} onChange={(checked) => handleProjectTypeChange('resine-sol-marquage', checked)} />
                          <SecureCheckbox name="projectType" value="reparation-nids-poule" label="Réparation de nid de poule" checked={formData.projectTypes.includes('reparation-nids-poule')} onChange={(checked) => handleProjectTypeChange('reparation-nids-poule', checked)} />
                          <SecureCheckbox name="projectType" value="accessoires-parking" label="Accessoires de parking" checked={formData.projectTypes.includes('accessoires-parking')} onChange={(checked) => handleProjectTypeChange('accessoires-parking', checked)} />
                          <SecureCheckbox name="projectType" value="autre" label="Autre" checked={formData.projectTypes.includes('autre')} onChange={(checked) => handleProjectTypeChange('autre', checked)} />
                        </div>

                        {formData.projectTypes.includes('autre') && (
                          <div className="mt-4 animate-fadeIn">
                            <SecureInput
                              type="text"
                              id="otherProjectType"
                              name="otherProjectType"
                              label="Précisez le type de projet"
                              placeholder="Décrivez votre projet spécifique..."
                              value={formData.otherProjectType}
                              onChange={(value) => handleInputChange('otherProjectType', value)}
                            />
                          </div>
                        )}
                      </div>

                      {/* Détails du projet */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Détails du projet</h3>
                        <div className="space-y-6">
                          <SecureTextarea
                            id="description"
                            name="description"
                            label="Description détaillée du projet"
                            placeholder="Décrivez en détail votre projet, vos besoins spécifiques, les contraintes particulières..."
                            rows={5}
                            required
                          />
                        </div>
                      </div>

                      {/* Préférences de contact */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Préférences de contact</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 font-medium mb-2">
                              Comment souhaitez-vous être contacté ?
                            </label>
                            <div className="space-y-2">
                              <SecureCheckbox name="contactMethod" value="phone" label="Téléphone" checked={formData.contactMethods.includes('phone')} onChange={(checked) => handleContactMethodChange('phone', checked)} />
                              <SecureCheckbox name="contactMethod" value="email" label="Email" checked={formData.contactMethods.includes('email')} onChange={(checked) => handleContactMethodChange('email', checked)} />
                            </div>
                          </div>
                          <CustomDropdown
                            id="bestTime"
                            name="bestTime"
                            label="Meilleur moment pour vous contacter"
                            options={bestTimeOptions}
                            value={formData.bestTime}
                            onChange={(value) => handleInputChange('bestTime', value)}
                            placeholder="Pour optimiser nos échanges"
                          />
                        </div>
                      </div>

                      <div className="h-4" />

                      {/* Bouton de soumission */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed"
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
                        <p className="text-gray-500 text-sm mt-4">
                          * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle
                          conformément au RGPD.
                        </p>
                      </div>
                    </form>
                  </FieldErrorsContext.Provider>
                </MotionDiv>
              )}
            </div>
          </section>

          {/* Avantages Section */}
          <section className="py-16 px-4 bg-white/[0.025]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Pourquoi choisir Renov-route ?</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors"
                  >
                    <div className="text-sky-400 mb-3">{advantage.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
