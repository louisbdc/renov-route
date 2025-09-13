'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'aldi-director',
    quote: "Service professionnel et intervention rapide. Le marquage de notre parking est parfait et respecte toutes les normes de sécurité.",
    author: "Directeur Aldi",
    role: "Directeur",
    company: "Aldi France"
  },
  {
    id: 'municipal-mayor',
    quote: "Équipe compétente et matériaux de qualité. Nous recommandons vivement Renov Route pour tous nos projets de marquage.",
    author: "Maire de la Commune",
    role: "Maire",
    company: "Mairie de Lyon"
  },
  {
    id: 'shopping-center-manager',
    quote: "Travail soigné et respect des délais. Très satisfait du résultat et de la réactivité de l'équipe.",
    author: "Gestionnaire Centre Commercial",
    role: "Gestionnaire",
    company: "Centre Commercial Part-Dieu"
  },
  {
    id: 'school-principal',
    quote: "La sécurisation des abords de notre école était une priorité. Renov Route a su répondre parfaitement à nos attentes.",
    author: "Directeur École Primaire",
    role: "Directeur",
    company: "École Victor Hugo"
  },
  {
    id: 'residential-manager',
    quote: "Aménagement parfait de notre parking résidentiel. Les résidents sont ravis de la qualité du travail réalisé.",
    author: "Gestionnaire Résidence",
    role: "Gestionnaire",
    company: "Résidence Les Jardins"
  }
];

interface TestimonialCarouselProps {
  className?: string;
}

export default function TestimonialCarousel({ className = '' }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 text-white font-semibold mb-4">
            Témoignages Clients
          </h2>
          <p className="text-white/90 text-body-lg max-w-2xl mx-auto">
            Ce que disent nos clients de notre travail et de notre engagement qualité
          </p>
        </motion.div>

        <div className="relative">
          {/* Main testimonial */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass-panel p-8 lg:p-12 backdrop-blur-md bg-white/10 border border-white/20"
              >
                <div className="max-w-4xl mx-auto text-center">
                  {/* Quote */}
                  <motion.blockquote
                    className="text-h3 text-white font-medium leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-white font-semibold text-body-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-white/80">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group backdrop-blur-sm"
              aria-label="Témoignage précédent"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center transition-all duration-200 focus-ring group backdrop-blur-sm"
              aria-label="Témoignage suivant"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus-ring ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-caption transition-all duration-200 focus-ring ${
                isAutoPlaying
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Lecture automatique'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
