import Link from 'next/link';

interface SEOLinksProps {
  className?: string;
}

export default function SEOLinks({ className = "" }: SEOLinksProps) {
  return (
    <div className={`hidden ${className}`} aria-hidden="true">
      {/* Liens SEO pour le maillage interne */}
      <h2>Liens utiles - Traçage Marquage Routier</h2>
      
      {/* Services principaux */}
      <div>
        <h3>Services de marquage routier</h3>
        <ul>
          <li><Link href="/services/tracage-parking">Traçage de parking professionnel</Link></li>
          <li><Link href="/services/signalisation-verticale">Signalisation verticale et panneaux de parking</Link></li>
          <li><Link href="/services/reparation-nids-poule">Réparation de nids de poule avec enrobé résine</Link></li>
          <li><Link href="/services/enrobe-resine">Enrobé résine à froid</Link></li>
          <li><Link href="/services/renovation-parking">Rénovation de parking complète</Link></li>
          <li><Link href="/services/accessoires-parking">Accessoires de parking et équipements</Link></li>
        </ul>
      </div>

      {/* Zones géographiques */}
      <div>
        <h3>Intervention en France</h3>
        <ul>
          <li><Link href="/lyon">Traçage marquage routier à Lyon</Link></li>
          <li><Link href="/rhone-alpes">Marquage parking Rhône-Alpes</Link></li>
          <li><Link href="/auvergne-rhone-alpes">Expert marquage Auvergne-Rhône-Alpes</Link></li>
          <li><Link href="/paris">Traçage parking Paris</Link></li>
          <li><Link href="/marseille">Marquage routier Marseille</Link></li>
          <li><Link href="/toulouse">Réparation nids de poule Toulouse</Link></li>
        </ul>
      </div>

      {/* Secteurs d'activité */}
      <div>
        <h3>Secteurs d'activité</h3>
        <ul>
          <li><Link href="/secteurs/commerces">Marquage parking commerces</Link></li>
          <li><Link href="/secteurs/industries">Traçage industriel</Link></li>
          <li><Link href="/secteurs/collectivites">Marquage routier collectivités</Link></li>
          <li><Link href="/secteurs/centres-commerciaux">Parking centres commerciaux</Link></li>
          <li><Link href="/secteurs/entreprises">Marquage parking entreprises</Link></li>
        </ul>
      </div>

      {/* Pages d'information */}
      <div>
        <h3>Informations utiles</h3>
        <ul>
          <li><Link href="/blog">Blog traçage marquage routier</Link></li>
          <li><Link href="/faq">FAQ marquage routier</Link></li>
          <li><Link href="/normes-marquage">Normes de marquage routier</Link></li>
          <li><Link href="/tarifs">Tarifs traçage parking</Link></li>
          <li><Link href="/devis-gratuit">Devis gratuit marquage</Link></li>
        </ul>
      </div>

      {/* Mots-clés longue traîne */}
      <div>
        <h3>Mots-clés spécialisés</h3>
        <ul>
          <li><Link href="/marquage-parking-professionnel">Marquage parking professionnel</Link></li>
          <li><Link href="/retrace-parking">Retraçage de parking</Link></li>
          <li><Link href="/signalisation-horizontale">Signalisation horizontale</Link></li>
          <li><Link href="/marquage-au-sol">Marquage au sol</Link></li>
          <li><Link href="/tracage-route">Traçage de route</Link></li>
          <li><Link href="/marquage-chaussee">Marquage de chaussée</Link></li>
          <li><Link href="/reparation-route">Réparation de route</Link></li>
          <li><Link href="/entretien-parking">Entretien de parking</Link></li>
          <li><Link href="/devis-tracage-gratuit">Devis traçage gratuit</Link></li>
          <li><Link href="/expert-marquage-routier">Expert marquage routier</Link></li>
          <li><Link href="/travaux-voirie">Travaux de voirie</Link></li>
          <li><Link href="/amenagement-parking">Aménagement de parking</Link></li>
          <li><Link href="/marquage-industriel">Marquage industriel</Link></li>
          <li><Link href="/tracage-commercial">Traçage commercial</Link></li>
        </ul>
      </div>
    </div>
  );
}
