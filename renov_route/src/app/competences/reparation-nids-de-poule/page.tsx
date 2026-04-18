'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceSteps,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import ServiceBeforeAfter from '@/components/ServiceBeforeAfter'
import ServiceComparisonTable from '@/components/ServiceComparisonTable'
import RelatedGuides, { COMPETENCE_GUIDES } from '@/components/RelatedGuides'
import Link from 'next/link'
import {
  TbHammer,
  TbBolt,
  TbShield,
  TbTool,
  TbCar,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Réparation nids de poule', url: 'https://renov-route.com/competences/reparation-nids-de-poule' },
]

const FEATURES = [
  { icon: <TbBolt size={20} />, title: 'Réparation rapide', description: 'Intervention en moins de 2 heures sur la plupart des nids de poule, sans fermeture prolongée de la voie.' },
  { icon: <TbShield size={20} />, title: 'Durabilité prouvée', description: 'Résistance aux intempéries, aux cycles de gel-dégel et au trafic intense pendant des années.' },
  { icon: <TbTool size={20} />, title: 'Résine haute performance', description: 'Formulations polyuréthane et époxy adaptées au type de chaussée et aux conditions climatiques.' },
  { icon: <TbCar size={20} />, title: 'Tous types de voiries', description: 'Routes, parkings, cours intérieures, voies privées, entrepôts et zones logistiques.' },
]

const STEPS = [
  { step: '01', title: 'Diagnostic', description: 'Évaluation de la profondeur, de la surface et de la structure du nid de poule.' },
  { step: '02', title: 'Préparation', description: 'Nettoyage à l\'air comprimé ou à la brosse métallique pour une adhérence optimale de la résine.' },
  { step: '03', title: 'Injection de résine', description: 'Application de la résine haute performance selon nos protocoles techniques éprouvés.' },
  { step: '04', title: 'Contrôle & finition', description: 'Vérification du niveau, protection de surface et délimitation du chantier jusqu\'à durcissement.' },
]

const FAQ = [
  {
    question: 'Quelle est la durée de vie d\'une réparation à la résine ?',
    answer: 'Une réparation correctement réalisée à la résine polyuréthane dure 5 à 10 ans selon les conditions de trafic et les cycles climatiques, soit nettement plus qu\'un enrobé à froid classique.',
  },
  {
    question: 'La circulation peut-elle reprendre immédiatement après réparation ?',
    answer: 'Dans la plupart des cas, la circulation piétonne reprend en moins d\'une heure. Pour les véhicules lourds, nous recommandons un délai de 2 à 4 heures selon la formulation utilisée.',
  },
  {
    question: 'Intervenez-vous sur des routes communales et voies privées ?',
    answer: 'Oui, nous intervenons sur tout type de voirie : routes communales, parkings privés, cours d\'entreprises, allées de résidences et zones logistiques.',
  },
  {
    question: 'Peut-on réparer des nids de poule en hiver ?',
    answer: 'Oui, nous disposons de formulations adaptées aux basses températures (jusqu\'à -5°C) pour des interventions d\'urgence en période hivernale.',
  },
]

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment réparer un nid de poule avec de la résine",
  "description": "Procédé professionnel de réparation de nids de poule par injection de résine haute performance, plus durable que l'enrobé à froid classique.",
  "totalTime": "PT2H",
  "step": STEPS.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.title,
    "text": s.description,
  })),
}

export default function ReparationNidsDePoulePage() {
  return (
    <>
      <ServiceStructuredData serviceType="reparation-nids-de-poule" />
      <BreadcrumbSchema items={BREADCRUMB} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbHammer size={28} />}
        heroTitle="Réparation de nids de poule"
        heroSubtitle="Procédé innovant par injection de résine : une réparation durable, rapide et résistante aux intempéries. Moins coûteuse que le rechargement traditionnel."
        heroBackgroundImage="/assets/images/hero-nids-de-poule.webp"
        heroImageAlt="Réparation de nids de poule par résine polyuréthane sur parking à Lyon"
        accentColor="orange"
        descriptionHeading="Notre expertise en réparation de chaussée"
        descriptionParagraphs={[
          'Les nids de poule dégradent vos infrastructures, endommagent les véhicules et exposent à des risques de responsabilité. Une réparation rapide et efficace est essentielle.',
          <>Notre procédé à la résine révolutionne la maintenance routière. Contrairement à l&apos;enrobé à froid classique qui se dégrade en quelques mois, notre résine polyuréthane offre une adhérence exceptionnelle et une résistance durable aux cycles de gel-dégel. Nous proposons aussi des <Link href="/competences/resine-sol-marquage-interieur" className="text-[#FACC15] hover:text-[#0F172A] underline">revêtements en résine pour sols intérieurs</Link>.</>,
          <>Après réparation, nous assurons le <Link href="/competences/tracage-retracage-parking" className="text-[#FACC15] hover:text-[#0F172A] underline">retraçage complet de votre parking</Link>. Intervention possible sur routes, parkings, cours d&apos;entreprises et voies privées, en région lyonnaise et toute la zone Rhône-Alpes. Consultez nos <Link href="/realisations" className="text-[#FACC15] hover:text-[#0F172A] underline">réalisations</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Nids de poule sur votre voirie ?"
        ctaSubtitle="Diagnostic gratuit sur site, devis sous 48 h. Intervention rapide en Rhône-Alpes."
      >
        <ServiceBeforeAfter
          title="Avant / Après"
          subtitle="Voyez la différence d'une réparation à la résine haute performance."
          pairs={[
            {
              before: { src: '/assets/images/avant-apres/nid-de-poule-avant.webp', alt: 'Nid de poule profond sur asphalte' },
              after: { src: '/assets/images/avant-apres/nid-de-poule-apres.webp', alt: 'Surface réparée à la résine polyuréthane' },
              label: 'Nid de poule',
            },
          ]}
          alt
        />
        <ServiceComparisonTable
          title="Résine vs enrobé à froid"
          subtitle="Pourquoi la résine polyuréthane surpasse l'enrobé classique."
          headers={['Critère', 'Résine polyuréthane', 'Enrobé à froid']}
          rows={[
            { label: 'Durée de vie', values: ['5 à 10 ans', '3 à 12 mois'] },
            { label: 'Temps de séchage', values: ['1 à 2 heures', '24 à 48 heures'] },
            { label: 'Résistance au gel', values: ['Jusqu\'à -5°C', 'Faible'] },
            { label: 'Adhérence', values: ['Liaison chimique', 'Mécanique uniquement'] },
            { label: 'Intervention hiver', values: ['Possible', 'Déconseillée'] },
          ]}
          highlightColumn={1}
        />
        <ServiceSteps title="Notre processus de réparation" steps={STEPS} alt />
        <RelatedGuides
          title="Guides nids de poule & entretien"
          subtitle="Responsabilité, méthodes de réparation et entretien préventif."
          guides={COMPETENCE_GUIDES['reparation-nids-de-poule']}
        />
        <ServiceFAQ items={FAQ} />
      </ServicePageLayout>
    </>
  )
}
