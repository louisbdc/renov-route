
export interface PartnerMapping {
  name: string;
  logo: string;
  isImage: boolean;
  relatedProjects: string[]; // IDs des projets liés
}

export const partnerMappings: PartnerMapping[] = [
  { 
    name: 'Carrefour', 
    logo: '/assets/images/references/Logo_Carrefour.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Carrefour dans les données actuelles
  },
  { 
    name: 'Lidl', 
    logo: '/assets/images/references/Lidl-Logo.webp', 
    isImage: true,
    relatedProjects: ['lidl-verpiliere-parking']
  },
  { 
    name: 'Intermarché', 
    logo: '/assets/images/references/Intermarche_logo.webp', 
    isImage: true,
    relatedProjects: ['intermarche-neuville-parking']
  },
  { 
    name: 'Richardson', 
    logo: '/assets/images/references/Logo-RICHARDSON.webp', 
    isImage: true,
    relatedProjects: ['richardson-saint-etienne-passage']
  },
  { 
    name: 'ALDI', 
    logo: '/assets/images/references/Aldi_logo.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet ALDI dans les données actuelles
  },
  { 
    name: 'Apave', 
    logo: '/assets/images/references/Apave-Logo.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Apave dans les données actuelles
  },
  { 
    name: 'Brico Dépôt', 
    logo: '/assets/images/references/Brico_Depot.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Brico Dépôt dans les données actuelles
  },
  { 
    name: 'McDonald\'s', 
    logo: '/assets/images/references/McDonald_logo.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet McDonald's dans les données actuelles
  },
  { 
    name: 'Armée de Terre', 
    logo: '/assets/images/references/Logo_of_the_French_Army.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Armée de Terre dans les données actuelles
  },
  { 
    name: 'Suez', 
    logo: '/assets/images/references/Logo_Suez.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Suez dans les données actuelles
  },
  { 
    name: 'Groupe Casino', 
    logo: '/assets/images/references/Logo_of_Casino.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Casino dans les données actuelles
  },
  { 
    name: 'Armée de l\'Air', 
    logo: '/assets/images/references/logo-armee-air.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Armée de l'Air dans les données actuelles
  },
  { 
    name: 'La Halle', 
    logo: '/assets/images/references/la-halle.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet La Halle dans les données actuelles
  },
  { 
    name: 'Sesar Énergies SUD-EST', 
    logo: '/assets/images/references/sesar_logo.avif', 
    isImage: true,
    relatedProjects: [] // Aucun projet Sesar dans les données actuelles
  },
  { 
    name: 'Galyo Administrateurs de biens', 
    logo: '/assets/images/references/galyo.avif', 
    isImage: true,
    relatedProjects: [] // Aucun projet Galyo dans les données actuelles
  },
  { 
    name: 'Kiloutou', 
    logo: '/assets/images/references/Kiloutou_logo.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Kiloutou dans les données actuelles
  },
  { 
    name: 'Transports Hexa Trans', 
    logo: '/assets/images/references/logo-hexatrans.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet Hexa Trans dans les données actuelles
  },
  { 
    name: 'La Poste', 
    logo: '/assets/images/references/Logo-laposte.webp', 
    isImage: true,
    relatedProjects: [] // Aucun projet La Poste dans les données actuelles
  },
  {
    name: 'Burger King',
    logo: '/assets/images/references/burger_king_logo.png',
    isImage: true,
    relatedProjects: [] // Aucun projet Burger King dans les données actuelles
  },
  {
    name: 'Carglass',
    logo: '/assets/images/references/Carglass_logo.png',
    isImage: true,
    relatedProjects: [] // Aucun projet Carglass dans les données actuelles
  },
  {
    name: 'Feu Vert',
    logo: '/assets/images/references/feu_vert_logo.png',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'Amcor',
    logo: '/assets/images/references/amcor_logo.png',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'Aubert & Duval',
    logo: '/assets/images/references/aubert_duval_logo.jpg',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'SPIE',
    logo: '/assets/images/references/spie_logo.png',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'ETTP',
    logo: '/assets/images/references/ettp_logo.png',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'Starterre',
    logo: '/assets/images/references/starterre_logo.svg',
    isImage: true,
    relatedProjects: []
  },
  {
    name: 'EM Lyon',
    logo: '/assets/images/references/em_lyon_logo.png',
    isImage: true,
    relatedProjects: ['em-lyon-parking-saint-louis']
  }
];

// Fonction pour obtenir le premier projet lié à un partenaire
export const getFirstRelatedProject = (partnerName: string): string | null => {
  const partner = partnerMappings.find(p => p.name === partnerName);
  return partner && partner.relatedProjects.length > 0 ? partner.relatedProjects[0] : null;
};

// Fonction pour obtenir tous les projets liés à un partenaire
export const getAllRelatedProjects = (partnerName: string): string[] => {
  const partner = partnerMappings.find(p => p.name === partnerName);
  return partner ? partner.relatedProjects : [];
};
