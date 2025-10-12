'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl mt-4 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl' 
            : 'bg-transparent backdrop-blur-none border border-transparent shadow-none'
        }`} id="navbar">
          <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-8">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity duration-300 flex items-center space-x-2 sm:space-x-3" onClick={closeMobileMenu}>
                <Image 
                  src="/assets/logos/logo.avif" 
                  alt="Rénov Route - Expert marquage au sol et réparation route Lyon" 
                  width={32} 
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <h1 className="text-lg sm:text-2xl font-bold text-white">Renov-Route</h1>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link 
                href="/" 
                className="text-white/80 hover:text-white font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105"
              >
                Accueil
              </Link>
              <Link 
                href="/competences" 
                className="text-white/80 hover:text-white font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105"
              >
                Compétences
              </Link>
              <Link 
                href="/realisations" 
                className="text-white/80 hover:text-white font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105"
              >
                Réalisations
              </Link>
              <Link 
                href="/qui-sommes-nous" 
                className="text-white/80 hover:text-white font-medium text-base lg:text-lg transition-all duration-300 hover:scale-105"
              >
                Qui sommes-nous
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/devis" 
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-md transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 text-sm lg:text-base"
              >
                Demander un devis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Expanded Navbar */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 pb-4">
              <nav className="py-4">
                <div className="space-y-2">
                  <Link 
                    href="/" 
                    className="block text-white hover:text-gray-300 font-medium text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Accueil
                  </Link>
                  <Link 
                    href="/competences" 
                    className="block text-white hover:text-gray-300 font-medium text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Compétences
                  </Link>
                  <Link 
                    href="/realisations" 
                    className="block text-white hover:text-gray-300 font-medium text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Réalisations
                  </Link>
                  <Link 
                    href="/qui-sommes-nous" 
                    className="block text-white hover:text-gray-300 font-medium text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Qui sommes-nous
                  </Link>
                </div>
                
                {/* Mobile CTA Button */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link 
                    href="/devis" 
                    className="block w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center backdrop-blur-sm border border-white/30"
                    onClick={closeMobileMenu}
                  >
                    Demander un devis
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
