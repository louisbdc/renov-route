import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Revêtement Epoxy Sol Lyon - Résine et Marquage Intérieur",
  description:
    "Entreprise sol epoxy Rhône-Alpes : résine de sol industrielle et marquage intérieur professionnel. Revêtement durable, peinture sol garage Lyon. Devis gratuit.",
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
  },
  openGraph: {
    title: "Revêtement Epoxy Sol Lyon - Résine et Marquage Intérieur",
    description:
      "Entreprise sol epoxy Rhône-Alpes : résine de sol industrielle et marquage intérieur professionnel. Revêtement durable, peinture sol garage Lyon.",
    url: 'https://renov-route.com/competences/resine-sol-marquage-interieur/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revêtement Epoxy Sol Lyon - Résine et Marquage Intérieur',
    description: 'Résine de sol industrielle et marquage intérieur professionnel à Lyon. Revêtement durable, peinture sol garage. Devis gratuit.',
  },
};

export default function ResineSolMarquageInterieurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


