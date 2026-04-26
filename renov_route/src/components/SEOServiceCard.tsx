'use client'

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
        return 'bg-[#FACC15] text-[#0F172A] hover:bg-[#0F172A] hover:text-white';
      case 'secondary':
        return 'bg-[#0F172A] text-white hover:bg-[#FACC15] hover:text-[#0F172A]';
      case 'outline':
        return 'border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white';
      default:
        return 'bg-[#FACC15] text-[#0F172A] hover:bg-[#0F172A] hover:text-white';
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
        <div className="bg-white border border-slate-200 card-éditorial-hover overflow-hidden group">
          {service.image && (
            <div className="h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={192}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          )}

          <div className="p-6">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                {service.icon && (
                  <div className="w-10 h-10 bg-[#FACC15] rounded-sm flex items-center justify-center text-xl text-[#0F172A]">
                    {service.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-black italic uppercase tracking-tight text-[#0F172A] leading-tight">
                    {service.name}
                  </h3>
                  {service.category && (
                    <span className="inline-block bg-[#0F172A] text-white text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-sm mt-2">
                      {service.category}
                    </span>
                  )}
                </div>
              </div>

              {showRating && service.rating && (
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FACC15]">★</span>
                    <span className="text-sm font-bold text-[#0F172A]">{service.rating.value}</span>
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    ({service.rating.count} avis)
                  </div>
                </div>
              )}
            </div>

            <p className="text-slate-600 text-sm mb-5 font-medium leading-relaxed">
              {service.shortDescription || service.description}
            </p>

            {showPrice && service.price && (
              <div className="mb-5 p-4 bg-[#F8FAFC] border-l-4 border-[#FACC15]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Prix</span>
                  <span className="text-lg font-black text-[#0F172A]">
                    {service.price.amount} {service.price.currency}
                    {service.price.unit && ` / ${service.price.unit}`}
                    {service.price.period && ` / ${service.price.period}`}
                  </span>
                </div>
              </div>
            )}

            {showFeatures && service.features && service.features.length > 0 && (
              <div className="mb-5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] mb-3">Caractéristiques</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#FACC15] mr-3 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {showBenefits && service.benefits && service.benefits.length > 0 && (
              <div className="mb-5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] mb-3">Avantages</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#16A34A] mr-3 shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
              {service.duration && (
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block">Durée</span>
                  <span className="font-bold text-[#0F172A]">{service.duration}</span>
                </div>
              )}
              {service.warranty && (
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block">Garantie</span>
                  <span className="font-bold text-[#0F172A]">{service.warranty}</span>
                </div>
              )}
              {service.availability && (
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block">Disponibilité</span>
                  <span className="font-bold text-[#0F172A]">{service.availability}</span>
                </div>
              )}
            </div>

            {showProjects && service.projects && service.projects.count > 0 && (
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">Projets réalisés</span>
                  <span className="text-sm font-black text-[#0F172A]">{service.projects.count}+</span>
                </div>
                {service.projects.examples.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.projects.examples.map((example, index) => (
                      <span
                        key={index}
                        className="inline-block bg-slate-100 text-[#0F172A] text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {service.tags && service.tags.length > 0 && (
              <div className="mb-5">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#FACC15] text-[#0F172A] text-[10px] font-black uppercase tracking-[0.15em] px-2 py-1 rounded-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {showCta && service.cta && (
              <div className="pt-5 border-t border-slate-200">
                <Link
                  href={service.cta.link}
                  className={`inline-flex items-center justify-center w-full px-5 py-3 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${getCtaClass()}`}
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
      
      <script
       
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}