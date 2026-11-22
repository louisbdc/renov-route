import type { FAQItem } from '@/components/FAQSchema'

interface QuestionVariantsProps {
  items: FAQItem[]
}

/** Rend visibles les formulations déclarées en `alternateName` dans le schéma FAQPage. */
export default function QuestionVariants({ items }: QuestionVariantsProps) {
  const itemsWithVariants = items.filter(item => item.variants?.length)
  if (itemsWithVariants.length === 0) return null

  return (
    <details className="mt-10 border border-slate-200 bg-slate-50 p-5 rounded-sm">
      <summary className="cursor-pointer font-bold text-[#0F172A]">
        Ce guide répond aussi à ces questions
      </summary>
      <dl className="mt-4 space-y-4 text-sm text-slate-700">
        {itemsWithVariants.map(item => (
          <div key={item.question}>
            <dt className="font-semibold text-[#0F172A]">{item.question}</dt>
            <dd className="mt-1">Autres formulations : {item.variants?.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </details>
  )
}
