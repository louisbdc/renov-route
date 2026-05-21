/**
 * Safely serialize a JSON-LD payload for injection into a <script type="application/ld+json"> tag
 * via dangerouslySetInnerHTML.
 *
 * JSON.stringify does not escape "<", so a value containing "</script>" would break out of
 * the script tag. Escaping "<" as < is sufficient to prevent that and is a recognized
 * pattern in JSON-LD payloads served via HTML.
 */
export function safeJsonLd(payload: unknown): string {
  return JSON.stringify(payload).replace(/</g, '\\u003c')
}
