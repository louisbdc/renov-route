import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0d11] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-amber-400 text-7xl font-bold mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retrouvez nos services ci-dessous.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/devis"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 hover:bg-white/5"
          >
            Demander un devis
          </Link>
        </div>
        <nav className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 mb-4">Nos services</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <li>
              <Link href="/competences/tracage-retracage-parking" className="text-gray-400 hover:text-amber-400 transition-colors">
                Marquage de parking
              </Link>
            </li>
            <li>
              <Link href="/competences/reparation-nids-de-poule" className="text-gray-400 hover:text-amber-400 transition-colors">
                Réparation nids de poule
              </Link>
            </li>
            <li>
              <Link href="/competences/signalisation-verticale" className="text-gray-400 hover:text-amber-400 transition-colors">
                Signalisation verticale
              </Link>
            </li>
            <li>
              <Link href="/competences/resine-sol-marquage-interieur" className="text-gray-400 hover:text-amber-400 transition-colors">
                Résine de sol
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="text-gray-400 hover:text-amber-400 transition-colors">
                Nos réalisations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
