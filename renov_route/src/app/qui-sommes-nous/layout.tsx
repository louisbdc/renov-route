import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous - Rénov Route Lyon',
  description: 'Rénov Route, expert marquage routier et réparation nids de poule depuis 2014. Notre équipe, notre histoire et notre mission.',
  alternates: {
    canonical: 'https://renov-route.com/qui-sommes-nous/',
  },
  openGraph: {
    title: 'Qui sommes-nous - Rénov Route Lyon',
    description: 'Rénov Route, expert marquage routier et réparation nids de poule depuis 2014. Notre équipe, notre histoire et notre mission.',
    url: 'https://renov-route.com/qui-sommes-nous/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route - Expert Marquage Routier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qui sommes-nous - Rénov Route Lyon',
    description: 'Rénov Route, expert marquage routier et réparation nids de poule depuis 2014. Notre équipe, notre histoire et notre mission.',
  },
};

export default function QuiSommesNousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
