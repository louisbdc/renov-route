import Head from 'next/head';
import { seoConfig, getPageSeoConfig } from '@/lib/seo-config';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  pageKey?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords,
  pageKey,
  canonicalUrl,
  noindex = false
}: SEOHeadProps) {
  const { ogImage, twitterImage } = pageKey ? getPageSeoConfig(pageKey) : { 
    ogImage: seoConfig.defaultImage, 
    twitterImage: seoConfig.defaultImage.url 
  };
  
  const canonical = canonicalUrl || seoConfig.baseUrl;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:width" content={ogImage.width.toString()} />
      <meta property="og:image:height" content={ogImage.height.toString()} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
      <meta name="geo.position" content="46.227638;2.213749" />
      <meta name="ICBM" content="46.227638, 2.213749" />
      <meta name="DC.title" content={title} />
    </Head>
  );
}