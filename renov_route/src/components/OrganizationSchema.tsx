const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://renov-route.com/#organization',
  name: "Rénov'Route",
  legalName: "RENOV'ROUTE SARL",
  alternateName: 'Renov Route',
  url: 'https://renov-route.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://renov-route.com/assets/logos/logo.avif',
    contentUrl: 'https://renov-route.com/assets/logos/logo.avif',
  },
  foundingDate: '2016',
  description:
    'Entreprise française spécialisée dans le marquage au sol, le traçage de parking, la réparation de nids de poule et la signalisation horizontale. Plus de 1 000 parkings réalisés depuis 2016.',
  slogan: 'Experts du marquage au sol et de la rénovation parking',
  knowsAbout: [
    'Marquage routier',
    'Traçage parking',
    'Signalisation horizontale',
    'Réparation chaussée',
    'Résine polyuréthane',
    'Norme NF EN 1436',
    'Mise en conformité PMR',
    'Enrobé à froid',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'Certification NF EN 1436 — Signalisation horizontale',
  },
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: '81874551500010' },
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: '818745515' },
    { '@type': 'PropertyValue', propertyID: 'RCS', value: 'Lyon' },
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://renov-route.com/#xavier-de-caumont',
    name: 'Xavier de Caumont',
    jobTitle: 'Fondateur, Directeur de la publication',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33786819692',
      contactType: 'customer service',
      email: 'contact@renov-route.com',
      availableLanguage: ['French'],
      areaServed: 'FR',
    },
  ],
  sameAs: [
    'https://share.google/EtiXRDpgqMZlrsGzF',
    'https://www.linkedin.com/company/renov%27route/',
    'https://www.pagesjaunes.fr/pros/56570890',
    'https://annuaire-entreprises.data.gouv.fr/entreprise/renov-route-818745515',
    'https://www.pappers.fr/entreprise/renov-route-818745515',
    'https://www.societe.com/societe/renov-route-818745515.html',
    'https://www.facebook.com/renovroute',
    'https://www.instagram.com/renov_route',
  ],
}

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://renov-route.com/#website',
  name: "Rénov'Route",
  alternateName: 'Renov Route',
  url: 'https://renov-route.com/',
  inLanguage: 'fr-FR',
  publisher: { '@id': 'https://renov-route.com/#organization' },
}

// Déclare la navigation principale à Google (aide à la sélection des sitelinks).
const SITE_NAV_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Navigation principale',
  itemListElement: [
    { '@type': 'SiteNavigationElement', position: 1, name: 'Compétences', url: 'https://renov-route.com/competences/' },
    { '@type': 'SiteNavigationElement', position: 2, name: 'Marquage au sol Lyon', url: 'https://renov-route.com/marquage-au-sol-lyon/' },
    { '@type': 'SiteNavigationElement', position: 3, name: 'Guides', url: 'https://renov-route.com/guides/' },
    { '@type': 'SiteNavigationElement', position: 4, name: 'Réalisations', url: 'https://renov-route.com/realisations/' },
    { '@type': 'SiteNavigationElement', position: 5, name: 'Qui sommes-nous', url: 'https://renov-route.com/qui-sommes-nous/' },
    { '@type': 'SiteNavigationElement', position: 6, name: 'Devis gratuit', url: 'https://renov-route.com/devis/' },
  ],
}

export default function OrganizationSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_NAV_JSONLD) }}
      />
    </>
  )
}
