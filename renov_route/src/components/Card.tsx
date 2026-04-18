import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card component with opaque background that masks the grid pattern overlay.
 * Uses position: relative and z-index: 2 to sit above the body::after pattern (z-index: 1).
 */
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`relative z-10 bg-white ${className}`}
    >
      {children}
    </div>
  );
}
