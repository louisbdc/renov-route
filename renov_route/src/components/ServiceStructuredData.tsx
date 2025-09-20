import Script from 'next/script';

interface ServiceStructuredDataProps {
  serviceType: 'reparation-nids-de-poule' | 'tracage-retracage-parking' | 'signalisation-verticale' | 'resine-sol-marquage-interieur' | 'accessoires-parking' | 'conseil-expertise';
}

export default function ServiceStructuredData({ serviceType }: ServiceStructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Renov Route",
      "url": "https://renov-route.com",
      "logo": "https://renov-route.com/assets/logos/logo.avif",
      "telephone": "07 86 81 96 92",
      "email": "contact@renov-route.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6, allée du ruisseau de Ribbes",
        "addressLocality": "Tassin la demi-lune",
        "postalCode": "69160",
        "addressCountry": "FR"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "France"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Auvergne-Rhône-Alpes"
        }
      ]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Auvergne-Rhône-Alpes"
      }
    ],
    "serviceType": "Construction Service",
    "category": "Road Construction and Maintenance"
  };

  const getServiceData = () => {
    switch (serviceType) {
      case 'reparation-nids-de-poule':
        return {
          ...baseData,
          "name": "Réparation de nids de poule",
          "description": "Réparation professionnelle de nids de poule avec de la résine haute performance. Procédé innovant, durable et résistant aux intempéries. Intervention rapide sur routes, parkings et voies privées.",
          "url": "https://renov-route.com/competences/reparation-nids-de-poule",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Devis gratuit pour réparation de nids de poule",
            "availability": "https://schema.org/InStock"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de réparation nids de poule",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Diagnostic de nids de poule",
                  "description": "Analyse approfondie des dommages et évaluation des besoins"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Réparation avec résine haute performance",
                  "description": "Application de résine spécialisée selon nos techniques éprouvées"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Contrôle qualité et finition",
                  "description": "Vérification et finition professionnelle pour un résultat parfait"
                }
              }
            ]
          }
        };

      case 'tracage-retracage-parking':
        return {
          ...baseData,
          "name": "Traçage et retraçage de parking",
          "description": "Marquage professionnel et durable pour optimiser l'utilisation de vos espaces de stationnement. Respect des normes en vigueur avec finition soignée et durable.",
          "url": "https://renov-route.com/competences/tracage-retracage-parking",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Devis gratuit pour traçage de parking",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'signalisation-verticale':
        return {
          ...baseData,
          "name": "Signalisation verticale",
          "description": "Installation de tous les panneaux verticaux de parking : stop, panneau PMR, cédez le passage, etc. Installation professionnelle avec conformité aux normes.",
          "url": "https://renov-route.com/competences/signalisation-verticale",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Devis gratuit pour signalisation verticale",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'resine-sol-marquage-interieur':
        return {
          ...baseData,
          "name": "Résine de sol et marquage d'intérieur",
          "description": "Solutions complètes de résine pour sols et marquage intérieur professionnel. Résine de sol durable avec finition professionnelle.",
          "url": "https://renov-route.com/competences/resine-sol-marquage-interieur",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Devis gratuit pour résine de sol",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'accessoires-parking':
        return {
          ...baseData,
          "name": "Accessoires de parking",
          "description": "Équipements de sécurité et d'organisation pour optimiser la circulation et protéger les infrastructures de votre parking : bornes anti-bélier, ralentisseurs, butées de parking.",
          "url": "https://renov-route.com/competences/accessoires-parking",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Devis gratuit pour accessoires de parking",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'conseil-expertise':
        return {
          ...baseData,
          "name": "Conseil et expertise",
          "description": "Notre équipe vous accompagne dans vos projets d'amélioration avec études de faisabilité, devis personnalisés et suivi de projet.",
          "url": "https://renov-route.com/competences/conseil-expertise",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Conseil gratuit pour vos projets de marquage",
            "availability": "https://schema.org/InStock"
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <Script
      id={`service-structured-data-${serviceType}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getServiceData())
      }}
    />
  );
}
