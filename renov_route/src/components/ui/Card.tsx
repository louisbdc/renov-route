import type { ReactNode } from 'react'

type CardVariant = 'glass' | 'solid' | 'interactive' | 'editorial' | 'dark'
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
    'border border-slate-200 bg-white text-[#0F172A]',
  solid:
    'border border-slate-200 bg-white text-[#0F172A]',
  interactive:
    'border border-slate-200 bg-white text-[#0F172A] card-editorial-hover duration-300',
  editorial:
    'border-l-4 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A]',
  dark:
    'border border-[#1E293B] bg-[#0F172A] text-white',
}

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  variant = 'solid',
  padding = 'md',
  accentBorder = false,
  className = '',
}: CardProps) {
  const accent = accentBorder ? 'border-l-4 border-l-[#FACC15]' : ''

  return (
    <div
      className={`rounded-sm ${variantStyles[variant]} ${paddingStyles[padding]} ${accent} ${className}`}
    >
      {children}
    </div>
  )
}
