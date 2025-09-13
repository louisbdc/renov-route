'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Avant", 
  afterLabel = "Après",
  alt = "Comparaison avant/après",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, [isDragging]);

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <div 
        ref={containerRef}
        className="relative w-full h-80 cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Image de base (après) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${alt} - ${afterLabel}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Image de comparaison (avant) avec masque */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - ${beforeLabel}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Ligne de séparation */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle du slider */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
            <div className="w-1 h-6 bg-gray-400"></div>
            <div className="w-1 h-6 bg-gray-400 ml-1"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
          <div className="px-3 py-1 rounded-full text-sm font-medium bg-primary-500 text-white">
            {beforeLabel}
          </div>
          <div className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
            {afterLabel}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-white text-sm font-medium">Glissez pour comparer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
