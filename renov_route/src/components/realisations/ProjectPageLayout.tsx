'use client'

import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import SafariAnimationFix from '@/components/SafariAnimationFix'
import ImageGallery from './ImageGallery'
import { CaseStudy } from '@/lib/data/case-studies'
import { MotionDiv } from '@/components/MotionWrapper'
import { useConversionTracking } from '@/components/AnalyticsTracker'

interface ProjectPageLayoutProps {
  project: CaseStudy
  relatedProjects: CaseStudy[]
}

export default function ProjectPageLayout({ project, relatedProjects }: ProjectPageLayoutProps) {
  const { trackQuoteRequest } = useConversionTracking()

  return (
    <Layout>
      <SafariAnimationFix>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <Image
            src={project.heroMedia}
            alt={project.title}
            fill
            priority
            className="object-cover brightness-[0.35]"
            sizes="100vw"
          />
          <div className="relative z-10 container-custom pb-12 pt-32">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/realisations" className="hover:text-white transition-colors">Réalisations</Link>
                <span>/</span>
                <span className="text-white">{project.title}</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300">
                {project.client} &bull; {project.industry} &bull; {project.year}
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
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Résumé du projet
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.summary}
                  </p>
                </div>

                {/* Detailed Description */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Détails du projet
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">
                      {project.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* KPIs */}
                {project.kpis.length > 0 && (
                  <div className="bg-[#1a1f2e] border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Résultats clés
                    </h3>
                    <div className="space-y-4">
                      {project.kpis.map((kpi) => (
                        <div key={kpi.label} className="flex items-center justify-between">
                          <span className="text-gray-400">{kpi.label}</span>
                          <span className="text-xl font-bold text-primary">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Prestations */}
                <div className="bg-[#1a1f2e] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Prestations réalisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-[#1a1f2e] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Informations
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm text-gray-400">Client</dt>
                      <dd className="text-white">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Secteur</dt>
                      <dd className="text-white">{project.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Année</dt>
                      <dd className="text-white">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Catégorie</dt>
                      <dd className="text-white capitalize">{project.category}</dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
                  <p className="text-white font-semibold mb-4">
                    Un projet similaire ?
                  </p>
                  <Link
                    href="/devis"
                    onClick={() => trackQuoteRequest(`projet_${project.slug}`)}
                    className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
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
          <section className="py-12 lg:py-16 border-t border-white/10">
            <div className="container-custom">
              <h2 className="text-2xl font-semibold text-white mb-8">
                Projets similaires
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/realisations/${related.slug}`}
                    className="group bg-[#1a1f2e] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
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
                      <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {related.client} &bull; {related.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA Band */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="bg-[#1a1f2e] border border-white/10 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet de marquage routier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/devis"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/realisations"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
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
