import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessoires de Parking - Bornes, Ralentisseurs, Butées | Renov Route',
  description:
    "Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking. Installation et maintenance d'équipements de sécurité pour parkings.",
  keywords:
    'accessoires parking, bornes anti-bélier, ralentisseurs, butées parking, équipements sécurité, mobilier urbain, protection parking',
  alternates: {
    canonical: 'https://renov-route.com/competences/accessoires-parking',
  },
  openGraph: {
    title: 'Accessoires de Parking - Bornes, Ralentisseurs, Butées | Renov Route',
    description:
      "Accessoires de parking professionnels : bornes anti-bélier, ralentisseurs, butées de parking. Installation et maintenance d'équipements de sécurité pour parkings.",
    url: 'https://renov-route.com/competences/accessoires-parking',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
};

export default function AccessoiresParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


