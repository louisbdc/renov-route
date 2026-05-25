/**
 * Convertit une URL (absolue ou déjà relative) en chemin interne relatif
 * terminé par un slash, conforme à `trailingSlash: true` de Next.
 *
 * Les fils d'Ariane stockent des URLs absolues car le schéma JSON-LD
 * `BreadcrumbList` les exige. Mais pour la navigation via `<Link>`, il faut
 * un chemin relatif : une URL absolue déclenche un rechargement complet
 * (pas de routing client), qui sur l'export statique servi en FTP retombe
 * sur le fallback racine — c.-à-d. la page d'accueil.
 */
export function toInternalHref(url: string): string {
  if (!url) return '/'
  const path = url.replace(/^https?:\/\/[^/]+/, '') || '/'
  return path.endsWith('/') ? path : `${path}/`
}
