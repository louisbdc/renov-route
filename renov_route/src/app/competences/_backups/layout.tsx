import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compétences en Marquage Routier',
  description: 'Nos compétences : traçage parking, réparation nids de poule, marquage routier, enrobé résine et entretien préventif. Solutions pro.',
  keywords: 'compétences marquage routier, traçage parking professionnel, réparation nids de poule, signalisation verticale, résine de sol, accessoires parking, conseil expertise marquage, retraçage parking, marquage intérieur, bornes anti-bélier, ralentisseurs, butées parking',
  // La canonique de section est retirée pour éviter d'écraser les canoniques des pages enfants
  openGraph: {
    title: 'Compétences en Marquage Routier | Rénov Route',
    description: 'Nos compétences : traçage parking, réparation nids de poule, marquage routier, enrobé résine et entretien préventif.',
    url: 'https://renov-route.com/competences',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  }
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
