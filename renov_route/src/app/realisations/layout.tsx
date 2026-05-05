import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entreprise Marquage au Sol Lyon — 1 000+ Réalisations | Rénov\'Route',
  description: 'Entreprise de marquage au sol à Lyon : photos avant/après de 1 000+ chantiers. Traçage parking, marquage voirie, résine de sol. Carrefour, Lidl, McDonald\'s… Devis gratuit.',
  alternates: {
    canonical: 'https://renov-route.com/realisations/',
  },
  openGraph: {
    title: 'Nos Réalisations — 1 000+ Projets Marquage Routier Lyon | Rénov Route',
    description: 'Photos avant/après de nos chantiers : traçage parking, marquage voirie, résine de sol à Lyon et Rhône-Alpes.',
    url: 'https://renov-route.com/realisations/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Réalisations — 1 000+ Projets Marquage Routier Lyon',
    description: 'Photos avant/après de nos chantiers : traçage parking, marquage voirie, résine de sol à Lyon et Rhône-Alpes.',
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
