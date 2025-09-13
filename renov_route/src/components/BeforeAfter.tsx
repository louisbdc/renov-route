'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
}

export default function BeforeAfter({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Avant", 
  afterLabel = "Après",
  alt = "Comparaison avant/après",
  className = ""
}: BeforeAfterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image de base (avant) */}
      <div className="relative w-full h-80">
        <Image
          src={beforeImage}
          alt={`${alt} - ${beforeLabel}`}
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        
        {/* Image de survol (après) */}
        <Image
          src={afterImage}
          alt={`${alt} - ${afterLabel}`}
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          isHovered 
            ? 'bg-white/20 text-white backdrop-blur-sm' 
            : 'bg-primary-500 text-white'
        }`}>
          {beforeLabel}
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          isHovered 
            ? 'bg-primary-500 text-white' 
            : 'bg-white/20 text-white backdrop-blur-sm'
        }`}>
          {afterLabel}
        </div>
      </div>
      
      {/* Overlay avec instruction */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
        <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center`}>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm font-medium">Survolez pour voir l'après</p>
          </div>
        </div>
      </div>
    </div>
  );
}
