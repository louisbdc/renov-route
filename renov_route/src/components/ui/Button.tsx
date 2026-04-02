import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold',
  secondary:
    'border border-white/20 hover:border-white/40 text-white font-semibold hover:bg-white/5',
  ghost:
    'text-white hover:bg-white/5 font-semibold',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-sm rounded-lg',
  md: 'py-3 px-7 text-sm sm:text-base rounded-lg',
  lg: 'py-3.5 px-8 sm:px-10 text-sm sm:text-base rounded-xl',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
