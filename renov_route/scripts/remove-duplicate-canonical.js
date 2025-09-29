#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour supprimer les balises canoniques en double
 * Garde seulement la balise canonique qui se trouve dans la section <head>
 */

// Fonction pour trouver tous les fichiers HTML dans un dossier
function findHtmlFiles(dir) {
    const files = [];
    
    function traverse(currentDir) {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                traverse(fullPath);
            } else if (item.endsWith('.html')) {
                files.push(fullPath);
            }
        }
    }
    
    traverse(dir);
    return files;
}

// Fonction pour extraire le contenu entre les balises <head> et </head>
function extractHeadContent(html) {
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    return headMatch ? headMatch[1] : '';
}

// Fonction pour extraire le contenu du body
function extractBodyContent(html) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return bodyMatch ? bodyMatch[1] : '';
}

// Fonction pour trouver toutes les balises canoniques
function findCanonicalTags(content) {
    const canonicalRegex = /<link[^>]*rel\s*=\s*["']canonical["'][^>]*>/gi;
    const matches = [];
    let match;
    
    while ((match = canonicalRegex.exec(content)) !== null) {
        matches.push({
            tag: match[0],
            index: match.index,
            fullMatch: match[0]
        });
    }
    
    return matches;
}

// Fonction pour supprimer les balises canoniques en double
function removeDuplicateCanonicalTags(html) {
    const headContent = extractHeadContent(html);
    const bodyContent = extractBodyContent(html);
    
    // Trouver toutes les balises canoniques dans le head
    const headCanonicals = findCanonicalTags(headContent);
    
    // Trouver toutes les balises canoniques dans le body
    const bodyCanonicals = findCanonicalTags(bodyContent);
    
    let modifiedHtml = html;
    let changesCount = 0;
    
    // Si on a des balises canoniques dans le head ET dans le body
    if (headCanonicals.length > 0 && bodyCanonicals.length > 0) {
        console.log(`  - Trouvé ${headCanonicals.length} balise(s) canonique(s) dans <head>`);
        console.log(`  - Trouvé ${bodyCanonicals.length} balise(s) canonique(s) dans <body>`);
        
        // Supprimer toutes les balises canoniques du body
        for (const canonical of bodyCanonicals) {
            modifiedHtml = modifiedHtml.replace(canonical.tag, '');
            changesCount++;
        }
        
        console.log(`  - Supprimé ${changesCount} balise(s) canonique(s) du <body>`);
    }
    
    // Si on a plusieurs balises canoniques dans le head, garder seulement la première
    if (headCanonicals.length > 1) {
        console.log(`  - Trouvé ${headCanonicals.length} balise(s) canonique(s) dans <head>`);
        
        // Supprimer toutes sauf la première
        for (let i = 1; i < headCanonicals.length; i++) {
            modifiedHtml = modifiedHtml.replace(headCanonicals[i].tag, '');
            changesCount++;
        }
        
        console.log(`  - Supprimé ${headCanonicals.length - 1} balise(s) canonique(s) en double dans <head>`);
    }
    
    return {
        html: modifiedHtml,
        changesCount: changesCount
    };
}

// Fonction principale
function main() {
    const outDir = path.join(__dirname, '..', 'out');
    
    if (!fs.existsSync(outDir)) {
        console.error('❌ Le dossier "out" n\'existe pas');
        process.exit(1);
    }
    
    console.log('🔍 Recherche des fichiers HTML dans le dossier "out"...');
    const htmlFiles = findHtmlFiles(outDir);
    
    if (htmlFiles.length === 0) {
        console.log('ℹ️  Aucun fichier HTML trouvé');
        return;
    }
    
    console.log(`📁 ${htmlFiles.length} fichier(s) HTML trouvé(s)`);
    console.log('');
    
    let totalChanges = 0;
    let filesWithChanges = 0;
    
    for (const filePath of htmlFiles) {
        const relativePath = path.relative(outDir, filePath);
        console.log(`📄 Traitement: ${relativePath}`);
        
        try {
            const originalContent = fs.readFileSync(filePath, 'utf8');
            const result = removeDuplicateCanonicalTags(originalContent);
            
            if (result.changesCount > 0) {
                fs.writeFileSync(filePath, result.html, 'utf8');
                console.log(`  ✅ ${result.changesCount} modification(s) appliquée(s)`);
                totalChanges += result.changesCount;
                filesWithChanges++;
            } else {
                console.log(`  ℹ️  Aucune modification nécessaire`);
            }
        } catch (error) {
            console.error(`  ❌ Erreur lors du traitement: ${error.message}`);
        }
        
        console.log('');
    }
    
    console.log('📊 Résumé:');
    console.log(`  - Fichiers traités: ${htmlFiles.length}`);
    console.log(`  - Fichiers modifiés: ${filesWithChanges}`);
    console.log(`  - Total des modifications: ${totalChanges}`);
    
    if (totalChanges > 0) {
        console.log('✅ Script terminé avec succès');
    } else {
        console.log('ℹ️  Aucune balise canonique en double trouvée');
    }
}

// Exécuter le script
if (require.main === module) {
    main();
}

module.exports = {
    findHtmlFiles,
    extractHeadContent,
    extractBodyContent,
    findCanonicalTags,
    removeDuplicateCanonicalTags
};
