import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retraçage parking : tarif dès 2,50€/ml à Lyon | Rénov Route',
  description:
    "Retraçage de parking à Lyon : effacement de l'ancien marquage + nouveau tracé conforme NF EN 1436. Places, flèches, PMR, passages piétons dès 2,50€/ml. Devis gratuit sous 24h, sans engagement.",
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking/',
  },
  openGraph: {
    title: 'Retraçage parking dès 2,50€/ml à Lyon | Rénov Route',
    description:
      "Retraçage parking à Lyon : effacement + nouveau tracé conforme. Places, flèches, PMR, passages piétons dès 2,50€/ml. Devis gratuit sous 24h.",
    url: 'https://renov-route.com/competences/tracage-retracage-parking/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retraçage parking dès 2,50€/ml à Lyon | Rénov Route',
    description: "Retraçage parking Lyon : effacement + nouveau tracé conforme dès 2,50€/ml. Devis gratuit sous 24h, sans engagement.",
  },
};

export default function TracageRetracageParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


