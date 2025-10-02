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
        <h2 className="text-2xl font-bold mb-6 text-white">Questions fréquentes - Traçage Marquage Routier</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                {faq.question}
              </h3>
              <p className="text-gray-200 leading-relaxed">
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
