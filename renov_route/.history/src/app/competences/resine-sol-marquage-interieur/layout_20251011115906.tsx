import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Revêtement Epoxy Sol Lyon - Résine et Marquage Intérieur",
  description:
    "Entreprise sol epoxy Rhône-Alpes : résine de sol industrielle et marquage intérieur professionnel. Revêtement durable, peinture sol garage Lyon. Devis gratuit.",
  keywords:
    "revêtement epoxy sol lyon, résine sol lyon, peinture sol epoxy lyon, sol epoxy garage lyon, marquage intérieur lyon, résine industrielle rhône-alpes",
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur',
  },
  openGraph: {
    title: "Revêtement Epoxy Sol Lyon - Résine et Marquage Intérieur",
    description:
      "Entreprise sol epoxy Rhône-Alpes : résine de sol industrielle et marquage intérieur professionnel. Revêtement durable, peinture sol garage Lyon.",
    url: 'https://renov-route.com/competences/resine-sol-marquage-interieur',
  },
};

export default function ResineSolMarquageInterieurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


