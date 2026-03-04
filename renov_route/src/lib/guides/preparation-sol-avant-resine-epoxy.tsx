import type { Guide } from '../guides'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'preparation-sol-avant-resine-epoxy',
  title: 'Comment pr\u00e9parer un sol avant r\u00e9sine \u00e9poxy : les 6 \u00e9tapes',
  metaTitle: 'Pr\u00e9paration sol avant r\u00e9sine \u00e9poxy : les 6 \u00e9tapes cl\u00e9s',
  metaDescription: 'Pr\u00e9paration sol avant r\u00e9sine \u00e9poxy : diagnostic, grenaillage, r\u00e9paration fissures, primaire. 6 \u00e9tapes pour une adh\u00e9rence parfaite et un r\u00e9sultat durable.',
  publishDate: '2026-03-04',
  category: 'marquage-parking',
  readingTime: 8,
  excerpt: 'Les 6 \u00e9tapes de pr\u00e9paration d\u0027un sol b\u00e9ton avant application de r\u00e9sine \u00e9poxy : diagnostic, nettoyage, grenaillage, r\u00e9paration, primaire et contr\u00f4le.',
}

export default function Content() {
  return (
    <>
      <p>
        La pr&eacute;paration du sol repr&eacute;sente 80% de la r&eacute;ussite d&apos;un rev&ecirc;tement en r&eacute;sine &eacute;poxy. Un sol bien pr&eacute;par&eacute; garantit une adh&eacute;rence optimale et une dur&eacute;e de vie de 10-15 ans. Un sol mal pr&eacute;par&eacute;, m&ecirc;me avec la meilleure r&eacute;sine du march&eacute;, se d&eacute;colle en 6-12 mois.
      </p>
      <p>
        Patrick, responsable maintenance d&apos;un entrep&ocirc;t logistique de 2 000 m&sup2; &agrave; Saint-Priest (69), a fait appliquer une r&eacute;sine &eacute;poxy sur le sol en b&eacute;ton de son entrep&ocirc;t en 2023. Le prestataire a saut&eacute; l&apos;&eacute;tape du grenaillage pour gagner du temps et r&eacute;duire le devis de 3 000 euros. En 10 mois, la r&eacute;sine se d&eacute;collait par plaques sur 40% de la surface. La reprise (d&eacute;capage + grenaillage + nouvelle r&eacute;sine) a co&ucirc;t&eacute; 48 000 euros, le double du devis initial. Les 3 000 euros &eacute;conomis&eacute;s sur la pr&eacute;paration ont co&ucirc;t&eacute; 24 000 euros de plus.
      </p>
      <p>
        Ce guide d&eacute;taille les 6 &eacute;tapes de pr&eacute;paration d&apos;un sol avant application de r&eacute;sine &eacute;poxy.
      </p>

      <h2>&Eacute;tape 1 : Diagnostic du support</h2>
      <p>
        Avant toute intervention, le sol doit &ecirc;tre &eacute;valu&eacute; sur 4 crit&egrave;res :
      </p>

      <h3>Test d&apos;humidit&eacute;</h3>
      <p>
        Le taux d&apos;humidit&eacute; du b&eacute;ton doit &ecirc;tre inf&eacute;rieur &agrave; 4,5% pour la r&eacute;sine &eacute;poxy (6% pour le polyur&eacute;thane). Deux m&eacute;thodes de mesure :
      </p>
      <ul>
        <li><strong>Bombe carbure</strong> (m&eacute;thode de r&eacute;f&eacute;rence) : &eacute;chantillon de b&eacute;ton broy&eacute; dans un r&eacute;cipient &eacute;tanche avec du carbure de calcium. La pression d&eacute;gag&eacute;e indique le taux d&apos;humidit&eacute;. Pr&eacute;cision : +/- 0,2%. Co&ucirc;t : 50-100 euros/test</li>
        <li><strong>Hygrom&egrave;tre &eacute;lectronique</strong> : sonde enfonc&eacute;e dans le b&eacute;ton. Moins pr&eacute;cis (+/- 1%) mais non destructif. Co&ucirc;t : mesure incluse dans le diagnostic</li>
      </ul>
      <p>
        Si le taux d&apos;humidit&eacute; d&eacute;passe le seuil, deux options : attendre le s&eacute;chage naturel (plusieurs semaines) ou appliquer un primaire anti-humidit&eacute; (+8-15 euros/m&sup2;).
      </p>

      <h3>Test de duret&eacute;</h3>
      <p>
        Le b&eacute;ton doit avoir une r&eacute;sistance en compression suffisante (25 MPa minimum). Un b&eacute;ton trop tendre (parking ancien, b&eacute;ton de mauvaise qualit&eacute;) ne supporte pas la r&eacute;sine qui se d&eacute;colle avec la couche superficielle du b&eacute;ton.
      </p>

      <h3>Test d&apos;adh&eacute;rence</h3>
      <p>
        Un test de traction (pull-off test) mesure l&apos;adh&eacute;rence du support : un plot coll&eacute; sur le sol est arrach&eacute; avec un dynamom&egrave;tre. L&apos;adh&eacute;rence doit &ecirc;tre sup&eacute;rieure &agrave; 1,5 MPa. En dessous, le grenaillage seul ne suffit pas, un renforcement du support est n&eacute;cessaire.
      </p>

      <h3>Inspection visuelle</h3>
      <ul>
        <li>Fissures : actives (qui bougent) ou passives (stabilis&eacute;es) ?</li>
        <li>Joints de dilatation : &eacute;tat, espacement</li>
        <li>Contaminants : huiles, graisses, peinture ancienne</li>
        <li>Laitance : couche superficielle friable sur b&eacute;ton neuf</li>
      </ul>

      <h2>&Eacute;tape 2 : Nettoyage et d&eacute;contamination</h2>
      <p>
        Le sol doit &ecirc;tre d&eacute;barrass&eacute; de tout contaminant qui emp&ecirc;che l&apos;adh&eacute;rence de la r&eacute;sine :
      </p>
      <ul>
        <li><strong>Huiles et graisses</strong> : d&eacute;graissage chimique (produit alcalin), puis rin&ccedil;age haute pression. Les taches d&apos;huile anciennes (&gt; 5 ans) ont impr&eacute;gn&eacute; le b&eacute;ton en profondeur : un d&eacute;graissage par bio-rem&eacute;diation est parfois n&eacute;cessaire (48-72h de traitement)</li>
        <li><strong>Peinture existante</strong> : d&eacute;capage m&eacute;canique (grenaillage, sablage) ou chimique (d&eacute;capant). La peinture existante doit &ecirc;tre int&eacute;gralement retir&eacute;e</li>
        <li><strong>Laitance</strong> : la couche superficielle friable du b&eacute;ton neuf (&lt; 28 jours) doit &ecirc;tre &eacute;limin&eacute;e par pon&ccedil;age ou grenaillage</li>
        <li><strong>Poussi&egrave;res</strong> : aspiration industrielle apr&egrave;s chaque op&eacute;ration m&eacute;canique</li>
      </ul>

      <h2>&Eacute;tape 3 : Grenaillage ou pon&ccedil;age</h2>
      <p>
        C&apos;est l&apos;&eacute;tape la plus importante. Le grenaillage ouvre les pores du b&eacute;ton pour que la r&eacute;sine p&eacute;n&egrave;tre et adh&egrave;re m&eacute;caniquement au support.
      </p>

      <h3>Grenaillage (m&eacute;thode pr&eacute;f&eacute;r&eacute;e)</h3>
      <p>
        Une machine projette des billes d&apos;acier &agrave; grande vitesse sur le sol. Les billes cr&eacute;ent un profil rugueux (CSP 3-5 selon la norme ICRI) et retirent la couche superficielle du b&eacute;ton.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Param&egrave;tre</th>
              <th>Sp&eacute;cification</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Profondeur de profil</td><td>0,5-1,5 mm (CSP 3-5)</td></tr>
            <tr><td>Rendement</td><td>100-300 m&sup2;/heure</td></tr>
            <tr><td>Co&ucirc;t</td><td>5-10 euros/m&sup2;</td></tr>
            <tr><td>Avantage</td><td>Propre (aspiration int&eacute;gr&eacute;e), rapide</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Pon&ccedil;age diamant</h3>
      <p>
        Alternative au grenaillage pour les surfaces de petite taille ou les zones difficiles d&apos;acc&egrave;s :
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Param&egrave;tre</th>
              <th>Sp&eacute;cification</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Profondeur de profil</td><td>0,3-0,8 mm (CSP 2-3)</td></tr>
            <tr><td>Rendement</td><td>50-150 m&sup2;/heure</td></tr>
            <tr><td>Co&ucirc;t</td><td>8-15 euros/m&sup2;</td></tr>
            <tr><td>Avantage</td><td>Adapt&eacute; aux petites surfaces, coins</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Le test de la goutte d&apos;eau</h3>
      <p>
        Apr&egrave;s grenaillage, versez une goutte d&apos;eau sur le sol : elle doit &ecirc;tre absorb&eacute;e en moins de 20 secondes. Si elle reste en surface, le grenaillage n&apos;est pas assez profond. Ce test simple permet de v&eacute;rifier que la r&eacute;sine pourra p&eacute;n&eacute;trer dans les pores du b&eacute;ton.
      </p>

      <h2>&Eacute;tape 4 : R&eacute;paration des d&eacute;fauts</h2>

      <h3>Fissures passives (stabilis&eacute;es)</h3>
      <p>Les fissures passives sont remplies avec un mortier de r&eacute;paration &eacute;poxy :</p>
      <ol>
        <li>&Eacute;largir la fissure en V (disqueuse)</li>
        <li>Aspirer les poussi&egrave;res</li>
        <li>Appliquer le mortier &eacute;poxy</li>
        <li>Laisser durcir 24h</li>
        <li>Poncer &agrave; niveau</li>
      </ol>

      <h3>Fissures actives (qui bougent)</h3>
      <p>Les fissures actives n&eacute;cessitent un traitement souple :</p>
      <ol>
        <li>&Eacute;largir la fissure</li>
        <li>Poser un fond de joint</li>
        <li>Appliquer un mastic polyur&eacute;thane souple</li>
        <li>Laisser durcir 48h</li>
        <li>Ne pas poncer (le mastic doit rester souple)</li>
      </ol>

      <h3>Trous et &eacute;clats</h3>
      <p>
        Les trous et &eacute;clats sont r&eacute;par&eacute;s avec un mortier &eacute;poxy autolissant. L&apos;&eacute;paisseur maximale de r&eacute;paration en une couche est de 30 mm. Au-del&agrave;, appliquer en plusieurs couches de 24h d&apos;intervalle.
      </p>

      <h2>&Eacute;tape 5 : Application du primaire</h2>
      <p>
        Le primaire d&apos;accrochage est la couche de liaison entre le b&eacute;ton et la r&eacute;sine de finition :
      </p>
      <ul>
        <li><strong>Primaire &eacute;poxy classique</strong> : pour les supports secs (&lt; 4,5% d&apos;humidit&eacute;). Co&ucirc;t : 3-6 euros/m&sup2;</li>
        <li><strong>Primaire anti-humidit&eacute;</strong> (&eacute;poxy tol&eacute;rant l&apos;eau) : pour les supports humides ou les <Link href="/guides/resine-sol-parking-souterrain">parkings souterrains</Link>. Co&ucirc;t : 8-15 euros/m&sup2;</li>
        <li><strong>Primaire de consolidation</strong> : pour les b&eacute;tons poreux ou friables. P&eacute;n&egrave;tre en profondeur et renforce la couche superficielle. Co&ucirc;t : 5-10 euros/m&sup2;</li>
      </ul>
      <p>
        Le primaire doit &ecirc;tre appliqu&eacute; dans les 4 heures suivant le grenaillage pour &eacute;viter la re-contamination du support (poussi&egrave;re, humidit&eacute;). Consultez notre guide sur les <Link href="/guides/resine-sol-parking-prix-types">r&eacute;sines sol parking</Link> pour les syst&egrave;mes complets.
      </p>

      <h2>&Eacute;tape 6 : Contr&ocirc;le avant application de la r&eacute;sine</h2>
      <p>Avant d&apos;appliquer la r&eacute;sine de finition, v&eacute;rifier :</p>
      <ul>
        <li><strong>Temp&eacute;rature</strong> : sol entre 10&deg;C et 30&deg;C, au moins 3&deg;C au-dessus du point de ros&eacute;e</li>
        <li><strong>Humidit&eacute; du support</strong> : re-mesurer si plus de 24h entre le grenaillage et l&apos;application</li>
        <li><strong>Propret&eacute;</strong> : aucune poussi&egrave;re, aucun d&eacute;bris (passer la main, elle doit rester propre)</li>
        <li><strong>Primaire</strong> : sec au toucher mais encore collant (dans la fen&ecirc;tre de recouvrement indiqu&eacute;e par le fabricant)</li>
        <li><strong>Ventilation</strong> : assurer une ventilation minimale pendant et apr&egrave;s l&apos;application (surtout en parking souterrain)</li>
      </ul>

      <h2>Co&ucirc;t total de la pr&eacute;paration</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>&Eacute;tape</th>
              <th>Prix/m&sup2;</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Diagnostic (humidit&eacute;, duret&eacute;, adh&eacute;rence)</td><td>1-3 euros</td></tr>
            <tr><td>Nettoyage/d&eacute;contamination</td><td>2-5 euros</td></tr>
            <tr><td>Grenaillage</td><td>5-10 euros</td></tr>
            <tr><td>R&eacute;paration fissures/d&eacute;fauts</td><td>3-8 euros</td></tr>
            <tr><td>Primaire d&apos;accrochage</td><td>3-15 euros</td></tr>
            <tr><td><strong>Total pr&eacute;paration</strong></td><td><strong>14-41 euros/m&sup2;</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>
        La pr&eacute;paration repr&eacute;sente typiquement 40-50% du co&ucirc;t total d&apos;un syst&egrave;me r&eacute;sine (pr&eacute;paration + finition). C&apos;est la part du budget qu&apos;il ne faut jamais r&eacute;duire.
      </p>

      <h2>FAQ : pr&eacute;paration sol avant r&eacute;sine</h2>

      <h3>Peut-on appliquer de la r&eacute;sine &eacute;poxy sur un sol peint ?</h3>
      <p>
        Non, la peinture existante doit &ecirc;tre int&eacute;gralement retir&eacute;e par grenaillage ou d&eacute;capage chimique. La r&eacute;sine &eacute;poxy appliqu&eacute;e sur une peinture se d&eacute;collera avec la peinture sous-jacente.
      </p>

      <h3>Faut-il grenailier un sol en b&eacute;ton neuf ?</h3>
      <p>
        Oui. Le b&eacute;ton neuf pr&eacute;sente une couche de laitance en surface qui emp&ecirc;che l&apos;adh&eacute;rence de la r&eacute;sine. Le grenaillage ou le pon&ccedil;age est obligatoire, m&ecirc;me sur un b&eacute;ton lisse d&apos;apparence propre. Pour les sols neufs, consultez notre guide sur la <Link href="/guides/peinture-sol-garage-types-application">peinture sol garage</Link> qui couvre les primaires adapt&eacute;s.
      </p>

      <h3>Combien de temps dure la pr&eacute;paration ?</h3>
      <p>
        Pour un parking de 50 places (~650 m&sup2;) : 2-3 jours de pr&eacute;paration (diagnostic + nettoyage + grenaillage + primaire). L&apos;application de la r&eacute;sine de finition prend 1-2 jours suppl&eacute;mentaires. Pour les syst&egrave;mes complets, consultez notre guide sur les <Link href="/guides/sol-epoxy-entrepot-avantages-pose">sols &eacute;poxy entrep&ocirc;t</Link>.
      </p>

      <h2>La pr&eacute;paration fait la diff&eacute;rence</h2>
      <p>
        Un sol bien pr&eacute;par&eacute; tient 15 ans. Un sol mal pr&eacute;par&eacute; tient 12 mois. Le co&ucirc;t de la pr&eacute;paration repr&eacute;sente 40-50% du budget total, mais &eacute;vite 100% des &eacute;checs. Ne laissez jamais un prestataire r&eacute;duire cette &eacute;tape pour baisser un devis.
      </p>
      <p>
        <strong>Vous avez un sol &agrave; pr&eacute;parer pour une r&eacute;sine ?</strong>{' '}
        <Link href="/devis">Demandez un devis gratuit sous 24h</Link>. Notre &eacute;quipe r&eacute;alise le diagnostic, la pr&eacute;paration et l&apos;application de <Link href="/competences/resine-sol-marquage-interieur">r&eacute;sine de sol</Link> pour un r&eacute;sultat durable et garanti.
      </p>
    </>
  )
}
