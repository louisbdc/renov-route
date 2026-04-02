import type { ReactNode } from 'react'

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
  className?: string
}

export default function StatCard({
  value,
  label,
  icon,
  className = '',
}: StatCardProps) {
  return (
    <div
      className={`text-center p-5 rounded-xl border border-white/10 bg-[#1a1f2a] ${className}`}
    >
      {icon && (
        <div className="flex justify-center mb-2 text-amber-400">
          {icon}
        </div>
      )}
      <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-display mb-1">
        {value}
      </p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}
