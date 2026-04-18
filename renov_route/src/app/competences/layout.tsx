import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marquage Routier Lyon, Nos 6 Expertises',
  description: 'Traçage parking, signalisation, résine de sol, réparation nids de poule : 1 000+ projets réalisés à Lyon et Rhône-Alpes depuis 2014. Devis gratuit sous 24h.',
  alternates: {
    canonical: 'https://renov-route.com/competences/',
  },
  openGraph: {
    title: 'Marquage Routier Lyon, Nos 6 Expertises | Rénov Route',
    description: 'Traçage parking, signalisation, résine de sol, réparation nids de poule : 1 000+ projets réalisés à Lyon et Rhône-Alpes depuis 2014. Devis gratuit sous 24h.',
    url: 'https://renov-route.com/competences/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage Routier Lyon, Nos 6 Expertises',
    description: 'Traçage parking, signalisation, résine de sol, réparation nids de poule : 1 000+ projets réalisés à Lyon et Rhône-Alpes depuis 2014.',
  },
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
