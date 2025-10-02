'use client'

import { CookieManager } from './cookies'

// Configuration Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Types pour les événements
export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export interface GAPageView {
  page_title: string
  page_location: string
  page_path: string
}

// Classe pour gérer Google Analytics
export class GoogleAnalytics {
  private static instance: GoogleAnalytics
  private isInitialized = false

  static getInstance(): GoogleAnalytics {
    if (!GoogleAnalytics.instance) {
      GoogleAnalytics.instance = new GoogleAnalytics()
    }
    return GoogleAnalytics.instance
  }

  // Initialiser Google Analytics
  init(): void {
    if (typeof window === 'undefined' || this.isInitialized) return

    const consent = CookieManager.getConsent()
    if (!consent?.analytics) return

    // Charger Google Analytics
    this.loadScript()
    this.isInitialized = true
  }

  // Charger le script Google Analytics
  private loadScript(): void {
    if (typeof window === 'undefined') return

    // Ne pas injecter plusieurs fois
    const existingById = document.getElementById(`ga-script-${GA_TRACKING_ID}`)
    const existingBySrc = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`)
    if (!existingById && !existingBySrc) {
      const script = document.createElement('script')
      script.async = true
      script.id = `ga-script-${GA_TRACKING_ID}`
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
      try {
        document.head && document.head.appendChild(script)
      } catch {
        // ignore
      }
    }

    // Configuration gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      (window.dataLayer as unknown[]).push(args)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', GA_TRACKING_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure',
      cookie_expires: 30 * 24 * 60 * 60, // 30 jours
      send_page_view: false // Nous gérons manuellement les pages vues
    })
  }

  // Envoyer une page vue
  pageview(pageData: GAPageView): void {
    if (!this.isInitialized || typeof window === 'undefined') return

    const consent = CookieManager.getConsent()
    if (!consent?.analytics) return

    window.gtag('config', GA_TRACKING_ID, {
      page_title: pageData.page_title,
      page_location: pageData.page_location,
      page_path: pageData.page_path
    })
  }

  // Envoyer un événement
  event(eventData: GAEvent): void {
    if (!this.isInitialized || typeof window === 'undefined') return

    const consent = CookieManager.getConsent()
    if (!consent?.analytics) return

    window.gtag('event', eventData.action, {
      event_category: eventData.category,
      event_label: eventData.label,
      value: eventData.value
    })
  }

  // Événements spécifiques pour votre site
  trackPageView(pagePath: string, pageTitle: string): void {
    this.pageview({
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath
    })

    // Mettre à jour le suivi des conversions
    CookieManager.trackPageVisit(pagePath)
  }

  trackFormSubmission(formType: string, formName?: string): void {
    this.event({
      action: 'form_submit',
      category: 'engagement',
      label: `${formType}${formName ? ` - ${formName}` : ''}`
    })

    // Mettre à jour le suivi des conversions
    CookieManager.trackFormSubmission(formType)
  }

  trackPhoneCall(phoneNumber?: string): void {
    this.event({
      action: 'phone_call',
      category: 'contact',
      label: phoneNumber || 'phone_click'
    })
  }

  trackEmailClick(emailAddress?: string): void {
    this.event({
      action: 'email_click',
      category: 'contact',
      label: emailAddress || 'email_click'
    })
  }

  trackServiceInterest(serviceName: string): void {
    this.event({
      action: 'service_interest',
      category: 'business',
      label: serviceName
    })
  }

  trackQuoteRequest(serviceType?: string): void {
    this.event({
      action: 'quote_request',
      category: 'conversion',
      label: serviceType || 'general_quote'
    })
  }

  trackCaseStudyView(caseName: string): void {
    this.event({
      action: 'case_study_view',
      category: 'content',
      label: caseName
    })
  }

  trackPartnerClick(partnerName: string): void {
    this.event({
      action: 'partner_click',
      category: 'partnership',
      label: partnerName
    })
  }

  // Désactiver Google Analytics
  disable(): void {
    if (typeof window === 'undefined') return

    // Supprimer les cookies Google Analytics
    const cookies = ['_ga', '_ga_*', '_gid', '_gat']
    cookies.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    })

    // Désactiver gtag
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }

    this.isInitialized = false
  }

  // Réactiver Google Analytics
  enable(): void {
    this.init()
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }
}

// Hook React pour utiliser Google Analytics
export function useAnalytics() {
  const analytics = GoogleAnalytics.getInstance()

  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackPhoneCall: analytics.trackPhoneCall.bind(analytics),
    trackEmailClick: analytics.trackEmailClick.bind(analytics),
    trackServiceInterest: analytics.trackServiceInterest.bind(analytics),
    trackQuoteRequest: analytics.trackQuoteRequest.bind(analytics),
    trackCaseStudyView: analytics.trackCaseStudyView.bind(analytics),
    trackPartnerClick: analytics.trackPartnerClick.bind(analytics),
    disable: analytics.disable.bind(analytics),
    enable: analytics.enable.bind(analytics)
  }
}

// Fonction utilitaire pour initialiser l'analytics au chargement de la page
export function initializeAnalytics(): void {
  const analytics = GoogleAnalytics.getInstance()
  analytics.init()
}

// Fonction pour tracker les conversions importantes
export function trackConversion(conversionType: string, value?: number): void {
  const analytics = GoogleAnalytics.getInstance()
  
  analytics.event({
    action: 'conversion',
    category: 'business',
    label: conversionType,
    value: value
  })
}

// Types globaux pour TypeScript
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
