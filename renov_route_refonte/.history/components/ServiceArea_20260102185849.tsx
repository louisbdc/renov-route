'use client'

import { useEffect, useState, useRef } from 'react'

export default function ServiceArea() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const areasContainerRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  const areas = [
    {
      title: 'Métropole de Lyon',
      description: 'Présence quotidienne et réactivité maximale.',
      isPrimary: true
    },
    {
      title: 'Région AURA',
      description: 'Déplacement sur devis pour tous les projets.',
      isPrimary: false
    },
    {
      title: 'Toute la France',
      description: 'Intervention sur devis dans toute la France.',
      isPrimary: false
    }
  ]

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!sectionRef.current || !areasContainerRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculer quand la section entre dans le viewport
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Commencer l'animation quand la section est visible (50% du viewport)
      const triggerPoint = windowHeight * 0.5
      const animationStart = sectionTop - triggerPoint
      const animationEnd = animationStart + sectionHeight * 0.6 // Animation sur 60% de la hauteur de la section

      let progress = 0
      if (sectionTop < triggerPoint) {
        // La section est visible, calculer le progrès
        const scrolled = Math.abs(animationStart)
        const totalScroll = Math.abs(animationEnd - animationStart)
        progress = Math.min(Math.max(scrolled / totalScroll, 0), 1)
      }

      setScrollProgress(progress)
      rafId.current = null
    }

    const handleScroll = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateScrollProgress)
      }
    }

    // Initialiser
    updateScrollProgress()

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

  // Calculer la hauteur de la barre animée
  // On a 3 éléments avec space-y-6 (24px entre eux), chaque élément fait environ 50px minimum
  // Total approximatif: 50px + 24px + 50px + 24px + 50px = 198px
  // On calcule dynamiquement avec scrollProgress
  const totalHeight = areas.length * 74 // Approx 50px item + 24px spacing
  const animatedHeight = totalHeight * scrollProgress

  return (
    <section ref={sectionRef} className="py-24 bg-asphalt relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full"></div>
          <div 
            className="relative z-10 w-full rounded-[24px] border border-gray-700 shadow-2xl glass-panel aspect-[4/3]"
            style={{
              backgroundImage: 'url(/map.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="absolute bottom-8 right-8 z-20 bg-asphalt/90 backdrop-blur-xl p-4 rounded-xl border border-brand/30 shadow-neon flex items-center gap-4 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-bold text-white">Auvergne-Rhône-Alpes</p>
              <p className="text-xs text-gray-400">Intervention rapide sous 48h</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-4xl mb-6">
            ZONE D&apos;INTERVENTION <span className="text-brand">ÉTENDUE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Je suis équipé pour intervenir sur tout type de chantier, du marquage urbain aux grands parkings privés. 
            Basé à Lyon, j'interviens dans toute la France.
          </p>
          
          <div ref={areasContainerRef} className="space-y-6 relative">
            {/* Barre animée bleue qui descend */}
            <div 
              className="absolute left-0 top-0 w-1 bg-brand rounded-full transition-all duration-75 ease-out"
              style={{
                height: `${animatedHeight}px`,
                background: 'linear-gradient(to bottom, #FFD700, #FFD700)'
              }}
            ></div>

            {areas.map((area, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                {/* Barre statique de fond (gris) */}
                <div className="w-1 h-full min-h-[50px] rounded-full bg-gray-700"></div>
                <div>
                  <h3 className="font-bold text-xl text-white">{area.title}</h3>
                  <p className="text-gray-500">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

