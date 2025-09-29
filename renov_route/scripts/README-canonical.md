# Script de nettoyage des balises canoniques

Ce script permet de détecter et supprimer les balises canoniques en double dans votre projet Next.js.

## Problème résolu

Les balises canoniques en double peuvent causer des problèmes SEO et de performance. Ce script :

1. **Détecte les doublons** dans les fichiers HTML générés (dossier `out`)
2. **Analyse les fichiers source** `head.tsx` pour identifier les conflits potentiels
3. **Supprime les doublons** en gardant seulement la balise canonique dans la section `<head>`
4. **Nettoie les fichiers source** pour éviter les conflits futurs

## Utilisation

### Script principal : `clean-canonical-tags.js`

```bash
# Analyser seulement (recommandé)
node scripts/clean-canonical-tags.js

# Analyser et nettoyer les fichiers head.tsx
node scripts/clean-canonical-tags.js --clean-head

# Afficher l'aide
node scripts/clean-canonical-tags.js --help
```

### Script simple : `remove-duplicate-canonical.js`

```bash
# Version simple pour nettoyer seulement les fichiers HTML
node scripts/remove-duplicate-canonical.js
```

## Fonctionnalités

### 🔍 Détection automatique
- Scanne tous les fichiers HTML dans le dossier `out`
- Identifie les balises canoniques en double
- Analyse les fichiers `head.tsx` pour les conflits potentiels

### 🧹 Nettoyage intelligent
- Supprime les balises canoniques du `<body>` (gardent celles du `<head>`)
- Supprime les doublons dans le `<head>` (garde la première)
- Nettoie les fichiers `head.tsx` si nécessaire

### 📊 Rapport détaillé
- Nombre de fichiers traités
- Modifications appliquées
- Problèmes détectés
- Résumé des actions

## Exemples de sortie

```
🔍 Script de nettoyage des balises canoniques
=============================================

📁 Traitement des fichiers HTML générés...
📁 15 fichier(s) HTML trouvé(s)

📄 Traitement: competences/conseil-expertise/index.html
  - Trouvé 1 balise(s) canonique(s) dans <head>
  - Trouvé 2 balise(s) canonique(s) dans <body>
  - Supprimé 2 balise(s) canonique(s) du <body>
  ✅ 2 modification(s) appliquée(s)

📊 RAPPORT FINAL
================
📁 Fichiers HTML traités:
  - Total: 15
  - Modifiés: 1
  - Modifications: 2

✅ Nettoyage terminé avec succès
```

## Sources de balises canoniques

Le script gère plusieurs sources de balises canoniques :

1. **Fichiers `head.tsx`** : Balises statiques générées par Next.js
2. **JavaScript côté client** : Balises ajoutées dynamiquement
3. **Composants SEO** : `ClientSEOHead`, `SEOHead`, etc.

## Prévention des conflits

Pour éviter les doublons à l'avenir :

1. **Utilisez un seul composant SEO** par page
2. **Évitez les fichiers `head.tsx`** si vous utilisez des composants SEO
3. **Vérifiez régulièrement** avec le script
4. **Intégrez le script** dans votre pipeline de build

## Intégration dans le pipeline

Ajoutez le script à votre `package.json` :

```json
{
  "scripts": {
    "build": "next build && node scripts/clean-canonical-tags.js",
    "clean-canonical": "node scripts/clean-canonical-tags.js --clean-head"
  }
}
```

## Dépannage

### Aucune modification détectée
- Vérifiez que le dossier `out` existe
- Assurez-vous que les fichiers HTML contiennent des balises canoniques
- Vérifiez la syntaxe des balises canoniques

### Erreurs de permissions
```bash
chmod +x scripts/clean-canonical-tags.js
chmod +x scripts/remove-duplicate-canonical.js
```

### Fichiers non trouvés
- Vérifiez que vous êtes dans le répertoire racine du projet
- Assurez-vous que le dossier `src` existe pour l'analyse des `head.tsx`

## Support

Pour toute question ou problème :
1. Vérifiez les logs du script
2. Testez avec `--help` pour voir les options
3. Vérifiez la syntaxe des balises canoniques dans vos fichiers
