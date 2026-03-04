'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 nav-glass transition-all duration-300 rounded-full px-4">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.avif" 
            alt="RénovRoute Logo" 
            width={24} 
            height={24} 
            className="text-brand-neon"
          />
          <span className="font-display text-xl md:text-2xl tracking-tighter text-white">
            RÉNOV <span className="text-brand">ROUTE</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide text-gray-300">
          <Link href="/#services" className="hover:text-brand-neon transition-colors">SERVICES</Link>
          <Link href="/#expertise" className="hover:text-brand-neon transition-colors">EXPERTISE</Link>
          <Link href="/#realisations" className="hover:text-brand-neon transition-colors">RÉALISATIONS</Link>
          <Link href="/qui-sommes-nous" className="hover:text-brand-neon transition-colors">QUI SOMMES-NOUS</Link>
          <Link href="/#contact" className="px-6 py-2.5 bg-brand text-white font-bold rounded-full hover:bg-brand-light hover:shadow-neon transition-all duration-300 transform hover:-translate-y-0.5">
            DEMANDER UN DEVIS
          </Link>
        </div>
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
      {/* Menu Mobile / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-3 rounded-2xl nav-glass-menu overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="px-4 py-4 space-y-2 flex flex-col items-center">
            <a 
              href="#services" 
              className="block w-full text-center px-3 py-3 rounded-xl text-base font-medium transition-colors text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#expertise" 
              className="block w-full text-center px-3 py-3 rounded-xl text-base font-medium transition-colors text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#realisations" 
              className="block w-full text-center px-3 py-3 rounded-xl text-base font-medium transition-colors text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </a>
            <Link 
              href="/qui-sommes-nous" 
              className="block w-full text-center px-3 py-3 rounded-xl text-base font-medium transition-colors text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Qui sommes-nous
            </Link>
            <div className="pt-2 w-full">
              <a 
                href="#contact" 
                className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demander un Devis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

