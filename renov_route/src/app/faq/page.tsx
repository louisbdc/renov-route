'use client';

import Layout from '@/components/Layout';
import SEOFAQ from '@/components/SEOFAQ';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import Link from 'next/link';
export default function FAQPage() {
  const faqs = [
    {
      question: "Qu'est-ce que le marquage au sol et quels sont les différents types ?",
      answer: "Le marquage au sol est l'ensemble des tracés, symboles et inscriptions peints ou appliqués sur les chaussées et parkings pour organiser la circulation et guider les usagers. Les principaux types incluent : le marquage routier (lignes blanches, passages piétons, flèches), le marquage de parking (places de stationnement, zones de circulation), la signalisation horizontale (marquage de sécurité, zones interdites), et les marquages spéciaux (handicapés, livraisons, zones de chargement)."
    },
    {
      question: "Combien coûte le marquage au sol d'un parking à Lyon ?",
      answer: "Le coût du marquage au sol d'un parking à Lyon varie selon plusieurs facteurs : la surface à marquer, le type de peinture utilisée (peinture epoxy, résine, thermoplastique), la complexité du tracé, et l'état du sol existant. En moyenne, comptez entre 8€ et 15€ par m² pour un marquage standard. Pour un parking de 100m², le budget se situe généralement entre 800€ et 1500€. Nous proposons des deviss et personnalisés selon vos besoins spécifiques."
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
      question: "Comment obtenir un devis pour marquage au sol ?",
      answer: "Pour obtenir un devis, contactez-nous par téléphone au 07 86 81 96 92, par email à contact@renov-route.com, ou via notre formulaire en ligne. Nous vous poserons quelques questions sur votre projet (type de marquage, surface, localisation, délais) et proposerons une visite sur site gratuite pour évaluer précisément vos besoins. Le devis détaillé vous sera transmis sous 24-48h avec toutes les options possibles."
    },
    {
      question: "Quelle est la limitation de vitesse sur un parking privé ?",
      answer: "Sur un parking privé, il n'existe pas de limitation de vitesse réglementaire imposée par le Code de la route. Cependant, il est fortement recommandé de limiter la vitesse à 10 ou 20 km/h pour la sécurité des piétons. Le gestionnaire du parking peut fixer ses propres règles et les matérialiser par des panneaux de limitation de vitesse et un marquage au sol approprié (ralentisseurs, passages piétons, flèches directionnelles). Nous installons les panneaux et le marquage correspondant."
    },
    {
      question: "Quelles sont les sanctions en cas de non-conformité d'un parking aux normes PMR ?",
      answer: "Le non-respect des normes d'accessibilité PMR sur un parking expose à des sanctions financières pouvant atteindre 45 000 € pour une personne physique et 225 000 € pour une personne morale. En cas de récidive, une peine d'emprisonnement de 6 mois peut s'ajouter. Depuis 2026, les contrôles sont renforcés. Les obligations incluent : 2% de places PMR (minimum 1 place), largeur de 3,30 m, signalisation horizontale et verticale, et cheminement accessible. Nous réalisons la mise en conformité complète."
    },
    {
      question: "Quelles sont les obligations de conformité accessibilité parking en 2026 ?",
      answer: "En 2026, les parkings doivent respecter les normes d'accessibilité de l'arrêté du 20 avril 2017 modifié : au moins 2% de places PMR (3,30 m de large minimum), signalisation horizontale (marquage bleu, pictogramme) et verticale (panneau B6d), cheminement praticable jusqu'à l'entrée du bâtiment, et pente maximale de 5%. Les ERP (Établissements Recevant du Public) doivent être en conformité sous peine de sanctions administratives et pénales. Nous proposons un audit de conformité gratuit."
    },
    {
      question: "Qu'est-ce que le retraçage de parking et quand est-il nécessaire ?",
      answer: "Le retraçage (ou retraçage) de parking consiste à renouveler les marquages au sol effacés ou dégradés par le temps, le trafic et les intempéries. Il est nécessaire quand les lignes sont effacées à plus de 30-50%, quand les couleurs sont délavées, ou après des travaux de voirie. Le retraçage est plus économique qu'un marquage neuf car il réutilise souvent les tracés existants. Nous recommandons un retraçage tous les 2 à 5 ans selon le trafic et l'exposition."
    }
  ];

  return (
    <>
      <StructuredData type="faq" />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://renov-route.com/" },
        { name: "FAQ", url: "https://renov-route.com/faq/" }
      ]} />

      <Layout>
        <SafariAnimationFix>
          {/* Hero — dark editorial */}
          <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 relative overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 bg-[url('/assets/images/background_home_page.avif')] bg-cover bg-center grayscale opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/80 to-[#0F172A]" />

            <div className="relative max-w-5xl mx-auto">
              <nav className="mb-10">
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  <Link href="/" className="hover:text-[#FACC15] transition-colors">Accueil</Link>
                  <span className="text-slate-600">/</span>
                  <span className="text-white">FAQ</span>
                </div>
              </nav>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                  Questions fréquentes
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8">
                  Toutes les <br /><span className="text-[#FACC15]">réponses.</span>
                </h1>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
                  Trouvez toutes les réponses à vos questions sur le marquage au sol, la peinture de parking et la réparation de chaussée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    href="/qui-sommes-nous"
                    className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
                  >
                    Nous contacter
                  </Link>
                </div>
              </MotionDiv>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 sm:py-28 px-6 bg-[#F0F4F8]">
            <div className="max-w-3xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <SEOFAQ faqs={faqs} className="space-y-6" />
              </MotionDiv>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
            <div className="relative max-w-3xl mx-auto text-center">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
                  D&apos;autres <span className="text-[#FACC15]">questions ?</span>
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                  Notre équipe d&apos;experts est à votre disposition pour vous conseiller et vous accompagner dans vos projets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[6px_6px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    href="/qui-sommes-nous"
                    className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
                  >
                    Nous appeler
                  </Link>
                </div>
              </MotionDiv>
            </div>
          </section>
        </SafariAnimationFix>
      </Layout>
    </>
  );
}
