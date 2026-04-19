import { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Mentions légales - Renov Route',
  description: 'Mentions légales du site renov-route.com.',
  alternates: {
    canonical: 'https://renov-route.com/mentions-legales/',
  },
}

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 bg-[#F0F4F8] min-h-screen">
        <article className="max-w-3xl mx-auto">
          <div className="mb-16">
            <nav className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">Accueil</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#0F172A]">Mentions légales</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A]">
              Mentions légales.
            </h1>
          </div>

          <div className="space-y-12 text-slate-600 leading-relaxed font-medium">

            <section>
              <h2 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4">Éditeur</h2>
              <p>
                RENOV&apos;ROUTE, SARL au capital de 10 000 &euro;<br />
                SIRET : 818 745 515 00010 — RCS Lyon<br />
                6, allée du ruisseau de Ribbes, 69160 Tassin-la-Demi-Lune<br />
                Téléphone : 07 86 81 96 92 — Email : contact@renov-route.fr
              </p>
              <p className="mt-4">
                Directeur de la publication : Xavier de Caumont
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4">Hébergeur</h2>
              <p>
                OVH SAS — 2, rue Kellermann, 59100 Roubaix, France<br />
                <a href="https://www.ovhcloud.com" className="text-[#0F172A] underline decoration-[#FACC15] decoration-2 underline-offset-[3px] hover:bg-[#FACC15]" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4">Données personnelles</h2>
              <p>
                Consultez notre{' '}
                <Link href="/privacy-policy" className="text-[#0F172A] underline decoration-[#FACC15] decoration-2 underline-offset-[3px] hover:bg-[#FACC15]">
                  politique de confidentialité
                </Link>.
              </p>
            </section>

          </div>
        </article>
      </div>
    </Layout>
  )
}
