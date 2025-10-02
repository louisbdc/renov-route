import Script from 'next/script';
import Image from 'next/image';

interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string;
    location?: string;
  };
  rating: number;
  date: string;
  verified?: boolean;
  project?: string;
  service?: string;
  images?: string[];
  video?: string;
  helpful?: number;
  notHelpful?: number;
  source?: 'google' | 'facebook' | 'trustpilot' | 'internal' | 'other';
}

interface SEOTestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  showStats?: boolean;
  showProject?: boolean;
  showImages?: boolean;
}

export default function SEOTestimonialCard({ 
  testimonial, 
  className = "",
  showStats = false,
  showProject = true,
  showImages = false
}: SEOTestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewBody": testimonial.text,
    "author": testimonial.author ? {
      "@type": "Person",
      "name": testimonial.author.name,
      "jobTitle": testimonial.author.title,
      "worksFor": {
        "@type": "Organization",
        "name": testimonial.author.company
      }
    } : {
      "@type": "Person",
      "name": testimonial.author?.name || "Client anonyme"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": 5
    },
    "datePublished": testimonial.date,
    "publisher": {
      "@type": "Organization",
      "name": "Renov Route"
    }
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-start space-x-4">
            {testimonial.author.avatar && (
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {testimonial.author.name}
                  </h4>
                  {testimonial.verified && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Vérifié
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              {testimonial.author.title && (
                <p className="text-sm text-gray-600 mb-2">
                  {testimonial.author.title}
                  {testimonial.author.company && ` chez ${testimonial.author.company}`}
                </p>
              )}
              
              {testimonial.author.location && (
                <p className="text-xs text-gray-500 mb-3">
                  📍 {testimonial.author.location}
                </p>
              )}
              
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.text}"
              </blockquote>
              
              {showProject && testimonial.project && (
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Projet: {testimonial.project}
                  </span>
                </div>
              )}
              
              {testimonial.service && (
                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Service: {testimonial.service}
                  </span>
                </div>
              )}
              
              {showImages && testimonial.images && testimonial.images.length > 0 && (
                <div className="mb-4">
                  <div className="flex space-x-2">
                    {testimonial.images.slice(0, 3).map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ))}
                    {testimonial.images.length > 3 && (
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
                        +{testimonial.images.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {testimonial.video && (
                <div className="mb-4">
                  <video
                    src={testimonial.video}
                    controls
                    className="w-full h-32 rounded object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {new Date(testimonial.date).toLocaleDateString('fr-FR')}
                </span>
                
                {testimonial.source && (
                  <span className="capitalize">
                    Via {testimonial.source}
                  </span>
                )}
              </div>
              
              {showStats && (testimonial.helpful !== undefined || testimonial.notHelpful !== undefined) && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    {testimonial.helpful !== undefined && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8z" />
                        </svg>
                        {testimonial.helpful} utiles
                      </span>
                    )}
                    {testimonial.notHelpful !== undefined && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 019.263 3h4.017c.163 0 .326.02.485.06L17 4m-7 10V6m7 8a2 2 0 01-2 2h-2a2 2 0 01-2-2v8a2 2 0 012-2h2a2 2 0 012-2v8z" />
                        </svg>
                        {testimonial.notHelpful} pas utiles
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Script
        id="testimonial-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}