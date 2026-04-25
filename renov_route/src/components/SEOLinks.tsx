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
            <li><Link href="/competences/tracage-retracage-parking">Marquage au sol parking</Link></li>
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
          <ul className="space-y-2">
            <li><Link href="/marquage-au-sol-lyon">Marquage au sol Lyon</Link></li>
            <li><Link href="/marquage-au-sol-villeurbanne">Marquage Villeurbanne</Link></li>
            <li><Link href="/marquage-au-sol-venissieux">Marquage Vénissieux</Link></li>
            <li><Link href="/marquage-au-sol-ecully">Marquage Écully</Link></li>
            <li><Link href="/marquage-au-sol-tassin-la-demi-lune">Marquage Tassin-la-Demi-Lune</Link></li>
            <li><Link href="/marquage-au-sol-saint-etienne">Marquage Saint-Étienne</Link></li>
          </ul>
        </div>

        {/* Guides - Marquage & Normes */}
        <div>
          <p className="font-semibold mb-3">Guides marquage</p>
          <ul className="space-y-2">
            <li><Link href="/guides">Tous nos guides</Link></li>
            <li><Link href="/guides/prix-marquage-sol-parking">Prix marquage au sol</Link></li>
            <li><Link href="/guides/reglementation-marquage-sol-parking">Réglementation marquage</Link></li>
            <li><Link href="/guides/normes-pmr-parking">Normes PMR parking</Link></li>
            <li><Link href="/guides/dimension-place-de-parking-normes">Dimensions places parking</Link></li>
            <li><Link href="/guides/signalisation-parking-reglementation">Signalisation parking</Link></li>
            <li><Link href="/guides/marquage-au-sol-signification-couleurs">Couleurs marquage au sol</Link></li>
          </ul>
        </div>

        {/* Guides - Rénovation & Équipements */}
        <div>
          <p className="font-semibold mb-3">Guides rénovation</p>
          <ul className="space-y-2">
            <li><Link href="/guides/renovation-parking-copropriete">Rénovation copropriété</Link></li>
            <li><Link href="/guides/cout-renovation-parking">Coût rénovation parking</Link></li>
            <li><Link href="/guides/enrobe-froid-vs-resine-nids-de-poule">Enrobé vs résine</Link></li>
            <li><Link href="/guides/resine-epoxy-ou-peinture-sol-comparatif">Résine époxy vs peinture</Link></li>
            <li><Link href="/guides/ralentisseur-parking-norme">Ralentisseur parking</Link></li>
            <li><Link href="/guides/calendrier-entretien-parking">Entretien parking</Link></li>
            <li><Link href="/guides/accessibilite-parking-erp-normes">Accessibilité ERP</Link></li>
          </ul>
        </div>

        {/* Réalisations */}
        <div>
          <p className="font-semibold mb-3">Réalisations</p>
          <ul className="space-y-2">
            <li><Link href="/realisations">Tous nos projets</Link></li>
            <li><Link href="/realisations/em-lyon-parking-saint-louis">EM Lyon parking</Link></li>
            <li><Link href="/realisations/lidl-vienne-logos-xxl">Lidl Vienne logos</Link></li>
            <li><Link href="/realisations/intermarche-neuville-parking">Intermarché Neuville</Link></li>
            <li><Link href="/realisations/lidl-normes-pmr-resine">Lidl normes PMR</Link></li>
            <li><Link href="/realisations/carglass-angouleme-zebra">Carglass Angoulême</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
