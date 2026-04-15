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
    <section className={`py-16 sm:py-20 px-4 ${alt ? 'bg-[#0C0F14]' : 'bg-[#0a0d11]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">{title}</h2>
          {subtitle && <p className="text-gray-400 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
        </div>

        <div className={`grid gap-5 ${gridCols}`}>
          {products.map((product, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-[#0a0d11] overflow-hidden hover:border-amber-500/30 transition-colors group"
            >
              {product.image && (
                <div className="relative aspect-square bg-[#0a0d11]">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  {product.icon && (
                    <div className="text-amber-400">{product.icon}</div>
                  )}
                  <h3 className="font-semibold text-white">{product.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{product.description}</p>
                {product.specs && product.specs.length > 0 && (
                  <ul className="space-y-1">
                    {product.specs.map((spec, j) => (
                      <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
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
