import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signalisation Verticale - Panneaux de Parking Professionnels | Renov Route',
  description:
    "Signalisation verticale professionnelle : tous les panneaux verticaux de parking (stop, PMR, cédez le passage). Installation conforme aux normes.",
  keywords:
    'signalisation verticale, panneaux parking, panneau stop, panneau PMR, cédez le passage, signalisation professionnelle, installation panneaux',
  alternates: {
    canonical: 'https://renov-route.com/competences/signalisation-verticale',
  },
  openGraph: {
    title: 'Signalisation Verticale - Panneaux de Parking Professionnels | Renov Route',
    description:
      "Signalisation verticale professionnelle : tous les panneaux verticaux de parking (stop, PMR, cédez le passage). Installation conforme aux normes.",
    url: 'https://renov-route.com/competences/signalisation-verticale',
  },
};

export default function SignalisationVerticaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


