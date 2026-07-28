import Link from 'next/link'
import FAQSchema, { type FAQItem } from '@/components/FAQSchema'

/**
 * Contenu éditorial de la page /devis/.
 *
 * La page ne contenait qu'un formulaire : 115 impressions et 0 clic en 90 jours
 * en Search Console, alors que le cluster « devis … » (devis guidage parking,
 * devis signalisations horizontales, devis barrières de parking, devis marquage
 * automatique) pèse plus de 700 impressions sans aucune page pour l'absorber.
 *
 * Le bloc est placé SOUS le formulaire : le parcours de conversion reste
 * inchangé, on ajoute seulement la matière que Google attend d'une page de
 * devis (ce qu'elle contient, sur quoi se base le prix, sous quel délai).
 *
 * Tous les montants proviennent du guide /guides/prix-marquage-sol-parking/
 * et doivent rester synchronisés avec lui.
 */

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Le devis est-il vraiment gratuit et sans engagement ?',
    answer:
      "Oui. L'étude, le déplacement sur site et le chiffrage détaillé sont gratuits et ne vous engagent à rien. Vous recevez un document écrit que vous pouvez comparer librement à d'autres offres.",
  },
  {
    question: 'Sous quel délai vais-je recevoir mon devis ?',
    answer:
      "Sous 48 heures ouvrées après réception de votre demande. Si le chantier nécessite une visite sur site, nous convenons du rendez-vous dans ce même délai et le devis suit sous 48 heures après la visite.",
  },
  {
    question: 'Quel est le prix du marquage au sol d’un parking ?',
    answer:
      "Le marquage au sol se situe généralement entre 8 et 15 €/m² selon le support, le type de peinture et la surface. Pour des lignes seules (places, flèches), on raisonne au mètre linéaire, à partir de 2,50 €/ml. Une résine ou un thermoplastique coûte davantage mais dure plus longtemps.",
  },
  {
    question: 'Quelles informations dois-je fournir pour obtenir un chiffrage précis ?',
    answer:
      "Le type de site (parking, voirie, entrepôt), la surface approximative ou le nombre de places, l'état actuel du sol, et vos contraintes d'accès ou d'horaires. Un plan ou quelques photos accélèrent nettement le chiffrage.",
  },
  {
    question: 'Intervenez-vous en dehors de la région lyonnaise ?',
    answer:
      "Notre siège est à Tassin-la-Demi-Lune et nous intervenons quotidiennement sur la métropole lyonnaise et l'Auvergne-Rhône-Alpes. Nous nous déplaçons aussi partout en France pour les chantiers multi-sites et les enseignes nationales.",
  },
  {
    question: 'Le devis couvre-t-il aussi la signalisation verticale et les équipements ?',
    answer:
      "Oui. Un même devis peut regrouper le marquage au sol, les panneaux, les barrières, bornes et butées, ainsi que la réparation du support. Regrouper les lots sur une seule intervention réduit le coût total.",
  },
]

const INCLUDED = [
  {
    title: 'Le détail poste par poste',
    body: "Préparation du support, type de peinture ou de résine, surfaces et linéaires, quantités. Aucun forfait opaque : vous voyez sur quoi porte chaque euro.",
  },
  {
    title: 'Les références normatives',
    body: "Les produits retenus et leur conformité NF EN 1436, ainsi que les cotes réglementaires appliquées aux places PMR et aux cheminements.",
  },
  {
    title: 'Le planning d’intervention',
    body: "Durée du chantier, phasage si le site doit rester partiellement ouvert, et créneaux possibles (nuit, week-end) pour ne pas interrompre votre activité.",
  },
  {
    title: 'La durée de vie attendue',
    body: "Selon le produit choisi et le trafic du site, pour arbitrer entre coût immédiat et fréquence de renouvellement.",
  },
]

export default function DevisSeoContent() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <section className="py-16 sm:py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
            Ce que contient votre devis
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10">
            Un devis de marquage au sol n&apos;est pas qu&apos;un prix. C&apos;est le document
            qui vous permet de comparer deux offres à périmètre égal — et d&apos;éviter la
            mauvaise surprise du poste « préparation du support », souvent absent des
            chiffrages les plus bas.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mb-14">
            {INCLUDED.map(item => (
              <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-display">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
            Sur quoi se base le prix
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            Trois facteurs expliquent l&apos;essentiel de l&apos;écart entre deux chantiers
            comparables : l&apos;état du support, le produit retenu et la surface totale.
            Un sol dégradé demande un ragréage ou un rebouchage préalable ; une résine
            coûte plus cher à la pose qu&apos;une peinture routière mais tient trois à cinq
            fois plus longtemps ; et le prix au mètre baisse avec le volume.
          </p>
          <p className="text-slate-500 leading-relaxed mb-14">
            À titre d&apos;ordre de grandeur, le marquage se situe entre{' '}
            <strong className="text-[#0F172A]">8 et 15 €/m²</strong>, et à partir de{' '}
            <strong className="text-[#0F172A]">2,50 €/ml</strong> pour des lignes seules.
            Le détail complet par prestation figure dans notre{' '}
            <Link
              href="/guides/prix-marquage-sol-parking/"
              className="text-[#0F172A] font-semibold underline underline-offset-2 hover:text-[#FACC15] transition-colors"
            >
              guide des prix du marquage au sol
            </Link>
            .
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 font-display">
            Questions fréquentes sur le devis
          </h2>
          <div className="flex flex-col gap-6">
            {FAQ_ITEMS.map(item => (
              <div key={item.question} className="border-b border-slate-200 pb-6 last:border-0">
                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-display">
                  {item.question}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
