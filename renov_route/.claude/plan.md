# Plan : Style uniforme + thème moins sombre

## Requête
Appliquer le même style propre (déjà fait sur /competences) au reste du site, ET légèrement alléger le thème sombre sur TOUTES les pages (y compris competences).

---

## Phase 1 — Thème : alléger le fond (globals.css)

**Fichier** : `src/app/globals.css`

- `--background`: `#0C0F14` → `#141922` (fond principal légèrement plus clair)
- `animated-gradient-slow`: couleurs de `#1f2937, #374151, #4b5563, #1f2937` → `#1a2435, #243044, #2d3a4f, #1a2435` (nuances bleu-gris légèrement plus claires)
- Pas d'autre changement dans globals.css

---

## Phase 2 — ServicePageLayout (competences + slugs)

**Fichier** : `src/components/ServicePageLayout.tsx`

- Sections avec `bg-gray-900` → `bg-[#141922]` (ou `bg-gray-900/80`)
- Sections avec `bg-gray-800` → utiliser une couleur légèrement plus claire
- Réduction de l'opacité des bg-gray-X des sections pour laisser transparaître le fond plus clair

---

## Phase 3 — Homepage (`src/app/page.tsx`)

Problèmes actuels :
- 2 services avec emojis (🎯, 🏗️) + gradient boxes colorées
- 4 sections avec `blur-3xl` blobs décoratifs
- Titres de sections wrappés dans `glassmorphism-card` (inutile)
- Section contact wrappée en `glassmorphism-card`
- Section FAQ wrappée en `glassmorphism-card`
- Section backgrounds : `from-gray-900 via-gray-800 to-gray-900`

Changements :
- Remplacer emojis + gradient → icônes SVG Tabler (`TbTarget`, `TbParking`)
- Cartes de services : même style que ServicePageLayout (`border border-white/10 bg-white/[0.03]`)
- Supprimer tous les blobs `blur-3xl`
- Sections headings : simple `<h2>` sans glassmorphism card autour
- Contact section : supprimer le glassmorphism autour, style clean avec icônes sky-500/20
- FAQ section : même style que `ServiceFAQ` (border-left sky-500/40)
- Alléger backgrounds de sections (`from-gray-800 via-gray-900 to-gray-800` → supprimer ou simplifier)

---

## Phase 4 — Qui-sommes-nous (`src/app/qui-sommes-nous/page.tsx`)

Problèmes actuels :
- Pattern `isSafari ? (static JSX) : (motion.JSX)` répété 3× (200 lignes de duplication)
- Section en `animated-gradient-slow`
- 3 cartes en `glassmorphism-card`

Changements :
- Éliminer `isSafari` ternary → utiliser `MotionDiv` de `MotionWrapper` (comme les autres pages)
- Remplacer `animated-gradient-slow` par bg solide
- Remplacer `glassmorphism-card` → `border border-white/10 bg-white/[0.03] rounded-2xl`
- Photo de Xavier de Caumont : garder, mais dans un container clean (pas glassmorphism)
- Résultat : ~160 lignes → ~100 lignes

---

## Phase 5 — Devis (`src/app/devis/page.tsx`)

Problèmes actuels :
- Section principale en `animated-gradient-slow`
- Formulaire wrappé en `glassmorphism-card`
- Section avantages avec `bg-gray-800`
- Avantages : icônes dans cercle `bg-primary-500` plein → plus discret

Changements :
- Supprimer `animated-gradient-slow` → bg neutre
- Formulaire wrapper : `glassmorphism-card` → `border border-white/10 bg-white/[0.03] rounded-2xl`
- Avantages : icônes `bg-sky-500/20` (comme ServicePageLayout features)
- Succès state : supprimer emoji `📧` → SVG icon
- Section avantages `bg-gray-800` → aligné avec thème

---

## Phase 6 — FAQ (`src/app/faq/page.tsx`)

Problèmes actuels :
- Utilise `import { motion } from 'framer-motion'` directement (pas MotionDiv)
- Hero section : triple couche de glassmorphism overlay (`backdrop-blur-sm` + gradient layers)
- Sections avec `from-gray-800 via-gray-900 to-gray-800`
- Boutons avec `bg-white/10 backdrop-blur-md` styles mixés

Changements :
- `motion.h1`, `motion.p`, `motion.div` → `MotionH1`, `MotionP`, `MotionDiv` de `MotionWrapper`
- Supprimer les couches glassmorphism overlay dans le hero
- Alléger section backgrounds
- Boutons CTA : style cohérent (sky-500 primary + ghost secondary)

---

## Phase 7 — Réalisations (`src/app/realisations/page.tsx`)

Minimal :
- `animated-gradient-slow` → bg neutre
- Suspense fallback : supprimer `glassmorphism-card` → spinner simple

---

## Phase 8 — Footer (`src/components/Footer.tsx`)

- `bg-gray-800` → légèrement plus clair pour correspondre au thème allégé

---

## Ce qu'on NE touche PAS

- `Header.tsx` : déjà propre, rien à changer
- Logique de formulaire dans `devis/page.tsx` (SecureInput, SecureTextarea, validation)
- `ClientRealisationsContent` (portfolio de réalisations)
- Structured data / SEO metadata
- `ServicePageLayout.tsx` animations

---

## Ordre d'exécution

1. globals.css (base du thème)
2. ServicePageLayout.tsx (competences)
3. page.tsx (homepage)
4. qui-sommes-nous/page.tsx
5. devis/page.tsx
6. faq/page.tsx
7. realisations/page.tsx
8. Footer.tsx
9. Build check
