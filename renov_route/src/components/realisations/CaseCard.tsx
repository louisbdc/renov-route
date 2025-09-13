'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CaseStudy } from '@/lib/data/case-studies';

interface CaseCardProps {
  caseStudy: CaseStudy;
  onOpenModal: (caseStudy: CaseStudy) => void;
  index: number;
  isSafari?: boolean;
}

export default function CaseCard({ caseStudy, onOpenModal, index, isSafari = false }: CaseCardProps) {
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
      <article
        className="group cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir le projet ${caseStudy.title}`}
      >
        <div className="glass-panel p-6 h-full transition-all duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02] focus-ring">
          {/* Image Container */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video relative">
              <Image
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay with neon accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Title and Meta */}
            <div>
              <h3 className="text-h3 text-text-primary font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {caseStudy.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-caption text-text-muted">
                <span>{caseStudy.client}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-text-secondary text-body leading-relaxed line-clamp-2">
              {caseStudy.summary}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-caption text-text-secondary"
                >
                  {tech}
                </span>
              ))}
              {caseStudy.stack.length > 3 && (
                <span className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-caption text-text-muted">
                  +{caseStudy.stack.length - 3}
                </span>
              )}
            </div>

            {/* KPIs */}
            {caseStudy.kpis.length > 0 && (
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-glass-border">
                {caseStudy.kpis.slice(0, 3).map((kpi, kpiIndex) => (
                  <div
                    key={kpi.label}
                    className="text-center"
                  >
                    <div className="text-body font-semibold text-primary">
                      {kpi.value}
                    </div>
                    <div className="text-caption text-text-muted">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-primary font-medium group-hover:gap-2 transition-all duration-200">
                <span>Voir le projet</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    ) : (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.2, 0.8, 0.2, 1]
        }}
        className="group cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir le projet ${caseStudy.title}`}
      >
        <div className="glass-panel p-6 h-full transition-all duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02] focus-ring">
          {/* Image Container */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video relative">
              <Image
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay with neon accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-accent to-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ originX: 0 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Title and Meta */}
            <div>
              <h3 className="text-h3 text-text-primary font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {caseStudy.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-caption text-text-muted">
                <span>{caseStudy.client}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-text-secondary text-body leading-relaxed line-clamp-2">
              {caseStudy.summary}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.slice(0, 3).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index * 0.1) + (techIndex * 0.1) + 0.3
                  }}
                  className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-caption text-text-secondary"
                >
                  {tech}
                </motion.span>
              ))}
              {caseStudy.stack.length > 3 && (
                <span className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-caption text-text-muted">
                  +{caseStudy.stack.length - 3}
                </span>
              )}
            </div>

            {/* KPIs */}
            {caseStudy.kpis.length > 0 && (
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-glass-border">
                {caseStudy.kpis.slice(0, 3).map((kpi, kpiIndex) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (index * 0.1) + (kpiIndex * 0.1) + 0.5
                    }}
                    className="text-center"
                  >
                    <div className="text-body font-semibold text-primary">
                      {kpi.value}
                    </div>
                    <div className="text-caption text-text-muted">
                      {kpi.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: (index * 0.1) + 0.7
              }}
            >
              <div className="flex items-center justify-between text-primary font-medium group-hover:gap-2 transition-all duration-200">
                <span>Voir le projet</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    )
  );
}
