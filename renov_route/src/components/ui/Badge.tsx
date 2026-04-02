import type { ReactNode } from 'react'

type BadgeColor = 'amber' | 'orange' | 'blue' | 'emerald' | 'violet' | 'sky' | 'gray'

interface BadgeProps {
  children: ReactNode
  color?: BadgeColor
  className?: string
}

const colorStyles: Record<BadgeColor, string> = {
  amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  orange: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  violet: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  sky: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  gray: 'bg-white/10 text-gray-300 border-white/20',
}

export default function Badge({
  children,
  color = 'amber',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  )
}
