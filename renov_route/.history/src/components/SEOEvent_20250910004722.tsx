import Script from 'next/script';

interface Event {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  organizer: {
    name: string;
    url: string;
  };
  image?: string;
  price?: {
    currency: string;
    value: number;
  };
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
}

interface SEOEventProps {
  event: Event;
  className?: string;
}

export default function SEOEvent({ event, className = "" }: SEOEventProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": event.location.address,
        "addressLocality": event.location.city,
        "postalCode": event.location.postalCode,
        "addressCountry": event.location.country
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": event.organizer.name,
      "url": event.organizer.url
    },
    "image": event.image ? `https://renov-route.com${event.image}` : "https://renov-route.com/assets/images/og-image.jpg",
    "offers": event.price ? {
      "@type": "Offer",
      "price": event.price.value,
      "priceCurrency": event.price.currency,
      "availability": "https://schema.org/InStock"
    } : undefined,
    "eventStatus": `https://schema.org/${event.eventStatus || 'EventScheduled'}`,
    "eventAttendanceMode": `https://schema.org/${event.eventAttendanceMode || 'OfflineEventAttendanceMode'}`
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
          <p className="text-gray-700 mb-4">{event.description}</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(event.startDate).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                {event.location.name}, {event.location.address}, {event.location.city} {event.location.postalCode}
              </span>
            </div>
            
            {event.price && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>{event.price.value} {event.price.currency}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
