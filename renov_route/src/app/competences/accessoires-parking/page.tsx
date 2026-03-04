'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import Link from 'next/link'
import {
  TbShieldCheck,
  TbShield,
  TbCar,
  TbRuler,
  TbTool,
  TbBuildingCastle,
  TbRoad,
  TbParking,
  TbDoor,
  TbBulb,
  TbClipboardList,
  TbCurrencyEuro,
  TbBolt,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Accessoires de parking', url: 'https://renov-route.com/competences/accessoires-parking' },
]

const FEATURES = [
  { icon: <TbShield size={20} />, title: 'Protection renforcée', description: 'Équipements robustes pour protéger façades, colonnes et infrastructures contre les chocs accidentels.' },
  { icon: <TbCar size={20} />, title: 'Contrôle des flux', description: 'Ralentisseurs et butées pour maîtriser la vitesse et délimiter précisément les zones de stationnement.' },
  { icon: <TbRuler size={20} />, title: 'Installation normée', description: 'Pose professionnelle respectant les normes d\'implantation et les contraintes du site.' },
  { icon: <TbTool size={20} />, title: 'Durabilité & entretien', description: 'Matériaux résistants aux UV, aux chocs et aux conditions extérieures. Maintenance simplifiée.' },
]

const PRODUCTS = [
  { icon: <TbBuildingCastle size={22} />, title: 'Bornes anti-bélier', description: 'Protection des façades, vitrines et accès contre les intrusions et chocs accidentels de véhicules.' },
  { icon: <TbRoad size={22} />, title: 'Ralentisseurs', description: 'Dos d\'âne et coussins berlinois pour réguler la vitesse dans les zones de parking et voies privées.' },
  { icon: <TbParking size={22} />, title: 'Butées de parking', description: 'Délimitation précise des places de stationnement, protection des murs et murets.' },
  { icon: <TbDoor size={22} />, title: 'Barrières & portiques', description: 'Contrôle d\'accès physique et délimitation de zones réservées ou sécurisées.' },
  { icon: <TbBulb size={22} />, title: 'Éclairage de sécurité', description: 'Balises et plots lumineux pour améliorer la visibilité nocturne dans les zones de circulation.' },
  { icon: <TbClipboardList size={22} />, title: 'Signalétique de direction', description: 'Panneaux d\'information et de guidage pour orienter les usagers dans votre parking.' },
]

const BENEFITS = [
  { icon: <TbShieldCheck size={22} />, title: 'Sécurité accrue', description: 'Protection des personnes, véhicules et infrastructures contre les risques de choc.' },
  { icon: <TbCurrencyEuro size={22} />, title: 'Réduction des coûts', description: 'Moins de dommages structurels = moins de réparations et de litiges d\'assurance.' },
  { icon: <TbBolt size={22} />, title: 'Installation rapide', description: 'Mise en place efficace avec interruption minimale de l\'exploitation du parking.' },
  { icon: <TbTool size={22} />, title: 'Faible maintenance', description: 'Équipements conçus pour durer avec un minimum d\'entretien en conditions réelles.' },
]

const FAQ = [
  {
    question: 'Quels types de bornes anti-bélier proposez-vous ?',
    answer: 'Nous installons des bornes fixes en acier galvanisé, des bornes à sceller, des bornes rétractables manuelles ou motorisées et des bollards de design pour espaces commerciaux. Le choix dépend du niveau de protection requis et de l\'esthétique souhaitée.',
  },
  {
    question: 'Les ralentisseurs sont-ils adaptés aux parkings couverts ?',
    answer: 'Oui, nous disposons de modèles spécialement conçus pour les parkings couverts : profil bas pour les véhicules particuliers, matériaux résistants aux huiles et aux produits de lavage, fixation silencieuse.',
  },
  {
    question: 'Peut-on installer des équipements sur une surface existante ?',
    answer: 'Dans la plupart des cas, oui. Nous adaptons les méthodes de fixation à la nature du support (béton, enrobé, résine) pour garantir la tenue dans le temps sans endommager le revêtement.',
  },
]

export default function AccessoiresParkingPage() {
  return (
    <>
      <ServiceStructuredData serviceType="accessoires-parking" />
      <BreadcrumbSchema items={BREADCRUMB} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbShieldCheck size={28} />}
        heroTitle="Accessoires de parking"
        heroSubtitle="Bornes anti-bélier, ralentisseurs, butées et barrières : tous les équipements pour sécuriser et organiser vos espaces de stationnement."
        descriptionHeading="Équipements de sécurité pour parkings"
        descriptionParagraphs={[
          'Les accessoires de parking protègent vos infrastructures, organisent la circulation et préviennent les accidents. Bien choisis et correctement installés, ils réduisent significativement les coûts de réparation et d\'assurance.',
          <>Nous fournissons et posons une gamme complète d&apos;équipements : bornes anti-bélier pour protéger les façades, ralentisseurs pour réguler la vitesse, butées pour délimiter les places, et diverses solutions de contrôle d&apos;accès. Ces équipements complètent le <Link href="/competences/tracage-retracage-parking" className="text-sky-400 hover:text-sky-300 underline">marquage au sol de votre parking</Link> et la <Link href="/competences/signalisation-verticale" className="text-sky-400 hover:text-sky-300 underline">signalisation verticale</Link>.</>,
          <>Chaque équipement est sélectionné pour sa robustesse et sa conformité aux normes. Pour les sols dégradés, nous proposons aussi la <Link href="/competences/reparation-nids-de-poule" className="text-sky-400 hover:text-sky-300 underline">réparation de nids de poule</Link>. Voir nos <Link href="/realisations" className="text-sky-400 hover:text-sky-300 underline">réalisations</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Sécurisez votre parking"
        ctaSubtitle="Conseil et devis gratuits. Fourniture et installation en Rhône-Alpes."
      >
        <ServiceItemsGrid
          title="Nos équipements"
          subtitle="De la borne anti-bélier à la signalétique de direction."
          items={PRODUCTS}
          alt
        />
        <ServiceItemsGrid
          title="Pourquoi équiper votre parking ?"
          items={BENEFITS}
          cols={4}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
