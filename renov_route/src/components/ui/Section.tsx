import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  alt?: boolean
  className?: string
  id?: string
}

export default function Section({
  children,
  alt = false,
  className = '',
  id,
}: SectionProps) {
  const bg = alt ? 'bg-[#0C0F14]' : 'bg-[#0a0d11]'

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 px-4 ${bg} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
