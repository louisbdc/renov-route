import Link from 'next/link';

interface SEOLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  rel?: string;
  target?: string;
  ariaLabel?: string;
}

export default function SEOLink({ 
  href, 
  children, 
  className = "",
  title,
  rel,
  target,
  ariaLabel
}: SEOLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  
  const linkProps = {
    className,
    title,
    rel: isExternal ? 'noopener noreferrer' : rel,
    target: isExternal ? '_blank' : target,
    'aria-label': ariaLabel,
  };

  if (isExternal) {
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  );
}
