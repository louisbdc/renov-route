import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous - Expert Réparation Nids de Poule et Marquage Routier',
  description: 'Découvrez Renov Route, expert en traçage marquage routier et réparation de nids de poule. Notre histoire, notre équipe et notre mission pour la sécurité routière.',
  keywords: 'équipe Renov Route, expert marquage routier, 10 ans expérience, 1000 projets réalisés, clients satisfaits, intervention France, équipe professionnelle',
  alternates: {
    canonical: 'https://renov-route.com/qui-sommes-nous',
  },
  openGraph: {
    title: 'Qui sommes-nous - Expert Réparation Nids de Poule et Marquage Routier | Renov Route',
    description: 'Découvrez Renov Route, expert en traçage marquage routier et réparation de nids de poule. Notre histoire, notre équipe et notre mission.',
    url: 'https://renov-route.com/qui-sommes-nous',
  }
};

export default function QuiSommesNousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
