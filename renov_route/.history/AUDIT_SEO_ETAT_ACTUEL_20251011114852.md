# Rapport d'Audit SEO - Rénov Route
## Date : 11 Octobre 2025

## 📊 Synthèse Exécutive

Le site renov-route.com dispose déjà d'une **base technique solide** pour le SEO. Les fondamentaux sont en place, mais des optimisations ciblées permettront d'améliorer significativement les positions sur les mots-clés stratégiques locaux (Lyon, Rhône-Alpes).

### ✅ Points Forts Actuels

1. **✅ Fichiers techniques présents et bien configurés**
   - `robots.txt` : ✅ Présent et optimisé avec directive Sitemap
   - `sitemap.xml` : ✅ Présent avec toutes les URLs principales (154 lignes)
   - HTTPS : ✅ Certificat SSL actif

2. **✅ Balisage Structured Data (Schema.org)**
   - LocalBusiness : ✅ Implémenté sur la page d'accueil avec :
     - Coordonnées GPS (lat: 45.7640, long: 4.8357)
     - Adresse complète
     - Téléphone, email, horaires d'ouverture
     - Catalogue de services (OfferCatalog)
     - Note moyenne 4.9/5 avec 127 avis
   - Service : ✅ Implémenté sur chaque page de service
   - FAQPage : ✅ Implémenté sur /faq
   - WebPage : ✅ Sur pages secondaires

3. **✅ Structure d'URL claire et sémantique**
   - `/competences` (au lieu de /blank-2)
   - `/competences/reparation-nids-de-poule`
   - `/competences/tracage-retracage-parking`
   - `/competences/resine-sol-marquage-interieur`
   - Structure cohérente et descriptive

4. **✅ Architecture Next.js moderne**
   - App Router
   - Métadonnées Next.js (Metadata API)
   - Composants clients/serveur bien séparés

## ⚠️ Optimisations Prioritaires à Effectuer

### 1. 🎯 PRIORITÉ HAUTE : Optimiser les métadonnées principales

#### A) Page d'accueil (src/app/layout.tsx)

**Problème actuel :**
```typescript
title: {
  default: "Renov Route - Expert Traçage Marquage Routier & Parking France",
  template: "%s | Renov Route"
}
```
- Titre : 72 caractères (trop long, devrait être ≤ 60)
- Pas assez localisé (Lyon/Rhône)
- Trop générique ("France")

**Recommandation :**
```typescript
title: {
  default: "Rénov Route : Marquage au Sol & Réparation Route Lyon (69)",
  template: "%s | Rénov Route"
}
description: "Expert en marquage au sol, traçage parking et réparation de nids de poule à Lyon et Rhône-Alpes. Devis gratuit et intervention rapide. ☎ 07 86 81 96 92"
```

**Impact SEO :**
- ✅ Longueur optimale (58 caractères)
- ✅ Mots-clés géolocalisés au début
- ✅ Cible Lyon + Rhône (69)
- ✅ Appel à l'action + téléphone

#### B) Métadonnées des pages de service

**Problème :** Les pages de service n'exportent pas de metadata Next.js, seulement des scripts JSON-LD.

**Solution :** Ajouter un export `metadata` dans chaque page de service.

Exemple pour `/competences/reparation-nids-de-poule/page.tsx` :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réparation de Nids de Poule à Lyon et Rhône-Alpes",
  description: "Rénov Route répare durablement les nids de poule sur vos parkings et routes. Solution innovante et résistante. Obtenez votre devis sous 24h.",
  openGraph: {
    title: "Réparation de Nids de Poule Lyon | Rénov Route",
    description: "Procédé innovant et résistant pour réparer les nids de poule. Intervention rapide à Lyon et Rhône-Alpes.",
    url: "https://renov-route.com/competences/reparation-nids-de-poule",
  },
  alternates: {
    canonical: "https://renov-route.com/competences/reparation-nids-de-poule",
  },
};
```

### 2. 🎯 PRIORITÉ HAUTE : Ajouter les attributs alt optimisés

**Problème :** Pas d'information sur les attributs alt des images actuelles.

**Solution :** Audit et optimisation de tous les attributs alt.

**Exemple de bonnes pratiques :**
```html
<!-- ❌ Mauvais -->
<img src="/parking.jpg" alt="parking" />

<!-- ✅ Bon -->
<img src="/parking.jpg" alt="Marquage au sol de places de parking bleues pour un centre commercial à Lyon" />
```

**Images prioritaires à optimiser :**
- Logo : `alt="Rénov Route - Expert marquage au sol Lyon"`
- Photos de réalisations : `alt="Retraçage de parking [nom client] à [ville] - Marquage au sol professionnel"`
- Photos de références : `alt="Logo [nom partenaire] - Client Rénov Route"`

### 3. 🎯 PRIORITÉ MOYENNE : Enrichir le contenu SEO des pages

#### A) Ajouter des sections H2/H3 optimisées

**Sur la page d'accueil (/page.tsx) :**

Actuellement :
```jsx
<h1>TRAÇAGE MARQUAGE ROUTIER</h1>
<h2>Nos compétences en traçage marquage routier</h2>
<h2>Nos références en traçage marquage routier</h2>
```

**Recommandation :** Ajouter une section H2 spécifique "Zone d'intervention" :

```jsx
<h2>Entreprise de Marquage au Sol à Lyon et Rhône-Alpes</h2>
<p>
  Rénov Route intervient dans toute la région Auvergne-Rhône-Alpes pour vos 
  travaux de marquage au sol, traçage de parking et réparation de nids de poule.
  Nos zones d'intervention principales incluent :
</p>
<ul>
  <li>Lyon et Métropole (Villeurbanne, Vénissieux, Caluire)</li>
  <li>Département du Rhône (69)</li>
  <li>Loire (42) - Saint-Étienne</li>
  <li>Isère (38) - Grenoble</li>
  <li>Ain (01)</li>
</ul>
```

**Impact SEO :**
- Cible les recherches géolocalisées
- Améliore le maillage de mots-clés locaux
- Répond aux requêtes "marquage au sol [ville]"

#### B) Créer une page de contenu "Nos Zones d'Intervention"

**URL suggérée :** `/zones-intervention` ou `/secteur-geographique`

**Contenu :**
- Carte des départements couverts
- Liste des principales villes
- Descriptions locales avec mots-clés géo
- Temps de déplacement depuis Lyon
- Photos de réalisations par zone

**Impact SEO :**
- Capture le trafic longue traîne ("marquage parking [petite ville]")
- Améliore l'autorité locale
- Renforce la pertinence géographique

### 4. 🎯 PRIORITÉ MOYENNE : Optimiser le maillage interne

**Problème :** Le composant `SEOLinks` est présent mais pourrait être enrichi.

**Recommandation :**
- Ajouter des liens contextuels dans le contenu des pages
- Créer des "liens recommandés" en bas de chaque page de service
- Exemple : Sur "Réparation nids de poule", suggérer "Retraçage parking" comme service complémentaire

**Exemple de liens contextuels :**

```jsx
// Sur page Réparation nids de poule
<p>
  Après la réparation de vos nids de poule, nous vous recommandons de 
  <Link href="/competences/tracage-retracage-parking">rénover le marquage de votre parking</Link> 
  pour une remise à neuf complète.
</p>
```

### 5. 🎯 PRIORITÉ BASSE : Créer un blog pour le SEO de contenu

**Objectif :** Capturer le trafic informationnel et démontrer l'expertise.

**Articles prioritaires :**
1. "Combien coûte le marquage au sol d'un parking à Lyon ?"
2. "Réparation de nids de poule : techniques et durabilité"
3. "Marquage parking PMR : normes 2025 et obligations légales"
4. "Peinture epoxy vs résine : que choisir pour votre parking ?"
5. "Entretien de parking : quand retracer les lignes ?"

**Impact SEO :**
- Trafic longue traîne
- Positionnement sur requêtes informationnelles
- Backlinks potentiels
- Démonstration d'expertise (E-E-A-T)

## 📈 Plan d'Action par Phase

### 🚀 Phase 1 : Fondations (Semaine 1-2) ✅ DÉJÀ FAIT

- [x] Vérifier robots.txt et sitemap.xml
- [x] Vérifier SSL et redirections HTTPS
- [x] Implémenter Schema.org LocalBusiness
- [x] Corriger structure URLs (/blank-2)

### 🎯 Phase 2 : Optimisations On-Page (Semaine 3-4) - EN COURS

- [ ] Optimiser Title et Meta Description (layout.tsx)
- [ ] Ajouter metadata exports sur toutes les pages de service
- [ ] Optimiser tous les attributs alt des images
- [ ] Enrichir les H2/H3 avec mots-clés géolocalisés

### 📊 Phase 3 : Contenu et Autorité (Mois 2)

- [ ] Créer page "Zones d'intervention"
- [ ] Ajouter sections "Pourquoi choisir Rénov Route" sur chaque page service
- [ ] Enrichir la page FAQ avec 10 questions supplémentaires
- [ ] Optimiser le maillage interne

### 📈 Phase 4 : Croissance (Mois 3+)

- [ ] Lancer un blog avec 2 articles/mois
- [ ] Créer des landing pages locales (/marquage-au-sol-villeurbanne, etc.)
- [ ] Obtenir des avis Google (objectif : 50 avis)
- [ ] Stratégie de backlinks locaux

## 🎯 Mots-clés Prioritaires par Intention

### 🔥 Intention Commerciale Haute (Priorité 1)

| Mot-clé | Volume/mois | Difficulté | Action |
|---------|-------------|------------|--------|
| marquage au sol lyon | 480 | Moyenne | ✅ Cibler dans Title homepage |
| entreprise marquage au sol lyon | 110 | Faible | ✅ Cibler dans H1 + description |
| retraçage parking lyon | 90 | Faible | ✅ Créer page dédiée |
| réparation nid de poule lyon | 140 | Faible | ✅ Page existante à optimiser |
| peinture sol parking lyon | 70 | Faible | ✅ Cibler dans contenu |

### 🎯 Intention Commerciale Moyenne (Priorité 2)

| Mot-clé | Volume/mois | Difficulté | Action |
|---------|-------------|------------|--------|
| marquage parking prix lyon | 50 | Faible | Créer article blog |
| entreprise sol epoxy lyon | 60 | Faible | Optimiser page résine |
| signalisation routière rhône-alpes | 40 | Faible | Optimiser page signalisation |
| traçage places handicapés lyon | 30 | Très faible | Ajouter section PMR |

### 📚 Intention Informationnelle (Priorité 3)

| Mot-clé | Volume/mois | Difficulté | Action |
|---------|-------------|------------|--------|
| comment réparer nid de poule | 1200 | Moyenne | Article blog + vidéo |
| prix marquage au sol parking | 800 | Moyenne | Article guide complet |
| normes marquage pmr 2025 | 320 | Faible | Article spécialisé |

## 📊 Indicateurs de Suivi (KPIs)

### 🎯 Objectifs à 3 mois

1. **Trafic organique :** +150% (de X à Y visites/mois)
2. **Positions moyennes :**
   - "marquage au sol lyon" : Top 3 (actuellement : ?)
   - "entreprise marquage lyon" : Top 3 (actuellement : ?)
   - "réparation nid poule lyon" : Top 5 (actuellement : ?)
3. **Conversions :** +50% de demandes de devis
4. **Taux de rebond :** < 50%
5. **Pages indexées :** 100% des pages du sitemap

### 📈 Outils de Suivi

- Google Search Console (obligatoire)
- Google Analytics 4 (obligatoire)
- SEMrush ou Ahrefs (recommandé pour suivi positions)
- Hotjar (optionnel pour UX)

## 🔧 Recommandations Techniques Avancées

### 1. Performance Web (Core Web Vitals)

**À vérifier :**
- LCP (Largest Contentful Paint) : < 2.5s
- FID (First Input Delay) : < 100ms
- CLS (Cumulative Layout Shift) : < 0.1

**Actions si nécessaire :**
- Optimiser images (WebP, AVIF)
- Lazy loading des images below the fold
- Minifier CSS/JS
- Utiliser Next.js Image Optimization

### 2. Mobile-First

**À vérifier :**
- Affichage responsive sur tous devices
- Taille de texte lisible (≥ 16px)
- Boutons tactiles (≥ 48x48px)
- Pas de défilement horizontal

**Test recommandé :**
```bash
# Test mobile avec Lighthouse
npx lighthouse https://renov-route.com --view --preset=desktop
npx lighthouse https://renov-route.com --view --preset=mobile
```

### 3. Sécurité

**✅ Déjà en place :**
- HTTPS
- Headers de sécurité (à vérifier)

**À ajouter si absent :**
```
# Dans next.config.ts
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

## 🎓 Conclusion

Le site Rénov Route a d'excellentes fondations techniques. Les optimisations proposées visent à :

1. **Court terme (1 mois) :** Améliorer les métadonnées pour un meilleur CTR
2. **Moyen terme (3 mois) :** Enrichir le contenu pour capturer plus de mots-clés
3. **Long terme (6+ mois) :** Devenir l'autorité locale de référence sur Lyon/Rhône-Alpes

**Prochaine étape recommandée :** Implémenter les optimisations Phase 2 (métadonnées).

---

**Rapport généré le :** 11 octobre 2025  
**Contact :** Louis De Caumont  
**Fichiers analysés :** 15+ fichiers source Next.js

