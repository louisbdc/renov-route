'use client'

import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address: string;
    city: string;
    region: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  online?: boolean;
  url?: string;
  image?: string;
  category?: string;
  tags?: string[];
  price?: {
    amount: number;
    currency: string;
    free?: boolean;
  };
  organizer?: {
    name: string;
    url?: string;
    email?: string;
    phone?: string;
  };
  capacity?: number;
  remaining?: number;
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  featured?: boolean;
  cta?: {
    text: string;
    link: string;
    type: 'primary' | 'secondary' | 'outline';
  };
}

interface SEOEventsProps {
  events: Event[];
  className?: string;
  showLocation?: boolean;
  showPrice?: boolean;
  showOrganizer?: boolean;
  showCapacity?: boolean;
  showStatus?: boolean;
  showCta?: boolean;
  columns?: 1 | 2 | 3 | 4;
}

export default function SEOEvents({ 
  events, 
  className = "",
  showLocation = true,
  showPrice = true,
  showOrganizer = true,
  showCapacity = true,
  showStatus = true,
  showCta = true,
  columns = 3
}: SEOEventsProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-[#FACC15] text-[#0F172A]';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case 'upcoming':
        return 'À venir';
      case 'ongoing':
        return 'En cours';
      case 'completed':
        return 'Terminé';
      case 'cancelled':
        return 'Annulé';
      default:
        return 'Inconnu';
    }
  };

  const getCtaClass = (type: string) => {
    switch (type) {
      case 'primary':
        return 'bg-amber-500 text-[#0F172A] hover:bg-amber-400';
      case 'secondary':
        return 'bg-gray-600 text-[#0F172A] hover:bg-gray-700';
      case 'outline':
        return 'border-2 border-[#FACC15] text-[#0F172A] hover:bg-[#FACC15]';
      default:
        return 'bg-amber-500 text-[#0F172A] hover:bg-amber-400';
    }
  };

  const getGridClass = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Événements Renov Route",
    "description": "Événements et formations liés au traçage marquage routier",
    "organizer": {
      "@type": "Organization",
      "name": "Renov Route"
    },
    "event": events.map(event => ({
      "@type": "Event",
      "name": event.name,
      "description": event.description,
      "startDate": event.startDate,
      "endDate": event.endDate || event.startDate,
      "location": event.location ? {
        "@type": "Place",
        "name": event.location.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": event.location.address,
          "addressLocality": event.location.city,
          "addressRegion": event.location.region,
          "addressCountry": event.location.country
        }
      } : undefined,
      "url": event.url,
      "image": event.image ? `https://renov-route.com${event.image}` : undefined,
      "offers": event.price ? {
        "@type": "Offer",
        "price": event.price.amount,
        "priceCurrency": event.price.currency,
        "availability": "https://schema.org/InStock"
      } : undefined,
      "organizer": event.organizer ? {
        "@type": "Organization",
        "name": event.organizer.name,
        "url": event.organizer.url,
        "email": event.organizer.email,
        "telephone": event.organizer.phone
      } : undefined
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">
            Nos Événements
          </h2>
          
          <div className={`grid ${getGridClass()} gap-6`}>
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                {event.image && (
                  <div className="h-48">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                        {event.name}
                      </h3>
                      {event.category && (
                        <span className="inline-block bg-[#FACC15] text-[#0F172A] text-xs px-2 py-1 rounded-full">
                          {event.category}
                        </span>
                      )}
                    </div>
                    
                    {showStatus && event.status && (
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                        {getStatusLabel(event.status)}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-500 mb-4">
                    {event.shortDescription || event.description}
                  </p>
                  
                  <div className="space-y-3 text-sm mb-4">
                    <div className="flex items-center text-slate-400">
                      <span className="mr-2">📅</span>
                      <span>
                        {formatDate(event.startDate)}
                        {event.endDate && event.endDate !== event.startDate && (
                          <span> - {formatDate(event.endDate)}</span>
                        )}
                      </span>
                    </div>
                    
                    {showLocation && event.location && (
                      <div className="flex items-center text-slate-400">
                        <span className="mr-2">📍</span>
                        <span>
                          {event.location.name}, {event.location.city}
                        </span>
                      </div>
                    )}
                    
                    {event.online && (
                      <div className="flex items-center text-slate-400">
                        <span className="mr-2">🌐</span>
                        <span>Événement en ligne</span>
                      </div>
                    )}
                    
                    {showPrice && event.price && (
                      <div className="flex items-center text-slate-400">
                        <span className="mr-2">💰</span>
                        <span>
                          {event.price.free ? 'Gratuit' : `${event.price.amount} ${event.price.currency}`}
                        </span>
                      </div>
                    )}
                    
                    {showOrganizer && event.organizer && (
                      <div className="flex items-center text-slate-400">
                        <span className="mr-2">👤</span>
                        <span>Organisé par {event.organizer.name}</span>
                      </div>
                    )}
                    
                    {showCapacity && event.capacity && (
                      <div className="flex items-center text-slate-400">
                        <span className="mr-2">👥</span>
                        <span>
                          {event.remaining !== undefined ? `${event.remaining} places restantes` : `${event.capacity} places`}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {event.tags && event.tags.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-slate-500 text-xs px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {showCta && event.cta && (
                    <div className="pt-4 border-t border-gray-200">
                      <Link
                        href={event.cta.link}
                        className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${getCtaClass(event.cta.type)}`}
                      >
                        {event.cta.text}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
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