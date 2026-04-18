interface MarqueeEditorialProps {
  items: string[]
  duration?: number
  className?: string
  tone?: 'light' | 'dark'
  /** how many copies to render to guarantee full width */
  repeat?: number
}

/**
 * Infinite horizontal editorial marquee — pure CSS keyframes, pause on hover.
 * Respects prefers-reduced-motion via globals.css.
 */
export default function MarqueeEditorial({
  items,
  duration = 40,
  className = '',
  tone = 'light',
  repeat = 3,
}: MarqueeEditorialProps) {
  const toneStyles =
    tone === 'dark'
      ? 'bg-[#0F172A] text-white border-y-2 border-[#FACC15]'
      : 'bg-white text-[#0F172A] border-y-2 border-[#0F172A]'

  const starColor = tone === 'dark' ? 'text-[#FACC15]' : 'text-[#FACC15]'

  const copies = Array.from({ length: repeat }, () => items).flat()

  return (
    <section
      aria-hidden="true"
      className={`marquee-editorial overflow-hidden py-6 ${toneStyles} ${className}`}
    >
      <div
        className="marquee-editorial__track flex w-max gap-16 whitespace-nowrap items-center"
        style={{ animationDuration: `${duration}s` }}
      >
        {copies.map((item, i) => (
          <span
            key={i}
            className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter flex items-center gap-16"
          >
            {item}
            <span className={starColor}>★</span>
          </span>
        ))}
      </div>
    </section>
  )
}
