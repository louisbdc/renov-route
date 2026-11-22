import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Résine de sol industriel à Lyon : époxy et marquage' },
  description:
    "Sol industriel et résine époxy à Lyon : revêtement d'entrepôts, ateliers, garages. Marquage de zones, allées, sécurité. Antidérapant, résistant aux charges lourdes. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
  },
  openGraph: {
    title: 'Résine de sol industriel à Lyon : époxy et marquage',
    description:
      "Application résine époxy et peinture de sol à Lyon : entrepôts, garages, ateliers. Revêtement antidérapant, résistant aux charges lourdes. Devis gratuit.",
    url: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Rénov\'Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Résine de sol industriel à Lyon : époxy et marquage',
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


