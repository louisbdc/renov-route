'use client'

import { useEffect } from 'react'
import { useAnalytics, initializeAnalytics } from '@/lib/analytics'
import { CookieManager } from '@/lib/cookies'

interface AnalyticsTrackerProps {
  pageTitle: string
  pagePath: string
  children: React.ReactNode
}

// Composant pour tracker automatiquement les pages
export default function AnalyticsTracker({ 
  pageTitle, 
  pagePath, 
  children 
}: AnalyticsTrackerProps) {
  const analytics = useAnalytics()

  useEffect(() => {
    // Initialiser l'analytics si pas encore fait
    initializeAnalytics()
    
    // Tracker la page vue
    analytics.trackPageView(pagePath, pageTitle)
  }, [pagePath, pageTitle, analytics])

  return <>{children}</>
}

// Hook pour tracker les interactions utilisateur
export function useConversionTracking() {
  const analytics = useAnalytics()

  const trackFormSubmission = (formType: string, formName?: string) => {
    analytics.trackFormSubmission(formType, formName)
  }

  const trackPhoneCall = (phoneNumber?: string) => {
    analytics.trackPhoneCall(phoneNumber)
  }

  const trackEmailClick = (emailAddress?: string) => {
    analytics.trackEmailClick(emailAddress)
  }

  const trackServiceInterest = (serviceName: string) => {
    analytics.trackServiceInterest(serviceName)
  }

  const trackQuoteRequest = (serviceType?: string) => {
    analytics.trackQuoteRequest(serviceType)
  }

  const trackCaseStudyView = (caseName: string) => {
    analytics.trackCaseStudyView(caseName)
  }

  const trackPartnerClick = (partnerName: string) => {
    analytics.trackPartnerClick(partnerName)
  }

  return {
    trackFormSubmission,
    trackPhoneCall,
    trackEmailClick,
    trackServiceInterest,
    trackQuoteRequest,
    trackCaseStudyView,
    trackPartnerClick
  }
}

// Composant pour tracker les clics sur les liens de contact
export function ContactTracker({ 
  type, 
  value, 
  children, 
  className = '' 
}: {
  type: 'phone' | 'email'
  value?: string
  children: React.ReactNode
  className?: string
}) {
  const { trackPhoneCall, trackEmailClick } = useConversionTracking()

  const handleClick = () => {
    if (type === 'phone') {
      trackPhoneCall(value)
    } else if (type === 'email') {
      trackEmailClick(value)
    }
  }

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  )
}

// Composant pour tracker les intérêts pour les services
export function ServiceInterestTracker({ 
  serviceName, 
  children, 
  className = '' 
}: {
  serviceName: string
  children: React.ReactNode
  className?: string
}) {
  const { trackServiceInterest } = useConversionTracking()

  const handleClick = () => {
    trackServiceInterest(serviceName)
  }

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  )
}

// Composant pour tracker les demandes de devis
export function QuoteTracker({ 
  serviceType, 
  children, 
  className = '' 
}: {
  serviceType?: string
  children: React.ReactNode
  className?: string
}) {
  const { trackQuoteRequest } = useConversionTracking()

  const handleClick = () => {
    trackQuoteRequest(serviceType)
  }

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  )
}

// Composant pour tracker les vues de cas d'études
export function CaseStudyTracker({ 
  caseName, 
  children, 
  className = '' 
}: {
  caseName: string
  children: React.ReactNode
  className?: string
}) {
  const { trackCaseStudyView } = useConversionTracking()

  const handleClick = () => {
    trackCaseStudyView(caseName)
  }

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  )
}

// Composant pour tracker les clics sur les partenaires
export function PartnerTracker({ 
  partnerName, 
  children, 
  className = '' 
}: {
  partnerName: string
  children: React.ReactNode
  className?: string
}) {
  const { trackPartnerClick } = useConversionTracking()

  const handleClick = () => {
    trackPartnerClick(partnerName)
  }

  return (
    <span onClick={handleClick} className={className}>
      {children}
    </span>
  )
}

// Composant pour afficher les statistiques de cookies (pour debug/admin)
export function CookieStats() {
  const stats = CookieManager.getCookieStats()
  const consent = CookieManager.getConsent()
  const preferences = CookieManager.getPreferences()
  const conversion = CookieManager.getConversionTracking()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm text-xs">
      <h4 className="font-semibold mb-2">🍪 Cookie Stats (Dev)</h4>
      <div className="space-y-1">
        <div>Total cookies: {stats.total}</div>
        <div>Essentiels: {stats.essential}</div>
        <div>Non-essentiels: {stats.nonEssential}</div>
        <div>Consentement: {consent ? '✓' : '✗'}</div>
        {consent && (
          <>
            <div>Analytics: {consent.analytics ? '✓' : '✗'}</div>
            <div>Marketing: {consent.marketing ? '✓' : '✗'}</div>
            <div>Préférences: {consent.preferences ? '✓' : '✗'}</div>
          </>
        )}
        {preferences && (
          <div>Région: {preferences.region || 'Non définie'}</div>
        )}
        {conversion && (
          <div>Pages visitées: {conversion.visitedPages.length}</div>
        )}
      </div>
    </div>
  )
}
