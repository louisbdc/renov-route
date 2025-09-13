import Script from 'next/script';
import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  image?: string;
  brand: string;
  category: string;
  price?: {
    currency: string;
    value: number;
  };
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';
  condition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    seller: {
      name: string;
      url: string;
    };
  };
}

interface SEOProductProps {
  product: Product;
  className?: string;
}

export default function SEOProduct({ product, className = "" }: SEOProductProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image ? `https://renov-route.com${product.image}` : "https://renov-route.com/assets/images/og-image.jpg",
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category,
    "offers": product.offers ? {
      "@type": "Offer",
      "price": product.offers.price,
      "priceCurrency": product.offers.priceCurrency,
      "availability": `https://schema.org/${product.offers.availability}`,
      "seller": {
        "@type": "Organization",
        "name": product.offers.seller.name,
        "url": product.offers.seller.url
      }
    } : undefined,
    "aggregateRating": product.aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": product.aggregateRating.ratingValue,
      "reviewCount": product.aggregateRating.reviewCount,
      "bestRating": product.aggregateRating.bestRating,
      "worstRating": product.aggregateRating.worstRating
    } : undefined,
    "condition": product.condition ? `https://schema.org/${product.condition}` : undefined,
    "availability": product.availability ? `https://schema.org/${product.availability}` : undefined
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          
          {product.image && (
            <div className="mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <span className="font-medium mr-2">Marque:</span>
              <span>{product.brand}</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium mr-2">Catégorie:</span>
              <span>{product.category}</span>
            </div>
            
            {product.price && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Prix:</span>
                <span className="text-lg font-bold text-green-600">
                  {product.price.value} {product.price.currency}
                </span>
              </div>
            )}
            
            {product.aggregateRating && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Note:</span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.aggregateRating!.ratingValue) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>
                    {product.aggregateRating.ratingValue}/5 ({product.aggregateRating.reviewCount} avis)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
