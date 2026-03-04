'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCookieConsent, CookieManager } from '@/lib/cookies'
import { GoogleAnalytics } from '@/lib/analytics'

interface CookieConsentProps {
  className?: string
}

export default function CookieConsent({ className = '' }: CookieConsentProps) {
  const { consent, isLoading, updateConsent, acceptAll, rejectAll, hasConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isLoading && !hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 2500)
      return () => clearTimeout(timer)
    } else if (hasConsent) {
      setIsVisible(false)
    }
  }, [isLoading, hasConsent])

  if (isLoading || !isVisible) {
    return null
  }

  const handleAcceptAll = () => {
    acceptAll()
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    rejectAll()
    GoogleAnalytics.getInstance().disable()
    setIsVisible(false)
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="glassmorphism-card backdrop-blur-md border border-white/20 rounded-[1.5rem] shadow-2xl">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center">
                  Gestion des cookies
                </h3>
                <p className="text-sm sm:text-base text-gray-200 mb-4 leading-relaxed">
                  Nous utilisons des cookies essentiels au fonctionnement du site et des cookies
                  d&apos;analyse (Google Analytics) pour comprendre comment vous utilisez notre site.
                </p>

                {showDetails && (
                  <div className="mt-4 p-4 sm:p-6 glassmorphism-card backdrop-blur-sm border border-white/10 rounded-[1rem]">
                    <h4 className="font-semibold text-white mb-4 text-lg">Types de cookies utilisés :</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="necessary"
                          checked={consent?.necessary || false}
                          disabled
                          className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <div>
                          <label htmlFor="necessary" className="font-medium text-white text-base">
                            Cookies nécessaires
                          </label>
                          <p className="text-sm text-gray-300 mt-1">
                            Essentiels au fonctionnement du site (consentement cookies, session)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="analytics-details"
                          checked={consent?.analytics || false}
                          onChange={(e) => updateConsent({ analytics: e.target.checked })}
                          className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <div>
                          <label htmlFor="analytics-details" className="font-medium text-white text-base cursor-pointer">
                            Cookies d&apos;analyse
                          </label>
                          <p className="text-sm text-gray-300 mt-1">
                            Google Analytics et suivi de navigation pour améliorer nos services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <button
                  onClick={handleCustomize}
                  className="px-4 py-2 text-sm font-semibold text-white border border-white/30 rounded-[0.75rem] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {showDetails ? 'Masquer les détails' : 'Personnaliser'}
                </button>

                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-semibold text-white border border-white/30 rounded-[0.75rem] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Refuser tout
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-[0.75rem] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Accepter tout
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Politique de confidentialité
                </Link>
                <button
                  onClick={() => {
                    if (confirm('Êtes-vous sûr de vouloir supprimer tous les cookies ? Cette action ne peut pas être annulée.')) {
                      CookieManager.clearAllCookies()
                      window.location.reload()
                    }
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Supprimer tous les cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant pour afficher les préférences de cookies dans les paramètres
export function CookiePreferences() {
  const { consent, updateConsent } = useCookieConsent()
  const [isSaved, setIsSaved] = useState(false)

  const handleAnalyticsChange = (checked: boolean) => {
    updateConsent({ analytics: checked })
    if (checked) {
      GoogleAnalytics.getInstance().enable()
    } else {
      GoogleAnalytics.getInstance().disable()
    }
  }

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  if (!consent) {
    return (
      <div className="p-4 sm:p-6 glassmorphism-card backdrop-blur-md border border-yellow-500/30 rounded-[1rem]">
        <p className="text-yellow-300">
          Aucune préférence de cookies définie.
          <Link href="/" className="underline ml-1 text-blue-400 hover:text-blue-300 transition-colors">Retourner à l&apos;accueil</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="glassmorphism-card p-6 sm:p-8 rounded-[1.5rem] backdrop-blur-md border border-white/20">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          Gestion de vos préférences de cookies
        </h3>
        <p className="text-gray-200">
          Gérez vos préférences de cookies pour personnaliser votre expérience sur notre site.
        </p>
      </div>

      <div className="space-y-4">
        <div className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white text-base">Cookies nécessaires</h4>
              <p className="text-sm text-gray-300 mt-1">Toujours actifs — essentiels au fonctionnement</p>
            </div>
            <div className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
              Actif
            </div>
          </div>
        </div>

        <div className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white text-base">Cookies d&apos;analyse</h4>
              <p className="text-sm text-gray-300 mt-1">Google Analytics et suivi de navigation</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => handleAnalyticsChange(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-500"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="glassmorphism-card p-4 sm:p-6 rounded-[1rem] backdrop-blur-sm border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-300">
            Dernière mise à jour : {new Date(consent.timestamp).toLocaleDateString('fr-FR')}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => CookieManager.clearNonEssentialCookies()}
              className="px-4 py-2 text-sm font-semibold text-white border border-white/30 rounded-[0.75rem] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Supprimer les cookies non-essentiels
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-[0.75rem] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSaved ? 'Sauvegardé' : 'Sauvegarder'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
