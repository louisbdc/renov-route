import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Compétences - Expert Traçage Marquage Routier',
  description: 'Découvrez nos compétences en traçage marquage routier : réparation nids de poule, traçage parking, marquage routier, enrobé résine, entretien préventif. Solutions professionnelles pour tous vos besoins d\'infrastructure.',
  keywords: 'compétences marquage routier, traçage parking professionnel, réparation nids de poule, signalisation verticale, résine de sol, accessoires parking, conseil expertise marquage, retraçage parking, marquage intérieur, bornes anti-bélier, ralentisseurs, butées parking',
  alternates: {
    canonical: 'https://renov-route.com/competences'
  },
  openGraph: {
    title: 'Nos Compétences - Expert Traçage Marquage Routier | Renov Route',
    description: 'Découvrez nos compétences en traçage marquage routier : réparation nids de poule, traçage parking, marquage routier, enrobé résine, entretien préventif.',
    url: 'https://renov-route.com/competences',
  }
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
