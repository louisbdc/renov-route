import emailjs from '@emailjs/browser';

let isInitialized = false;

function getConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const templateIdContact = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT;
  const templateIdDevis = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DEVIS;

  if (!serviceId || !publicKey) {
    throw new Error('EmailJS: veuillez définir NEXT_PUBLIC_EMAILJS_SERVICE_ID et NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
  }

  return { serviceId, publicKey, templateIdContact, templateIdDevis } as const;
}

function ensureInit() {
  if (!isInitialized) {
    const { publicKey } = getConfig();
    emailjs.init({ publicKey });
    isInitialized = true;
  }
}

// Fonction utilitaire pour nettoyer les valeurs
function cleanValue(value: string | null | undefined): string {
  if (!value || value === 'null' || value === 'undefined') {
    return '';
  }
  return String(value).trim();
}

export async function sendContactEmail(formElement: HTMLFormElement): Promise<void> {
  ensureInit();
  const { serviceId, templateIdContact } = getConfig();
  if (!templateIdContact) {
    throw new Error('EmailJS: veuillez définir NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT');
  }
  
  // Extraire les données du formulaire
  const formData = new FormData(formElement);
  const templateParams = {
    firstName: cleanValue(formData.get('firstName') as string),
    lastName: cleanValue(formData.get('lastName') as string),
    email: cleanValue(formData.get('email') as string),
    phone: cleanValue(formData.get('phone') as string),
    message: cleanValue(formData.get('message') as string),
  };
  
  await emailjs.send(serviceId, templateIdContact, templateParams);
}

export async function sendDevisEmail(formElement: HTMLFormElement): Promise<void> {
  ensureInit();
  const { serviceId, templateIdDevis } = getConfig();
  if (!templateIdDevis) {
    throw new Error('EmailJS: veuillez définir NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DEVIS');
  }
  
  // Extraire les données du formulaire
  const formData = new FormData(formElement);

  // Transformer les données pour le template avec nettoyage
  const projectTypes = formData.getAll('projectType') as string[];

  const templateParams = {
    firstName: cleanValue(formData.get('name') as string),
    lastName: '',
    email: cleanValue(formData.get('email') as string),
    phone: cleanValue(formData.get('phone') as string),

    // Champs supprimés — envoyés vides pour compatibilité template
    company: '',
    siret: '',
    address: '',
    city: '',
    postalCode: '',
    region: 'France',

    projectType: projectTypes.length > 0 ? projectTypes.join(', ') : 'Non spécifié',
    otherProjectType: '',

    description: cleanValue(formData.get('description') as string),

    contactMethod: '',
    bestTime: '',
  };

  if (!templateParams.firstName || !templateParams.email) {
    throw new Error('Les champs obligatoires (nom, email) sont manquants');
  }

  await emailjs.send(serviceId, templateIdDevis, templateParams);
}