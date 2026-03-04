import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Traçage & Retraçage de Parking - Renov Route',
  description: 'Marquage au sol pour parkings professionnels. Résine époxy haute durabilité. Intervention rapide en Rhône-Alpes et partout en France.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/tracage-retracage-parking',
  },
  openGraph: {
    title: 'Traçage & Retraçage de Parking - Renov Route',
    description: 'Marquage au sol pour parkings professionnels. Résine époxy haute durabilité. Intervention rapide en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com/competences/tracage-retracage-parking',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/intermarche-neuville-parking_2.avif',
        width: 1200,
        height: 630,
        alt: 'Traçage de parking - Renov Route',
      },
    ],
  },
}

export default function TracageRetracageParkingPage() {
  return (
    <>
      <StructuredData
        type="service"
        serviceName="Traçage & Retraçage de Parking"
        serviceDescription="Marquage au sol pour parkings professionnels et collectivités. Résine époxy haute durabilité. Intervention rapide en Rhône-Alpes et partout en France."
        serviceType="Marquage au sol"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.renov-route.com/' },
          { name: 'Compétences', url: 'https://www.renov-route.com/competences' },
          { name: 'Traçage & Retraçage de Parking', url: 'https://www.renov-route.com/competences/tracage-retracage-parking' }
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Marquage au Sol</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              TRAÇAGE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">RETRAÇAGE</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/intermarche-neuville-parking_2.avif"
                alt="Traçage de parking professionnel"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  MARQUAGE AU SOL <span className="text-brand">PROFESSIONNEL</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  Le marquage au sol est la base de tout aménagement de parking professionnel. Que vous soyez une entreprise, une collectivité ou un commerce en Rhône-Alpes, un marquage clair et durable améliore la sécurité, optimise l'utilisation de l'espace et facilite la circulation. Nous intervenons dans toute la région lyonnaise et partout en France pour réaliser vos projets de traçage et retraçage de parking avec des matériaux de haute qualité.
                </p>
                <p className="leading-relaxed mb-4">
                  Nous utilisons principalement la résine époxy pour nos marquages, garantissant une excellente durabilité et une résistance aux intempéries, au trafic et aux produits chimiques. Notre expertise nous permet d'optimiser l'organisation de vos espaces de stationnement, en respectant les normes d'accessibilité PMR et les contraintes spécifiques de votre site. Pour compléter votre aménagement, nous proposons également l'installation d'<Link href="/competences/accessoires-parking" className="text-brand hover:text-brand-neon underline">accessoires de parking</Link> et la pose de <Link href="/competences/signalisation-verticale" className="text-brand hover:text-brand-neon underline">panneaux de signalisation</Link> pour une solution complète et cohérente.
                </p>
                <p className="leading-relaxed">
                  Traçage et retraçage de parkings pour entreprises, collectivités et commerces. 
                  Marquage haute visibilité et résistance aux intempéries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Techniques utilisées</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Résine époxy pour marquage durable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Peinture routière pour marquage standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Numérotation et signalétique PMR</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Parkings d'entreprises et commerces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Parkings collectivités et établissements publics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Optimisation d'espaces existants</span>
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
                href="/competences/accessoires-parking"
                className="group p-6 rounded-xl border border-brand/20 hover:border-brand/50 transition-all hover:bg-brand/5"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neon transition-colors">
                  Accessoires Parking
                </h3>
                <p className="text-gray-400 text-sm">
                  Complétez votre marquage au sol avec des équipements de sécurisation : butées, potelets, barrières.
                </p>
              </Link>
              <Link
                href="/competences/signalisation-verticale"
                className="group p-6 rounded-xl border border-brand/20 hover:border-brand/50 transition-all hover:bg-brand/5"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-neon transition-colors">
                  Signalisation Verticale
                </h3>
                <p className="text-gray-400 text-sm">
                  Panneaux de signalisation pour compléter votre système de marquage et optimiser la circulation.
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

