import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barrières, bornes et butées de parking : devis en 48h',
  description:
    "Accessoires de parking professionnels à Lyon : bornes anti-bélier, ralentisseurs, butées de parking. Installation et maintenance. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/accessoires-parking/',
  },
  openGraph: {
    title: 'Barrières, bornes et butées de parking : devis en 48h',
    description:
      "Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking. Installation et maintenance d'équipements de sécurité pour parkings.",
    url: 'https://renov-route.com/competences/accessoires-parking/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrières, bornes et butées de parking : devis en 48h',
    description: "Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées. Installation et maintenance d'équipements de sécurité.",
  },
};

export default function AccessoiresParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


