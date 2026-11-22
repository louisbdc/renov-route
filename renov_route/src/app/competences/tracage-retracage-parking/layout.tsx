import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Marquage au sol parking : traçage dès 2,50 €/ml' },
  description:
    "Retraçage de parking : effacement de l'ancien marquage + nouveau tracé avec peintures certifiées NF EN 1436. Places, flèches, PMR, passages piétons dès 2,50€/ml. Devis gratuit en 48h, sans engagement.",
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking/',
  },
  openGraph: {
    title: 'Marquage au sol parking : traçage dès 2,50 €/ml',
    description:
      "Retraçage parking : effacement + nouveau tracé conforme. Places, flèches, PMR, passages piétons dès 2,50€/ml. Devis gratuit en 48h.",
    url: 'https://renov-route.com/competences/tracage-retracage-parking/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Rénov\'Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage au sol parking : traçage dès 2,50 €/ml',
    description: "Retraçage parking : effacement + nouveau tracé conforme dès 2,50€/ml. Devis gratuit en 48h, sans engagement.",
  },
};

export default function TracageRetracageParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


