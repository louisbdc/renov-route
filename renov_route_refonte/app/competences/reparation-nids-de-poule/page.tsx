import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Réparation de Nids de Poule - Renov Route',
  description: 'Réparation de voiries dégradées avec enrobé résine. Intervention rapide pour sécuriser vos routes et parkings en Rhône-Alpes.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/reparation-nids-de-poule',
  },
  openGraph: {
    title: 'Réparation de Nids de Poule - Renov Route',
    description: 'Réparation de voiries dégradées avec enrobé résine. Intervention rapide pour sécuriser vos routes et parkings en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com/competences/reparation-nids-de-poule',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/reparation_ndp.png',
        width: 1200,
        height: 630,
        alt: 'Réparation de nids de poule - Renov Route',
      },
    ],
  },
}

export default function ReparationNidsDePoulePage() {
  return (
    <>
      <StructuredData
        type="service"
        serviceName="Réparation de Nids de Poule"
        serviceDescription="Réparation de voiries dégradées avec enrobé résine. Intervention rapide pour sécuriser vos routes et parkings en Rhône-Alpes et partout en France."
        serviceType="Réparation routière"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.renov-route.com/' },
          { name: 'Compétences', url: 'https://www.renov-route.com/competences' },
          { name: 'Réparation de Nids de Poule', url: 'https://www.renov-route.com/competences/reparation-nids-de-poule' }
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Réparation Voirie</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              RÉPARATION DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">NIDS DE POULE</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/reparation_ndp.png"
                alt="Réparation de nids de poule"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  RÉPARATION DE <span className="text-brand">VOIRIES</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  Les nids de poule et les dégradations de voiries représentent un danger pour les usagers et peuvent causer des dommages aux véhicules. En Rhône-Alpes, où les conditions climatiques peuvent être rigoureuses, la maintenance préventive et curative des routes et parkings est essentielle. Nous intervenons rapidement sur tout le territoire français pour réparer vos voiries dégradées avec des solutions professionnelles et durables.
                </p>
                <p className="leading-relaxed mb-4">
                  Notre technique de réparation par rebouchage avec enrobé résine à froid permet une intervention rapide et efficace. Cette méthode offre l'avantage d'une remise en circulation immédiate, minimisant les perturbations pour vos usagers. Que ce soit pour des routes communales, des parkings d'entreprises ou des voiries privées, nous adaptons nos solutions à vos contraintes. Après réparation, nous pouvons également intervenir pour le <Link href="/competences/tracage-retracage-parking" className="text-brand hover:text-brand-neon underline">marquage au sol</Link> et l'installation d'<Link href="/competences/accessoires-parking" className="text-brand hover:text-brand-neon underline">accessoires de parking</Link> pour compléter votre aménagement.
                </p>
                <p className="leading-relaxed">
                  Réparation de nids de poule et voiries dégradées avec enrobé résine. 
                  Intervention rapide pour sécuriser vos routes et parkings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technique</h3>
                <p className="mb-3">
                  Réparation par rebouchage avec enrobé résine à froid. 
                  Solution rapide et durable qui permet une remise en circulation immédiate.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Nettoyage et préparation de la zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Rebouchage avec enrobé résine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Compactage et finition</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Avantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Intervention rapide (remise en circulation immédiate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Résistance aux intempéries et au trafic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Solution économique pour petites réparations</span>
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
                  Après réparation, optimisez vos espaces avec un marquage au sol professionnel et durable.
                </p>
              </Link>
              <Link
                href="/competences/accessoires-parking"
                className="group p-6 rounded-xl border border-brand/20 hover:border-brand/50 transition-all hover:bg-brand/5"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neon transition-colors">
                  Accessoires Parking
                </h3>
                <p className="text-gray-400 text-sm">
                  Complétez votre aménagement avec des équipements de sécurisation et d'organisation.
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

