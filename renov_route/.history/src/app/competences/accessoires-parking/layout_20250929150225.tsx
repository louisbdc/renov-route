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
  },
};

export default function AccessoiresParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


