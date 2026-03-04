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
      <div className="pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-gray-300">Mentions légales</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Mentions légales
            </h1>
          </div>

          <div className="space-y-10 text-gray-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Éditeur</h2>
              <p>
                RENOV&apos;ROUTE, SARL au capital de 10 000 &euro;<br />
                SIRET : 818 745 515 00010 — RCS Lyon<br />
                6, allée du ruisseau de Ribbes, 69160 Tassin-la-Demi-Lune<br />
                Téléphone : 07 86 81 96 92 — Email : contact@renov-route.fr
              </p>
              <p className="mt-3">
                Directeur de la publication : Xavier de Caumont
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Hébergeur</h2>
              <p>
                OVH SAS — 2, rue Kellermann, 59100 Roubaix, France<br />
                <a href="https://www.ovhcloud.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Données personnelles</h2>
              <p>
                Consultez notre{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">
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
