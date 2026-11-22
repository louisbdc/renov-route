import type { Guide } from '../guides'
import KeyAnswer from '@/components/KeyAnswer'
import Link from 'next/link'

export const meta: Guide = {
  slug: 'accessibilite-parking-erp-normes',
  title: 'Accessibilité parking ERP : normes PMR et obligations en 2026',
  metaTitle: "Accessibilité parking ERP : normes PMR 2026",
  metaDescription: 'Accessibilité parking ERP : nombre de places PMR, dimensions, signalisation, pente maximale et sanctions. Normes 2026 et mise en conformité. Guide complet.',
  publishDate: '2026-03-04',
  updatedDate: '2026-08-08',
  category: 'normes-pmr',
  readingTime: 8,
  excerpt: 'Nombre de places PMR obligatoires, dimensions réglementaires, signalisation, cheminement accessible et sanctions en cas de non-conformité.',
}

export default function Content() {
  return (
    <>
      <KeyAnswer question="Quelles sont les obligations d'accessibilité d'un parking d'ERP ?">
        <p>
          Dans un <strong>parking d&apos;ERP</strong>, au moins <strong>2 % des places</strong> doivent être adaptées, arrondi à l&apos;unité supérieure. Chaque place mesure au moins <strong>3,30 × 5 m</strong>, reste horizontale au dévers près (<strong>2 % maximum</strong>) et rejoint l&apos;entrée par un cheminement accessible, sans ressaut de plus de 2 cm (arrêté du 20 avril 2017).
        </p>
      </KeyAnswer>

      <p>
        Votre parking dessert un commerce, un cabinet m&eacute;dical, un restaurant ou un immeuble de bureaux recevant du public ? L&apos;accessibilit&eacute; aux personnes &agrave; mobilit&eacute; r&eacute;duite (PMR) n&apos;est pas optionnelle. C&apos;est une obligation l&eacute;gale depuis la loi du 11 f&eacute;vrier 2005, précisée pour les ERP neufs par l&apos;<a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034485459/" target="_blank" rel="noopener noreferrer">arrêté du 20 avril 2017</a>. Les sanctions vont jusqu&apos;&agrave; 45 000 euros d&apos;amende et la fermeture administrative.
      </p>
      <p>
        Prenons l&apos;exemple de Laurent, gérant d&apos;un cabinet médical de 3 praticiens à Oullins (69) : il a reçu la visite de la commission de s&eacute;curit&eacute; en septembre 2025. Le parking de 15 places ne comportait aucune place PMR. La commission a accord&eacute; un d&eacute;lai de 3 mois pour mise en conformit&eacute;. Co&ucirc;t des travaux : quelques milliers d&apos;euros (tra&ccedil;age d&apos;une place PMR avec surlargeur, pose d&apos;un panneau vertical, reprise de la pente du trottoir d&apos;acc&egrave;s). Sans cette mise en conformit&eacute;, le cabinet risquait une amende et une interdiction d&apos;accueil du public.
      </p>
      <p>
        Ce guide d&eacute;taille les normes d&apos;accessibilit&eacute; parking applicables aux ERP et les &eacute;tapes de mise en conformit&eacute;.
      </p>

      <h2>Combien de places PMR obligatoires ?</h2>

      <h3>R&egrave;gle g&eacute;n&eacute;rale</h3>
      <p>
        Le nombre minimum de places PMR d&eacute;pend du nombre total de places du parking :
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Places totales</th>
              <th>Places PMR obligatoires</th>
              <th>Pourcentage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1-50</td><td>1 minimum</td><td>2% (arrondi &agrave; l&apos;entier sup&eacute;rieur)</td></tr>
            <tr><td>51-100</td><td>2</td><td>2%</td></tr>
            <tr><td>101-150</td><td>3</td><td>2%</td></tr>
            <tr><td>151-200</td><td>4</td><td>2%</td></tr>
            <tr><td>201-500</td><td>2% du total</td><td>2%</td></tr>
            <tr><td>500+</td><td>Fixé par arrêté municipal, 10 minimum</td><td>-</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        La r&egrave;gle des 2% s&apos;applique &agrave; tout parking d&apos;ERP, qu&apos;il soit en surface ou en souterrain. Pour le d&eacute;tail des calculs, consultez notre guide sur les <Link href="/guides/dimensions-nombre-places-pmr-parking">dimensions et nombre de places PMR</Link>.
      </p>

      <h3>Cas particuliers</h3>
      <ul>
        <li><strong>ERP existant avec Ad&apos;AP</strong> (Agenda d&apos;Accessibilité Programmée) : la mise en conformité suit le calendrier de l&apos;agenda approuvé</li>
        <li><strong>Parking en location</strong> : la répartition de la mise en conformité entre propriétaire et exploitant dépend du bail</li>
        <li><strong>Parking partag&eacute;</strong> (plusieurs commerces) : le nombre de places PMR se calcule sur le total du parking, pas par commerce</li>
        
      </ul>

      <h2>Dimensions et am&eacute;nagement des places PMR</h2>

      <h3>Dimensions r&eacute;glementaires</h3>
      <p>
        Chaque place PMR doit respecter ces dimensions minimales :
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>&Eacute;l&eacute;ment</th>
              <th>Dimension</th>
              <th>Norme de r&eacute;f&eacute;rence</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Largeur de la place</td><td>3,30 m minimum</td><td>Arr&ecirc;t&eacute; 20/04/2017</td></tr>
            <tr><td>Longueur de la place</td><td>5,00 m minimum</td><td>Arr&ecirc;t&eacute; 20/04/2017</td></tr>
            <tr><td>Surlargeur lat&eacute;rale</td><td>0,80 m, incluse dans les 3,30 m (hachurée)</td><td>Pratique courante</td></tr>
            <tr><td>Pente de la place</td><td>Horizontale au dévers près</td><td>Arr&ecirc;t&eacute; 20/04/2017</td></tr>
            <tr><td>Dévers</td><td>2% maximum</td><td>Arr&ecirc;t&eacute; 20/04/2017</td></tr>
            <tr><td>Passage libre sous obstacles (parking couvert)</td><td>2,00 m minimum</td><td>Arr&ecirc;t&eacute; 20/04/2017</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        La surlargeur de 0,80 m permet le d&eacute;ploiement d&apos;un fauteuil roulant. Elle peut &ecirc;tre partag&eacute;e entre 2 places PMR adjacentes.
      </p>

      <h3>Emplacement</h3>
      <p>Les places PMR doivent &ecirc;tre :</p>
      <ul>
        <li><strong>Les plus proches possible</strong> de l&apos;entr&eacute;e de l&apos;ERP ou de l&apos;ascenseur (parking souterrain)</li>
        <li><strong>Reli&eacute;es par un cheminement accessible</strong> : trottoir abaiss&eacute;, absence de ressaut &gt; 2 cm, pente &lt; 5%</li>
        <li><strong>De plain-pied</strong> ou accessibles par rampe (pente &lt; 5%, palier de repos tous les 10 m)</li>
        <li><strong>&Agrave; proximit&eacute; de la sortie pi&eacute;ton</strong> du parking (pas au fond du parking)</li>
      </ul>

      <h2>Signalisation obligatoire</h2>

      <h3>Au sol</h3>
      <p>Le marquage au sol d&apos;une place PMR comprend :</p>
      <ul>
        <li><strong>Pictogramme handicap&eacute;</strong> (fauteuil roulant) peint au sol</li>
        <li><strong>Hachures jaunes</strong> dans la surlargeur de 0,80 m</li>
        <li><strong>Lignes de d&eacute;limitation</strong> de la place en bleu ou blanc</li>
        <li><strong>Fond bleu</strong> optionnel mais recommand&eacute; (visibilit&eacute;)</li>
      </ul>
      <p>
        Pour le d&eacute;tail de la signalisation au sol, consultez notre guide sur la <Link href="/guides/signalisation-pmr-parking">signalisation PMR parking</Link>.
      </p>

      <h3>Signalisation verticale</h3>
      <p>Chaque place PMR doit &ecirc;tre signal&eacute;e par :</p>
      <ul>
        <li><strong>Un <Link href="/guides/signalisation-pmr-parking">panneau vertical</Link></strong> avec le pictogramme handicap&eacute; (visible depuis la voie de circulation)</li>
        <li><strong>Un panneau de d&eacute;signation</strong> &agrave; l&apos;entr&eacute;e du parking indiquant le nombre et la localisation des places PMR</li>
      </ul>
      <p>
        Prenons l&apos;exemple de Sophie, propriétaire d&apos;un restaurant avec terrasse à Tassin-la-Demi-Lune (69) : elle avait tracé une place PMR au sol mais sans panneau vertical. Lors du contr&ocirc;le, la place a &eacute;t&eacute; jug&eacute;e non conforme. La pose du panneau a repr&eacute;sent&eacute; un co&ucirc;t modeste (panneau + poteau + scellement). Le marquage au sol, lui, &eacute;tait conforme.
      </p>

      <h2>Cheminement accessible</h2>

      <h3>Du parking &agrave; l&apos;entr&eacute;e de l&apos;ERP</h3>
      <p>Le cheminement entre la place PMR et l&apos;entr&eacute;e de l&apos;ERP doit respecter :</p>
      <ul>
        <li><strong>Largeur</strong> : 1,40 m minimum (1,20 m en r&eacute;tr&eacute;cissement ponctuel)</li>
        <li><strong>Pente</strong> : 5% maximum (avec palier de repos tous les 10 m si pente ≥ 4 %)</li>
        <li><strong>D&eacute;vers</strong> : 2% maximum</li>
        <li><strong>Ressaut</strong> : 2 cm maximum (arrondi ou chanfreiné), 4 cm si la pente du chanfrein ne dépasse pas 33 %</li>
        <li><strong>Rev&ecirc;tement</strong> : non meuble, non glissant, sans obstacle au sol</li>
        <li><strong>Contraste</strong> : le cheminement doit &ecirc;tre visuellement rep&eacute;rable (bande de guidage ou contraste de couleur)</li>
      </ul>

      <h3>Rampe d&apos;acc&egrave;s</h3>
      <p>Si le cheminement comporte une d&eacute;nivel&eacute;e :</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Pente</th>
              <th>Longueur maximale</th>
              <th>Palier de repos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>5%</td><td>10 m</td><td>Tous les 10 m</td></tr>
            <tr><td>8%</td><td>2 m</td><td>Obligatoire en haut et en bas</td></tr>
            <tr><td>10%</td><td>0,50 m</td><td>Obligatoire en haut et en bas</td></tr>
            <tr><td>&gt; 10%</td><td>Interdit</td><td>-</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Sanctions en cas de non-conformit&eacute;</h2>

      <h3>Sanctions administratives</h3>
      <ul>
        <li><strong>Mise en demeure</strong> par le pr&eacute;fet avec d&eacute;lai de mise en conformit&eacute;</li>
        <li><strong>Fermeture administrative</strong> de l&apos;ERP si non-conformit&eacute; persistante</li>
        <li><strong>Amende</strong> : jusqu&apos;&agrave; 45 000 euros (personne physique) ou 225 000 euros (personne morale)</li>
        
      </ul>

      <h3>Sanctions civiles</h3>
      <ul>
        <li><strong>Action en justice</strong> par une personne handicap&eacute;e ou une association</li>
        <li><strong>Dommages et int&eacute;r&ecirc;ts</strong> pour discrimination</li>
        <li><strong>Mauvaise publicit&eacute;</strong> (d&eacute;cisions rendues publiques)</li>
      </ul>

      <h2>Co&ucirc;t de mise en conformit&eacute;</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Prestation</th>
              <th>Prix indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Tra&ccedil;age 1 place PMR (marquage + pictogramme + hachures)</td><td>&agrave; partir de 280 euros</td></tr>
            <tr><td>Panneau vertical PMR + poteau + scellement</td><td>&agrave; partir de 150 euros</td></tr>
            <tr><td>Reprise de pente (trottoir abaiss&eacute;)</td><td>&agrave; partir de 1 000 euros</td></tr>
            <tr><td>Rampe d&apos;acc&egrave;s (b&eacute;ton)</td><td>&agrave; partir de 3 500 euros</td></tr>
            <tr><td>Mise en conformit&eacute; compl&egrave;te (1-3 places PMR)</td><td>&agrave; partir de 2 000 euros</td></tr>
            <tr><td>Audit accessibilit&eacute; complet</td><td>&agrave; partir de 1 000 euros</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Pour les prix d&eacute;taill&eacute;s du tra&ccedil;age, consultez notre guide sur la <Link href="/guides/normes-pmr-parking">mise en conformit&eacute; parking PMR</Link>.
      </p>

      <h2>FAQ : accessibilit&eacute; parking ERP</h2>

      <h3>Quelles sont les normes d&apos;accessibilité pour les ERP ?</h3>
      <p>
        Pour un parking d&apos;ERP, l&apos;arrêté du 20 avril 2017 impose au moins <strong>2 % de places PMR</strong> (arrondi à l&apos;unité supérieure), des dimensions de <strong>3,30 m × 5 m</strong>, un dévers ≤ 2 %, un cheminement accessible jusqu&apos;à l&apos;entrée et une signalisation au sol + verticale. Les sanctions atteignent 45 000 € (225 000 € pour une personne morale).
      </p>

      <h3>Quelles règles pour un ERP de catégorie 5 ?</h3>
      <p>
        Les ERP de 5e catégorie (petits commerces, cabinets) restent soumis à l&apos;obligation d&apos;accessibilité : dès lors que le parking est ouvert au public, les places PMR et leur signalisation sont obligatoires, au prorata de la capacité.
      </p>

      <h3>Mon parking n&apos;a que 5 places, dois-je avoir une place PMR ?</h3>
      <p>
        Oui. D&egrave;s la premi&egrave;re place de stationnement accessible au public, une place PMR est obligatoire. La r&egrave;gle des 2% avec arrondi &agrave; l&apos;entier sup&eacute;rieur s&apos;applique : 5 places = 1 place PMR minimum.
      </p>

      <h3>Les places PMR sont-elles obligatoires en parking priv&eacute; ?</h3>
      <p>
        Pas pour un parking existant strictement priv&eacute;, r&eacute;serv&eacute; aux r&eacute;sidents d&apos;une copropri&eacute;t&eacute; sans ERP. Dans l&apos;habitation neuve, des places adaptables sont toutefois exig&eacute;es. Oui, si le parking dessert un ERP (commerce, bureau recevant du public, cabinet m&eacute;dical). Pour en savoir plus, consultez notre guide sur les <Link href="/guides/normes-pmr-parking">normes PMR parking</Link>.
      </p>

      <h3>Que faire si la pente de mon parking d&eacute;passe 2% ?</h3>
      <p>
        La pente de la place PMR elle-m&ecirc;me doit rester horizontale, au dévers près de 2 %. Si le parking est en pente, la place PMR doit &ecirc;tre implant&eacute;e dans la zone la plus plate. Si aucune zone ne permet de respecter ce dévers, des travaux de nivellement sont n&eacute;cessaires.
      </p>

      <h2>La conformit&eacute; prot&egrave;ge votre activit&eacute;</h2>
      <p>
        La mise en conformit&eacute; PMR de votre parking n&apos;est pas seulement une obligation l&eacute;gale. C&apos;est un investissement qui prot&egrave;ge votre activit&eacute; contre les sanctions, &eacute;largit votre client&egrave;le et am&eacute;liore l&apos;image de votre &eacute;tablissement.
      </p>
      <p>
        <strong>Votre parking d&apos;ERP doit &ecirc;tre mis en conformit&eacute; ?</strong>{' '}
        <Link href="/devis">Demandez un devis gratuit en 48h</Link>. Notre &eacute;quipe r&eacute;alise le <Link href="/competences/tracage-retracage-parking">tra&ccedil;age de parking</Link>, la signalisation PMR et le conseil pour la mise en conformit&eacute; de votre &eacute;tablissement.
      </p>
    </>
  )
}
