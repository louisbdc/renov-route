import type { Guide } from '../guides'
import KeyAnswer from '@/components/KeyAnswer'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'normes-pmr-parking',
  title: 'Normes PMR parking 2026 : dimensions, nombre de places et mise en conformité',
  metaTitle: "Normes PMR parking : obligations, places et sanctions",
  metaDescription: "Combien de places PMR prévoir ? 2 % du total, arrondi à l’entier supérieur. Dimensions, marquage, signalisation et étapes de mise en conformité.",
  publishDate: '2026-03-04',
  updatedDate: '2026-08-06',
  category: 'normes-pmr',
  readingTime: 12,
  excerpt: 'Guide complet des normes PMR parking en 2026 : nombre de places obligatoires, dimensions réglementaires, marquage au sol et signalisation. Étapes de mise en conformité.',
}

export default function Content() {
  return (
    <>
      <KeyAnswer question="Combien de places PMR sont obligatoires dans un parking ?">
        <p>
        Les <strong>normes PMR parking</strong> imposent <strong>2 % du nombre total de places</strong>, arrondi à l’entier supérieur, avec un minimum d’une place. Chaque place adaptée mesure au moins 3,30 m de large. Au-delà de 500 places, le nombre est fixé par arrêté
        municipal et ne peut être inférieur à 10.
        </p>
      </KeyAnswer>

      <p>
        Un défaut d&apos;accessibilité dans votre parking peut vous exposer à une amende allant jusqu&apos;à 45 000 €. Le Code de la construction et de l&apos;habitation prévoit cette sanction pour un ERP (Établissement Recevant du Public) dont le parking ne respecte pas les <strong>normes PMR</strong> (Personne à Mobilité Réduite).
      </p>
      <p>
        Pourtant, la réglementation est moins compliquée qu&apos;elle n&apos;en a l&apos;air.
        Le problème, c&apos;est qu&apos;elle est dispersée entre plusieurs textes (arrêtés,
        décrets, circulaires) et que les prestataires de marquage ne prennent pas toujours le
        temps de l&apos;expliquer.
      </p>
      <p>
        Ce guide rassemble tout ce qu&apos;il faut savoir sur les <strong>normes PMR parking</strong> en
        2026 : combien de places prévoir, quelles dimensions respecter, quel marquage appliquer,
        et comment mettre votre parking en conformité sans mauvaise surprise.
      </p>

      <h2>Combien de places PMR sont obligatoires dans un parking ?</h2>
      <p>
        La règle de base est simple : <strong>2% du nombre total de places</strong>, avec un
        minimum d&apos;une place PMR. Ce ratio s&apos;applique à tous les parkings liés à un
        ERP ou à un bâtiment d&apos;habitation collectif.
      </p>

      <table>
        <thead>
          <tr>
            <th>Nombre total de places</th>
            <th>Places PMR obligatoires</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1 à 50</td><td>1</td></tr>
          <tr><td>51 à 100</td><td>2</td></tr>
          <tr><td>101 à 150</td><td>3</td></tr>
          <tr><td>151 à 200</td><td>4</td></tr>
          <tr><td>201 à 500</td><td>2% du total (arrondi au supérieur)</td></tr>
          <tr><td>Plus de 500</td><td>10 places + 1 par tranche de 50 au-delà de 500</td></tr>
        </tbody>
      </table>

      <p>
        <strong>Attention :</strong> pour les parkings de plus de 500 places, le calcul change.
        L&apos;<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034485459/" target="_blank" rel="noopener noreferrer">arrêté du 20 avril 2017</a> renvoie alors à un arrêté municipal, qui fixe le nombre de
        places adaptées sans pouvoir descendre en dessous de 10.
      </p>

      <h3>Cas particuliers</h3>
      <p>
        <strong>Parkings de copropriété :</strong> les règles s&apos;appliquent aux parties
        communes accessibles au public. Un parking fermé réservé aux seuls copropriétaires
        n&apos;est pas soumis aux mêmes obligations qu&apos;un ERP, mais les immeubles
        neufs (permis de construire après le 1er janvier 2007) doivent prévoir des places adaptées.
      </p>
      <p>
        <strong>Parkings d&apos;entreprise :</strong> si le parking est ouvert à la clientèle,
        les règles ERP s&apos;appliquent intégralement. S&apos;il est réservé aux salariés,
        le Code du travail impose des places adaptées pour les travailleurs handicapés.
      </p>
      <p>
        Prenons l&apos;exemple d&apos;un centre commercial de 350 places qui ne compte que 5 places PMR. La règle des 2 % en impose 7 : il doit donc en créer 2 de plus, un coût limité au regard de l&apos;amende encourue.
      </p>
      <p>
        Vous n&apos;êtes pas certain du nombre de places PMR nécessaires dans votre parking ?
        Notre équipe réalise un{' '}
        <Link href="/competences/conseil-expertise">diagnostic complet d&apos;accessibilité</Link>{' '}
        avec un plan de mise en conformité chiffré.
      </p>

      <h2>Dimensions d&apos;une place PMR : les mesures à respecter</h2>
      <p>
        Les dimensions d&apos;une place PMR sont définies par l&apos;<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034485459/" target="_blank" rel="noopener noreferrer">arrêté du 20 avril 2017</a> relatif à l&apos;accessibilité des ERP. Elles sont nettement plus grandes qu&apos;une
        place standard pour permettre le transfert depuis un fauteuil roulant.
      </p>

      <h3>Place PMR en créneau (perpendiculaire ou en épi)</h3>
      <table>
        <thead>
          <tr>
            <th>Élément</th>
            <th>Dimension minimale</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Largeur de la place</td><td>3,30 m</td></tr>
          <tr><td>Dont bande de transfert latérale</td><td>0,80 m</td></tr>
          <tr><td>Longueur</td><td>5,00 m</td></tr>
          <tr><td>Hauteur libre (parking couvert)</td><td>2,15 m minimum</td></tr>
        </tbody>
      </table>

      <p>
        Le détail complet par configuration (épi, bataille, longitudinale) et le nombre exact de places selon la capacité sont dans notre guide dédié aux <Link href="/guides/dimensions-nombre-places-pmr-parking/">dimensions des places PMR</Link>. Estimez en un clic le nombre requis pour votre parking avec notre <Link href="/calculateur-places-pmr/">calculateur de places PMR</Link>.
      </p>

      <p>
        La bande de transfert latérale de 0,80 m peut être partagée entre deux places PMR
        adjacentes. Concrètement, deux places PMR côte à côte occupent 3,30 m + 2,50 m = 5,80 m
        au lieu de 6,60 m. C&apos;est une astuce que beaucoup de gestionnaires ignorent, et
        qui permet d&apos;optimiser l&apos;espace.
      </p>

      <h3>Place PMR en bataille (longitudinale)</h3>
      <p>Pour les places en bataille le long d&apos;une voie de circulation, la réglementation impose :</p>
      <ul>
        <li><strong>Largeur :</strong> 3,30 m (dont 0,80 m de bande de transfert)</li>
        <li><strong>Longueur :</strong> identique aux places standards du parking</li>
      </ul>

      <h3>Pente et dévers</h3>
      <p>Le sol de la place PMR et de son cheminement vers l&apos;entrée du bâtiment doit respecter :</p>
      <ul>
        <li><strong>Pente longitudinale :</strong> 2% maximum</li>
        <li><strong>Dévers :</strong> 2% maximum</li>
        <li><strong>Ressaut :</strong> 2 cm maximum (4 cm avec bord arrondi ou chanfreiné)</li>
      </ul>

      <p>
        Prenons l&apos;exemple d&apos;un hôtel-restaurant qui fait tracer 3 places PMR de 2,50 m de large, soit la largeur d&apos;une place standard. Ces places ne sont pas conformes : il faut reprendre le marquage pour les repositionner à 3,30 m, ce qui coûte bien plus qu&apos;un tracé correct dès le départ.
      </p>

      <h2>Marquage au sol PMR : les règles à respecter</h2>
      <p>
        Le marquage d&apos;une place PMR ne se limite pas à peindre un pictogramme. Plusieurs
        éléments sont réglementaires.
      </p>

      <h3>Le pictogramme au sol</h3>
      <p>Le symbole international d&apos;accessibilité (personne en fauteuil roulant) doit être peint :</p>
      <ul>
        <li><strong>Au sol</strong>, au centre de la place ou à l&apos;entrée de celle-ci</li>
        <li><strong>En blanc</strong> sur fond bleu, ou en bleu sur le revêtement</li>
        <li><strong>Dimensions recommandées :</strong> 0,50 m x 0,60 m minimum (pour une bonne lisibilité, nous recommandons 1,00 m x 1,20 m)</li>
      </ul>

      <h3>La bande de transfert</h3>
      <p>La bande latérale de 0,80 m doit être visuellement identifiable :</p>
      <ul>
        <li><strong>Hachures</strong> en peinture blanche ou bleue</li>
        <li><strong>Contraste</strong> suffisant avec le revêtement du sol</li>
        <li><strong>Interdiction de stationnement</strong> clairement signalée sur cette bande</li>
      </ul>

      <h3>La couleur du marquage</h3>
      <p>
        La réglementation ne fixe pas une couleur obligatoire pour la place elle-même. En
        pratique, deux approches coexistent :
      </p>
      <ul>
        <li><strong>Place entièrement bleue</strong> avec pictogramme blanc : la plus visible, la plus fréquente dans les grandes surfaces</li>
        <li><strong>Lignes blanches</strong> avec pictogramme blanc : moins coûteux, suffisant réglementairement</li>
      </ul>
      <p>
        Pour un{' '}
        <Link href="/competences/tracage-retracage-parking">traçage de parking</Link>{' '}
        conforme aux normes PMR, nous utilisons des peintures certifiées NF EN 1436 qui
        garantissent la durabilité et la visibilité du marquage.
      </p>

      <h3>Le raccordement au cheminement accessible</h3>
      <p>La place PMR doit être reliée à l&apos;entrée du bâtiment par un cheminement accessible :</p>
      <ul>
        <li>Largeur minimale : 1,40 m (1,20 m en cas de rétrécissement ponctuel)</li>
        <li>Sans marche ni obstacle</li>
        <li>Guidage podotactile si nécessaire</li>
        <li>Abaissement de trottoir (bateau) si bordure de trottoir</li>
      </ul>

      <h2>Signalisation verticale PMR obligatoire</h2>
      <p>
        Le marquage au sol seul ne suffit pas. La{' '}
        <Link href="/competences/signalisation-verticale">signalisation verticale</Link>{' '}
        est aussi réglementaire.
      </p>

      <h3>Panneaux obligatoires</h3>
      <p>Chaque place PMR doit être identifiée par :</p>
      <ul>
        <li><strong>Un panneau B6d</strong> (interdiction de stationner sauf PMR) ou un panneau de signalisation spécifique PMR</li>
        <li><strong>Placé en hauteur</strong>, visible depuis la voie de circulation du parking</li>
        <li><strong>Un panneau directionnel</strong> à l&apos;entrée du parking indiquant l&apos;emplacement des places PMR</li>
      </ul>

      <h3>Panneau complémentaire</h3>
      <p>
        Un panonceau &laquo; Sauf GIG-GIC &raquo; (Grand Invalide de Guerre / Grand Invalide
        Civil) ou le pictogramme PMR sur fond bleu doit accompagner le panneau principal.
        La mention &laquo; Place réservée &raquo; est recommandée mais pas obligatoire.
      </p>

      <h3>Faut-il des bornes ou potelets ?</h3>
      <p>
        Aucune obligation réglementaire d&apos;installer des{' '}
        <Link href="/competences/accessoires-parking">bornes ou potelets</Link> autour des
        places PMR. Cependant, beaucoup de gestionnaires en installent pour protéger les
        places contre le stationnement abusif. Les potelets ne doivent pas gêner le transfert
        du fauteuil.
      </p>

      <h2>Mise en conformité : les 5 étapes</h2>
      <p>
        Vous savez maintenant ce que la réglementation exige. Voici comment passer de la
        théorie à la pratique.
      </p>

      <h3>Étape 1 : L&apos;audit d&apos;accessibilité</h3>
      <p>Un diagnostic de votre parking permet d&apos;identifier :</p>
      <ul>
        <li>Le nombre de places PMR actuelles vs. le nombre requis</li>
        <li>La conformité des dimensions (largeur, longueur, bande de transfert)</li>
        <li>L&apos;état du marquage et de la signalisation</li>
        <li>La qualité du cheminement accessible (pente, obstacles, guidage)</li>
      </ul>
      <p>Notre équipe réalise ce diagnostic gratuitement dans le cadre d&apos;un devis.</p>

      <h3>Étape 2 : Le plan de marquage</h3>
      <p>Sur la base de l&apos;audit, nous proposons un plan de marquage qui optimise le placement des places PMR :</p>
      <ul>
        <li><strong>Proximité de l&apos;entrée :</strong> les places PMR doivent être les plus proches de l&apos;accès au bâtiment</li>
        <li><strong>Terrain plat :</strong> on choisit les emplacements les moins pentus</li>
        <li><strong>Regroupement :</strong> quand c&apos;est possible, regrouper les places PMR permet de partager les bandes de transfert</li>
      </ul>

      <h3>Étape 3 : Les travaux de marquage</h3>
      <p>
        Le marquage d&apos;une place PMR complète (lignes, bande de transfert, pictogramme)
        prend 1 à 2 heures par place. Pour un parking en activité, nous organisons le chantier
        par zones pour minimiser la gêne.
      </p>
      <p>
        Le coût moyen d&apos;une place PMR complète se situe entre 80 € et 180 € HT,
        signalisation verticale non comprise. Pour un chiffrage détaillé, consultez notre
        guide des{' '}
        <Link href="/guides/prix-marquage-sol-parking">prix du marquage au sol de parking</Link>.
      </p>

      <h3>Étape 4 : La signalisation verticale</h3>
      <p>
        La pose des panneaux B6d et des panneaux directionnels intervient après le marquage
        au sol. Comptez 150 € à 350 € par panneau posé (fourniture + pose + scellement).
      </p>

      <h3>Étape 5 : La vérification</h3>
      <p>Une fois les travaux terminés, nous vérifions :</p>
      <ul>
        <li>Les dimensions de chaque place (mesure au sol)</li>
        <li>La conformité des pictogrammes et du marquage</li>
        <li>Le bon positionnement des panneaux</li>
        <li>La continuité du cheminement accessible</li>
      </ul>

      <p>
        Prenons l&apos;exemple d&apos;une chaîne de restauration rapide qui doit mettre en conformité plusieurs parkings, avec quelques places PMR à créer ou corriger sur chaque site. Regrouper les interventions réduit les déplacements et le coût par site.
      </p>

      <h2>Combien coûte une mise en conformité PMR ?</h2>
      <p>
        Le coût dépend du nombre de places à créer ou à modifier et de l&apos;état actuel de votre parking. Voici un budget détaillé par poste.
      </p>

      <h3>Budget par poste de travaux</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Prix unitaire</th>
              <th>Détail</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Diagnostic d&apos;accessibilité</td><td>à partir de 0 euro</td><td>Gratuit si suivi de travaux</td></tr>
            <tr><td>Marquage place PMR (traçage + pictogramme)</td><td>à partir de 250 euros / place</td><td>Peinture certifiée NF EN 1436</td></tr>
            <tr><td>Panneau B6d + pose</td><td>à partir de 180 euros / panneau</td><td>Fixation au sol ou sur mât</td></tr>
            <tr><td>Bande podotactile</td><td>à partir de 55 euros / ml</td><td>Inox, résine ou caoutchouc</td></tr>
            <tr><td>Abaissement de trottoir</td><td>à partir de 1 400 euros / unité</td><td>Génie civil selon configuration</td></tr>
            <tr><td>Reprise de chaussée (dévers, pente)</td><td>à partir de 3 500 euros</td><td>Selon surface et travaux nécessaires</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Exemples de budgets réels</h3>
      <p><strong>Parking de 30 places, commerce de proximité :</strong></p>
      <ul>
        <li>1 place PMR à créer (marquage + panneau) : quelques centaines d&apos;euros</li>
        <li>1 abaissement de trottoir : plus d&apos;un millier d&apos;euros</li>
        <li><strong>Total : à partir de 2 000 euros</strong></li>
      </ul>

      <p><strong>Parking de 80 places, centre commercial :</strong></p>
      <ul>
        <li>3 places PMR à mettre aux normes (retraçage + pictogrammes + bande latérale)</li>
        <li>3 panneaux B6d</li>
        <li>2 bandes podotactiles (8 ml)</li>
        <li>1 reprise de cheminement</li>
        <li><strong>Total : à partir de 5 000 euros</strong></li>
      </ul>

      <blockquote>
        <p>
          Prenons l&apos;exemple d&apos;un supermarché de 120 places avec seulement 2 places PMR, alors que la règle des 2 % en impose 3. Si les pictogrammes sont à peine visibles et qu&apos;un poteau gêne le cheminement vers l&apos;entrée, la mise en conformité porte à la fois sur le nombre de places, le marquage, les panneaux et le cheminement.
        </p>
      </blockquote>

      <p>
        <strong>Votre parking a besoin d&apos;une mise en conformité PMR ?</strong> <Link href="/devis">Obtenez un devis gratuit et détaillé en 48h</Link>. Notre expert technique se déplace pour un diagnostic sur site.
      </p>

      <h2>Ad&apos;AP : le dispositif pour les ERP en retard</h2>

      <h3>Qu&apos;est-ce qu&apos;un Ad&apos;AP ?</h3>
      <p>
        L&apos;Agenda d&apos;Accessibilité Programmée (Ad&apos;AP) est un dispositif qui permettait aux ERP de s&apos;engager sur un calendrier de mise en conformité. Les dépôts d&apos;Ad&apos;AP sont clos depuis 2019, mais les engagements pris restent valables.
      </p>

      <h3>Si vous n&apos;avez pas déposé d&apos;Ad&apos;AP</h3>
      <p>
        Si votre établissement n&apos;a pas déposé d&apos;Ad&apos;AP et n&apos;est pas conforme, vous êtes en infraction. La mise en conformité doit être réalisée immédiatement. En pratique, les commissions d&apos;accessibilité sont compréhensives lorsque le gestionnaire engage volontairement les travaux.
      </p>

      <h3>Les sanctions encourues</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Infraction</th>
              <th>Sanction</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Non-conformité d&apos;un ERP</td><td>Amende jusqu&apos;à 45 000 euros (personne physique)</td></tr>
            
            <tr><td>Personne morale</td><td>Amende jusqu&apos;à 225 000 euros</td></tr>
            <tr><td>Non-dépôt d&apos;Ad&apos;AP (quand c&apos;était obligatoire)</td><td>1 500 à 5 000 euros</td></tr>
          </tbody>
        </table>
      </div>

      <blockquote>
        <p>
          Prenons l&apos;exemple d&apos;un exploitant de plusieurs restaurants dont aucun parking n&apos;a de place PMR conforme. Attendre un contrôle ajoute le risque de sanction au coût des travaux, qui restent à financer de toute façon.
        </p>
      </blockquote>

      <h2>Cas particulier : la copropriété</h2>
      <p>
        En copropriété, la mise en conformité PMR suit un processus spécifique.
      </p>

      <h3>Le vote en AG</h3>
      <p>
        Les travaux de mise en conformité PMR sont votés en assemblée générale à la majorité simple (<a href="https://www.legifrance.gouv.fr/search/all?query=loi%20n%C2%B065-557%20du%2010%20juillet%201965%20copropri%C3%A9t%C3%A9" target="_blank" rel="noopener noreferrer">article 24 de la loi du 10 juillet 1965</a>). Cette majorité facilitée s&apos;applique car il s&apos;agit de travaux d&apos;accessibilité imposés par la loi.
      </p>

      <h3>Le financement</h3>
      <p>
        Le coût est réparti entre les copropriétaires selon les tantièmes. Des aides publiques peuvent contribuer au financement :
      </p>
      <ul>
        <li>Subventions de l&apos;ANAH (Agence Nationale de l&apos;Habitat) pour les copropriétés fragiles</li>
        <li>Aides départementales ou régionales selon les collectivités</li>
        <li>Déduction fiscale pour les travaux d&apos;accessibilité dans les locaux professionnels</li>
      </ul>
      <p>
        Pour le détail du processus en copropriété, consultez notre guide complet sur la <Link href="/guides/renovation-parking-copropriete">rénovation de parking en copropriété</Link>.
      </p>

      <h2>Conformité accessibilité parking en 2026 : où en est-on ?</h2>
      <p>
        Voici les points à garder en tête pour les gestionnaires de parkings existants.
      </p>

      <h3>Les contrôles</h3>
      <p>
        Un ERP peut voir son accessibilité examinée, notamment lors de travaux ou d&apos;une visite de commission. Mieux vaut donc disposer d&apos;un parking conforme et d&apos;un registre d&apos;accessibilité à jour.
      </p>

      <h3>Les sanctions en pratique</h3>
      <p>
        Les amendes peuvent atteindre 45 000 euros pour une personne physique et 225 000 euros pour une personne morale. Engager la mise en conformité avant un contrôle reste la meilleure protection.
      </p>

      <h3>Aménagement PMR de parking existant : les spécificités</h3>
      <p>
        Pour un parking existant, la mise aux normes PMR doit tenir compte des contraintes du site : configuration des places, pente du terrain, accès existants. Les solutions ne sont pas les mêmes que pour un parking neuf. Notre équipe adapte chaque aménagement PMR à la configuration réelle de votre parking, en privilégiant les solutions les moins intrusives et les plus économiques.
      </p>
      <p>
        Les points clés pour un aménagement PMR de parking existant :
      </p>
      <ul>
        <li>Repérage des places les plus proches de l&apos;entrée et les mieux adaptées (sol plan, espace disponible)</li>
        <li>Adaptation du marquage aux dimensions réelles (certains parkings anciens ont des places plus étroites)</li>
        <li>Création d&apos;un cheminement accessible sans nécessairement refaire tout le revêtement</li>
        <li>Pose de <Link href="/competences/signalisation-verticale">signalisation verticale</Link> adaptée aux supports existants</li>
      </ul>

      <h2>Sanctions en cas de non-conformité</h2>
      <p>
        Les risques ne sont pas théoriques. Les commissions de sécurité et d&apos;accessibilité
        contrôlent régulièrement les ERP, et les sanctions sont conséquentes.
      </p>

      <h3>Amendes</h3>
      <ul>
        <li><strong>Personne morale :</strong> jusqu&apos;à 225 000 € d&apos;amende</li>
        <li><strong>Personne physique :</strong> jusqu&apos;à 45 000 € d&apos;amende</li>
        <li><strong>Récidive :</strong> les peines peuvent être doublées, avec une peine d&apos;emprisonnement de 6 mois</li>
      </ul>

      <h3>Fermeture administrative</h3>
      <p>
        En cas de mise en demeure non suivie d&apos;effet, le préfet peut ordonner la
        fermeture de l&apos;établissement jusqu&apos;à mise en conformité.
      </p>

      <h3>Responsabilité civile</h3>
      <p>
        En cas d&apos;accident impliquant un usager PMR sur un parking non conforme (chute,
        impossibilité d&apos;accès), la responsabilité du gestionnaire peut être engagée.
        L&apos;absence de marquage PMR conforme est un élément à charge.
      </p>

      <h3>Le registre d&apos;accessibilité</h3>
      <p>
        Depuis le 30 septembre 2017, tous les ERP doivent tenir un registre d&apos;accessibilité
        consultable par le public. Ce registre doit mentionner les places PMR du parking.
      </p>

      <h2>Questions fréquentes sur les normes PMR parking</h2>

      <h3>Une copropriété doit-elle avoir des places PMR ?</h3>
      <p>
        Si le parking est lié à un ERP (commerce en pied d&apos;immeuble, par exemple), oui.
        Pour un parking strictement résidentiel, les règles dépendent de la date de
        construction : les immeubles neufs (après 2007) doivent prévoir des places adaptables.
        Pour les immeubles anciens, aucune obligation rétroactive sauf en cas de travaux importants.
      </p>

      <h3>Peut-on verbaliser sur une place PMR dans un parking privé ?</h3>
      <p>
        Oui. Le stationnement abusif sur une place PMR est passible d&apos;une amende de 135 € (4e classe), y compris dans les parkings privés
        ouverts à la circulation publique (centres commerciaux, supermarchés, hôpitaux).
      </p>

      <h3>Quelle est la différence entre une place PMR et une place &laquo; adaptée &raquo; ?</h3>
      <p>
        Une place PMR respecte toutes les normes de dimensions, de marquage et de signalisation
        décrites dans cet article. Une place &laquo; adaptée &raquo; peut avoir des dimensions
        correctes mais manquer de signalisation ou de cheminement accessible. Seule la place
        PMR complète est conforme.
      </p>

      <h3>Faut-il refaire les places PMR lors d&apos;un retraçage de parking ?</h3>
      <p>
        Oui, c&apos;est l&apos;occasion idéale. Lors d&apos;un{' '}
        <Link href="/competences/tracage-retracage-parking">retraçage complet de parking</Link>,
        nous vérifions systématiquement la conformité PMR et corrigeons les anomalies.
        C&apos;est le moment le plus économique pour mettre à jour vos places PMR.
      </p>

      <h3>Les dimensions PMR changent-elles en 2026 ?</h3>
      <p>
        Les dimensions de référence (3,30 m x 5,00 m) sont celles de
        l&apos;<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034485459/" target="_blank" rel="noopener noreferrer">arrêté du 20 avril 2017</a>, qui reste la référence pour les ERP neufs.
      </p>

      <h2>Faites vérifier votre parking</h2>
      <p>
        La mise en conformité PMR d&apos;un parking est rarement un chantier lourd. Dans la
        plupart des cas, il s&apos;agit de corriger les dimensions de quelques places,
        d&apos;ajouter des pictogrammes et de poser la signalisation verticale. Le coût est
        souvent inférieur à 2 000 € pour un parking de taille moyenne.
      </p>
      <p>
        En revanche, ne pas le faire expose à des amendes pouvant atteindre 225 000 €,
        sans compter le risque de fermeture administrative et de mise en cause en cas
        d&apos;accident.
      </p>
      <p>
        Rénov&apos;Route réalise un diagnostic d&apos;accessibilité gratuit de votre parking.
        Nous identifions les non-conformités, proposons un plan de mise aux normes et chiffrons
        chaque poste de manière transparente.
      </p>
      <p><strong>Ce que nous prenons en charge :</strong></p>
      <ul>
        <li>Audit d&apos;accessibilité et comptage des places PMR requises</li>
        <li>Plan de marquage conforme (dimensions, pictogrammes, bandes de transfert)</li>
        <li>Pose de la signalisation verticale (panneaux B6d, directionnels)</li>
        <li>Vérification de conformité après travaux</li>
      </ul>
      <p>
        Depuis 2016, nous avons mis en conformité plus de 200 parkings pour des enseignes
        comme Carrefour, Lidl, McDonald&apos;s et des collectivités locales. Nous connaissons
        les exigences des commissions d&apos;accessibilité et nous vous garantissons un
        parking conforme.
      </p>
      <p>
        <Link href="/devis">Demandez votre diagnostic gratuit</Link>. Nous intervenons à Lyon,
        en Rhône-Alpes et partout en France.
      </p>
    </>
  )
}
