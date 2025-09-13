import Script from 'next/script';

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

  return (
    <>
      <div className={className}>
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes - Traçage Marquage Routier</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
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
