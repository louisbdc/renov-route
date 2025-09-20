import Cookies from 'js-cookie'

// Types pour les cookies
export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
  timestamp: string
}

export interface UserPreferences {
  region?: string
  preferredContactMethod?: 'phone' | 'email'
  lastVisit?: string
  language?: string
}

export interface ConversionTracking {
  source?: string
  campaign?: string
  visitedPages: string[]
  formSubmissions: number
  lastAction?: string
}

// Configuration des cookies
export const COOKIE_CONFIG = {
  CONSENT: 'renov_route_consent',
  PREFERENCES: 'renov_route_preferences',
  CONVERSION: 'renov_route_conversion',
  SESSION: 'renov_route_session',
  ANALYTICS: 'renov_route_analytics'
} as const

// Durées d'expiration (en jours)
export const COOKIE_EXPIRY = {
  CONSENT: 365, // 1 an
  PREFERENCES: 90, // 3 mois
  CONVERSION: 30, // 1 mois
  SESSION: 1, // 1 jour
  ANALYTICS: 30 // 1 mois
} as const

// Utilitaires pour les cookies
export class CookieManager {
  // Vérifier si les cookies sont supportés
  static isSupported(): boolean {
    return typeof document !== 'undefined' && 'cookie' in document
  }

  // Obtenir le consentement actuel
  static getConsent(): CookieConsent | null {
    if (!this.isSupported()) return null
    
    const consent = Cookies.get(COOKIE_CONFIG.CONSENT)
    if (!consent) return null
    
    try {
      return JSON.parse(consent)
    } catch {
      return null
    }
  }

  // Définir le consentement
  static setConsent(consent: Partial<CookieConsent>): void {
    if (!this.isSupported()) return
    
    const currentConsent = this.getConsent() || {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    }
    
    const newConsent: CookieConsent = {
      ...currentConsent,
      ...consent,
      timestamp: new Date().toISOString()
    }
    
    Cookies.set(COOKIE_CONFIG.CONSENT, JSON.stringify(newConsent), {
      expires: COOKIE_EXPIRY.CONSENT,
      secure: true,
      sameSite: 'strict'
    })
  }

  // Obtenir les préférences utilisateur
  static getPreferences(): UserPreferences | null {
    if (!this.isSupported()) return null
    
    const preferences = Cookies.get(COOKIE_CONFIG.PREFERENCES)
    if (!preferences) return null
    
    try {
      return JSON.parse(preferences)
    } catch {
      return null
    }
  }

  // Définir les préférences utilisateur
  static setPreferences(preferences: Partial<UserPreferences>): void {
    if (!this.isSupported()) return
    
    const currentPreferences = this.getPreferences() || {}
    const newPreferences: UserPreferences = {
      ...currentPreferences,
      ...preferences
    }
    
    Cookies.set(COOKIE_CONFIG.PREFERENCES, JSON.stringify(newPreferences), {
      expires: COOKIE_EXPIRY.PREFERENCES,
      secure: true,
      sameSite: 'strict'
    })
  }

  // Obtenir le suivi des conversions
  static getConversionTracking(): ConversionTracking | null {
    if (!this.isSupported()) return null
    
    const tracking = Cookies.get(COOKIE_CONFIG.CONVERSION)
    if (!tracking) return null
    
    try {
      return JSON.parse(tracking)
    } catch {
      return null
    }
  }

  // Mettre à jour le suivi des conversions
  static updateConversionTracking(updates: Partial<ConversionTracking>): void {
    if (!this.isSupported()) return
    
    const currentTracking = this.getConversionTracking() || {
      visitedPages: [],
      formSubmissions: 0
    }
    
    const newTracking: ConversionTracking = {
      ...currentTracking,
      ...updates,
      visitedPages: [...new Set([...currentTracking.visitedPages, ...(updates.visitedPages || [])])]
    }
    
    Cookies.set(COOKIE_CONFIG.CONVERSION, JSON.stringify(newTracking), {
      expires: COOKIE_EXPIRY.CONVERSION,
      secure: true,
      sameSite: 'strict'
    })
  }

  // Enregistrer une visite de page
  static trackPageVisit(page: string): void {
    const consent = this.getConsent()
    if (!consent?.analytics) return
    
    this.updateConversionTracking({
      visitedPages: [page],
      lastAction: `visited_${page}`
    })
  }

  // Enregistrer une soumission de formulaire
  static trackFormSubmission(formType: string): void {
    const consent = this.getConsent()
    if (!consent?.analytics) return
    
    const currentTracking = this.getConversionTracking() || { visitedPages: [], formSubmissions: 0 }
    
    this.updateConversionTracking({
      formSubmissions: currentTracking.formSubmissions + 1,
      lastAction: `form_submitted_${formType}`
    })
  }

  // Supprimer tous les cookies (sauf nécessaires)
  static clearAllCookies(): void {
    if (!this.isSupported()) return
    
    // Supprimer nos cookies personnalisés
    Object.values(COOKIE_CONFIG).forEach(cookieName => {
      Cookies.remove(cookieName)
      // Supprimer aussi avec différents chemins et domaines
      Cookies.remove(cookieName, { path: '/' })
      Cookies.remove(cookieName, { path: '/', domain: window.location.hostname })
      Cookies.remove(cookieName, { path: '/', domain: '.' + window.location.hostname })
    })
    
    // Supprimer les cookies Google Analytics
    const gaCookies = ['_ga', '_ga_*', '_gid', '_gat', '_gat_*', '_gcl_au', '_gcl_aw', '_gcl_dc', '_gcl_gb']
    gaCookies.forEach(cookieName => {
      Cookies.remove(cookieName)
      Cookies.remove(cookieName, { path: '/' })
      Cookies.remove(cookieName, { path: '/', domain: window.location.hostname })
      Cookies.remove(cookieName, { path: '/', domain: '.' + window.location.hostname })
    })
    
    // Supprimer les cookies de session et autres cookies communs
    const commonCookies = ['JSESSIONID', 'PHPSESSID', 'ASP.NET_SessionId', 'connect.sid']
    commonCookies.forEach(cookieName => {
      Cookies.remove(cookieName)
      Cookies.remove(cookieName, { path: '/' })
    })
    
    // Supprimer tous les cookies du domaine actuel
    const allCookies = document.cookie.split(';')
    allCookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()
      if (name) {
        Cookies.remove(name)
        Cookies.remove(name, { path: '/' })
        Cookies.remove(name, { path: '/', domain: window.location.hostname })
        Cookies.remove(name, { path: '/', domain: '.' + window.location.hostname })
      }
    })
    
    // Réinitialiser le consentement
    this.setConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    })
  }

  // Supprimer les cookies non-essentiels
  static clearNonEssentialCookies(): void {
    if (!this.isSupported()) return
    
    const nonEssentialCookies = [
      COOKIE_CONFIG.ANALYTICS,
      COOKIE_CONFIG.CONVERSION,
      COOKIE_CONFIG.PREFERENCES
    ]
    
    nonEssentialCookies.forEach(cookieName => {
      Cookies.remove(cookieName)
    })
  }

  // Obtenir les statistiques de cookies
  static getCookieStats(): { total: number; essential: number; nonEssential: number } {
    if (!this.isSupported()) return { total: 0, essential: 0, nonEssential: 0 }
    
    const allCookies = document.cookie.split(';').map(c => c.trim().split('=')[0])
    const essentialCookies = [COOKIE_CONFIG.CONSENT, COOKIE_CONFIG.SESSION]
    
    const isEssential = (name: string) => essentialCookies.includes(name as unknown as typeof essentialCookies[number])
    return {
      total: allCookies.length,
      essential: allCookies.filter(name => isEssential(name)).length,
      nonEssential: allCookies.filter(name => !isEssential(name)).length
    }
  }
}

// Hook React pour utiliser les cookies
export const useCookieConsent = () => {
  const [consent, setConsent] = React.useState<CookieConsent | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const currentConsent = CookieManager.getConsent()
    setConsent(currentConsent)
    setIsLoading(false)
  }, [])

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    CookieManager.setConsent(newConsent)
    const updatedConsent = CookieManager.getConsent()
    setConsent(updatedConsent)
  }

  const acceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    CookieManager.setConsent(newConsent)
    setConsent(CookieManager.getConsent())
  }

  const rejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    CookieManager.setConsent(newConsent)
    CookieManager.clearNonEssentialCookies()
    setConsent(CookieManager.getConsent())
  }

  return {
    consent,
    isLoading,
    updateConsent,
    acceptAll,
    rejectAll,
    hasConsent: !!consent && !!consent.timestamp
  }
}

// Import React pour le hook
import React from 'react'
