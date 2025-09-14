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

export async function sendContactEmail(formElement: HTMLFormElement): Promise<void> {
  ensureInit();
  const { serviceId, templateIdContact } = getConfig();
  if (!templateIdContact) {
    throw new Error('EmailJS: veuillez définir NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT');
  }
  await emailjs.sendForm(serviceId, templateIdContact, formElement);
}

export async function sendDevisEmail(formElement: HTMLFormElement): Promise<void> {
  ensureInit();
  const { serviceId, templateIdDevis } = getConfig();
  if (!templateIdDevis) {
    throw new Error('EmailJS: veuillez définir NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DEVIS');
  }
  await emailjs.sendForm(serviceId, templateIdDevis, formElement);
}


