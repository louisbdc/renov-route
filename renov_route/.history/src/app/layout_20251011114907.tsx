import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import SafariAnimationFix from "@/components/SafariAnimationFix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rénov Route : Marquage au Sol & Réparation Route Lyon (69)",
    template: "%s | Rénov Route"
  },
  description: "Expert en marquage au sol, traçage parking et réparation de nids de poule à Lyon et Rhône-Alpes. Devis gratuit et intervention rapide. ☎ 07 86 81 96 92",
  keywords: "traçage marquage routier, marquage parking, retraçage parking, réparation nids de poule, enrobé résine, marquage routier France, traçage parking professionnel, rénovation parking, signalisation horizontale, marquage au sol, tracage route, marquage chaussée, réparation route, entretien parking, devis traçage gratuit, expert marquage routier, travaux voirie, aménagement parking, marquage industriel, tracage commercial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://renov-route.com',
    siteName: 'Renov Route',
    title: 'Rénov Route : Marquage au Sol & Réparation Route Lyon (69)',
    description: 'Expert en marquage au sol, traçage parking et réparation de nids de poule à Lyon et Rhône-Alpes. Devis gratuit et intervention rapide.',
    images: [
      {
        url: 'https://renov-route.com/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Renov Route - Expert Traçage Marquage Routier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renov Route - Expert Traçage Marquage Routier & Parking France',
    description: 'Expert traçage marquage routier et parking en France. Devis gratuit, intervention rapide.',
    images: ['https://renov-route.com/assets/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://renov-route.com',
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logos/logo.avif", type: "image/avif" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/logos/logo.avif", sizes: "180x180", type: "image/avif" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/mask-icon.svg",
        color: "#1f2937"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SafariAnimationFix>
          <AnalyticsTracker pageTitle="Renov Route" pagePath="/">
            {children}
          </AnalyticsTracker>
          <CookieConsent />
        </SafariAnimationFix>
      </body>
    </html>
  );
}
