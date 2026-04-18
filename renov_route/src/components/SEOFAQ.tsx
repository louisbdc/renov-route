import { useEffect } from 'react';
import { GoogleAnalytics } from '@/lib/analytics';

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
        const content = detail.querySelector('div:last-child') as HTMLElement;

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

        // FAQ toggle tracking
        const question = detail.querySelector('h3')?.textContent || '';
        GoogleAnalytics.getInstance().trackFaqToggle(
          detail.open ? 'expand' : 'collapse',
          question
        );
      });
    });
  }, []);

  return (
    <>
      <div className={className}>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-12 text-[#0F172A]">Questions fréquentes — Traçage Marquage Routier</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-[#FACC15] transition-all overflow-hidden"
            >
              <summary className="cursor-pointer p-6 list-none">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-black italic uppercase tracking-tight text-[#0F172A] leading-tight pr-4 group-hover:text-[#FACC15] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#FACC15] transform transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-slate-200 transition-all duration-300 ease-in-out overflow-hidden">
                <p className="text-slate-600 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
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
