'use client'

import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'

const BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://renov-route.com/' },
    { '@type': 'ListItem', position: 2, name: 'Calculateur places PMR', item: 'https://renov-route.com/calculateur-places-pmr/' },
  ],
}

type Result = { count: number; obligation: boolean; note: string }

function computePmr(total: number, erp: boolean): Result | null {
  if (!Number.isFinite(total) || total <= 0) return null
  if (!erp) {
    return {
      count: Math.max(1, Math.ceil(total * 0.02)),
      obligation: false,
      note: "Parking privé non ouvert au public : pas d'obligation réglementaire stricte. Au moins 1 place PMR est recommandée (et 2 % de la capacité lors de travaux soumis à autorisation).",
    }
  }
  let count: number
  if (total <= 500) count = Math.max(2, Math.ceil(total / 50))
  else count = 10 + Math.ceil((total - 500) / 50)
  return {
    count,
    obligation: true,
    note: "Parking d'ERP (ouvert au public) : obligation issue de l'arrêté du 20 avril 2017. Le résultat est arrondi à l'entier supérieur.",
  }
}

export default function CalculateurPmrPage() {
  const [places, setPlaces] = useState('')
  const [erp, setErp] = useState(true)
  const total = parseInt(places, 10)
  const result = computePmr(total, erp)

  const tabBase = 'flex-1 rounded-lg px-4 py-3 border text-sm font-semibold transition-colors'
  const tabOn = 'bg-[#0F172A] text-white border-[#0F172A]'
  const tabOff = 'bg-white text-[#0F172A] border-slate-300 hover:border-[#0F172A]'

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 px-6 bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] mb-5">
            Calculateur de places PMR obligatoires
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Combien de places PMR votre parking doit-il compter ? Indiquez sa capacité : vous obtenez le nombre réglementaire et les dimensions à respecter, selon l&apos;arrêté du 20 avril 2017.
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section className="py-12 sm:py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <label htmlFor="places" className="block font-semibold text-[#0F172A] mb-2">
              Nombre total de places du parking
            </label>
            <input
              id="places"
              type="number"
              min={1}
              inputMode="numeric"
              value={places}
              onChange={(e) => setPlaces(e.target.value)}
              placeholder="ex. 80"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 mb-5 text-lg focus:outline-none focus:border-[#0F172A]"
            />

            <div className="font-semibold text-[#0F172A] mb-2">Type de parking</div>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button type="button" onClick={() => setErp(true)} className={`${tabBase} ${erp ? tabOn : tabOff}`}>
                Ouvert au public (ERP)
              </button>
              <button type="button" onClick={() => setErp(false)} className={`${tabBase} ${!erp ? tabOn : tabOff}`}>
                Privé (résidentiel / entreprise)
              </button>
            </div>

            {result ? (
              <div className="rounded-xl bg-[#0F172A] text-white p-6 text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#FACC15] mb-1">
                  {result.obligation ? 'Places PMR obligatoires' : 'Places PMR recommandées'}
                </div>
                <div className="text-5xl sm:text-6xl font-black my-1">{result.count}</div>
                <div className="text-slate-400 text-sm mb-3">
                  pour un parking de {total} place{total > 1 ? 's' : ''}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{result.note}</p>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-400 text-sm">
                Entrez le nombre de places pour afficher le résultat.
              </div>
            )}
          </div>

          {/* Dimensions réglementaires */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { v: '3,30 m', l: 'Largeur (place + bande 0,80 m)' },
              { v: '5,00 m', l: 'Longueur minimale' },
              { v: '≤ 2 %', l: 'Pente maximale' },
            ].map((d, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl font-black text-[#0F172A]">{d.v}</div>
                <div className="text-slate-500 text-xs mt-1">{d.l}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs text-center mt-3">
            Résultat indicatif basé sur l&apos;arrêté du 20 avril 2017. Pour un diagnostic personnalisé,{' '}
            <Link href="/devis" className="underline hover:text-[#0F172A]">demandez un devis gratuit</Link>.
          </p>
        </div>
      </section>

      {/* Méthode de calcul */}
      <section className="py-12 sm:py-16 px-6 bg-[#F0F4F8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
            Comment calcule-t-on le nombre de places PMR obligatoires ?
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Pour un parking d&apos;ERP (établissement recevant du public), le nombre minimal de places PMR dépend de la capacité totale, selon l&apos;arrêté du 20 avril 2017 :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0F172A] text-white text-left">
                  <th className="px-4 py-3">Capacité du parking</th>
                  <th className="px-4 py-3">Places PMR obligatoires</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3">1 à 50 places</td><td className="px-4 py-3 font-semibold">2 places minimum</td></tr>
                <tr><td className="px-4 py-3">51 à 500 places</td><td className="px-4 py-3 font-semibold">1 place pour 50 (soit 2 %)</td></tr>
                <tr><td className="px-4 py-3">Plus de 500 places</td><td className="px-4 py-3 font-semibold">10 + 1 par tranche de 50 au-delà de 500</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 mt-6 leading-relaxed">
            Le calcul s&apos;arrondit toujours à l&apos;entier supérieur. Pour aller plus loin, consultez nos guides détaillés :{' '}
            <Link href="/guides/normes-pmr-parking/" className="text-[#0F172A] font-semibold underline">normes PMR parking</Link>,{' '}
            <Link href="/guides/dimensions-nombre-places-pmr-parking/" className="text-[#0F172A] font-semibold underline">dimensions des places PMR</Link> et{' '}
            <Link href="/guides/mise-en-conformite-parking-pmr/" className="text-[#0F172A] font-semibold underline">mise en conformité PMR</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-6 bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter leading-[0.95] mb-5">
            Un parking à mettre en conformité ?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
            Basés à Lyon, nous réalisons le <Link href="/marquage-au-sol-lyon/" className="text-[#FACC15] underline underline-offset-2">marquage au sol à Lyon</Link> et le <Link href="/competences/tracage-retracage-parking/" className="text-[#FACC15] underline underline-offset-2">traçage de places PMR</Link> partout en France. Diagnostic gratuit et devis sous 48h.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </Layout>
  )
}
