# Renov'Route — SEO Guidelines

## Exigences de Longueur de Contenu

| Type de contenu | Longueur cible | Minimum | Maximum |
|---|---|---|---|
| Page de service | 1 000-1 500 mots | 800 | 2 000 |
| Article de blog guide | 1 500-2 500 mots | 1 200 | 3 000 |
| Article FAQ / explicatif | 800-1 200 mots | 600 | 1 500 |
| Étude de cas | 500-800 mots | 400 | 1 000 |
| Page pilier (pillar page) | 2 500-4 000 mots | 2 000 | 5 000 |

**Principe :** La qualité prime sur la quantité. Mieux vaut 1 200 mots utiles que 2 500 mots de remplissage.

---

## Optimisation des Mots-clés

### Recherche de mots-clés
Avant tout contenu :
1. Identifier le mot-clé principal (1 par page)
2. Identifier 3-5 mots-clés secondaires
3. Lister 5-10 mots-clés longue traîne / questions associées
4. Vérifier l'intention de recherche (informationnelle, commerciale, transactionnelle)
5. Consulter le fichier `target-keywords.md` pour les clusters existants

### Densité de mots-clés
- **Mot-clé principal :** 1-2% du contenu (naturellement intégré)
- **Mots-clés secondaires :** 0,5-1% chacun
- **Mots-clés LSI / sémantiques :** Intégrés naturellement sans contrainte de densité

### Placement obligatoire du mot-clé principal
1. **Titre H1** — Inclus naturellement
2. **Premier paragraphe** — Dans les 100 premiers mots
3. **Au moins un H2** — Dans un sous-titre
4. **Méta-titre** — En début si possible
5. **Méta-description** — Inclus naturellement
6. **Slug URL** — Présent dans l'URL
7. **Texte alternatif** — Sur au moins une image

### Bonnes pratiques d'intégration
- Utiliser des variantes naturelles (synonymes, formes conjuguées)
- Ne jamais forcer un mot-clé au détriment de la lisibilité
- Inclure des termes sémantiques liés au champ lexical (voir `target-keywords.md` section LSI)
- Varier les formulations entre les différentes pages pour éviter la cannibalisation

### Ce qu'il ne faut PAS faire
- Répéter le mot-clé exact de manière artificielle (keyword stuffing)
- Utiliser des variations forcées non naturelles
- Cibler le même mot-clé principal sur plusieurs pages
- Ignorer l'intention de recherche au profit du volume

---

## Structure du Contenu

### Hiérarchie des titres

**H1 :** Un seul par page. Inclut le mot-clé principal. 50-70 caractères.
```
Marquage au Sol de Parking à Lyon : Guide Complet et Tarifs
```

**H2 :** Sections principales (4-7 par article). Incluent des mots-clés secondaires.
```
Qu'est-ce que le marquage au sol de parking ?
Combien coûte un traçage de parking ?
Les normes à respecter pour le marquage PMR
```

**H3 :** Sous-sections (2-4 par H2). Plus spécifiques.
```
Prix du marquage au sol au m²
Facteurs influençant le coût
Les peintures certifiées NF EN 1436
```

### Template de structure d'article

```
# [H1 — Titre avec mot-clé principal]

[Introduction — 100-200 mots — Problème + contexte + promesse]

## [H2 — Section 1 : Définition / Contexte]
[150-400 mots]

## [H2 — Section 2 : Détail principal]
### [H3 — Sous-section 2.1]
### [H3 — Sous-section 2.2]

## [H2 — Section 3 : Aspects pratiques (prix, délais, processus)]
[Tableaux, listes, données chiffrées]

## [H2 — Section 4 : Normes / Réglementation]
[Si applicable au sujet]

## [H2 — Section 5 : Pourquoi faire appel à un professionnel]
[Bénéfices, risques du DIY, garanties]

## [H2 — FAQ — Questions fréquentes]
[3-5 questions en format question/réponse pour les featured snippets]

## [H2 — Conclusion]
[Résumé + CTA vers devis]
```

---

## Méta-éléments

### Titre Meta
- **Longueur :** 50-60 caractères (impératif)
- **Format :** [Mot-clé] + [Bénéfice/Lieu] | Rénov'Route
- **Règles :**
  - Mot-clé principal en début
  - Inclure "Lyon" ou la localisation quand pertinent
  - Terminer par "| Rénov'Route"
  - Pas de majuscules sur chaque mot (style phrase)

**Exemples :**
- `Marquage au sol parking Lyon | Devis gratuit | Rénov'Route`
- `Réparation nids de poule : résine durable | Rénov'Route`
- `Norme PMR parking : guide complet 2026 | Rénov'Route`

### Description Meta
- **Longueur :** 150-160 caractères (impératif)
- **Structure :** [Service/sujet] + [bénéfice] + [preuve/chiffre] + [CTA]
- **Règles :**
  - Inclure le mot-clé principal
  - Terminer par un CTA ou le numéro de téléphone
  - Pas de caractères spéciaux inutiles

**Exemples :**
- `Traçage de parking professionnel à Lyon. Peintures NF EN 1436, garantie 2 ans. 1 000+ projets réalisés. Devis gratuit sous 24h.`
- `Réparation durable de nids de poule par résine polyuréthane. Durée de vie 5-10 ans. Intervention rapide Lyon et Rhône-Alpes.`

### Slug URL
- Minuscules, tirets pour séparateurs
- 3-5 mots maximum
- Mot-clé principal inclus
- Pas d'accents, pas de caractères spéciaux, pas de mots vides (le, la, de, et)
- **Exemples :** `marquage-sol-parking-lyon`, `norme-pmr-parking`, `prix-resine-epoxy-sol`

---

## Stratégie de Maillage Interne

### Exigences
- **3-7 liens internes** par page de contenu
- Textes d'ancrage descriptifs et variés
- Consulter `internal-links-map.md` pour les pages cibles

### Types de liens à inclure
1. **Vers la page service pertinente** — Au moins 1 lien vers la compétence la plus liée
2. **Vers les réalisations** — Quand on mentionne un projet ou une référence client
3. **Vers la page devis** — Systématiquement en CTA de conclusion
4. **Vers la FAQ** — Pour les questions de prix ou de détails pratiques
5. **Vers d'autres articles** — Pour approfondir un sujet connexe

### Bonnes pratiques
- Lier dans le corps du texte (pas juste en fin d'article)
- Varier les textes d'ancrage (pas toujours le même pour la même page)
- Lier les nouvelles pages vers les anciennes ET les anciennes vers les nouvelles
- Pas plus de 2-3 liens par paragraphe

---

## Stratégie de Liens Externes

### Exigences
- **1-3 liens externes** par article
- Uniquement vers des sources fiables et pertinentes

### Vers quoi lier
- **Sources officielles :** Légifrance (normes et arrêtés), service-public.fr
- **Normes :** AFNOR, documents techniques réglementaires
- **Statistiques :** INSEE, Sécurité routière, études sectorielles
- **Organismes :** CERTU, associations professionnelles

### Standards de qualité
- Sources institutionnelles ou gouvernementales privilégiées
- Pas de liens vers des concurrents directs
- Vérifier que les liens fonctionnent (pas de 404)
- Attribut `rel="nofollow"` sur les liens commerciaux

---

## Optimisation de la Lisibilité

### Niveau de lecture cible
- **Objectif :** Accessible à un professionnel non spécialiste (gestionnaire de site, responsable technique, syndic)
- **Vocabulaire technique :** Utilisé mais toujours expliqué

### Structure des phrases
- Longueur moyenne : 15-20 mots
- Maximum : 30 mots
- Voix active privilégiée
- Sujet → verbe → complément

### Structure des paragraphes
- 2-4 phrases par paragraphe
- Une idée par paragraphe
- Ligne blanche entre chaque paragraphe

### Formatage pour la scannabilité
- Sous-titres toutes les 200-300 mots
- Listes à puces pour les énumérations
- **Gras** pour les points clés et les chiffres importants
- Tableaux pour les comparaisons et les données
- Espacement généreux (whitespace)

---

## Standards de Qualité (E-E-A-T)

### Expérience
- Mentionner des projets réels (avec permission client)
- Inclure des photos avant/après de chantier
- Citer des situations concrètes rencontrées sur le terrain

### Expertise
- Citer les normes applicables avec précision
- Détailler les procédés techniques utilisés
- Utiliser le vocabulaire professionnel du métier

### Autorité
- Références clients connues (Carrefour, Lidl, Armée de Terre...)
- Chiffres d'activité (1 000+ projets, 10+ ans)
- Certifications et garanties

### Fiabilité
- Informations vérifiables et à jour
- Prix indicatifs honnêtes (pas de fausses promesses)
- Transparence sur les limites et les conditions

---

## Optimisation des Images

### Exigences
- Au moins 2-3 images par page de contenu
- Format AVIF ou WebP (fallback JPEG)
- Dimensions adaptées au viewport (pas de surdimensionnement)
- Lazy loading pour les images hors viewport

### SEO des images
- **Nom de fichier :** Descriptif avec mots-clés (`marquage-parking-carrefour-lyon.avif`)
- **Texte alternatif :** Description + mot-clé + lieu si pertinent (125 caractères max)
- **Légende :** Quand elle apporte un contexte utile

**Exemples de texte alternatif :**
- "Retraçage de parking Intermarché Neuville-sur-Ain — 200 places par Rénov'Route"
- "Résine époxy antidérapante atelier industriel Lyon"
- "Réparation nid de poule résine polyuréthane avant/après"

---

## Optimisation Featured Snippets

### Snippet type « Réponse »
Pour les requêtes "qu'est-ce que", "combien", "comment" :
```
**Qu'est-ce que le marquage au sol de parking ?**
Le marquage au sol de parking consiste à tracer les lignes de délimitation
des places de stationnement, les passages piétons, les flèches directionnelles
et les zones réglementées (PMR, livraison, interdiction) à l'aide de peintures
certifiées NF EN 1436.
```

### Snippet type « Liste »
Pour les requêtes "étapes", "types de", "les meilleurs" :
```
**Les 6 étapes du traçage de parking :**
1. Analyse du site et relevé de mesures
2. Élaboration du plan de marquage
3. Préparation du support (nettoyage haute pression)
4. Application de la peinture certifiée
5. Contrôle qualité et alignement
6. Remise en circulation après séchage (1-3h)
```

### Snippet type « Tableau »
Pour les requêtes comparatives ou tarifaires :
```
| Type de marquage | Prix moyen au m² | Durée de vie |
|---|---|---|
| Peinture acrylique | 8-12 €/m² | 2-3 ans |
| Peinture thermoplastique | 12-18 €/m² | 4-6 ans |
| Résine époxy | 20-40 €/m² | 5-10 ans |
```

---

## Optimisation Mobile

### Règles mobile-first
- Tout le contenu doit être lisible sur mobile sans zoom
- Pas de tableaux trop larges (max 3-4 colonnes)
- Images responsives
- Boutons CTA facilement cliquables (min 44x44px)
- Numéro de téléphone cliquable (tel:)

### Contenu sur mobile
- Paragraphes encore plus courts (2-3 phrases max)
- Sous-titres fréquents pour le scroll
- CTA visible sans scroll excessif

---

## Stratégie de Rafraîchissement de Contenu

### Quand mettre à jour
- Changement de normes ou réglementation
- Changement de tarifs
- Nouvelles références clients ou réalisations
- Baisse de position sur un mot-clé ciblé
- Contenu de plus de 12 mois sans mise à jour

### Quoi mettre à jour
- Dates et années mentionnées dans le contenu
- Chiffres et statistiques
- Liens internes et externes (vérifier les 404)
- Ajouter de nouvelles sections si le sujet a évolué
- Optimiser les méta-titres et descriptions sous-performants

---

## Données Structurées (Schema.org)

### Schemas déjà implémentés
- **LocalBusiness** : Sur toutes les pages (coordonnées, horaires, zone)
- **Service** : Sur chaque page de compétence
- **FAQPage** : Sur la page FAQ et la homepage
- **BreadcrumbList** : Sur toutes les pages secondaires

### Schemas à ajouter pour le blog
- **Article** : Sur chaque article de blog
- **HowTo** : Sur les guides pas-à-pas
- **ItemList** : Sur les listes comparatives

---

## Checklist SEO pour Chaque Contenu

### Avant rédaction
- [ ] Mot-clé principal identifié et vérifié dans `target-keywords.md`
- [ ] Intention de recherche analysée (informer, comparer, acheter)
- [ ] 3-5 mots-clés secondaires listés
- [ ] Structure de l'article planifiée (H1, H2, H3)
- [ ] Pages internes à lier identifiées (`internal-links-map.md`)

### Pendant la rédaction
- [ ] Mot-clé principal dans le H1, premier paragraphe, un H2
- [ ] Mots-clés secondaires intégrés naturellement
- [ ] 3-7 liens internes placés dans le corps du texte
- [ ] 1-3 liens externes vers des sources fiables
- [ ] Paragraphes de 2-4 phrases, sous-titres tous les 200-300 mots
- [ ] Au moins un tableau, une liste ou un élément visuel
- [ ] CTA vers /devis en conclusion

### Méta-données
- [ ] Méta-titre : 50-60 caractères, mot-clé en début
- [ ] Méta-description : 150-160 caractères, mot-clé + CTA
- [ ] Slug URL : 3-5 mots, mot-clé principal, pas d'accents
- [ ] Texte alternatif sur toutes les images

### Qualité
- [ ] Ton conforme au brand voice (voir `brand-voice.md`)
- [ ] Terminologie conforme au style guide (voir `style-guide.md`)
- [ ] Chiffres et normes vérifiés
- [ ] Pas de contenu dupliqué d'une autre page
- [ ] Relecture orthographique et grammaticale
- [ ] Test sur mobile

### Post-publication
- [ ] Page indexée dans Google Search Console
- [ ] Liens internes ajoutés depuis les pages existantes vers le nouveau contenu
- [ ] Partage sur les réseaux sociaux (LinkedIn, Facebook)
- [ ] Suivi de position sur le mot-clé principal (J+7, J+30, J+90)
