#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script de test pour créer des doublons de balises canoniques
 * et tester le script de nettoyage
 */

// Créer un fichier HTML de test avec des doublons
function createTestHtml() {
    const testHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Test Page</title>
    <link rel="canonical" href="https://example.com/test" />
    <link rel="canonical" href="https://example.com/test-duplicate" />
</head>
<body>
    <h1>Test Page</h1>
    <p>This is a test page with duplicate canonical tags.</p>
    <link rel="canonical" href="https://example.com/test-body" />
    <link rel="canonical" href="https://example.com/test-body-duplicate" />
</body>
</html>`;

    const testDir = path.join(__dirname, '..', 'out', 'test');
    if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
    }

    const testFile = path.join(testDir, 'index.html');
    fs.writeFileSync(testFile, testHtml, 'utf8');
    
    console.log('✅ Fichier de test créé:', testFile);
    return testFile;
}

// Nettoyer le fichier de test
function cleanupTest() {
    const testDir = path.join(__dirname, '..', 'out', 'test');
    if (fs.existsSync(testDir)) {
        fs.rmSync(testDir, { recursive: true, force: true });
        console.log('🧹 Fichier de test supprimé');
    }
}

// Fonction principale
function main() {
    const args = process.argv.slice(2);
    
    if (args.includes('--cleanup')) {
        cleanupTest();
        return;
    }
    
    console.log('🧪 Création d\'un fichier de test avec des doublons...');
    const testFile = createTestHtml();
    
    console.log('');
    console.log('📄 Contenu du fichier de test:');
    const content = fs.readFileSync(testFile, 'utf8');
    console.log(content);
    
    console.log('');
    console.log('🔍 Analyse des balises canoniques:');
    const canonicalMatches = content.match(/<link[^>]*rel\s*=\s*["']canonical["'][^>]*>/gi);
    if (canonicalMatches) {
        console.log(`  - Trouvé ${canonicalMatches.length} balise(s) canonique(s):`);
        canonicalMatches.forEach((match, index) => {
            console.log(`    ${index + 1}. ${match}`);
        });
    }
    
    console.log('');
    console.log('💡 Maintenant, exécutez:');
    console.log('   node scripts/clean-canonical-tags.js');
    console.log('');
    console.log('   Puis pour nettoyer:');
    console.log('   node scripts/test-duplicates.js --cleanup');
}

if (require.main === module) {
    main();
}

module.exports = { createTestHtml, cleanupTest };
