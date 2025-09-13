import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  icon?: string;
  image?: string;
  price?: {
    amount: number;
    currency: string;
    unit?: string;
    period?: string;
  };
  features?: string[];
  benefits?: string[];
  duration?: string;
  warranty?: string;
  availability?: string;
  category?: string;
  tags?: string[];
  rating?: {
    value: number;
    count: number;
  };
  reviews?: {
    count: number;
    average: number;
  };
  projects?: {
    count: number;
    examples: string[];
  };
  cta?: {
    text: string;
    link: string;
    type: 'primary' | 'secondary' | 'outline';
  };
}

interface SEOServiceCardProps {
  service: Service;
  className?: string;
  showPrice?: boolean;
  showFeatures?: boolean;
  showBenefits?: boolean;
  showRating?: boolean;
  showProjects?: boolean;
  showCta?: boolean;
}

export default function SEOServiceCard({ 
  service, 
  className = "",
  showPrice = true,
  showFeatures = true,
  showBenefits = true,
  showRating = true,
  showProjects = true,
  showCta = true
}: SEOServiceCardProps) {
  const getCtaClass = () => {
    switch (service.cta?.type) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      case 'secondary':
        return 'bg-gray-600 text-white hover:bg-gray-700';
      case 'outline':
        return 'border border-blue-600 text-blue-600 hover:bg-blue-50';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Renov Route",
      "url": "https://renov-route.com"
    },
    "category": service.category || "Traçage Marquage Routier",
    "serviceType": service.name,
    "areaServed": "FR",
    "availableLanguage": "fr",
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price.amount,
      "priceCurrency": service.price.currency,
      "unitCode": service.price.unit || "",
      "validFrom": new Date().toISOString(),
      "availability": "https://schema.org/InStock"
    } : undefined,
    "aggregateRating": service.rating ? {
      "@type": "AggregateRating",
      "ratingValue": service.rating.value,
      "reviewCount": service.rating.count
    } : undefined
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {service.image && (
            <div className="h-48">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {service.icon && (
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  {service.category && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                      {service.category}
                    </span>
                  )}
                </div>
              </div>
              
              {showRating && service.rating && (
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium">{service.rating.value}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    ({service.rating.count} avis)
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-gray-700 mb-4">
              {service.shortDescription || service.description}
            </p>
            
            {showPrice && service.price && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Prix</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {service.price.amount} {service.price.currency}
                    {service.price.unit && ` / ${service.price.unit}`}
                    {service.price.period && ` / ${service.price.period}`}
                  </span>
                </div>
              </div>
            )}
            
            {showFeatures && service.features && service.features.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Caractéristiques</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showBenefits && service.benefits && service.benefits.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Avantages</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              {service.duration && (
                <div>
                  <span className="text-gray-600">Durée:</span>
                  <span className="ml-1 font-medium">{service.duration}</span>
                </div>
              )}
              {service.warranty && (
                <div>
                  <span className="text-gray-600">Garantie:</span>
                  <span className="ml-1 font-medium">{service.warranty}</span>
                </div>
              )}
              {service.availability && (
                <div>
                  <span className="text-gray-600">Disponibilité:</span>
                  <span className="ml-1 font-medium">{service.availability}</span>
                </div>
              )}
            </div>
            
            {showProjects && service.projects && service.projects.count > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">Projets réalisés</span>
                  <span className="text-sm text-gray-600">{service.projects.count}+</span>
                </div>
                {service.projects.examples.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {service.projects.examples.map((example, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {service.tags && service.tags.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {showCta && service.cta && (
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={service.cta.link}
                  className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${getCtaClass()}`}
                >
                  {service.cta.text}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Script
        id="service-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}