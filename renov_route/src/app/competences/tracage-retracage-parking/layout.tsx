import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marquage au Sol Lyon - Traçage et Retraçage de Parking',
  description:
    "Entreprise marquage au sol Lyon : traçage et retraçage de parking professionnel. Marquage durable, peinture sol parking Lyon, respect des normes. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking/',
  },
  openGraph: {
    title: 'Marquage au Sol Lyon - Traçage et Retraçage de Parking',
    description:
      "Entreprise marquage au sol Lyon : traçage et retraçage de parking professionnel. Marquage durable, respect des normes. Devis gratuit.",
    url: 'https://renov-route.com/competences/tracage-retracage-parking/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage au Sol Lyon - Traçage et Retraçage de Parking',
    description: 'Entreprise marquage au sol Lyon : traçage et retraçage de parking professionnel. Marquage durable, respect des normes. Devis gratuit.',
  },
};

export default function TracageRetracageParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


