import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  alt?: boolean
  dark?: boolean
  className?: string
  id?: string
}

export default function Section({
  children,
  alt = false,
  dark = false,
  className = '',
  id,
}: SectionProps) {
  let bg = 'bg-white'
  let text = 'text-[#0F172A]'
  if (dark) {
    bg = 'bg-[#0F172A] section-dark'
    text = 'text-white'
  } else if (alt) {
    bg = 'bg-[#F8FAFC]'
  }

  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 lg:py-32 px-6 ${bg} ${text} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
