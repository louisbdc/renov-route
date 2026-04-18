'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { MotionDiv } from '@/components/MotionWrapper'
import { AnimatePresence } from 'framer-motion'

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number) => void
  title: string
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onGoTo,
  title,
}: LightboxProps) {
  const lightboxRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleKeyDown])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(deltaX) < 50) return
    if (deltaX < 0) onNext()
    else onPrev()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <MotionDiv
        ref={lightboxRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      >
        <div
          className="relative w-full h-full flex flex-col items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-slate-300 rounded-full flex items-center justify-center transition-all duration-200 focus-ring"
            aria-label="Fermer la lightbox"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-slate-300 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group"
                aria-label="Image précédente"
              >
                <svg className="w-6 h-6 text-white group-hover:text-[#FACC15] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-slate-300 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group"
                aria-label="Image suivante"
              >
                <svg className="w-6 h-6 text-white group-hover:text-[#FACC15] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image container */}
          <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={images[currentIndex]}
                  alt={title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  sizes="90vw"
                  priority
                />
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Thumbnails overlay at bottom */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onGoTo(index)}
                  className={`relative flex-shrink-0 w-12 h-9 rounded overflow-hidden transition-all duration-200 focus-ring ${
                    index === currentIndex
                      ? 'ring-2 ring-primary scale-110'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Voir l'image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
              <span className="text-white text-sm ml-2 font-bold">
                {currentIndex + 1}/{images.length}
              </span>
            </div>
          )}
        </div>
      </MotionDiv>
    </AnimatePresence>
  )
}
