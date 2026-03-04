'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const MEDIA = [
  { type: 'image' as const, src: '/assets/images/background_home_page.avif' },
  { type: 'video' as const, src: '/Ligne_1.mp4' },
  { type: 'image' as const, src: '/assets/images/realisations/avenieres-pmr-parcours_3.avif' },
  { type: 'video' as const, src: '/Ligne_2.mp4' },
]

const IMAGE_HOLD_MS = 5000

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const [imageKey, setImageKey] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const goTo = useCallback((index: number) => {
    setActive(index)
    if (MEDIA[index].type === 'image') setImageKey(k => k + 1)
  }, [])

  const advance = useCallback(() => {
    goTo((active + 1) % MEDIA.length)
  }, [active, goTo])

  // Auto-advance for image
  useEffect(() => {
    if (MEDIA[active].type !== 'image') return
    const timer = setTimeout(advance, IMAGE_HOLD_MS)
    return () => clearTimeout(timer)
  }, [active, advance])

  // Play video when it becomes active
  useEffect(() => {
    const item = MEDIA[active]
    if (item.type !== 'video') return
    const videoIndex = MEDIA.slice(0, active).filter(m => m.type === 'video').length
    const video = videoRefs.current[videoIndex]
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => advance())
  }, [active, advance])

  let videoCounter = 0

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0d12]">
      <style>{`
        @keyframes hero-ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, -1%); }
        }
      `}</style>

      {/* Media layers — smooth crossfade */}
      {MEDIA.map((item, i) => {
        const isActive = active === i

        if (item.type === 'image') {
          return (
            <div
              key={item.src}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: isActive ? 1 : 0 }}
            >
              <Image
                key={imageKey}
                src={item.src}
                alt="Marquage au sol professionnel sur parking - Renov Route"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                style={{ animation: 'hero-ken-burns 5s ease-out forwards' }}
              />
            </div>
          )
        }

        const vi = videoCounter++
        return (
          <div
            key={item.src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <video
              ref={el => { videoRefs.current[vi] = el }}
              src={item.src}
              muted
              playsInline
              onEnded={advance}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )
      })}

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ boxShadow: 'inset 0 0 200px 80px rgba(0,0,0,0.55)' }}
      />

      {/* Bottom gradient — seamless blend into page */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#141922] via-[#141922]/60 to-transparent z-[2]" />

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {MEDIA.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              active === i ? 'w-10 bg-white' : 'w-5 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  )
}
