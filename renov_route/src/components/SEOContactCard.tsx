import Script from 'next/script';
import Link from 'next/link';

interface ContactInfo {
  type: 'phone' | 'email' | 'address' | 'hours' | 'social';
  label: string;
  value: string;
  icon?: string;
  link?: string;
  description?: string;
  availability?: string;
  timezone?: string;
}

interface SEOContactCardProps {
  contact: ContactInfo;
  className?: string;
  showDescription?: boolean;
  showAvailability?: boolean;
}

export default function SEOContactCard({ 
  contact, 
  className = "",
  showDescription = true,
  showAvailability = true
}: SEOContactCardProps) {
  const getIcon = () => {
    if (contact.icon) return contact.icon;
    
    switch (contact.type) {
      case 'phone':
        return '📞';
      case 'email':
        return '✉️';
      case 'address':
        return '📍';
      case 'hours':
        return '🕒';
      case 'social':
        return '🌐';
      default:
        return '📋';
    }
  };

  const getColorClass = () => {
    switch (contact.type) {
      case 'phone':
        return 'bg-green-100 text-green-800';
      case 'email':
        return 'bg-blue-100 text-blue-800';
      case 'address':
        return 'bg-red-100 text-red-800';
      case 'hours':
        return 'bg-yellow-100 text-yellow-800';
      case 'social':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": contact.type,
    "name": contact.label,
    "value": contact.value,
    "description": contact.description || "",
    "availableLanguage": "fr",
    "areaServed": "FR",
    "hoursAvailable": contact.type === 'hours' ? contact.value : undefined
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-full ${getColorClass()} flex items-center justify-center text-xl`}>
              {getIcon()}
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {contact.label}
              </h3>
              
              <div className="mb-3">
                {contact.link ? (
                  <Link
                    href={contact.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {contact.value}
                  </Link>
                ) : (
                  <p className="text-gray-700 font-medium">
                    {contact.value}
                  </p>
                )}
              </div>
              
              {showDescription && contact.description && (
                <p className="text-sm text-gray-600 mb-3">
                  {contact.description}
                </p>
              )}
              
              {showAvailability && contact.availability && (
                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {contact.availability}
                  </span>
                </div>
              )}
              
              {contact.timezone && (
                <div className="text-xs text-gray-500">
                  Fuseau horaire: {contact.timezone}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Script
        id="contact-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}