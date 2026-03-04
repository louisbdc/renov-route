'use client'

import { useRef, useState, useEffect } from 'react'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null)

  // Mise à jour dynamique du scale de distorsion - reste actif une fois activé
  useEffect(() => {
    if (displacementRef.current) {
      // Une fois activé, on garde le scale à 100 même si la souris quitte
      if (isHovered) {
        displacementRef.current.setAttribute('scale', '100')
      }
      // On ne remet jamais à 0, donc l'effet reste actif
    }
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })

    if (!isHovered) return

    // Calcul de l'intensité de la distorsion basée sur la position de la souris
    const intensityX = (x / rect.width) * 0.04
    const intensityY = (y / rect.height) * 0.04
    
    // Modification de la fréquence de base pour créer un effet de vague dynamique
    const turbulence = document.getElementById('noiseFilter')
    if (turbulence) {
      turbulence.setAttribute('baseFrequency', `${0.01 + intensityX} ${0.02 + intensityY}`)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  
  // On ne réinitialise plus quand la souris quitte - l'effet reste actif
  const handleMouseLeave = () => {
    // On garde l'état actuel, on ne fait rien
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
      ref={sectionRef}
      id="services" 
      className="py-24 relative overflow-hidden bg-asphalt"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Filtre SVG pour l'effet de distorsion */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="distortion-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              id="noiseFilter"
              type="fractalNoise" 
              baseFrequency="0.01 0.02" 
              numOctaves="4" 
              result="noise"
              seed="5"
            />
            <feDisplacementMap 
              ref={displacementRef}
              in="SourceGraphic" 
              in2="noise" 
              scale="0" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Background topographique de base */}
      <div className="absolute inset-0 topo-bg opacity-20"></div>

      {/* Grid pattern visible avec distorsion - reste actif une fois activé */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          filter: 'url(#distortion-filter)',
          transition: 'filter 0.3s ease-out',
          willChange: 'filter',
          maskImage: 'linear-gradient(to bottom, white, transparent)'
        }}
      />

      {/* Effet de "loupe" qui suit la souris - reste visible même après le départ de la souris */}
      <div 
        className="absolute pointer-events-none transition-all duration-200 ease-out"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '500px' : '500px',
          height: isHovered ? '500px' : '500px',
          background: `radial-gradient(circle, rgba(0, 240, 255, ${isHovered ? 0.25 : 0.15}) 0%, rgba(59, 130, 246, ${isHovered ? 0.15 : 0.1}) 30%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: isHovered ? 1 : 0.6,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Orbes statiques pour ambiance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

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

