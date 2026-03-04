import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation de Nids de Poule à Lyon et Rhône-Alpes',
  description:
    'Rénov Route répare durablement les nids de poule sur vos parkings et routes à Lyon. Solution innovante et résistante. Obtenez votre devis sous 24h.',
  keywords:
    "réparation nid de poule lyon, rebouchage nid poule 69, réparation enrobé lyon, entreprise réparation route rhône-alpes, réparation chaussée lyon",
  alternates: {
    canonical: 'https://renov-route.com/competences/reparation-nids-de-poule',
  },
  openGraph: {
    title: 'Réparation de Nids de Poule - Expert Résine | Renov Route',
    description:
      'Réparation professionnelle de nids de poule avec de la résine. Procédé innovant, durable et résistant. Intervention rapide sur tous types de routes. Devis gratuit.',
    url: 'https://renov-route.com/competences/reparation-nids-de-poule',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
};

export default function ReparationNidsDePouleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


