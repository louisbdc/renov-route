'use client';

import { useEffect, useState } from 'react';

/**
 * Hook pour détecter Safari et appliquer des optimisations spécifiques
 */
export function useSafariOptimization() {
  const [isSafari, setIsSafari] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Détection de Safari
    const userAgent = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsSafari(isSafariBrowser);

    // Gestion des animations sur Safari
    if (isSafariBrowser) {
      const handleAnimationStart = () => {
        setIsAnimating(true);
        // Désactiver backdrop-filter pendant les animations
        document.body.classList.add('safari-animating');
      };

      const handleAnimationEnd = () => {
        setIsAnimating(false);
        // Réactiver backdrop-filter après les animations
        document.body.classList.remove('safari-animating');
      };

      // Écouter les événements d'animation
      document.addEventListener('animationstart', handleAnimationStart);
      document.addEventListener('animationend', handleAnimationEnd);
      document.addEventListener('transitionstart', handleAnimationStart);
      document.addEventListener('transitionend', handleAnimationEnd);

      return () => {
        document.removeEventListener('animationstart', handleAnimationStart);
        document.removeEventListener('animationend', handleAnimationEnd);
        document.removeEventListener('transitionstart', handleAnimationStart);
        document.removeEventListener('transitionend', handleAnimationEnd);
      };
    }
  }, []);

  return { isSafari, isAnimating };
}

/**
 * Composant pour appliquer des classes CSS conditionnelles basées sur Safari
 */
interface SafariAnimationFixProps {
  children: React.ReactNode;
  className?: string;
}

export default function SafariAnimationFix({ children, className = '' }: SafariAnimationFixProps) {
  const { isSafari, isAnimating } = useSafariOptimization();

  const safariClasses = isSafari ? 'safari-optimized' : '';
  const animatingClasses = isAnimating ? 'animating' : '';

  return (
    <div className={`${safariClasses} ${animatingClasses} ${className}`}>
      {children}
    </div>
  );
}
