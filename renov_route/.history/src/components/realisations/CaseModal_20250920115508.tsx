'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/lib/data/case-studies';
import ImageGallery from './ImageGallery';
import { useSafariOptimization } from '@/components/SafariAnimationFix';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseModal({ caseStudy, isOpen, onClose }: CaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isSafari } = useSafariOptimization();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!caseStudy) return null;

  const modalContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-glass-border">
        <div>
          <h2 className="text-h2 text-text-primary font-semibold">
            {caseStudy.title}
          </h2>
          <p className="text-text-secondary">
            {caseStudy.client} • {caseStudy.industry} • {caseStudy.year}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border rounded-lg flex items-center justify-center transition-colors duration-200 focus-ring"
          aria-label="Fermer la modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content - Scrollable area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Image Gallery */}
        <ImageGallery 
          images={caseStudy.images} 
          title={caseStudy.title}
          isSafari={isSafari}
        />

        {/* Summary */}
        <div>
          <h3 className="text-h3 text-text-primary font-semibold mb-4">
            Résumé du projet
          </h3>
          <p className="text-text-secondary leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* KPIs */}
        {caseStudy.kpis.length > 0 && (
          <div>
            <h3 className="text-h3 text-text-primary font-semibold mb-4">
              Résultats clés
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi, index) => (
                isSafari ? (
                  <div
                    key={kpi.label}
                    className="glass-panel p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {kpi.value}
                    </div>
                    <div className="text-caption text-text-secondary">
                      {kpi.label}
                    </div>
                  </div>
                ) : (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-panel p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {kpi.value}
                    </div>
                    <div className="text-caption text-text-secondary">
                      {kpi.label}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-h3 text-text-primary font-semibold mb-4">
            Technologies utilisées
          </h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.stack.map((tech, index) => (
              isSafari ? (
                <span
                  key={tech}
                  className="px-3 py-1 bg-glass-bg border border-glass-border rounded-lg text-caption text-text-secondary"
                >
                  {tech}
                </span>
              ) : (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 bg-glass-bg border border-glass-border rounded-lg text-caption text-text-secondary"
                >
                  {tech}
                </motion.span>
              )
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <h3 className="text-h3 text-text-primary font-semibold mb-4">
            Détails du projet
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary leading-relaxed">
              {caseStudy.body}
            </p>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className="flex-shrink-0 p-6 border-t border-glass-border bg-glass-bg/50">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-caption text-text-muted">
            Projet réalisé en {caseStudy.year} pour {caseStudy.client}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-white hover:text-gray-300 transition-colors duration-200 focus-ring"
            >
              Fermer
            </button>
            <a
              href="/qui-sommes-nous"
              className="px-6 py-2 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border rounded-lg text-text-primary transition-colors duration-200 focus-ring"
            >
              Qui sommes-nous
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        isSafari ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-base/80 backdrop-blur-sm">
            <div
              ref={modalRef}
              className="glass-panel max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {modalContent}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-base/80 backdrop-blur-sm"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-panel max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {modalContent}
            </motion.div>
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
}