'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { CaseStudy } from '@/lib/data/case-studies';
import { useRef, useState, useEffect } from 'react';

interface FeaturedCaseProps {
  caseStudy: CaseStudy;
  onOpenModal: (caseStudy: CaseStudy) => void;
  className?: string;
  isSafari?: boolean;
}

export default function FeaturedCase({ caseStudy, onOpenModal, className = '', isSafari = false }: FeaturedCaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  // Track if the section has been viewed
  useEffect(() => {
    if (isInView && !hasBeenViewed) {
      setHasBeenViewed(true);
    }
  }, [isInView, hasBeenViewed]);
  const handleClick = () => {
    onOpenModal(caseStudy);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    isSafari ? (
      <section
        ref={ref}
        className={`glass-panel p-8 lg:p-12 cursor-pointer group backdrop-blur-md bg-white/10 border border-white/20 ${className}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir le projet vedette ${caseStudy.title}`}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-bg-base text-primary text-caption font-semibold rounded-full mb-4">
                Projet Vedette
              </span>
              
              <h2 className="text-display text-h1 font-bold mb-4 text-white">
                {caseStudy.title}
              </h2>
              
              <p className="text-body-lg leading-relaxed mb-6 text-white/90">
                {caseStudy.summary}
              </p>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi, _index) => (
                <div
                  key={kpi.label}
                  className="text-center p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-caption font-medium text-white/80">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                <span className="text-body-lg font-semibold text-white">
                  Lire l&apos;histoire complète
                </span>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={caseStudy.heroMedia}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay with neon accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl">
                {caseStudy.year}
              </div>
              
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl">
                {caseStudy.industry}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-accent rounded-full opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-40" />
          </div>
        </div>
      </section>
    ) : (
      <motion.section
        ref={ref}
        initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={hasBeenViewed ? {} : { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className={`glass-panel p-8 lg:p-12 cursor-pointer group backdrop-blur-md bg-white/10 border border-white/20 ${className}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir le projet vedette ${caseStudy.title}`}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <motion.span
                initial={hasBeenViewed ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                whileInView={hasBeenViewed ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={hasBeenViewed ? {} : { duration: 0.6, delay: 0.2 }}
                className="inline-block px-3 py-1 bg-bg-base text-primary text-caption font-semibold rounded-full mb-4"
              >
                Projet Vedette
              </motion.span>
              
              <motion.h2
                className="text-display text-h1 font-bold mb-4 text-white"
                initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={hasBeenViewed ? {} : { duration: 0.6, delay: 0.3 }}
              >
                {caseStudy.title}
              </motion.h2>
              
              <motion.p
                className="text-body-lg leading-relaxed mb-6 text-white/90"
                initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={hasBeenViewed ? {} : { duration: 0.6, delay: 0.4 }}
              >
                {caseStudy.summary}
              </motion.p>
            </div>

            {/* KPIs Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={hasBeenViewed ? {} : { duration: 0.6, delay: 0.5 }}
            >
              {caseStudy.kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={hasBeenViewed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  whileInView={hasBeenViewed ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={hasBeenViewed ? {} : { 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1)
                  }}
                  className="text-center p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-caption font-medium text-white/80">
                    {kpi.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={hasBeenViewed ? {} : { duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                <span className="text-body-lg font-semibold text-white">
                  Lire l&apos;histoire complète
                </span>
                <motion.svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={hasBeenViewed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={hasBeenViewed ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={hasBeenViewed ? {} : { duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={caseStudy.heroMedia}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay with neon accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl"
                initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={hasBeenViewed ? {} : { duration: 0.4, delay: 0.8 }}
              >
                {caseStudy.year}
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-caption font-semibold rounded-xl shadow-2xl"
                initial={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={hasBeenViewed ? {} : { duration: 0.4, delay: 0.9 }}
              >
                {caseStudy.industry}
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-neon-accent rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-40"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </motion.section>
    )
  );
}
