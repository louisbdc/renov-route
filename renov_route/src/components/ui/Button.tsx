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
    'bg-[#FACC15] text-[#0F172A] hover:bg-white shadow-[4px_4px_0_rgba(250,204,21,0.3)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  secondary:
    'bg-[#0F172A] text-white hover:bg-[#FACC15] hover:text-[#0F172A]',
  ghost:
    'border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-2.5 px-5 text-[10px] tracking-[0.15em] rounded-sm',
  md: 'py-3.5 px-7 text-[11px] tracking-[0.15em] rounded-sm',
  lg: 'py-5 px-10 text-xs tracking-[0.2em] rounded-sm',
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
  const classes = `inline-flex items-center justify-center gap-2 font-black uppercase transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

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
