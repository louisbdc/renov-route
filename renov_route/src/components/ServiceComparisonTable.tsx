interface ComparisonRow {
  label: string
  values: string[]
}

interface ServiceComparisonTableProps {
  title: string
  subtitle?: string
  headers: string[]
  rows: ComparisonRow[]
  highlightColumn?: number
  alt?: boolean
}

export default function ServiceComparisonTable({
  title,
  subtitle,
  headers,
  rows,
  highlightColumn,
  alt = false,
}: ServiceComparisonTableProps) {
  return (
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 font-display">{title}</h2>
          {subtitle && <p className="text-slate-500 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`text-left px-5 py-4 font-semibold ${
                      i === highlightColumn
                        ? 'text-[#FACC15] border-b-2 border-amber-500'
                        : 'text-[#0F172A] border-b border-slate-200'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-white transition-colors"
                >
                  <td className="px-5 py-4 text-slate-600 font-medium">{row.label}</td>
                  {row.values.map((value, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 ${
                        j + 1 === highlightColumn
                          ? 'text-amber-300'
                          : 'text-slate-500'
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
