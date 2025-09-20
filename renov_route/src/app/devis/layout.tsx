import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devis Gratuit - Traçage Marquage Routier',
  description: 'Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h. Intervention dans toute la France.',
  keywords: 'devis gratuit marquage routier, devis traçage parking, devis réparation nids de poule, estimation marquage au sol, devis signalisation verticale, devis résine sol, devis accessoires parking, devis rapide marquage',
  alternates: {
    canonical: 'https://renov-route.com/devis'
  },
  openGraph: {
    title: 'Devis Gratuit - Traçage Marquage Routier | Renov Route',
    description: 'Demandez votre devis gratuit pour traçage marquage routier, réparation nids de poule, marquage parking. Estimation personnalisée sous 24h.',
    url: 'https://renov-route.com/devis',
  }
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
