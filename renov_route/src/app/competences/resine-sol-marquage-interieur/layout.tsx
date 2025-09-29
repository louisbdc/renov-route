import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Résine de Sol et Marquage d'Intérieur - Solutions Professionnelles | Renov Route",
  description:
    "Solutions complètes de résine pour sols et marquage intérieur professionnel. Revêtements durables, marquage industriel, finition esthétique pour tous espaces intérieurs.",
  keywords:
    "résine de sol, marquage intérieur, revêtement résine, sol industriel, marquage professionnel, résine époxy, sol antidérapant, marquage usine",
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur',
  },
  openGraph: {
    title: "Résine de Sol et Marquage d'Intérieur - Solutions Professionnelles | Renov Route",
    description:
      "Solutions complètes de résine pour sols et marquage intérieur professionnel. Revêtements durables, marquage industriel, finition esthétique pour tous espaces intérieurs.",
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


