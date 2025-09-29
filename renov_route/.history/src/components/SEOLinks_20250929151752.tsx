import Link from "next/link";

interface SEOLinksProps {
  className?: string;
}

export default function SEOLinks({ className = "" }: SEOLinksProps) {
  return (
    <footer className={`bg-50 border-t py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/tracage-parking">Parking Marking</Link></li>
            <li><Link href="/services/signalisation-verticale">Vertical Signage</Link></li>
            <li><Link href="/services/reparation-nids-poule">Pothole Repairs</Link></li>
            <li><Link href="/services/enrobe-resine">Resin Asphalt</Link></li>
            <li><Link href="/services/renovation-parking">Parking Renovation</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold mb-3">Where We Work</h3>
          <ul className="space-y-2">
            <li><Link href="/lyon">Lyon</Link></li>
            <li><Link href="/rhone-alpes">Rhône-Alpes</Link></li>
            <li><Link href="/auvergne-rhone-alpes">Auvergne-Rhône-Alpes</Link></li>
            <li><Link href="/paris">Paris</Link></li>
            <li><Link href="/marseille">Marseille</Link></li>
            <li><Link href="/toulouse">Toulouse</Link></li>
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h3 className="font-semibold mb-3">Sectors</h3>
          <ul className="space-y-2">
            <li><Link href="/secteurs/commerces">Retail</Link></li>
            <li><Link href="/secteurs/industries">Industry</Link></li>
            <li><Link href="/secteurs/collectivites">Public Sector</Link></li>
            <li><Link href="/secteurs/centres-commerciaux">Shopping Centers</Link></li>
            <li><Link href="/secteurs/entreprises">Businesses</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold mb-3">More Info</h3>
          <ul className="space-y-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/normes-marquage">Marking Standards</Link></li>
            <li><Link href="/tarifs">Pricing</Link></li>
            <li><Link href="/devis-gratuit">Request a Quote</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
