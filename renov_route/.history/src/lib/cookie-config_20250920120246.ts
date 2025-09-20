// Configuration des cookies pour Renov Route
export const COOKIE_CONFIG = {
  // ID Google Analytics (remplacez par votre vrai ID)
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-VOTRE_ID_ANALYTICS_ICI',
  
  // Domaine du site
  SITE_DOMAIN: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'renov-route.com',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://renov-route.com',
  
  // Configuration des cookies
  COOKIE_NAMES: {
    CONSENT: 'renov_route_consent',
    PREFERENCES: 'renov_route_preferences',
    CONVERSION: 'renov_route_conversion',
    SESSION: 'renov_route_session',
    ANALYTICS: 'renov_route_analytics'
  },
  
  // Durées d'expiration (en jours)
  EXPIRY: {
    CONSENT: 365, // 1 an
    PREFERENCES: 90, // 3 mois
    CONVERSION: 30, // 1 mois
    SESSION: 1, // 1 jour
    ANALYTICS: 30 // 1 mois
  },
  
  // Configuration RGPD
  GDPR: {
    CONSENT_REQUIRED: true,
    SHOW_BANNER: true,
    ALLOW_CUSTOMIZATION: true
  }
} as const

// Messages pour la bannière de cookies
export const COOKIE_MESSAGES = {
  TITLE: '🍪 Gestion des cookies',
  DESCRIPTION: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels cookies accepter.',
  ACCEPT_ALL: 'Accepter tout',
  REJECT_ALL: 'Refuser tout',
  CUSTOMIZE: 'Personnaliser',
  SAVE_PREFERENCES: 'Sauvegarder les préférences',
  PRIVACY_POLICY: 'Politique de confidentialité',
  LEGAL_NOTICE: 'Mentions légales',
  DELETE_COOKIES: 'Supprimer tous les cookies'
} as const

// Types de cookies avec descriptions
export const COOKIE_TYPES = {
  NECESSARY: {
    name: 'Cookies nécessaires',
    description: 'Essentiels au fonctionnement du site (sécurité, préférences de base)',
    required: true,
    examples: ['Session utilisateur', 'Préférences de sécurité', 'Consentement RGPD']
  },
  ANALYTICS: {
    name: 'Cookies d\'analyse',
    description: 'Nous aident à comprendre comment vous utilisez notre site (Google Analytics)',
    required: false,
    examples: ['Google Analytics', 'Statistiques de visite', 'Analyse du comportement']
  },
  MARKETING: {
    name: 'Cookies marketing',
    description: 'Pour personnaliser les publicités et mesurer leur efficacité',
    required: false,
    examples: ['Publicités ciblées', 'Retargeting', 'Mesure d\'efficacité']
  },
  PREFERENCES: {
    name: 'Cookies de préférences',
    description: 'Mémorisent vos choix et paramètres personnalisés',
    required: false,
    examples: ['Région préférée', 'Méthode de contact', 'Paramètres d\'affichage']
  }
} as const
