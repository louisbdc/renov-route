'use client'

import type { ReactNode } from 'react'
import { useAnalytics } from '@/lib/analytics'

/**
 * Lien de contact (téléphone / email) avec tracking GA4.
 *
 * Remplace les `<a href="tel:...">` bruts : ceux-ci ne déclenchaient aucun
 * événement, d'où l'absence totale de `phone_call` dans GA4 alors que l'appel
 * est le premier canal de conversion du métier.
 *
 * Contrairement à l'ancien `ContactTracker` (un `<span onClick>` sans href),
 * ce composant rend un vrai `<a>` : accessible au clavier, ouvrable en nouvel
 * onglet, et suivi par les moteurs.
 */

const PHONE_NUMBER = '+33786819692'
const PHONE_DISPLAY = '07 86 81 96 92'
const EMAIL_ADDRESS = 'contact@renov-route.com'

interface TrackedContactLinkProps {
  type: 'phone' | 'email'
  /** Emplacement du lien, pour segmenter les conversions dans GA4 (ex. « header », « cta-home »). */
  location: string
  children?: ReactNode
  className?: string
  /** Surcharge la valeur composée. Par défaut : numéro / email de l'entreprise. */
  value?: string
  'aria-label'?: string
}

export function TrackedContactLink({
  type,
  location,
  children,
  className = '',
  value,
  'aria-label': ariaLabel,
}: TrackedContactLinkProps) {
  const analytics = useAnalytics()

  const target = value ?? (type === 'phone' ? PHONE_NUMBER : EMAIL_ADDRESS)
  const href = type === 'phone' ? `tel:${target}` : `mailto:${target}`

  const handleClick = () => {
    if (type === 'phone') {
      analytics.trackPhoneCall(`${location}:${target}`)
    } else {
      analytics.trackEmailClick(`${location}:${target}`)
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel ?? (type === 'phone' ? `Appeler le ${PHONE_DISPLAY}` : `Envoyer un email à ${target}`)}
    >
      {children ?? (type === 'phone' ? PHONE_DISPLAY : target)}
    </a>
  )
}

export { PHONE_NUMBER, PHONE_DISPLAY, EMAIL_ADDRESS }
export default TrackedContactLink
