import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marquage au Sol Lyon — Entreprise de Marquage Routier depuis 2014',
  description:
    "Entreprise de marquage au sol à Lyon et Rhône-Alpes : parking, voirie, industriel, sport, PMR. Plus de 1 000 chantiers réalisés depuis 2014. Devis gratuit sous 24h.",
  alternates: {
    canonical: 'https://renov-route.com/marquage-au-sol-lyon/',
  },
  openGraph: {
    title: 'Marquage au Sol Lyon — Entreprise de Marquage Routier depuis 2014 | Rénov Route',
    description:
      "Entreprise de marquage au sol à Lyon et Rhône-Alpes : parking, voirie, industriel, sport, PMR. Plus de 1 000 chantiers réalisés. Devis gratuit sous 24h.",
    url: 'https://renov-route.com/marquage-au-sol-lyon/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Rénov Route - Marquage au sol Lyon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage au Sol Lyon — Entreprise de Marquage Routier depuis 2014',
    description: "Marquage au sol à Lyon : parking, voirie, industriel, sport, PMR. 1 000+ chantiers depuis 2014. Devis gratuit.",
  },
};

export default function MarquageAuSolLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
