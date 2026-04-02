import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'dimension-place-de-parking-normes',
  title: 'Dimension place de parking : normes, tailles et guide complet',
  metaTitle: 'Dimension place de parking : normes et tailles 2026',
  metaDescription: 'Dimensions place de parking selon la norme NF P 91-100 : 2,50x5m standard, PMR, epi, longitudinale. Tableaux, erreurs a eviter et optimisation. Devis gratuit.',
  publishDate: '2026-03-31',
  category: 'marquage-parking',
  readingTime: 12,
  excerpt: 'Toutes les dimensions de places de parking selon la norme NF P 91-100 : perpendiculaire, epi, longitudinale, PMR. Tableaux pratiques, erreurs courantes et conseils d&apos;optimisation.',
}

export default function Content() {
  return (
    <>
      <p>
        Votre parking de 40 places n&apos;en contient que 32 apres tracage ? Vos clients se
        plaignent de portiques rayes et de retroviseurs arraches ? Vos places PMR ne passent
        pas le controle de la commission d&apos;accessibilite ? <strong>Dans 80 % des cas, le
        probleme vient d&apos;une seule chose : des dimensions de places de parking mal
        calculees.</strong>
      </p>
      <p>
        Un ecart de 20 centimetres sur la largeur d&apos;une place suffit a transformer un
        parking fonctionnel en source de conflits quotidiens. A l&apos;inverse, des places trop
        larges gaspillent de l&apos;espace et reduisent votre capacite d&apos;accueil.
      </p>
      <p>
        Ce guide vous donne toutes les <strong>dimensions place de parking</strong> a connaitre
        selon la norme NF P 91-100, avec des tableaux pratiques, les erreurs a eviter et des
        solutions concretes pour optimiser chaque metre carre.
      </p>

      <h2>La norme NF P 91-100 : le cadre reglementaire des dimensions de parking</h2>

      <h3>Ce que dit la norme</h3>
      <p>
        La norme NF P 91-100 est la reference en France pour les <strong>dimensions place de
        parking</strong>. Elle definit les dimensions minimales selon le type de stationnement,
        la largeur des voies de circulation et les rayons de braquage necessaires.
      </p>
      <p>
        Cette norme s&apos;applique aux parkings neufs et aux renovations majeures. Elle
        concerne les parkings publics, les ERP (etablissements recevant du public) et les
        parkings prives a usage collectif.
      </p>

      <h3>Pourquoi respecter ces dimensions</h3>
      <p>
        Au-dela de l&apos;obligation reglementaire, respecter la <strong>norme dimension
        parking</strong> repond a trois enjeux concrets :
      </p>
      <ul>
        <li>
          <strong>Securite</strong> : des places trop etroites provoquent des accrochages. Des
          voies de circulation sous-dimensionnees empechent les manoeuvres en securite.
        </li>
        <li>
          <strong>Accessibilite</strong> : les places PMR doivent respecter des dimensions
          strictes pour permettre le transfert en fauteuil roulant.
        </li>
        <li>
          <strong>Rentabilite</strong> : un dimensionnement optimal maximise le nombre de places
          sans compromettre le confort d&apos;utilisation.
        </li>
      </ul>

      <blockquote>
        <p>
          <strong>Vous concevez ou renovez un parking ?</strong> Renov&apos;Route realise
          votre <Link href="/competences/conseil-expertise">etude de faisabilite</Link> et
          optimise votre plan de stationnement. Plus de 1 000 projets realises depuis 2014.
          Appelez le 07 86 81 96 92 ou{' '}
          <Link href="/devis">demandez un devis gratuit</Link>.
        </p>
      </blockquote>

      <h2>Dimensions standards par type de stationnement</h2>
      <p>
        La <strong>taille place de parking</strong> varie selon l&apos;angle de stationnement.
        Voici les dimensions minimales prevues par la norme NF P 91-100.
      </p>

      <h3>Place perpendiculaire (90 degres)</h3>
      <p>
        C&apos;est la configuration la plus courante dans les parkings. Le vehicule se gare a
        angle droit par rapport a la voie de circulation.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Dimension minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Largeur place de parking</strong></td>
              <td>2,50 m</td>
            </tr>
            <tr>
              <td><strong>Longueur place de parking</strong></td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Voie de circulation</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Emprise totale (place + demi-voie)</td>
              <td>7,50 m</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        La <strong>largeur place de parking</strong> de 2,50 m est un minimum strict. En
        pratique, 2,60 m offrent un meilleur confort, surtout dans les parkings de centre
        commercial ou le taux de rotation est eleve.
      </p>

      <h3>Place en epi a 45 degres</h3>
      <p>
        Le stationnement en epi a 45 degres facilite les manoeuvres d&apos;entree. Il convient
        aux parkings ou le flux est unidirectionnel.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Dimension minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largeur de place</td>
              <td>2,20 m</td>
            </tr>
            <tr>
              <td>Longueur de place</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Voie de circulation</td>
              <td>3,50 m</td>
            </tr>
            <tr>
              <td>Emprise totale</td>
              <td>4,85 m</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        L&apos;avantage de l&apos;epi a 45 degres : une voie de circulation plus etroite
        suffit. L&apos;inconvenient : chaque place consomme plus de lineaire en facade.
      </p>

      <h3>Place en epi a 60 degres</h3>
      <p>
        Compromis entre le stationnement perpendiculaire et l&apos;epi a 45 degres,
        l&apos;epi a 60 degres combine maniabilite et densite raisonnable.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Dimension minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largeur de place</td>
              <td>2,40 m</td>
            </tr>
            <tr>
              <td>Longueur de place</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Voie de circulation</td>
              <td>4,00 m</td>
            </tr>
            <tr>
              <td>Emprise totale</td>
              <td>5,80 m</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Place longitudinale (en creneau)</h3>
      <p>
        Le stationnement longitudinal longe la voie de circulation. Utilise en voirie et dans
        les parkings lineaires.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Dimension minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largeur de place</td>
              <td>2,00 m</td>
            </tr>
            <tr>
              <td><strong>Longueur place de parking</strong></td>
              <td>6,00 m</td>
            </tr>
            <tr>
              <td>Voie de circulation</td>
              <td>3,50 m</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        La <strong>longueur place de parking</strong> de 6 metres en longitudinal
        s&apos;explique par la necessite de manoeuvrer en creneau. C&apos;est la configuration
        qui consomme le plus de lineaire par place.
      </p>

      <h3>Tableau recapitulatif des dimensions place de parking</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Largeur</th>
              <th>Longueur</th>
              <th>Voie circulation</th>
              <th>Emprise totale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Perpendiculaire (90 degres)</strong></td>
              <td>2,50 m</td>
              <td>5,00 m</td>
              <td>5,00 m</td>
              <td>7,50 m</td>
            </tr>
            <tr>
              <td><strong>Epi 45 degres</strong></td>
              <td>2,20 m</td>
              <td>5,00 m</td>
              <td>3,50 m</td>
              <td>4,85 m</td>
            </tr>
            <tr>
              <td><strong>Epi 60 degres</strong></td>
              <td>2,40 m</td>
              <td>5,00 m</td>
              <td>4,00 m</td>
              <td>5,80 m</td>
            </tr>
            <tr>
              <td><strong>Longitudinale</strong></td>
              <td>2,00 m</td>
              <td>6,00 m</td>
              <td>3,50 m</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Places PMR : des dimensions specifiques et obligatoires</h2>

      <h3>Dimensions reglementaires</h3>
      <p>
        Les places reservees aux personnes a mobilite reduite repondent a des exigences
        renforcees. La <strong>dimension place de parking</strong> PMR doit permettre
        l&apos;ouverture complete des portieres et le deploiement d&apos;un fauteuil roulant.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Parametre</th>
              <th>Dimension minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largeur totale (place + bande laterale)</td>
              <td>3,30 m</td>
            </tr>
            <tr>
              <td>Dont bande de circulation laterale</td>
              <td>0,80 m</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Pente maximale</td>
              <td>2 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        La bande de circulation laterale de 0,80 m est indispensable pour le transfert du
        fauteuil. Elle peut etre partagee entre deux places PMR adjacentes.
      </p>

      <h3>L&apos;experience de Marc, gerant d&apos;un centre commercial a Villefranche-sur-Saone</h3>
      <p>
        Marc gerait un parking de 200 places pour un centre commercial de 3 000 m2. Lors du
        controle d&apos;accessibilite de 2025, les quatre places PMR ont ete jugees non
        conformes. Le probleme : une <strong>largeur place de parking</strong> PMR de 3,00 m
        au lieu des 3,30 m reglementaires. La bande de circulation mesurait 50 cm au lieu de
        80 cm.
      </p>
      <p>
        Resultat : une mise en demeure avec un delai de trois mois pour corriger. Marc a fait
        appel a Renov&apos;Route pour le{' '}
        <Link href="/competences/tracage-retracage-parking">tracage de parking</Link> et la
        remise en conformite. L&apos;equipe a retrace les six places PMR (le nombre avait aussi
        ete recalcule selon la capacite totale), installe la{' '}
        <Link href="/competences/signalisation-verticale">signalisation verticale</Link>{' '}
        reglementaire et repris le marquage au sol en cinq jours. Cout : 3 200 EUR. Amende
        evitee : 45 000 EUR.
      </p>

      <h3>Places famille et places elargies</h3>
      <p>
        De plus en plus de parkings proposent des places elargies pour les familles avec
        poussettes ou les vehicules de grande taille (SUV, utilitaires).
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Largeur recommandee</th>
              <th>Longueur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Place famille</td>
              <td>2,80 a 3,00 m</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Place vehicule electrique</td>
              <td>2,50 m</td>
              <td>5,50 m (borne)</td>
            </tr>
            <tr>
              <td>Place utilitaire</td>
              <td>2,80 m</td>
              <td>6,00 m</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ces places elargies ne sont pas imposees par la norme, mais elles ameliorent
        considerablement l&apos;experience utilisateur et reduisent les sinistres.
      </p>

      <h2>Voies de circulation : l&apos;element souvent sous-estime</h2>

      <h3>Largeurs minimales selon le sens de circulation</h3>
      <p>
        La voie de circulation est aussi importante que la <strong>taille place de
        parking</strong> elle-meme. Une voie trop etroite rend les manoeuvres impossibles et
        genere des embouteillages internes.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Configuration</th>
              <th>Largeur minimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sens unique, stationnement perpendiculaire</td>
              <td>5,00 m</td>
            </tr>
            <tr>
              <td>Sens unique, stationnement en epi</td>
              <td>3,50 a 4,00 m</td>
            </tr>
            <tr>
              <td>Double sens</td>
              <td>5,50 a 6,00 m</td>
            </tr>
            <tr>
              <td>Voie de desserte sans stationnement</td>
              <td>3,00 m</td>
            </tr>
            <tr>
              <td>Rampe d&apos;acces entre niveaux</td>
              <td>3,00 m (sens unique) / 6,00 m (double sens)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Rayons de braquage</h3>
      <p>
        Les angles et intersections du parking doivent respecter des rayons de braquage
        minimaux. Pour un vehicule de tourisme standard, le rayon interieur minimal est de
        5,00 m. Pour les vehicules utilitaires, comptez 6,50 m minimum.
      </p>
      <p>
        Un rayon de braquage insuffisant oblige les conducteurs a effectuer des manoeuvres
        multiples, ce qui ralentit le flux et augmente le risque d&apos;accrochage.
      </p>

      <h2>Impact du dimensionnement sur la capacite totale</h2>

      <h3>Le cas concret de Karim, directeur technique d&apos;une chaine de restauration rapide</h3>
      <p>
        Karim supervisait la renovation de 12 parkings pour une chaine de restauration rapide
        dans la region lyonnaise. L&apos;objectif : gagner des places sans agrandir les
        surfaces.
      </p>
      <p>
        L&apos;audit initial a revele que 8 parkings sur 12 utilisaient un stationnement
        perpendiculaire avec des voies de 6,00 m de large, soit 1 metre de plus que le minimum
        requis. En optimisant les voies a 5,20 m (au-dessus du minimum pour garder du confort)
        et en passant certaines zones en epi 60 degres, Renov&apos;Route a degage en moyenne
        4 places supplementaires par parking. Sur 12 sites, cela represente 48 places gagnees
        sans un seul metre carre de foncier supplementaire.
      </p>
      <p>
        Le{' '}
        <Link href="/competences/tracage-retracage-parking">marquage de places</Link> a ete
        realise en une nuit par site pour ne pas perturber l&apos;activite commerciale.
      </p>

      <h3>Comment optimiser le nombre de places</h3>
      <p>
        Voici les leviers pour maximiser la capacite sans reduire les <strong>dimensions place
        de parking</strong> en dessous des normes :
      </p>
      <ol>
        <li>
          <strong>Adapter l&apos;angle de stationnement a la geometrie du terrain.</strong> Un
          parking tout en longueur sera plus efficace en epi qu&apos;en perpendiculaire.
        </li>
        <li>
          <strong>Optimiser les voies de circulation.</strong> Chaque centimetre au-dessus du
          strict minimum est un centimetre perdu si vous manquez de places.
        </li>
        <li>
          <strong>Mixer les configurations.</strong> Rien n&apos;interdit de combiner
          perpendiculaire et epi dans un meme parking, selon les zones.
        </li>
        <li>
          <strong>Reduire les zones mortes.</strong> Les angles, ilots et zones tampon meritent
          une etude specifique pour etre valorises.
        </li>
        <li>
          <strong>Penser au sens de circulation.</strong> Un flux unidirectionnel permet des
          voies plus etroites et donc plus de places.
        </li>
      </ol>

      <blockquote>
        <p>
          <strong>Vous voulez gagner des places ?</strong> Nos equipes analysent votre parking
          existant et proposent un plan optimise. Consultez{' '}
          <Link href="/realisations">nos realisations</Link> ou appelez le 07 86 81 96 92.
        </p>
      </blockquote>

      <h2>Les 5 erreurs de dimensionnement les plus courantes</h2>

      <h3>1. Appliquer 2,50 m de large partout</h3>
      <p>
        La largeur minimale de 2,50 m convient aux parkings standards. Mais dans un parking de
        supermarche ou les clients chargent des caddies, 2,60 m est un minimum pratique.
        Resultat de places trop etroites : portiques endommages, portieres cognees, plaintes
        des clients.
      </p>

      <h3>2. Oublier les surlargeurs en bout de rangee</h3>
      <p>
        Les places situees contre un mur ou un pilier necessitent une surlargeur de 20 a 30 cm.
        Sans cette marge, la derniere place de chaque rangee est inutilisable dans les faits.
      </p>

      <h3>3. Sous-dimensionner les voies de circulation</h3>
      <p>
        Reduire la voie de 50 cm semble anodin sur le plan. Sur le terrain, cela se traduit par
        des manoeuvres en trois temps au lieu d&apos;une, des embouteillages aux heures de
        pointe et des accrochages reguliers.
      </p>

      <h3>4. Ne pas anticiper les places PMR</h3>
      <p>
        Les places PMR ne sont pas un ajout de derniere minute. Elles doivent etre positionnees
        au plus pres des acces et dimensionnees des la phase de conception. Les integrer apres
        coup oblige souvent a supprimer des places standards.
      </p>

      <h3>5. Ignorer l&apos;evolution du parc automobile</h3>
      <p>
        Les vehicules d&apos;aujourd&apos;hui sont plus larges qu&apos;il y a 20 ans. Un SUV
        standard mesure 1,90 m de large avec les retroviseurs. Avec deux SUV cote a cote dans
        des places de 2,50 m, il reste 60 cm pour ouvrir quatre portieres. C&apos;est
        insuffisant.
      </p>

      <h2>FAQ : vos questions sur les dimensions place de parking</h2>

      <h3>Quelle est la dimension standard d&apos;une place de parking ?</h3>
      <p>
        La <strong>dimension place de parking</strong> standard en France est de{' '}
        <strong>2,50 m de large sur 5,00 m de long</strong> pour un stationnement
        perpendiculaire, selon la norme NF P 91-100. C&apos;est le minimum reglementaire pour
        les parkings neufs.
      </p>

      <h3>Quelle est la largeur minimale d&apos;une place de parking ?</h3>
      <p>
        La <strong>largeur place de parking</strong> minimale depend de la configuration :
        2,50 m en perpendiculaire, 2,40 m en epi 60 degres, 2,20 m en epi 45 degres et 2,00 m
        en longitudinal.
      </p>

      <h3>Quelle est la dimension d&apos;une place de parking PMR ?</h3>
      <p>
        Une place PMR doit mesurer au minimum <strong>3,30 m de large</strong> (dont 0,80 m de
        bande de circulation laterale) sur <strong>5,00 m de long</strong>. La pente ne doit
        pas exceder 2 %.
      </p>

      <h3>Combien de places PMR sont obligatoires ?</h3>
      <p>
        Le nombre de places PMR obligatoires represente 2 % du nombre total de places, avec un
        minimum d&apos;une place. Pour un parking de 100 places, il faut au moins 2 places PMR.
      </p>

      <h3>Quelle est la largeur minimale d&apos;une voie de circulation de parking ?</h3>
      <p>
        La voie de circulation doit mesurer au minimum 5,00 m pour un stationnement
        perpendiculaire en sens unique, 3,50 m pour un epi 45 degres et 5,50 a 6,00 m en
        double sens.
      </p>

      <h3>Peut-on reduire les dimensions des places de parking ?</h3>
      <p>
        Il est deconseille de descendre en dessous des minimums de la norme NF P 91-100. Pour
        les parkings d&apos;ERP et les constructions neuves, ces dimensions sont obligatoires.
        Les parkings prives existants beneficient d&apos;une certaine tolerance, mais des
        places trop etroites generent des problemes concrets (accrochages, plaintes,
        sous-utilisation).
      </p>

      <h2>Un parking bien dimensionne se joue au centimetre pres</h2>
      <p>
        La <strong>dimension place de parking</strong> n&apos;est pas un detail technique
        reserve aux bureaux d&apos;etudes. C&apos;est ce qui determine si votre parking
        fonctionne ou dysfonctionne au quotidien. Chaque centimetre compte : trop etroit, vos
        usagers subissent des accrochages. Trop large, vous perdez des places et du chiffre
        d&apos;affaires.
      </p>
      <p>
        La norme NF P 91-100 pose un cadre clair, mais chaque parking est unique. La geometrie
        du terrain, le type de clientele, les flux de circulation et les obligations PMR
        imposent une approche sur mesure.
      </p>
      <p>
        <strong>Renov&apos;Route accompagne les gestionnaires de parkings depuis
        2014.</strong> De l&apos;
        <Link href="/competences/conseil-expertise">etude de faisabilite</Link> au{' '}
        <Link href="/competences/tracage-retracage-parking">tracage de parking</Link>, nos
        equipes concoivent et realisent des plans de stationnement conformes, optimises et
        durables. Carrefour, Lidl, McDonald&apos;s, l&apos;Armee de Terre et EM Lyon nous font
        confiance.
      </p>
      <p>
        <strong>
          <Link href="/devis">Demandez votre devis gratuit</Link> sous 24h
        </strong>{' '}
        ou appelez le 07 86 81 96 92 pour discuter de votre projet.
      </p>
    </>
  )
}
