'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/faq-data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative topo-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-neon shadow-neon"></span>
            <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            QUESTIONS <span className="text-brand">FRÉQUENTES</span>
          </h2>
          <p className="text-gray-400">Tout savoir sur nos services de marquage routier et signalisation.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-brand/20 overflow-hidden transition-all duration-300 hover:border-brand/40"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-lg pr-4">{item.question}</span>
                  <span
                    className={`material-symbols-outlined text-brand-neon shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
