import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
  decorativeLine?: boolean
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  decorativeLine = false,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : ''

  return (
    <div className={`mb-10 sm:mb-12 ${alignment} ${className}`}>
      {decorativeLine && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <div className="w-12 h-1 bg-amber-500 rounded-full" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-base sm:text-lg ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
