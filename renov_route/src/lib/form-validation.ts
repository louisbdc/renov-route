import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeName,
  sanitizeMessage,
  validateCheckboxes,
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
  name: string;
  email: string;
  phone: string;
  projectTypes: string[];
  description: string;
}

// Options autorisées pour les sélecteurs
export const PROJECT_TYPE_OPTIONS = ['tracage-retracage', 'signalisation-verticale', 'resine-sol-marquage', 'reparation-nids-poule', 'accessoires-parking', 'autre'];

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
  } catch (_error) {
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
  const name = sanitizeName(formData.get('name') as string);
  const email = sanitizeEmail(formData.get('email') as string);
  const phone = sanitizePhone(formData.get('phone') as string);

  const projectTypesRaw = formData.getAll('projectType') as string[];
  const projectTypes = projectTypesRaw.length > 0
    ? validateCheckboxes(projectTypesRaw, PROJECT_TYPE_OPTIONS)
    : [];

  const descriptionRaw = formData.get('description') as string;
  const description = descriptionRaw ? sanitizeMessage(descriptionRaw) : '';

  return { name, email, phone, projectTypes, description };
}

/**
 * Valide et nettoie les données du formulaire de devis avec gestion des erreurs par champ
 */
export function validateDevisFormWithFieldErrors(formData: FormData): { data: DevisFormData | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  let hasErrors = false;

  try {
    // Champs requis
    let name = '';
    let email = '';
    let phone = '';

    try {
      name = sanitizeName(formData.get('name') as string);
    } catch (error) {
      errors.name = error instanceof Error ? error.message : 'Nom invalide';
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

    // Champs optionnels
    let projectTypes: string[] = [];
    const projectTypesRaw = formData.getAll('projectType') as string[];
    if (projectTypesRaw.length > 0) {
      try {
        projectTypes = validateCheckboxes(projectTypesRaw, PROJECT_TYPE_OPTIONS);
      } catch (error) {
        errors.projectTypes = error instanceof Error ? error.message : 'Type de projet invalide';
        hasErrors = true;
      }
    }

    let description = '';
    const descriptionRaw = formData.get('description') as string;
    if (descriptionRaw) {
      try {
        description = sanitizeMessage(descriptionRaw);
      } catch (error) {
        errors.description = error instanceof Error ? error.message : 'Message invalide';
        hasErrors = true;
      }
    }

    if (hasErrors) {
      return { data: null, errors };
    }

    return {
      data: { name, email, phone, projectTypes, description },
      errors: {}
    };
  } catch (_error) {
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
