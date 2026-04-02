import { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { CookiePreferences } from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Renov Route',
  description: 'Découvrez comment Renov Route collecte, utilise et protège vos données personnelles conformément au RGPD.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/privacy-policy/',
  },
  openGraph: {
    title: 'Politique de confidentialité - Renov Route',
    description: 'Découvrez comment Renov Route collecte, utilise et protège vos données personnelles conformément au RGPD.',
    type: 'website',
    url: 'https://renov-route.com/privacy-policy/',
    images: [{ url: 'https://renov-route.com/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'Renov Route' }],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-gray-300">Politique de confidentialité</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Politique de confidentialité
            </h1>
            <p className="text-gray-500 text-sm">
              Dernière mise à jour : 5 mars 2026
            </p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Collecte des données</h2>
              <p className="mb-3">
                Renov Route collecte des données personnelles dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Soumission de formulaires de contact ou de demande de devis</li>
                <li>Navigation sur notre site web (données de navigation)</li>
                <li>Acceptation de cookies d&apos;analyse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Types de données collectées</h2>

              <h3 className="text-white font-medium mt-4 mb-2">Données d&apos;identification</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (si fournie)</li>
              </ul>

              <h3 className="text-white font-medium mt-4 mb-2">Données de navigation</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Adresse IP (anonymisée via Google Analytics)</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de trafic</li>
                <li>Type de navigateur et appareil</li>
                <li>Nombre de soumissions de formulaires</li>
                <li>Profondeur de défilement (scroll depth) par page</li>
                <li>Interactions avec les formulaires (champs consultés, erreurs de validation)</li>
                <li>Clics de navigation (menu, liens internes, liens sociaux)</li>
                <li>Utilisation des filtres de recherche</li>
                <li>Interactions avec les galeries d&apos;images et comparateurs avant/après</li>
                <li>Interactions avec la FAQ (questions consultées)</li>
                <li>Choix de consentement cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Utilisation des cookies</h2>
              <p className="mb-4">Notre site utilise deux types de cookies :</p>

              <div className="space-y-3">
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">Cookies nécessaires</p>
                  <p className="text-gray-400 text-sm">
                    Essentiels au fonctionnement du site : stockage de votre choix de consentement cookies
                    et gestion de session. Durée : session ou 1 an maximum.
                  </p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">Cookies d&apos;analyse</p>
                  <p className="text-gray-400 text-sm">
                    Google Analytics 4 pour comprendre l&apos;utilisation du site : pages visitées, profondeur de
                    défilement, interactions avec les formulaires et filtres, clics de navigation, utilisation des
                    galeries d&apos;images et de la FAQ, et un cookie de suivi interne enregistrant les pages visitées
                    et les soumissions de formulaires. Durée : 30 jours maximum.
                    Ces cookies ne sont activés qu&apos;avec votre consentement explicite (Consent Mode v2).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Finalités du traitement</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser le trafic et l&apos;utilisation du site</li>
                <li>Analyser l&apos;engagement des utilisateurs avec les différentes fonctionnalités du site pour améliorer l&apos;ergonomie et le contenu</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Base légale du traitement</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li><span className="text-gray-300">Consentement</span> — pour les cookies d&apos;analyse</li>
                <li><span className="text-gray-300">Intérêt légitime</span> — pour l&apos;amélioration de nos services</li>
                <li><span className="text-gray-300">Exécution contractuelle</span> — pour la fourniture de nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Partage des données</h2>
              <p className="mb-3">
                Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Google Analytics (données de navigation anonymisées)</li>
                <li>Notre hébergeur OVH (données techniques)</li>
                <li>Les autorités compétentes si requis par la loi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Durée de conservation</h2>
              <div className="border border-white/10 rounded-lg divide-y divide-white/10">
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-gray-300">Données de contact</span>
                  <span className="text-gray-500 text-sm">3 ans après le dernier contact</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-gray-300">Données de navigation</span>
                  <span className="text-gray-500 text-sm">30 jours maximum</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-gray-300">Cookie de consentement</span>
                  <span className="text-gray-500 text-sm">1 an</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-gray-300">Données comptables</span>
                  <span className="text-gray-500 text-sm">10 ans (obligation légale)</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Vos droits</h2>
              <p className="mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li><span className="text-gray-300">Accès</span> — connaître les données que nous détenons sur vous</li>
                <li><span className="text-gray-300">Rectification</span> — corriger des données inexactes</li>
                <li><span className="text-gray-300">Effacement</span> — supprimer vos données</li>
                <li><span className="text-gray-300">Portabilité</span> — récupérer vos données</li>
                <li><span className="text-gray-300">Opposition</span> — refuser certains traitements</li>
                <li><span className="text-gray-300">Limitation</span> — limiter l&apos;utilisation de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Gestion de vos préférences</h2>
              <p className="mb-4">
                Vous pouvez gérer vos préférences de cookies à tout moment :
              </p>
              <div className="border border-white/10 rounded-lg p-4">
                <CookiePreferences />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <div className="space-y-4 text-gray-400">
                <div>
                  <p className="text-gray-300 font-medium mb-1">Responsable du traitement</p>
                  <p>
                    Renov Route<br />
                    6, allée du ruisseau de Ribbes<br />
                    69160 Tassin-la-Demi-Lune, France
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Contact</p>
                  <p>
                    Email : xdecaumont@renov-route.com<br />
                    Téléphone : 07 86 81 96 92
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Autorité de contrôle</p>
                  <p>
                    CNIL — <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Modifications</h2>
              <p className="text-gray-400">
                Cette politique peut être modifiée à tout moment. Toute modification sera publiée sur cette page
                avec une nouvelle date de mise à jour.
              </p>
            </section>

          </div>
        </article>
      </div>
    </Layout>
  )
}
