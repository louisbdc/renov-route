import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Renov Route',
  description: 'Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/privacy-policy',
  },
  openGraph: {
    title: 'Politique de confidentialité - Renov Route',
    description: 'Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
    type: 'website',
    url: 'https://renov-route.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
    <StructuredData
      type="legal"
      breadcrumbs={[
        { name: 'Accueil', url: 'https://www.renov-route.com/' },
        { name: 'Politique de confidentialité', url: 'https://www.renov-route.com/privacy-policy' }
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

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-neon shadow-neon"></span>
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Confidentialité</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              POLITIQUE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">CONFIDENTIALITÉ</span>
            </h1>
            
            <p className="text-gray-400 mb-8 text-lg">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon">

            <div className="space-y-10 text-gray-300">
              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  1. COLLECTE DES <span className="text-brand">DONNÉES</span>
                </h2>
                <p className="mb-4">
                  Nous collectons des données personnelles dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Lors de la soumission de formulaires de contact ou de demande de devis</li>
                  <li>Lors de l'utilisation de notre site web (données de navigation)</li>
                  <li>Lors de l'acceptation de cookies non-essentiels</li>
                  <li>Lors de communications téléphoniques ou par email</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  2. TYPES DE DONNÉES <span className="text-brand">COLLECTÉES</span>
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Données d'identification</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse postale (si fournie)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Données de navigation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Adresse IP (anonymisée)</li>
                      <li>Pages visitées</li>
                      <li>Durée de visite</li>
                      <li>Source de trafic</li>
                      <li>Type de navigateur et appareil</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  3. UTILISATION DES <span className="text-brand">COOKIES</span>
                </h2>
                <p className="mb-4">
                  Notre site utilise différents types de cookies :
                </p>
                <div className="space-y-4">
                  <div className="border border-brand/20 rounded-lg p-4 bg-brand/5">
                    <h3 className="text-lg font-medium text-white mb-2">Cookies nécessaires</h3>
                    <p className="mb-2">
                      Essentiels au fonctionnement du site (sécurité, préférences de base)
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Durée :</strong> Session ou 1 an maximum
                    </p>
                  </div>
                  <div className="border border-brand/20 rounded-lg p-4 bg-brand/5">
                    <h3 className="text-lg font-medium text-white mb-2">Cookies d'analyse</h3>
                    <p className="mb-2">
                      Pour comprendre l'utilisation du site
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Durée :</strong> 30 jours maximum
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  4. FINALITÉS DU <span className="text-brand">TRAITEMENT</span>
                </h2>
                <p className="mb-4">
                  Nous utilisons vos données pour :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser le trafic et l'utilisation du site</li>
                  <li>Personnaliser votre expérience utilisateur</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  5. PARTAGE DES <span className="text-brand">DONNÉES</span>
                </h2>
                <p className="mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Nos partenaires techniques (hébergement, analytics)</li>
                  <li>Les autorités compétentes si requis par la loi</li>
                  <li>Nos sous-traitants liés par des accords de confidentialité</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  6. DURÉE DE <span className="text-brand">CONSERVATION</span>
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-brand/20">
                    <span className="font-medium text-white">Données de contact</span>
                    <span className="text-gray-400">3 ans après le dernier contact</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand/20">
                    <span className="font-medium text-white">Données de navigation</span>
                    <span className="text-gray-400">30 jours maximum</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-white">Données comptables</span>
                    <span className="text-gray-400">10 ans (obligation légale)</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  7. VOS <span className="text-brand">DROITS</span>
                </h2>
                <p className="mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit d'accès</strong>
                        <p className="text-sm text-gray-400">Connaître les données que nous détenons sur vous</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit de rectification</strong>
                        <p className="text-sm text-gray-400">Corriger des données inexactes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit à l'effacement</strong>
                        <p className="text-sm text-gray-400">Supprimer vos données</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit à la portabilité</strong>
                        <p className="text-sm text-gray-400">Récupérer vos données</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit d'opposition</strong>
                        <p className="text-sm text-gray-400">Refuser certains traitements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-brand font-bold">✓</span>
                      <div>
                        <strong className="text-white">Droit de limitation</strong>
                        <p className="text-sm text-gray-400">Limiter l'utilisation de vos données</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  8. CONTACT ET <span className="text-brand">RÉCLAMATIONS</span>
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Responsable du traitement</h3>
                    <p className="text-gray-300">
                      Renov Route<br />
                      6, allée du ruisseau de Ribbes<br />
                      69160 Tassin la demi-lune<br />
                      France<br />
                      Email : xdecaumont@renov-route.com<br />
                      Téléphone : 07 86 81 96 92
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Autorité de contrôle</h3>
                    <p className="text-gray-300">
                      CNIL (Commission Nationale de l'Informatique et des Libertés)<br />
                      Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-neon transition-colors">www.cnil.fr</a>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  9. <span className="text-brand">MODIFICATIONS</span>
                </h2>
                <p className="text-gray-300">
                  Cette politique de confidentialité peut être modifiée. Toute modification sera publiée sur cette page 
                  avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-brand/20">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand/30 bg-brand/5 hover:bg-brand/10 hover:border-brand/50 transition-all text-brand hover:text-brand-neon"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

