import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entreprise de marquage au sol à Lyon : devis sous 48h',
  description:
    "Entreprise de marquage au sol à Lyon et Rhône-Alpes depuis 2016 : parking, voirie, industriel, PMR. Déjà 1 000+ chantiers pour Carrefour, Lidl, McDonald's. Devis gratuit en 48h, sans engagement.",
  alternates: {
    canonical: 'https://renov-route.com/marquage-au-sol-lyon/',
  },
  openGraph: {
    title: 'Entreprise de marquage au sol à Lyon : devis sous 48h',
    description:
      "Entreprise de marquage au sol à Lyon depuis 2016 : parking, voirie, industriel, PMR. 1 000+ chantiers pour Carrefour, Lidl, McDonald's. Devis gratuit en 48h.",
    url: 'https://renov-route.com/marquage-au-sol-lyon/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Rénov Route - Marquage au sol Lyon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entreprise de marquage au sol à Lyon : devis sous 48h',
    description: "Marquage au sol à Lyon depuis 2016 : parking, voirie, industriel, PMR. 1 000+ projets pour Carrefour, Lidl, McDonald's. Devis gratuit en 48h.",
  },
};

export default function MarquageAuSolLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
