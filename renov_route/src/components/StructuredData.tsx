'use client'

interface StructuredDataProps {
  type: 'homepage' | 'competences' | 'realisations' | 'contact' | 'devis' | 'faq';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Renov Route",
    "description": "Expert traçage marquage routier et parking en France. Réparation nids de poule, retraçage parking, marquage routier, enrobé résine.",
    "url": "https://renov-route.com",
    "logo": "https://renov-route.com/assets/logos/logo.avif",
    "image": "https://renov-route.com/assets/images/og-image.jpg",
    "telephone": "07 86 81 96 92",
    "email": "contact@renov-route.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6, allée du ruisseau de Ribbes",
      "addressLocality": "Tassin la demi-lune",
      "postalCode": "69160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.7640",
      "longitude": "4.8357"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Auvergne-Rhône-Alpes"
      },
      {
        "@type": "City",
        "name": "Lyon"
      }
    ],
    "serviceType": [
      "Traçage marquage routier",
      "Marquage parking",
      "Retraçage parking",
      "Réparation nids de poule",
      "Enrobé résine",
      "Marquage routier",
      "Signalisation horizontale",
      "Rénovation parking"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "foundingDate": "2014",
    "numberOfEmployees": "5-10",
    "sameAs": [
      "https://www.facebook.com/renovroute",
      "https://www.linkedin.com/company/renov-route",
      "https://www.instagram.com/renov_route"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Bertrand de LONGEVIALLE"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2018-01-01",
        "reviewBody": "Compétence et réactivité ! je recommande !"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Estelle Pons"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2018-01-01",
        "reviewBody": "Une solution simple, rapide et peu onéreuse pour reboucher des trous en formation sur les routes et parking. Un bon plan pour les copropriétés"
      }
    ]
  };

  const getSpecificData = () => {
    switch (type) {
      case 'homepage':
        return {
          ...baseData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de marquage routier",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Traçage de parking",
                  "description": "Marquage professionnel et durable pour optimiser l'utilisation de vos espaces de stationnement"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Réparation de nids de poule",
                  "description": "Procédé innovant et résistant pour réparer efficacement les nids de poule avec de la résine"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marquage routier",
                  "description": "Signalisation horizontale pour améliorer la sécurité et la circulation"
                }
              }
            ]
          }
        };
      
      case 'competences':
        return {
          ...baseData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Compétences en marquage routier",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Réparation de nids de poule",
                  "description": "Procédé innovant et résistant pour réparer efficacement les nids de poule avec de la résine"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Traçage et retraçage de parking",
                  "description": "Un parking bien entretenu attire les clients et améliore l'expérience utilisateur"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marquage routier",
                  "description": "Signalisation horizontale pour améliorer la sécurité et la circulation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Rénovation d'enrobé résine",
                  "description": "Rénovation complète de vos surfaces avec de la résine"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Entretien préventif",
                  "description": "Maintenance régulière pour prolonger la durée de vie de vos infrastructures"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conseil et expertise",
                  "description": "Notre équipe vous accompagne dans vos projets d'amélioration"
                }
              }
            ]
          }
        };
      
      case 'realisations':
        return {
          ...baseData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Portfolio de réalisations",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Projets de traçage parking",
                  "description": "Réalisations de marquage et retraçage de parkings pour diverses entreprises"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marquage routier",
                  "description": "Projets de signalisation horizontale et marquage routier"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Réparation nids de poule",
                  "description": "Interventions de réparation de nids de poule avec enrobé résine"
                }
              }
            ]
          }
        };
      
      case 'contact':
        return {
          ...baseData,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "07 86 81 96 92",
            "contactType": "customer service",
            "availableLanguage": "French",
            "areaServed": "FR"
          }
        };
      
      case 'devis':
        return {
          ...baseData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Devis gratuit",
            "itemListElement": [
              {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "description": "Devis gratuit et sans engagement pour tous projets de marquage routier"
              }
            ]
          }
        };
      
      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSpecificData())
      }}
    />
  );
}
