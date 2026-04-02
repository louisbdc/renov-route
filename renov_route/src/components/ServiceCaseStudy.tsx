import type { ReactNode } from 'react'

interface CaseStudy {
  client: string
  problem: string
  solution: string
  result: string
  icon?: ReactNode
}

interface ServiceCaseStudyProps {
  title: string
  subtitle?: string
  cases: CaseStudy[]
  alt?: boolean
}

export default function ServiceCaseStudy({
  title,
  subtitle,
  cases,
  alt = false,
}: ServiceCaseStudyProps) {
  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-white/[0.025]' : 'bg-[#141922]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">{title}</h2>
          {subtitle && <p className="text-gray-400 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-[#1a1f2a] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {caseItem.icon && (
                    <div className="text-amber-400">{caseItem.icon}</div>
                  )}
                  <h3 className="font-semibold text-white text-lg">{caseItem.client}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-red-400 uppercase tracking-wider">Problème</span>
                    <p className="text-gray-400 text-sm mt-1">{caseItem.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Solution</span>
                    <p className="text-gray-400 text-sm mt-1">{caseItem.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Résultat</span>
                    <p className="text-gray-400 text-sm mt-1">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
