interface DashedDividerProps {
  className?: string
  color?: 'amber' | 'white' | 'ink'
}

export default function DashedDivider({
  className = '',
  color = 'amber',
}: DashedDividerProps) {
  const strokeColor =
    color === 'amber' ? '#FACC15' :
    color === 'white' ? 'rgba(255,255,255,0.3)' :
    '#0F172A'

  return (
    <div className={`w-full py-2 ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="4"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <line
          x1="0"
          y1="2"
          x2="100%"
          y2="2"
          stroke={strokeColor}
          strokeWidth="3"
          strokeDasharray="20 12"
          strokeLinecap="square"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}
