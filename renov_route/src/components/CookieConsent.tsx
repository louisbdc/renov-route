'use client'

import React, { useState, useEffect } from 'react'
import { useCookieConsent, CookieManager } from '@/lib/cookies'

interface CookieConsentProps {
  className?: string
}

export default function CookieConsent({ className = '' }: CookieConsentProps) {
  const { consent, isLoading, updateConsent, acceptAll, rejectAll, hasConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isLoading && !hasConsent) {
      setIsVisible(true)
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
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    setIsVisible(false)
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-600 shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Contenu principal */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🍪 Gestion des cookies
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
              analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
              cookies accepter.
            </p>
            
            {/* Détails des cookies */}
            {showDetails && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Types de cookies utilisés :</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="necessary"
                      checked={consent?.necessary || false}
                      disabled
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="necessary" className="font-medium text-gray-900">
                        Cookies nécessaires
                      </label>
                      <p className="text-sm text-gray-600">
                        Essentiels au fonctionnement du site (sécurité, préférences de base)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={consent?.analytics || false}
                      onChange={(e) => updateConsent({ analytics: e.target.checked })}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="analytics" className="font-medium text-gray-900">
                        Cookies d'analyse
                      </label>
                      <p className="text-sm text-gray-600">
                        Nous aident à comprendre comment vous utilisez notre site (Google Analytics)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={consent?.marketing || false}
                      onChange={(e) => updateConsent({ marketing: e.target.checked })}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="marketing" className="font-medium text-gray-900">
                        Cookies marketing
                      </label>
                      <p className="text-sm text-gray-600">
                        Pour personnaliser les publicités et mesurer leur efficacité
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="preferences"
                      checked={consent?.preferences || false}
                      onChange={(e) => updateConsent({ preferences: e.target.checked })}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="preferences" className="font-medium text-gray-900">
                        Cookies de préférences
                      </label>
                      <p className="text-sm text-gray-600">
                        Mémorisent vos choix (région, méthode de contact préférée)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              {showDetails ? 'Masquer les détails' : 'Personnaliser'}
            </button>
            
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Refuser tout
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Accepter tout
            </button>
          </div>
        </div>

        {/* Liens utiles */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <a 
              href="/privacy-policy" 
              className="hover:text-blue-600 transition-colors"
            >
              Politique de confidentialité
            </a>
            <a 
              href="/legal" 
              className="hover:text-blue-600 transition-colors"
            >
              Mentions légales
            </a>
            <button
              onClick={() => CookieManager.clearAllCookies()}
              className="hover:text-blue-600 transition-colors"
            >
              Supprimer tous les cookies
            </button>
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

  const handleSave = () => {
    // Les préférences sont déjà mises à jour via les checkboxes
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  if (!consent) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-yellow-800">
          Aucune préférence de cookies définie. 
          <a href="/" className="underline ml-1">Retourner à l'accueil</a>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Gestion de vos préférences de cookies
        </h3>
        <p className="text-gray-600">
          Gérez vos préférences de cookies pour personnaliser votre expérience sur notre site.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cookies nécessaires</h4>
            <p className="text-sm text-gray-600">Toujours actifs - essentiels au fonctionnement</p>
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
            Actif
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cookies d'analyse</h4>
            <p className="text-sm text-gray-600">Google Analytics et statistiques d'usage</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={(e) => updateConsent({ analytics: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cookies marketing</h4>
            <p className="text-sm text-gray-600">Publicités personnalisées et retargeting</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={(e) => updateConsent({ marketing: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cookies de préférences</h4>
            <p className="text-sm text-gray-600">Mémorisation de vos choix et paramètres</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={consent.preferences}
              onChange={(e) => updateConsent({ preferences: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Dernière mise à jour : {new Date(consent.timestamp).toLocaleDateString('fr-FR')}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => CookieManager.clearNonEssentialCookies()}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Supprimer les cookies non-essentiels
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            {isSaved ? '✓ Sauvegardé' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </div>
  )
}
