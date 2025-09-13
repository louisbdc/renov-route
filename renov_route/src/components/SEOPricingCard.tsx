import Script from 'next/script';
import Link from 'next/link';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    period?: string;
    unit?: string;
  };
  originalPrice?: number;
  discount?: {
    percentage: number;
    amount: number;
  };
  features: Array<{
    name: string;
    included: boolean;
    description?: string;
    limit?: string;
  }>;
  benefits?: string[];
  limitations?: string[];
  popular?: boolean;
  recommended?: boolean;
  cta: {
    text: string;
    link: string;
    type: 'primary' | 'secondary' | 'outline';
  };
  availability?: string;
  warranty?: string;
  support?: string;
  delivery?: string;
  payment?: string;
  cancellation?: string;
  tags?: string[];
}

interface SEOPricingCardProps {
  tier: PricingTier;
  className?: string;
  showDiscount?: boolean;
  showFeatures?: boolean;
  showBenefits?: boolean;
  showLimitations?: boolean;
  showDetails?: boolean;
  showCta?: boolean;
}

export default function SEOPricingCard({ 
  tier, 
  className = "",
  showDiscount = true,
  showFeatures = true,
  showBenefits = true,
  showLimitations = true,
  showDetails = true,
  showCta = true
}: SEOPricingCardProps) {
  const getCtaClass = () => {
    switch (tier.cta.type) {
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
    "@type": "Offer",
    "name": tier.name,
    "description": tier.description,
    "price": tier.price.amount,
    "priceCurrency": tier.price.currency,
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": tier.price.amount,
      "priceCurrency": tier.price.currency,
      "unitCode": tier.price.unit || "",
      "validFrom": new Date().toISOString(),
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    "seller": {
      "@type": "Organization",
      "name": "Renov Route"
    },
    "itemOffered": {
      "@type": "Service",
      "name": tier.name,
      "description": tier.description
    }
  };

  return (
    <>
      <div className={className}>
        <div className={`bg-white rounded-lg shadow-md border-2 overflow-hidden ${
          tier.popular ? 'border-blue-500' : 'border-gray-200'
        }`}>
          {tier.popular && (
            <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
              ⭐ Le plus populaire
            </div>
          )}
          
          {tier.recommended && (
            <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
              ✓ Recommandé
            </div>
          )}
          
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {tier.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  {showDiscount && tier.originalPrice && tier.discount && (
                    <span className="text-lg text-gray-500 line-through mr-2">
                      {tier.originalPrice} {tier.price.currency}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price.amount}
                  </span>
                  <span className="text-lg text-gray-600 ml-1">
                    {tier.price.currency}
                    {tier.price.unit && ` / ${tier.price.unit}`}
                    {tier.price.period && ` / ${tier.price.period}`}
                  </span>
                </div>
                
                {showDiscount && tier.discount && (
                  <div className="mt-2">
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">
                      -{tier.discount.percentage}% ({tier.discount.amount} {tier.price.currency} d'économie)
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {showFeatures && tier.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                        {feature.description && (
                          <p className="text-xs text-gray-600 mt-1">
                            {feature.description}
                          </p>
                        )}
                        {feature.limit && (
                          <p className="text-xs text-blue-600 mt-1">
                            Limite: {feature.limit}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showBenefits && tier.benefits && tier.benefits.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Avantages</h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showLimitations && tier.limitations && tier.limitations.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Limitations</h4>
                <ul className="space-y-2">
                  {tier.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {showDetails && (
              <div className="mb-6 space-y-3 text-sm">
                {tier.availability && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Disponibilité:</span>
                    <span className="font-medium">{tier.availability}</span>
                  </div>
                )}
                {tier.warranty && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Garantie:</span>
                    <span className="font-medium">{tier.warranty}</span>
                  </div>
                )}
                {tier.support && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support:</span>
                    <span className="font-medium">{tier.support}</span>
                  </div>
                )}
                {tier.delivery && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Livraison:</span>
                    <span className="font-medium">{tier.delivery}</span>
                  </div>
                )}
                {tier.payment && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paiement:</span>
                    <span className="font-medium">{tier.payment}</span>
                  </div>
                )}
                {tier.cancellation && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annulation:</span>
                    <span className="font-medium">{tier.cancellation}</span>
                  </div>
                )}
              </div>
            )}
            
            {tier.tags && tier.tags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {tier.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {showCta && (
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={tier.cta.link}
                  className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${getCtaClass()}`}
                >
                  {tier.cta.text}
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
        id="pricing-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}