import Script from 'next/script';
import Image from 'next/image';

interface Testimonial {
  author: string;
  position?: string;
  company?: string;
  content: string;
  rating: number;
  date: string;
  image?: string;
  verified?: boolean;
}

interface SEOTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
}

export default function SEOTestimonials({ 
  testimonials, 
  className = "",
  title = "Témoignages clients - Renov Route",
  description = "Découvrez ce que nos clients disent de nos services de traçage marquage routier et de réparation nids de poule."
}: SEOTestimonialsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Renov Route",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author,
        "jobTitle": testimonial.position,
        "worksFor": {
          "@type": "Organization",
          "name": testimonial.company
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": testimonial.content,
      "datePublished": testimonial.date,
      "name": `Témoignage de ${testimonial.author}`
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}/5
                </span>
                {testimonial.verified && (
                  <span className="ml-2 text-green-600 text-sm font-medium">
                    ✓ Vérifié
                  </span>
                )}
              </div>

              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  {testimonial.position && (
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  )}
                  {testimonial.company && (
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  )}
                  <div className="text-xs text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-gray-700 mb-6">
            Découvrez pourquoi plus de 500 clients nous font confiance pour leurs projets de marquage routier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/devis"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis
            </a>
            <a
              href="/qui-sommes-nous"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      
      <Script
        id="testimonials-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
