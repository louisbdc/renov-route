/**
 * Cover image per guide slug (Unsplash only).
 * Each image was fetched via Unsplash Search API with a topic-specific keyword,
 * then visually validated. No image used twice.
 * IDs below are the Unsplash CDN photo IDs (timestamp-hash format).
 * Guides without a verified match return null (rendered without image).
 */

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`

const IDS: Record<string, string> = {
  // ── Prix / coût ───────────────────────────────────────────────────
  'prix-marquage-sol-parking': '1564939558297-fc396f18e5c7',
  'cout-renovation-parking': '1768839722382-d483ad9b079a',

  // ── PMR / accessibilité ───────────────────────────────────────────
  'normes-pmr-parking': '1658326246852-4ebcbb0234a5',
  'dimensions-nombre-places-pmr-parking': '1643930824898-0013354905c0',
  'panneau-pmr-parking-types-obligations': '1643930493625-aa561ffbf6ed',
  'signalisation-pmr-parking': '1743521272571-14f5e3029de5',
  'accessibilite-parking-erp-normes': '1668983396705-3aa5deed5569',

  // ── Nids de poule / réparation chaussée ──────────────────────────
  'enrobe-froid-vs-resine-nids-de-poule': '1773118330236-d812832b5b71',
  'nid-de-poule-responsabilite-parking': '1694804304298-c79443f5e2f4',
  'nids-de-poule-hiver-2026-solutions': '1670305170787-e415c6649545',
  'reparation-chaussee-parking-methodes-prix': '1657502244190-3eb8b6a355bd',
  'reparer-nid-de-poule-soi-meme': '1601026909629-bad5e1122bc6',

  // ── Résine / sol industriel / epoxy ──────────────────────────────
  'resine-sol-parking-prix-types': '1721395289713-c717c05ae2a1',
  'revetement-sol-industriel-types-prix': '1772209415876-76ea6cbc2f0c',
  'sol-epoxy-entrepot-avantages-pose': '1772305595483-6b058aff40f9',
  'resine-epoxy-ou-peinture-sol-comparatif': '1771531072574-af6ed6b954c0',
  'resine-sol-parking-souterrain': '1590674899484-d5640e854abe',
  'preparation-sol-avant-resine-epoxy': '1736435364319-34c139cd3ccb',

  // ── Équipements ──────────────────────────────────────────────────
  'barriere-parking-types-prix': '1588362951121-3ee319b018b2',
  'butee-parking-types-pose-prix': '1592596321652-b9ee928f36e9',
  'ralentisseur-parking-norme': '1759917061237-8040bdfa6933',

  // ── Processus / chantier ─────────────────────────────────────────
  'comment-tracer-parking': '1774600166818-e554a4d4c376',
  'peinture-marquage-sol-parking': '1765405016829-0e676763ee2f',
  'signalisation-horizontale-lyon-marquage': '1752068302758-fba33913d886',
  'calendrier-entretien-parking': '1770250959829-de36726e99c4',
  'entretien-parking-signes-renovation': '1688862719614-dd7b8aeea0cf',

  // ── Normes / couleurs / réglementation ───────────────────────────
  'couleur-marquage-sol-parking': '1581782046583-d09f142bdd65',
  'marquage-au-sol-signification-couleurs': '1759559168529-8a1a567dab03',
  'norme-nf-en-1436-marquage-routier': '1775158148668-c2d62ae795cb',
  'reglementation-marquage-sol-parking': '1772440222924-2efcb5ae91ce',
  'duree-vie-marquage-sol-parking': '1696342889564-42af48b9c70d',

  // ── Passages piétons ─────────────────────────────────────────────
  'passage-pieton-parking-norme': '1694248454470-8983f5a7cbe4',

  // ── Signalisation verticale ──────────────────────────────────────
  'signalisation-parking-reglementation': '1696037064798-730e8fd5b674',
  'panneau-limitation-vitesse-parking': '1517697063925-d82f8da41135',
  'nouvelles-normes-signaletique-parking-2026': '1653356986969-a62e0fd7f84d',
  'signalisation-parking-copropriete': '1759445777690-769fc6ae0ffb',

  // ── Parkings commerciaux / visiteurs ─────────────────────────────
  'marquage-sol-supermarche-grande-surface': '1742975222193-fda6c89b419b',
  'bumper-supermarche-protection-frigo': '1604719312266-d57b1438d4bf',
  'parking-visiteurs-amenagement': '1732327413927-297cf065bd87',
  'dimension-place-de-parking-normes': '1772369612500-e1643da23e8e',
  'renovation-parking-entreprise': '1758304480420-5b0f11280115',
  'renovation-parking-copropriete': '1697813165600-36bdc8f2ef7e',

  // ── Divers thématiques ───────────────────────────────────────────
  'ombriere-photovoltaique-parking-2026': '1708468290759-152162304651',
  'logo-parking-pictogrammes': '1717298812095-692414f0cb13',
  'place-bleu-parking-zone-bleue': '1766009048281-9019f38cc5d0',

  // ── Équipements & bollards ───────────────────────────────────────
  'arceau-parking-types-prix': '1768980543929-b9b29cb4938c',

  // ── Signalisation & réglementation ───────────────────────────────
  'code-de-la-route-marquage-au-sol': '1594850015290-2cd2d512a508',
  'panneaux-parking-types-reglementation': '1759771622472-4305102bfbe4',
  'signalisation-horizontale-et-verticale': '1767884161959-4419b050f814',
  'dos-dane-parking-reglementation-pose': '1698281363281-423654cf848f',
  'mise-en-conformite-parking-pmr': '1643930493375-6da00584e34f',

  // ── Marquage par secteur ─────────────────────────────────────────
  'marquage-au-sol-entreprise-industriel': '1772299121503-cd62a57e3a26',
  'marquage-au-sol-parking-prive': '1773063250524-38ac5eebd3c5',
  'marquage-au-sol-piste-cyclable': '1763462989567-bcd3dbc5a306',
  'marquage-au-sol-travaux-chantier': '1502412960062-395a1c0e966e',

  // ── Sols & peinture garage ───────────────────────────────────────
  'peinture-sol-garage-types-application': '1704786450243-fe590b6bc9d3',

  // ── Rampe PMR ────────────────────────────────────────────────────
  'rampe-pour-pmr-normes-types': '1576864333223-db90dadfb975',
}

/**
 * Returns the cover image URL for a guide, or null if no verified match.
 */
export function getGuideImage(slug: string): string | null {
  const id = IDS[slug]
  return id ? UNSPLASH(id) : null
}
