import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devis Gratuit Marquage au Sol Lyon — Réponse en 48h',
  description: 'Demandez votre devis gratuit : traçage parking, marquage routier, réparation nids de poule à Lyon et Rhône-Alpes. Estimation détaillée en 48h, sans engagement.',
  alternates: {
    canonical: 'https://renov-route.com/devis/',
  },
  openGraph: {
    title: 'Devis Gratuit Marquage au Sol Lyon — Réponse en 48h | Rénov Route',
    description: 'Demandez votre devis gratuit : traçage parking, marquage routier, réparation nids de poule à Lyon et Rhône-Alpes. Sans engagement.',
    url: 'https://renov-route.com/devis/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devis Gratuit Marquage au Sol Lyon — Réponse en 48h',
    description: 'Devis gratuit traçage parking, marquage routier, réparation nids de poule à Lyon. Sans engagement, réponse en 48h.',
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
