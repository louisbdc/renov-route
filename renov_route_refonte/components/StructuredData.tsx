interface BreadcrumbItem {
  name: string
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface StructuredDataProps {
  type: 'home' | 'service' | 'competences' | 'about' | 'legal'
  serviceName?: string
  serviceDescription?: string
  serviceType?: string
  breadcrumbs?: BreadcrumbItem[]
  faqItems?: FAQItem[]
}

const BASE_URL = 'https://www.renov-route.com'

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  "name": "Rénov Route",
  "description": "Spécialiste du marquage routier, traçage de parkings et signalisation en Rhône-Alpes. Intervention rapide pour professionnels et collectivités.",
  "image": `${BASE_URL}/logo.avif`,
  "url": BASE_URL,
  "telephone": "+33786819692",
  "email": "contact@renov-route.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6, allée du ruisseau de Ribbes",
    "addressLocality": "Tassin-la-Demi-Lune",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "postalCode": "69160",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7544,
    "longitude": 4.7719
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lyon"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Rhône-Alpes"
    },
    {
      "@type": "Country",
      "name": "France"
    }
  ],
  "serviceType": [
    "Marquage routier",
    "Traçage de parking",
    "Signalisation verticale",
    "Réparation de nids de poule",
    "Résine sol et marquage intérieur",
    "Accessoires parking"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de marquage routier et signalisation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traçage & Retraçage de Parking"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Signalisation Verticale"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Résine Sol & Marquage Intérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réparation de Nids de Poule"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accessoires Parking"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conseil & Expertise"
        }
      }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "foundingDate": "2016",
  "founder": {
    "@type": "Person",
    "name": "Xavier de Caumont"
  },
  "taxID": "818 745 515 00010"
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rénov Route",
  "url": `${BASE_URL}/`,
  "description": "Spécialiste du marquage routier et de la signalisation à Lyon et en Rhône-Alpes.",
  "inLanguage": "fr-FR",
  "publisher": {
    "@id": `${BASE_URL}/#organization`
  }
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@id": `${BASE_URL}/#organization`
    },
    "areaServed": [
      { "@type": "City", "name": "Lyon" },
      { "@type": "AdministrativeArea", "name": "Rhône-Alpes" },
      { "@type": "Country", "name": "France" }
    ],
    "serviceType": serviceType
  }
}

export default function StructuredData({
  type,
  serviceName,
  serviceDescription,
  serviceType,
  breadcrumbs,
  faqItems,
}: StructuredDataProps) {
  const schemas: object[] = []

  if (type === 'home') {
    schemas.push(localBusiness)
    schemas.push(webSiteSchema)
  }

  if (type === 'service' && serviceName && serviceDescription && serviceType) {
    schemas.push(buildServiceSchema(serviceName, serviceDescription, serviceType))
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(buildBreadcrumbSchema(breadcrumbs))
  }

  if (faqItems && faqItems.length > 0) {
    schemas.push(buildFAQSchema(faqItems))
  }

  if (schemas.length === 0) {
    return null
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}
