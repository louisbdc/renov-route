import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation de Nids de Poule - Expert Résine | Renov Route',
  description:
    'Réparation professionnelle de nids de poule avec de la résine. Procédé innovant, durable et résistant. Intervention rapide sur tous types de routes. Devis gratuit.',
  keywords:
    "réparation nids de poule, résine réparation route, réparation chaussée, nids de poule professionnel, réparation route durable, résine à froid, réparation infrastructure routière",
  alternates: {
    canonical: 'https://renov-route.com/competences/reparation-nids-de-poule',
  },
  openGraph: {
    title: 'Réparation de Nids de Poule - Expert Résine | Renov Route',
    description:
      'Réparation professionnelle de nids de poule avec de la résine. Procédé innovant, durable et résistant. Intervention rapide sur tous types de routes. Devis gratuit.',
    url: 'https://renov-route.com/competences/reparation-nids-de-poule',
  },
};

export default function ReparationNidsDePouleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


