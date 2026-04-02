import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides & conseils parking et marquage au sol',
  description: "Guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les prix à Lyon et Rhône-Alpes. Conseils d'experts Rénov Route.",
  alternates: {
    canonical: 'https://renov-route.com/guides/',
  },
  openGraph: {
    title: 'Guides & conseils parking et marquage au sol',
    description: "Guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les prix.",
    url: 'https://renov-route.com/guides/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Guides parking' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides & conseils parking et marquage au sol',
    description: "Guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les prix.",
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
