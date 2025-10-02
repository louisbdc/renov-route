'use client';

import { useEffect, useRef } from 'react';

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
  const addedElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Fonction utilitaire pour ajouter un élément de manière sécurisée
    const safeAppendChild = (element: HTMLElement) => {
      try {
        if (document.head && element) {
          document.head.appendChild(element);
          addedElementsRef.current.push(element);
        }
      } catch (error) {
        console.warn('Erreur lors de l\'ajout d\'un élément au DOM:', error);
      }
    };

    // Fonction utilitaire pour supprimer un élément de manière sécurisée
    const safeRemoveElement = (element: Element | null) => {
      try {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      } catch (error) {
        console.warn('Erreur lors de la suppression d\'un élément du DOM:', error);
      }
    };

    // Nettoyer les éléments ajoutés précédemment
    addedElementsRef.current.forEach(element => {
      safeRemoveElement(element);
    });
    addedElementsRef.current = [];

    // Vérifier que le document est disponible
    if (typeof document === 'undefined' || !document.head) {
      return;
    }

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
      safeAppendChild(meta);
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
        safeAppendChild(meta);
      }
    }
    
    // Mettre à jour la balise canonique
    if (canonicalUrl) {
      // Supprimer toutes les balises canoniques existantes de manière sécurisée
      const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
      existingCanonicals.forEach(canonical => safeRemoveElement(canonical));
      
      // Ajouter la nouvelle balise canonique
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      safeAppendChild(link);
    }
    
    // Mettre à jour les balises Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      safeAppendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      safeAppendChild(meta);
    }
    
    if (canonicalUrl) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.content = canonicalUrl;
        safeAppendChild(meta);
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
      safeAppendChild(meta);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      safeAppendChild(meta);
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
      safeAppendChild(meta);
    }
    
  }, [title, description, keywords, canonicalUrl, noindex]);

  // Nettoyage lors du démontage du composant
  useEffect(() => {
    return () => {
      addedElementsRef.current.forEach(element => {
        try {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        } catch (error) {
          console.warn('Erreur lors du nettoyage d\'un élément du DOM:', error);
        }
      });
      addedElementsRef.current = [];
    };
  }, []);

  return null;
}
