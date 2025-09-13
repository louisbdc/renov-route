import validator from 'validator';

/**
 * Sanitise une chaîne de caractères pour prévenir les attaques XSS
 * Version compatible SSR qui ne dépend pas de DOMPurify
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  // Supprime les balises HTML dangereuses d'abord
  const clean = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/<link\b[^>]*>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<meta\b[^>]*>/gi, '')
    // Supprime les attributs dangereux
    .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\s*javascript\s*:/gi, '')
    .replace(/\s*vbscript\s*:/gi, '')
    .replace(/\s*data\s*:/gi, '');
  
  // Échappement HTML minimal pour les caractères vraiment dangereux
  return clean
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Valide et nettoie une adresse email
 */
export function sanitizeEmail(email: string): string {
  if (!validator.isEmail(email)) {
    throw new Error('Adresse email invalide');
  }
  return validator.normalizeEmail(email) || email;
}

/**
 * Valide et nettoie un numéro de téléphone français
 */
export function sanitizePhone(phone: string): string {
  // Supprime tous les caractères non numériques sauf + au début
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Vérifie que c'est un numéro français valide
  if (!validator.isMobilePhone(cleaned, 'fr-FR')) {
    throw new Error('Numéro de téléphone invalide');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un nom (prénom/nom de famille)
 */
export function sanitizeName(name: string): string {
  if (!name || typeof name !== 'string') {
    throw new Error('Nom requis');
  }
  
  // Supprime les caractères dangereux mais garde les espaces et caractères accentués
  const cleaned = name
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß]/g, ''); // Garde lettres, espaces et accents
  
  if (cleaned.length < 2) {
    throw new Error('Le nom doit contenir au moins 2 caractères');
  }
  
  if (cleaned.length > 50) {
    throw new Error('Le nom ne peut pas dépasser 50 caractères');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie une adresse
 */
export function sanitizeAddress(address: string): string {
  if (!address || typeof address !== 'string') {
    throw new Error('Adresse requise');
  }
  
  const cleaned = address
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß\d\-\.,]/g, ''); // Garde lettres, chiffres, espaces, accents et ponctuation normale
  
  if (cleaned.length < 5) {
    throw new Error('L\'adresse doit contenir au moins 5 caractères');
  }
  
  if (cleaned.length > 200) {
    throw new Error('L\'adresse ne peut pas dépasser 200 caractères');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un code postal français
 */
export function sanitizePostalCode(postalCode: string): string {
  if (!postalCode || typeof postalCode !== 'string') {
    throw new Error('Code postal requis');
  }
  
  const cleaned = postalCode.replace(/\D/g, ''); // Garde seulement les chiffres
  
  if (!validator.isPostalCode(cleaned, 'FR')) {
    throw new Error('Code postal français invalide');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie une ville
 */
export function sanitizeCity(city: string): string {
  if (!city || typeof city !== 'string') {
    throw new Error('Ville requise');
  }
  
  const cleaned = city
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß\-]/g, ''); // Garde lettres, espaces, accents et tirets
  
  if (cleaned.length < 2) {
    throw new Error('Le nom de ville doit contenir au moins 2 caractères');
  }
  
  if (cleaned.length > 50) {
    throw new Error('Le nom de ville ne peut pas dépasser 50 caractères');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un message/description
 */
export function sanitizeMessage(message: string): string {
  if (!message || typeof message !== 'string') {
    throw new Error('Message requis');
  }
  
  const cleaned = message
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß\d\-\.,!?():;]/g, ''); // Garde lettres, chiffres, espaces, accents et ponctuation normale
  
  if (cleaned.length < 10) {
    throw new Error('Le message doit contenir au moins 10 caractères');
  }
  
  if (cleaned.length > 2000) {
    throw new Error('Le message ne peut pas dépasser 2000 caractères');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un SIRET
 */
export function sanitizeSiret(siret: string): string {
  if (!siret) {
    return ''; // SIRET optionnel
  }
  
  const cleaned = siret.replace(/\D/g, ''); // Garde seulement les chiffres
  
  if (cleaned.length !== 14) {
    throw new Error('Le SIRET doit contenir exactement 14 chiffres');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un nom d'entreprise
 */
export function sanitizeCompany(company: string): string {
  if (!company) {
    return ''; // Entreprise optionnelle
  }
  
  const cleaned = company
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß\d\-\.,&]/g, ''); // Garde lettres, chiffres, espaces, accents et ponctuation normale
  
  if (cleaned.length > 100) {
    throw new Error('Le nom d\'entreprise ne peut pas dépasser 100 caractères');
  }
  
  return cleaned;
}

/**
 * Valide et nettoie un nombre (surface, etc.)
 */
export function sanitizeNumber(input: string): number | null {
  if (!input) {
    return null;
  }
  
  const cleaned = input.replace(/[^\d.,]/g, ''); // Garde seulement chiffres, points et virgules
  const number = parseFloat(cleaned.replace(',', '.'));
  
  if (isNaN(number) || number < 0) {
    throw new Error('Nombre invalide');
  }
  
  if (number > 1000000) {
    throw new Error('Le nombre ne peut pas dépasser 1 000 000');
  }
  
  return number;
}

/**
 * Valide les options de formulaire contre les valeurs autorisées
 */
export function validateSelectOption(value: string, allowedValues: string[]): string {
  if (!allowedValues.includes(value)) {
    throw new Error('Option sélectionnée invalide');
  }
  return value;
}

/**
 * Valide les cases à cocher multiples
 */
export function validateCheckboxes(values: string[], allowedValues: string[]): string[] {
  const invalidValues = values.filter(value => !allowedValues.includes(value));
  if (invalidValues.length > 0) {
    throw new Error('Une ou plusieurs options sélectionnées sont invalides');
  }
  return values;
}

/**
 * Valide les fichiers uploadés
 */
export function validateFiles(files: FileList | null, options: {
  maxFiles?: number;
  maxSize?: number; // en MB
  allowedTypes?: string[];
} = {}): FileList | null {
  if (!files || files.length === 0) {
    return null;
  }

  const { maxFiles = 5, maxSize = 10, allowedTypes = ['image/*', 'application/pdf', 'text/*'] } = options;

  // Vérifier le nombre de fichiers
  if (files.length > maxFiles) {
    throw new Error(`Vous ne pouvez pas télécharger plus de ${maxFiles} fichiers`);
  }

  // Vérifier chaque fichier
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    // Vérifier la taille
    if (file.size > maxSize * 1024 * 1024) {
      throw new Error(`Le fichier "${file.name}" est trop volumineux. Taille maximum: ${maxSize}MB`);
    }

    // Vérifier le type de fichier
    const isValidType = allowedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -1));
      }
      return file.type === type;
    });

    if (!isValidType) {
      throw new Error(`Le fichier "${file.name}" n'est pas d'un type autorisé. Types acceptés: ${allowedTypes.join(', ')}`);
    }

    // Vérifier le nom du fichier (éviter les noms dangereux)
    if (file.name.includes('..') || file.name.includes('/') || file.name.includes('\\')) {
      throw new Error(`Le nom du fichier "${file.name}" contient des caractères non autorisés`);
    }
  }

  return files;
}

/**
 * Valide et nettoie le nom d'un fichier
 */
export function sanitizeFileName(fileName: string): string {
  if (!fileName || typeof fileName !== 'string') {
    throw new Error('Nom de fichier invalide');
  }

  // Supprime les caractères dangereux du nom de fichier
  const cleaned = fileName
    .replace(/[<>:"/\\|?*]/g, '') // Supprime les caractères interdits dans les noms de fichiers
    .replace(/\.\./g, '') // Supprime les séquences ".."
    .trim();

  if (cleaned.length === 0) {
    throw new Error('Nom de fichier invalide après nettoyage');
  }

  if (cleaned.length > 255) {
    throw new Error('Le nom de fichier est trop long (maximum 255 caractères)');
  }

  return cleaned;
}
