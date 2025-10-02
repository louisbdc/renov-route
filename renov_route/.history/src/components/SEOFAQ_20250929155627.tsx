import Script from 'next/script';
import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOFAQProps {
  faqs: FAQItem[];
  className?: string;
}

export default function SEOFAQ({ faqs, className = "" }: SEOFAQProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    // Améliorer l'expérience utilisateur avec des animations fluides
    const details = document.querySelectorAll('details');
    
    details.forEach(detail => {
      detail.addEventListener('toggle', () => {
        const summary = detail.querySelector('summary');
        const content = detail.querySelector('div:last-child');
        
        if (detail.open) {
          // Animation d'ouverture
          if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        } else {
          // Animation de fermeture
          if (content) {
            content.style.maxHeight = '0px';
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className={className}>
        <h2 className="text-2xl font-bold mb-8 text-white">Questions fréquentes - Traçage Marquage Routier</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <summary className="cursor-pointer p-6 list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white leading-tight pr-4 group-hover:text-blue-200 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg 
                      className="w-6 h-6 text-white transform transition-transform duration-300 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-white/10">
                <p className="text-gray-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
      
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
