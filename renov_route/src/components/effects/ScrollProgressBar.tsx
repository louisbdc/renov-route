'use client'

import { motion, useScroll } from 'framer-motion'

interface ScrollProgressBarProps {
  color?: string
  height?: number
}

export default function ScrollProgressBar({
  color = '#FACC15',
  height = 3,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: color,
        height,
      }}
      className="fixed top-0 left-0 right-0 origin-left z-[100] pointer-events-none"
    />
  )
}
