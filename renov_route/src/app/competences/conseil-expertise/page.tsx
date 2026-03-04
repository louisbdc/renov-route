'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceSteps,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import Link from 'next/link'
import {
  TbClipboardList,
  TbClipboardCheck,
  TbCurrencyEuro,
  TbUsers,
  TbTarget,
  TbChartBar,
  TbCalendar,
  TbMessageQuestion,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Conseil & expertise', url: 'https://renov-route.com/competences/conseil-expertise' },
]

const FEATURES = [
  { icon: <TbClipboardCheck size={20} />, title: 'Étude de faisabilité', description: 'Analyse technique et économique complète de votre projet avant tout engagement financier.' },
  { icon: <TbCurrencyEuro size={20} />, title: 'Devis détaillé', description: 'Estimation transparente avec décomposition poste par poste, sans surprise à la facturation.' },
  { icon: <TbUsers size={20} />, title: 'Suivi de projet', description: 'Interlocuteur unique de la conception à la réception, disponible à chaque étape.' },
  { icon: <TbTarget size={20} />, title: 'Optimisation du budget', description: 'Recommandations pour arbitrer entre les options et maximiser le retour sur investissement.' },
]

const SERVICES = [
  { icon: <TbChartBar size={22} />, title: 'Audit technique', description: 'Évaluation complète de l\'état de vos infrastructures existantes avec rapport détaillé.' },
  { icon: <TbClipboardCheck size={22} />, title: 'Étude de faisabilité', description: 'Analyse technique et économique avant le lancement de vos projets d\'amélioration.' },
  { icon: <TbCurrencyEuro size={22} />, title: 'Devis personnalisé', description: 'Chiffrage précis et transparent adapté à vos contraintes budgétaires.' },
  { icon: <TbCalendar size={22} />, title: 'Planification', description: 'Établissement d\'un planning réaliste tenant compte de vos contraintes opérationnelles.' },
  { icon: <TbUsers size={22} />, title: 'Suivi de chantier', description: 'Accompagnement et supervision tout au long de la réalisation.' },
  { icon: <TbMessageQuestion size={22} />, title: 'Conseil réglementaire', description: 'Expertise sur les normes applicables et les obligations légales en matière de voirie.' },
]

const STEPS = [
  { step: '01', title: 'Écoute', description: 'Compréhension approfondie de vos besoins, contraintes et objectifs.' },
  { step: '02', title: 'Analyse', description: 'Étude technique du site, évaluation des solutions et des risques.' },
  { step: '03', title: 'Proposition', description: 'Recommandations claires avec plusieurs scénarios chiffrés.' },
  { step: '04', title: 'Accompagnement', description: 'Suivi de la mise en œuvre jusqu\'à la réception finale.' },
]

const FAQ = [
  {
    question: 'À quel stade de mon projet devez-vous intervenir ?',
    answer: 'Plus tôt est mieux. Notre intervention en phase de conception vous permet d\'éviter les erreurs coûteuses, de choisir les bonnes techniques et d\'optimiser votre budget. Nous pouvons aussi intervenir en cours de projet pour un audit ou une expertise technique.',
  },
  {
    question: 'Travaillez-vous avec des maîtres d\'œuvre et bureaux d\'études ?',
    answer: 'Oui, nous collaborons régulièrement avec des maîtres d\'œuvre, architectes et bureaux d\'études. Notre rôle est d\'apporter l\'expertise technique de terrain sur les spécificités du marquage routier, de la signalisation et des revêtements.',
  },
  {
    question: 'Proposez-vous des marchés à bons de commande pour les collectivités ?',
    answer: 'Oui, nous répondons aux appels d\'offres publics et proposons des accords-cadres pour les collectivités locales, bailleurs sociaux et gestionnaires d\'infrastructures qui ont des besoins récurrents.',
  },
]

export default function ConseilExpertisePage() {
  return (
    <>
      <ServiceStructuredData serviceType="conseil-expertise" />
      <BreadcrumbSchema items={BREADCRUMB} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbClipboardList size={28} />}
        heroTitle="Conseil & expertise"
        heroSubtitle="De l'audit de votre infrastructure à la réception du chantier : un accompagnement technique complet pour vos projets de voirie et de marquage."
        descriptionHeading="Un accompagnement technique sur mesure"
        descriptionParagraphs={[
          <>Chaque projet d&apos;infrastructure est unique. Notre équipe vous accompagne de la conception à la réalisation en s&apos;appuyant sur plus de 10 ans d&apos;expérience dans le <Link href="/competences/tracage-retracage-parking" className="text-sky-400 hover:text-sky-300 underline">marquage de parking</Link>, la <Link href="/competences/signalisation-verticale" className="text-sky-400 hover:text-sky-300 underline">signalisation verticale</Link> et les <Link href="/competences/resine-sol-marquage-interieur" className="text-sky-400 hover:text-sky-300 underline">revêtements en résine</Link>.</>,
          'Nous vous aidons à identifier les solutions les plus adaptées à vos contraintes techniques et budgétaires, à anticiper les problèmes réglementaires et à planifier vos travaux pour minimiser les perturbations.',
          <>Notre approche collaborative garantit une compréhension précise de vos enjeux et des recommandations réellement utiles. Découvrez nos <Link href="/realisations" className="text-sky-400 hover:text-sky-300 underline">projets réalisés</Link> ou <Link href="/devis" className="text-sky-400 hover:text-sky-300 underline">demandez un devis gratuit</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Un projet à évaluer ?"
        ctaSubtitle="Premier contact gratuit. Nous nous déplaçons en Rhône-Alpes pour tout audit ou étude de faisabilité."
      >
        <ServiceItemsGrid
          title="Nos services de conseil"
          subtitle="De l'audit initial au suivi de réception."
          items={SERVICES}
          alt
        />
        <ServiceSteps title="Notre méthode d'accompagnement" steps={STEPS} />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
