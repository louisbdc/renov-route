import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conseil et Expertise - Accompagnement Professionnel | Renov Route',
  description:
    "Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé, suivi de projet.",
  keywords:
    'conseil expertise, étude faisabilité, devis personnalisé, suivi projet, accompagnement professionnel, expertise infrastructure, conseil technique',
  alternates: {
    canonical: 'https://renov-route.com/competences/conseil-expertise',
  },
  openGraph: {
    title: 'Conseil et Expertise - Accompagnement Professionnel | Renov Route',
    description:
      "Conseil et expertise pour vos projets d'amélioration. Étude de faisabilité, devis personnalisé, suivi de projet.",
    url: 'https://renov-route.com/competences/conseil-expertise',
  },
};

export default function ConseilExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


