import { Metadata } from 'next'
import { CookiePreferences } from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Renov Route',
  description: 'Découvrez comment Renov Route collecte, utilise et protège vos données personnelles conformément au RGPD.',
  robots: 'index, follow',
  openGraph: {
    title: 'Politique de confidentialité - Renov Route',
    description: 'Découvrez comment Renov Route collecte, utilise et protège vos données personnelles conformément au RGPD.',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Collecte des données
              </h2>
              <p className="text-gray-700 mb-4">
                Renov Route collecte des données personnelles dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Lors de la soumission de formulaires de contact ou de demande de devis</li>
                <li>Lors de l'utilisation de notre site web (données de navigation)</li>
                <li>Lors de l'acceptation de cookies non-essentiels</li>
                <li>Lors de communications téléphoniques ou par email</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Types de données collectées
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Données d'identification</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale (si fournie)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Données de navigation</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Adresse IP (anonymisée)</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Source de trafic</li>
                    <li>Type de navigateur et appareil</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Données de préférences</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Région d'intérêt</li>
                    <li>Méthode de contact préférée</li>
                    <li>Services d'intérêt</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Utilisation des cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise différents types de cookies :
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">🍪 Cookies nécessaires</h3>
                  <p className="text-gray-700 mb-2">
                    Essentiels au fonctionnement du site (sécurité, préférences de base)
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Durée :</strong> Session ou 1 an maximum
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">📊 Cookies d'analyse</h3>
                  <p className="text-gray-700 mb-2">
                    Google Analytics pour comprendre l'utilisation du site
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Durée :</strong> 30 jours maximum
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">🎯 Cookies marketing</h3>
                  <p className="text-gray-700 mb-2">
                    Pour personnaliser les publicités et mesurer leur efficacité
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Durée :</strong> 30 jours maximum
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">⚙️ Cookies de préférences</h3>
                  <p className="text-gray-700 mb-2">
                    Mémorisent vos choix et paramètres personnalisés
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Durée :</strong> 90 jours maximum
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Finalités du traitement
              </h2>
              <p className="text-gray-700 mb-4">
                Nous utilisons vos données pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser le trafic et l'utilisation du site</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Respecter nos obligations légales</li>
                <li>Développer de nouveaux services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Base légale du traitement
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">Consentement</span>
                  <p className="text-gray-700">Pour les cookies non-essentiels et le marketing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">Intérêt légitime</span>
                  <p className="text-gray-700">Pour l'amélioration de nos services et l'analyse du trafic</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2 py-1 rounded">Exécution contractuelle</span>
                  <p className="text-gray-700">Pour la fourniture de nos services de rénovation routière</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Partage des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nos partenaires techniques (hébergement, analytics)</li>
                <li>Les autorités compétentes si requis par la loi</li>
                <li>Nos sous-traitants liés par des accords de confidentialité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Durée de conservation
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Données de contact</span>
                  <span className="text-gray-600">3 ans après le dernier contact</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Données de navigation</span>
                  <span className="text-gray-600">30 jours maximum</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Cookies</span>
                  <span className="text-gray-600">Selon le type (1 jour à 1 an)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Données comptables</span>
                  <span className="text-gray-600">10 ans (obligation légale)</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Vos droits
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit d'accès</strong>
                      <p className="text-sm text-gray-600">Connaître les données que nous détenons sur vous</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit de rectification</strong>
                      <p className="text-sm text-gray-600">Corriger des données inexactes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit à l'effacement</strong>
                      <p className="text-sm text-gray-600">Supprimer vos données</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit à la portabilité</strong>
                      <p className="text-sm text-gray-600">Récupérer vos données</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit d'opposition</strong>
                      <p className="text-sm text-gray-600">Refuser certains traitements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <div>
                      <strong>Droit de limitation</strong>
                      <p className="text-sm text-gray-600">Limiter l'utilisation de vos données</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Gestion de vos préférences
              </h2>
              <p className="text-gray-700 mb-4">
                Vous pouvez gérer vos préférences de cookies à tout moment :
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <CookiePreferences />
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact et réclamations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Responsable du traitement</h3>
                  <p className="text-gray-700">
                    Renov Route<br />
                    6, allée du ruisseau de Ribbes<br />
                    69160 Tassin la demi-lune<br />
                    France<br />
                    Email : xdecaumont@renov-route.com<br />
                    Téléphone : 07 86 81 96 92
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Délégué à la protection des données</h3>
                  <p className="text-gray-700">
                    Email : xdecaumont@renov-route.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Autorité de contrôle</h3>
                  <p className="text-gray-700">
                    CNIL (Commission Nationale de l'Informatique et des Libertés)<br />
                    Site web : <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Modifications
              </h2>
              <p className="text-gray-700">
                Cette politique de confidentialité peut être modifiée. Toute modification sera publiée sur cette page 
                avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
