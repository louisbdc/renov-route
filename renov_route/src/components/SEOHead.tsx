import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/assets/images/og-image.jpg',
  noindex = false 
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://renov-route.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Renov Route" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://renov-route.com${ogImage}`} />
      
      {/* Géolocalisation */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
      <meta name="geo.position" content="46.227638;2.213749" />
      <meta name="ICBM" content="46.227638, 2.213749" />
      
      {/* Dublin Core */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="Traçage marquage routier, Parking, Réparation route" />
      <meta name="DC.language" content="fr" />
      <meta name="DC.coverage" content="France" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={canonical} />
      <meta name="DC.creator" content="Renov Route" />
      <meta name="DC.publisher" content="Renov Route" />
      <meta name="DC.rights" content="© 2024 Renov Route. Tous droits réservés." />
      <meta name="DC.date.created" content="2024-01-01" />
      <meta name="DC.date.modified" content="2024-12-19" />
      
      {/* Autres meta tags */}
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="language" content="fr" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      
      {/* Mobile */}
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Renov Route" />
      <meta name="application-name" content="Renov Route" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="msapplication-TileImage" content="/assets/logos/logo.avif" />
      <meta name="theme-color" content="#1f2937" />
      <meta name="color-scheme" content="dark" />
      <meta name="supported-color-schemes" content="dark" />
      
      {/* Liens */}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href="https://renov-route.com" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/assets/logos/logo.avif" />
      <link rel="icon" type="image/avif" href="/assets/logos/logo.avif" />
      <link rel="shortcut icon" href="/assets/logos/logo.avif" />
      
      {/* Preconnect pour les performances */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Accessibilité */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-navbutton-color" content="#1f2937" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
}
