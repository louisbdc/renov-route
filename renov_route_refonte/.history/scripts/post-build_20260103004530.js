const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Contenu du fichier .htaccess
const htaccessContent = `# Configuration OVH pour Next.js Static Export
# Ce fichier gère le routage, la compression, le cache et les performances
# Généré automatiquement après chaque build

# ============================================
# ACTIVATION DE LA RÉÉCRITURE D'URL
# ============================================
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Forcer HTTPS (décommentez si vous avez un certificat SSL)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Rediriger www vers non-www (ou inversement selon votre préférence)
  # RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
  # RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

  # ============================================
  # REDIRECTIONS 301 DES ANCIENNES URLs
  # ============================================

  # Page d'accueil
  RewriteRule ^index\\.html?$ / [R=301,L]
  RewriteRule ^home\\.html?$ / [R=301,L]
  RewriteRule ^accueil\\.html?$ / [R=301,L]

  # --- ANCIENNES REDIRECTIONS ---
  RewriteRule ^marquage-routier-lyon-69/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^contact/?$ /qui-sommes-nous [R=301,L]
  RewriteRule ^blank-1/?$ /competences/resine-sol-marquage-interieur [R=301,L]
  RewriteRule ^blank/?$ /competences/resine-sol-marquage-interieur [R=301,L]
  RewriteRule ^peinture-marquage-sol-parking-lyon/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^rebouchage-nids-poules-rhones-alpes/?$ /competences/reparation-nids-de-poule [R=301,L]
  RewriteRule ^marquage/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^renov-route/?$ /competences [R=301,L]

  # Redirections géographiques et services
  RewriteRule ^marquage-parking-([^/]+)/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^marquage([^/]+)/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^tracage-parking-([^/]+)/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^marquage-routier-([^/]+)/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^reparation-nids-poule-([^/]+)/?$ /competences/reparation-nids-de-poule [R=301,L]
  RewriteRule ^signalisation-([^/]+)/?$ /competences/signalisation-verticale [R=301,L]
  RewriteRule ^accessoires-parking-([^/]+)/?$ /competences/accessoires-parking [R=301,L]
  RewriteRule ^resine-sol-([^/]+)/?$ /competences/resine-sol-marquage-interieur [R=301,L]
  RewriteRule ^conseil-expertise-([^/]+)/?$ /competences/conseil-expertise [R=301,L]

  # Pages principales (Nettoyage des extensions .html visibles)
  RewriteRule ^services\\.html?$ /competences [R=301,L]
  RewriteRule ^prestations\\.html?$ /competences [R=301,L]
  RewriteRule ^nos-services\\.html?$ /competences [R=301,L]
  RewriteRule ^about\\.html?$ /qui-sommes-nous [R=301,L]
  RewriteRule ^a-propos\\.html?$ /qui-sommes-nous [R=301,L]
  RewriteRule ^equipe\\.html?$ /qui-sommes-nous [R=301,L]
  RewriteRule ^portfolio\\.html?$ /#realisations [R=301,L]
  RewriteRule ^projets\\.html?$ /#realisations [R=301,L]
  RewriteRule ^galerie\\.html?$ /#realisations [R=301,L]
  RewriteRule ^contact\\.html?$ /#contact [R=301,L]
  RewriteRule ^demande-devis\\.html?$ /#contact [R=301,L]
  RewriteRule ^devis/?$ /#contact [R=301,L]

  # Redirections anciennes pages spécifiques
  RewriteRule ^marquage-parking\\.html?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^tracage-parking\\.html?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^panneaux-signalisation\\.html?$ /competences/signalisation-verticale [R=301,L]
  RewriteRule ^signalisation\\.html?$ /competences/signalisation-verticale [R=301,L]
  RewriteRule ^resine-sol\\.html?$ /competences/resine-sol-marquage-interieur [R=301,L]
  RewriteRule ^reparation-route\\.html?$ /competences/reparation-nids-de-poule [R=301,L]
  RewriteRule ^equipements-parking\\.html?$ /competences/accessoires-parking [R=301,L]
  RewriteRule ^conseil\\.html?$ /competences/conseil-expertise [R=301,L]

  # Redirections génériques
  RewriteRule ^services/([^/]+)\\.html?$ /competences [R=301,L]
  RewriteRule ^competences/([^/]+)\\.html?$ /competences/$1 [R=301,L]
  RewriteRule ^page/([^/]+)\\.html?$ /$1 [R=301,L]
  RewriteRule ^old-site/(.*)$ /$1 [R=301,L]

  # [SUPPRIMÉ] La redirection forcée vers competences.html a été retirée ici

  # Supprimer les trailing slashes pour les fichiers
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)/$ /$1 [R=301,L]

  # ============================================
  # GESTION DES URLS PROPRES (Clean URLs)
  # ============================================
  
  # 1. Si l'URL demandée correspond à un fichier .html existant, on le sert
  # Exemple : /competences -> sert competences.html sans changer l'URL
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # 2. Si l'URL correspond à un dossier contenant index.html, on le sert
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # ============================================
  # ROUTAGE NEXT.JS (Fallback SPA)
  # ============================================
  # Si aucun fichier statique n'est trouvé, renvoyer vers index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !^/_next/
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# ============================================
# COMPRESSION ET PERFORMANCE
# ============================================
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml font/woff2
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  # HTML toujours frais
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  # Sécurité
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  
  # Cache Control pour les fichiers statiques
  <FilesMatch "\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|avif|webp)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
</IfModule>

ErrorDocument 404 /404.html
Options -Indexes
Options +FollowSymLinks
`;

// Contenu du fichier web.config
const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <!-- Configuration pour IIS (si OVH utilise IIS au lieu d'Apache) -->
    
    <!-- Réécriture d'URL pour Next.js -->
    <rewrite>
      <rules>
        <!-- Rediriger toutes les routes vers index.html pour le routing Next.js -->
        <rule name="Next.js Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_URI}" pattern="^/_next/" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>

    <!-- Compression -->
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />
    
    <!-- En-têtes de cache -->
    <staticContent>
      <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
    </staticContent>
    
    <!-- Types MIME pour les nouveaux formats -->
    <staticContent>
      <mimeMap fileExtension=".avif" mimeType="image/avif" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
    </staticContent>

    <!-- Gestion des erreurs -->
    <httpErrors errorMode="Custom" existingResponse="Replace">
      <remove statusCode="404" />
      <error statusCode="404" path="/404.html" responseMode="ExecuteURL" />
    </httpErrors>

    <!-- En-têtes de sécurité -->
    <httpProtocol>
      <customHeaders>
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-Frame-Options" value="SAMEORIGIN" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
      </customHeaders>
    </httpProtocol>

  </system.webServer>
</configuration>
`;

// Fonction pour supprimer les fichiers .txt inutiles (sauf robots.txt)
function cleanupTxtFiles() {
  function findTxtFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        findTxtFiles(filePath, fileList);
      } else if (file.endsWith('.txt') && file !== 'robots.txt') {
        fileList.push(filePath);
      }
    });

    return fileList;
  }

  const txtFiles = findTxtFiles(outDir);
  
  if (txtFiles.length > 0) {
    txtFiles.forEach(filePath => {
      fs.unlinkSync(filePath);
    });
    console.log(`🧹 ${txtFiles.length} fichier(s) .txt inutile(s) supprimé(s)`);
  }
}

// Fonction principale
function generateConfigFiles() {
  // Vérifier que le dossier out existe
  if (!fs.existsSync(outDir)) {
    console.error('❌ Le dossier "out" n\'existe pas. Assurez-vous d\'avoir lancé "npm run build" d\'abord.');
    process.exit(1);
  }

  // Générer le fichier .htaccess
  const htaccessPath = path.join(outDir, '.htaccess');
  fs.writeFileSync(htaccessPath, htaccessContent, 'utf8');
  console.log('✅ Fichier .htaccess généré avec succès');

  // Générer le fichier web.config
  const webConfigPath = path.join(outDir, 'web.config');
  fs.writeFileSync(webConfigPath, webConfigContent, 'utf8');
  console.log('✅ Fichier web.config généré avec succès');

  // Nettoyer les fichiers .txt inutiles
  cleanupTxtFiles();

  // Créer un index.html dans le dossier competences pour éviter les erreurs 403
  const competencesDir = path.join(outDir, 'competences');
  if (fs.existsSync(competencesDir)) {
    const competencesIndexPath = path.join(competencesDir, 'index.html');
    const competencesIndexContent = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/competences.html">
  <title>Redirection...</title>
</head>
<body>
  <script>window.location.href = '/competences.html';</script>
  <p>Si vous n'êtes pas redirigé automatiquement, <a href="/competences.html">cliquez ici</a>.</p>
</body>
</html>`;
    fs.writeFileSync(competencesIndexPath, competencesIndexContent, 'utf8');
    console.log('✅ Fichier index.html créé dans /competences/');
  }

  console.log('✨ Configuration OVH prête pour le déploiement !');
}

// Exécuter le script
generateConfigFiles();

