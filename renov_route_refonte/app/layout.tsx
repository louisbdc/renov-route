import './globals.css'
import type { Metadata } from 'next'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Rénov Route - Spécialiste Marquage Routier & Signalisation',
  description: 'Expert en marquage au sol, traçage de parkings et signalisation verticale. Intervention rapide pour professionnels et collectivités en Rhône-Alpes et partout en France.',
  openGraph: {
    title: 'Rénov Route - Spécialiste Marquage Routier & Signalisation',
    description: 'Expert en marquage au sol, traçage de parkings et signalisation verticale. Intervention rapide pour professionnels et collectivités en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com',
    siteName: 'Renov Route',
    images: [
      {
        url: 'https://renov-route.com/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Renov Route - Marquage Routier',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Import des Polices Google Fonts et Icônes Material */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-brand selection:text-white overflow-x-hidden">
        {children}
        <ScrollProgress />
      </body>
    </html>
  )
}

