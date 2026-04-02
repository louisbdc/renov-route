'use client'

import ServiceStructuredData from '@/components/ServiceStructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import RelatedGuides, { COMPETENCE_GUIDES } from '@/components/RelatedGuides'
import ServiceBeforeAfter from '@/components/ServiceBeforeAfter'
import { MotionDiv } from '@/components/MotionWrapper'
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
      <FAQSchema items={FAQ} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbBrush size={28} />}
        heroTitle={<>Résine de sol &amp; marquage intérieur à <strong className="text-amber-400">Lyon</strong></>}
        heroSubtitle="Sol industriel Lyon : revêtements époxy haute performance et marquage de zones pour vos espaces industriels, commerciaux et logistiques. Durable, esthétique, conforme."
        heroBackgroundImage="/assets/images/hero-resine-sol.webp"
        heroImageAlt="Application de résine époxy sur sol industriel à Lyon par Rénov Route"
        accentColor="violet"
        descriptionHeading="Sol industriel Lyon : résine epoxy et marquage intérieur"
        descriptionParagraphs={[
          'La résine époxy transforme vos sols industriels et commerciaux en surfaces durables, hygiéniques et esthétiques — parfaites pour les environnements soumis à des contraintes mécaniques ou chimiques importantes. Basés à Lyon, nous intervenons dans toute la région Rhône-Alpes.',
          <>Nous réalisons tous types de marquage intérieur : délimitation de zones de travail, allées de circulation, zones de stockage, marquage de sécurité réglementaire et signalétique au sol personnalisée. Pour les parkings, nous assurons aussi le <Link href="/competences/tracage-retracage-parking" className="text-amber-400 hover:text-amber-300 underline">marquage au sol de parking</Link> ainsi que la pose d&apos;<Link href="/competences/accessoires-parking" className="text-amber-400 hover:text-amber-300 underline">accessoires de parking</Link>.</>,
          <>Notre expertise en sol industriel à Lyon couvre les usines, entrepôts, ateliers, centres commerciaux, parkings couverts et espaces logistiques. Découvrez nos <Link href="/realisations" className="text-amber-400 hover:text-amber-300 underline">réalisations</Link> et consultez notre <Link href="/guides/resine-epoxy-ou-peinture-sol-comparatif" className="text-amber-400 hover:text-amber-300 underline">comparatif résine epoxy vs peinture de sol</Link>.</>,
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
        {/* Palette de couleurs résine époxy */}
        <section className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">Palette de couleurs résine</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">Un large choix de teintes RAL pour s&apos;adapter à votre environnement.</p>
            </div>

            {/* Swatches grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4">
              {[
                { color: '#7B858A', name: 'Gris fenêtre', ral: 'RAL 7040' },
                { color: '#4E5754', name: 'Gris agate', ral: 'RAL 7038' },
                { color: '#2F353B', name: 'Gris anthracite', ral: 'RAL 7016' },
                { color: '#1E2329', name: 'Gris noir', ral: 'RAL 7021' },
                { color: '#C4C4BC', name: 'Gris clair', ral: 'RAL 7035' },
                { color: '#BDB8A3', name: 'Beige gris', ral: 'RAL 7006' },
                { color: '#E8D4B2', name: 'Beige', ral: 'RAL 1015' },
                { color: '#D2A255', name: 'Jaune sable', ral: 'RAL 1002' },
                { color: '#F0CA00', name: 'Jaune sécurité', ral: 'RAL 1003' },
                { color: '#CC4422', name: 'Rouge feu', ral: 'RAL 3000' },
                { color: '#8B3A29', name: 'Rouge brun', ral: 'RAL 3011' },
                { color: '#C55A3B', name: 'Rouge corail', ral: 'RAL 3016' },
                { color: '#E86840', name: 'Rouge orangé', ral: 'RAL 2001' },
                { color: '#59712F', name: 'Vert réséda', ral: 'RAL 6011' },
                { color: '#354733', name: 'Vert mousse', ral: 'RAL 6005' },
                { color: '#20603D', name: 'Vert sécurité', ral: 'RAL 6024' },
                { color: '#2271B3', name: 'Bleu signalisation', ral: 'RAL 5005' },
                { color: '#1D334A', name: 'Bleu acier', ral: 'RAL 5011' },
              ].map((swatch, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group"
                >
                  <div
                    className="aspect-square rounded-lg border border-white/10 group-hover:border-white/30 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-black/30"
                    style={{ backgroundColor: swatch.color }}
                  />
                  <p className="mt-2 text-xs text-gray-400 leading-tight hidden sm:block">{swatch.name}</p>
                  <p className="text-[10px] text-gray-600 hidden sm:block">{swatch.ral}</p>
                </MotionDiv>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Toutes les teintes du nuancier RAL sont disponibles sur demande. Finitions mate, satinée ou brillante.
            </p>
          </div>
        </section>
        <ServiceBeforeAfter
          title="Avant / Après"
          subtitle="La transformation d'un sol industriel avec notre résine époxy."
          pairs={[
            {
              before: { src: '/assets/images/avant-apres/resine-avant.webp', alt: 'Sol béton abîmé avant résine' },
              after: { src: '/assets/images/avant-apres/resine-apres.webp', alt: 'Sol résine époxy neuf' },
              label: 'Sol industriel',
            },
          ]}
          alt
        />
        <ServiceItemsGrid
          title="Secteurs d'intervention"
          subtitle="Nous adaptons nos solutions à chaque environnement de travail."
          items={SECTORS}
          cols={4}
        />
        <RelatedGuides
          title="Guides résine de sol"
          subtitle="Comparatifs, préparation et prix des revêtements de sol."
          guides={COMPETENCE_GUIDES['resine-sol-marquage-interieur']}
        />
        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
