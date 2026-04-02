import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conseil et Expertise - Accompagnement Professionnel | Renov Route',
  description:
    "Conseil et expertise en marquage routier à Lyon et Rhône-Alpes. Étude de faisabilité, diagnostic technique, devis personnalisé et suivi de projet.",
  alternates: {
    canonical: 'https://renov-route.com/competences/conseil-expertise/',
  },
  openGraph: {
    title: 'Conseil et Expertise - Accompagnement Professionnel | Renov Route',
    description:
      "Conseil et expertise en marquage routier à Lyon et Rhône-Alpes. Étude de faisabilité, diagnostic technique et suivi de projet.",
    url: 'https://renov-route.com/competences/conseil-expertise/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conseil et Expertise - Accompagnement Professionnel',
    description: "Conseil et expertise en marquage routier. Étude de faisabilité, diagnostic technique et suivi de projet sur mesure.",
  },
};

export default function ConseilExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


