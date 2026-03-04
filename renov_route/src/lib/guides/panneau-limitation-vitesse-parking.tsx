import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'panneau-limitation-vitesse-parking',
  title:
    'Panneau limitation de vitesse en parking : r\u00e9glementation, choix et pose',
  metaTitle: 'Panneau limitation vitesse parking : r\u00e8gles et pose',
  metaDescription:
    'Panneau limitation de vitesse en parking priv\u00e9 : 10, 20 ou 30 km/h ? R\u00e9glementation, types de panneaux, prix et pose. Guide complet pour s\u00e9curiser votre parking.',
  publishDate: '2026-03-04',
  category: 'securite-parking',
  readingTime: 10,
  excerpt:
    'Vitesse r\u00e9glementaire en parking, types de panneaux B14/B30, r\u00e8gles de pose et prix : tout savoir pour s\u00e9curiser votre parking.',
}

export default function Content() {
  return (
    <>
      <p>
        Un parking sans limitation de vitesse affich&eacute;e, c&apos;est un
        parking o&ugrave; chacun roule &agrave; sa propre
        appr&eacute;ciation. 30 km/h pour l&apos;un, 50 km/h pour
        l&apos;autre. Il suffit d&apos;un pi&eacute;ton qui sort de
        derri&egrave;re un v&eacute;hicule gar&eacute; pour qu&apos;un
        accident se produise. Et sans panneau de limitation en place, la
        responsabilit&eacute; du gestionnaire est directement engag&eacute;e.
      </p>

      <p>
        Laurent, syndic d&apos;une copropri&eacute;t&eacute; de 120 lots
        &agrave; Caluire-et-Cuire (69), a fait installer des panneaux de
        limitation &agrave; 10 km/h dans le parking souterrain apr&egrave;s
        qu&apos;un r&eacute;sident a renvers&eacute; un enfant de 8 ans qui
        traversait &agrave; pied entre deux rang&eacute;es de voitures.
        L&apos;enfant n&apos;a eu que des contusions, mais l&apos;absence de
        signalisation a &eacute;t&eacute; point&eacute;e dans le rapport
        d&apos;expert. Co&ucirc;t de la mise en conformit&eacute; : 1 400 euros
        (6 panneaux + 2 ralentisseurs). Co&ucirc;t du litige
        &eacute;vit&eacute; : inestimable.
      </p>

      <p>
        Ce guide pr&eacute;cise les vitesses r&eacute;glementaires en parking,
        les types de panneaux disponibles, les r&egrave;gles de pose et les prix
        pour s&eacute;curiser votre parking priv&eacute; ou commercial.
      </p>

      <h2>Quelle vitesse en parking priv&eacute; ?</h2>

      <h3>Ce que dit la r&eacute;glementation</h3>

      <p>
        La r&eacute;glementation fran&ccedil;aise ne fixe pas de vitesse
        maximale sp&eacute;cifique pour les parkings priv&eacute;s. Le Code de
        la route s&apos;applique sur les voies ouvertes &agrave; la circulation
        publique, mais les parkings priv&eacute;s ouverts au public (centres
        commerciaux, h&ocirc;pitaux, entreprises) y sont assimil&eacute;s par la
        jurisprudence.
      </p>

      <p>
        En l&apos;absence de signalisation sp&eacute;cifique, c&apos;est la
        r&egrave;gle g&eacute;n&eacute;rale qui s&apos;applique : 50 km/h en
        agglom&eacute;ration. Cette vitesse est &eacute;videmment
        inadapt&eacute;e &agrave; un parking o&ugrave; les distances de
        visibilit&eacute; sont courtes, les pi&eacute;tons nombreux et les
        manoeuvres fr&eacute;quentes.
      </p>

      <h3>Vitesses recommand&eacute;es selon le contexte</h3>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type de parking</th>
              <th>Vitesse recommand&eacute;e</th>
              <th>Raison</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parking souterrain / couvert</td>
              <td>10 km/h</td>
              <td>
                Visibilit&eacute; r&eacute;duite, pi&eacute;tons, virages
                serr&eacute;s
              </td>
            </tr>
            <tr>
              <td>Parking commercial ext&eacute;rieur</td>
              <td>20 km/h</td>
              <td>Flux pi&eacute;tons &eacute;lev&eacute;, chariots, enfants</td>
            </tr>
            <tr>
              <td>Parking d&apos;entreprise</td>
              <td>20 km/h</td>
              <td>
                Passage pi&eacute;tons, v&eacute;hicules de livraison
              </td>
            </tr>
            <tr>
              <td>Parking copropri&eacute;t&eacute;</td>
              <td>10 km/h</td>
              <td>
                Enfants, personnes &acirc;g&eacute;es, espaces restreints
              </td>
            </tr>
            <tr>
              <td>Parking h&ocirc;pital / clinique</td>
              <td>10-15 km/h</td>
              <td>PMR, brancards, ambulances</td>
            </tr>
            <tr>
              <td>Voie d&apos;acc&egrave;s / all&eacute;e principale</td>
              <td>30 km/h</td>
              <td>Distance plus longue, pas de stationnement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        La vitesse de 10 km/h est le standard en parking couvert. En
        ext&eacute;rieur, 20 km/h est la norme la plus courante. La limitation
        &agrave; 30 km/h ne s&apos;applique qu&apos;aux voies d&apos;acc&egrave;s
        longues (rampes, all&eacute;es de desserte).
      </p>

      <h3>Valeur juridique de la signalisation priv&eacute;e</h3>

      <p>
        Un panneau de limitation de vitesse pos&eacute; sur un parking
        priv&eacute; n&apos;a pas la m&ecirc;me force juridique qu&apos;un
        panneau pos&eacute; par l&apos;autorit&eacute; municipale sur voie
        publique. En revanche, il constitue un &eacute;l&eacute;ment
        d&eacute;terminant en cas de litige :
      </p>

      <ul>
        <li>
          Il prouve que le gestionnaire a pris des mesures de
          s&eacute;curit&eacute;
        </li>
        <li>
          Il informe clairement les usagers de la vitesse autoris&eacute;e
        </li>
        <li>
          Il engage la responsabilit&eacute; de l&apos;usager qui ne le
          respecte pas
        </li>
      </ul>

      <p>
        Sans panneau, le gestionnaire ne peut pas prouver qu&apos;il a
        inform&eacute; les usagers de la vitesse adapt&eacute;e. En cas
        d&apos;accident, cette absence joue contre lui.
      </p>

      <p>
        Pour un accompagnement sur la{' '}
        <Link href="/guides/signalisation-parking-reglementation">
          r&eacute;glementation de la signalisation en parking
        </Link>
        , consultez notre guide d&eacute;di&eacute;.
      </p>

      <h2>Types de panneaux de limitation de vitesse pour parking</h2>

      <h3>Panneau B14 (limitation de vitesse)</h3>

      <p>
        Le panneau r&eacute;glementaire classique : fond blanc, cercle rouge,
        chiffre noir au centre (10, 20 ou 30). Identique au panneau routier,
        adapt&eacute; au format parking.
      </p>

      <p><strong>Caract&eacute;ristiques :</strong></p>
      <ul>
        <li>Forme ronde, fond blanc, bordure rouge</li>
        <li>Chiffre noir central (10, 15, 20 ou 30)</li>
        <li>
          Diam&egrave;tre : 400, 600 ou 800 mm selon le contexte
        </li>
        <li>
          Aluminium avec film r&eacute;tror&eacute;fl&eacute;chissant classe 1
        </li>
        <li>Norme NF conforme &agrave; l&apos;IISR</li>
      </ul>

      <p>
        <strong>Prix :</strong> 40-120 euros selon le diam&egrave;tre.
      </p>

      <h3>Panneau B33 (fin de limitation)</h3>

      <p>
        Le panneau de fin de zone. Fond blanc, chiffre gris barr&eacute;
        diagonalement. Il indique la fin de la limitation et le retour &agrave;
        la vitesse normale.
      </p>

      <p><strong>Caract&eacute;ristiques :</strong></p>
      <ul>
        <li>Forme ronde, fond blanc, barres grises obliques</li>
        <li>Chiffre gris central</li>
        <li>
          Diam&egrave;tre identique au B14 associ&eacute;
        </li>
        <li>Souvent plac&eacute; en sortie de parking</li>
      </ul>

      <p>
        <strong>Prix :</strong> 40-100 euros selon le diam&egrave;tre.
      </p>

      <h3>Panneau de zone (B30)</h3>

      <p>
        Le panneau de zone limite la vitesse sur l&apos;ensemble d&apos;un
        secteur. Il &eacute;vite de poser un panneau B14 &agrave; chaque
        intersection int&eacute;rieure du parking.
      </p>

      <p><strong>Caract&eacute;ristiques :</strong></p>
      <ul>
        <li>Forme rectangulaire, fond blanc</li>
        <li>
          Contient le panneau B14 en miniature + le mot &quot;ZONE&quot;
        </li>
        <li>Dimensions : 600 x 800 mm ou 700 x 1 000 mm</li>
        <li>&Agrave; poser &agrave; chaque entr&eacute;e du parking</li>
      </ul>

      <p>
        <strong>Prix :</strong> 80-180 euros.
      </p>

      <p>
        <strong>Usage recommand&eacute; :</strong> Parkings de grande surface
        avec plusieurs entr&eacute;es. Un seul panneau de zone par
        entr&eacute;e, valable pour tout le parking.
      </p>

      <h3>
        Panneaux personnalis&eacute;s (propri&eacute;taire priv&eacute;)
      </h3>

      <p>
        Panneaux rectangulaires avec le logo de l&apos;entreprise, la vitesse
        autoris&eacute;e et un rappel du r&egrave;glement int&eacute;rieur. Ces
        panneaux ne remplacent pas le B14 r&eacute;glementaire mais le
        compl&egrave;tent.
      </p>

      <p><strong>Caract&eacute;ristiques :</strong></p>
      <ul>
        <li>
          Forme rectangulaire, fond variable (blanc, jaune, bleu)
        </li>
        <li>
          Texte : &quot;Propri&eacute;t&eacute; priv&eacute;e - Vitesse
          limit&eacute;e &agrave; 10 km/h&quot;
        </li>
        <li>
          Mat&eacute;riau : aluminium ou PVC (PVC moins durable)
        </li>
        <li>Dimensions variables</li>
      </ul>

      <p>
        <strong>Prix :</strong> 50-200 euros selon la personnalisation.
      </p>

      <p>
        Pour la{' '}
        <Link href="/competences/signalisation-verticale">
          pose de panneaux de signalisation
        </Link>
        , faites appel &agrave; un installateur professionnel.
      </p>

      <h2>O&ugrave; et comment poser les panneaux</h2>

      <h3>Emplacements obligatoires</h3>

      <ul>
        <li>
          <strong>Chaque entr&eacute;e du parking</strong> : un panneau B14 ou
          B30 visible par les v&eacute;hicules qui entrent
        </li>
        <li>
          <strong>En sortie</strong> (optionnel) : panneau B33 de fin de
          limitation
        </li>
        <li>
          <strong>Aux intersections int&eacute;rieures</strong> : rappel si le
          parking est vaste (plus de 100 places)
        </li>
        <li>
          <strong>En haut et en bas des rampes</strong> : rappel de la
          limitation dans les parkings &agrave; niveaux
        </li>
      </ul>

      <p>
        Sandrine, responsable d&apos;un parking de clinique &agrave;
        Tassin-la-Demi-Lune (69), avait plac&eacute; un seul panneau 10 km/h
        &agrave; l&apos;entr&eacute;e principale. Le parking avait 3
        acc&egrave;s : l&apos;entr&eacute;e principale, une entr&eacute;e de
        service et une rampe vers le niveau -1. Les v&eacute;hicules entrant par
        les acc&egrave;s secondaires ne voyaient aucune limitation.
        Apr&egrave;s un audit de s&eacute;curit&eacute;, elle a fait poser 5
        panneaux (3 entr&eacute;es + 2 rappels en rampe) pour un budget de
        1 100 euros pose comprise.
      </p>

      <h3>Hauteur et position de pose</h3>

      <ul>
        <li>
          <strong>Hauteur standard</strong> : bord inf&eacute;rieur du panneau
          &agrave; 2,20 m du sol (passage libre pi&eacute;tons)
        </li>
        <li>
          <strong>En parking souterrain</strong> : adapter &agrave; la hauteur
          sous plafond (minimum 1,00 m du sol, ne pas obstruer le gabarit de
          passage)
        </li>
        <li>
          <strong>Position lat&eacute;rale</strong> : &agrave; droite de la
          chauss&eacute;e dans le sens de circulation
        </li>
        <li>
          <strong>Visibilit&eacute;</strong> : le panneau doit &ecirc;tre
          visible &agrave; 25 m minimum pour un v&eacute;hicule roulant &agrave;
          20 km/h
        </li>
      </ul>

      <h3>Fixation</h3>

      <ul>
        <li>
          <strong>Poteau scell&eacute;</strong> : forage + scellement chimique
          dans le b&eacute;ton ou l&apos;enrob&eacute;. Solution permanente.
          Co&ucirc;t : 80-150 euros par poteau
        </li>
        <li>
          <strong>Fixation murale</strong> : &eacute;querre de fixation sur mur
          ou poteau de structure (parking couvert). Co&ucirc;t : 40-80 euros par
          fixation
        </li>
        <li>
          <strong>Poteau sur platine boulonn&eacute;e</strong> : fixation
          d&eacute;montable, adapt&eacute;e aux dalles de parking. Co&ucirc;t :
          60-120 euros par poteau
        </li>
      </ul>

      <h2>
        Compl&eacute;ter la signalisation par des dispositifs physiques
      </h2>

      <p>
        Un panneau seul ne suffit pas toujours. Les usagers qui ne respectent
        pas la limitation doivent &ecirc;tre physiquement ralentis.
      </p>

      <h3>Ralentisseurs</h3>

      <p>
        Les ralentisseurs de type dos d&apos;&acirc;ne ou coussins berlinois
        forcent les v&eacute;hicules &agrave; r&eacute;duire leur vitesse. Ils
        sont plac&eacute;s aux endroits critiques : passages pi&eacute;tons,
        sorties d&apos;ascenseurs, virages.
      </p>

      <p>
        Pour le choix et la pose de ralentisseurs, consultez nos guides sur les{' '}
        <Link href="/guides/ralentisseur-parking-norme">
          ralentisseurs de parking
        </Link>{' '}
        et les{' '}
        <Link href="/guides/dos-dane-parking-reglementation-pose">
          dos d&apos;&acirc;ne en parking
        </Link>
        .
      </p>

      <h3>Marquage au sol</h3>

      <p>
        Le rappel de la limitation de vitesse au sol (chiffre peint sur la
        chauss&eacute;e) compl&egrave;te le panneau vertical. Il est visible
        m&ecirc;me si le conducteur ne l&egrave;ve pas les yeux vers les
        panneaux.
      </p>

      <p>
        Le{' '}
        <Link href="/competences/tracage-retracage-parking">
          marquage au sol de parking
        </Link>{' '}
        inclut le tra&ccedil;age des limitations de vitesse, des
        fl&egrave;ches directionnelles et des passages pi&eacute;tons.
      </p>

      <h3>&Eacute;quipements compl&eacute;mentaires</h3>

      <p>
        Les{' '}
        <Link href="/competences/accessoires-parking">
          accessoires de parking
        </Link>{' '}
        (bornes, potelets, miroirs de s&eacute;curit&eacute;)
        compl&egrave;tent le dispositif de s&eacute;curisation.
      </p>

      <h2>Prix de la signalisation de limitation de vitesse</h2>

      <h3>Co&ucirc;t par &eacute;l&eacute;ment</h3>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>&Eacute;l&eacute;ment</th>
              <th>Prix unitaire</th>
              <th>Remarques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Panneau B14 (400 mm)</td>
              <td>40-70 euros</td>
              <td>Aluminium, classe 1</td>
            </tr>
            <tr>
              <td>Panneau B14 (600 mm)</td>
              <td>60-120 euros</td>
              <td>Aluminium, classe 1 ou 2</td>
            </tr>
            <tr>
              <td>Panneau B30 zone (600x800 mm)</td>
              <td>80-180 euros</td>
              <td>Panneau de zone</td>
            </tr>
            <tr>
              <td>Panneau B33 fin de limitation</td>
              <td>40-100 euros</td>
              <td>Diam&egrave;tre variable</td>
            </tr>
            <tr>
              <td>Panneau personnalis&eacute;</td>
              <td>50-200 euros</td>
              <td>Avec logo, r&egrave;glement</td>
            </tr>
            <tr>
              <td>Poteau acier galvanis&eacute; (3 m)</td>
              <td>25-50 euros</td>
              <td>Diam&egrave;tre 60 mm</td>
            </tr>
            <tr>
              <td>Scellement au sol</td>
              <td>80-150 euros</td>
              <td>Par poteau</td>
            </tr>
            <tr>
              <td>Fixation murale</td>
              <td>40-80 euros</td>
              <td>Par panneau</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Budget type par site</h3>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type de parking</th>
              <th>Panneaux n&eacute;cessaires</th>
              <th>Budget total (fourniture + pose)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Copropri&eacute;t&eacute; (1 entr&eacute;e, 30 places)</td>
              <td>2 panneaux</td>
              <td>250-500 euros</td>
            </tr>
            <tr>
              <td>Commerce (2 entr&eacute;es, 80 places)</td>
              <td>4 panneaux</td>
              <td>500-1 000 euros</td>
            </tr>
            <tr>
              <td>Supermarch&eacute; (3 entr&eacute;es, 200 places)</td>
              <td>6-8 panneaux</td>
              <td>1 000-2 000 euros</td>
            </tr>
            <tr>
              <td>Clinique / h&ocirc;pital</td>
              <td>5-10 panneaux</td>
              <td>800-2 500 euros</td>
            </tr>
            <tr>
              <td>Parking souterrain &agrave; niveaux</td>
              <td>8-15 panneaux</td>
              <td>1 200-3 500 euros</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Rapport co&ucirc;t / risque</h3>

      <p>
        Le co&ucirc;t d&apos;une signalisation compl&egrave;te de limitation de
        vitesse (500-2 000 euros pour un parking moyen) est d&eacute;risoire
        compar&eacute; aux cons&eacute;quences d&apos;un accident :
      </p>

      <ul>
        <li>
          <strong>Pr&eacute;judice corporel</strong> : 50 000 &agrave; 500 000+
          euros selon la gravit&eacute;
        </li>
        <li>
          <strong>Responsabilit&eacute; civile du gestionnaire</strong> :
          engagement direct si absence de signalisation
        </li>
        <li>
          <strong>Augmentation de la prime d&apos;assurance</strong> : 10
          &agrave; 30% apr&egrave;s un sinistre corporel
        </li>
      </ul>

      <h2>FAQ : limitation de vitesse en parking</h2>

      <h3>
        La limitation de vitesse est-elle obligatoire dans un parking
        priv&eacute; ?
      </h3>

      <p>
        La loi n&apos;impose pas de vitesse sp&eacute;cifique en parking
        priv&eacute;. Mais le gestionnaire a une obligation
        g&eacute;n&eacute;rale de s&eacute;curit&eacute; envers les usagers
        (article 1242 du Code civil). L&apos;absence de signalisation de
        vitesse peut &ecirc;tre retenue comme un manquement &agrave; cette
        obligation en cas d&apos;accident.
      </p>

      <h3>
        Qui peut verbaliser un exc&egrave;s de vitesse dans un parking
        priv&eacute; ?
      </h3>

      <p>
        Sur un parking priv&eacute; non ouvert &agrave; la circulation publique,
        les forces de l&apos;ordre ne peuvent pas dresser de contravention pour
        exc&egrave;s de vitesse. En revanche, sur un parking priv&eacute;
        ouvert au public (centre commercial, h&ocirc;pital), le Code de la
        route s&apos;applique et les infractions sont verbalisables. Le
        gestionnaire peut &eacute;galement faire appliquer son r&egrave;glement
        int&eacute;rieur.
      </p>

      <h3>Quelle vitesse choisir : 10, 20 ou 30 km/h ?</h3>

      <p>
        10 km/h pour les parkings couverts et souterrains (visibilit&eacute;
        r&eacute;duite, virages serr&eacute;s). 20 km/h pour les parkings
        ext&eacute;rieurs avec flux pi&eacute;tons importants. 30 km/h
        uniquement pour les voies d&apos;acc&egrave;s longues sans
        stationnement lat&eacute;ral. En cas de doute, choisir la vitesse la
        plus basse.
      </p>

      <h3>
        Faut-il un arr&ecirc;t&eacute; municipal pour poser un panneau de
        limitation en parking priv&eacute; ?
      </h3>

      <p>
        Non. Le propri&eacute;taire ou gestionnaire du parking peut poser des
        panneaux de limitation de vitesse sans autorisation administrative. Il
        est toutefois recommand&eacute; d&apos;utiliser des panneaux conformes
        aux normes NF pour leur donner une cr&eacute;dibilit&eacute; juridique
        maximale.
      </p>

      <h3>
        Un panneau de vitesse suffit-il &agrave; d&eacute;gager la
        responsabilit&eacute; du gestionnaire ?
      </h3>

      <p>
        Le panneau est n&eacute;cessaire mais pas suffisant. Le juge
        v&eacute;rifie que le gestionnaire a pris des mesures
        proportionn&eacute;es au risque : panneau + ralentisseur + marquage au
        sol + &eacute;clairage. Un panneau seul sans dispositif physique de
        ralentissement peut &ecirc;tre jug&eacute; insuffisant. Pour un{' '}
        <Link href="/competences/conseil-expertise">
          audit de s&eacute;curit&eacute; complet
        </Link>
        , faites appel &agrave; un expert.
      </p>

      <h2>S&eacute;curiser votre parking commence par un panneau</h2>

      <p>
        La limitation de vitesse en parking n&apos;est pas un d&eacute;tail
        r&eacute;glementaire. C&apos;est la premi&egrave;re mesure de
        s&eacute;curit&eacute;, celle qui informe, responsabilise et
        prot&egrave;ge. Le co&ucirc;t est modeste (quelques centaines
        d&apos;euros), la mise en oeuvre rapide (une demi-journ&eacute;e de
        pose) et l&apos;impact juridique consid&eacute;rable en cas de
        sinistre.
      </p>

      <p>
        <strong>
          Vous souhaitez installer des panneaux de limitation de vitesse dans
          votre parking ?
        </strong>{' '}
        <Link href="/devis">Demandez un devis gratuit</Link> sous 24h. Notre
        &eacute;quipe r&eacute;alise le diagnostic, la fourniture de panneaux
        conformes NF et la pose compl&egrave;te,{' '}
        <Link href="/guides/ralentisseur-parking-norme">ralentisseurs</Link> et{' '}
        <Link href="/competences/tracage-retracage-parking">
          marquage au sol
        </Link>{' '}
        inclus.
      </p>
    </>
  )
}
