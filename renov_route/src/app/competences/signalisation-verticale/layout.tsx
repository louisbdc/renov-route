import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signalisation Verticale - Panneaux de Parking Professionnels | Renov Route',
  description:
    "Signalisation verticale professionnelle : tous les panneaux verticaux de parking (stop, PMR, cédez le passage). Installation conforme aux normes.",
  alternates: {
    canonical: 'https://renov-route.com/competences/signalisation-verticale/',
  },
  openGraph: {
    title: 'Signalisation Verticale - Panneaux de Parking Professionnels | Renov Route',
    description:
      "Signalisation verticale professionnelle : tous les panneaux verticaux de parking (stop, PMR, cédez le passage). Installation conforme aux normes.",
    url: 'https://renov-route.com/competences/signalisation-verticale/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signalisation Verticale - Panneaux de Parking Professionnels',
    description: 'Signalisation verticale professionnelle : panneaux de parking (stop, PMR, cédez le passage). Installation conforme aux normes.',
  },
};

export default function SignalisationVerticaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


