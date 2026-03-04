import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réalisations - Projets Marquage Routier',
  description: 'Nos réalisations : traçage parking, marquage routier, réparation nids de poule. Plus de 1000 projets réalisés en France.',
  alternates: {
    canonical: 'https://renov-route.com/realisations/',
  },
  openGraph: {
    title: 'Réalisations - Projets Marquage Routier | Rénov Route',
    description: 'Nos réalisations : traçage parking, marquage routier, réparation nids de poule. Plus de 1000 projets réalisés en France.',
    url: 'https://renov-route.com/realisations/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réalisations - Projets Marquage Routier',
    description: 'Nos réalisations : traçage parking, marquage routier, réparation nids de poule. Plus de 1000 projets réalisés en France.',
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
