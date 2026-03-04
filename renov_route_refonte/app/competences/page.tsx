import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Nos Compétences - Marquage Routier & Signalisation',
  description: 'Découvrez nos compétences en marquage routier, traçage de parkings, signalisation verticale, réparation de nids de poule et accessoires parking.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/competences',
  },
}

const competences = [
  {
    slug: 'tracage-retracage-parking',
    title: 'Traçage & Retraçage de Parking',
    description: 'Marquage au sol pour parkings professionnels et collectivités. Résine époxy haute durabilité.',
    icon: 'local_parking',
    image: '/intermarche-neuville-parking_2.avif',
  },
  {
    slug: 'signalisation-verticale',
    title: 'Signalisation Verticale',
    description: 'Pose de panneaux de signalisation et balisage routier conforme à la réglementation.',
    icon: 'traffic',
    image: '/stop.png',
  },
  {
    slug: 'resine-sol-marquage-interieur',
    title: 'Résine Sol & Marquage Intérieur',
    description: 'Revêtement résine pour sols intérieurs et marquage industriel.',
    icon: 'layers',
    image: '/resine_sol.png',
  },
  {
    slug: 'reparation-nids-de-poule',
    title: 'Réparation de Nids de Poule',
    description: 'Réparation de voiries dégradées avec enrobé résine. Intervention rapide.',
    icon: 'construction',
    image: '/reparation_ndp.png',
  },
  {
    slug: 'accessoires-parking',
    title: 'Accessoires Parking',
    description: 'Pose de butées, barrières, potelets et équipements de sécurisation.',
    icon: 'security',
    image: '/accessoires.png',
  },
  {
    slug: 'conseil-expertise',
    title: 'Conseil & Expertise',
    description: 'Audit, conseil technique et accompagnement pour vos projets de voirie.',
    icon: 'engineering',
    image: '/expertise.png',
  },
]

export default function CompetencesPage() {
  return (
    <>
    <StructuredData
      type="competences"
      breadcrumbs={[
        { name: 'Accueil', url: 'https://www.renov-route.com/' },
        { name: 'Compétences', url: 'https://www.renov-route.com/competences' }
      ]}
    />
    <main className="bg-asphalt text-white w-full overflow-hidden min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-neon shadow-neon"></span>
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Nos Compétences</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">COMPÉTENCES</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Expertise technique en marquage routier et signalisation
            </p>
          </div>

          {/* Grid des compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((competence) => (
              <Link
                key={competence.slug}
                href={`/competences/${competence.slug}`}
                className="group glass-panel rounded-[24px] overflow-hidden border border-brand/20 hover:border-brand/50 transition-all duration-300 hover:shadow-neon"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={competence.image}
                    alt={competence.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 text-brand-neon flex items-center justify-center backdrop-blur-md">
                    <span className="material-symbols-outlined">{competence.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-3 text-white group-hover:text-brand-neon transition-colors">
                    {competence.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {competence.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand text-sm font-semibold">
                    En savoir plus
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-display font-bold text-lg rounded-full hover:bg-brand-light hover:shadow-neon transition-all duration-300"
            >
              Demander un devis
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

