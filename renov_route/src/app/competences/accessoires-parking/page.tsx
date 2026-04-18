'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import ServiceProductCatalog from '@/components/ServiceProductCatalog'
import RelatedGuides, { COMPETENCE_GUIDES } from '@/components/RelatedGuides'
import Link from 'next/link'
import {
  TbShieldCheck,
  TbShield,
  TbCar,
  TbRuler,
  TbTool,
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
        heroBackgroundImage="/assets/images/realisations/em-lyon-bornes-anti-stationnement_1.avif"
        heroImageAlt="Bornes anti-stationnement installées à EM Lyon par Rénov Route"
        accentColor="amber"
        descriptionHeading="Équipements de sécurité pour parkings"
        descriptionParagraphs={[
          'Les accessoires de parking protègent vos infrastructures, organisent la circulation et préviennent les accidents. Bien choisis et correctement installés, ils réduisent significativement les coûts de réparation et d\'assurance.',
          <>Nous fournissons et posons une gamme complète d&apos;équipements : bornes anti-bélier pour protéger les façades, ralentisseurs pour réguler la vitesse, butées pour délimiter les places, et diverses solutions de contrôle d&apos;accès. Ces équipements complètent le <Link href="/competences/tracage-retracage-parking" className="text-[#FACC15] hover:text-[#0F172A] underline">marquage au sol de votre parking</Link> et la <Link href="/competences/signalisation-verticale" className="text-[#FACC15] hover:text-[#0F172A] underline">signalisation verticale</Link>.</>,
          <>Chaque équipement est sélectionné pour sa robustesse et sa conformité aux normes. Pour les sols dégradés, nous proposons aussi la <Link href="/competences/reparation-nids-de-poule" className="text-[#FACC15] hover:text-[#0F172A] underline">réparation de nids de poule</Link>. Voir nos <Link href="/realisations" className="text-[#FACC15] hover:text-[#0F172A] underline">réalisations</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Sécurisez votre parking"
        ctaSubtitle="Conseil et devis gratuits. Fourniture et installation en Rhône-Alpes."
      >
        <ServiceProductCatalog
          title="Nos équipements"
          subtitle="De la borne anti-bélier à la signalétique de direction."
          products={[
            { name: 'Ralentisseur', description: 'Dos d\'âne en caoutchouc noir et jaune, haute visibilité.', image: '/assets/images/equipements/ralentisseur.webp', specs: ['Dimensions standard 50x40 cm', 'Bandes jaunes rétroréfléchissantes', 'Fixation par chevilles'] },
            { name: 'Butée de roue', description: 'Butée en caoutchouc recyclé avec bandes jaunes.', image: '/assets/images/equipements/butee-roue.webp', specs: ['Longueur 55 cm', 'Bandes jaunes intégrées', 'Fixation au sol incluse'] },
          ]}
          cols={2}
          alt
        />
        <ServiceItemsGrid
          title="Pourquoi équiper votre parking ?"
          items={BENEFITS}
          cols={4}
        />
        <RelatedGuides
          title="Guides accessoires & équipements"
          subtitle="Normes, types et prix des équipements de parking."
          guides={COMPETENCE_GUIDES['accessoires-parking']}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
