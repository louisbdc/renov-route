import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traçage et Retraçage de Parking - Marquage Professionnel | Renov Route',
  description:
    "Traçage et retraçage de parking professionnel. Marquage au sol durable, respect des normes, finition soignée.",
  keywords:
    'traçage parking, marquage parking, retraçage parking, marquage au sol, parking professionnel, signalisation parking, marquage durable',
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking',
  },
  openGraph: {
    title: 'Traçage et Retraçage de Parking - Marquage Professionnel | Renov Route',
    description:
      "Traçage et retraçage de parking professionnel. Marquage au sol durable, respect des normes, finition soignée.",
    url: 'https://renov-route.com/competences/tracage-retracage-parking',
  },
};

export default function TracageRetracageParkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


