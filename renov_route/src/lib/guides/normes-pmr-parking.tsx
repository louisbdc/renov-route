import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'normes-pmr-parking',
  title: 'Normes PMR parking 2026 : dimensions, nombre de places et mise en conformité',
  metaTitle: 'Normes PMR parking 2026 : guide complet | Rénov\'Route',
  metaDescription: 'Normes PMR parking 2026 : dimensions des places, nombre obligatoire, marquage et signalisation. Guide complet pour la mise en conformité.',
  publishDate: '2026-03-04',
  category: 'normes-pmr',
  readingTime: 12,
  excerpt: 'Guide complet des normes PMR parking en 2026 : nombre de places obligatoires, dimensions réglementaires, marquage au sol et signalisation. Étapes de mise en conformité.',
}

export default function Content() {
  return (
    <>
      <p>
        Un contrôle d&apos;accessibilité dans votre parking pourrait vous coûter 45 000 €
        d&apos;amende. Ce n&apos;est pas une hypothèse : <a href="https://www.legifrance.gouv.fr/search/code?query=L.%20152-4%20CCH" target="_blank" rel="noopener noreferrer">l&apos;article L. 152-4 du Code de la construction</a> prévoit cette sanction pour tout ERP (Établissement Recevant du Public)
        dont le parking ne respecte pas les <strong>normes PMR</strong> (Personne à Mobilité Réduite).
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
        Au-delà de 500, on ne compte plus 2% mais une place supplémentaire par tranche de 50.
        Un parking de 800 places devra donc proposer 10 + 6 = 16 places PMR.
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
        Élise, directrice d&apos;un centre commercial de 350 places à Vienne (38), pensait
        être en règle avec ses 5 places PMR. Lors d&apos;un contrôle de la commission de
        sécurité, on lui a signalé qu&apos;elle devait en avoir 7. Le coût de mise en
        conformité : 1 400 € pour le marquage et la signalisation de 2 places
        supplémentaires. Un investissement dérisoire comparé à l&apos;amende qu&apos;elle risquait.
      </p>
      <p>
        Vous n&apos;êtes pas certain du nombre de places PMR nécessaires dans votre parking ?
        Notre équipe réalise un{' '}
        <Link href="/competences/conseil-expertise">diagnostic complet d&apos;accessibilité</Link>{' '}
        avec un plan de mise en conformité chiffré.
      </p>

      <h2>Dimensions d&apos;une place PMR : les mesures à respecter</h2>
      <p>
        Les dimensions d&apos;une place PMR sont définies par <a href="https://www.legifrance.gouv.fr/search/all?query=arr%C3%AAt%C3%A9%20du%2020%20avril%202017%20accessibilit%C3%A9%20ERP" target="_blank" rel="noopener noreferrer">l&apos;arrêté du 20 avril 2017</a> relatif à l&apos;accessibilité des ERP. Elles sont nettement plus grandes qu&apos;une
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
        Thomas, gérant d&apos;un hôtel-restaurant près de Lyon, avait fait tracer 3 places
        PMR de 2,50 m de large, soit la largeur d&apos;une place standard. Lors de la visite
        de la commission d&apos;accessibilité, les places ont été jugées non conformes. Il a
        dû faire refaire le marquage complet du parking pour repositionner les places à
        3,30 m. Total : 4 200 € au lieu des 800 € qu&apos;aurait coûté un marquage correct
        dès le départ.
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
        <li><strong>Lignes blanches</strong> avec pictogramme bleu : moins coûteux, suffisant réglementairement</li>
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
        Laurent, responsable technique d&apos;une chaîne de restauration rapide, devait
        mettre en conformité 12 parkings répartis sur toute la région Rhône-Alpes. Chaque
        site avait entre 2 et 4 places PMR à créer ou corriger. En regroupant les
        interventions, nous avons réalisé l&apos;ensemble des travaux en trois semaines.
        Coût moyen par site : 1 200 €, soit moins qu&apos;une seule journée d&apos;amende
        administrative.
      </p>

      <h2>Sanctions en cas de non-conformité</h2>
      <p>
        Les risques ne sont pas théoriques. Les commissions de sécurité et d&apos;accessibilité
        contrôlent régulièrement les ERP, et les sanctions sont conséquentes.
      </p>

      <h3>Amendes</h3>
      <ul>
        <li><strong>Personne morale :</strong> jusqu&apos;à 225 000 € d&apos;amende (<a href="https://www.legifrance.gouv.fr/search/code?query=L.%20152-4%20CCH" target="_blank" rel="noopener noreferrer">article L. 152-4 du CCH</a>)</li>
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
        Oui. Depuis la loi du 18 mars 2015, le stationnement abusif sur une place PMR est
        passible d&apos;une amende de 135 € (4e classe), y compris dans les parkings privés
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
        Les dimensions réglementaires (3,30 m x 5,00 m) n&apos;ont pas changé depuis
        <a href="https://www.legifrance.gouv.fr/search/all?query=arr%C3%AAt%C3%A9%20du%2020%20avril%202017%20accessibilit%C3%A9%20ERP" target="_blank" rel="noopener noreferrer"> l&apos;arrêté du 20 avril 2017</a>. Aucune modification n&apos;est prévue en 2026.
        Ce qui évolue, c&apos;est le niveau d&apos;exigence des contrôles : les commissions
        d&apos;accessibilité sont de plus en plus rigoureuses.
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
        Depuis 2014, nous avons mis en conformité plus de 200 parkings pour des enseignes
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
