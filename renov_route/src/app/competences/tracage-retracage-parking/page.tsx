'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import ServiceProcessTimeline from '@/components/ServiceProcessTimeline'
import ServiceBeforeAfter from '@/components/ServiceBeforeAfter'
import RelatedGuides, { COMPETENCE_GUIDES } from '@/components/RelatedGuides'
import Link from 'next/link'
import {
  TbParking,
  TbTarget,
  TbCertificate,
  TbShield,
  TbPalette,
  TbCar,
  TbWheelchair,
  TbRefresh,
  TbBan,
  TbArrowsLeftRight,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Traçage et retraçage de parking', url: 'https://renov-route.com/competences/tracage-retracage-parking' },
]

const FEATURES = [
  { icon: <TbTarget size={20} />, title: 'Précision maximale', description: 'Tracés parfaitement droits et alignés grâce à nos outils professionnels et nos gabarits certifiés.' },
  { icon: <TbCertificate size={20} />, title: 'Conformité aux normes', description: 'Respect total des réglementations en vigueur, normes NF EN 1436 et accessibilité PMR.' },
  { icon: <TbShield size={20} />, title: 'Durabilité exceptionnelle', description: 'Peintures routières haute résistance aux intempéries, UV et trafic intense.' },
  { icon: <TbPalette size={20} />, title: 'Marquage sur mesure', description: 'Adaptation à votre identité visuelle, numérotation de places, couleurs personnalisées.' },
]

const SERVICES = [
  { icon: <TbParking size={22} />, title: 'Marquage de places', description: 'Délimitation précise des places avec numérotation, orientation et flèches de circulation.' },
  { icon: <TbWheelchair size={22} />, title: 'Places PMR', description: 'Marquage conforme aux normes PMR avec symboles, bandes de guidage et repères tactiles.' },
  { icon: <TbCar size={22} />, title: 'Places poids lourds', description: 'Zones dédiées aux véhicules de transport, livraison et gabarits spéciaux.' },
  { icon: <TbArrowsLeftRight size={22} />, title: 'Passages piétons', description: 'Marquage des zones de circulation piétonne et traversées sécurisées.' },
  { icon: <TbBan size={22} />, title: 'Zones interdites', description: 'Signalisation des zones de circulation restreinte, croisements et interdictions.' },
  { icon: <TbRefresh size={22} />, title: 'Retraçage & rénovation', description: 'Remise en état de marquages existants effacés ou dégradés par le temps et le trafic.' },
]

const STEPS = [
  { step: '01', title: 'Analyse du site', description: 'Visite sur place, étude du plan de circulation et identification des contraintes spécifiques.' },
  { step: '02', title: 'Plan de marquage', description: "Conception du plan d'implantation adapté à votre configuration et vos besoins." },
  { step: '03', title: 'Préparation', description: 'Balayage mécanique de la surface, effacement de l\'ancien marquage et réparation des zones dégradées si nécessaire.' },
  { step: '04', title: 'Réalisation', description: 'Application du marquage avec contrôle qualité en fin de chantier avant réception.' },
]

const FAQ = [
  {
    question: 'Quel type de peinture utilisez-vous pour le marquage au sol ?',
    answer: 'Nous utilisons des peintures routières acryliques et thermoplastiques certifiées NF EN 1436, résistantes aux UV, aux intempéries et au trafic intense. Le choix dépend du support et des conditions d\'usage.',
  },
  {
    question: 'Intervenez-vous sur les terrains de sport ?',
    answer: 'Oui, nous réalisons le traçage de terrains de sport (basketball, tennis, foot...) avec des peintures conformes aux normes sportives en vigueur.',
  },
  {
    question: 'Combien de temps faut-il attendre avant de circuler après le marquage ?',
    answer: 'Le temps de séchage dépend du produit utilisé et des conditions météo, mais est généralement de 1 à 3 heures. Nous vous communiquons le délai précis avant chaque intervention.',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Oui, nous établissons un devis gratuit et personnalisé après visite sur site. Contactez-nous pour planifier une intervention.',
  },
]

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment tracer ou retracer un parking",
  "description": "Méthode professionnelle de traçage et retraçage de parking : de l'analyse du site à la réalisation du marquage conforme aux normes.",
  "step": STEPS.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.title,
    "text": s.description,
  })),
}

export default function TracageRetracageParkingPage() {
  return (
    <>
      <ServiceStructuredData serviceType="tracage-retracage-parking" />
      <BreadcrumbSchema items={BREADCRUMB} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbParking size={28} />}
        heroTitle="Marquage au sol parking, Traçage & retraçage"
        heroSubtitle="Un marquage de parking professionnel améliore la circulation, optimise l'espace et renforce la sécurité. Traçage conforme aux normes en vigueur."
        heroBackgroundImage="/assets/images/realisations/lidl-verpiliere-parking_1.avif"
        heroImageAlt="Traçage de parking Lidl La Verpilière par Rénov Route"
        accentColor="amber"
        descriptionHeading="Marquage au sol parking : une expertise complète"
        descriptionParagraphs={[
          'Le marquage au sol de parking est un élément déterminant pour l\'image de votre établissement. Un parking bien marqué améliore la circulation, optimise l\'utilisation de l\'espace et renforce la sécurité des usagers.',
          <>Notre expertise couvre tous types de parkings : centres commerciaux, entreprises, hôtels, industries, restaurants et espaces publics. Nous utilisons des peintures haute qualité et des techniques professionnelles pour une durabilité exceptionnelle. Si votre sol présente des dégradations, nous assurons également la <Link href="/competences/reparation-nids-de-poule" className="text-[#FACC15] hover:text-[#0F172A] underline">réparation de nids de poule</Link> avant le traçage.</>,
          <>Nous respectons les normes en vigueur et nous adaptons à vos besoins spécifiques, y compris les travaux d&apos;accessibilité PMR et la pose d&apos;<Link href="/competences/accessoires-parking" className="text-[#FACC15] hover:text-[#0F172A] underline">accessoires de parking</Link> (bornes, butées, ralentisseurs). Découvrez nos <Link href="/realisations" className="text-[#FACC15] hover:text-[#0F172A] underline">projets réalisés</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Votre parking mérite un marquage professionnel"
        ctaSubtitle="Devis gratuit sous 48 h, intervention en Rhône-Alpes et région lyonnaise."
      >
        <ServiceItemsGrid
          title="Nos prestations de marquage"
          subtitle="De la place simple à la mise en conformité PMR complète."
          items={SERVICES}
          alt
        />
        <ServiceProcessTimeline
          title="Notre méthode d'intervention"
          subtitle="Un processus éprouvé sur plus de 1 000 parkings."
          steps={STEPS.map((s, i) => ({
            ...s,
            image: [undefined, '/assets/images/processus/diagnostic.webp', '/assets/images/processus/preparation.webp', '/assets/images/processus/travaux.webp'][i],
          }))}
          alt
        />
        <ServiceBeforeAfter
          title="Avant / Après"
          subtitle="Le résultat d'un retraçage professionnel."
          pairs={[
            {
              before: { src: '/assets/images/avant-apres/marquage-avant.webp', alt: 'Marquage parking effacé avant intervention' },
              after: { src: '/assets/images/avant-apres/marquage-apres.webp', alt: 'Marquage parking neuf après retraçage' },
              label: 'Retraçage parking',
            },
          ]}
        />
        <RelatedGuides
          title="Guides marquage au sol"
          subtitle="Réglementations, prix et bonnes pratiques pour vos projets de marquage."
          guides={COMPETENCE_GUIDES['tracage-retracage-parking']}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
