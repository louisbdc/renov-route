'use client'

import { motion } from 'framer-motion'
import SplitText from './SplitText'

export default function HomeHeroHeadline() {
  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8">
      <span className="block">
        <SplitText delay={0.15} staggerDelay={0.07}>Le marquage</SplitText>
      </span>
      <span className="block">
        <SplitText delay={0.45} staggerDelay={0.07}>qui</SplitText>{' '}
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block text-[#FACC15]"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          >
            sécurise
          </motion.span>
        </span>
      </span>
      <span className="block">
        <SplitText delay={0.95} staggerDelay={0.07}>votre activité.</SplitText>
      </span>
    </h1>
  )
}
