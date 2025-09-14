# 🍪 Système de Cookies - Renov Route

Ce document explique comment utiliser le système de cookies implémenté sur le site Renov Route.

## 📋 Fonctionnalités

### ✅ Implémenté
- **Gestion RGPD complète** : Bannière de consentement, préférences personnalisables
- **Google Analytics** : Intégration avec respect du consentement
- **Suivi des conversions** : Formulaires, clics téléphone/email, intérêts services
- **Cookies de préférences** : Région, méthode de contact, paramètres utilisateur
- **Politique de confidentialité** : Page dédiée avec gestion des préférences
- **Types de cookies** : Nécessaires, Analytics, Marketing, Préférences

## 🚀 Utilisation

### 1. Configuration initiale

Ajoutez votre ID Google Analytics dans `.env.local` :
```bash
NEXT_PUBLIC_GA_ID=G-VOTRE_ID_ANALYTICS
```

### 2. Composants disponibles

#### CookieConsent
Bannière de consentement RGPD automatique :
```tsx
import CookieConsent from '@/components/CookieConsent'

// Dans votre layout
<CookieConsent />
```

#### AnalyticsTracker
Tracker automatique des pages et interactions :
```tsx
import AnalyticsTracker from '@/components/AnalyticsTracker'

<AnalyticsTracker pageTitle="Ma Page" pagePath="/ma-page">
  {children}
</AnalyticsTracker>
```

#### Hooks de tracking
```tsx
import { useConversionTracking } from '@/components/AnalyticsTracker'

const { trackFormSubmission, trackPhoneCall, trackEmailClick } = useConversionTracking()

// Tracker une soumission de formulaire
trackFormSubmission('contact', 'devis')

// Tracker un clic téléphone
trackPhoneCall('0786819692')

// Tracker un clic email
trackEmailClick('contact@renov-route.com')
```

### 3. Composants de tracking automatique

#### ContactTracker
```tsx
import { ContactTracker } from '@/components/AnalyticsTracker'

<ContactTracker type="phone" value="0786819692">
  <a href="tel:0786819692">07 86 81 96 92</a>
</ContactTracker>

<ContactTracker type="email" value="contact@example.com">
  <a href="mailto:contact@example.com">contact@example.com</a>
</ContactTracker>
```

#### ServiceInterestTracker
```tsx
import { ServiceInterestTracker } from '@/components/AnalyticsTracker'

<ServiceInterestTracker serviceName="Traçage de parking">
  <button>En savoir plus sur le traçage</button>
</ServiceInterestTracker>
```

#### QuoteTracker
```tsx
import { QuoteTracker } from '@/components/AnalyticsTracker'

<QuoteTracker serviceType="reparation">
  <button>Demander un devis</button>
</QuoteTracker>
```

### 4. Gestion des cookies

#### CookieManager (utilitaires)
```tsx
import { CookieManager } from '@/lib/cookies'

// Obtenir le consentement
const consent = CookieManager.getConsent()

// Définir les préférences
CookieManager.setPreferences({ region: 'Paris' })

// Tracker une page
CookieManager.trackPageVisit('/contact')

// Supprimer les cookies non-essentiels
CookieManager.clearNonEssentialCookies()
```

#### useCookieConsent (hook React)
```tsx
import { useCookieConsent } from '@/lib/cookies'

const { consent, acceptAll, rejectAll, updateConsent } = useCookieConsent()

// Accepter tous les cookies
acceptAll()

// Refuser tous les cookies non-essentiels
rejectAll()

// Mettre à jour les préférences
updateConsent({ analytics: true, marketing: false })
```

## 📊 Données collectées

### Cookies nécessaires
- **Session utilisateur** : Sécurité et fonctionnement de base
- **Consentement RGPD** : Mémorisation des choix utilisateur
- **Préférences de sécurité** : Protection CSRF, etc.

### Cookies d'analyse (avec consentement)
- **Google Analytics** : Pages visitées, durée de visite, source de trafic
- **Comportement utilisateur** : Clics, interactions, parcours
- **Performance** : Temps de chargement, erreurs

### Cookies de préférences (avec consentement)
- **Région d'intérêt** : Pour personnaliser le contenu
- **Méthode de contact** : Téléphone ou email préféré
- **Paramètres d'affichage** : Thème, langue, etc.

### Cookies marketing (avec consentement)
- **Retargeting** : Publicités ciblées
- **Mesure d'efficacité** : ROI des campagnes
- **Personnalisation** : Contenu adapté aux intérêts

## 🔒 Conformité RGPD

### Droits des utilisateurs
- ✅ **Accès** : Voir les données collectées
- ✅ **Rectification** : Corriger les données inexactes
- ✅ **Effacement** : Supprimer les données
- ✅ **Portabilité** : Récupérer les données
- ✅ **Opposition** : Refuser certains traitements
- ✅ **Limitation** : Limiter l'utilisation

### Base légale
- **Consentement** : Cookies non-essentiels
- **Intérêt légitime** : Amélioration des services
- **Exécution contractuelle** : Fourniture des services

## 📈 Analytics et conversions

### Événements trackés automatiquement
- **Pages vues** : Navigation sur le site
- **Formulaires** : Soumissions de contact/devis
- **Contact** : Clics téléphone et email
- **Services** : Intérêt pour les services
- **Devis** : Demandes de devis
- **Cas d'études** : Vues de réalisations
- **Partenaires** : Clics sur les logos partenaires

### Métriques importantes
- **Taux de conversion** : Visiteurs → Leads
- **Sources de trafic** : D'où viennent vos clients
- **Pages populaires** : Services les plus consultés
- **Parcours utilisateur** : Chemin vers la conversion
- **Engagement** : Temps passé, pages vues

## 🛠️ Personnalisation

### Modifier les messages
Éditez `src/lib/cookie-config.ts` :
```typescript
export const COOKIE_MESSAGES = {
  TITLE: '🍪 Votre message personnalisé',
  DESCRIPTION: 'Description personnalisée...',
  // ...
}
```

### Ajouter de nouveaux types de cookies
1. Modifiez `src/lib/cookies.ts`
2. Ajoutez le type dans `CookieConsent.tsx`
3. Mettez à jour la politique de confidentialité

### Personnaliser Google Analytics
Modifiez `src/lib/analytics.ts` pour ajouter des événements personnalisés.

## 🚨 Important

### Variables d'environnement
N'oubliez pas de configurer :
```bash
NEXT_PUBLIC_GA_ID=G-VOTRE_ID
NEXT_PUBLIC_COOKIE_DOMAIN=votre-domaine.com
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Test en développement
Le composant `CookieStats` s'affiche automatiquement en mode développement pour débugger.

### Mise en production
1. Configurez votre ID Google Analytics
2. Testez la bannière de consentement
3. Vérifiez la politique de confidentialité
4. Testez les différents types de cookies

## 📞 Support

Pour toute question sur l'implémentation des cookies :
- Consultez la documentation RGPD
- Vérifiez la configuration Google Analytics
- Testez en mode développement avec `CookieStats`

---

**Note** : Ce système est conçu pour être conforme au RGPD et respecter la vie privée des utilisateurs tout en permettant une analyse efficace du trafic et des conversions.
