import type { Guide } from '../guides'
import KeyAnswer from '@/components/KeyAnswer'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'dimensions-nombre-places-pmr-parking',
  title: 'Dimensions et nombre de places PMR en parking : le guide de référence',
  metaTitle: "Place PMR : dimensions et nombre obligatoire",
  metaDescription: "Une place PMR mesure 3,30 m × 5 m minimum. 2 % des places sont obligatoires, arrondi à l'unité supérieure. Tableau complet et sanctions jusqu'à 45 000 €.",
  publishDate: '2026-03-04',
  updatedDate: '2026-07-28',
  category: 'normes-pmr',
  readingTime: 10,
  excerpt: 'Toutes les dimensions réglementaires des places PMR en parking : largeur 3,30 m, bande d\'accès de 0,80 m, nombre obligatoire selon la capacité. Tableaux et erreurs à éviter.',
}

export default function Content() {
  return (
    <>
      <KeyAnswer question="Quelles sont les dimensions d’une place PMR ?">
        <p>
        Une place PMR mesure <strong>3,30 m de large sur 5 m de long</strong> minimum : 2,50 m pour la
        place elle-même, plus une <strong>bande d’accès latérale de 0,80 m</strong> sur toute la longueur.
        C’est cette bande qui permet d’ouvrir la portière et de déployer une rampe. La place reste horizontale, au dévers près de 2 %.
        </p>
      </KeyAnswer>

      <p>
        Votre parking fait 45 places. Combien de places PMR devez-vous prévoir ? Deux ? Trois ? Et quelles dimensions exactes doivent-elles respecter ?
      </p>
      <p>
        Si vous cherchez une réponse simple, la voici : 2 % du nombre total de places, arrondi à l'unité supérieure — soit au minimum 1 place. Chacune mesure 3,30 m de large (place + bande d'accès latérale de 0,80 m) sur 5 m de long.
      </p>
      <p>
        Mais entre la théorie et la pratique, les erreurs sont fréquentes. Bande d'accès trop étroite, pictogramme mal positionné, pente d'accès non conforme, nombre de places insuffisant. Pour un ERP non conforme, l&apos;amende peut atteindre 225 000 euros pour une personne morale.
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
        L&apos;<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034485459/" target="_blank" rel="noopener noreferrer">arrêté du 20 avril 2017</a> relatif à l&apos;accessibilité des ERP fixe les obligations :
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
            <tr><td>1 à 50 places</td><td>1 place minimum</td></tr>
            <tr><td>51 à 500 places</td><td>1 place pour 50 places (soit 2 %)</td></tr>
            <tr><td>Plus de 500 places</td><td>Fixé par arrêté municipal, sans pouvoir être inférieur à 10</td></tr>
          </tbody>
        </table>
      </div>

      <p><strong>Exemples concrets :</strong></p>
      <ul>
        <li>Parking de 30 places (boulangerie, cabinet médical) : <strong>1 place PMR</strong> (30 × 2 % = 0,6 ; arrondi à 1)</li>
        <li>Parking de 80 places (supermarché) : <strong>2 places PMR</strong> (80 / 50 = 1,6 ; arrondi à 2)</li>
        <li>Parking de 200 places (centre commercial) : <strong>4 places PMR</strong> (200 / 50 = 4)</li>
        <li>Parking de 600 places (hypermarché) : <strong>fixé par arrêté municipal</strong>, 10 places minimum</li>
      </ul>

      <p>
        Le calcul s'arrondit toujours à l'entier supérieur. Un parking de 120 places doit prévoir 3 places PMR (120 / 50 = 2,4, arrondi à 3).
      </p>

      <h3>Parking de copropriété</h3>
      <p>
        Les règles dépendent de la date de construction et de la nature des travaux de <Link href="/guides/renovation-parking-copropriete">rénovation du parking</Link> : faites-les vérifier pour votre résidence.
      </p>
      <p>
        En pratique, même sans obligation formelle, la plupart des syndics choisissent de créer au moins une place PMR lors d'un <Link href="/competences/tracage-retracage-parking">retraçage complet</Link>. C'est un faible surcoût (la place PMR est simplement plus large) et cela évite toute contestation.
      </p>

      <h3>Parking d'entreprise (non ouvert au public)</h3>
      <p>
        Les parkings d'entreprise non ouverts au public ne sont pas soumis à la réglementation ERP. Cependant, le Code du travail impose que les lieux de travail soient accessibles aux travailleurs handicapés. En pratique, prévoyez au minimum 1 place PMR par parking, idéalement 2 %.
      </p>
      <p>
        Prenons l&apos;exemple de Laurent, DRH d&apos;une PME industrielle à Meyzieu (69), qui pensait que son parking de 25 places n&apos;était pas concerné par les normes PMR : quand un nouveau salarié en fauteuil roulant a été recruté, il a fallu créer une place PMR en urgence. Le retra&ccedil;age de la place a &eacute;t&eacute; simple et peu co&ucirc;teux, mais le d&eacute;placement du poteau d'&eacute;clairage qui g&ecirc;nait l'acc&egrave;s au v&eacute;hicule a repr&eacute;sent&eacute; un co&ucirc;t bien sup&eacute;rieur. S'il avait prévu la place PMR dès l'origine, le surcoût aurait été négligeable.
      </p>
      <p>
        Vous ne savez pas combien de places PMR votre parking doit compter ? Notre équipe réalise un <Link href="/competences/conseil-expertise">diagnostic gratuit</Link> et vous remet un plan de mise en conformité chiffré.
      </p>

      <h2>Dimensions réglementaires d'une place PMR</h2>
      <p>
        Les dimensions d'une place PMR reposent sur l&apos;arrêté du 20 avril 2017, qui fixe la largeur de 3,30 m et la longueur de 5 m.
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
            <tr><td>Pente</td><td>Place horizontale</td><td>Au dévers près</td></tr>
            <tr><td>Dévers maximal</td><td>2 %</td><td>Pente latérale</td></tr>
            <tr><td>Passage libre sous obstacles (parking couvert)</td><td>2,00 m minimum</td><td>Arrêté du 20 avril 2017, art. 6</td></tr>
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
        <li><strong>Pente maximale du cheminement</strong> : 5 % (tolérance de 8 % sur 2 m et de 10 % sur 0,50 m) ; place horizontale</li>
        <li><strong>Dévers maximal</strong> : 2 % sur la place et le cheminement</li>
        <li><strong>Largeur du cheminement</strong> : 1,40 m minimum (1,20 m en cas de rétrécissement ponctuel)</li>
        <li><strong>Ressaut maximal</strong> : 2 cm, arrondi ou chanfreiné (4 cm si la pente du chanfrein ne dépasse pas 33 %)</li>
      </ul>
      <p>
        Si votre parking est en pente, les places PMR doivent être implantées dans la zone la plus plane possible, généralement près de l'entrée du bâtiment.
      </p>

      <h2>Où implanter les places PMR dans votre parking ?</h2>
      <p>
        L'emplacement des places PMR n'est pas laissé au hasard. L&apos;arrêté du 20 avril 2017 fixe le cadre :
      </p>

      <h3>1. Au plus près de l'entrée</h3>
      <p>
        Les places PMR doivent être situées au plus près de l'entrée principale du bâtiment ou de l'ascenseur (en parking souterrain).
      </p>

      <h3>2. Sur un cheminement accessible</h3>
      <p>
        Le trajet entre la place PMR et l'entrée du bâtiment doit être continu, sans marche ni obstacle, avec un revêtement non meuble et non glissant. Les bordures de trottoir doivent être abaissées.
      </p>

      <h3>3. Au plus près de la surface</h3>
      <p>
        Dans un parc en ouvrage, les places adaptées peuvent être concentrées sur les deux niveaux les plus proches de la surface.
      </p>
      <p>
        Prenons l&apos;exemple de Véronique, syndic d&apos;une résidence de 120 lots à Villeurbanne (69) : elle avait deux places PMR en sous-sol au niveau -2, accessibles uniquement par l'ascenseur du parking. Lors de la panne de l'ascenseur (3 semaines de réparation), aucune place PMR n'était accessible. Après une plainte d'un résident, le syndic a fait créer une place PMR supplémentaire en surface lors du retraçage général du parking. Co&ucirc;t suppl&eacute;mentaire : quelques centaines d'euros (marquage + panneau PMR). L'investissement a évité un conflit juridique bien plus coûteux.
      </p>

      <h2>Le marquage au sol d'une place PMR</h2>
      <p>
        L&apos;arrêté impose un marquage au sol et une signalisation verticale. Voici les éléments à prévoir en pratique.
      </p>

      <h3>Éléments à prévoir</h3>
      <ol>
        <li><strong>Le pictogramme PMR (fauteuil roulant)</strong> : peint au sol, en blanc sur fond bleu, au centre de la place. Dimensions recommandées : 0,50 m x 0,60 m minimum.</li>
        <li><strong>Les lignes de délimitation</strong> : en peinture blanche ou bleue.</li>
        <li><strong>La bande d'accès</strong> : matérialisée par des hachures diagonales blanches sur fond bleu (ou inversement), pour signaler clairement l'interdiction de s'y garer.</li>
        <li><strong>Le <Link href="/competences/signalisation-verticale">panneau vertical B6d avec panonceau M6h</Link></strong> : arrêt et stationnement interdits sauf titulaires de la carte, implanté en tête de place, visible depuis l'allée de circulation. Le panneau seul ne suffit pas, il doit être accompagné du marquage au sol.</li>
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
            <tr><td>Pas de panneau vertical</td><td>Place non identifiable de loin, non conforme</td><td>Installer un panneau B6d avec panonceau M6h</td></tr>
            <tr><td>Dévers supérieur à 2 %</td><td>Dangereux pour les fauteuils roulants</td><td>Déplacer la place ou reprendre la pente</td></tr>
            <tr><td>Hachures de la bande d'accès absentes</td><td>Risque de stationnement sur la bande</td><td>Tracer les hachures diagonales</td></tr>
            <tr><td>Place trop éloignée de l'entrée</td><td>Non conforme à la règle de proximité</td><td>Déplacer la place plus près de l'entrée</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        Prenons l&apos;exemple de Romain, gérant d&apos;une clinique vétérinaire à Écully (69) : il avait fait tracer ses deux places PMR par une entreprise de BTP généraliste. Lors d'un contrôle de la commission d'accessibilité, les deux places ont été jugées non conformes : la bande d'accès ne faisait que 0,60 m (au lieu de 0,80 m) et le pictogramme mesurait 0,30 m x 0,35 m (trop petit). Résultat : mise en demeure de mise en conformité sous 3 mois. Il a fait reprendre le retraçage des deux places conformément aux normes. Intervention en une demi-journée, quelques centaines d'euros HT tout compris (marquage + pictogrammes + hachures).
      </p>

      <h2>Les sanctions en cas de non-conformité</h2>
      <p>
        Les conséquences d'un parking non conforme aux normes PMR dépendent du type d'établissement.
      </p>

      <h3>Pour les ERP</h3>
      <p>
        L'amende peut atteindre <strong>225 000 euros</strong> pour une personne morale et <strong>45 000 euros</strong> pour une personne physique (article L. 183-4 du Code de la construction et de l&apos;habitation). En pratique, les commissions d'accessibilité commencent par une mise en demeure avec délai de mise en conformité (généralement 3 à 6 mois). L'amende intervient en cas de non-respect de la mise en demeure.
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
        La mise en conformité est presque toujours moins coûteuse que les sanctions. Pour deux places PMR dans un parking existant, comptez &agrave; partir de 600 euros (marquage + panneaux), bien en deçà du moindre risque juridique.
      </p>

      <h2>Comment mettre votre parking en conformité PMR</h2>
      <p>La mise en conformité suit un processus en 4 étapes :</p>

      <h3>Étape 1 : Diagnostic de l'existant</h3>
      <p>Faites le point sur votre parking :</p>
      <ul>
        <li>Combien de places au total ?</li>
        <li>Combien de places PMR actuelles ?</li>
        <li>Leurs dimensions sont-elles conformes (3,30 m de large minimum) ?</li>
        <li>La place est-elle horizontale, au dévers près de 2 % ?</li>
        <li>Le cheminement vers l'entrée est-il accessible ?</li>
        <li>Le panneau B6d avec panonceau M6h est-il présent ?</li>
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
        <li>Pose du panneau vertical B6d avec panonceau M6h</li>
      </ul>
      <p><strong>Durée</strong> : 1 à 2 heures par place PMR</p>
      <p><strong>Co&ucirc;t</strong> : &agrave; partir de 300 euros HT par place (marquage complet + panneau)</p>

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

      <h3>Quelles sont les dimensions d'une place de parking PMR ?</h3>
      <p>
        Une place de stationnement PMR mesure au minimum <strong>3,30 m de large sur 5 m de long</strong>, dont une <strong>bande d'accès latérale de 0,80 m</strong>. Le sol doit rester horizontal (dévers ≤ 2 %) et relié à un cheminement accessible jusqu'à l'entrée. Largeur et longueur sont fixées par l&apos;arrêté du 20 avril 2017.
      </p>

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
        Oui. La règle des 2 % s'arrondit à l'unité supérieure : même un parking de 10 places doit comporter 1 place PMR (2 % de 10 = 0,2, arrondi à 1). Le minimum réglementaire est d'une place, quelle que soit la capacité.
      </p>

      <h3>Peut-on transformer une place standard en place PMR sans refaire tout le parking ?</h3>
      <p>
        Oui. Il suffit d'élargir la place concernée (en réduisant la place adjacente ou en supprimant une place) pour atteindre 3,30 m de large, puis de tracer le marquage PMR. C'est l'intervention la plus courante et la moins coûteuse (&agrave; partir de 300 euros par place).
      </p>

      <h3>Les dimensions PMR sont-elles les mêmes pour un parking souterrain ?</h3>
      <p>
        Oui, les dimensions au sol sont identiques. En parc de stationnement, le passage libre sous les obstacles en hauteur doit atteindre au moins 2 m sur le cheminement accessible.
      </p>

      <h2>Faites de la conformité PMR un atout</h2>
      <p>
        La mise aux normes PMR n'est pas qu'une obligation. C'est un signal fort envoyé à vos clients, vos salariés et vos visiteurs : votre établissement est accessible à tous. Les places PMR bien tracées, visibles et correctement dimensionnées montrent que vous prenez l'accessibilité au sérieux.
      </p>

      <p><strong>Ce qu'il faut retenir :</strong></p>
      <ul>
        <li><strong>Nombre</strong> : 2 % minimum, arrondi à l&apos;unité supérieure</li>
        <li><strong>Largeur</strong> : 3,30 m minimum (place de 2,50 m + bande d'accès de 0,80 m)</li>
        <li><strong>Longueur</strong> : 5 m minimum</li>
        <li><strong>Dévers</strong> : 2 % maximum</li>
        <li><strong>Emplacement</strong> : au plus près de l'entrée, sur cheminement accessible</li>
        <li><strong>Marquage</strong> : pictogramme + hachures + panneau B6d avec panonceau M6h</li>
      </ul>

      <p>
        Renov'Route réalise le <Link href="/guides/normes-pmr-parking">diagnostic et la mise en conformité PMR</Link> de votre parking. Nous intervenons à Lyon, en Rhône-Alpes et partout en France.
      </p>
      <p>
        <Link href="/devis">Demandez votre devis gratuit</Link>. Nous vous répondons en 48h avec un plan de mise en conformité détaillé et sans engagement.
      </p>
    </>
  )
}
