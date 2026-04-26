'use client'

type ServiceSlug =
  | 'reparation-nids-de-poule'
  | 'tracage-retracage-parking'
  | 'signalisation-verticale'
  | 'resine-sol-marquage-interieur'
  | 'accessoires-parking'
  | 'conseil-expertise'

interface ServiceStructuredDataProps {
  serviceType: ServiceSlug
}

interface ServiceDetails {
  name: string
  description: string
  image: string
  serviceOutput: string
  offerName: string
  itemOffered: Array<{ name: string; description: string }>
}

const SERVICES: Record<ServiceSlug, ServiceDetails> = {
  'reparation-nids-de-poule': {
    name: 'Réparation de nids de poule',
    description:
      'Réparation professionnelle de nids de poule à la résine polyuréthane haute performance. Procédé durable (5 à 10 ans), résistant aux intempéries et au trafic. Intervention rapide sur routes, parkings et voies privées.',
    image: 'https://renov-route.com/assets/images/realisations/civrieux-zebra-fosse_1.avif',
    serviceOutput: 'Chaussée réparée, durée de vie 5-10 ans',
    offerName: 'Prestations de réparation nids de poule',
    itemOffered: [
      { name: 'Diagnostic de nids de poule', description: 'Analyse des dommages et évaluation des besoins' },
      { name: 'Réparation à la résine polyuréthane', description: 'Application de résine haute performance' },
      { name: 'Contrôle qualité et finition', description: 'Vérification et finition professionnelle' },
    ],
  },
  'tracage-retracage-parking': {
    name: 'Traçage et retraçage de parking',
    description:
      "Marquage au sol professionnel et durable pour parkings d'entreprise, de copropriété et de grande distribution. Peintures certifiées NF EN 1436, conformité aux normes PMR et respect des standards de signalisation horizontale.",
    image: 'https://renov-route.com/assets/images/realisations/intermarche-neuville-parking_2.avif',
    serviceOutput: 'Parking tracé selon norme NF EN 1436',
    offerName: 'Prestations de traçage parking',
    itemOffered: [
      { name: 'Traçage de places de stationnement', description: 'Marquage standard, VL, PL, deux-roues' },
      { name: 'Places PMR', description: 'Conformité arrêté 1er août 2006 (3,30×5 m, bande 0,80 m)' },
      { name: 'Flèches et symboles', description: 'Sens de circulation, pictogrammes' },
      { name: 'Passages piétons et zébras', description: 'Conformité réglementation parking' },
    ],
  },
  'signalisation-verticale': {
    name: 'Signalisation verticale',
    description:
      'Fourniture et pose de panneaux verticaux de parking : stop, cédez le passage, panneaux PMR, limitation de vitesse, sens interdit. Installation conforme aux normes en vigueur.',
    image: 'https://renov-route.com/assets/images/realisations/avenieres-pmr-parcours_1.avif',
    serviceOutput: 'Panneaux posés et conformes',
    offerName: 'Prestations de signalisation verticale',
    itemOffered: [
      { name: 'Panneaux PMR', description: 'Marquage places handicapés conforme' },
      { name: 'Panneaux de circulation', description: 'Stop, cédez le passage, sens interdit' },
      { name: 'Limitation de vitesse', description: 'Panneaux réglementaires parking' },
    ],
  },
  'resine-sol-marquage-interieur': {
    name: "Résine de sol et marquage d'intérieur",
    description:
      "Application de résine époxy et polyuréthane pour sols industriels, entrepôts, parkings souterrains, showrooms. Marquage d'intérieur durable et conforme aux exigences sécurité et ERP.",
    image: 'https://renov-route.com/assets/images/realisations/carglass-angouleme-zebra_1.avif',
    serviceOutput: 'Sol résiné et marqué',
    offerName: 'Prestations de résine de sol',
    itemOffered: [
      { name: 'Résine époxy', description: 'Pour entrepôts, zones industrielles, ERP' },
      { name: 'Résine polyuréthane', description: 'Pour parkings souterrains, zones à fort trafic' },
      { name: "Marquage d'intérieur", description: 'Pictogrammes, allées, zones de sécurité' },
    ],
  },
  'accessoires-parking': {
    name: 'Accessoires de parking',
    description:
      "Fourniture et pose d'équipements de sécurité et d'organisation : bornes anti-bélier, barrières, butées de parking, ralentisseurs, dos-d'âne, protections d'angle.",
    image: 'https://renov-route.com/assets/images/realisations/em-lyon-bornes-anti-stationnement_1.avif',
    serviceOutput: 'Accessoires parking posés',
    offerName: 'Prestations accessoires parking',
    itemOffered: [
      { name: 'Bornes anti-bélier', description: 'Protection contre intrusions véhicules' },
      { name: 'Butées de parking', description: 'Butées béton ou caoutchouc' },
      { name: 'Ralentisseurs', description: 'Ralentisseurs et dos-d’âne conformes' },
      { name: 'Barrières', description: 'Barrières levantes, portiques' },
    ],
  },
  'conseil-expertise': {
    name: 'Conseil et expertise parking',
    description:
      "Audit de parking, étude de faisabilité, diagnostic de conformité PMR, aide à la rédaction de cahier des charges et suivi de projet pour copropriétés, entreprises et collectivités.",
    image: 'https://renov-route.com/assets/images/realisations/lidl-normes-pmr-resine_1.avif',
    serviceOutput: 'Rapport d’audit + préconisations',
    offerName: 'Prestations de conseil',
    itemOffered: [
      { name: 'Audit de parking', description: 'Diagnostic complet état et conformité' },
      { name: 'Étude de faisabilité', description: 'Analyse technique et budgétaire' },
      { name: 'Conformité PMR', description: 'Diagnostic et plan de mise en conformité' },
    ],
  },
}

export default function ServiceStructuredData({ serviceType }: ServiceStructuredDataProps) {
  const détails = SERVICES[serviceType]
  const url = `https://renov-route.com/competences/${serviceType}/`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: détails.name,
    description: détails.description,
    url,
    image: détails.image,
    serviceType: détails.name,
    category: 'Construction Service',
    serviceOutput: détails.serviceOutput,
    inLanguage: 'fr-FR',
    provider: { '@id': 'https://renov-route.com/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Saint-Étienne' },
      { '@type': 'City', name: 'Grenoble' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      name: 'Entreprises, copropriétés, collectivités, grande distribution',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Devis gratuit sous 24h, diagnostic gratuit sur site',
      availability: 'https://schema.org/InStock',
      seller: { '@id': 'https://renov-route.com/#organization' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: détails.offerName,
      itemListElement: détails.itemOffered.map(item => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
        },
      })),
    },
  }

  return (
    <script
      id={`service-structured-data-${serviceType}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
