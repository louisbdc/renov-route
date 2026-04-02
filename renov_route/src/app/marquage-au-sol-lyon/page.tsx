'use client'

import StructuredData from '@/components/StructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import ServiceProcessTimeline from '@/components/ServiceProcessTimeline'
import Link from 'next/link'
import {
  TbMapPin,
  TbParking,
  TbRoad,
  TbBuildingFactory2,
  TbBallFootball,
  TbWheelchair,
  TbPalette,
  TbCertificate,
  TbClock,
  TbShield,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Marquage au sol Lyon', url: 'https://renov-route.com/marquage-au-sol-lyon/' },
]

const FEATURES = [
  { icon: <TbCertificate size={20} />, title: 'Depuis 2014 à Lyon', description: "Plus de 1 000 chantiers réalisés en Rhône-Alpes. Nous connaissons le terrain, les contraintes locales et les réglementations en vigueur." },
  { icon: <TbShield size={20} />, title: 'Peintures certifiées NF EN 1436', description: 'Produits routiers haute résistance aux UV, intempéries et trafic intense. Résultat durable, même sur les parkings à fort passage.' },
  { icon: <TbClock size={20} />, title: 'Devis sous 24h, intervention rapide', description: 'Visite sur site gratuite, devis détaillé en 24h. Intervention planifiée selon vos contraintes (horaires, activité).' },
  { icon: <TbPalette size={20} />, title: 'Marquage sur mesure', description: 'Couleurs personnalisées, logos, numérotation, signalétique adaptée à votre identité visuelle et vos besoins spécifiques.' },
]

const SERVICES = [
  { icon: <TbParking size={22} />, title: 'Marquage de parking', description: "Places, flèches, passages piétons, zones PMR, numérotation. Parkings de centres commerciaux, entreprises, hôtels, copropriétés.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbRoad size={22} />, title: 'Marquage routier & voirie', description: "Signalisation horizontale : lignes, bandes, flèches directionnelles, zébras, îlots. Voirie publique et privée.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbBuildingFactory2 size={22} />, title: 'Marquage industriel', description: "Marquage au sol d'entrepôts, ateliers et zones logistiques : allées de circulation, zones de stockage, cheminements piétons.", link: '/competences/resine-sol-marquage-interieur/' },
  { icon: <TbBallFootball size={22} />, title: 'Traçage sportif', description: 'Terrains de basket, tennis, handball, badminton. Peintures conformes aux normes sportives, intérieures et extérieures.', link: '/competences/tracage-retracage-parking/' },
  { icon: <TbWheelchair size={22} />, title: 'Mise en conformité PMR', description: "Places handicapées, bandes de guidage, signalétique au sol conforme aux normes d'accessibilité. Mise aux normes de parkings existants.", link: '/guides/mise-en-conformite-parking-pmr/' },
  { icon: <TbPalette size={22} />, title: 'Résine de sol & revêtement', description: 'Résine epoxy, polyuréthane, revêtements antidérapants pour sols industriels, garages, ateliers. Protection et marquage intérieur.', link: '/competences/resine-sol-marquage-interieur/' },
]

const STEPS = [
  { step: '01', title: 'Contact & visite sur site', description: "Prise de contact, visite gratuite pour analyser votre besoin, mesurer les surfaces et identifier les contraintes (trafic, accès, état du sol)." },
  { step: '02', title: 'Devis détaillé sous 24h', description: "Plan de marquage sur mesure avec estimation précise. Choix des produits adaptés à votre usage (parking, voirie, industriel)." },
  { step: '03', title: 'Préparation du chantier', description: "Balayage mécanique, effacement de l'ancien marquage si nécessaire, réparation des zones dégradées (nids de poule, fissures)." },
  { step: '04', title: 'Réalisation & contrôle qualité', description: "Application du marquage par nos équipes. Contrôle qualité en fin de chantier. Remise en circulation selon le temps de séchage (1 à 3h)." },
]

const FAQ = [
  {
    question: 'Quels types de marquage au sol réalisez-vous à Lyon ?',
    answer: "Nous couvrons tous les types de marquage : parking (places, flèches, PMR), voirie (lignes, passages piétons, zébras), industriel (entrepôts, zones logistiques), sportif (terrains intérieurs et extérieurs) et résine de sol (epoxy, polyuréthane). Nous intervenons sur toute la région lyonnaise et Rhône-Alpes.",
  },
  {
    question: 'Quelle est votre zone d\'intervention autour de Lyon ?',
    answer: "Basés à Tassin-la-Demi-Lune (69160), nous intervenons dans toute l'agglomération lyonnaise (Villeurbanne, Vénissieux, Vaulx-en-Velin, Bron, Écully...) ainsi que dans tout le département du Rhône et la région Auvergne-Rhône-Alpes.",
  },
  {
    question: 'Combien coûte un marquage au sol à Lyon ?',
    answer: "Le prix dépend du type de marquage, de la surface et du produit utilisé. À titre indicatif : le marquage de parking démarre à environ 2,50€/ml pour les lignes simples. Nous établissons un devis gratuit et personnalisé après visite sur site. Consultez notre guide des prix pour plus de détails.",
  },
  {
    question: 'Combien de temps dure un marquage au sol ?',
    answer: "Avec nos peintures routières certifiées NF EN 1436, un marquage au sol dure en moyenne 2 à 5 ans selon le trafic et l'exposition. Les résines epoxy offrent une durabilité encore supérieure (5 à 10 ans) pour les sols industriels intérieurs.",
  },
  {
    question: 'Intervenez-vous en dehors des heures ouvrées ?',
    answer: "Oui, nous planifions les interventions selon vos contraintes : nuit, week-end, jours fériés. C'est particulièrement utile pour les parkings de centres commerciaux ou les voiries publiques où le trafic doit être maintenu.",
  },
  {
    question: 'Faut-il préparer le sol avant le marquage ?',
    answer: "Nous prenons en charge la préparation complète : balayage mécanique, effacement de l'ancien marquage, réparation des nids de poule et fissures. Un sol bien préparé garantit un marquage durable et net.",
  },
]

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marquage au sol Lyon",
  "description": "Entreprise de marquage au sol à Lyon et Rhône-Alpes. Traçage parking, marquage routier, marquage industriel, traçage sportif, mise en conformité PMR.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Rénov Route",
    "telephone": "07 86 81 96 92",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6, allée du ruisseau de Ribbes",
      "addressLocality": "Tassin-la-Demi-Lune",
      "postalCode": "69160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.7640",
      "longitude": "4.8357"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Rhône"
    }
  },
  "serviceType": [
    "Marquage au sol",
    "Marquage de parking",
    "Marquage routier",
    "Marquage industriel",
    "Traçage sportif",
    "Mise en conformité PMR",
    "Résine de sol"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Devis gratuit sous 24h"
  }
}

export default function MarquageAuSolLyonPage() {
  return (
    <>
      <StructuredData type="homepage" />
      <BreadcrumbSchema items={BREADCRUMB} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <FAQSchema items={FAQ} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbMapPin size={28} />}
        heroTitle={<>Marquage au sol à <strong className="text-amber-400">Lyon</strong></>}
        heroSubtitle="Entreprise spécialisée en marquage au sol depuis 2014. Parking, voirie, industriel, sport, PMR : nous intervenons sur tous types de surfaces à Lyon et en Rhône-Alpes."
        heroBackgroundImage="/assets/images/realisations/lidl-verpiliere-parking_1.avif"
        heroImageAlt="Marquage au sol parking à Lyon par Rénov Route"
        accentColor="amber"
        descriptionHeading="Votre entreprise de marquage au sol à Lyon"
        descriptionParagraphs={[
          "Depuis 2014, Rénov Route est spécialisée dans le marquage au sol à Lyon et dans toute la région Rhône-Alpes. Avec plus de 1 000 chantiers réalisés, nous accompagnons les entreprises, collectivités, copropriétés et gestionnaires de sites dans tous leurs projets de signalisation horizontale.",
          <>Nos équipes interviennent sur tous types de surfaces et de marquages : <Link href="/competences/tracage-retracage-parking/" className="text-amber-400 hover:text-amber-300 underline">traçage de parking</Link>, marquage de voirie, <Link href="/competences/resine-sol-marquage-interieur/" className="text-amber-400 hover:text-amber-300 underline">résine de sol industriel</Link>, traçage sportif et <Link href="/guides/mise-en-conformite-parking-pmr/" className="text-amber-400 hover:text-amber-300 underline">mise en conformité PMR</Link>.</>,
          <>Nous utilisons exclusivement des peintures routières certifiées NF EN 1436 et des résines haute performance pour garantir un résultat durable. Si votre sol nécessite une remise en état avant le marquage, nous assurons également la <Link href="/competences/reparation-nids-de-poule/" className="text-amber-400 hover:text-amber-300 underline">réparation de nids de poule</Link> et la préparation de surface.</>,
        ]}
        features={FEATURES}
        ctaTitle="Un projet de marquage au sol à Lyon ?"
        ctaSubtitle="Visite sur site gratuite, devis détaillé sous 24h. Nous intervenons dans toute l'agglomération lyonnaise et en Rhône-Alpes."
      >
        <ServiceItemsGrid
          title="Tous nos services de marquage au sol"
          subtitle="Parking, voirie, industriel, sport, PMR : une expertise complète."
          items={SERVICES.map(({ link: _link, ...item }) => item)}
          cols={3}
          alt
        />

        {/* Links to detailed service pages */}
        <section className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              En savoir plus sur nos prestations
            </h2>
            <p className="text-gray-400 mb-8">
              Chaque type de marquage a ses spécificités. Consultez nos pages dédiées pour plus de détails.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service, i) => (
                <Link
                  key={i}
                  href={service.link}
                  className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-[#1a1f2a] hover:border-amber-500/30 hover:bg-[#1d222d] transition-colors group"
                >
                  <div className="text-amber-400 mt-0.5 flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">Voir le détail</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 sm:py-20 px-4 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              Notre zone d&apos;intervention
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Basés à <strong className="text-white">Tassin-la-Demi-Lune (69160)</strong>, nous intervenons dans toute l&apos;agglomération lyonnaise et la région Auvergne-Rhône-Alpes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { zone: 'Lyon et Grand Lyon', villes: 'Lyon 1er au 9e, Villeurbanne, Vénissieux, Vaulx-en-Velin, Bron, Saint-Priest' },
                { zone: 'Ouest Lyonnais', villes: 'Tassin, Écully, Oullins, Francheville, Sainte-Foy-lès-Lyon, Craponne' },
                { zone: 'Nord et Est', villes: 'Caluire, Rillieux, Meyzieu, Décines, Chassieu, Genas, Miribel' },
                { zone: 'Rhône-Alpes', villes: 'Saint-Étienne, Grenoble, Valence, Vienne, Bourgoin-Jallieu, Villefranche' },
              ].map((area, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/10 bg-[#1a1f2a]">
                  <h3 className="font-semibold text-white mb-2">{area.zone}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.villes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceProcessTimeline
          title="Comment se déroule un chantier de marquage ?"
          subtitle="Un processus éprouvé, de la prise de contact à la réception du chantier."
          steps={STEPS}
          alt
        />

        {/* Guides & resources */}
        <section className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              Guides pratiques
            </h2>
            <p className="text-gray-400 mb-8">Prix, normes, réglementation : nos guides pour préparer votre projet.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Prix marquage au sol parking', href: '/guides/prix-marquage-sol-parking/', desc: 'Tarifs au mètre linéaire, par place, devis type.' },
                { title: 'Mise en conformité PMR', href: '/guides/mise-en-conformite-parking-pmr/', desc: 'Obligations légales, normes, sanctions.' },
                { title: 'Comment tracer un parking', href: '/guides/comment-tracer-parking/', desc: 'Étapes, dimensions, réglementation.' },
                { title: 'Résine epoxy ou peinture de sol', href: '/guides/resine-epoxy-ou-peinture-sol-comparatif/', desc: 'Comparatif, avantages, cas d\'usage.' },
                { title: 'Panneau limitation vitesse parking', href: '/guides/panneau-limitation-vitesse-parking/', desc: 'Obligations, types de panneaux, prix.' },
                { title: 'Tous nos guides', href: '/guides/', desc: '40+ articles sur le marquage au sol.' },
              ].map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="p-5 rounded-xl border border-white/10 bg-[#1a1f2a] hover:border-amber-500/30 hover:bg-[#1d222d] transition-colors group"
                >
                  <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors mb-1">{guide.title}</h3>
                  <p className="text-gray-400 text-sm">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
