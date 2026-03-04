import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compétences en Marquage Routier',
  description: 'Nos compétences : traçage parking, réparation nids de poule, marquage routier, enrobé résine et entretien préventif. Solutions pro.',
  alternates: {
    canonical: 'https://renov-route.com/competences/',
  },
  openGraph: {
    title: 'Compétences en Marquage Routier | Rénov Route',
    description: 'Nos compétences : traçage parking, réparation nids de poule, marquage routier, enrobé résine et entretien préventif.',
    url: 'https://renov-route.com/competences/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compétences en Marquage Routier',
    description: 'Nos compétences : traçage parking, réparation nids de poule, marquage routier, enrobé résine et entretien préventif.',
  },
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
