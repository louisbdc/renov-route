'use client';

import { useEffect } from 'react';

interface ClientSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function ClientSEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  noindex = false
}: ClientSEOHeadProps) {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = title;
    
    // Mettre à jour la description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Mettre à jour les keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
    
    // Mettre à jour la balise canonique
    if (canonicalUrl) {
      // Supprimer toutes les balises canoniques existantes
      const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
      existingCanonicals.forEach(canonical => canonical.remove());
      
      // Ajouter la nouvelle balise canonique
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
    
    // Mettre à jour les balises Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    if (canonicalUrl) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.content = canonicalUrl;
        document.head.appendChild(meta);
      }
    }
    
    // Mettre à jour les balises Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = title;
      document.head.appendChild(meta);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Mettre à jour robots
    const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robots);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robots;
      document.head.appendChild(meta);
    }
    
  }, [title, description, keywords, canonicalUrl, noindex]);

  return null;
}
