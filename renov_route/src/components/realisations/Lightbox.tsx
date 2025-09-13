'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
  isSafari?: boolean;
}

export default function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  title,
  isSafari = false
}: LightboxProps) {
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyNavigation);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyNavigation);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const handleClickOutside = () => {
    onClose();
  };

  if (!isOpen) return null;

  const lightboxContent = (
    <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 focus-ring"
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group"
            aria-label="Image précédente"
          >
            <svg className="w-6 h-6 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group"
            aria-label="Image suivante"
          >
            <svg className="w-6 h-6 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
        {isSafari ? (
          <div className="relative">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              sizes="90vw"
              priority
            />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                sizes="90vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 border border-white/20 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                // We need to pass the index to parent to update currentIndex
                // For now, we'll use the existing navigation
                if (index < currentIndex) {
                  for (let i = 0; i < currentIndex - index; i++) {
                    onPrev();
                  }
                } else if (index > currentIndex) {
                  for (let i = 0; i < index - currentIndex; i++) {
                    onNext();
                  }
                }
              }}
              className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-200 focus-ring ${
                index === currentIndex
                  ? 'ring-2 ring-primary scale-110'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              aria-label={`Voir l'image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} - Miniature ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isSafari ? (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={handleClickOutside}
        >
          {lightboxContent}
        </div>
      ) : (
        <motion.div
          ref={lightboxRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={handleClickOutside}
        >
          {lightboxContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
}