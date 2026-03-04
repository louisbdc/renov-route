import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Résine Sol & Marquage Intérieur - Renov Route',
  description: 'Revêtement résine pour sols intérieurs et marquage industriel. Solutions durables pour entrepôts, usines et locaux professionnels.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/resine-sol-marquage-interieur',
  },
  openGraph: {
    title: 'Résine Sol & Marquage Intérieur - Renov Route',
    description: 'Revêtement résine pour sols intérieurs et marquage industriel. Solutions durables pour entrepôts, usines et locaux professionnels en Rhône-Alpes.',
    url: 'https://renov-route.com/competences/resine-sol-marquage-interieur',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/resine_sol.png',
        width: 1200,
        height: 630,
        alt: 'Résine sol et marquage intérieur - Renov Route',
      },
    ],
  },
}

export default function ResineSolMarquageInterieurPage() {
  return (
    <>
      <StructuredData
        type="service"
        serviceName="Résine Sol & Marquage Intérieur"
        serviceDescription="Revêtement résine pour sols intérieurs et marquage industriel. Solutions durables et résistantes pour entrepôts, usines et locaux professionnels en Rhône-Alpes et partout en France."
        serviceType="Revêtement de sol et marquage"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.renov-route.com/' },
          { name: 'Compétences', url: 'https://www.renov-route.com/competences' },
          { name: 'Résine Sol & Marquage Intérieur', url: 'https://www.renov-route.com/competences/resine-sol-marquage-interieur' }
        ]}
      />
      <main className="bg-asphalt text-white w-full overflow-hidden min-h-screen">
        <Navigation />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-neon shadow-neon"></span>
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Revêtement Intérieur</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              RÉSINE SOL & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">MARQUAGE INTÉRIEUR</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/resine_sol.png"
                alt="Revêtement résine sol intérieur"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  REVÊTEMENT <span className="text-brand">RÉSINE</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  Les sols industriels et commerciaux nécessitent des revêtements robustes capables de résister aux charges lourdes, au trafic intense et aux agressions chimiques. En Rhône-Alpes, où l'industrie et le commerce sont dynamiques, nous proposons des solutions de revêtement résine adaptées aux contraintes spécifiques de chaque environnement. Que ce soit pour un entrepôt, une usine, un parking couvert ou des locaux commerciaux, nos revêtements offrent une durabilité exceptionnelle et facilitent l'entretien.
                </p>
                <p className="leading-relaxed mb-4">
                  Notre expertise en résine de sol nous permet de réaliser des marquages personnalisés selon vos besoins : zones de stockage, voies de circulation, places de stationnement, signalétique PMR. La résine offre une surface lisse, facile à nettoyer et résistante aux hydrocarbures et produits chimiques. Pour les espaces extérieurs, nous proposons également nos services de <Link href="/competences/tracage-retracage-parking" className="text-brand hover:text-brand-neon underline">marquage au sol extérieur</Link> et d'<Link href="/competences/accessoires-parking" className="text-brand hover:text-brand-neon underline">accessoires de parking</Link> pour une solution complète d'aménagement.
                </p>
                <p className="leading-relaxed">
                  Revêtement résine pour sols intérieurs et marquage industriel. 
                  Solutions durables et résistantes pour entrepôts, usines et locaux professionnels.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Avantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Résistance aux charges lourdes et trafic intense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Facilité d'entretien et nettoyage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Marquage personnalisé selon vos besoins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Résistance chimique et aux hydrocarbures</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Entrepôts et zones de stockage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Usines et ateliers de production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Parkings couverts et garages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Locaux commerciaux et bureaux</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services complémentaires */}
          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6 text-center">
              SERVICES <span className="text-brand">COMPLÉMENTAIRES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/competences/tracage-retracage-parking"
                className="group p-6 rounded-xl border border-brand/20 hover:border-brand/50 transition-all hover:bg-brand/5"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neon transition-colors">
                  Traçage & Retraçage de Parking
                </h3>
                <p className="text-gray-400 text-sm">
                  Marquage au sol extérieur pour compléter vos aménagements intérieurs et créer une cohérence visuelle.
                </p>
              </Link>
              <Link
                href="/competences/conseil-expertise"
                className="group p-6 rounded-xl border border-brand/20 hover:border-brand/50 transition-all hover:bg-brand/5"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neon transition-colors">
                  Conseil & Expertise
                </h3>
                <p className="text-gray-400 text-sm">
                  Audit et conseil technique pour optimiser vos aménagements intérieurs et extérieurs.
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-display font-bold rounded-full hover:bg-brand-light hover:shadow-neon transition-all"
            >
              Demander un devis
            </Link>
            <Link
              href="/competences"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand/30 bg-brand/5 hover:bg-brand/10 hover:border-brand/50 transition-all text-brand hover:text-brand-neon"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Retour aux compétences
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

