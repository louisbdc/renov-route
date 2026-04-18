import type { ReactNode } from 'react'

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
  onDark?: boolean
  className?: string
}

export default function StatCard({
  value,
  label,
  icon,
  onDark = false,
  className = '',
}: StatCardProps) {
  const borderColor = onDark ? 'border-white/10' : 'border-slate-100'
  const valueColor = onDark ? 'text-white' : 'text-[#0F172A]'
  const labelColor = onDark ? 'text-slate-400' : 'text-slate-400'
  const iconColor = 'text-[#FACC15]'

  return (
    <div className={`border-l-2 ${borderColor} pl-6 ${className}`}>
      {icon && (
        <div className={`mb-3 ${iconColor}`}>
          {icon}
        </div>
      )}
      <p className={`text-3xl sm:text-4xl font-black tracking-tighter leading-none ${valueColor}`}>
        {value}
      </p>
      <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${labelColor} mt-2`}>
        {label}
      </p>
    </div>
  )
}
