import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Accessoires Parking - Renov Route',
  description: 'Pose de butées, barrières, potelets et équipements de sécurisation pour parkings. Installation professionnelle en Rhône-Alpes.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/accessoires-parking',
  },
  openGraph: {
    title: 'Accessoires Parking - Renov Route',
    description: 'Pose de butées, barrières, potelets et équipements de sécurisation pour parkings. Installation professionnelle en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com/competences/accessoires-parking',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/accessoires.png',
        width: 1200,
        height: 630,
        alt: 'Accessoires parking - Renov Route',
      },
    ],
  },
}

export default function AccessoiresParkingPage() {
  return (
    <>
      <StructuredData
        type="service"
        serviceName="Accessoires de Parking"
        serviceDescription="Pose de butées, barrières, potelets et équipements de sécurisation pour parkings. Installation professionnelle en Rhône-Alpes et partout en France."
        serviceType="Équipements de parking"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.renov-route.com/' },
          { name: 'Compétences', url: 'https://www.renov-route.com/competences' },
          { name: 'Accessoires Parking', url: 'https://www.renov-route.com/competences/accessoires-parking' }
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Équipements</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              ACCESSOIRES <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">PARKING</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/accessoires.png"
                alt="Accessoires parking"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  ÉQUIPEMENTS DE <span className="text-brand">SÉCURISATION</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  Les accessoires de parking sont essentiels pour organiser la circulation, protéger les infrastructures et assurer la sécurité des usagers dans vos espaces de stationnement. Que vous soyez une entreprise, une collectivité ou un commerce en Rhône-Alpes, nos équipements contribuent à optimiser l'utilisation de l'espace et à prévenir les accidents. Nous intervenons dans toute la région lyonnaise et partout en France pour installer des solutions de sécurisation adaptées à vos besoins.
                </p>
                <p className="leading-relaxed mb-4">
                  Nous installons une gamme complète d'équipements professionnels : bornes anti-bélier pour protéger les bâtiments et les infrastructures, ralentisseurs pour contrôler la vitesse de circulation, butées de parking pour délimiter précisément les places de stationnement, et divers accessoires de sécurité et d'organisation. Tous nos équipements sont sélectionnés pour leur robustesse, leur durabilité et leur conformité aux normes en vigueur. Notre expertise en marquage routier et signalisation nous permet de vous conseiller sur le choix et l'implantation optimale selon vos contraintes spécifiques, en complément de nos services de <Link href="/competences/tracage-retracage-parking" className="text-brand hover:text-brand-neon underline">traçage de parking</Link>.
                </p>
                <p className="leading-relaxed">
                  Pose de butées, barrières, potelets et équipements de sécurisation pour parkings. 
                  Installation professionnelle pour optimiser et sécuriser vos espaces de stationnement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Équipements disponibles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Butées de parking (béton ou plastique)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Potelets et séparateurs d'espaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Barrières et clôtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Glissières de sécurité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Équipements PMR (places handicapées)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Conseil et dimensionnement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Installation et pose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Maintenance et remplacement</span>
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
                  Marquage au sol professionnel pour compléter vos équipements de parking. Résine époxy haute durabilité.
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
                  Pose de panneaux de signalisation pour sécuriser et organiser vos espaces de stationnement.
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

