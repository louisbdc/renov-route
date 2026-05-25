import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculateur places PMR obligatoires parking | Rénov\'Route',
  description:
    "Calculez gratuitement le nombre de places PMR obligatoires pour votre parking selon sa capacité (arrêté du 20 avril 2017) et les dimensions réglementaires.",
  alternates: {
    canonical: 'https://renov-route.com/calculateur-places-pmr/',
  },
  openGraph: {
    title: 'Calculateur de places PMR obligatoires pour parking | Rénov\'Route',
    description:
      "Combien de places PMR pour votre parking ? Calcul gratuit selon la capacité et l'arrêté du 20 avril 2017, avec les dimensions réglementaires.",
    url: 'https://renov-route.com/calculateur-places-pmr/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Calculateur places PMR parking — Rénov\'Route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculateur de places PMR obligatoires pour parking',
    description: "Calcul gratuit du nombre de places PMR selon la capacité de votre parking et l'arrêté du 20 avril 2017.",
  },
}

export default function CalculateurPmrLayout({ children }: { children: React.ReactNode }) {
  return children
}
