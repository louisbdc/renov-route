/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Génère un dossier 'out' avec vos fichiers HTML/CSS/JS
  images: {
    // IMPORTANT : Avec 'output: export', Next.js ne peut pas optimiser les images automatiquement.
    // Les images doivent être compressées manuellement avant d'être ajoutées au dossier /public.
    // Recommandations :
    // - Utiliser des formats modernes (WebP, AVIF) pour réduire la taille des fichiers
    // - Compresser les images avec des outils comme TinyPNG, Squoosh ou ImageOptim
    // - Optimiser les dimensions pour éviter de charger des images trop grandes
    // - Cible : < 200KB par image pour de bonnes performances Core Web Vitals
    unoptimized: true, // Indispensable si vous n'avez pas de serveur Node.js
  },
}

module.exports = nextConfig

