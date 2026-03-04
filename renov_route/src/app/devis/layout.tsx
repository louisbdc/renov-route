import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devis Gratuit - Traçage Marquage Routier',
  description: 'Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h. Intervention dans toute la France.',
  alternates: {
    canonical: 'https://renov-route.com/devis/',
  },
  openGraph: {
    title: 'Devis Gratuit - Traçage Marquage Routier | Renov Route',
    description: 'Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h.',
    url: 'https://renov-route.com/devis/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devis Gratuit - Traçage Marquage Routier',
    description: 'Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation sous 24h.',
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
