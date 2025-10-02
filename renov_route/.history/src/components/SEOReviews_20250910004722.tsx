import Script from 'next/script';

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  reviewTitle?: string;
}

interface SEOReviewsProps {
  reviews: Review[];
  className?: string;
}

export default function SEOReviews({ reviews, className = "" }: SEOReviewsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Renov Route",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "name": review.reviewTitle || `Avis de ${review.author}`
    }))
  };

  return (
    <>
      <div className={className}>
        <h2 className="text-2xl font-bold mb-6">Avis clients - Renov Route</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {review.rating}/5
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {review.reviewTitle || `Avis de ${review.author}`}
              </h3>
              <p className="text-gray-700 mb-3">
                {review.reviewBody}
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">{review.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(review.datePublished).toLocaleDateString('fr-FR')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Script
        id="reviews-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
