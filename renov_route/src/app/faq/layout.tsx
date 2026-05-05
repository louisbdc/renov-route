import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Marquage au Sol 2026 : réponses d'experts | Rénov'Route",
  description:
    "Vos questions sur le marquage parking, traçage au sol et nids de poule — répondues par un expert certifié NF EN 1436. Lyon et Rhône-Alpes. Devis gratuit 24h.",
  alternates: {
    canonical: "https://renov-route.com/faq/",
  },
  openGraph: {
    title: "FAQ Marquage au Sol 2026 : réponses d'experts | Rénov'Route",
    description: "Vos questions sur le marquage parking, traçage au sol et nids de poule — répondues par un expert certifié NF EN 1436. Lyon et Rhône-Alpes.",
    url: "https://renov-route.com/faq/",
    images: [{ url: "https://renov-route.com/assets/images/og-image.jpg", width: 1200, height: 630, alt: "Renov Route - Expert Marquage Routier" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ Marquage au Sol 2026 : réponses d'experts | Rénov'Route",
    description: "Vos questions sur le marquage parking, traçage au sol et nids de poule — répondues par un expert certifié NF EN 1436. Lyon et Rhône-Alpes.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
