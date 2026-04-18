import Image from 'next/image'
import Link from 'next/link'

interface AuthorBylineProps {
  dateModified?: string
  variant?: 'full' | 'compact'
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function AuthorByline({ dateModified, variant = 'full' }: AuthorBylineProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span>Par</span>
        <Link
          href="/qui-sommes-nous"
          className="text-gray-200 hover:text-[#FACC15] transition-colors font-medium"
        >
          Xavier de Caumont
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-4 py-5 border-y border-slate-200 my-8">
      <Link
        href="/qui-sommes-nous"
        className="flex-shrink-0 relative block w-14 h-14 rounded-full overflow-hidden border border-slate-200"
      >
        <Image
          src="/assets/images/xavier-de-caumont.jpg"
          alt="Xavier de Caumont, fondateur de Rénov Route"
          fill
          sizes="56px"
          className="object-cover object-top"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-500 mb-1">Rédigé par</p>
        <Link
          href="/qui-sommes-nous"
          className="text-[#0F172A] font-semibold hover:text-[#FACC15] transition-colors"
        >
          Xavier de Caumont
        </Link>
        <p className="text-sm text-slate-500 mt-1">
          Fondateur de Rénov Route · 10+ ans d&apos;expertise marquage au sol · Certifié NF EN 1436
        </p>
        {dateModified && (
          <p className="text-xs text-slate-400 mt-2">
            Dernière mise à jour : {formatDate(dateModified)}
          </p>
        )}
      </div>
    </div>
  )
}
