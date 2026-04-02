'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterPair {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  label?: string
}

interface ServiceBeforeAfterProps {
  title: string
  subtitle?: string
  pairs: BeforeAfterPair[]
  alt?: boolean
}

function ComparisonSlider({ pair }: { pair: BeforeAfterPair }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault()
      isDragging.current = true
      el.setPointerCapture(e.pointerId)
      updatePosition(e.clientX)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      updatePosition(e.clientX)
    }

    const onPointerUp = () => {
      isDragging.current = false
    }

    // Touch events for reliable mobile support
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      updatePosition(e.touches[0].clientX)
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      e.preventDefault() // Prevent page scroll while dragging
      updatePosition(e.touches[0].clientX)
    }

    const onTouchEnd = () => {
      isDragging.current = false
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setPosition(p => Math.max(2, p - 2))
      if (e.key === 'ArrowRight') setPosition(p => Math.min(98, p + 2))
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('keydown', onKeyDown)

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('keydown', onKeyDown)
    }
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] sm:aspect-video w-full rounded-xl overflow-hidden border border-white/10 select-none touch-none"
      role="slider"
      aria-label="Comparaison avant/après"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* After image (full width, behind) */}
      <div className="absolute inset-0">
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 896px"
          draggable={false}
        />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={pair.before.src}
          alt={pair.before.alt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 896px"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div
        className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-red-500/90 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full pointer-events-none transition-opacity duration-200"
        style={{ opacity: position > 12 ? 1 : 0 }}
      >
        AVANT
      </div>
      <div
        className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 bg-emerald-500/90 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full pointer-events-none transition-opacity duration-200"
        style={{ opacity: position < 88 ? 1 : 0 }}
      >
        APRÈS
      </div>

      {/* Slider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function ServiceBeforeAfter({
  title,
  subtitle,
  pairs,
  alt = false,
}: ServiceBeforeAfterProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePair = pairs[activeIndex]

  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-white/[0.025]' : 'bg-[#141922]'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">{title}</h2>
          {subtitle && <p className="text-gray-400 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
        </div>

        {pairs.length > 1 && (
          <div className="flex gap-2 mb-6">
            {pairs.map((pair, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  i === activeIndex
                    ? 'bg-amber-500 text-gray-900'
                    : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {pair.label || `Exemple ${i + 1}`}
              </button>
            ))}
          </div>
        )}

        <ComparisonSlider pair={activePair} />

        <p className="text-gray-500 text-xs sm:text-sm mt-3 text-center">
          Glissez pour comparer
        </p>
      </div>
    </section>
  )
}
