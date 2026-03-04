import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Signalisation Verticale - Renov Route',
  description: 'Pose de panneaux de signalisation et balisage routier conforme à la réglementation. Intervention en Rhône-Alpes et partout en France.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/signalisation-verticale',
  },
  openGraph: {
    title: 'Signalisation Verticale - Renov Route',
    description: 'Pose de panneaux de signalisation et balisage routier conforme à la réglementation. Intervention en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com/competences/signalisation-verticale',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/stop.png',
        width: 1200,
        height: 630,
        alt: 'Signalisation verticale - Renov Route',
      },
    ],
  },
}

export default function SignalisationVerticalePage() {
  return (
    <>
      <StructuredData 
        type="service"
        serviceName="Signalisation Verticale"
        serviceDescription="Pose de panneaux de signalisation routière conforme à la réglementation. Installation et maintenance de signalisation verticale pour sécuriser vos voiries en Rhône-Alpes et partout en France."
        serviceType="Signalisation routière"
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Signalisation</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              SIGNALISATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">VERTICALE</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/stop.png"
                alt="Panneau de signalisation routière"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  PANNEAUX DE <span className="text-brand">SIGNALISATION</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  La signalisation verticale est un élément essentiel de la sécurité routière et de l'organisation de la circulation. Que vous soyez une collectivité, une entreprise ou un gestionnaire de voirie en Rhône-Alpes, nos panneaux de signalisation permettent d'informer, d'orienter et de sécuriser les usagers. Renov Route intervient dans toute la région lyonnaise et partout en France pour installer et entretenir vos panneaux de signalisation conformément à la réglementation en vigueur.
                </p>
                <p className="leading-relaxed mb-4">
                  Nous proposons la pose de tous types de panneaux : limitation de vitesse, interdiction, obligation, direction et indication. Notre expertise couvre également la signalisation temporaire de chantier, essentielle pour sécuriser les travaux routiers. Tous nos panneaux sont conformes aux normes françaises et européennes. Pour une approche complète de la signalisation, nous combinons nos services de signalisation verticale avec le <Link href="/competences/tracage-retracage-parking" className="text-brand hover:text-brand-neon underline">marquage au sol</Link>, créant ainsi un système de signalisation cohérent et efficace pour vos voiries.
                </p>
                <p className="leading-relaxed">
                  Pose de panneaux de signalisation routière conforme à la réglementation. 
                  Installation et maintenance de signalisation verticale pour sécuriser vos voiries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Pose de panneaux de signalisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Installation de balisage routier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Remplacement et maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Conformité réglementaire</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Types de panneaux</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Panneaux de limitation de vitesse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Panneaux d'interdiction et d'obligation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Panneaux de direction et d'indication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Signalisation temporaire de chantier</span>
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
                  Complétez votre signalisation verticale avec un marquage au sol professionnel pour une signalisation complète.
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
                  Équipements de sécurisation et d'organisation pour optimiser vos espaces de stationnement.
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

