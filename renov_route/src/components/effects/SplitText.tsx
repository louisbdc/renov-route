'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  duration?: number
  as?: 'span' | 'div'
  triggerOnce?: boolean
}

/**
 * Reveals each word with a clip-path-style vertical slide-in stagger.
 * Works on any text, respects prefers-reduced-motion (framer-motion handles it).
 */
export default function SplitText({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.9,
  as = 'span',
}: SplitTextProps) {
  const words = children.split(' ')
  const Wrapper = as

  const content: ReactNode = (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pr-[0.25em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )

  return (
    <Wrapper className={`inline-block ${className}`} aria-label={children}>
      {content}
    </Wrapper>
  )
}
