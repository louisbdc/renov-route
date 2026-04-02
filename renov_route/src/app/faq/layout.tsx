import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Marquage au Sol - Questions Fréquentes",
  description:
    "Réponses à vos questions sur le marquage au sol, peinture parking et réparation nids de poule à Lyon et Rhône-Alpes. Conseils d'experts Rénov Route.",
  alternates: {
    canonical: "https://renov-route.com/faq/",
  },
  openGraph: {
    title: "FAQ Marquage au Sol - Questions Fréquentes | Rénov Route",
    description: "Réponses à vos questions sur le marquage au sol, peinture parking et réparation nids de poule à Lyon et dans le Rhône.",
    url: "https://renov-route.com/faq/",
    images: [{ url: "https://renov-route.com/assets/images/og-image.jpg", width: 1200, height: 630, alt: "Renov Route - Expert Marquage Routier" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Marquage au Sol - Questions Fréquentes | Rénov Route',
    description: 'Réponses à vos questions sur le marquage au sol, peinture parking et réparation nids de poule à Lyon et dans le Rhône.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
