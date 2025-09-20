#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Chemin vers le .htaccess personnalisé
const customHtaccessPath = path.join(__dirname, '..', 'public', '.htaccess');
const outputHtaccessPath = path.join(__dirname, '..', 'out', '.htaccess');

// Vérifier si le fichier personnalisé existe
if (fs.existsSync(customHtaccessPath)) {
  // Copier le fichier personnalisé vers le dossier out
  fs.copyFileSync(customHtaccessPath, outputHtaccessPath);
  console.log('✅ .htaccess personnalisé copié vers /out/');
} else {
  console.log('⚠️  Fichier .htaccess personnalisé non trouvé');
}

// Configuration des balises canoniques par page
const canonicalUrls = {
  'index.html': 'https://renov-route.com',
  'competences/index.html': 'https://renov-route.com/competences',
  'competences/accessoires-parking/index.html': 'https://renov-route.com/competences/accessoires-parking',
  'competences/conseil-expertise/index.html': 'https://renov-route.com/competences/conseil-expertise',
  'competences/reparation-nids-de-poule/index.html': 'https://renov-route.com/competences/reparation-nids-de-poule',
  'competences/resine-sol-marquage-interieur/index.html': 'https://renov-route.com/competences/resine-sol-marquage-interieur',
  'competences/signalisation-verticale/index.html': 'https://renov-route.com/competences/signalisation-verticale',
  'competences/tracage-retracage-parking/index.html': 'https://renov-route.com/competences/tracage-retracage-parking',
  'devis/index.html': 'https://renov-route.com/devis',
  'qui-sommes-nous/index.html': 'https://renov-route.com/qui-sommes-nous',
  'realisations/index.html': 'https://renov-route.com/realisations',
  'privacy-policy/index.html': 'https://renov-route.com/privacy-policy'
};

// Fonction pour ajouter la balise canonique à un fichier HTML
function addCanonicalTag(filePath, canonicalUrl) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si la balise canonique existe déjà
    if (content.includes('rel="canonical"')) {
      console.log(`⚠️  Balise canonique déjà présente dans ${filePath}`);
      return;
    }
    
    // Trouver la position après la balise <title> ou <meta name="description">
    const titleMatch = content.match(/<title[^>]*>.*?<\/title>/);
    const metaDescMatch = content.match(/<meta\s+name="description"[^>]*>/);
    
    let insertPosition;
    if (metaDescMatch) {
      insertPosition = metaDescMatch.index + metaDescMatch[0].length;
    } else if (titleMatch) {
      insertPosition = titleMatch.index + titleMatch[0].length;
    } else {
      // Insérer après la balise <head>
      const headMatch = content.match(/<head[^>]*>/);
      if (headMatch) {
        insertPosition = headMatch.index + headMatch[0].length;
      } else {
        console.log(`❌ Impossible de trouver une position d'insertion dans ${filePath}`);
        return;
      }
    }
    
    // Insérer la balise canonique
    const canonicalTag = `\n<link rel="canonical" href="${canonicalUrl}" />`;
    content = content.slice(0, insertPosition) + canonicalTag + content.slice(insertPosition);
    
    // Écrire le fichier modifié
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Balise canonique ajoutée à ${filePath}`);
    
  } catch (error) {
    console.log(`❌ Erreur lors de l'ajout de la balise canonique à ${filePath}:`, error.message);
  }
}

// Ajouter les balises canoniques
console.log('🔗 Ajout des balises canoniques...');
const outDir = path.join(__dirname, '..', 'out');

Object.entries(canonicalUrls).forEach(([filePath, canonicalUrl]) => {
  const fullPath = path.join(outDir, filePath);
  
  if (fs.existsSync(fullPath)) {
    addCanonicalTag(fullPath, canonicalUrl);
  } else {
    console.log(`⚠️  Fichier non trouvé: ${fullPath}`);
  }
});

console.log('✅ Processus de post-build terminé !');
