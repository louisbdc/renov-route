import type { ReactNode } from 'react'

/**
 * Réponse directe placée en tête d'un guide.
 *
 * Les pages à fort volume plafonnent à 1,2 % de CTR en position 8-9 : sur des
 * requêtes à réponse courte (« dimension place pmr », « zone bleue »,
 * « largeur place pmr »), l'AI Overview capte le clic. On ne récupère pas ce
 * clic — en revanche on peut devenir la source citée, ce qui suppose que la
 * réponse soit extractible : une phrase autonome, chiffrée, en tête de page.
 *
 * `data-speakable` marque le bloc pour la propriété `speakable` du schéma
 * Article (voir ArticleSchema).
 */

interface KeyAnswerProps {
  /** La question telle que l'internaute la pose. */
  question: string
  /** Réponse autonome de 40 à 60 mots, compréhensible hors contexte. */
  children: ReactNode
}

export default function KeyAnswer({ question, children }: KeyAnswerProps) {
  return (
    <aside
      className="not-prose my-8 border-l-4 border-[#FACC15] bg-[#F8FAFC] px-6 py-5 rounded-r-sm"
      aria-label="Réponse en bref"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2">
        En bref
      </p>
      <h2 className="text-base font-bold text-[#0F172A] mb-2 leading-snug" data-speakable="question">
        {question}
      </h2>
      <div className="text-slate-600 leading-relaxed text-[15px]" data-speakable="answer">
        {children}
      </div>
    </aside>
  )
}
