'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import Link from 'next/link'
import {
  TbBrush,
  TbDroplet,
  TbShieldCheck,
  TbPalette,
  TbShield,
  TbBuildingFactory,
  TbBuildingWarehouse,
  TbTool,
  TbBuildingStore,
  TbAlertTriangle,
  TbArrowsLeftRight,
  TbStack2,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Compétences', url: 'https://renov-route.com/competences' },
  { name: 'Résine de sol & marquage intérieur', url: 'https://renov-route.com/competences/resine-sol-marquage-interieur' },
]

const FEATURES = [
  { icon: <TbShield size={20} />, title: 'Résistance exceptionnelle', description: 'Revêtements résistants au trafic de chariots élévateurs, produits chimiques et charges lourdes.' },
  { icon: <TbDroplet size={20} />, title: 'Facilité d\'entretien', description: 'Surface lisse, non poreuse, facile à nettoyer et imperméable aux huiles et graisses industrielles.' },
  { icon: <TbPalette size={20} />, title: 'Personnalisation complète', description: 'Large choix de couleurs RAL, finitions mate ou satinée, intégration de votre identité visuelle.' },
  { icon: <TbShieldCheck size={20} />, title: 'Options de sécurité', description: 'Revêtements antidérapants (coefficient R11, R12, R13) et marquage de sécurité intégré.' },
]

const SOLUTIONS = [
  { icon: <TbBuildingFactory size={22} />, title: 'Résine époxy industrielle', description: 'Revêtements haute performance pour environnements industriels : résistance chimique et mécanique élevée.' },
  { icon: <TbPalette size={22} />, title: 'Résine décorative', description: 'Solutions esthétiques pour espaces commerciaux, showrooms et zones d\'accueil du public.' },
  { icon: <TbShieldCheck size={22} />, title: 'Résine antidérapante', description: 'Surfaces sécurisées classées R11 à R13 pour zones humides, rampes et entrées de bâtiment.' },
  { icon: <TbArrowsLeftRight size={22} />, title: 'Marquage de circulation', description: 'Délimitation des allées de circulation, sens de passage et zones de manœuvre.' },
  { icon: <TbStack2 size={22} />, title: 'Marquage de zones', description: 'Délimitation de zones de stockage, postes de travail, allées piétonnes et zones de sécurité.' },
  { icon: <TbAlertTriangle size={22} />, title: 'Signalétique de sécurité', description: 'Marquage des sorties de secours, zones dangereuses, extincteurs et issues d\'évacuation.' },
]

const SECTORS = [
  { icon: <TbBuildingFactory size={22} />, title: 'Usines & industries', description: 'Sols résistants aux contraintes de production, aux produits chimiques et aux charges lourdes.' },
  { icon: <TbBuildingWarehouse size={22} />, title: 'Entrepôts & logistique', description: 'Revêtements optimisés pour les trafics de chariots élévateurs et les zones de stockage.' },
  { icon: <TbTool size={22} />, title: 'Ateliers & maintenance', description: 'Solutions durables pour environnements mécaniques avec huiles, carburants et solvants.' },
  { icon: <TbBuildingStore size={22} />, title: 'Espaces commerciaux', description: 'Finitions esthétiques et durables pour les zones d\'accueil du public et showrooms.' },
]

const FAQ = [
  {
    question: 'Quelle épaisseur pour un sol époxy industriel ?',
    answer: 'Une chape époxy industrielle standard fait entre 2 et 5 mm. Pour les environnements très sollicités (chariots élévateurs, produits chimiques), nous recommandons un système en plusieurs couches atteignant 6 à 8 mm.',
  },
  {
    question: 'Faut-il préparer le béton avant application de la résine ?',
    answer: 'Oui, la préparation du support est déterminante : le béton doit être grenaillé, dépoussiéré et avoir une résistance à la traction suffisante (> 1,5 MPa). Nous réalisons ces opérations avant chaque chantier.',
  },
  {
    question: 'Combien de temps faut-il pour refaire un sol époxy ?',
    answer: 'Un sol époxy est praticable à pied après 24 h et accessible aux véhicules légers après 72 h. Pour les charges lourdes, comptez 5 à 7 jours selon la formulation.',
  },
  {
    question: 'Peut-on appliquer de la résine sur un sol existant abîmé ?',
    answer: 'Cela dépend de l\'état du support. Nous réalisons un diagnostic préalable : si le béton est sain mais simplement usé, la résine peut être appliquée après préparation. Si des fissures ou décollements existent, une réparation préalable est nécessaire.',
  },
]

export default function ResineSolMarquageInterieurPage() {
  return (
    <>
      <ServiceStructuredData serviceType="resine-sol-marquage-interieur" />
      <BreadcrumbSchema items={BREADCRUMB} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbBrush size={28} />}
        heroTitle={<>Résine de sol &amp; marquage intérieur</>}
        heroSubtitle="Revêtements époxy haute performance et marquage de zones pour vos espaces industriels, commerciaux et logistiques. Durable, esthétique, conforme."
        descriptionHeading="Solutions de revêtement et marquage"
        descriptionParagraphs={[
          'La résine époxy transforme vos sols industriels et commerciaux en surfaces durables, hygiéniques et esthétiques — parfaites pour les environnements soumis à des contraintes mécaniques ou chimiques importantes.',
          <>Nous réalisons tous types de marquage intérieur : délimitation de zones de travail, allées de circulation, zones de stockage, marquage de sécurité réglementaire et signalétique au sol personnalisée. Pour les parkings, nous assurons aussi le <Link href="/competences/tracage-retracage-parking" className="text-sky-400 hover:text-sky-300 underline">traçage et retraçage de parking</Link> ainsi que la pose d&apos;<Link href="/competences/accessoires-parking" className="text-sky-400 hover:text-sky-300 underline">accessoires de parking</Link>.</>,
          <>Notre expertise couvre les usines, entrepôts, ateliers, centres commerciaux, parkings couverts et espaces logistiques en Rhône-Alpes. Découvrez nos <Link href="/realisations" className="text-sky-400 hover:text-sky-300 underline">réalisations</Link>.</>,
        ]}
        features={FEATURES}
        ctaTitle="Transformez vos sols et espaces intérieurs"
        ctaSubtitle="Diagnostic et devis gratuits. Intervention en région lyonnaise et Rhône-Alpes."
      >
        <ServiceItemsGrid
          title="Nos solutions de résine et marquage"
          subtitle="De la résine industrielle au marquage de sécurité réglementaire."
          items={SOLUTIONS}
          alt
        />
        <ServiceItemsGrid
          title="Secteurs d'intervention"
          subtitle="Nous adaptons nos solutions à chaque environnement de travail."
          items={SECTORS}
          cols={4}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
