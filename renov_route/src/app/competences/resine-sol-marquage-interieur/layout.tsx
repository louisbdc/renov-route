import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sol Industriel Lyon, Résine Epoxy & Marquage Intérieur",
  description:
    "Sol industriel et résine époxy à Lyon : revêtement d'entrepôts, ateliers, garages. Marquage de zones, allées, sécurité. Antidérapant, résistant aux charges lourdes. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
  },
  openGraph: {
    title: "Résine Epoxy Sol Lyon, Revêtement Industriel & Marquage Intérieur | Rénov Route",
    description:
      "Application résine époxy et peinture de sol à Lyon : entrepôts, garages, ateliers. Revêtement antidérapant, résistant aux charges lourdes. Devis gratuit.",
    url: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Résine Epoxy Sol Lyon, Revêtement Industriel & Marquage Intérieur',
    description: "Application résine époxy à Lyon : entrepôts, garages, ateliers. Revêtement antidérapant et durable. Devis gratuit.",
  },
};

export default function ResineSolMarquageInterieurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


