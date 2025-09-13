# Mesures de Sécurité - Renov Route

## Vue d'ensemble

Ce document décrit les mesures de sécurité mises en place pour protéger l'application Renov Route contre les attaques XSS et autres vulnérabilités web courantes, tout en préservant la fonctionnalité des espaces dans les formulaires.

## 🔒 Mesures de Protection XSS

### 1. Sanitisation des Entrées Utilisateur

**Fichier :** `src/lib/security.ts`

- **DOMPurify** : Utilisé pour nettoyer le contenu HTML malveillant
- **Configuration stricte** : Seuls les tags et attributs sûrs sont autorisés
- **Préservation des espaces** : Les espaces et caractères normaux sont conservés
- **Échappement HTML** : Caractères spéciaux échappés pour prévenir l'injection

```typescript
// Exemple de sanitisation
const clean = DOMPurify.sanitize(input, DOMPURIFY_CONFIG);
return clean
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  // ... autres échappements
```

### 2. Validation des Formulaires

**Fichier :** `src/lib/form-validation.ts`

- **Validation stricte** : Chaque champ est validé selon son type
- **Longueur des champs** : Limites min/max pour chaque type de données
- **Format spécifique** : Validation des emails, téléphones, codes postaux
- **Préservation des espaces** : Les espaces dans les noms, adresses, messages sont conservés

```typescript
// Exemple de validation de nom
export function sanitizeName(name: string): string {
  const cleaned = name
    .trim()
    .replace(/[<>\"'&]/g, '') // Supprime les caractères HTML dangereux
    .replace(/[^\w\sàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞß]/g, '');
  // Garde lettres, espaces et accents
}
```

### 3. Composants Sécurisés

**Fichier :** `src/components/SecureForm.tsx`

- **SecureForm** : Wrapper sécurisé pour tous les formulaires
- **SecureInput** : Champs de saisie sécurisés
- **SecureTextarea** : Zones de texte sécurisées
- **SecureCheckbox** : Cases à cocher sécurisées
- **Gestion d'erreurs** : Messages d'erreur échappés et sécurisés

## 🛡️ Headers de Sécurité

### Configuration Next.js

**Fichier :** `next.config.ts`

#### Content Security Policy (CSP)
```typescript
"Content-Security-Policy": [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https:",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join('; ')
```

#### Autres Headers de Sécurité
- **X-Frame-Options** : `DENY` - Empêche l'embedding dans des iframes
- **X-Content-Type-Options** : `nosniff` - Empêche le MIME sniffing
- **X-XSS-Protection** : `1; mode=block` - Protection XSS du navigateur
- **Referrer-Policy** : `strict-origin-when-cross-origin` - Contrôle des référents
- **Strict-Transport-Security** : Force HTTPS avec preload
- **Permissions-Policy** : Désactive les APIs sensibles (caméra, microphone, etc.)

## 📝 Types de Données Sécurisés

### Champs de Formulaire

| Type | Validation | Espaces | Caractères Spéciaux |
|------|------------|---------|-------------------|
| **Nom/Prénom** | 2-50 caractères | ✅ Préservés | Accents autorisés |
| **Email** | Format RFC 5322 | ❌ Non applicables | @ et . autorisés |
| **Téléphone** | Format français | ❌ Supprimés | + au début |
| **Adresse** | 5-200 caractères | ✅ Préservés | Accents, chiffres, ponctuation |
| **Ville** | 2-50 caractères | ✅ Préservés | Accents, tirets |
| **Code postal** | 5 chiffres | ❌ Supprimés | Chiffres uniquement |
| **Message** | 10-2000 caractères | ✅ Préservés | Accents, ponctuation |
| **SIRET** | 14 chiffres | ❌ Supprimés | Chiffres uniquement |

### Options de Sélection

Toutes les options de sélection sont validées contre des listes prédéfinies :

```typescript
export const SUBJECT_OPTIONS = ['devis', 'reparation', 'tracage', 'marquage', 'autre'];
export const PROJECT_TYPE_OPTIONS = ['tracage', 'marquage', 'renovation', 'autre'];
export const URGENCY_OPTIONS = ['normal', 'urgent', 'very-urgent'];
// ... autres options
```

## 🔍 Tests de Sécurité

### Tests XSS Recommandés

1. **Injection de scripts** :
   ```html
   <script>alert('XSS')</script>
   <img src="x" onerror="alert('XSS')">
   ```

2. **Injection d'événements** :
   ```html
   " onmouseover="alert('XSS')
   ' onfocus="alert('XSS')
   ```

3. **Injection de CSS** :
   ```html
   <style>body{background:red}</style>
   ```

4. **Injection de liens** :
   ```html
   <a href="javascript:alert('XSS')">Click me</a>
   ```

### Tests de Validation

1. **Longueur des champs** : Tester les limites min/max
2. **Format des données** : Tester les formats invalides
3. **Caractères spéciaux** : Vérifier la préservation des espaces
4. **Options de sélection** : Tester des valeurs non autorisées

## 🚀 Mise en Production

### Vérifications Pré-Déploiement

1. **Headers de sécurité** : Vérifier avec `curl -I`
2. **CSP** : Tester avec l'outil CSP Evaluator
3. **Validation** : Tester tous les formulaires
4. **HTTPS** : S'assurer que le site est en HTTPS

### Monitoring

1. **Logs de sécurité** : Surveiller les tentatives d'injection
2. **Headers manquants** : Alertes si les headers de sécurité sont absents
3. **Erreurs de validation** : Monitoring des erreurs de formulaire

## 📚 Ressources

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)

## ⚠️ Notes Importantes

1. **Espaces préservés** : Les espaces dans les noms, adresses et messages sont intentionnellement préservés pour une meilleure UX
2. **Accents autorisés** : Les caractères accentués français sont autorisés dans les champs texte
3. **Validation côté serveur** : Cette validation côté client doit être complétée par une validation côté serveur
4. **Mise à jour régulière** : Les dépendances de sécurité doivent être mises à jour régulièrement

---

**Dernière mise à jour :** 19 décembre 2024  
**Version :** 1.0  
**Maintenu par :** Équipe Renov Route
