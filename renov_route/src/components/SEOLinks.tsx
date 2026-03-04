import Link from 'next/link';

interface SEOLinksProps {
  className?: string;
}

export default function SEOLinks({ className = "" }: SEOLinksProps) {
  return (
    <footer className={`border-t py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">

        {/* Services */}
        <div>
          <p className="font-semibold mb-3">Nos Services</p>
          <ul className="space-y-2">
            <li><Link href="/competences/tracage-retracage-parking">Traçage de parking</Link></li>
            <li><Link href="/competences/signalisation-verticale">Signalisation verticale</Link></li>
            <li><Link href="/competences/reparation-nids-de-poule">Réparation nids de poule</Link></li>
            <li><Link href="/competences/resine-sol-marquage-interieur">Résine de sol</Link></li>
            <li><Link href="/competences/accessoires-parking">Accessoires parking</Link></li>
            <li><Link href="/competences/conseil-expertise">Conseil & expertise</Link></li>
          </ul>
        </div>

        {/* Zones d'intervention */}
        <div>
          <p className="font-semibold mb-3">Zones d&apos;intervention</p>
          <p className="text-gray-400 leading-relaxed">
            Lyon, Rhône-Alpes, Auvergne-Rhône-Alpes, Paris, Marseille, Toulouse — nous intervenons dans toute la France.
          </p>
        </div>

        {/* Secteurs d'activité */}
        <div>
          <p className="font-semibold mb-3">Secteurs d&apos;activité</p>
          <p className="text-gray-400 leading-relaxed">
            Commerces, industrie, collectivités, centres commerciaux et entreprises.
          </p>
        </div>

        {/* Guides */}
        <div>
          <p className="font-semibold mb-3">Guides</p>
          <ul className="space-y-2">
            <li><Link href="/guides">Tous nos guides</Link></li>
            <li><Link href="/guides/renovation-parking-copropriete">Rénovation parking copropriété</Link></li>
            <li><Link href="/guides/prix-marquage-sol-parking">Prix marquage au sol</Link></li>
            <li><Link href="/guides/normes-pmr-parking">Normes PMR parking</Link></li>
            <li><Link href="/guides/enrobe-froid-vs-resine-nids-de-poule">Enrobé vs résine nids de poule</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
