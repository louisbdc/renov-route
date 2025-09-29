import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations - Projets Traçage Marquage Routier',
  description: 'Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 1000+ projets réalisés avec succès.',
  keywords: 'réalisations marquage routier, portfolio projets parking, projets traçage parking, réalisations réparation nids poule, projets Carrefour, projets Lidl, projets Intermarché, portfolio Renov Route',
  openGraph: {
    title: 'Nos Réalisations - Projets Traçage Marquage Routier | Renov Route',
    description: 'Découvrez nos réalisations en traçage marquage routier : projets parking, marquage routier, réparation nids de poule. Portfolio de 1000+ projets réalisés avec succès.',
    url: 'https://renov-route.com/realisations',
  }
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
