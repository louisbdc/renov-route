import type { ReactNode } from 'react'

type CardVariant = 'glass' | 'solid' | 'interactive'
type CardPadding = 'sm' | 'md' | 'lg'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  padding?: CardPadding
  accentBorder?: boolean
  className?: string
}

const variantStyles: Record<CardVariant, string> = {
  glass:
    'border border-white/10 bg-[#141922]',
  solid:
    'border border-white/10 bg-[#1d222d]',
  interactive:
    'border border-white/10 bg-[#141922] hover:border-amber-500/40 hover:bg-[#1d222d] hover:-translate-y-1 transition-all duration-300',
}

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
}

export default function Card({
  children,
  variant = 'glass',
  padding = 'md',
  accentBorder = false,
  className = '',
}: CardProps) {
  const accent = accentBorder ? 'border-l-2 border-l-amber-500' : ''

  return (
    <div
      className={`rounded-xl ${variantStyles[variant]} ${paddingStyles[padding]} ${accent} ${className}`}
    >
      {children}
    </div>
  )
}
