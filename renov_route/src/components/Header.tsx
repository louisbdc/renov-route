'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';

const NAV_LINKS = [
  { label: 'Compétences', href: '/competences' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Guides', href: '/guides' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const analytics = useAnalytics();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    analytics.trackMobileMenu(isMobileMenuOpen ? 'close' : 'open');
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const barTone = isScrolled || isMobileMenuOpen
    ? 'bg-[#0F172A] border-b border-[#1E293B] py-3 shadow-[0_4px_20px_rgba(15,23,42,0.15)]'
    : 'bg-[#0F172A] py-5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barTone}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMobileMenu}
        >
          <div className="bg-[#FACC15] p-1.5 rounded-sm shadow-[3px_3px_0_rgba(15,23,42,0.25)] transition-transform group-hover:-rotate-2">
            <Image
              src="/assets/logos/logo.avif"
              alt="Rénov Route - Expert marquage au sol et réparation route Lyon"
              width={28}
              height={28}
              priority
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl font-black uppercase italic tracking-tighter text-white">
              Renov-Route
            </span>
            <span className="hidden sm:block text-[8px] font-bold tracking-[0.3em] uppercase text-[#FACC15] mt-1">
              Expertise & Voirie
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#FACC15] transition-colors"
              onClick={() => analytics.trackNavClick('header_desktop', link.label, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/devis"
          className="hidden lg:inline-flex items-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-6 py-3 rounded-sm font-black text-[11px] uppercase tracking-[0.2em] transition-colors shadow-[4px_4px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          onClick={() => analytics.trackCtaClick('header', 'Demander un devis', '/devis')}
        >
          Demander un devis
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className="w-7 h-7 flex flex-col justify-center space-y-1.5">
            <span className={`block h-[2px] w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block h-[2px] w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0F172A] pt-24 px-6 flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
      >
        <nav className="flex flex-col gap-4 mt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-white hover:text-[#FACC15] border-b border-white/10 pb-4 transition-colors"
              onClick={() => {
                analytics.trackNavClick('header_mobile', link.label, link.href);
                closeMobileMenu();
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/devis"
          className="mt-8 bg-[#FACC15] hover:bg-white text-[#0F172A] w-full py-5 font-black uppercase text-sm tracking-[0.2em] text-center rounded-sm"
          onClick={() => {
            analytics.trackCtaClick('header', 'Demander un devis', '/devis');
            closeMobileMenu();
          }}
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
