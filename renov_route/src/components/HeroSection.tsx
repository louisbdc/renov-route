'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const MEDIA = [
  { type: 'image' as const, src: '/assets/images/background_home_page.avif', alt: 'Marquage au sol professionnel sur parking à Lyon - Rénov Route' },
  { type: 'video' as const, src: '/Ligne_1.mp4', alt: '' },
  { type: 'image' as const, src: '/assets/images/realisations/avenieres-pmr-parcours_3.avif', alt: 'Signalisation PMR et parcours piétons aux Avenières par Rénov Route' },
  { type: 'video' as const, src: '/Ligne_2.mp4', alt: '' },
]

const IMAGE_HOLD_MS = 5000
const VIDEO_LOAD_TIMEOUT_MS = 8000

function getVideoIndex(mediaIndex: number): number {
  return MEDIA.slice(0, mediaIndex).filter(m => m.type === 'video').length
}

export default function HeroSection({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const [imageKey, setImageKey] = useState(0)
  const [videoReady, setVideoReady] = useState<Record<number, boolean>>({})
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const fallbackImageRef = useRef(0)
  const activeRef = useRef(0)
  const loadingRef = useRef<Record<number, boolean>>({})

  useEffect(() => {
    activeRef.current = active
  }, [active])

  const goTo = useCallback((index: number) => {
    setActive(index)
    if (MEDIA[index].type === 'image') setImageKey(k => k + 1)
  }, [])

  const advance = useCallback(() => {
    goTo((activeRef.current + 1) % MEDIA.length)
  }, [goTo])

  const setVideoRef = useCallback((vi: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[vi] = el
  }, [])

  useEffect(() => {
    if (MEDIA[active].type === 'image') {
      fallbackImageRef.current = active
    }
  }, [active])

  useEffect(() => {
    if (MEDIA[active].type !== 'image') return
    const timer = setTimeout(advance, IMAGE_HOLD_MS)
    return () => clearTimeout(timer)
  }, [active, advance])

  useEffect(() => {
    if (MEDIA[active].type !== 'video') return
    const vi = getVideoIndex(active)
    const ready = videoReady[vi]

    if (ready) {
      const video = videoRefs.current[vi]
      if (!video) return
      video.currentTime = 0
      video.play().catch(() => advance())
      return
    }

    const timeout = setTimeout(advance, VIDEO_LOAD_TIMEOUT_MS)
    return () => clearTimeout(timeout)
  }, [active, advance, videoReady])

  useEffect(() => {
    videoRefs.current.forEach((video, vi) => {
      if (!video) return
      if (vi === getVideoIndex(active) && MEDIA[active].type === 'video') return
      if (!video.paused) video.pause()
    })
  }, [active])

  useEffect(() => {
    if (MEDIA[active].type !== 'image') return
    const nextIndex = (active + 1) % MEDIA.length
    if (MEDIA[nextIndex].type !== 'video') return
    const vi = getVideoIndex(nextIndex)
    const video = videoRefs.current[vi]
    if (!video || videoReady[vi] || loadingRef.current[vi]) return
    loadingRef.current[vi] = true
    video.load()
  }, [active, videoReady])

  useEffect(() => {
    videoRefs.current.forEach((video, vi) => {
      if (video && video.readyState >= 3) {
        setVideoReady(prev => prev[vi] ? prev : { ...prev, [vi]: true })
      }
    })
  }, [])

  const handleVideoCanPlay = useCallback((vi: number) => {
    loadingRef.current[vi] = false
    setVideoReady(prev => prev[vi] ? prev : { ...prev, [vi]: true })
  }, [])

  const getSlideOpacity = useCallback((index: number): number => {
    if (active === index) {
      if (MEDIA[index].type === 'image') return 1
      const vi = getVideoIndex(index)
      return videoReady[vi] ? 1 : 0
    }
    if (index === fallbackImageRef.current && MEDIA[active].type === 'video') {
      const vi = getVideoIndex(active)
      return videoReady[vi] ? 0 : 1
    }
    return 0
  }, [active, videoReady])

  let videoCounter = 0

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      <style>{`
        @keyframes hero-ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-2%, -1%); }
        }
      `}</style>

      {/* Media layers — grayscale editorial */}
      {MEDIA.map((item, i) => {
        if (item.type === 'image') {
          return (
            <div
              key={item.src}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: getSlideOpacity(i) }}
            >
              <Image
                key={imageKey}
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                className="object-cover grayscale opacity-30"
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
            style={{ opacity: getSlideOpacity(i) }}
          >
            <video
              ref={setVideoRef(vi)}
              src={item.src}
              muted
              playsInline
              preload="none"
              onCanPlayThrough={() => handleVideoCanPlay(vi)}
              onEnded={advance}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
            />
          </div>
        )
      })}

      {/* Dark gradient overlay — left-weighted for readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent z-[2]" />

      {/* Slide indicators — editorial yellow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {MEDIA.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[3px] transition-all duration-500 ${
              active === i ? 'w-10 bg-[#FACC15]' : 'w-5 bg-white/25 hover:bg-white/50'
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
