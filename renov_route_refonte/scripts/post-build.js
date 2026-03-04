const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Contenu du fichier .htaccess
const htaccessContent = `# Configuration OVH pour Next.js Static Export
# Généré via scripts/post-build.js

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Empêche Apache d'ajouter un slash automatiquement à la fin des dossiers
  # C'est crucial pour que /competences charge le fichier .html et non le dossier
  DirectorySlash Off

  # ----------------------------------------------------------------------
  # 1. REDIRECTIONS DE NETTOYAGE (SEO)
  # ----------------------------------------------------------------------

  # Redirections des anciennes URLs
  RewriteRule ^marquage-routier-lyon-69/?$ /competences/tracage-retracage-parking [R=301,L]
  RewriteRule ^contact/?$ /qui-sommes-nous [R=301,L]
  RewriteRule ^renov-route/?$ /competences [R=301,L]

  # Forcer la suppression du .html visible dans l'URL
  RewriteCond %{THE_REQUEST} \\s/+(.+?)\\.html[\\s?] [NC]
  RewriteRule ^ /%1 [R=301,L,NE]

  # Supprimer le slash final (trailing slash) si ce n'est pas un vrai dossier
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)/$ /$1 [R=301,L]

  # ----------------------------------------------------------------------
  # 2. ROUTAGE INTELLIGENT (Le cœur du problème résolu ici)
  # ----------------------------------------------------------------------

  # CAS SPÉCIAL /COMPETENCES :
  # Si la requête est un dossier (ex: /competences), MAIS qu'il existe un fichier .html du même nom
  # On force Apache à servir le fichier .html au lieu d'entrer dans le dossier.
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^(.+?)/?$ $1.html [L]

  # CAS STANDARD :
  # Si l'URL correspond à un fichier .html (ex: /qui-sommes-nous), on le sert.
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # CAS SOUS-DOSSIER :
  # Si l'URL est un vrai dossier contenant index.html (ex: racine /)
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # ----------------------------------------------------------------------
  # 3. FALLBACK SPA (Gestion des erreurs 404)
  # ----------------------------------------------------------------------
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

# ----------------------------------------------------------------------
# 4. PERFORMANCE & SÉCURITÉ
# ----------------------------------------------------------------------
<IfModule mod_headers.c>
  # Cache images/css/js (1 an)
  <FilesMatch "\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|webp|avif)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # Pas de cache pour le HTML
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
  
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>

ErrorDocument 404 /index.html
`;

// Contenu du fichier web.config (Pour serveurs Windows/IIS, au cas où)
const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Hide .html ext" stopProcessing="true">
          <match url="^(.*).html$" />
          <conditions logicalGrouping="MatchAny">
            <add input="{URL}" pattern="(.*).html$" />
          </conditions>
          <action type="Redirect" url="{R:1}" redirectType="Permanent" />
        </rule>
        <rule name="Rewrite to .html" stopProcessing="true">
          <match url="^(.*)$" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_FILENAME}.html" matchType="IsFile" />
          </conditions>
          <action type="Rewrite" url="{R:0}.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".avif" mimeType="image/avif" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
    </staticContent>
  </system.webServer>
</configuration>
`;

function cleanupTxtFiles() {
  function findTxtFiles(dir, fileList = []) {
    try {
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
    } catch (e) {
      // Ignorer si dossier vide ou erreur
    }
    return fileList;
  }

  const txtFiles = findTxtFiles(outDir);
  if (txtFiles.length > 0) {
    txtFiles.forEach(filePath => fs.unlinkSync(filePath));
    console.log(`🧹 ${txtFiles.length} fichier(s) .txt inutile(s) supprimé(s)`);
  }
}

function generateConfigFiles() {
  if (!fs.existsSync(outDir)) {
    console.error('❌ Le dossier "out" n\'existe pas. Lancez "npm run build" d\'abord.');
    process.exit(1);
  }

  // 1. Générer le .htaccess
  fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent, 'utf8');
  console.log('✅ Fichier .htaccess généré');

  // 2. Générer web.config
  fs.writeFileSync(path.join(outDir, 'web.config'), webConfigContent, 'utf8');
  console.log('✅ Fichier web.config généré');

  // 3. Nettoyage
  cleanupTxtFiles();

  // IMPORTANT : On SUPPRIME l'ancien fichier index.html qui causait la boucle s'il existe encore
  const badIndexFile = path.join(outDir, 'competences', 'index.html');
  if (fs.existsSync(badIndexFile)) {
    fs.unlinkSync(badIndexFile);
    console.log('🗑️  Fichier competences/index.html (source du bug) supprimé.');
  }

  console.log('✨ Configuration prête pour le déploiement !');
}

generateConfigFiles();
