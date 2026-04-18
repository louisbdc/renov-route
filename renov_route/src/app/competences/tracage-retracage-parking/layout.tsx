import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marquage au Sol Lyon, Traçage Parking Pro dès 2,50€/ml',
  description:
    "Entreprise de marquage au sol à Lyon depuis 2014. Traçage et retraçage de parking : places, flèches, passages piétons, zones PMR. Peinture normée, résultat durable. Devis gratuit sous 24h.",
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking/',
  },
  openGraph: {
    title: 'Marquage au Sol Lyon, Traçage Parking Pro | Rénov Route',
    description:
      "Entreprise de marquage au sol à Lyon depuis 2014. Traçage et retraçage de parking : places, flèches, passages piétons, zones PMR. Devis gratuit sous 24h.",
    url: 'https://renov-route.com/competences/tracage-retracage-parking/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marquage au Sol Lyon, Traçage Parking Pro dès 2,50€/ml',
    description: "Entreprise de marquage au sol à Lyon depuis 2014. Traçage parking, zones PMR, passages piétons. Devis gratuit sous 24h.",
  },
};

export default function TracageRetracageParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


