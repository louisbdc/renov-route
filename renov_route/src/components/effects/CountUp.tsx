'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  /** If true, formats with fr-FR locale (space as thousand separator). */
  locale?: boolean
  className?: string
}

/**
 * Animated integer counter — triggers once when element enters viewport.
 * Uses requestAnimationFrame + easeOutCubic. Respects prefers-reduced-motion.
 */
export default function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1600,
  locale = true,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(to)
      return
    }

    let startTime: number | null = null
    let rafId = 0

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to * eased))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, to, duration])

  const formatted = locale ? value.toLocaleString('fr-FR') : String(value)

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
