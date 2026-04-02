'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@/lib/analytics'

// --- useScrollDepthTracking ---
export function useScrollDepthTracking() {
  const pathname = usePathname()
  const milestonesRef = useRef(new Set<number>())

  useEffect(() => {
    milestonesRef.current = new Set<number>()
  }, [pathname])

  useEffect(() => {
    const analytics = GoogleAnalytics.getInstance()
    const milestones = [25, 50, 75, 100]

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (docHeight <= 0) return

      const scrollPercent = (scrollTop / docHeight) * 100

      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !milestonesRef.current.has(milestone)) {
          milestonesRef.current.add(milestone)
          analytics.trackScrollDepth(pathname, milestone)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])
}

// --- useFormTracking ---
export function useFormTracking(formName: string) {
  const analytics = GoogleAnalytics.getInstance()
  const hasViewedRef = useRef(false)
  const lastFieldRef = useRef('')
  const hasSubmittedRef = useRef(false)

  const onFormView = useCallback(() => {
    if (!hasViewedRef.current) {
      hasViewedRef.current = true
      analytics.trackFormView(formName)
    }
  }, [analytics, formName])

  const onFieldFocus = useCallback((fieldName: string) => {
    lastFieldRef.current = fieldName
    analytics.trackFormFieldFocus(formName, fieldName)
  }, [analytics, formName])

  const onFormError = useCallback((errorDetails: string) => {
    analytics.trackFormError(formName, errorDetails)
  }, [analytics, formName])

  const markSubmitted = useCallback(() => {
    hasSubmittedRef.current = true
  }, [])

  useEffect(() => {
    return () => {
      if (!hasSubmittedRef.current && lastFieldRef.current) {
        analytics.trackFormAbandonment(formName, lastFieldRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { onFieldFocus, onFormView, onFormError, markSubmitted }
}

// --- useDebounce ---
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
