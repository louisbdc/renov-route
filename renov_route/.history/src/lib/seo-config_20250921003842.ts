export const seoConfig = {
  baseUrl: 'https://renov-route.com',
  siteName: 'Renov Route',
  defaultImage: {
    url: 'https://renov-route.com/assets/images/og-default.jpg',
    width: 1200,
    height: 630,
    alt: 'Renov Route - Expert Traçage Marquage Routier'
  },
  images: {
    homepage: {
      url: 'https://renov-route.com/assets/images/homepage-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Renov Route - Expert Traçage Marquage Routier France'
    },
    competences: {
      url: 'https://renov-route.com/assets/images/competences-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Compétences Renov Route - Traçage Marquage Routier'
    },
    'reparation-nids-de-poule': {
      url: 'https://renov-route.com/assets/images/reparation-nids-poule-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Réparation Nids de Poule - Renov Route'
    },
    'tracage-retracage-parking': {
      url: 'https://renov-route.com/assets/images/tracage-parking-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Traçage Parking - Renov Route'
    },
    'signalisation-verticale': {
      url: 'https://renov-route.com/assets/images/signalisation-verticale-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Signalisation Verticale - Renov Route'
    },
    'resine-sol-marquage-interieur': {
      url: 'https://renov-route.com/assets/images/resine-sol-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Résine Sol Marquage Intérieur - Renov Route'
    },
    'accessoires-parking': {
      url: 'https://renov-route.com/assets/images/accessoires-parking-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Accessoires Parking - Renov Route'
    },
    'conseil-expertise': {
      url: 'https://renov-route.com/assets/images/conseil-expertise-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Conseil Expertise - Renov Route'
    },
    devis: {
      url: 'https://renov-route.com/assets/images/devis-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Devis Gratuit Renov Route - Traçage Marquage Routier'
    },
    realisations: {
      url: 'https://renov-route.com/assets/images/realisations-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Réalisations Renov Route - Projets Marquage Routier'
    },
    'qui-sommes-nous': {
      url: 'https://renov-route.com/assets/images/qui-sommes-nous-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Qui Sommes Nous - Renov Route'
    }
  },
  twitterImages: {
    homepage: 'https://renov-route.com/assets/images/homepage-twitter.jpg',
    competences: 'https://renov-route.com/assets/images/competences-twitter.jpg',
    'reparation-nids-de-poule': 'https://renov-route.com/assets/images/reparation-nids-poule-twitter.jpg',
    'tracage-retracage-parking': 'https://renov-route.com/assets/images/tracage-parking-twitter.jpg',
    'signalisation-verticale': 'https://renov-route.com/assets/images/signalisation-verticale-twitter.jpg',
    'resine-sol-marquage-interieur': 'https://renov-route.com/assets/images/resine-sol-twitter.jpg',
    'accessoires-parking': 'https://renov-route.com/assets/images/accessoires-parking-twitter.jpg',
    'conseil-expertise': 'https://renov-route.com/assets/images/conseil-expertise-twitter.jpg',
    devis: 'https://renov-route.com/assets/images/devis-twitter.jpg',
    realisations: 'https://renov-route.com/assets/images/realisations-twitter.jpg',
    'qui-sommes-nous': 'https://renov-route.com/assets/images/qui-sommes-nous-twitter.jpg'
  }
};

export const getPageSeoConfig = (pageKey: string) => {
  return {
    ogImage: seoConfig.images[pageKey as keyof typeof seoConfig.images] || seoConfig.defaultImage,
    twitterImage: seoConfig.twitterImages[pageKey as keyof typeof seoConfig.twitterImages] || seoConfig.defaultImage.url
  };
};
