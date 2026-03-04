import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'dimensions-nombre-places-pmr-parking',
  title: 'Dimensions et nombre de places PMR en parking : le guide de référence',
  metaTitle: 'Dimensions place PMR parking : toutes les mesures | Renov\'Route',
  metaDescription: 'Dimensions place PMR parking : 3,30 m x 5 m minimum, bande de 0,80 m, nombre obligatoire selon la taille. Tableau récapitulatif et schéma pour mise en conformité.',
  publishDate: '2026-03-04',
  category: 'normes-pmr',
  readingTime: 10,
  excerpt: 'Toutes les dimensions réglementaires des places PMR en parking : largeur 3,30 m, bande d\'accès de 0,80 m, nombre obligatoire selon la capacité. Tableaux et erreurs à éviter.',
}

export default function Content() {
  return (
    <>
      <p>
        Votre parking fait 45 places. Combien de places PMR devez-vous prévoir ? Deux ? Trois ? Et quelles dimensions exactes doivent-elles respecter ?
      </p>
      <p>
        Si vous cherchez une réponse simple, la voici : au moins 2 places PMR, de 3,30 m de large minimum (place + bande d'accès latérale de 0,80 m) sur 5 m de long. Au-delà de 50 places, le calcul change.
      </p>
      <p>
        Mais entre la théorie et la pratique, les erreurs sont fréquentes. Bande d'accès trop étroite, pictogramme mal positionné, pente d'accès non conforme, nombre de places insuffisant. Un contrôle peut coûter jusqu'à 225 000 euros d'amende pour un ERP non conforme.
      </p>
      <p>
        Ce guide détaille toutes les dimensions réglementaires, le nombre exact de places PMR obligatoires selon la taille de votre parking, et les erreurs de marquage à éviter. Pour un panorama complet des obligations réglementaires, consultez aussi notre <Link href="/guides/normes-pmr-parking">guide des normes PMR parking</Link>.
      </p>

      <h2>Combien de places PMR sont obligatoires dans votre parking ?</h2>
      <p>
        Le nombre de places PMR dépend de la capacité totale du parking. Les règles varient selon le type d'établissement (ERP, copropriété, entreprise).
      </p>

      <h3>Parking d'ERP (Établissement Recevant du Public)</h3>
      <p>
        L'arrêté du 20 avril 2017 relatif à l'accessibilité des ERP fixe les obligations :
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Capacité du parking</th>
              <th>Nombre de places PMR obligatoires</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1 à 50 places</td><td>2 places minimum</td></tr>
            <tr><td>51 à 500 places</td><td>1 place pour 50 places (soit 2 %)</td></tr>
            <tr><td>Plus de 500 places</td><td>10 places + 1 place par tranche de 50 au-delà de 500</td></tr>
          </tbody>
        </table>
      </div>

      <p><strong>Exemples concrets :</strong></p>
      <ul>
        <li>Parking de 30 places (boulangerie, cabinet médical) : <strong>2 places PMR</strong></li>
        <li>Parking de 80 places (supermarché) : <strong>2 places PMR</strong> (80 / 50 = 1,6 ; arrondi à 2)</li>
        <li>Parking de 200 places (centre commercial) : <strong>4 places PMR</strong> (200 / 50 = 4)</li>
        <li>Parking de 600 places (hypermarché) : <strong>12 places PMR</strong> (10 + 2 tranches de 50 au-delà de 500)</li>
      </ul>

      <p>
        Le calcul s'arrondit toujours à l'entier supérieur. Un parking de 120 places doit prévoir 3 places PMR (120 / 50 = 2,4, arrondi à 3).
      </p>

      <h3>Parking de copropriété</h3>
      <p>
        Pour les copropriétés construites après le 1er janvier 2007, les mêmes proportions s'appliquent. Pour les copropriétés antérieures, l'obligation ne s'impose que lors de travaux de <Link href="/guides/renovation-parking-copropriete">rénovation du parking</Link> soumis à permis de construire.
      </p>
      <p>
        En pratique, même sans obligation formelle, la plupart des syndics choisissent de créer au moins une place PMR lors d'un <Link href="/competences/tracage-retracage-parking">retraçage complet</Link>. C'est un faible surcoût (la place PMR est simplement plus large) et ça évite toute contestation.
      </p>

      <h3>Parking d'entreprise (non ouvert au public)</h3>
      <p>
        Les parkings d'entreprise non ouverts au public ne sont pas soumis à la réglementation ERP. Cependant, le Code du travail (article R4225-7) impose que les lieux de travail soient accessibles aux travailleurs handicapés. En pratique, prévoyez au minimum 1 place PMR par parking, idéalement 2 %.
      </p>
      <p>
        Laurent, DRH d'une PME industrielle à Meyzieu (69), pensait que son parking de 25 places n'était pas concerné par les normes PMR. Quand un nouveau salarié en fauteuil roulant a été recruté, il a fallu créer une place PMR en urgence. Le retraçage de la place (280 euros) a été simple, mais le déplacement du poteau d'éclairage qui gênait l'accès au véhicule a coûté 1 200 euros de plus. S'il avait prévu la place PMR dès l'origine, le surcoût aurait été négligeable.
      </p>
      <p>
        Vous ne savez pas combien de places PMR votre parking doit compter ? Notre équipe réalise un <Link href="/competences/conseil-expertise">diagnostic gratuit</Link> et vous remet un plan de mise en conformité chiffré.
      </p>

      <h2>Dimensions réglementaires d'une place PMR</h2>
      <p>
        Les dimensions d'une place PMR sont définies par l'arrêté du 20 avril 2017 et la norme NF P 91-120.
      </p>

      <h3>La place en elle-même</h3>
      <p>Une place PMR se compose de deux zones :</p>
      <ol>
        <li><strong>La place de stationnement</strong> : mêmes dimensions qu'une place standard, soit 2,50 m de large sur 5 m de long minimum</li>
        <li><strong>La bande d'accès latérale</strong> : 0,80 m de large minimum, sur toute la longueur de la place</li>
      </ol>
      <p>
        <strong>Largeur totale minimale : 3,30 m</strong> (2,50 m + 0,80 m)
      </p>
      <p>
        La bande d'accès latérale est l'élément le plus important. C'est cette bande qui permet à une personne en fauteuil roulant d'ouvrir sa portière complètement et de déployer la rampe ou le hayon. Sans cette bande, la place est inutilisable.
      </p>

      <h3>Récapitulatif des dimensions</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Élément</th>
              <th>Dimension minimale</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Largeur de la place</td><td>2,50 m</td><td>Identique à une place standard</td></tr>
            <tr><td>Largeur de la bande d'accès</td><td>0,80 m</td><td>Indispensable pour le fauteuil roulant</td></tr>
            <tr><td><strong>Largeur totale (place + bande)</strong></td><td><strong>3,30 m</strong></td><td>Dimension à respecter impérativement</td></tr>
            <tr><td>Longueur</td><td>5,00 m</td><td>Identique à une place standard</td></tr>
            <tr><td>Pente maximale</td><td>2 %</td><td>Dans tous les sens (longitudinal et transversal)</td></tr>
            <tr><td>Dévers maximal</td><td>2 %</td><td>Pente latérale</td></tr>
            <tr><td>Hauteur libre (parking couvert)</td><td>2,15 m minimum</td><td>Pour les véhicules adaptés (hayon)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>La bande d'accès peut être partagée</h3>
      <p>
        Deux places PMR adjacentes peuvent partager la même bande d'accès de 0,80 m, à condition que cette bande se trouve entre les deux places. Cette disposition permet d'économiser de l'espace : deux places PMR côte à côte occupent 5,80 m de large (2,50 + 0,80 + 2,50) au lieu de 6,60 m si chaque place avait sa propre bande.
      </p>
      <p>
        Pour un parking à capacité limitée, cette configuration est plus efficace. Demandez conseil à notre équipe lors du <Link href="/competences/tracage-retracage-parking">traçage de votre parking</Link>.
      </p>

      <h3>Pente et accès</h3>
      <p>
        La réglementation impose que la place PMR et son cheminement vers l'entrée du bâtiment respectent des contraintes de pente :
      </p>
      <ul>
        <li><strong>Pente longitudinale maximale</strong> : 5 % sur le cheminement, 2 % sur la place</li>
        <li><strong>Dévers maximal</strong> : 2 % sur la place et le cheminement</li>
        <li><strong>Largeur du cheminement</strong> : 1,40 m minimum (1,20 m en cas de rétrécissement ponctuel)</li>
        <li><strong>Ressaut maximal</strong> : 2 cm (4 cm si bord arrondi ou chanfreiné)</li>
      </ul>
      <p>
        Si votre parking est en pente, les places PMR doivent être implantées dans la zone la plus plane possible, généralement près de l'entrée du bâtiment.
      </p>

      <h2>Où implanter les places PMR dans votre parking ?</h2>
      <p>
        L'emplacement des places PMR n'est pas laissé au hasard. L'arrêté du 20 avril 2017 impose trois critères :
      </p>

      <h3>1. Au plus près de l'entrée</h3>
      <p>
        Les places PMR doivent être situées au plus près de l'entrée principale du bâtiment ou de l'ascenseur (en parking souterrain). La distance entre la place PMR et l'entrée ne doit pas dépasser 200 mètres sur un cheminement accessible.
      </p>

      <h3>2. Sur un cheminement accessible</h3>
      <p>
        Le trajet entre la place PMR et l'entrée du bâtiment doit être continu, sans marche ni obstacle, avec un revêtement non meuble et non glissant. Les bordures de trottoir doivent être abaissées.
      </p>

      <h3>3. En surface quand c'est possible</h3>
      <p>
        Quand le parking comporte plusieurs niveaux, au moins une place PMR doit se trouver en surface (niveau de plain-pied) ou au niveau de l'ascenseur.
      </p>
      <p>
        Véronique, syndic d'une résidence de 120 lots à Villeurbanne (69), avait deux places PMR en sous-sol au niveau -2, accessibles uniquement par l'ascenseur du parking. Lors de la panne de l'ascenseur (3 semaines de réparation), aucune place PMR n'était accessible. Après une plainte d'un résident, le syndic a fait créer une place PMR supplémentaire en surface lors du retraçage général du parking. Coût supplémentaire : 350 euros (marquage + panneau PMR). L'investissement a évité un conflit juridique bien plus coûteux.
      </p>

      <h2>Le marquage au sol d'une place PMR</h2>
      <p>
        Le marquage d'une place PMR comprend plusieurs éléments obligatoires. Les manquer vous expose à une non-conformité.
      </p>

      <h3>Éléments obligatoires</h3>
      <ol>
        <li><strong>Le pictogramme PMR (fauteuil roulant)</strong> : peint au sol, en blanc sur fond bleu, au centre de la place. Dimensions recommandées : 0,50 m x 0,60 m minimum.</li>
        <li><strong>Les lignes de délimitation</strong> : en peinture blanche ou bleue, plus larges que les lignes standard (0,07 m minimum vs 0,05 m pour une place standard).</li>
        <li><strong>La bande d'accès</strong> : matérialisée par des hachures diagonales blanches sur fond bleu (ou inversement), pour signaler clairement l'interdiction de s'y garer.</li>
        <li><strong>Le <Link href="/competences/signalisation-verticale">panneau vertical B6d</Link></strong> : panneau rond bleu avec le pictogramme PMR, implanté en tête de place, visible depuis l'allée de circulation. Le panneau seul ne suffit pas, il doit être accompagné du marquage au sol.</li>
      </ol>

      <h3>Erreurs de marquage fréquentes</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Erreur</th>
              <th>Conséquence</th>
              <th>Correction</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Bande d'accès de 0,60 m au lieu de 0,80 m</td><td>Place non conforme, inutilisable en fauteuil</td><td>Élargir la place</td></tr>
            <tr><td>Pictogramme trop petit ({'<'} 0,40 m)</td><td>Difficilement lisible, non conforme</td><td>Refaire le pictogramme aux bonnes dimensions</td></tr>
            <tr><td>Pas de panneau vertical</td><td>Place non identifiable de loin, non conforme</td><td>Installer un panneau B6d</td></tr>
            <tr><td>Place en pente ({'>'} 2 %)</td><td>Dangereux pour les fauteuils roulants</td><td>Déplacer la place ou reprendre la pente</td></tr>
            <tr><td>Hachures de la bande d'accès absentes</td><td>Risque de stationnement sur la bande</td><td>Tracer les hachures diagonales</td></tr>
            <tr><td>Place trop éloignée de l'entrée</td><td>Non conforme à la règle de proximité</td><td>Déplacer la place plus près de l'entrée</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        Romain, gérant d'une clinique vétérinaire à Écully (69), avait fait tracer ses deux places PMR par une entreprise de BTP généraliste. Lors d'un contrôle de la commission d'accessibilité, les deux places ont été jugées non conformes : la bande d'accès ne faisait que 0,60 m (au lieu de 0,80 m) et le pictogramme mesurait 0,30 m x 0,35 m (trop petit). Résultat : mise en demeure de mise en conformité sous 3 mois. Il nous a confié le retraçage des deux places conformément aux normes. Intervention en une demi-journée, 450 euros HT tout compris (marquage + pictogrammes + hachures).
      </p>

      <h2>Les sanctions en cas de non-conformité</h2>
      <p>
        Les conséquences d'un parking non conforme aux normes PMR dépendent du type d'établissement.
      </p>

      <h3>Pour les ERP</h3>
      <p>
        L'amende peut atteindre <strong>225 000 euros</strong> pour une personne morale et <strong>45 000 euros</strong> pour une personne physique (article L152-4 du Code de la construction et de l'habitation). En pratique, les commissions d'accessibilité commencent par une mise en demeure avec délai de mise en conformité (généralement 3 à 6 mois). L'amende intervient en cas de non-respect de la mise en demeure.
      </p>

      <h3>Pour les copropriétés</h3>
      <p>
        Pas d'amende directe, mais la responsabilité du syndic peut être engagée si un copropriétaire ou un visiteur à mobilité réduite ne peut pas accéder au bâtiment à cause d'un parking non conforme. Les litiges se règlent généralement en assemblée générale, mais peuvent aller jusqu'au tribunal.
      </p>

      <h3>Pour les entreprises</h3>
      <p>
        Au-delà de l'amende, l'absence de places PMR peut constituer une discrimination à l'embauche si un candidat en situation de handicap ne peut pas accéder aux locaux. Le risque juridique est réel, même pour les petites entreprises.
      </p>
      <p>
        La mise en conformité est presque toujours moins coûteuse que les sanctions. Pour deux places PMR dans un parking existant, comptez entre 400 et 800 euros (marquage + panneaux), bien en deçà du moindre risque juridique.
      </p>

      <h2>Comment mettre votre parking en conformité PMR</h2>
      <p>La mise en conformité suit un processus en 4 étapes :</p>

      <h3>Étape 1 : Diagnostic de l'existant</h3>
      <p>Faites le point sur votre parking :</p>
      <ul>
        <li>Combien de places au total ?</li>
        <li>Combien de places PMR actuelles ?</li>
        <li>Leurs dimensions sont-elles conformes (3,30 m de large minimum) ?</li>
        <li>La pente de la place est-elle inférieure à 2 % ?</li>
        <li>Le cheminement vers l'entrée est-il accessible ?</li>
        <li>Le panneau vertical B6d est-il présent ?</li>
      </ul>

      <h3>Étape 2 : Plan de marquage</h3>
      <p>Identifiez où implanter les places PMR :</p>
      <ul>
        <li>Au plus près de l'entrée principale</li>
        <li>Sur la zone la plus plane du parking</li>
        <li>Avec un cheminement accessible jusqu'au bâtiment</li>
        <li>En regroupant les places si possible (bande d'accès partagée)</li>
      </ul>

      <h3>Étape 3 : Intervention de traçage</h3>
      <p>Le marquage d'une place PMR comprend :</p>
      <ul>
        <li>Traçage des lignes de délimitation (place + bande d'accès)</li>
        <li>Peinture du pictogramme PMR (fauteuil roulant)</li>
        <li>Hachures de la bande d'accès</li>
        <li>Pose du panneau vertical B6d</li>
      </ul>
      <p><strong>Durée</strong> : 1 à 2 heures par place PMR</p>
      <p><strong>Coût</strong> : 200 à 400 euros HT par place (marquage complet + panneau)</p>

      <h3>Étape 4 : Vérification</h3>
      <p>Après le marquage, vérifiez :</p>
      <ul>
        <li>La largeur totale (place + bande) mesure bien 3,30 m minimum</li>
        <li>Le pictogramme est lisible et aux bonnes dimensions</li>
        <li>La bande d'accès est clairement matérialisée</li>
        <li>Le panneau vertical est visible depuis l'allée de circulation</li>
        <li>Le cheminement entre la place et l'entrée est praticable</li>
      </ul>

      <h2>Questions fréquentes</h2>

      <h3>Peut-on mettre une place PMR en épi ou en bataille ?</h3>
      <p>
        Oui, les deux configurations sont possibles. En épi, la bande d'accès doit se trouver du côté le plus large de la place (côté où le véhicule se présente). En bataille (perpendiculaire), la bande d'accès est latérale, comme pour une place classique.
      </p>

      <h3>La place PMR doit-elle être peinte en bleu ?</h3>
      <p>
        Non, le fond bleu n'est pas obligatoire mais fortement recommandé. La réglementation impose le pictogramme PMR et les lignes de délimitation, mais pas de couleur de fond spécifique. En pratique, le marquage bleu est devenu un standard car il améliore la visibilité et identifie immédiatement la place.
      </p>

      <h3>Faut-il une place PMR dans un parking de 10 places ?</h3>
      <p>
        Oui. Dès qu'un parking d'ERP dépasse 1 place, il doit comporter au moins 2 places PMR (minimum réglementaire). Pour un parking de 10 places, cela représente 20 % de la capacité, ce qui peut sembler beaucoup. En pratique, les places PMR sont plus grandes mais peuvent servir à tous les usagers en dehors des heures de forte affluence.
      </p>

      <h3>Peut-on transformer une place standard en place PMR sans refaire tout le parking ?</h3>
      <p>
        Oui. Il suffit d'élargir la place concernée (en réduisant la place adjacente ou en supprimant une place) pour atteindre 3,30 m de large, puis de tracer le marquage PMR. C'est l'intervention la plus courante et la moins coûteuse (200 à 400 euros par place).
      </p>

      <h3>Les dimensions PMR sont-elles les mêmes pour un parking souterrain ?</h3>
      <p>
        Oui, les dimensions au sol sont identiques. La seule différence concerne la hauteur libre, qui doit être de 2,15 m minimum pour permettre l'ouverture des hayons des véhicules adaptés. Dans les parkings souterrains anciens avec une hauteur de 1,80 m, la place PMR doit être implantée dans une zone respectant cette hauteur.
      </p>

      <h2>Faites de la conformité PMR un atout</h2>
      <p>
        La mise aux normes PMR n'est pas qu'une obligation. C'est un signal fort envoyé à vos clients, vos salariés et vos visiteurs : votre établissement est accessible à tous. Les places PMR bien tracées, visibles et correctement dimensionnées montrent que vous prenez l'accessibilité au sérieux.
      </p>

      <p><strong>Ce qu'il faut retenir :</strong></p>
      <ul>
        <li><strong>Nombre</strong> : minimum 2 places PMR jusqu'à 50 places, puis 2 % au-delà</li>
        <li><strong>Largeur</strong> : 3,30 m minimum (place de 2,50 m + bande d'accès de 0,80 m)</li>
        <li><strong>Longueur</strong> : 5 m minimum</li>
        <li><strong>Pente</strong> : 2 % maximum</li>
        <li><strong>Emplacement</strong> : au plus près de l'entrée, sur cheminement accessible</li>
        <li><strong>Marquage</strong> : pictogramme + hachures + panneau vertical B6d</li>
      </ul>

      <p>
        Renov'Route réalise le <Link href="/guides/normes-pmr-parking">diagnostic et la mise en conformité PMR</Link> de votre parking. Nous intervenons à Lyon, en Rhône-Alpes et partout en France.
      </p>
      <p>
        <Link href="/devis">Demandez votre devis gratuit</Link>. Nous vous répondons sous 24h avec un plan de mise en conformité détaillé et sans engagement.
      </p>
    </>
  )
}
