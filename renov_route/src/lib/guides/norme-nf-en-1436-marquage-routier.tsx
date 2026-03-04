import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'norme-nf-en-1436-marquage-routier',
  title: 'Norme NF EN 1436 : ce qu\u2019elle impose pour le marquage au sol de parking',
  metaTitle: 'Norme NF EN 1436 : marquage routier et parking priv\u00e9',
  metaDescription:
    'Norme NF EN 1436 expliqu\u00e9e : r\u00e9tror\u00e9flexion, luminance, adh\u00e9rence du marquage au sol. Application en parking priv\u00e9, crit\u00e8res de qualit\u00e9 et dur\u00e9e de vie.',
  publishDate: '2026-03-04',
  category: 'normes-pmr',
  readingTime: 10,
  excerpt:
    'R\u00e9tror\u00e9flexion, luminance, adh\u00e9rence, dur\u00e9e de vie : les 4 crit\u00e8res de la norme NF EN 1436 expliqu\u00e9s pour le marquage au sol de parking.',
}

export default function Content() {
  return (
    <>
      <p>
        Quand un gestionnaire de parking demande un devis de marquage au sol, la
        question revient souvent : &laquo; La peinture est-elle aux
        normes ? &raquo; La r&eacute;ponse tient en 5 lettres et 4 chiffres :
        NF EN 1436. C&apos;est la norme europ&eacute;enne qui d&eacute;finit
        les performances minimales des produits de marquage routier. Et elle
        s&apos;applique aussi aux parkings priv&eacute;s.
      </p>

      <p>
        Julien, responsable technique d&apos;une cha&icirc;ne de
        supermarch&eacute;s dans le Rh&ocirc;ne, a fait retracer 3 parkings en
        2023 avec un prestataire qui utilisait une peinture non
        certifi&eacute;e NF EN 1436. Prix attractif : 6 euros/m&sup2; au lieu
        de 9 euros/m&sup2;. R&eacute;sultat : au bout de 8 mois, le marquage
        &eacute;tait effac&eacute; sur les zones de manoeuvre. Le
        retra&ccedil;age a d&ucirc; &ecirc;tre refait enti&egrave;rement.
        Co&ucirc;t total sur 2 ans : 14 euros/m&sup2; (2 passages) au lieu de
        9 euros/m&sup2; (1 passage avec peinture certifi&eacute;e,
        dur&eacute;e de vie 4-5 ans).
      </p>

      <p>
        Ce guide explique ce que la norme NF EN 1436 impose, comment elle se
        traduit en pratique pour le marquage de parking et pourquoi elle
        garantit la durabilit&eacute; de vos travaux.
      </p>

      <h2>Qu&apos;est-ce que la norme NF EN 1436 ?</h2>

      <p>
        La norme NF EN 1436 est la norme europ&eacute;enne de
        r&eacute;f&eacute;rence pour les produits de marquage routier.
        Publi&eacute;e par le CEN (Comit&eacute; Europ&eacute;en de
        Normalisation), elle d&eacute;finit les performances minimales que
        doivent atteindre les produits de marquage au sol en termes de
        visibilit&eacute;, adh&eacute;rence et durabilit&eacute;.
      </p>

      <h3>Champ d&apos;application</h3>

      <p>
        La norme couvre tous les produits de marquage routier appliqu&eacute;s
        sur chauss&eacute;e :
      </p>

      <ul>
        <li>Peintures routi&egrave;res (acryliques, alkyde)</li>
        <li>Enduits &agrave; chaud (thermoplastiques)</li>
        <li>Bandes pr&eacute;form&eacute;es</li>
        <li>Enduits &agrave; froid (r&eacute;sines)</li>
        <li>Produits de saupoudrage (microbilles de verre)</li>
      </ul>

      <p>
        Elle ne couvre pas les panneaux de signalisation (norme NF EN 12899) ni
        les &eacute;quipements de balisage.
      </p>

      <h3>Pourquoi elle concerne les parkings priv&eacute;s</h3>

      <p>
        L&eacute;galement, la norme NF EN 1436 s&apos;applique aux marquages
        routiers sur voie publique. Pour les parkings priv&eacute;s, elle
        n&apos;est pas obligatoire au sens strict. En pratique, elle est devenue
        le standard de qualit&eacute; de r&eacute;f&eacute;rence pour
        3 raisons :
      </p>

      <ol>
        <li>
          <strong>Responsabilit&eacute; civile</strong> : en cas
          d&apos;accident, un marquage conforme NF EN 1436 prouve que le
          gestionnaire a utilis&eacute; des produits de qualit&eacute;
          professionnelle
        </li>
        <li>
          <strong>Durabilit&eacute;</strong> : les produits certifi&eacute;s
          durent 2 &agrave; 3 fois plus longtemps que les produits non
          certifi&eacute;s
        </li>
        <li>
          <strong>Cahiers des charges</strong> : les syndics, les bailleurs et
          les enseignes nationales exigent des produits certifi&eacute;s dans
          leurs appels d&apos;offres
        </li>
      </ol>

      <h2>
        Les 4 crit&egrave;res de performance de la norme NF EN 1436
      </h2>

      <h3>1. Luminance (visibilit&eacute; de jour)</h3>

      <p>
        La luminance mesure la quantit&eacute; de lumi&egrave;re
        r&eacute;fl&eacute;chie par le marquage en conditions de jour. Elle
        s&apos;exprime en mcd/m&sup2;/lux et d&eacute;termine la
        visibilit&eacute; du marquage sous &eacute;clairage naturel.
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Classe</th>
              <th>Luminance minimale (blanc)</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q0</td>
              <td>Pas d&apos;exigence</td>
              <td>Non applicable</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>100 mcd/m&sup2;/lux</td>
              <td>Marquage courant</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>130 mcd/m&sup2;/lux</td>
              <td>Marquage haute visibilit&eacute;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Pour un parking, la classe Q2 est le minimum recommand&eacute;. La
        classe Q3 est conseill&eacute;e pour les zones de passage
        pi&eacute;ton et les places PMR.
      </p>

      <h3>2. R&eacute;tror&eacute;flexion (visibilit&eacute; de nuit)</h3>

      <p>
        La r&eacute;tror&eacute;flexion mesure la capacit&eacute; du marquage
        &agrave; renvoyer la lumi&egrave;re des phares vers le conducteur.
        C&apos;est le crit&egrave;re le plus important pour la
        s&eacute;curit&eacute; en parking couvert ou en conditions de faible
        &eacute;clairage.
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Classe</th>
              <th>R&eacute;tror&eacute;flexion min. (sec)</th>
              <th>R&eacute;tror&eacute;flexion min. (pluie)</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R0</td>
              <td>Pas d&apos;exigence</td>
              <td>-</td>
              <td>Non applicable</td>
            </tr>
            <tr>
              <td>R2</td>
              <td>100 mcd/m&sup2;/lux</td>
              <td>-</td>
              <td>Marquage courant (parking ext&eacute;rieur)</td>
            </tr>
            <tr>
              <td>R4</td>
              <td>200 mcd/m&sup2;/lux</td>
              <td>-</td>
              <td>Marquage haute performance</td>
            </tr>
            <tr>
              <td>RW1</td>
              <td>-</td>
              <td>25 mcd/m&sup2;/lux</td>
              <td>Marquage visible sous pluie</td>
            </tr>
            <tr>
              <td>RW2</td>
              <td>-</td>
              <td>35 mcd/m&sup2;/lux</td>
              <td>Marquage haute performance sous pluie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        La r&eacute;tror&eacute;flexion est obtenue par l&apos;ajout de
        microbilles de verre dans ou sur la peinture. Sans microbilles, le
        marquage est quasiment invisible de nuit sous les phares.
      </p>

      <h3>3. R&eacute;sistance au d&eacute;rapage (adh&eacute;rence)</h3>

      <p>
        L&apos;adh&eacute;rence du marquage est un crit&egrave;re de
        s&eacute;curit&eacute; pour les pi&eacute;tons et les
        v&eacute;hicules. Un marquage trop lisse devient dangereux par temps
        humide.
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Classe</th>
              <th>SRT minimale</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S0</td>
              <td>Pas d&apos;exigence</td>
              <td>Non applicable</td>
            </tr>
            <tr>
              <td>S1</td>
              <td>45 SRT</td>
              <td>Marquage courant</td>
            </tr>
            <tr>
              <td>S2</td>
              <td>50 SRT</td>
              <td>Zones de freinage, passages pi&eacute;tons</td>
            </tr>
            <tr>
              <td>S3</td>
              <td>55 SRT</td>
              <td>Haute adh&eacute;rence (pentes, virages)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Le SRT (Skid Resistance Tester) mesure la r&eacute;sistance au
        d&eacute;rapage avec un pendule normalis&eacute;. En parking, la classe
        S1 est suffisante pour les zones plates. La classe S2 est
        recommand&eacute;e pour les rampes d&apos;acc&egrave;s et les passages
        pi&eacute;tons.
      </p>

      <h3>4. Dur&eacute;e de vie fonctionnelle</h3>

      <p>
        La norme d&eacute;finit 6 classes de dur&eacute;e de vie
        fonctionnelle, mesur&eacute;e par la conservation des performances dans
        le temps :
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Classe</th>
              <th>Dur&eacute;e de vie</th>
              <th>Type de produit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P0</td>
              <td>Temporaire</td>
              <td>Marquage de chantier</td>
            </tr>
            <tr>
              <td>P1</td>
              <td>0,5 &agrave; 1 an</td>
              <td>Peinture &agrave; l&apos;eau basique</td>
            </tr>
            <tr>
              <td>P3</td>
              <td>1 &agrave; 2 ans</td>
              <td>Peinture acrylique standard</td>
            </tr>
            <tr>
              <td>P5</td>
              <td>2 &agrave; 4 ans</td>
              <td>Peinture acrylique haute performance</td>
            </tr>
            <tr>
              <td>P6</td>
              <td>3 &agrave; 5 ans</td>
              <td>Enduit thermoplastique</td>
            </tr>
            <tr>
              <td>P7</td>
              <td>5 ans et plus</td>
              <td>Enduit &agrave; froid, bande pr&eacute;form&eacute;e</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Pour un parking, les classes P5 (peinture acrylique haute performance)
        et P6 (thermoplastique) offrent le meilleur rapport
        qualit&eacute;/prix. La classe P7 est r&eacute;serv&eacute;e aux
        parkings &agrave; tr&egrave;s fort trafic (centres commerciaux,
        a&eacute;roports).
      </p>

      <h2>Application pratique en parking priv&eacute;</h2>

      <h3>Quels crit&egrave;res privil&eacute;gier ?</h3>

      <p>
        Le choix des classes d&eacute;pend du type de parking :
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type de parking</th>
              <th>Luminance</th>
              <th>R&eacute;tror&eacute;flexion</th>
              <th>Adh&eacute;rence</th>
              <th>Dur&eacute;e de vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parking ext&eacute;rieur courant</td>
              <td>Q2</td>
              <td>R2</td>
              <td>S1</td>
              <td>P5</td>
            </tr>
            <tr>
              <td>Parking couvert/souterrain</td>
              <td>Q2</td>
              <td>R2</td>
              <td>S1</td>
              <td>P5-P6</td>
            </tr>
            <tr>
              <td>Parking commercial (fort trafic)</td>
              <td>Q3</td>
              <td>R4</td>
              <td>S2</td>
              <td>P6-P7</td>
            </tr>
            <tr>
              <td>Rampes et pentes</td>
              <td>Q2</td>
              <td>R2</td>
              <td>S2-S3</td>
              <td>P5</td>
            </tr>
            <tr>
              <td>Passages pi&eacute;tons</td>
              <td>Q3</td>
              <td>R2</td>
              <td>S2</td>
              <td>P5</td>
            </tr>
            <tr>
              <td>Places PMR</td>
              <td>Q3</td>
              <td>R2</td>
              <td>S1</td>
              <td>P5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Sophie, gestionnaire d&apos;un parking souterrain de 200 places
        &agrave; Lyon 6e, a demand&eacute; &agrave; 3 prestataires les classes
        NF EN 1436 de leurs produits. Un seul a pu fournir les fiches
        techniques avec les classifications. Elle a retenu ce prestataire
        (Q2/R2/S1/P5). Deux ans plus tard, le marquage est intact. Les
        2 parkings voisins, trac&eacute;s au m&ecirc;me moment avec des
        produits non certifi&eacute;s, ont &eacute;t&eacute; retrac&eacute;s
        &agrave; 60%.
      </p>

      <h3>Comment v&eacute;rifier la certification</h3>

      <p>
        Pour s&apos;assurer qu&apos;un produit est certifi&eacute; NF EN
        1436 :
      </p>

      <ol>
        <li>
          <strong>Demander la fiche technique</strong> du produit au
          prestataire. Les classes NF EN 1436 doivent y figurer
        </li>
        <li>
          <strong>V&eacute;rifier la marque NF</strong> : les produits
          certifi&eacute;s portent la marque NF d&eacute;livr&eacute;e par
          l&apos;AFNOR ou un organisme &eacute;quivalent
        </li>
        <li>
          <strong>Contr&ocirc;ler le lot</strong> : chaque lot de peinture doit
          &ecirc;tre tra&ccedil;able (num&eacute;ro de lot, date de
          fabrication)
        </li>
      </ol>

      <p>
        Pour une analyse des types de peinture et leurs performances, consultez
        notre guide sur la{' '}
        <Link href="/guides/peinture-marquage-sol-parking">
          peinture de marquage au sol de parking
        </Link>
        .
      </p>

      <h2>Impact sur les prix</h2>

      <h3>
        &Eacute;cart de prix entre produits certifi&eacute;s et non
        certifi&eacute;s
      </h3>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type de produit</th>
              <th>Non certifi&eacute;</th>
              <th>Certifi&eacute; NF EN 1436</th>
              <th>&Eacute;cart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peinture acrylique (fourniture)</td>
              <td>2-4 euros/m&sup2;</td>
              <td>4-7 euros/m&sup2;</td>
              <td>+50-75%</td>
            </tr>
            <tr>
              <td>Peinture acrylique (pose comprise)</td>
              <td>6-9 euros/m&sup2;</td>
              <td>8-15 euros/m&sup2;</td>
              <td>+30-60%</td>
            </tr>
            <tr>
              <td>Thermoplastique (pose comprise)</td>
              <td>12-18 euros/m&sup2;</td>
              <td>15-25 euros/m&sup2;</td>
              <td>+25-40%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Le calcul sur la dur&eacute;e</h3>

      <p>
        Le co&ucirc;t r&eacute;el ne se mesure pas au m&sup2; pos&eacute;,
        mais au m&sup2;/an :
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix pose</th>
              <th>Dur&eacute;e de vie</th>
              <th>Co&ucirc;t/m&sup2;/an</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peinture non certifi&eacute;e</td>
              <td>7 euros/m&sup2;</td>
              <td>1-2 ans</td>
              <td>3,50-7 euros/m&sup2;/an</td>
            </tr>
            <tr>
              <td>Peinture certifi&eacute;e P5</td>
              <td>12 euros/m&sup2;</td>
              <td>3-5 ans</td>
              <td>2,40-4 euros/m&sup2;/an</td>
            </tr>
            <tr>
              <td>Thermoplastique certifi&eacute; P6</td>
              <td>20 euros/m&sup2;</td>
              <td>5-8 ans</td>
              <td>2,50-4 euros/m&sup2;/an</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Le produit certifi&eacute; co&ucirc;te plus cher &agrave; l&apos;achat
        mais moins cher par an d&apos;utilisation. Sur un parking de 100 places
        retrac&eacute; tous les 2 ans avec un produit non certifi&eacute; vs
        tous les 5 ans avec un produit certifi&eacute;, l&apos;&eacute;conomie
        est de 30 &agrave; 40% sur 10 ans.
      </p>

      <p>
        Pour les tarifs d&eacute;taill&eacute;s, consultez notre guide sur le{' '}
        <Link href="/guides/prix-marquage-sol-parking">
          prix du marquage au sol de parking
        </Link>
        . La{' '}
        <Link href="/guides/couleur-marquage-sol-parking">
          couleur du marquage
        </Link>{' '}
        influe aussi sur le co&ucirc;t (les pigments color&eacute;s
        co&ucirc;tent 10 &agrave; 20% de plus que le blanc).
      </p>

      <h2>Les normes compl&eacute;mentaires</h2>

      <p>
        La NF EN 1436 ne couvre que les performances des produits de marquage.
        D&apos;autres normes encadrent la mise en oeuvre et les dimensions :
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Norme</th>
              <th>Objet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NF EN 1436</td>
              <td>Performances des produits de marquage</td>
            </tr>
            <tr>
              <td>NF EN 1871</td>
              <td>
                Propri&eacute;t&eacute;s physiques des produits de marquage
              </td>
            </tr>
            <tr>
              <td>NF P 98-300</td>
              <td>Mise en oeuvre du marquage routier</td>
            </tr>
            <tr>
              <td>IISR (7e partie)</td>
              <td>
                Dimensions et couleurs du marquage sur voie publique
              </td>
            </tr>
            <tr>
              <td>Arr&ecirc;t&eacute; du 15 janvier 2007</td>
              <td>
                Accessibilit&eacute; PMR (dimensions des places)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Pour la r&eacute;glementation compl&egrave;te du marquage en parking,
        consultez notre guide sur la{' '}
        <Link href="/guides/reglementation-marquage-sol-parking">
          r&eacute;glementation du marquage au sol de parking
        </Link>
        .
      </p>

      <h2>FAQ : norme NF EN 1436</h2>

      <h3>
        La norme NF EN 1436 est-elle obligatoire en parking priv&eacute; ?
      </h3>

      <p>
        Non, au sens strict. Seuls les marquages sur voie publique doivent
        obligatoirement respecter la norme. Mais en parking priv&eacute;,
        l&apos;utilisation de produits certifi&eacute;s NF EN 1436 est
        fortement recommand&eacute;e. En cas de litige ou d&apos;accident, la
        conformit&eacute; &agrave; la norme constitue un &eacute;l&eacute;ment
        de preuve de la diligence du gestionnaire.
      </p>

      <h3>
        Comment savoir si mon marquage actuel est conforme ?
      </h3>

      <p>
        Visuellement, un marquage conforme NF EN 1436 se distingue par sa
        r&eacute;tror&eacute;flexion (il brille sous les phares la nuit
        gr&acirc;ce aux microbilles de verre). Un marquage mat et sans reflet
        est probablement non certifi&eacute;. Pour un diagnostic pr&eacute;cis,
        un{' '}
        <Link href="/competences/conseil-expertise">audit technique</Link> avec
        mesure au r&eacute;troflectom&egrave;tre est possible.
      </p>

      <h3>
        Quelle est la diff&eacute;rence entre NF EN 1436 et la marque NF ?
      </h3>

      <p>
        La norme NF EN 1436 d&eacute;finit les crit&egrave;res de performance.
        La marque NF est une certification d&eacute;livr&eacute;e par
        l&apos;AFNOR qui atteste qu&apos;un produit sp&eacute;cifique respecte
        ces crit&egrave;res. Un produit peut &ecirc;tre &laquo; conforme
        NF EN 1436 &raquo; (il respecte les crit&egrave;res) sans porter la
        marque NF (il n&apos;a pas &eacute;t&eacute; certifi&eacute; par
        l&apos;AFNOR).
      </p>

      <h3>Les microbilles de verre sont-elles obligatoires ?</h3>

      <p>
        Non, mais elles sont indispensables pour atteindre les classes de
        r&eacute;tror&eacute;flexion R2 et sup&eacute;rieures. Sans
        microbilles, le marquage n&apos;est pas
        r&eacute;tror&eacute;fl&eacute;chissant et donc peu visible de nuit ou
        en parking couvert. Toute peinture certifi&eacute;e NF EN 1436 de
        classe R2+ int&egrave;gre des microbilles.
      </p>

      <h2>
        Exiger la norme, c&apos;est prot&eacute;ger votre investissement
      </h2>

      <p>
        Le marquage au sol d&apos;un parking est un investissement de
        s&eacute;curit&eacute; et de conformit&eacute;. Exiger des produits
        certifi&eacute;s NF EN 1436, c&apos;est garantir une
        visibilit&eacute; optimale, une adh&eacute;rence suffisante et une
        dur&eacute;e de vie 2 &agrave; 3 fois sup&eacute;rieure aux produits
        g&eacute;n&eacute;riques.
      </p>

      <p>
        <strong>
          Vous souhaitez un marquage de parking conforme NF EN 1436 ?
        </strong>{' '}
        <Link href="/devis">Demandez un devis gratuit</Link> sous 24h. Toutes
        nos peintures sont certifi&eacute;es NF EN 1436 (classe P5 minimum) et
        nos &eacute;quipes ma&icirc;trisent les{' '}
        <Link href="/competences/tracage-retracage-parking">
          techniques de tra&ccedil;age
        </Link>{' '}
        conformes aux normes en vigueur.
      </p>
    </>
  )
}
