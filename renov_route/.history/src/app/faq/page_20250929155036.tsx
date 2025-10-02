'use client';

import Layout from '@/components/Layout';
import SEOFAQ from '@/components/SEOFAQ';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import SafariAnimationFix, { useSafariOptimization } from '@/components/SafariAnimationFix';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQPage() {
  const { isSafari } = useSafariOptimization();

  const faqs = [
    {
      question: "Qu'est-ce que le marquage au sol et quels sont les différents types ?",
      answer: "Le marquage au sol est l'ensemble des tracés, symboles et inscriptions peints ou appliqués sur les chaussées et parkings pour organiser la circulation et guider les usagers. Les principaux types incluent : le marquage routier (lignes blanches, passages piétons, flèches), le marquage de parking (places de stationnement, zones de circulation), la signalisation horizontale (marquage de sécurité, zones interdites), et les marquages spéciaux (handicapés, livraisons, zones de chargement)."
    },
    {
      question: "Combien coûte le marquage au sol d'un parking à Lyon ?",
      answer: "Le coût du marquage au sol d'un parking à Lyon varie selon plusieurs facteurs : la surface à marquer, le type de peinture utilisée (peinture epoxy, résine, thermoplastique), la complexité du tracé, et l'état du sol existant. En moyenne, comptez entre 8€ et 15€ par m² pour un marquage standard. Pour un parking de 100m², le budget se situe généralement entre 800€ et 1500€. Nous proposons des devis gratuits et personnalisés selon vos besoins spécifiques."
    },
    {
      question: "Quelle est la différence entre peinture epoxy et résine pour le marquage ?",
      answer: "La peinture epoxy est une peinture bicomposant très résistante, idéale pour les intérieurs et les parkings couverts. Elle offre une excellente adhérence et une durée de vie de 5 à 8 ans. La résine, quant à elle, est plus adaptée aux extérieurs et aux zones de fort trafic. Elle résiste mieux aux intempéries et aux UV, avec une durée de vie de 3 à 5 ans. Le choix dépend de l'usage, de l'exposition et du budget disponible."
    },
    {
      question: "Comment réparer un nid de poule efficacement ?",
      answer: "La réparation d'un nid de poule nécessite plusieurs étapes : nettoyage de la zone, découpe des bords pour créer des contours nets, application d'un primaire d'accrochage, remplissage avec un enrobé à froid ou à chaud selon la profondeur, et compactage. Pour les nids de poule profonds (plus de 5cm), nous recommandons l'utilisation d'un enrobé à chaud qui offre une meilleure durabilité. La réparation doit être effectuée par temps sec et à une température minimale de 5°C."
    },
    {
      question: "Quels sont les délais d'intervention pour le marquage au sol dans le Rhône (69) ?",
      answer: "Nos délais d'intervention dans le Rhône (69) varient selon la saison et la charge de travail. En période normale, nous intervenons sous 5 à 10 jours ouvrés. En haute saison (printemps/été), les délais peuvent s'étendre à 2-3 semaines. Pour les urgences, nous proposons des interventions rapides sous 48h avec un supplément. Nous couvrons tout le département du Rhône, de Lyon à Saint-Étienne, en passant par Villeurbanne, Vénissieux, et les communes alentours."
    },
    {
      question: "Le marquage au sol est-il obligatoire pour les parkings privés ?",
      answer: "Pour les parkings privés, le marquage n'est pas toujours obligatoire mais fortement recommandé. Cependant, certains cas nécessitent un marquage obligatoire : parkings de plus de 20 places, parkings d'entreprises avec plus de 50 salariés, parkings de commerces de plus de 1000m². Le marquage doit respecter les normes NF P 98-332 et inclure les places handicapées (2% minimum), les zones de livraison, et la signalisation de sécurité. Nous vous conseillons sur la réglementation applicable à votre situation."
    },
    {
      question: "Quelle peinture utiliser pour le marquage de parking extérieur ?",
      answer: "Pour le marquage de parking extérieur, nous recommandons la peinture thermoplastique ou la résine bicomposant. La peinture thermoplastique, appliquée à chaud, offre une excellente résistance aux intempéries, aux UV et au trafic intense. Elle dure 3 à 5 ans. La résine bicomposant est plus économique et convient aux parkings avec trafic modéré. Elle dure 2 à 3 ans. Nous déconseillons la peinture acrylique simple pour les extérieurs car elle s'use rapidement."
    },
    {
      question: "Comment entretenir le marquage au sol existant ?",
      answer: "L'entretien du marquage au sol comprend : le nettoyage régulier (balayage, lavage haute pression), la réparation des zones usées (retouche avec la même peinture), le renouvellement préventif tous les 3-5 ans selon le trafic, et la protection contre les taches d'huile (application d'un primaire anti-taches). Nous proposons des contrats d'entretien annuels qui incluent inspection, nettoyage et retouches mineures pour prolonger la durée de vie de votre marquage."
    },
    {
      question: "Peut-on faire du marquage au sol par temps de pluie ?",
      answer: "Non, le marquage au sol ne peut pas être effectué par temps de pluie ou sur sol humide. L'humidité empêche l'adhérence correcte de la peinture et compromet la qualité du travail. Nous intervenons uniquement par temps sec, avec une température minimale de 5°C et un taux d'humidité inférieur à 80%. Si la météo est défavorable, nous reportons l'intervention sans frais supplémentaires. Nous surveillons les prévisions météo pour planifier au mieux nos interventions."
    },
    {
      question: "Quelle est la durée de vie d'un marquage au sol ?",
      answer: "La durée de vie d'un marquage au sol dépend du type de peinture et de l'intensité du trafic. La peinture thermoplastique dure 3 à 5 ans, la résine bicomposant 2 à 3 ans, et la peinture epoxy 5 à 8 ans (intérieur). Les facteurs d'usure incluent : le trafic (piétons, véhicules), les intempéries, l'entretien, et la qualité de la préparation du sol. Un marquage bien entretenu peut durer 2 fois plus longtemps qu'un marquage négligé."
    },
    {
      question: "Comment choisir les couleurs pour le marquage de parking ?",
      answer: "Le choix des couleurs pour le marquage de parking suit des codes précis : blanc pour les lignes de délimitation et les places normales, jaune pour les zones de circulation et les interdictions, bleu pour les places handicapées, vert pour les places de livraison, rouge pour les zones interdites. Nous respectons les normes en vigueur et vous conseillons sur les couleurs les plus adaptées à votre parking. Les couleurs doivent offrir un bon contraste avec le sol pour une visibilité optimale."
    },
    {
      question: "Qu'est-ce que la rénovation de signalisation et quand est-elle nécessaire ?",
      answer: "La rénovation de signalisation consiste à remettre à neuf les marquages au sol usés, effacés ou non conformes. Elle est nécessaire quand : le marquage est effacé à plus de 50%, les couleurs sont délavées, la signalisation ne respecte plus les normes, ou après des travaux de voirie. Nous proposons un audit complet de votre signalisation existante, puis une rénovation partielle ou totale selon les besoins. La rénovation est plus économique qu'un marquage neuf et améliore la sécurité."
    },
    {
      question: "Comment préparer un parking avant le marquage au sol ?",
      answer: "La préparation d'un parking avant marquage comprend : nettoyage complet (balayage, lavage, dégraissage), réparation des fissures et nids de poule, égalisation des surfaces irrégulières, séchage complet (24-48h), et marquage des zones à peindre. Nous effectuons un diagnostic préalable et vous conseillons sur les travaux de préparation nécessaires. Une bonne préparation garantit la qualité et la durabilité du marquage final."
    },
    {
      question: "Quelles sont les normes à respecter pour le marquage de places handicapées ?",
      answer: "Les places handicapées doivent respecter des normes strictes : largeur minimale de 3,30m, longueur de 5m, marquage au sol bleu avec symbole handicapé, signalisation verticale obligatoire, localisation près des entrées, et représentation de 2% minimum du total des places. Le symbole doit mesurer au moins 0,60m de large. Nous maîtrisons parfaitement ces normes et vous garantissons une conformité totale avec la réglementation en vigueur."
    },
    {
      question: "Peut-on personnaliser le marquage au sol avec des logos ou textes ?",
      answer: "Oui, nous proposons la personnalisation du marquage au sol avec logos d'entreprise, textes, numéros de places, ou motifs décoratifs. Cette personnalisation est idéale pour les parkings d'entreprises, centres commerciaux, ou copropriétés. Nous utilisons des pochoirs ou des techniques de découpe pour créer des motifs précis. Le coût dépend de la complexité du motif et de la surface. Nous vous proposons des maquettes avant réalisation pour valider le design."
    },
    {
      question: "Quelle garantie offrez-vous sur vos travaux de marquage ?",
      answer: "Nous offrons une garantie de 2 ans sur tous nos travaux de marquage au sol, couvrant les défauts d'adhérence, de résistance et de conformité. Cette garantie s'applique sous réserve d'un entretien normal et d'une utilisation conforme. En cas de problème couvert par la garantie, nous intervenons gratuitement pour réparer ou refaire le marquage défaillant. Nous sommes également assurés responsabilité civile professionnelle pour tous nos travaux."
    },
    {
      question: "Comment obtenir un devis gratuit pour marquage au sol ?",
      answer: "Pour obtenir un devis gratuit, contactez-nous par téléphone au 07 86 81 96 92, par email à contact@renov-route.com, ou via notre formulaire en ligne. Nous vous poserons quelques questions sur votre projet (type de marquage, surface, localisation, délais) et proposerons une visite sur site gratuite pour évaluer précisément vos besoins. Le devis détaillé vous sera transmis sous 24-48h avec toutes les options possibles."
    }
  ];

  return (
    <>
      <SEOHead
        title="FAQ Marquage au Sol - Questions Fréquentes | Renov Route"
        description="Toutes les réponses à vos questions sur le marquage au sol, peinture parking, réparation nids de poule à Lyon et dans le Rhône. Devis gratuit et conseils d'experts."
        keywords="marquage au sol lyon, peinture parking, réparation nid de poule, peinture epoxy, marquage saint-étienne, renov résine, entreprise marquage"
        pageKey="faq"
        canonicalUrl="https://renov-route.com/faq"
      />
      
      <StructuredData type="faq" />
      
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>

      <Layout>
        <SafariAnimationFix>
          {/* Hero Section */}
          <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/background_home_page.avif')] bg-cover bg-center opacity-20"></div>
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            
            <div className="relative max-w-6xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <span>/</span>
                  <span className="text-white">FAQ</span>
                </div>
              </nav>

              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Questions Fréquentes
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trouvez toutes les réponses à vos questions sur le marquage au sol, 
                la peinture de parking et la réparation de chaussée
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/devis" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Devis Gratuit
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Nous Contacter
                </Link>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <SEOFAQ faqs={faqs} className="space-y-6" />
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/background_home_page.avif')] bg-cover bg-center opacity-20"></div>
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-sm"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Vous avez d'autres questions ?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Notre équipe d'experts est à votre disposition pour vous conseiller 
                  et vous accompagner dans vos projets de marquage au sol.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/devis" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Demander un Devis
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Nous Appeler
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
