
export interface PartnerMapping {
  name: string;
  logo: string;
  isImage: boolean;
  relatedProjects: string[]; // IDs des projets liés
}

export const partnerMappings: PartnerMapping[] = [
  { 
    name: 'Carrefour', 
    logo: '/assets/images/references/Logo_Carrefour.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Carrefour dans les données actuelles
  },
  { 
    name: 'Lidl', 
    logo: '/assets/images/references/Lidl-Logo.png', 
    isImage: true,
    relatedProjects: ['lidl-verpiliere-parking']
  },
  { 
    name: 'Intermarché', 
    logo: '/assets/images/references/Intermarche_logo.png', 
    isImage: true,
    relatedProjects: ['intermarche-neuville-parking']
  },
  { 
    name: 'Richardson', 
    logo: '/assets/images/references/Logo-RICHARDSON.jpg', 
    isImage: true,
    relatedProjects: ['richardson-saint-etienne-passage']
  },
  { 
    name: 'ALDI', 
    logo: '/assets/images/references/Aldi_logo.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet ALDI dans les données actuelles
  },
  { 
    name: 'Apave', 
    logo: '/assets/images/references/Apave-Logo.png', 
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
    logo: '/assets/images/references/McDonald_logo.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet McDonald's dans les données actuelles
  },
  { 
    name: 'Armée de Terre', 
    logo: '/assets/images/references/Logo_of_the_French_Army.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Armée de Terre dans les données actuelles
  },
  { 
    name: 'Suez', 
    logo: '/assets/images/references/Logo_Suez.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Suez dans les données actuelles
  },
  { 
    name: 'Groupe Casino', 
    logo: '/assets/images/references/Logo_of_Casino.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Casino dans les données actuelles
  },
  { 
    name: 'Armée de l\'Air', 
    logo: '/assets/images/references/logo-armee-air.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Armée de l'Air dans les données actuelles
  },
  { 
    name: 'La Halle', 
    logo: '/assets/images/references/la-halle.png', 
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
    logo: '/assets/images/references/Kiloutou_logo.jpg', 
    isImage: true,
    relatedProjects: [] // Aucun projet Kiloutou dans les données actuelles
  },
  { 
    name: 'Transports Hexa Trans', 
    logo: '/assets/images/references/logo-hexatrans.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet Hexa Trans dans les données actuelles
  },
  { 
    name: 'La Poste', 
    logo: '/assets/images/references/Logo-laposte.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet La Poste dans les données actuelles
  },
  { 
    name: 'La Poste', 
    logo: '/assets/images/references/Logo-laposte.png', 
    isImage: true,
    relatedProjects: [] // Aucun projet La Poste dans les données actuelles
  }
  burger_king_logo.png
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
