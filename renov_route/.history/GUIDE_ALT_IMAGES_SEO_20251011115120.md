# Guide d'Optimisation des Attributs Alt pour le SEO
## Rénov Route

## 📚 Pourquoi les attributs alt sont importants ?

Les attributs `alt` (texte alternatif) servent **deux objectifs critiques** :

1. **Accessibilité :** Permet aux lecteurs d'écran de décrire les images aux personnes malvoyantes
2. **SEO :** Aide Google à comprendre le contenu des images et à les indexer dans Google Images

**Impact SEO :**
- Améliore le classement dans Google Images
- Renforce la pertinence thématique de la page
- Augmente les opportunités de mots-clés
- Améliore le score d'accessibilité (facteur de classement indirect)

## ✅ Bonnes Pratiques Générales

### 1. Soyez descriptif et précis

**❌ Mauvais :**
```html
<img src="/logo.avif" alt="logo" />
<img src="/parking.jpg" alt="image" />
<img src="/project1.jpg" alt="photo" />
```

**✅ Bon :**
```html
<img src="/logo.avif" alt="Rénov Route - Expert marquage au sol et réparation route Lyon" />
<img src="/parking.jpg" alt="Marquage au sol de places de parking bleues pour un centre commercial à Lyon" />
<img src="/project1.jpg" alt="Retraçage de parking Lidl à Vienne - Marquage au sol professionnel" />
```

### 2. Incluez des mots-clés pertinents (mais naturellement)

**Mots-clés prioritaires à inclure :**
- Localisation : "Lyon", "Rhône-Alpes", "Villeurbanne", etc.
- Services : "marquage au sol", "traçage parking", "réparation nid de poule", etc.
- Type de client : "centre commercial", "entreprise", "collectivité", etc.

**❌ Keyword stuffing (à éviter) :**
```html
<img alt="marquage sol lyon parking lyon traçage lyon entreprise lyon marquage route lyon" />
```

**✅ Naturel et informatif :**
```html
<img alt="Marquage au sol professionnel d'un parking d'entreprise à Lyon avec places PMR" />
```

### 3. Longueur optimale

- **Idéal :** 5-15 mots (60-125 caractères)
- **Maximum :** 125 caractères (limite des lecteurs d'écran)
- **Minimum :** 3-4 mots significatifs

### 4. Évitez les redondances

**❌ Mauvais :**
```html
<!-- "Image de" est redondant -->
<img alt="Image de marquage de parking" />
<img alt="Photo d'un parking" />
```

**✅ Bon :**
```html
<img alt="Marquage de parking fraîchement réalisé" />
<img alt="Parking d'entreprise avec lignes blanches neuves" />
```

### 5. Images décoratives

Si une image est purement décorative (ne transmet pas d'information), utilisez un alt vide :

```html
<img src="/decoration.svg" alt="" role="presentation" />
```

## 🎯 Templates par Type d'Image

### 1. Logo de l'entreprise

**Template :**
```
Rénov Route - Expert [service principal] [localisation]
```

**Exemples :**
```html
<img alt="Rénov Route - Expert marquage au sol et réparation route Lyon" />
<img alt="Rénov Route - Entreprise de traçage parking Rhône-Alpes" />
```

### 2. Photos de réalisations

**Template :**
```
[Action] [nom projet/client] à [ville] - [type de travail]
```

**Exemples :**
```html
<img alt="Retraçage de parking Lidl à Vienne - Marquage au sol professionnel" />
<img alt="Réparation de nids de poule Centre Commercial Ecully - Enrobé résine" />
<img alt="Marquage places handicapées PMR Intermarché Neuville - Signalisation conforme" />
<img alt="Pose de résine de sol epoxy garage industriel Lyon 3ème arrondissement" />
```

### 3. Photos avant/après

**Template :**
```
[Avant/Après] [type de travaux] [lieu] - [résultat]
```

**Exemples :**
```html
<!-- Image "Avant" -->
<img alt="Parking usé avant retraçage - Lignes effacées et nids de poule visibles" />

<!-- Image "Après" -->
<img alt="Parking rénové après retraçage - Marquage au sol neuf et nids de poule réparés" />
```

### 4. Logos de partenaires/clients

**Template :**
```
Logo [nom partenaire] - Client Rénov Route [type de service]
```

**Exemples :**
```html
<img alt="Logo Lidl - Client Rénov Route pour marquage au sol et signalisation" />
<img alt="Logo Intermarché - Client Rénov Route pour traçage de parking" />
<img alt="Logo EM Lyon Business School - Client Rénov Route pour accessibilité PMR" />
```

### 5. Photos d'équipe

**Template :**
```
[Nom personne] - [fonction] chez Rénov Route [localisation]
```

**Exemples :**
```html
<img alt="Xavier De Caumont - Gérant de Rénov Route à Lyon" />
<img alt="Équipe Rénov Route sur un chantier de marquage au sol à Villeurbanne" />
```

### 6. Équipements et matériaux

**Template :**
```
[Équipement/matériau] pour [utilisation] - Rénov Route
```

**Exemples :**
```html
<img alt="Machine de traçage thermoplastique pour marquage au sol parking" />
<img alt="Résine époxy professionnelle pour réparation de nids de poule" />
<img alt="Peinture routière haute résistance pour marquage parking extérieur" />
```

### 7. Images techniques (schémas, plans)

**Template :**
```
[Type de document] [sujet] - [objectif]
```

**Exemples :**
```html
<img alt="Plan de marquage parking avec dimensions des places et zones PMR" />
<img alt="Schéma technique d'installation de bornes anti-stationnement" />
<img alt="Normes de marquage places handicapées PMR selon réglementation 2025" />
```

## 📋 Checklist d'Optimisation par Page

### Page d'accueil

- [ ] Logo header : ✅ Optimisé
- [ ] Image hero/background : Ajouter description contextuelle
- [ ] Logos partenaires : ✅ Optimisé
- [ ] Photos de services (si présentes)

### Pages de services

- [ ] Image hero de la page
- [ ] Photos d'exemples de réalisations
- [ ] Schémas techniques (si présents)
- [ ] Photos avant/après (si présentes)

### Page Réalisations

- [ ] Miniatures de projets (CaseCard)
- [ ] Images plein écran (Lightbox)
- [ ] Images de galerie (ImageGallery)
- [ ] Featured case images

### Page Qui sommes-nous

- [ ] Photo de l'équipe
- [ ] Photo du gérant
- [ ] Images des équipements

## 🔧 Implémentation Technique

### Next.js Image Component

```tsx
import Image from 'next/image';

// ✅ Bon exemple avec Next.js Image
<Image
  src="/realisations/lidl-vienne.avif"
  alt="Retraçage de parking Lidl à Vienne - Marquage au sol professionnel"
  width={800}
  height={600}
  quality={85}
  priority={false}
  loading="lazy"
/>
```

### Balise img standard

```html
<!-- ✅ Bon exemple avec img standard -->
<img 
  src="/assets/images/parking-lyon.avif" 
  alt="Marquage au sol de parking d'entreprise à Lyon avec places PMR conformes"
  width="800"
  height="600"
  loading="lazy"
/>
```

### Images de background CSS

⚠️ **Important :** Les images de background CSS ne peuvent pas avoir d'attribut alt.

**Solution :** Si l'image transmet une information importante, ajoutez un texte alternatif accessible :

```tsx
<section 
  style={{ backgroundImage: 'url(/hero.avif)' }}
  role="img"
  aria-label="Parking fraîchement marqué avec lignes blanches et places PMR à Lyon"
>
  {/* Contenu de la section */}
</section>
```

## 🎯 Mots-clés SEO à Prioriser dans les Alt

### Mots-clés locaux (priorité haute)

- Lyon / Rhône-Alpes / Villeurbanne
- Rhône / 69 / Auvergne-Rhône-Alpes
- Villes spécifiques : Vienne, Saint-Étienne, Grenoble, etc.

### Mots-clés de services (priorité haute)

- **Marquage :** marquage au sol, traçage parking, retraçage parking, marquage routier
- **Réparation :** réparation nid de poule, rebouchage nid de poule, réparation enrobé
- **Résine :** résine sol, peinture epoxy, revêtement epoxy, sol epoxy
- **PMR :** places handicapées, accessibilité PMR, normes PMR, places PMR

### Mots-clés sectoriels (priorité moyenne)

- centre commercial, entreprise, industrie, collectivité
- parking extérieur, parking couvert, parking souterrain
- signalisation horizontale, signalisation verticale
- entrepôt, garage, magasin, usine

### Qualificatifs (priorité basse)

- professionnel, durable, résistant, conforme, innovant
- haute qualité, longue durée, rapide, efficace

## 📊 Audit des Images Actuelles

### Status des composants

| Composant | Fichier | Status | Action requise |
|-----------|---------|--------|----------------|
| Header Logo | `Header.tsx` | ✅ Optimisé | Aucune |
| Partners Banner | `PartnersBanner.tsx` | ✅ Optimisé | Aucune |
| Realisation Cards | `CaseCard.tsx` | ⚠️ À vérifier | Audit nécessaire |
| Image Gallery | `ImageGallery.tsx` | ⚠️ À vérifier | Audit nécessaire |
| Lightbox | `Lightbox.tsx` | ⚠️ À vérifier | Audit nécessaire |
| SEO Project Card | `SEOProjectCard.tsx` | ⚠️ À vérifier | Audit nécessaire |
| Featured Case | `FeaturedCase.tsx` | ⚠️ À vérifier | Audit nécessaire |

### Prochaines étapes

1. ✅ **Fait :** Optimiser Header logo
2. ✅ **Fait :** Optimiser PartnersBanner
3. ⏳ **À faire :** Auditer et optimiser les composants de réalisations
4. ⏳ **À faire :** Créer une fonction utilitaire `generateProjectAlt(project)` pour standardiser
5. ⏳ **À faire :** Documenter dans le code avec des commentaires les bonnes pratiques

## 🚀 Fonction Utilitaire Recommandée

Créer un helper pour générer automatiquement des attributs alt cohérents :

```typescript
// lib/seo-utils.ts

export function generateProjectImageAlt(
  clientName: string,
  city: string,
  serviceType: string,
  isAfter: boolean = true
): string {
  const prefix = isAfter ? "Résultat final" : "Avant travaux";
  return `${prefix} ${serviceType} ${clientName} à ${city} - Rénov Route`;
}

// Utilisation :
const alt = generateProjectImageAlt("Lidl", "Vienne", "retraçage de parking", true);
// Résultat : "Résultat final retraçage de parking Lidl à Vienne - Rénov Route"
```

## 📈 Impact SEO Attendu

Après optimisation complète des attributs alt :

1. **Court terme (1 mois) :**
   - Amélioration du score d'accessibilité
   - Indexation des images dans Google Images

2. **Moyen terme (3 mois) :**
   - Trafic depuis Google Images (+10-20%)
   - Amélioration du classement sur mots-clés locaux

3. **Long terme (6+ mois) :**
   - Autorité renforcée sur "marquage au sol Lyon"
   - Trafic qualifié depuis recherche d'images

## 🔍 Outils de Validation

### Audit automatique
```bash
# Trouver toutes les images sans alt
grep -r '<img[^>]*>' src/ | grep -v 'alt='

# Trouver les alt vides ou trop courts
grep -r 'alt=""' src/
grep -r 'alt="[^"]{1,10}"' src/
```

### Outils en ligne
- **WAVE** : https://wave.webaim.org/ (accessibilité)
- **Google Lighthouse** : Audit de performance et SEO
- **Screaming Frog** : Audit SEO complet incluant les images

## ✅ Validation Finale

Avant de considérer l'optimisation terminée, vérifier :

- [ ] Toutes les images ont un attribut alt
- [ ] Aucun alt vide sur images informationnelles
- [ ] Alt descriptifs (≥ 5 mots)
- [ ] Mots-clés naturellement intégrés
- [ ] Cohérence avec le contenu de la page
- [ ] Pas de keyword stuffing
- [ ] Format : Description concise + contexte + localisation

---

**Document créé le :** 11 octobre 2025  
**Dernière mise à jour :** 11 octobre 2025  
**Auteur :** Louis De Caumont  
**Version :** 1.0

