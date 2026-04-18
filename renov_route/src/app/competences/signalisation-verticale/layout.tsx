import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signalisation Verticale Lyon, Panneaux Routiers & Parking',
  description:
    "Installation de signalisation verticale à Lyon : panneaux stop, PMR, limitation vitesse, direction. Fourniture et pose conforme aux normes. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/signalisation-verticale/',
  },
  openGraph: {
    title: 'Signalisation Verticale Lyon, Panneaux Routiers & Parking | Rénov Route',
    description:
      "Installation de signalisation verticale à Lyon : panneaux stop, PMR, limitation vitesse, direction. Fourniture et pose conforme aux normes.",
    url: 'https://renov-route.com/competences/signalisation-verticale/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signalisation Verticale Lyon, Panneaux Routiers & Parking',
    description: "Installation de signalisation verticale à Lyon : panneaux stop, PMR, limitation vitesse, direction. Devis gratuit.",
  },
};

export default function SignalisationVerticaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


