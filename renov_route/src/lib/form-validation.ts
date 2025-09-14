import { 
  sanitizeString, 
  sanitizeEmail, 
  sanitizePhone, 
  sanitizeName, 
  sanitizeAddress, 
  sanitizePostalCode, 
  sanitizeCity, 
  sanitizeMessage, 
  sanitizeSiret, 
  sanitizeCompany, 
  sanitizeNumber,
  validateSelectOption,
  validateCheckboxes,
  validateFiles
} from './security';

// Types pour les formulaires
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface DevisFormData {
  // Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Informations entreprise
  company?: string;
  siret?: string;
  
  // Adresse du projet
  address: string;
  city: string;
  postalCode: string;
  region: string;
  
  // Type de projet
  projectTypes: string[];
  otherProjectType?: string;
  
  // Détails du projet
  description: string;
  
  // Préférences de contact
  contactMethod: string[];
  bestTime: string;
}

// Options autorisées pour les sélecteurs
export const PROJECT_TYPE_OPTIONS = ['tracage-retracage', 'signalisation-verticale', 'resine-sol-marquage', 'reparation-nids-poule', 'accessoires-parking', 'autre'];
export const BEST_TIME_OPTIONS = ['morning', 'afternoon', 'evening', 'anytime'];
export const CONTACT_METHOD_OPTIONS = ['phone', 'email'];

/**
 * Valide et nettoie les données du formulaire de contact
 */
export function validateContactForm(formData: FormData): ContactFormData {
  const errors: string[] = [];
  
  try {
    const firstName = sanitizeName(formData.get('firstName') as string);
    const lastName = sanitizeName(formData.get('lastName') as string);
    const email = sanitizeEmail(formData.get('email') as string);
    const phone = formData.get('phone') ? sanitizePhone(formData.get('phone') as string) : undefined;
    const message = sanitizeMessage(formData.get('message') as string);
    
    return {
      firstName,
      lastName,
      email,
      phone,
      message
    };
  } catch (error) {
    if (error instanceof Error) {
      errors.push(error.message);
    } else {
      errors.push('Erreur de validation inconnue');
    }
  }
  
  if (errors.length > 0) {
    throw new Error(`Erreurs de validation: ${errors.join(', ')}`);
  }
  
  throw new Error('Erreur de validation inconnue');
}

/**
 * Valide et nettoie les données du formulaire de contact avec gestion des erreurs par champ
 */
export function validateContactFormWithFieldErrors(formData: FormData): { data: ContactFormData | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  let hasErrors = false;
  
  try {
    // Informations personnelles
    let firstName = '';
    let lastName = '';
    let email = '';
    let phone = undefined;
    let message = '';
    
    try {
      firstName = sanitizeName(formData.get('firstName') as string);
    } catch (error) {
      errors.firstName = error instanceof Error ? error.message : 'Prénom invalide';
      hasErrors = true;
    }
    
    try {
      lastName = sanitizeName(formData.get('lastName') as string);
    } catch (error) {
      errors.lastName = error instanceof Error ? error.message : 'Nom invalide';
      hasErrors = true;
    }
    
    try {
      email = sanitizeEmail(formData.get('email') as string);
    } catch (error) {
      errors.email = error instanceof Error ? error.message : 'Email invalide';
      hasErrors = true;
    }
    
    if (formData.get('phone')) {
      try {
        phone = sanitizePhone(formData.get('phone') as string);
      } catch (error) {
        errors.phone = error instanceof Error ? error.message : 'Téléphone invalide';
        hasErrors = true;
      }
    }
    
    try {
      message = sanitizeMessage(formData.get('message') as string);
    } catch (error) {
      errors.message = error instanceof Error ? error.message : 'Message invalide';
      hasErrors = true;
    }
    
    if (hasErrors) {
      return { data: null, errors };
    }
    
    return {
      data: {
        firstName,
        lastName,
        email,
        phone,
        message
      },
      errors: {}
    };
  } catch (error) {
    return {
      data: null,
      errors: { general: 'Erreur de validation inconnue' }
    };
  }
}

/**
 * Valide et nettoie les données du formulaire de devis
 */
export function validateDevisForm(formData: FormData): DevisFormData {
  const errors: string[] = [];
  
  try {
    // Informations personnelles
    const firstName = sanitizeName(formData.get('firstName') as string);
    const lastName = sanitizeName(formData.get('lastName') as string);
    const email = sanitizeEmail(formData.get('email') as string);
    const phone = sanitizePhone(formData.get('phone') as string);
    
    // Informations entreprise
    const company = formData.get('company') ? sanitizeCompany(formData.get('company') as string) : undefined;
    const siret = formData.get('siret') ? sanitizeSiret(formData.get('siret') as string) : undefined;
    
    // Adresse du projet
    const address = sanitizeAddress(formData.get('address') as string);
    const city = sanitizeCity(formData.get('city') as string);
    const postalCode = sanitizePostalCode(formData.get('postalCode') as string);
    const region = 'France'; // Valeur fixe
    
    // Type de projet
    const projectTypesRaw = formData.getAll('projectType') as string[];
    const projectTypes = validateCheckboxes(projectTypesRaw, PROJECT_TYPE_OPTIONS);
    const otherProjectType = formData.get('otherProjectType') ? sanitizeString(formData.get('otherProjectType') as string) : undefined;
    
    // Détails du projet
    const description = sanitizeMessage(formData.get('description') as string);
    
    // Préférences de contact
    const contactMethodRaw = formData.getAll('contactMethod') as string[];
    const contactMethod = validateCheckboxes(contactMethodRaw, CONTACT_METHOD_OPTIONS);
    const bestTime = validateSelectOption(formData.get('bestTime') as string, BEST_TIME_OPTIONS);
    
    return {
      firstName,
      lastName,
      email,
      phone,
      company,
      siret,
      address,
      city,
      postalCode,
      region,
      projectTypes,
      otherProjectType,
      description,
      contactMethod,
      bestTime
    };
  } catch (error) {
    if (error instanceof Error) {
      errors.push(error.message);
    } else {
      errors.push('Erreur de validation inconnue');
    }
  }
  
  if (errors.length > 0) {
    throw new Error(`Erreurs de validation: ${errors.join(', ')}`);
  }
  
  throw new Error('Erreur de validation inconnue');
}

/**
 * Valide et nettoie les données du formulaire de devis avec gestion des erreurs par champ
 */
export function validateDevisFormWithFieldErrors(formData: FormData): { data: DevisFormData | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  let hasErrors = false;
  
  try {
    // Informations personnelles
    let firstName = '';
    let lastName = '';
    let email = '';
    let phone = '';
    
    try {
      firstName = sanitizeName(formData.get('firstName') as string);
    } catch (error) {
      errors.firstName = error instanceof Error ? error.message : 'Prénom invalide';
      hasErrors = true;
    }
    
    try {
      lastName = sanitizeName(formData.get('lastName') as string);
    } catch (error) {
      errors.lastName = error instanceof Error ? error.message : 'Nom invalide';
      hasErrors = true;
    }
    
    try {
      email = sanitizeEmail(formData.get('email') as string);
    } catch (error) {
      errors.email = error instanceof Error ? error.message : 'Email invalide';
      hasErrors = true;
    }
    
    try {
      phone = sanitizePhone(formData.get('phone') as string);
    } catch (error) {
      errors.phone = error instanceof Error ? error.message : 'Téléphone invalide';
      hasErrors = true;
    }
    
    // Informations entreprise
    let company = undefined;
    let siret = undefined;
    
    if (formData.get('company')) {
      try {
        company = sanitizeCompany(formData.get('company') as string);
      } catch (error) {
        errors.company = error instanceof Error ? error.message : 'Nom d\'entreprise invalide';
        hasErrors = true;
      }
    }
    
    if (formData.get('siret')) {
      try {
        siret = sanitizeSiret(formData.get('siret') as string);
      } catch (error) {
        errors.siret = error instanceof Error ? error.message : 'SIRET invalide';
        hasErrors = true;
      }
    }
    
    // Adresse du projet
    let address = '';
    let city = '';
    let postalCode = '';
    
    try {
      address = sanitizeAddress(formData.get('address') as string);
    } catch (error) {
      errors.address = error instanceof Error ? error.message : 'Adresse invalide';
      hasErrors = true;
    }
    
    try {
      city = sanitizeCity(formData.get('city') as string);
    } catch (error) {
      errors.city = error instanceof Error ? error.message : 'Ville invalide';
      hasErrors = true;
    }
    
    try {
      postalCode = sanitizePostalCode(formData.get('postalCode') as string);
    } catch (error) {
      errors.postalCode = error instanceof Error ? error.message : 'Code postal invalide';
      hasErrors = true;
    }
    
    // Type de projet
    let projectTypes: string[] = [];
    let otherProjectType = undefined;
    
    try {
      const projectTypesRaw = formData.getAll('projectType') as string[];
      projectTypes = validateCheckboxes(projectTypesRaw, PROJECT_TYPE_OPTIONS);
    } catch (error) {
      errors.projectTypes = error instanceof Error ? error.message : 'Veuillez sélectionner au moins un type de projet';
      hasErrors = true;
    }
    
    if (formData.get('otherProjectType')) {
      try {
        otherProjectType = sanitizeString(formData.get('otherProjectType') as string);
      } catch (error) {
        errors.otherProjectType = error instanceof Error ? error.message : 'Description du projet invalide';
        hasErrors = true;
      }
    }
    
    // Détails du projet
    let description = '';
    
    try {
      description = sanitizeMessage(formData.get('description') as string);
    } catch (error) {
      errors.description = error instanceof Error ? error.message : 'Description invalide';
      hasErrors = true;
    }
    
    // Préférences de contact
    let contactMethod: string[] = [];
    let bestTime = '';
    
    try {
      const contactMethodRaw = formData.getAll('contactMethod') as string[];
      contactMethod = validateCheckboxes(contactMethodRaw, CONTACT_METHOD_OPTIONS);
    } catch (error) {
      errors.contactMethod = error instanceof Error ? error.message : 'Veuillez sélectionner au moins une méthode de contact';
      hasErrors = true;
    }
    
    try {
      bestTime = validateSelectOption(formData.get('bestTime') as string, BEST_TIME_OPTIONS);
    } catch (error) {
      errors.bestTime = error instanceof Error ? error.message : 'Veuillez sélectionner le meilleur moment pour vous contacter';
      hasErrors = true;
    }
    
    if (hasErrors) {
      return { data: null, errors };
    }
    
    return {
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        siret,
        address,
        city,
        postalCode,
        region: 'France',
        projectTypes,
        otherProjectType,
        description,
        contactMethod,
        bestTime
      },
      errors: {}
    };
  } catch (error) {
    return {
      data: null,
      errors: { general: 'Erreur de validation inconnue' }
    };
  }
}


/**
 * Génère un message d'erreur sécurisé pour l'affichage
 */
export function createErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // Échappe les caractères dangereux dans le message d'erreur
    return sanitizeString(error.message);
  }
  return 'Une erreur inattendue s\'est produite';
}

/**
 * Valide la longueur d'un champ
 */
export function validateFieldLength(value: string, minLength: number, maxLength: number, fieldName: string): void {
  if (value.length < minLength) {
    throw new Error(`${fieldName} doit contenir au moins ${minLength} caractères`);
  }
  if (value.length > maxLength) {
    throw new Error(`${fieldName} ne peut pas dépasser ${maxLength} caractères`);
  }
}

/**
 * Valide qu'au moins une option est sélectionnée
 */
export function validateAtLeastOne(values: string[], fieldName: string): void {
  if (values.length === 0) {
    throw new Error(`Veuillez sélectionner au moins une option pour ${fieldName}`);
  }
}
