'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceSteps,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import RelatedGuides, { COMPETENCE_GUIDES } from '@/components/RelatedGuides'
import Link from 'next/link'
import {
  TbTrafficCone,
  TbShieldCheck,
  TbRuler,
  TbWheelchair,
  TbBolt,
  TbCircleOff,
  TbAlertTriangle,
  TbInfoCircle,
  TbSpeedboat,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Signalisation verticale', url: 'https://renov-route.com/competences/signalisation-verticale' },
]

const FEATURES = [
  { icon: <TbShieldCheck size={20} />, title: 'Sécurité renforcée', description: 'Panneaux conformes aux normes pour guider les usagers et réduire les risques de collision.' },
  { icon: <TbRuler size={20} />, title: 'Implantation précise', description: 'Respect des distances réglementaires, hauteurs et angles de visibilité selon le Code de la route.' },
  { icon: <TbWheelchair size={20} />, title: 'Accessibilité PMR', description: 'Signalisation spécialisée pour l\'accessibilité des personnes à mobilité réduite, conforme à la législation.' },
  { icon: <TbBolt size={20} />, title: 'Pose rapide', description: 'Intervention efficace pour minimiser les perturbations de circulation pendant les travaux.' },
]

const PANELS = [
  { icon: <TbCircleOff size={22} />, title: 'Panneaux STOP', description: 'Panneaux d\'arrêt obligatoire de catégorie B (cédez le passage, stop) conformes au CERTU.' },
  { icon: <TbAlertTriangle size={22} />, title: 'Cédez le passage', description: 'Signalisation de priorité pour organiser les flux et sécuriser les intersections.' },
  { icon: <TbWheelchair size={22} />, title: 'Signalisation PMR', description: 'Panneaux et pictogrammes réglementaires pour les places et accès handicapés.' },
  { icon: <TbCircleOff size={22} />, title: 'Sens interdits', description: 'Panneaux d\'interdiction de circulation adaptés à vos zones de parking et voies privées.' },
  { icon: <TbSpeedboat size={22} />, title: 'Limitations de vitesse', description: 'Panneaux de limitation adaptés aux zones de parking (5, 10, 20 km/h).' },
  { icon: <TbInfoCircle size={22} />, title: 'Signalétique d\'information', description: 'Panneaux directionnels, informations pratiques et signalétique personnalisée.' },
]

const STEPS = [
  { step: '01', title: 'Analyse du site', description: 'Étude des flux de circulation et identification des zones à signaler en priorité.' },
  { step: '02', title: 'Sélection des panneaux', description: 'Choix des panneaux adaptés au contexte réglementaire et aux contraintes du site.' },
  { step: '03', title: 'Préparation', description: 'Vérification des emplacements, préparation des supports et ancrage au sol.' },
  { step: '04', title: 'Installation', description: 'Pose professionnelle avec contrôle de la verticalité et de la hauteur réglementaire.' },
]

const FAQ = [
  {
    question: 'Quelles normes encadrent la signalisation verticale en France ?',
    answer: 'La signalisation verticale est régie par l\'Instruction Interministérielle sur la Signalisation Routière (IISR). Pour les parkings privés, les normes NF P 98-300 et les recommandations du CERTU s\'appliquent.',
  },
  {
    question: 'Pouvez-vous reprendre une signalisation existante non conforme ?',
    answer: 'Oui, nous réalisons des audits de signalisation et proposons un plan de mise en conformité avec remplacement ou repositionnement des panneaux défectueux ou mal implantés.',
  },
  {
    question: 'Intervenez-vous pour des résidences et parkings privés ?',
    answer: 'Absolument. Nous travaillons pour les syndics de copropriété, gestionnaires de parkings, bailleurs sociaux, entreprises et collectivités en Rhône-Alpes.',
  },
]

export default function SignalisationVerticalePage() {
  return (
    <>
      <ServiceStructuredData serviceType="signalisation-verticale" />
      <BreadcrumbSchema items={BREADCRUMB} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbTrafficCone size={28} />}
        heroTitle="Signalisation verticale"
        heroSubtitle="Installation et remplacement de tous types de panneaux : STOP, cédez le passage, PMR, sens interdits. Conformité réglementaire garantie."
        heroBackgroundImage="/assets/images/hero-signalisation.webp"
        heroImageAlt="Installation de panneaux de signalisation verticale sur parking par Rénov Route"
        accentColor="emerald"
        descriptionHeading="Panneaux de signalisation professionnels"
        descriptionParagraphs={[
          'La signalisation verticale est indispensable pour organiser la circulation et garantir la sécurité dans les parkings et espaces de stationnement. Elle guide les usagers et informe sur les règles applicables.',
          <>Nous installons tous types de panneaux : stop, cédez le passage, PMR, sens interdits, limitations de vitesse et panneaux d&apos;information. La signalisation verticale se combine avec le <Link href="/competences/tracage-retracage-parking" className="text-amber-400 hover:text-amber-300 underline">marquage au sol de votre parking</Link> et la pose d&apos;<Link href="/competences/accessoires-parking" className="text-amber-400 hover:text-amber-300 underline">accessoires de sécurité</Link>.</>,
          <>Notre expertise couvre les parkings privés, espaces commerciaux, zones industrielles et collectivités. Consultez nos <Link href="/realisations" className="text-amber-400 hover:text-amber-300 underline">réalisations</Link> pour des exemples concrets.</>,
        ]}
        features={FEATURES}
        ctaTitle="Mettez votre signalisation en conformité"
        ctaSubtitle="Audit et devis gratuits. Intervention en Rhône-Alpes et région lyonnaise."
      >
        <ServiceItemsGrid
          title="Types de panneaux installés"
          subtitle="Gamme complète pour tous vos besoins de signalisation."
          items={PANELS}
          alt
        />
        <ServiceSteps title="Notre processus d'installation" steps={STEPS} />
        <RelatedGuides
          title="Guides signalisation"
          subtitle="Réglementation, types de panneaux et normes en vigueur."
          guides={COMPETENCE_GUIDES['signalisation-verticale']}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
