import type { ReactNode } from 'react'

type GridCols = 2 | 3 | 4

interface GridProps {
  children: ReactNode
  cols?: GridCols
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

const colStyles: Record<GridCols, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

const gapStyles: Record<string, string> = {
  sm: 'gap-4',
  md: 'gap-5',
  lg: 'gap-6 sm:gap-8',
}

export default function Grid({
  children,
  cols = 3,
  gap = 'md',
  className = '',
}: GridProps) {
  return (
    <div className={`grid ${colStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  )
}
