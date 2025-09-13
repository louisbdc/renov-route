import Script from 'next/script';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  keywords?: string[];
  lastUpdated?: string;
  helpful?: boolean;
  notHelpful?: boolean;
  views?: number;
}

interface SEOFAQCardProps {
  faq: FAQItem;
  className?: string;
  showStats?: boolean;
  collapsible?: boolean;
}

export default function SEOFAQCard({ 
  faq, 
  className = "",
  showStats = false,
  collapsible = true
}: SEOFAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
      "dateCreated": faq.lastUpdated || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Renov Route"
      }
    },
    "keywords": faq.keywords?.join(", ") || "",
    "category": faq.category || "Traçage Marquage Routier"
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {faq.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                )}
              </div>
              
              {collapsible ? (
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-3"
                  >
                    {isOpen ? 'Masquer la réponse' : 'Voir la réponse'}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isOpen && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
              
              {showStats && (
                <div className="mt-4 flex items-center space-x-4 text-xs text-gray-600">
                  {faq.views && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {faq.views} vues
                    </span>
                  )}
                  {faq.helpful !== undefined && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8z" />
                      </svg>
                      {faq.helpful ? 'Utile' : 'Pas utile'}
                    </span>
                  )}
                </div>
              )}
              
              {faq.keywords && faq.keywords.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-1">
                    {faq.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Script
        id="faq-card-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}