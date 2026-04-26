'use client'

import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import ImageGallery from './ImageGallery'
import { CaseStudy } from '@/lib/data/case-studies'
import { MotionDiv } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'
import RelatedGuides, { getGuidesForServices } from '@/components/RelatedGuides'

const SERVICE_LINKS: Record<string, string> = {
  'Retraçage Intégral': '/competences/tracage-retracage-parking',
  'Retraçage Parking': '/competences/tracage-retracage-parking',
  'Marquage Routier': '/competences/tracage-retracage-parking',
  'Marquage Personnalisé': '/competences/tracage-retracage-parking',
  'Passage Piéton': '/competences/tracage-retracage-parking',
  'Marquage Anti-stationnement': '/competences/tracage-retracage-parking',
  'Places Publicitaires': '/competences/tracage-retracage-parking',
  'Signalisation': '/competences/signalisation-verticale',
  'Peinture Époxy': '/competences/resine-sol-marquage-interieur',
  'Résine Gravillonnée': '/competences/resine-sol-marquage-interieur',
  'Grenaillage': '/competences/resine-sol-marquage-interieur',
  'Marquage Industriel': '/competences/resine-sol-marquage-interieur',
  'Zébra Intérieur': '/competences/resine-sol-marquage-interieur',
  'Zébra Jaune/Noir': '/competences/resine-sol-marquage-interieur',
  'Bornes Anti-stationnement': '/competences/accessoires-parking',
  'Bandes de Guidage': '/competences/accessoires-parking',
}

interface ProjectPageLayoutProps {
  project: CaseStudy
  relatedProjects: CaseStudy[]
}

export default function ProjectPageLayout({ project, relatedProjects }: ProjectPageLayoutProps) {
  const { trackQuoteRequest } = useConversionTracking()

  return (
    <Layout>
      <SafariAnimationFix>
        {/* Hero — dark éditorial */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#0F172A]">
          <Image
            src={project.heroMedia}
            alt={project.title}
            fill
            priority
            className="object-cover grayscale opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/20" />
          <div className="relative z-10 container-custom pb-16 pt-32">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
                <Link href="/" className="hover:text-[#FACC15] transition-colors">Accueil</Link>
                <span className="text-slate-600">/</span>
                <Link href="/realisations" className="hover:text-[#FACC15] transition-colors">Réalisations</Link>
                <span className="text-slate-600">/</span>
                <span className="text-white truncate max-w-xs inline-block align-bottom">{project.title}</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-6">
                {project.title}
              </h1>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15]">
                {project.client} <span className="text-slate-500">·</span> {project.industry} <span className="text-slate-500">·</span> {project.year}
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content - Gallery + Description */}
              <div className="lg:col-span-2 space-y-10">
                {/* Gallery */}
                <ImageGallery images={project.images} title={project.title} />

                {/* Summary */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
                    Résumé du projet
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.summary}
                  </p>
                </div>

                {/* Detailed Description */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
                    Détails du projet
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-600 leading-relaxed">
                      {project.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* KPIs */}
                {project.kpis.length > 0 && (
                  <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                      Résultats clés
                    </h3>
                    <div className="space-y-4">
                      {project.kpis.map((kpi) => (
                        <div key={kpi.label} className="flex items-center justify-between">
                          <span className="text-slate-500">{kpi.label}</span>
                          <span className="text-xl font-bold text-[#FACC15]">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Prestations */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                    Prestations réalisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => {
                      const href = SERVICE_LINKS[tech]
                      const className = "px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600"
                      return href ? (
                        <Link
                          key={tech}
                          href={href}
                          className={`${className} hover:border-[#FACC15] hover:text-[#0F172A] transition-colors`}
                        >
                          {tech}
                        </Link>
                      ) : (
                        <span key={tech} className={className}>
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                    Informations
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm text-slate-500">Client</dt>
                      <dd className="text-[#0F172A]">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-500">Secteur</dt>
                      <dd className="text-[#0F172A]">{project.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-500">Année</dt>
                      <dd className="text-[#0F172A]">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-500">Catégorie</dt>
                      <dd className="text-[#0F172A] capitalize">{project.category}</dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#FACC15]/10 to-[#FACC15]/20 border border-[#FACC15] rounded-xl p-6 text-center">
                  <p className="text-[#0F172A] font-semibold mb-4">
                    Un projet similaire ?
                  </p>
                  <Link
                    href="/devis"
                    onClick={() => trackQuoteRequest(`projet_${project.slug}`)}
                    className="block w-full bg-gradient-to-r from-[#FACC15] to-[#FACC15]  text-[#0F172A] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 lg:py-16 border-t border-slate-200">
            <div className="container-custom">
              <h2 className="text-2xl font-semibold text-[#0F172A] mb-8">
                Projets similaires
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/realisations/${related.slug}`}
                    className="group bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all duration-300"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={related.thumbnail}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#0F172A] group-hover:text-[#FACC15] transition-colors mb-1">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {related.client} &bull; {related.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Guides */}
        {project.stack.length > 0 && (
          <RelatedGuides
            title="Guides en lien avec ce projet"
            subtitle="Approfondissez les sujets abordés dans cette réalisation."
            guides={getGuidesForServices(project.stack)}
          />
        )}

        {/* Bottom CTA Band */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet de marquage routier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/devis"
                  className="bg-gradient-to-r from-[#FACC15] to-[#FACC15]  text-[#0F172A] font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/realisations"
                  className="px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] font-semibold rounded-lg transition-all duration-300 hover:bg-[#0F172A] hover:text-white"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SafariAnimationFix>
    </Layout>
  )
}
