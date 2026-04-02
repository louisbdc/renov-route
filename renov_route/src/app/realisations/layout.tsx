import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations — 1 000+ Projets Marquage Routier Lyon',
  description: 'Photos avant/après de nos chantiers : traçage parking, marquage voirie, résine de sol à Lyon et Rhône-Alpes. Parkings, entrepôts, centres commerciaux.',
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
