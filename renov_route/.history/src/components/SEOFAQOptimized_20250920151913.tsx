'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

interface SEOFAQOptimizedProps {
  className?: string;
  showTitle?: boolean;
}

export default function SEOFAQOptimized({ className = "", showTitle = true }: SEOFAQOptimizedProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // FAQ optimisée basée sur les résultats de recherche
  const faqData: FAQItem[] = [
    {
      question: "Qu'est-ce que le traçage marquage routier et comment ça fonctionne ?",
      answer: "Le traçage marquage routier consiste à appliquer des marquages au sol pour la signalisation horizontale des routes, parkings et espaces publics. Cela inclut les lignes de circulation, les places de parking, les passages piétons, les marquages PMR et autres signalisations de sécurité. Nous utilisons des peintures de marquage routier de haute qualité et des techniques professionnelles pour assurer la durabilité et la conformité aux normes françaises NF EN 1436.",
      keywords: ["traçage marquage routier", "signalisation horizontale", "marquage au sol", "normes françaises"]
    },
    {
      question: "Comment réparer les nids de poule efficacement avec de la résine ?",
      answer: "La réparation des nids de poule se fait avec de l'enrobé résine à froid, un procédé innovant et résistant qui permet une réparation rapide et durable des trous dans la chaussée. Cette technique est plus efficace que les méthodes traditionnelles car elle s'adapte aux variations de température et résiste mieux au trafic. Le procédé peut être utilisé aussi bien en intérieur qu'en extérieur.",
      keywords: ["réparation nids de poule", "enrobé résine", "réparation chaussée", "résine à froid"]
    },
    {
      question: "Quels sont les avantages du retraçage de parking professionnel ?",
      answer: "Le retraçage de parking améliore l'organisation des espaces de stationnement, optimise l'utilisation des places disponibles, améliore l'expérience utilisateur des clients et assure la conformité aux normes d'accessibilité PMR. Un parking bien marqué augmente la sécurité, facilite la circulation et peut augmenter la valeur de votre propriété commerciale.",
      keywords: ["retraçage parking", "marquage parking professionnel", "aménagement parking", "accessibilité PMR"]
    },
    {
      question: "Combien coûte un devis de marquage routier et comment l'obtenir ?",
      answer: "Nos devis de traçage marquage routier sont gratuits et sans engagement. Le prix dépend de la surface à marquer, du type de marquage, de la complexité du projet et des matériaux utilisés. Pour obtenir votre devis gratuit, contactez-nous par téléphone au 07 86 81 96 92 ou par email à contact@renov-route.com. Nous intervenons dans toute la France avec une expertise particulière en Auvergne-Rhône-Alpes.",
      keywords: ["devis traçage gratuit", "prix marquage routier", "devis marquage parking", "expert Rhône Alpes"]
    },
    {
      question: "Dans quelles régions de France intervenez-vous pour le marquage routier ?",
      answer: "Nous intervenons dans toute la France pour vos projets de traçage marquage routier. Spécialistes en Auvergne-Rhône-Alpes, nous couvrons Lyon, Saint-Étienne, Grenoble, Clermont-Ferrand et leurs régions. Nous nous déplaçons également dans les régions limitrophes et acceptons les projets dans toute la France métropolitaine.",
      keywords: ["intervention France", "expert marquage routier Rhône Alpes", "marquage Lyon", "tracage marquage France"]
    },
    {
      question: "Quels matériaux utilisez-vous pour le marquage routier et parking ?",
      answer: "Nous utilisons des peintures de marquage routier de haute qualité, de l'enrobé résine, et des matériaux conformes aux normes françaises de signalisation horizontale. Nos techniques incluent le marquage thermoplastique, la peinture routière, l'enrobé résine à froid, et la signalisation verticale conforme aux réglementations. Tous nos matériaux sont durables et résistants aux intempéries.",
      keywords: ["matériaux marquage", "peinture routière", "marquage thermoplastique", "normes conformité"]
    },
    {
      question: "Combien de temps dure un projet de marquage routier et parking ?",
      answer: "La durée d'un projet de traçage marquage routier varie selon la surface et la complexité. Un parking standard peut être marqué en une journée, tandis qu'un projet plus important peut prendre plusieurs jours. Nous planifions toujours les interventions pour minimiser les perturbations et nous tenons compte des conditions météorologiques pour assurer la qualité du travail.",
      keywords: ["durée projet marquage", "planification intervention", "marquage rapide", "efficacité travaux"]
    },
    {
      question: "Proposez-vous des garanties sur vos travaux de marquage routier ?",
      answer: "Oui, nous offrons des garanties sur tous nos travaux de marquage routier et de réparation. La durée de garantie varie selon le type de travaux réalisés et les conditions d'utilisation. Nos garanties couvrent la qualité des matériaux utilisés et la conformité de l'installation aux normes en vigueur.",
      keywords: ["garantie marquage", "qualité travaux", "conformité normes", "satisfaction client"]
    },
    {
      question: "Comment entretenir un marquage routier pour qu'il dure plus longtemps ?",
      answer: "L'entretien régulier du marquage routier passe par le nettoyage, la surveillance de l'usure et le retraçage préventif pour maintenir la visibilité et la sécurité. Nous recommandons un nettoyage régulier et une inspection annuelle pour identifier les zones nécessitant un retraçage. Un bon entretien peut prolonger la durée de vie du marquage de plusieurs années.",
      keywords: ["entretien marquage", "durabilité marquage", "maintenance préventive", "longévité marquage"]
    },
    {
      question: "Quelles sont les normes à respecter pour le marquage routier en France ?",
      answer: "Le marquage routier doit respecter les normes NF EN 1436 et les arrêtés du code de la route français concernant la signalisation horizontale. Nous nous conformons également aux réglementations locales et aux normes d'accessibilité PMR. Tous nos travaux respectent les standards de qualité et de sécurité en vigueur.",
      keywords: ["normes marquage", "NF EN 1436", "réglementation française", "conformité accessibilité"]
    },
    {
      question: "Proposez-vous des services de marquage industriel et commercial ?",
      answer: "Oui, nous proposons des services de marquage industriel et commercial spécialisés. Cela inclut le marquage d'entrepôts, de zones de chargement, de parkings d'entreprise, de zones de circulation industrielle et de signalisation de sécurité. Nous adaptons nos techniques et matériaux aux besoins spécifiques de chaque environnement industriel.",
      keywords: ["marquage industriel", "marquage commercial", "marquage entrepôt", "signalisation industrielle"]
    },
    {
      question: "Comment choisir entre différents types de marquage routier ?",
      answer: "Le choix du type de marquage dépend de plusieurs facteurs : le trafic, les conditions climatiques, la durée de vie souhaitée et le budget. Nous vous conseillons sur le meilleur type de marquage pour votre projet : peinture classique pour les zones peu fréquentées, thermoplastique pour les axes principaux, ou résine pour les zones industrielles. Notre expertise vous guide dans le choix optimal.",
      keywords: ["conseil marquage", "choix matériaux", "expertise technique", "optimisation projet"]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={className}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes sur le traçage marquage routier
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trouvez les réponses à vos questions sur nos services de marquage routier, 
            réparation de nids de poule, retraçage de parking et signalisation horizontale.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded={openItems.includes(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA après FAQ */}
      <div className="mt-8 text-center">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-4">
            Notre équipe d'experts est là pour vous conseiller sur votre projet de marquage routier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0786819692"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 86 81 96 92
            </a>
            <a
              href="mailto:contact@renov-route.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@renov-route.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
