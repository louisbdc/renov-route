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
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#0C0F14]' : 'bg-[#141922]'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">{title}</h2>
          {subtitle && <p className="text-gray-400 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1e2330]">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`text-left px-5 py-4 font-semibold ${
                      i === highlightColumn
                        ? 'text-amber-400 border-b-2 border-amber-500'
                        : 'text-white border-b border-white/10'
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
                  className="border-b border-white/5 last:border-b-0 hover:bg-[#1a1f2a] transition-colors"
                >
                  <td className="px-5 py-4 text-gray-300 font-medium">{row.label}</td>
                  {row.values.map((value, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 ${
                        j + 1 === highlightColumn
                          ? 'text-amber-300'
                          : 'text-gray-400'
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
