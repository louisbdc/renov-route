'use client'

import { useEffect, useRef, useState } from 'react'

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const afterImageRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const [percentage, setPercentage] = useState(50)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSlider = (x: number) => {
      const rect = container.getBoundingClientRect()
      let newPercentage = ((x - rect.left) / rect.width) * 100
      newPercentage = Math.max(0, Math.min(100, newPercentage))
      setPercentage(newPercentage)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      updateSlider(e.clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      e.preventDefault()
      updateSlider(e.touches[0].clientX)
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
    }

    const handleTouchEnd = () => {
      isDraggingRef.current = false
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      updateSlider(e.clientX)
    }

    const handleTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true
      updateSlider(e.touches[0].clientX)
    }

    const handleClick = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        updateSlider(e.clientX)
      }
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('click', handleClick)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <section id="realisations" className="py-24 bg-asphalt-light relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
        ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-2 block">
              Transformation Radicale
            </span>
            <h2 className="font-display text-4xl md:text-5xl">
              AVANT / <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white">APRÈS</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="material-symbols-outlined text-brand">touch_app</span>
            Glissez pour voir la différence
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[24px] overflow-hidden border border-gray-700 shadow-2xl select-none group cursor-ew-resize"
        >
          <div className="absolute inset-0">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/IMG_2587.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
              <span className="font-bold text-gray-300">AVANT</span>
            </div>
          </div>

          <div 
            ref={afterImageRef}
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
          >
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/IMG_2579.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute top-6 right-6 bg-brand/90 backdrop-blur px-4 py-2 rounded-lg text-white shadow-neon">
              <span className="font-bold">APRÈS</span>
            </div>
          </div>

          <div 
            ref={handleRef}
            className="slider-handle"
            style={{ left: `${percentage}%` }}
          >
            <div className="slider-button">
              <span className="material-symbols-outlined text-xl">compare_arrows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

