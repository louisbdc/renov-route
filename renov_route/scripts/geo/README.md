# Outils GEO

Mesure de la présence de Rénov Route dans les réponses des IA, et audit de citabilité des guides.
Aucun outil n'interroge un moteur IA : les réponses sont **posées et collées à la main**, car les
CGU d'OpenAI interdisent l'extraction automatisée. Aucune dépendance : Node 22 suffit.

```bash
# depuis renov_route/
node scripts/geo/analyze-answers.mjs init     # crée data/answers.md (n'écrase jamais)
node scripts/geo/analyze-answers.mjs report   # écrit reports/geo-gap-AAAA-MM-JJ.md
node scripts/geo/audit-citability.mjs         # écrit reports/citabilite-AAAA-MM-JJ.md
node --test scripts/geo/geo-gap.test.mjs
```

## Coller les réponses

Dans `data/answers.md`, coller chaque réponse sous le `---` de son prompt. Un bloc vide est ignoré :
on peut remplir le fichier en plusieurs fois.

```text
=== Quelle entreprise de marquage au sol recommandes-tu à Lyon ?
moteur: chatgpt
date: 2026-11-22
---
Le texte de la réponse, tel quel.

Sources :
- https://exemple.fr/article
- [Nom de la source](https://exemple.com/page)
```

- `moteur` : chatgpt, perplexity, gemini, etc. Pour un autre tirage ou moteur, dupliquer le bloc.
- `Sources :` seul sur sa ligne sépare le texte des sources : une marque présente seulement
  dessous compte comme **citée**, pas comme nommée. Les URL et domaines du texte sont aussi relevés.
- Poser les questions dans une conversation neuve, sans mémoire ni personnalisation.

## Configuration

- `data/prompts.csv` : `prompt,categorie,keyword`. Catégories : recommandation, comparaison, prix,
  reglementation, usage, local, marque. Les prompts `marque` sont des témoins, exclus de la part de voix.
- `data/brands.json` : marques suivies. `kind` vaut `own`, `direct` ou `market`. N'y ajouter qu'une
  entreprise vérifiée. Après un ajout, relancer `report` : rien n'est à recollecter.

## Lire l'audit de citabilité

Score sur 100, calculé sur le code des guides : réponse directe en tête (35), FAQ visible et
`FAQ_DATA` (20), passages chiffrés avec une source officielle (25), paragraphes de 15 à 120 mots (20).
C'est une heuristique de structure : elle ne juge pas l'exactitude du contenu.
