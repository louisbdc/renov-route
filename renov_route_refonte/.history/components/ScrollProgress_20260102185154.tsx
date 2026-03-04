'use client'

import { useEffect, useState, useRef } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollableHeight = scrollHeight - clientHeight
      
      // Calcul du pourcentage (0 à 1) avec gestion précise du cas "tout en bas"
      let progress = 0
      if (scrollableHeight > 0) {
        progress = Math.min(scrollTop / scrollableHeight, 1)
      } else {
        progress = 0
      }

      // Forcer à 1 si on est vraiment tout en bas (tolérance de quelques pixels)
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        progress = 1
      }

      setScrollProgress(progress)

      // Déclenchement de l'Easter Egg à 99% du scroll
      if (progress >= 0.99) {
        setShowEasterEgg(true)
      } else {
        setShowEasterEgg(false)
      }
      
      rafId.current = null
    }

    const handleScroll = () => {
      // Utiliser requestAnimationFrame pour des mises à jour fluides
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateScrollProgress)
      }
    }

    // Initialiser la valeur au chargement
    updateScrollProgress()

    // Écouter aussi les événements de resize au cas où la taille change
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateScrollProgress, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateScrollProgress)
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Configuration du cercle SVG
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - scrollProgress * circumference

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
      
      {/* Easter Egg : Badge "Chantier Livré" qui apparaît à la fin */}
      <div 
        className={`
          absolute bottom-16 right-0 whitespace-nowrap px-4 py-2 rounded-lg 
          bg-brand text-white font-display text-sm font-bold shadow-neon
          transition-all duration-500 transform origin-bottom-right
          ${showEasterEgg ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'}
        `}
      >
        🚧 CHANTIER  !
      </div>

      {/* Le Bouton Circulaire */}
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-asphalt/80 backdrop-blur-md border border-gray-700 shadow-2xl hover:shadow-neon transition-all duration-300"
        aria-label="Retour en haut"
      >
        {/* Cercle de fond (Gris) */}
        <svg className="absolute w-full h-full -rotate-90 transform" viewBox="0 0 50 50">
          <circle
            className="text-gray-700"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
          />
          {/* Cercle de progression (Jaune Sécurité) */}
          <circle
            className="text-brand"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>

        {/* Icône Centrale (Change à la fin) */}
        <span 
          className={`
            material-symbols-outlined text-2xl transition-all duration-300
            ${showEasterEgg ? 'text-brand animate-bounce' : 'text-gray-400 group-hover:text-brand'}
          `}
        >
          {showEasterEgg ? 'sports_score' : 'arrow_upward'}
        </span>
      </button>
    </div>
  )
}

