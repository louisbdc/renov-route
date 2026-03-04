import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides & conseils parking | Rénov Route',
  description: "Guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les prix. Conseils d'experts par Rénov Route.",
  alternates: {
    canonical: 'https://renov-route.com/guides/',
  },
  openGraph: {
    title: 'Guides & conseils parking | Rénov Route',
    description: "Guides pratiques sur la rénovation de parking, le marquage au sol, les normes PMR et les prix.",
    url: 'https://renov-route.com/guides/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Guides parking' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides & conseils parking | Rénov Route',
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
