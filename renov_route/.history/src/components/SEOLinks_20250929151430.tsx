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
          <li><Link href="/competences/tracage-retracage-parking">Traçage de parking professionnel</Link></li>
          <li><Link href="/competences/signalisation-verticale">Signalisation verticale et panneaux de parking</Link></li>
          <li><Link href="/competences/reparation-nids-de-poule">Réparation de nids de poule avec enrobé résine</Link></li>
          <li><Link href="/competences/resine-sol-marquage-interieur">Enrobé résine à froid</Link></li>
          <li><Link href="/competences">Rénovation de parking complète</Link></li>
          <li><Link href="/competences/accessoires-parking">Accessoires de parking et équipements</Link></li>
        </ul>
      </div>

      {/* Zones géographiques */}
      <div>
        <h3>Intervention en France</h3>
        <ul>
          <li><Link href="/competences">Traçage marquage routier à Lyon</Link></li>
          <li><Link href="/competences">Marquage parking Rhône-Alpes</Link></li>
          <li><Link href="/competences">Expert marquage Auvergne-Rhône-Alpes</Link></li>
          <li><Link href="/competences">Traçage parking Paris</Link></li>
          <li><Link href="/competences">Marquage routier Marseille</Link></li>
          <li><Link href="/competences">Réparation nids de poule Toulouse</Link></li>
        </ul>
      </div>

      {/* Secteurs d'activité */}
      <div>
        <h3>Secteurs d'activité</h3>
        <ul>
          <li><Link href="/competences">Marquage parking commerces</Link></li>
          <li><Link href="/competences">Traçage industriel</Link></li>
          <li><Link href="/competences">Marquage routier collectivités</Link></li>
          <li><Link href="/competences">Parking centres commerciaux</Link></li>
          <li><Link href="/competences">Marquage parking entreprises</Link></li>
        </ul>
      </div>

      {/* Pages d'information */}
      <div>
        <h3>Informations utiles</h3>
        <ul>
          <li><Link href="/realisations">Blog traçage marquage routier</Link></li>
          <li><Link href="/competences">FAQ marquage routier</Link></li>
          <li><Link href="/competences">Normes de marquage routier</Link></li>
          <li><Link href="/devis">Tarifs traçage parking</Link></li>
          <li><Link href="/devis">Devis gratuit marquage</Link></li>
        </ul>
      </div>

      {/* Mots-clés longue traîne */}
      <div>
        <h3>Mots-clés spécialisés</h3>
        <ul>
          <li><Link href="/competences/tracage-retracage-parking">Marquage parking professionnel</Link></li>
          <li><Link href="/competences/tracage-retracage-parking">Retraçage de parking</Link></li>
          <li><Link href="/competences/signalisation-verticale">Signalisation horizontale</Link></li>
          <li><Link href="/competences">Marquage au sol</Link></li>
          <li><Link href="/competences">Traçage de route</Link></li>
          <li><Link href="/competences">Marquage de chaussée</Link></li>
          <li><Link href="/competences/reparation-nids-de-poule">Réparation de route</Link></li>
          <li><Link href="/competences">Entretien de parking</Link></li>
          <li><Link href="/devis">Devis traçage gratuit</Link></li>
          <li><Link href="/competences">Expert marquage routier</Link></li>
          <li><Link href="/competences">Travaux de voirie</Link></li>
          <li><Link href="/competences">Aménagement de parking</Link></li>
          <li><Link href="/competences">Marquage industriel</Link></li>
          <li><Link href="/competences">Traçage commercial</Link></li>
        </ul>
      </div>
    </div>
  );
}
