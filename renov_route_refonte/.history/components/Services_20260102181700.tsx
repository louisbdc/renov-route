'use client'

import { useRef, useState, useEffect } from 'react'

export default function Services() {
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mise à jour dynamique du scale de distorsion
  useEffect(() => {
    if (displacementRef.current) {
      displacementRef.current.setAttribute('scale', isHovered ? '50' : '0')
    }
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calcul de l'intensité de la distorsion basée sur la position de la souris
    const intensityX = (x / rect.width) * 0.02
    const intensityY = (y / rect.height) * 0.02
    
    // Modification de la fréquence de base pour créer un effet de vague dynamique
    const turbulence = document.getElementById('noiseFilter')
    if (turbulence) {
      turbulence.setAttribute('baseFrequency', `${0.01 + intensityX} ${0.02 + intensityY}`)
    }
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    // Reset du filtre à sa valeur par défaut
    const turbulence = document.getElementById('noiseFilter')
    if (turbulence) turbulence.setAttribute('baseFrequency', '0.01 0.02')
  }

  const services = [
    {
      id: 1,
      title: 'Marquage de Parking',
      description: 'Création, rénovation et optimisation de vos espaces de stationnement. Traçage haute durabilité.',
      icon: 'local_parking',
      tags: ['Résine époxy', 'Numérotation'],
      image: '/intermarche-neuville-parking_2.avif',
      imageAlt: 'Traçage de parking à Lyon - Marquage au sol professionnel',
      cols: 'lg:col-span-7'
    },
    {
      id: 2,
      title: 'Signalisation',
      description: 'Horizontale & Verticale. Pose de panneaux, balisage et sécurité routière.',
      icon: 'traffic',
      tags: [],
      image: '/signalisation.png',
      imageAlt: 'Signalisation routière horizontale et verticale en Rhône-Alpes',
      cols: 'lg:col-span-5'
    },
    {
      id: 3,
      title: 'Réparation de Nids de Poule',
      description: 'Enrobé à froid instantané. Intervention rapide pour sécuriser vos voiries dégradées.',
      icon: 'construction',
      tags: [],
      image: '/reparation_ndp.png',
      imageAlt: 'Réparation de nids de poule et voiries dégradées à Lyon',
      cols: 'lg:col-span-5'
    },
    {
      id: 4,
      title: 'Mise aux normes PMR',
      description: 'Accessibilité pour personnes à mobilité réduite. Respect strict de la législation en vigueur.',
      icon: 'accessible',
      tags: [],
      image: '/lidl-verpiliere-parking_1.avif',
      imageAlt: 'Mise aux normes PMR - Accessibilité personnes à mobilité réduite Lyon',
      cols: 'lg:col-span-7',
      isPmr: true
    }
  ]

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Filtre SVG pour l'effet de distorsion - doit être dans le DOM */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="distortion-filter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              id="noiseFilter"
              type="fractalNoise" 
              baseFrequency="0.01 0.02" 
              numOctaves="3" 
              result="noise" 
            />
            <feDisplacementMap 
              ref={displacementRef}
              in="SourceGraphic" 
              in2="noise" 
              scale={isHovered ? "80" : "0"} 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Background topographique de base */}
      <div className="absolute inset-0 topo-bg opacity-30"></div>

      {/* Arrière-plan avec distorsion */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          filter: isHovered ? 'url(#distortion-filter)' : 'none',
          transition: 'filter 0.2s ease-out',
          willChange: 'filter'
        }}
      >
        {/* Grid pattern avec taille de grille plus visible */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, white, transparent)'
          }}
        />
        
        {/* Orbes de couleur plus visibles pour rendre la distorsion évidente */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-neon/20 rounded-full blur-2xl mix-blend-screen" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            NOS SOLUTIONS <span className="text-brand">TECHNIQUES</span>
          </h2>
          <p className="text-gray-400">Interventions de précision pour infrastructures modernes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group ${service.cols} glass-panel rounded-[24px] p-8 relative overflow-hidden transition-all duration-500 hover:shadow-neon`}
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/80 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className={`w-12 h-12 ${service.isPmr ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : 'bg-brand/20 border-brand/30 text-brand-neon'} rounded-xl flex items-center justify-center mb-4 backdrop-blur-md border`}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className={`font-display text-2xl mb-2 ${service.isPmr ? 'text-blue-100' : ''}`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                {service.tags.length > 0 && (
                  <ul className="text-xs text-gray-500 flex gap-2">
                    {service.tags.map((tag, index) => (
                      <li key={index} className="px-2 py-1 border border-gray-700 rounded bg-black/30">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

