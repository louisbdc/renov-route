import Link from 'next/link'
import { TbBook2, TbArrowRight } from 'react-icons/tb'

interface GuideLink {
  href: string
  title: string
}

interface RelatedGuidesProps {
  title?: string
  subtitle?: string
  guides: GuideLink[]
  className?: string
}

export default function RelatedGuides({
  title = 'Guides associés',
  subtitle = 'Approfondissez le sujet avec nos guides pratiques.',
  guides,
  className = '',
}: RelatedGuidesProps) {
  if (guides.length === 0) return null

  return (
    <section className={`py-20 sm:py-24 px-6 bg-[#F8FAFC] ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
            Documentation
          </span>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">
            {title}
          </h2>
          <p className="text-slate-500 text-base font-medium">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-4 p-6 bg-white border border-slate-200 card-éditorial-hover"
            >
              <TbBook2 size={20} className="text-[#FACC15] mt-0.5 shrink-0" />
              <span className="text-sm text-[#0F172A] font-semibold group-hover:text-[#FACC15] transition-colors leading-snug">
                {guide.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/guides/"
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#0F172A] border-b-2 border-[#0F172A] pb-1 hover:text-[#FACC15] hover:border-[#FACC15] transition-all"
          >
            Tous nos guides <TbArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/**
 * Mapping from competence slug to related guide links.
 * Used by competence pages to display contextual guide suggestions.
 */
export const COMPETENCE_GUIDES: Record<string, GuideLink[]> = {
  'tracage-retracage-parking': [
    { href: '/guides/prix-marquage-sol-parking', title: 'Prix marquage au sol parking : tarifs 2026' },
    { href: '/guides/reglementation-marquage-sol-parking', title: 'Réglementation marquage au sol parking' },
    { href: '/guides/couleur-marquage-sol-parking', title: 'Couleurs de marquage au sol : signification' },
    { href: '/guides/duree-vie-marquage-sol-parking', title: 'Durée de vie du marquage au sol' },
    { href: '/guides/peinture-marquage-sol-parking', title: 'Peinture marquage sol parking : guide complet' },
    { href: '/guides/comment-tracer-parking', title: 'Comment tracer un parking ?' },
    { href: '/guides/marquage-au-sol-parking-prive', title: 'Marquage au sol parking privé' },
    { href: '/guides/marquage-au-sol-entreprise-industriel', title: 'Marquage au sol entreprise & industriel' },
    { href: '/guides/marquage-sol-supermarche-grande-surface', title: 'Marquage sol supermarché & grande surface' },
    { href: '/guides/norme-nf-en-1436-marquage-routier', title: 'Norme NF EN 1436 : marquage routier' },
    { href: '/guides/dimension-place-de-parking-normes', title: 'Dimensions places de parking : normes' },
    { href: '/guides/passage-pieton-parking-norme', title: 'Passage piéton parking : normes' },
    { href: '/guides/marquage-au-sol-signification-couleurs', title: 'Marquage au sol : signification des couleurs' },
    { href: '/guides/signalisation-horizontale-lyon-marquage', title: 'Signalisation horizontale à Lyon' },
    { href: '/guides/code-de-la-route-marquage-au-sol', title: 'Code de la route & marquage au sol' },
    { href: '/guides/marquage-au-sol-travaux-chantier', title: 'Marquage au sol travaux & chantier' },
    { href: '/guides/marquage-au-sol-piste-cyclable', title: 'Marquage au sol piste cyclable' },
  ],
  'reparation-nids-de-poule': [
    { href: '/guides/enrobe-froid-vs-resine-nids-de-poule', title: 'Enrobé froid vs résine : comparatif nids de poule' },
    { href: '/guides/nid-de-poule-responsabilité-parking', title: 'Nid de poule & responsabilité parking' },
    { href: '/guides/nids-de-poule-hiver-2026-solutions', title: 'Nids de poule hiver 2026 : solutions' },
    { href: '/guides/reparer-nid-de-poule-soi-meme', title: 'Réparer un nid de poule soi-même' },
    { href: '/guides/reparation-chaussée-parking-methodes-prix', title: 'Réparation chaussée parking : méthodes & prix' },
    { href: '/guides/calendrier-entretien-parking', title: 'Calendrier d\'entretien parking' },
    { href: '/guides/entretien-parking-signes-renovation', title: 'Entretien parking : signes de rénovation' },
  ],
  'resine-sol-marquage-interieur': [
    { href: '/guides/resine-epoxy-ou-peinture-sol-comparatif', title: 'Résine époxy ou peinture sol : comparatif' },
    { href: '/guides/resine-sol-parking-prix-types', title: 'Résine sol parking : prix & types' },
    { href: '/guides/resine-sol-parking-souterrain', title: 'Résine sol parking souterrain' },
    { href: '/guides/peinture-sol-garage-types-application', title: 'Peinture sol garage : types & application' },
    { href: '/guides/sol-epoxy-entrepot-avantages-pose', title: 'Sol époxy entrepôt : avantages & pose' },
    { href: '/guides/revetement-sol-industriel-types-prix', title: 'Revêtement sol industriel : types & prix' },
    { href: '/guides/preparation-sol-avant-resine-epoxy', title: 'Préparation sol avant résine époxy' },
  ],
  'signalisation-verticale': [
    { href: '/guides/signalisation-parking-reglementation', title: 'Signalisation parking : réglementation' },
    { href: '/guides/signalisation-parking-copropriete', title: 'Signalisation parking copropriété' },
    { href: '/guides/signalisation-horizontale-et-verticale', title: 'Signalisation horizontale et verticale' },
    { href: '/guides/panneaux-parking-types-reglementation', title: 'Panneaux parking : types & réglementation' },
    { href: '/guides/panneau-limitation-vitesse-parking', title: 'Panneau limitation vitesse parking' },
    { href: '/guides/panneau-pmr-parking-types-obligations', title: 'Panneau PMR parking : types & obligations' },
    { href: '/guides/nouvelles-normes-signaletique-parking-2026', title: 'Nouvelles normes signalétique parking 2026' },
  ],
  'accessoires-parking': [
    { href: '/guides/ralentisseur-parking-norme', title: 'Ralentisseur parking : normes' },
    { href: '/guides/butee-parking-types-pose-prix', title: 'Butée parking : types, pose & prix' },
    { href: '/guides/barriere-parking-types-prix', title: 'Barrière parking : types & prix' },
    { href: '/guides/dos-dane-parking-reglementation-pose', title: 'Dos d\'âne parking : réglementation & pose' },
    { href: '/guides/arceau-parking-types-prix', title: 'Arceau parking : types & prix' },
    { href: '/guides/bumper-supermarche-protection-frigo', title: 'Bumper supermarché : protection frigo' },
  ],
  'conseil-expertise': [
    { href: '/guides/cout-renovation-parking', title: 'Coût rénovation parking' },
    { href: '/guides/renovation-parking-copropriete', title: 'Rénovation parking copropriété' },
    { href: '/guides/renovation-parking-entreprise', title: 'Rénovation parking entreprise' },
    { href: '/guides/normes-pmr-parking', title: 'Normes PMR parking' },
    { href: '/guides/mise-en-conformite-parking-pmr', title: 'Mise en conformité parking PMR' },
    { href: '/guides/accessibilite-parking-erp-normes', title: 'Accessibilité parking ERP : normes' },
    { href: '/guides/ombriere-photovoltaique-parking-2026', title: 'Ombrière photovoltaïque parking 2026' },
    { href: '/guides/parking-visiteurs-aménagement', title: 'Parking visiteurs : aménagement' },
    { href: '/guides/place-bleu-parking-zone-bleue', title: 'Place bleue parking : zone bleue' },
  ],
}

/**
 * Returns relevant guide links for a realisation based on its services.
 */
export function getGuidesForServices(services: string[]): GuideLink[] {
  const seen = new Set<string>()
  const guides: GuideLink[] = []

  for (const service of services) {
    const normalised = service.toLowerCase()

    let competenceKey: string | null = null
    if (normalised.includes('retraçage') || normalised.includes('marquage') || normalised.includes('passage piéton') || normalised.includes('places')) {
      competenceKey = 'tracage-retracage-parking'
    } else if (normalised.includes('résine') || normalised.includes('époxy') || normalised.includes('grenaillage') || normalised.includes('zébra')) {
      competenceKey = 'resine-sol-marquage-interieur'
    } else if (normalised.includes('signalisation') || normalised.includes('panneau')) {
      competenceKey = 'signalisation-verticale'
    } else if (normalised.includes('borne') || normalised.includes('bande') || normalised.includes('ralentisseur') || normalised.includes('butée')) {
      competenceKey = 'accessoires-parking'
    }

    if (competenceKey) {
      const competenceGuides = COMPETENCE_GUIDES[competenceKey] ?? []
      for (const g of competenceGuides.slice(0, 3)) {
        if (!seen.has(g.href)) {
          seen.add(g.href)
          guides.push(g)
        }
      }
    }
  }

  return guides.slice(0, 6)
}
