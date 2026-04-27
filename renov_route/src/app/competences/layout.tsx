import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marquage routier & signalisation : nos 6 expertises | Rénov Route',
  description: '6 expertises complémentaires : traçage parking, signalisation verticale, résine de sol, réparation de nids de poule, accessoires parking, conseil. 1 000+ projets en Auvergne-Rhône-Alpes depuis 2014.',
  alternates: {
    canonical: 'https://renov-route.com/competences/',
  },
  openGraph: {
    title: 'Marquage routier & signalisation : nos 6 expertises | Rénov Route',
    description: '6 expertises complémentaires : traçage parking, signalisation verticale, résine de sol, réparation de nids de poule, accessoires parking, conseil. 1 000+ projets en Auvergne-Rhône-Alpes depuis 2014.',
    url: 'https://renov-route.com/competences/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage routier & signalisation : nos 6 expertises | Rénov Route',
    description: '6 expertises complémentaires : traçage parking, signalisation verticale, résine de sol, réparation de nids de poule. 1 000+ projets en Auvergne-Rhône-Alpes depuis 2014.',
  },
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
