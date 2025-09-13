'use client';

import { CaseStudy } from '@/lib/data/case-studies';
import CaseCard from './CaseCard';

interface CaseGridProps {
  caseStudies: CaseStudy[];
  onOpenModal: (caseStudy: CaseStudy) => void;
  className?: string;
  isSafari?: boolean;
}

export default function CaseGrid({ caseStudies, onOpenModal, className = '', isSafari = false }: CaseGridProps) {
  if (caseStudies.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <div className="glass-panel p-12 max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 bg-glass-bg rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-h3 text-text-primary font-semibold mb-2">
            Aucun projet trouvé
          </h3>
          <p className="text-text-secondary">
            Essayez de modifier vos filtres pour voir plus de projets.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid-responsive ${className}`}>
      {caseStudies.map((caseStudy, index) => (
        <CaseCard
          key={caseStudy.id}
          caseStudy={caseStudy}
          onOpenModal={onOpenModal}
          index={index}
          isSafari={isSafari}
        />
      ))}
    </div>
  );
}
