import type { ReactNode } from 'react'

type BadgeColor = 'amber' | 'orange' | 'blue' | 'emerald' | 'violet' | 'sky' | 'gray' | 'ink' | 'accent'

interface BadgeProps {
  children: ReactNode
  color?: BadgeColor
  className?: string
}

const colorStyles: Record<BadgeColor, string> = {
  amber: 'bg-[#FACC15] text-[#0F172A] border-transparent',
  orange: 'bg-[#FACC15] text-[#0F172A] border-transparent',
  blue: 'bg-[#0F172A] text-white border-transparent',
  emerald: 'bg-white text-[#0F172A] border-[#0F172A]',
  violet: 'bg-[#0F172A] text-[#FACC15] border-transparent',
  sky: 'bg-white text-[#0F172A] border-slate-200',
  gray: 'bg-slate-100 text-[#0F172A] border-slate-200',
  ink: 'bg-[#0F172A] text-white border-transparent',
  accent: 'bg-[#FACC15] text-[#0F172A] border-transparent',
}

export default function Badge({
  children,
  color = 'amber',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm border ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  )
}
