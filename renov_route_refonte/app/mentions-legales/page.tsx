import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Mentions légales - Renov Route',
  description: 'Mentions légales de Renov Route - Informations sur l\'entreprise, l\'hébergement et les conditions d\'utilisation.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renov-route.com/mentions-legales',
  },
  openGraph: {
    title: 'Mentions légales - Renov Route',
    description: 'Mentions légales de Renov Route - Informations sur l\'entreprise, l\'hébergement et les conditions d\'utilisation.',
    type: 'website',
    url: 'https://renov-route.com/mentions-legales',
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
    <StructuredData
      type="legal"
      breadcrumbs={[
        { name: 'Accueil', url: 'https://www.renov-route.com/' },
        { name: 'Mentions légales', url: 'https://www.renov-route.com/mentions-legales' }
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
              <span className="text-brand-neon text-xs font-bold tracking-widest uppercase">Informations Légales</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              MENTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">LÉGALES</span>
            </h1>
          </div>

          <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20 shadow-neon">
            <div className="space-y-10 text-gray-300">
              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  1. INFORMATIONS SUR <span className="text-brand">L'ENTREPRISE</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    <strong className="text-white">Raison sociale :</strong> Renov Route
                  </p>
                  <p>
                    <strong className="text-white">Forme juridique :</strong> Entreprise individuelle
                  </p>
                  <p>
                    <strong className="text-white">SIRET :</strong> 818 745 515 00010
                  </p>
                  <p>
                    <strong className="text-white">Adresse :</strong><br />
                    6, allée du ruisseau de Ribbes<br />
                    69160 Tassin la demi-lune<br />
                    France
                  </p>
                  <p>
                    <strong className="text-white">Téléphone :</strong> <a href="tel:0786819692" className="text-brand hover:text-brand-neon transition-colors">07 86 81 96 92</a>
                  </p>
                  <p>
                    <strong className="text-white">Email :</strong> <a href="mailto:contact@renov-route.com" className="text-brand hover:text-brand-neon transition-colors">contact@renov-route.com</a>
                  </p>
                  <p>
                    <strong className="text-white">Directeur de publication :</strong> Xavier de Caumont
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  2. <span className="text-brand">ACTIVITÉ</span>
                </h2>
                <p>
                  Nous sommes spécialisés dans le marquage routier, le traçage de parkings, 
                  la signalisation verticale et la réparation de nids de poule. 
                  Nous intervenons en Rhône-Alpes et partout en France.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  3. <span className="text-brand">HÉBERGEMENT</span>
                </h2>
                <p>
                  Ce site est hébergé par Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis
                </p>
                <p className="mt-4">
                  Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-neon transition-colors">vercel.com</a>
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  4. PROPRIÉTÉ <span className="text-brand">INTELLECTUELLE</span>
                </h2>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mt-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  5. PROTECTION DES DONNÉES <span className="text-brand">PERSONNELLES</span>
                </h2>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                  Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                  de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="mt-4">
                  Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : 
                  <a href="mailto:xdecaumont@renov-route.com" className="text-brand hover:text-brand-neon transition-colors ml-1">xdecaumont@renov-route.com</a>
                </p>
                <p className="mt-4">
                  Pour plus d'informations, consultez notre{' '}
                  <Link href="/privacy-policy" className="text-brand hover:text-brand-neon transition-colors underline">
                    politique de confidentialité
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  6. <span className="text-brand">COOKIES</span>
                </h2>
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                </p>
                <p className="mt-4">
                  Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
                  <Link href="/privacy-policy" className="text-brand hover:text-brand-neon transition-colors underline">
                    politique de confidentialité
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  7. LIMITATION DE <span className="text-brand">RESPONSABILITÉ</span>
                </h2>
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
                  remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p className="mt-4">
                  Nous ne pourrons être tenus responsables des dommages directs et indirects causés au matériel 
                  de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne 
                  répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  8. LIENS <span className="text-brand">HYPERTEXTES</span>
                </h2>
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                  Les liens vers ces autres ressources vous font quitter le site Renov Route.
                </p>
                <p className="mt-4">
                  Il est possible de créer un lien vers la page de présentation de ce site sans autorisation 
                  expresse de l'éditeur. Aucune autorisation ni demande d'information préalable ne peut être exigée 
                  par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur. 
                  Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  9. DROIT <span className="text-brand">APPLICABLE</span>
                </h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
                  d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de 
                  compétence en vigueur.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-brand/20 flex flex-wrap gap-4">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand/30 bg-brand/5 hover:bg-brand/10 hover:border-brand/50 transition-all text-brand hover:text-brand-neon"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Retour à l'accueil
              </Link>
              <Link 
                href="/privacy-policy" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand/30 bg-brand/5 hover:bg-brand/10 hover:border-brand/50 transition-all text-brand hover:text-brand-neon"
              >
                Politique de confidentialité
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

