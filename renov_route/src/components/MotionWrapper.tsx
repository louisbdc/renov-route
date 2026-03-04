'use client'

import React, { type ComponentProps, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useSafari } from './SafariAnimationFix'

const MOTION_KEYS = [
  'initial', 'animate', 'transition', 'whileInView', 'viewport',
  'whileHover', 'whileTap', 'variants', 'exit', 'whileFocus',
] as const

type MotionKey = typeof MOTION_KEYS[number]

function stripMotionProps<T extends object>(props: T): Omit<T, MotionKey> {
  const copy = { ...props }
  MOTION_KEYS.forEach(k => delete (copy as Record<string, unknown>)[k])
  return copy as Omit<T, MotionKey>
}

export function MotionDiv({ children, ...props }: ComponentProps<typeof motion.div>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLDivElement>
    return <div {...htmlProps}>{children as ReactNode}</div>
  }
  return <motion.div {...props}>{children}</motion.div>
}

export function MotionH1({ children, ...props }: ComponentProps<typeof motion.h1>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLHeadingElement>
    return <h1 {...htmlProps}>{children as ReactNode}</h1>
  }
  return <motion.h1 {...props}>{children}</motion.h1>
}

export function MotionP({ children, ...props }: ComponentProps<typeof motion.p>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLParagraphElement>
    return <p {...htmlProps}>{children as ReactNode}</p>
  }
  return <motion.p {...props}>{children}</motion.p>
}

export function MotionSection({ children, ...props }: ComponentProps<typeof motion.section>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLElement>
    return <section {...htmlProps}>{children as ReactNode}</section>
  }
  return <motion.section {...props}>{children}</motion.section>
}

export function MotionArticle({ children, ...props }: ComponentProps<typeof motion.article>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLElement>
    return <article {...htmlProps}>{children as ReactNode}</article>
  }
  return <motion.article {...props}>{children}</motion.article>
}

export function MotionSpan({ children, ...props }: ComponentProps<typeof motion.span>) {
  const isSafari = useSafari()
  if (isSafari) {
    const htmlProps = stripMotionProps(props) as unknown as React.HTMLAttributes<HTMLSpanElement>
    return <span {...htmlProps}>{children as ReactNode}</span>
  }
  return <motion.span {...props}>{children}</motion.span>
}
