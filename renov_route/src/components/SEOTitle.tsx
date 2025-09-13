interface SEOTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export default function SEOTitle({ 
  level, 
  children, 
  className = "",
  id,
  ariaLabel
}: SEOTitleProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const baseClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-2xl md:text-3xl font-semibold",
    4: "text-xl md:text-2xl font-semibold",
    5: "text-lg md:text-xl font-medium",
    6: "text-base md:text-lg font-medium"
  };

  return (
    <Tag 
      className={`${baseClasses[level]} ${className}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </Tag>
  );
}
