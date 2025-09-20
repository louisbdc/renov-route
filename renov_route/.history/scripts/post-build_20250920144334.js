#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Chemin vers le .htaccess personnalisé
const customHtaccessPath = path.join(__dirname, '..', '.htaccess');
const outputHtaccessPath = path.join(__dirname, '..', 'out', '.htaccess');

// Vérifier si le fichier personnalisé existe
if (fs.existsSync(customHtaccessPath)) {
  // Copier le fichier personnalisé vers le dossier out
  fs.copyFileSync(customHtaccessPath, outputHtaccessPath);
  console.log('✅ .htaccess personnalisé copié vers /out/');
} else {
  console.log('⚠️  Fichier .htaccess personnalisé non trouvé');
}
