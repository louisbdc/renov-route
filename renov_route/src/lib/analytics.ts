import { useMemo } from 'react'
import { CookieManager } from './cookies'

// Configuration Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Safe gtag wrapper — no-op si SSR ou gtag pas encore chargé
function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

// Types pour les événements
export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Classe pour gérer Google Analytics
// Le script gtag.js est chargé dans layout.tsx via <Script>.
// Cette classe ne fait QUE envoyer des événements et gérer le consentement.
export class GoogleAnalytics {
  private static instance: GoogleAnalytics

  static getInstance(): GoogleAnalytics {
    if (!GoogleAnalytics.instance) {
      GoogleAnalytics.instance = new GoogleAnalytics()
    }
    return GoogleAnalytics.instance
  }

  // Restaurer l'état du consentement depuis le cookie (appelé au chargement)
  restoreConsent(): void {
    const consent = CookieManager.getConsent()
    if (consent?.analytics) {
      gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  // Envoyer une page vue
  trackPageView(pagePath: string, pageTitle: string): void {
    gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      page_path: pagePath
    })
    CookieManager.trackPageVisit(pagePath)
  }

  // Envoyer un événement
  event(eventData: GAEvent): void {
    gtag('event', eventData.action, {
      event_category: eventData.category,
      event_label: eventData.label,
      value: eventData.value
    })
  }

  // Événements spécifiques
  trackFormSubmission(formType: string, formName?: string): void {
    this.event({
      action: 'form_submit',
      category: 'engagement',
      label: `${formType}${formName ? ` - ${formName}` : ''}`
    })
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

  // Scroll depth
  trackScrollDepth(pathname: string, depth: number): void {
    this.event({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${pathname}_${depth}%`,
      value: depth
    })
  }

  // Navigation
  trackNavClick(location: string, linkText: string, _href: string): void {
    this.event({
      action: 'nav_click',
      category: 'navigation',
      label: `${location}_${linkText}`
    })
  }

  trackMobileMenu(action: 'open' | 'close'): void {
    this.event({
      action: 'mobile_menu',
      category: 'navigation',
      label: action
    })
  }

  trackSocialClick(platform: string): void {
    this.event({
      action: 'social_click',
      category: 'navigation',
      label: platform
    })
  }

  // FAQ
  trackFaqToggle(action: 'expand' | 'collapse', question: string): void {
    this.event({
      action: 'faq_toggle',
      category: 'engagement',
      label: `${action}_${question}`
    })
  }

  // Slider before/after
  trackSliderInteraction(sliderName: string): void {
    this.event({
      action: 'slider_interaction',
      category: 'engagement',
      label: sliderName
    })
  }

  // Lightbox/Gallery
  trackLightboxOpen(projectTitle: string, imageIndex: number): void {
    this.event({
      action: 'lightbox_open',
      category: 'engagement',
      label: `${projectTitle}_img${imageIndex}`
    })
  }

  trackLightboxNav(projectTitle: string, direction: string, imageIndex: number): void {
    this.event({
      action: 'lightbox_nav',
      category: 'engagement',
      label: `${projectTitle}_${direction}_img${imageIndex}`
    })
  }

  trackLightboxClose(projectTitle: string, imageIndex: number): void {
    this.event({
      action: 'lightbox_close',
      category: 'engagement',
      label: `${projectTitle}_img${imageIndex}`
    })
  }

  // Filters
  trackFilterToggle(filterType: string, value: string, action: 'add' | 'remove'): void {
    this.event({
      action: 'filter_toggle',
      category: 'engagement',
      label: `${filterType}_${value}_${action}`
    })
  }

  trackFilterSearch(searchTerm: string): void {
    this.event({
      action: 'filter_search',
      category: 'engagement',
      label: searchTerm
    })
  }

  trackFilterClear(): void {
    this.event({
      action: 'filter_clear',
      category: 'engagement',
      label: 'clear_all'
    })
  }

  // Testimonial
  trackTestimonialNav(direction: string, testimonialIndex: number): void {
    this.event({
      action: 'testimonial_nav',
      category: 'engagement',
      label: `${direction}_${testimonialIndex}`
    })
  }

  // Cookie consent
  trackCookieConsent(choice: string): void {
    this.event({
      action: 'cookie_consent',
      category: 'privacy',
      label: choice
    })
  }

  // CTA comparison
  trackCtaClick(location: string, text: string, _href: string): void {
    this.event({
      action: 'cta_click',
      category: 'conversion',
      label: `${location}_${text}`
    })
  }

  // Form interactions
  trackFormView(formName: string): void {
    this.event({
      action: 'form_view',
      category: 'form',
      label: formName
    })
  }

  trackFormFieldFocus(formName: string, fieldName: string): void {
    this.event({
      action: 'form_field_focus',
      category: 'form',
      label: `${formName}_${fieldName}`
    })
  }

  trackFormAbandonment(formName: string, lastField: string): void {
    this.event({
      action: 'form_abandonment',
      category: 'form',
      label: `${formName}_last:${lastField}`
    })
  }

  trackFormError(formName: string, errorDetails: string): void {
    this.event({
      action: 'form_error',
      category: 'form',
      label: `${formName}_${errorDetails}`
    })
  }

  // Guide
  trackGuideClick(source: string, guideSlug: string): void {
    this.event({
      action: 'guide_click',
      category: 'content',
      label: `${source}_${guideSlug}`
    })
  }

  // Activer Google Analytics (consentement accordé)
  enable(): void {
    gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
    // Envoyer la page vue courante immédiatement
    if (typeof window !== 'undefined') {
      this.trackPageView(window.location.pathname, document.title)
    }
  }

  // Désactiver Google Analytics (consentement refusé)
  disable(): void {
    gtag('consent', 'update', {
      analytics_storage: 'denied'
    })
    // Supprimer les cookies Google Analytics existants
    if (typeof document !== 'undefined') {
      const cookies = ['_ga', '_gid', '_gat']
      cookies.forEach(cookie => {
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      })
    }
  }
}

// Hook React pour utiliser Google Analytics
export function useAnalytics() {
  const analytics = GoogleAnalytics.getInstance()

  // useMemo avec deps vides : analytics est un singleton, ses références sont stables
  return useMemo(() => ({
    trackPageView: analytics.trackPageView.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackPhoneCall: analytics.trackPhoneCall.bind(analytics),
    trackEmailClick: analytics.trackEmailClick.bind(analytics),
    trackServiceInterest: analytics.trackServiceInterest.bind(analytics),
    trackQuoteRequest: analytics.trackQuoteRequest.bind(analytics),
    trackCaseStudyView: analytics.trackCaseStudyView.bind(analytics),
    trackPartnerClick: analytics.trackPartnerClick.bind(analytics),
    trackScrollDepth: analytics.trackScrollDepth.bind(analytics),
    trackNavClick: analytics.trackNavClick.bind(analytics),
    trackMobileMenu: analytics.trackMobileMenu.bind(analytics),
    trackSocialClick: analytics.trackSocialClick.bind(analytics),
    trackFaqToggle: analytics.trackFaqToggle.bind(analytics),
    trackSliderInteraction: analytics.trackSliderInteraction.bind(analytics),
    trackLightboxOpen: analytics.trackLightboxOpen.bind(analytics),
    trackLightboxNav: analytics.trackLightboxNav.bind(analytics),
    trackLightboxClose: analytics.trackLightboxClose.bind(analytics),
    trackFilterToggle: analytics.trackFilterToggle.bind(analytics),
    trackFilterSearch: analytics.trackFilterSearch.bind(analytics),
    trackFilterClear: analytics.trackFilterClear.bind(analytics),
    trackTestimonialNav: analytics.trackTestimonialNav.bind(analytics),
    trackCookieConsent: analytics.trackCookieConsent.bind(analytics),
    trackCtaClick: analytics.trackCtaClick.bind(analytics),
    trackFormView: analytics.trackFormView.bind(analytics),
    trackFormFieldFocus: analytics.trackFormFieldFocus.bind(analytics),
    trackFormAbandonment: analytics.trackFormAbandonment.bind(analytics),
    trackFormError: analytics.trackFormError.bind(analytics),
    trackGuideClick: analytics.trackGuideClick.bind(analytics),
    disable: analytics.disable.bind(analytics),
    enable: analytics.enable.bind(analytics),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])
}

// Restaurer le consentement au chargement de la page
export function initializeAnalytics(): void {
  GoogleAnalytics.getInstance().restoreConsent()
}

// Fonction pour tracker les conversions importantes
export function trackConversion(conversionType: string, value?: number): void {
  GoogleAnalytics.getInstance().event({
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
