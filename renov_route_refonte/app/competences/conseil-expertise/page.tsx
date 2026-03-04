import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Conseil & Expertise - Renov Route',
  description: 'Audit, conseil technique et accompagnement pour vos projets de voirie et marquage routier. Expertise en Rhône-Alpes.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences/conseil-expertise',
  },
  openGraph: {
    title: 'Conseil & Expertise - Renov Route',
    description: 'Audit, conseil technique et accompagnement pour vos projets de voirie et marquage routier. Expertise en Rhône-Alpes et partout en France.',
    url: 'https://renov-route.com/competences/conseil-expertise',
    type: 'website',
    images: [
      {
        url: 'https://renov-route.com/expertise.png',
        width: 1200,
        height: 630,
        alt: 'Conseil et expertise - Renov Route',
      },
    ],
  },
}

export default function ConseilExpertisePage() {
  return (
    <>
      <StructuredData
        type="service"
        serviceName="Conseil & Expertise"
        serviceDescription="Audit, conseil technique et accompagnement pour vos projets de voirie et marquage routier. Expertise pour optimiser vos aménagements et respecter la réglementation en Rhône-Alpes et partout en France."
        serviceType="Conseil technique"
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.renov-route.com/' },
          { name: 'Compétences', url: 'https://www.renov-route.com/competences' },
          { name: 'Conseil & Expertise', url: 'https://www.renov-route.com/competences/conseil-expertise' }
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Expertise</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              CONSEIL & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">EXPERTISE</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/expertise.png"
                alt="Conseil et expertise marquage routier"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  ACCOMPAGNEMENT <span className="text-brand">TECHNIQUE</span>
                </h2>
                <p className="leading-relaxed mb-4">
                  Un projet de voirie ou d'aménagement réussi nécessite une expertise technique et une vision globale. En Rhône-Alpes, où les contraintes réglementaires et environnementales sont nombreuses, nous vous accompagnons de la conception à la réalisation de vos projets. Notre expertise couvre tous les aspects du marquage routier, de la signalisation et de l'aménagement d'espaces de stationnement.
                </p>
                <p className="leading-relaxed mb-4">
                  Nous proposons des audits complets de vos installations existantes, des conseils en aménagement pour optimiser vos espaces, et un accompagnement pour garantir la conformité réglementaire (PMR, sécurité routière). Nos études techniques et dimensionnements vous permettent de prendre les bonnes décisions avant d'investir. Que vous ayez besoin de <Link href="/competences/tracage-retracage-parking" className="text-brand hover:text-brand-neon underline">marquage au sol</Link>, de <Link href="/competences/signalisation-verticale" className="text-brand hover:text-brand-neon underline">signalisation verticale</Link> ou d'<Link href="/competences/accessoires-parking" className="text-brand hover:text-brand-neon underline">accessoires de parking</Link>, notre conseil vous guide vers les solutions les plus adaptées à vos besoins et à votre budget.
                </p>
                <p className="leading-relaxed">
                  Audit, conseil technique et accompagnement pour vos projets de voirie et marquage routier. 
                  Expertise pour optimiser vos aménagements et respecter la réglementation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Services de conseil</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Audit de vos installations existantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Conseil en aménagement et optimisation d'espaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Conformité réglementaire (PMR, sécurité)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Études techniques et dimensionnement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Accompagnement de projet</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Domaines d'expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Marquage routier et signalisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Aménagement de parkings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Accessibilité PMR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>Réglementation et normes</span>
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
                  Mise en œuvre de vos projets de marquage au sol après audit et conseil technique.
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
                  Installation de panneaux de signalisation selon les recommandations de notre audit.
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

