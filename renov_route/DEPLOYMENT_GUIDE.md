# 🚀 Guide de déploiement avec Google Analytics

## Plateformes de déploiement statique

### 1. **Vercel** (Recommandé pour Next.js)
```bash
# Dans le dashboard Vercel
Environment Variables:
- NEXT_PUBLIC_GA_ID = G-VOTRE_ID_ANALYTICS
- NEXT_PUBLIC_SITE_URL = https://renov-route.com
- NEXT_PUBLIC_COOKIE_DOMAIN = renov-route.com
```

### 2. **Netlify**
```bash
# Dans Netlify Dashboard > Site Settings > Environment Variables
- NEXT_PUBLIC_GA_ID = G-VOTRE_ID_ANALYTICS
- NEXT_PUBLIC_SITE_URL = https://renov-route.com
- NEXT_PUBLIC_COOKIE_DOMAIN = renov-route.com
```

### 3. **GitHub Pages**
```bash
# Dans GitHub > Settings > Secrets and variables > Actions
# Créer des secrets pour le build
- NEXT_PUBLIC_GA_ID = G-VOTRE_ID_ANALYTICS
- NEXT_PUBLIC_SITE_URL = https://renov-route.com
- NEXT_PUBLIC_COOKIE_DOMAIN = renov-route.com
```

### 4. **Cloudflare Pages**
```bash
# Dans Cloudflare Dashboard > Pages > Settings > Environment Variables
- NEXT_PUBLIC_GA_ID = G-VOTRE_ID_ANALYTICS
- NEXT_PUBLIC_SITE_URL = https://renov-route.com
- NEXT_PUBLIC_COOKIE_DOMAIN = renov-route.com
```

## 🔧 Configuration manuelle

### Option A : Fichier .env.local (développement)
```bash
# Créer .env.local (non versionné)
echo "NEXT_PUBLIC_GA_ID=G-VOTRE_ID_ANALYTICS" > .env.local
```

### Option B : Modification directe du code
```typescript
// Dans src/lib/cookie-config.ts
GA_TRACKING_ID: 'G-VOTRE_ID_ANALYTICS', // Remplacez par votre ID
```

## ✅ Vérification

1. **Développement local** : `npm run dev`
2. **Vérifier la console** : Pas d'erreurs Google Analytics
3. **Tester la bannière** : Accepter les cookies
4. **Vérifier GA** : Données apparaissent dans Google Analytics

## 🚨 Important

- **NEXT_PUBLIC_** : Variables accessibles côté client
- **Sécurité** : Ces variables sont visibles dans le code compilé
- **Google Analytics** : L'ID GA est public par nature
- **Pas de secret** : L'ID GA n'est pas un secret sensible
