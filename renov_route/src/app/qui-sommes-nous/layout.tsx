import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous - Expert marquage au sol Lyon',
  description: 'Rénov Route, expert en marquage routier et réparation de voirie à Lyon depuis 2014. Découvrez notre équipe, notre histoire et nos valeurs.',
  alternates: {
    canonical: 'https://renov-route.com/qui-sommes-nous/',
  },
  openGraph: {
    title: 'Qui sommes-nous - Expert marquage au sol Lyon',
    description: 'Rénov Route, expert en marquage routier et réparation de voirie à Lyon depuis 2014. Découvrez notre équipe, notre histoire et nos valeurs.',
    url: 'https://renov-route.com/qui-sommes-nous/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qui sommes-nous - Expert marquage au sol Lyon',
    description: 'Rénov Route, expert en marquage routier et réparation de voirie à Lyon depuis 2014. Notre équipe et nos valeurs.',
  },
};

export default function QuiSommesNousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
