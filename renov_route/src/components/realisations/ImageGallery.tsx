'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

interface ImageGalleryProps {
  images: string[];
  title: string;
  isSafari?: boolean;
}

export default function ImageGallery({ images, title, isSafari = false }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showZoomIcon, setShowZoomIcon] = useState(true);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImageLightbox = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImageLightbox = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <>
        <div className="relative aspect-video rounded-lg overflow-hidden mx-2 my-4 group">
          <button
            onClick={openLightbox}
            className="absolute inset-0 w-full h-full focus-ring z-0"
            aria-label="Voir l'image en taille réelle"
          >
            <Image
              src={images[0]}
              alt={title}
              fill
              className="object-cover group-hover:brightness-110 transition-all duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
              {showZoomIcon && (
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              )}
            </div>
          </button>
        </div>
        <Lightbox
          images={images}
          currentIndex={0}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          onNext={nextImageLightbox}
          onPrev={prevImageLightbox}
          title={title}
          isSafari={isSafari}
        />
      </>
    );
  }

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative aspect-video rounded-lg overflow-hidden mx-2 my-4 group">
        <button
          onClick={openLightbox}
          className="absolute inset-0 w-full h-full focus-ring z-0"
          aria-label="Voir l'image en taille réelle"
        >
          {isSafari ? (
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-cover group-hover:brightness-110 transition-all duration-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
              />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                />
              </motion.div>
            </AnimatePresence>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
            {showZoomIcon && (
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            )}
          </div>
        </button>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          onMouseEnter={() => setShowZoomIcon(false)}
          onMouseLeave={() => setShowZoomIcon(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border rounded-full flex items-center justify-center transition-all duration-200 focus-ring group z-10"
          aria-label="Image précédente"
        >
          <svg className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextImage}
          onMouseEnter={() => setShowZoomIcon(false)}
          onMouseLeave={() => setShowZoomIcon(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border rounded-full flex items-center justify-center transition-all duration-200 focus-ring group z-10"
          aria-label="Image suivante"
        >
          <svg className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateur d'image */}
        <div 
          onMouseEnter={() => setShowZoomIcon(false)}
          onMouseLeave={() => setShowZoomIcon(true)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-glass-bg border border-glass-border rounded-full text-caption text-text-primary z-10"
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-2 px-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToImage(index);
              }}
              className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-200 focus-ring ${
                index === currentIndex
                  ? 'ring-2 ring-primary'
                  : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Voir l'image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} - Miniature ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextImageLightbox}
        onPrev={prevImageLightbox}
        title={title}
        isSafari={isSafari}
      />
    </div>
  );
}
