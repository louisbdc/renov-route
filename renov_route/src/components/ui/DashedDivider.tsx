interface DashedDividerProps {
  className?: string
  color?: 'amber' | 'white'
}

export default function DashedDivider({
  className = '',
  color = 'amber',
}: DashedDividerProps) {
  const strokeColor = color === 'amber' ? '#F59E0B' : 'rgba(255,255,255,0.2)'

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
          strokeDasharray="24 16"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
