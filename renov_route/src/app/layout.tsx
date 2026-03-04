import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { Agentation } from "agentation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#1f2937',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: {
    default: "Rénov Route : Marquage au Sol & Réparation Route Lyon (69)",
    template: "%s | Rénov Route"
  },
  description: "Spécialiste du marquage au sol et rénovation de parking à Lyon et Rhône-Alpes depuis 2014. Plus de 1 000 projets réalisés. Devis gratuit sous 24h.",
  applicationName: 'Renov Route',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Renov Route',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'msapplication-TileColor': '#1f2937',
    'msapplication-TileImage': '/assets/logos/logo.avif',
    'supported-color-schemes': 'dark',
  },
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
    url: 'https://renov-route.com/',
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
    title: 'Rénov Route : Marquage au Sol & Réparation Route Lyon (69)',
    description: 'Expert en marquage au sol, traçage parking et réparation de nids de poule à Lyon et Rhône-Alpes. Devis gratuit.',
    images: ['https://renov-route.com/assets/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://renov-route.com/',
    languages: {
      'fr': 'https://renov-route.com/',
      'x-default': 'https://renov-route.com/',
    },
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/background_home_page.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <CookieConsent />
        <AnalyticsTracker />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
