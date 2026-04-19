import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#D1DCE5] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-[#FACC15] text-8xl sm:text-9xl font-black italic tracking-tighter leading-none mb-8">404</p>
        <h1 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-6">
          Page introuvable.
        </h1>
        <p className="text-slate-500 mb-10 leading-relaxed font-medium">
          La page que vous recherchez n&apos;existe pas ou a été déplacée. Retrouvez nos services ci-dessous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] px-8 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all shadow-[4px_4px_0_rgba(250,204,21,0.25)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
          >
            Demander un devis
          </Link>
        </div>
        <nav className="border-t border-slate-200 pt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6">Nos services</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-[0.1em]">
            <li>
              <Link href="/competences/tracage-retracage-parking" className="text-[#0F172A] hover:text-[#FACC15] transition-colors">
                Marquage parking
              </Link>
            </li>
            <li>
              <Link href="/competences/reparation-nids-de-poule" className="text-[#0F172A] hover:text-[#FACC15] transition-colors">
                Nids de poule
              </Link>
            </li>
            <li>
              <Link href="/competences/signalisation-verticale" className="text-[#0F172A] hover:text-[#FACC15] transition-colors">
                Signalisation
              </Link>
            </li>
            <li>
              <Link href="/competences/resine-sol-marquage-interieur" className="text-[#0F172A] hover:text-[#FACC15] transition-colors">
                Résine de sol
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="text-[#0F172A] hover:text-[#FACC15] transition-colors">
                Réalisations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
