import Link from 'next/link';

interface SEOLinksProps {
  className?: string;
}

export default function SEOLinks({ className = "" }: SEOLinksProps) {
  return (
    <footer className={`bg-gray-50 border-t py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Nos Services</h3>
          <ul className="space-y-2">
            <li><Link href="/competences/tracage-retracage-parking" className="text-gray-600 hover:text-blue-600 transition-colors">Traçage de parking</Link></li>
            <li><Link href="/competences/signalisation-verticale" className="text-gray-600 hover:text-blue-600 transition-colors">Signalisation verticale</Link></li>
            <li><Link href="/competences/reparation-nids-de-poule" className="text-gray-600 hover:text-blue-600 transition-colors">Réparation nids de poule</Link></li>
            <li><Link href="/competences/resine-sol-marquage-interieur" className="text-gray-600 hover:text-blue-600 transition-colors">Résine de sol</Link></li>
            <li><Link href="/competences/accessoires-parking" className="text-gray-600 hover:text-blue-600 transition-colors">Accessoires parking</Link></li>
            <li><Link href="/competences/conseil-expertise" className="text-gray-600 hover:text-blue-600 transition-colors">Conseil & expertise</Link></li>
          </ul>
        </div>

        {/* Zones d'intervention */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Zones d'intervention</h3>
          <ul className="space-y-2">
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Lyon</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Rhône-Alpes</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Auvergne-Rhône-Alpes</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Paris</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Marseille</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Toulouse</Link></li>
          </ul>
        </div>

        {/* Secteurs d'activité */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Secteurs d'activité</h3>
          <ul className="space-y-2">
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Commerces</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Industrie</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Collectivités</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Centres commerciaux</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">Entreprises</Link></li>
          </ul>
        </div>

        {/* Informations */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Informations</h3>
          <ul className="space-y-2">
            <li><Link href="/realisations" className="text-gray-600 hover:text-blue-600 transition-colors">Nos réalisations</Link></li>
            <li><Link href="/qui-sommes-nous" className="text-gray-600 hover:text-blue-600 transition-colors">Qui sommes-nous</Link></li>
            <li><Link href="/devis" className="text-gray-600 hover:text-blue-600 transition-colors">Devis gratuit</Link></li>
            <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">Politique de confidentialité</Link></li>
            <li><Link href="/competences" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
