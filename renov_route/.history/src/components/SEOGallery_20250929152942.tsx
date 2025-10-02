'use client';

import Script from 'next/script';
import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  caption?: string;
  width?: number;
  height?: number;
  thumbnail?: string;
  category?: string;
  tags?: string[];
  date?: string;
  location?: string;
  photographer?: string;
  license?: string;
  featured?: boolean;
}

interface SEOGalleryProps {
  images: GalleryImage[];
  className?: string;
  showThumbnails?: boolean;
  showCaptions?: boolean;
  showMetadata?: boolean;
  showCategories?: boolean;
  showTags?: boolean;
  showLightbox?: boolean;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
}

export default function SEOGallery({ 
  images, 
  className = "",
  showThumbnails = true,
  showCaptions = true,
  showMetadata = true,
  showCategories = true,
  showTags = true,
  showLightbox = true,
  columns = 4,
  aspectRatio = 'square'
}: SEOGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const getGridClass = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 5:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5';
      case 6:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'landscape':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'auto':
        return '';
      default:
        return 'aspect-square';
    }
  };

  const openLightbox = (image: GalleryImage, index: number) => {
    if (!showLightbox) return;
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galerie Renov Route",
    "description": "Galerie d'images de nos projets de traçage marquage routier",
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route"
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": `https://renov-route.com${img.src}`,
      "name": img.title || img.alt,
      "description": img.description || img.caption,
      "width": img.width,
      "height": img.height,
      "thumbnailUrl": img.thumbnail ? `https://renov-route.com${img.thumbnail}` : undefined,
      "dateCreated": img.date,
      "contentLocation": img.location,
      "creator": img.photographer ? {
        "@type": "Person",
        "name": img.photographer
      } : undefined,
      "license": img.license
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notre Galerie
          </h2>
          
          <div className={`grid ${getGridClass()} gap-4`}>
            {images.map((image, index) => (
              <div key={image.id} className="group relative">
                <div className={`relative overflow-hidden rounded-lg ${getAspectRatioClass()}`}>
                  <Image
                    src={showThumbnails && image.thumbnail ? image.thumbnail : image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onClick={() => openLightbox(image, index)}
                  />
                  
                  {image.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        ⭐ En vedette
                      </span>
                    </div>
                  )}
                  
                  {showCategories && image.category && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {showCaptions && (image.title || image.caption) && (
                  <div className="mt-2">
                    {image.title && (
                      <h3 className="text-sm font-semibold text-gray-900">
                        {image.title}
                      </h3>
                    )}
                    {image.caption && (
                      <p className="text-xs text-gray-600 mt-1">
                        {image.caption}
                      </p>
                    )}
                  </div>
                )}
                
                {showMetadata && (
                  <div className="mt-2 space-y-1 text-xs text-gray-500">
                    {image.date && (
                      <div>📅 {new Date(image.date).toLocaleDateString('fr-FR')}</div>
                    )}
                    {image.location && (
                      <div>📍 {image.location}</div>
                    )}
                    {image.photographer && (
                      <div>📸 {image.photographer}</div>
                    )}
                    {image.license && (
                      <div>© {image.license}</div>
                    )}
                  </div>
                )}
                
                {showTags && image.tags && image.tags.length > 0 && (
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {image.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            
            {(selectedImage.title || selectedImage.caption) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                {selectedImage.title && (
                  <h3 className="text-lg font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                )}
                {selectedImage.caption && (
                  <p className="text-sm">
                    {selectedImage.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      
      <Script
        id="gallery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}