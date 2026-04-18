import type { ReactNode } from 'react'
import Image from 'next/image'

interface Product {
  name: string
  description: string
  image?: string
  icon?: ReactNode
  specs?: string[]
}

interface ServiceProductCatalogProps {
  title: string
  subtitle?: string
  products: Product[]
  cols?: 2 | 3 | 4
  alt?: boolean
}

export default function ServiceProductCatalog({
  title,
  subtitle,
  products,
  cols = 3,
  alt = false,
}: ServiceProductCatalogProps) {
  const gridCols =
    cols === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : cols === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className={`py-20 sm:py-28 px-6 ${alt ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">{title}</h2>
          {subtitle && <p className="text-slate-500 text-base sm:text-lg max-w-2xl font-medium">{subtitle}</p>}
        </div>

        <div className={`grid gap-px bg-slate-200 border border-slate-200 ${gridCols}`}>
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white hover:bg-[#F8FAFC] overflow-hidden transition-colors group"
            >
              {product.image && (
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {product.icon && (
                    <div className="text-[#FACC15]">{product.icon}</div>
                  )}
                  <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] group-hover:text-[#FACC15] transition-colors">{product.name}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">{product.description}</p>
                {product.specs && product.specs.length > 0 && (
                  <ul className="space-y-1.5">
                    {product.specs.map((spec, j) => (
                      <li key={j} className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 bg-[#FACC15] flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
