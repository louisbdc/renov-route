import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
  eyebrow?: ReactNode
  decorativeLine?: boolean
  centered?: boolean
  onDark?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  decorativeLine = false,
  centered = false,
  onDark = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : ''
  const titleColor = onDark ? 'text-white' : 'text-[#0F172A]'
  const subtitleColor = onDark ? 'text-slate-400' : 'text-slate-500'
  const eyebrowColor = onDark ? 'text-[#FACC15]' : 'text-[#0F172A]'

  return (
    <div className={`mb-12 sm:mb-16 ${alignment} ${className}`}>
      {eyebrow && (
        <div className={`mb-6 ${centered ? 'flex justify-center' : ''}`}>
          <span className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] ${eyebrowColor}`}>
            {eyebrow}
          </span>
        </div>
      )}
      {decorativeLine && (
        <div className={`mb-6 ${centered ? 'flex justify-center' : ''}`}>
          <div className="w-16 h-1 bg-[#FACC15]" />
        </div>
      )}
      <h2 className={`font-black italic uppercase tracking-tighter leading-[0.95] ${titleColor} text-4xl sm:text-5xl lg:text-6xl mb-6`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleColor} text-base sm:text-lg font-medium leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
