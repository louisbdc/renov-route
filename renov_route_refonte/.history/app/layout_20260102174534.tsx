import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rénov Route - Spécialiste Marquage Rout& Signalisation',
  description: 'Expertise de plus de 10 ans au service de votre sécurité et accessibilité.',
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
      </body>
    </html>
  )
}

