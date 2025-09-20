'use client';

import Layout from '@/components/Layout';
import CustomDropdown from '@/components/CustomDropdown';
import { SecureInput, SecureTextarea, SecureCheckbox, FieldErrorsContext } from '@/components/SecureForm';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { validateDevisFormWithFieldErrors } from '@/lib/form-validation';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { sendDevisEmail } from '@/lib/email';
import ClientSEOHead from '@/components/ClientSEOHead';

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
  const { isSafari } = useSafariOptimization();




  const bestTimeOptions = [
    { value: 'morning', label: 'Matin (8h-12h)' },
    { value: 'afternoon', label: 'Après-midi (14h-18h)' },
    { value: 'evening', label: 'Soirée (18h-20h)' },
    { value: 'anytime', label: 'N\'importe quand' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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

  const handleDevisSubmit = async (formData: FormData, formEl: HTMLFormElement) => {
    try {
      setIsLoading(true);
      setFieldErrors({});
      
      const { data: validatedData, errors } = validateDevisFormWithFieldErrors(formData);
      
      if (errors && Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        return; // Stop execution but don't throw error
      }
      
      if (!validatedData) {
        setFieldErrors({ general: 'Erreur de validation' });
        return; // Stop execution but don't throw error
      }
      
      console.log('Devis validé:', validatedData);
      
      // Envoi via EmailJS (inclut les fichiers)
      await sendDevisEmail(formEl);
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 15000);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setFieldErrors({ general: 'Une erreur inattendue s\'est produite' });
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
      <SEOHead 
        title="Devis Gratuit - Traçage Marquage Routier | Renov Route"
        description="Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h. Intervention dans toute la France."
        keywords="devis gratuit marquage routier, devis traçage parking, devis réparation nids de poule, estimation marquage au sol, devis signalisation verticale, devis résine sol, devis accessoires parking, devis rapide marquage"
        pageKey="devis"
        canonicalUrl="https://renov-route.com/devis"
      />
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
      <Layout>
      <SafariAnimationFix>
      {/* Devis Form Section */}
      <section className="pt-32 pb-20 px-4 animated-gradient-slow">
        <div className="max-w-4xl mx-auto">
          {isSafari ? (
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Demandez votre devis</h2>
              <p className="text-xl text-gray-200">
                Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Demandez votre devis</h2>
              <p className="text-xl text-gray-200">
                Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
              </p>
            </motion.div>
          )}
          
          {isSafari ? (
            <>
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Devis Envoyé !
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
                  <div className="mt-8">
                    <button
                      onClick={handleNewDevis}
                      className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                      Faire une nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glassmorphism-card p-8">
                  {/* Error Display */}
                  {fieldErrors.general && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                      <p className="text-red-200 text-sm font-medium">
                        {fieldErrors.general}
                      </p>
                    </div>
                  )}
                  
                  <FieldErrorsContext.Provider value={fieldErrors}>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        const formData = new FormData(e.currentTarget);
                        await handleDevisSubmit(formData, e.currentTarget);
                      } catch (error) {
                        console.error('Erreur lors de la soumission:', error);
                      }
                    }} className="space-y-8">
              {/* Informations personnelles */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informations personnelles</h3>
                <div className="grid md:grid-cols-2 gap-6">
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
                    required
                  />
                </div>
              </div>

              {/* Informations entreprise */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informations entreprise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <SecureInput
                    type="text"
                    id="company"
                    name="company"
                    label="Nom de l'entreprise (optionnel)"
                    placeholder="Nom de votre société "
                  />
                  <SecureInput
                    type="text"
                    id="siret"
                    name="siret"
                    label="SIRET (optionnel)"
                    placeholder="12345678901234"
                  />
                </div>
              </div>

              {/* Adresse du projet */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Adresse du projet</h3>
                <div className="space-y-6">
                  <SecureInput
                    type="text"
                    id="address"
                    name="address"
                    label="Adresse complète"
                    placeholder="123 rue de la Paix"
                    required
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <SecureInput
                      type="text"
                      id="city"
                      name="city"
                      label="Ville"
                      placeholder="Paris"
                      required
                    />
                    <SecureInput
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      label="Code postal"
                      placeholder="75001"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Type de projet */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Type de projet</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <SecureCheckbox
                    name="projectType"
                    value="tracage-retracage"
                    label="Traçage / retraçage de parking"
                    checked={formData.projectTypes.includes('tracage-retracage')}
                    onChange={(checked) => handleProjectTypeChange('tracage-retracage', checked)}
                  />
                  <SecureCheckbox
                    name="projectType"
                    value="signalisation-verticale"
                    label="Signalisation verticale"
                    checked={formData.projectTypes.includes('signalisation-verticale')}
                    onChange={(checked) => handleProjectTypeChange('signalisation-verticale', checked)}
                  />
                  <SecureCheckbox
                    name="projectType"
                    value="resine-sol-marquage"
                    label="Résine de sol et marquage d'intérieur"
                    checked={formData.projectTypes.includes('resine-sol-marquage')}
                    onChange={(checked) => handleProjectTypeChange('resine-sol-marquage', checked)}
                  />
                  <SecureCheckbox
                    name="projectType"
                    value="reparation-nids-poule"
                    label="Réparation de nid de poule"
                    checked={formData.projectTypes.includes('reparation-nids-poule')}
                    onChange={(checked) => handleProjectTypeChange('reparation-nids-poule', checked)}
                  />
                  <SecureCheckbox
                    name="projectType"
                    value="accessoires-parking"
                    label="Accessoires de parking"
                    checked={formData.projectTypes.includes('accessoires-parking')}
                    onChange={(checked) => handleProjectTypeChange('accessoires-parking', checked)}
                  />
                  <SecureCheckbox
                    name="projectType"
                    value="autre"
                    label="Autre"
                    checked={formData.projectTypes.includes('autre')}
                    onChange={(checked) => handleProjectTypeChange('autre', checked)}
                  />
                </div>
                
                {/* Champ texte conditionnel pour "Autre" */}
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
                <h3 className="text-2xl font-bold text-white mb-6">Détails du projet</h3>
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
                <h3 className="text-2xl font-bold text-white mb-6">Préférences de contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Comment souhaitez-vous être contacté ?
                    </label>
                    <div className="space-y-2">
                      <SecureCheckbox
                        name="contactMethod"
                        value="phone"
                        label="Téléphone"
                        checked={formData.contactMethods.includes('phone')}
                        onChange={(checked) => handleContactMethodChange('phone', checked)}
                      />
                      <SecureCheckbox
                        name="contactMethod"
                        value="email"
                        label="Email"
                        checked={formData.contactMethods.includes('email')}
                        onChange={(checked) => handleContactMethodChange('email', checked)}
                      />
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

              {/* Spacer */}
              <div className="h-8"></div>

              {/* Bouton de soumission */}
              <div className="text-center pt-6">
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
                      <span>Envoyer ma demande de devis</span>
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-sm mt-4">
                * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle 
                conformément au RGPD.
                </p>
              </div>
            </form>
                  </FieldErrorsContext.Provider>
                </div>
              )}
            </>
          ) : (
            <>
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Devis Envoyé !
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
                  <div className="mt-8">
                    <button
                      onClick={handleNewDevis}
                      className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                      Faire une nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div 
                  className="glassmorphism-card p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {/* Error Display */}
                  {fieldErrors.general && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                      <p className="text-red-200 text-sm font-medium">
                        {fieldErrors.general}
                      </p>
                    </div>
                  )}
                  
                  <FieldErrorsContext.Provider value={fieldErrors}>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        const formData = new FormData(e.currentTarget);
                        await handleDevisSubmit(formData, e.currentTarget);
                      } catch (error) {
                        console.error('Erreur lors de la soumission:', error);
                      }
                    }} className="space-y-8">
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Informations personnelles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
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
                      required
                    />
                  </div>
                </div>

                {/* Informations entreprise */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Informations entreprise</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <SecureInput
                      type="text"
                      id="company"
                      name="company"
                      label="Nom de l'entreprise (optionnel)"
                      placeholder="Nom de votre société"
                    />
                    <SecureInput
                      type="text"
                      id="siret"
                      name="siret"
                      label="SIRET (optionnel)"
                      placeholder="12345678901234"
                    />
                  </div>
                </div>

                {/* Adresse du projet */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Adresse du projet</h3>
                  <div className="space-y-6">
                    <SecureInput
                      type="text"
                      id="address"
                      name="address"
                      label="Adresse complète"
                      placeholder="123 rue de la Paix"
                      required
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <SecureInput
                        type="text"
                        id="city"
                        name="city"
                        label="Ville"
                        placeholder="Paris"
                        required
                      />
                      <SecureInput
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        label="Code postal"
                        placeholder="75001"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Type de projet */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Type de projet</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <SecureCheckbox
                      name="projectType"
                      value="tracage-retracage"
                      label="Traçage / retraçage de parking"
                      checked={formData.projectTypes.includes('tracage-retracage')}
                      onChange={(checked) => handleProjectTypeChange('tracage-retracage', checked)}
                    />
                    <SecureCheckbox
                      name="projectType"
                      value="signalisation-verticale"
                      label="Signalisation verticale"
                      checked={formData.projectTypes.includes('signalisation-verticale')}
                      onChange={(checked) => handleProjectTypeChange('signalisation-verticale', checked)}
                    />
                    <SecureCheckbox
                      name="projectType"
                      value="resine-sol-marquage"
                      label="Résine de sol et marquage d'intérieur"
                      checked={formData.projectTypes.includes('resine-sol-marquage')}
                      onChange={(checked) => handleProjectTypeChange('resine-sol-marquage', checked)}
                    />
                    <SecureCheckbox
                      name="projectType"
                      value="reparation-nids-poule"
                      label="Réparation de nid de poule"
                      checked={formData.projectTypes.includes('reparation-nids-poule')}
                      onChange={(checked) => handleProjectTypeChange('reparation-nids-poule', checked)}
                    />
                    <SecureCheckbox
                      name="projectType"
                      value="accessoires-parking"
                      label="Accessoires de parking"
                      checked={formData.projectTypes.includes('accessoires-parking')}
                      onChange={(checked) => handleProjectTypeChange('accessoires-parking', checked)}
                    />
                    <SecureCheckbox
                      name="projectType"
                      value="autre"
                      label="Autre"
                      checked={formData.projectTypes.includes('autre')}
                      onChange={(checked) => handleProjectTypeChange('autre', checked)}
                    />
                  </div>
                  
                  {/* Champ texte conditionnel pour "Autre" */}
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
                  <h3 className="text-2xl font-bold text-white mb-6">Détails du projet</h3>
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
                  <h3 className="text-2xl font-bold text-white mb-6">Préférences de contact</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Comment souhaitez-vous être contacté ?
                      </label>
                      <div className="space-y-2">
                        <SecureCheckbox
                          name="contactMethod"
                          value="phone"
                          label="Téléphone"
                          checked={formData.contactMethods.includes('phone')}
                          onChange={(checked) => handleContactMethodChange('phone', checked)}
                        />
                        <SecureCheckbox
                          name="contactMethod"
                          value="email"
                          label="Email"
                          checked={formData.contactMethods.includes('email')}
                          onChange={(checked) => handleContactMethodChange('email', checked)}
                        />
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

                {/* Spacer */}
                <div className="h-8"></div>

                {/* Bouton de soumission */}
                <div className="text-center pt-6">
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
                        <span>Envoyer ma demande de devis</span>
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-sm mt-4">
                  * Champs obligatoires. Vos données sont traitées de manière strictement confidentielle 
                  conformément au RGPD.
                  </p>
                </div>
              </form>
                    </FieldErrorsContext.Provider>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          {isSafari ? (
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pourquoi choisir Renov-route ?</h2>
            </div>
          ) : (
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Pourquoi choisir Renov-route ?</h2>
            </motion.div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", 
                title: "Devis gratuit", 
                description: "Estimation gratuite et sans engagement" 
              },
              { 
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 
                title: "Réponse rapide", 
                description: "Devis sous 24h, intervention rapide" 
              },
              { 
                icon: "M5 13l4 4L19 7", 
                title: "Garantie qualité", 
                description: "Matériaux de qualité, travail soigné" 
              }
            ].map((advantage, index) => (
              isSafari ? (
                <div key={index} className="text-center">
                  <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ) : (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.2, 0.8, 0.2, 1]
                  }}
                >
                  <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>
      </SafariAnimationFix>
      </Layout>
    </>
  );
}
