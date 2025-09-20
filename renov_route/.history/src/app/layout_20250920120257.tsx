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
  title: "Renov Route",
  description: "Expert traçage marquage routier et parking en France. Réparation nids de poule, retraçage parking, marquage routier, enrobé résine. Devis gratuit, intervention rapide.",
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
