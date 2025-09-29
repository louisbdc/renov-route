#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script amélioré pour nettoyer les balises canoniques
 * - Supprime les doublons dans les fichiers HTML générés
 * - Nettoie les fichiers head.tsx pour éviter les conflits
 * - Détecte les problèmes potentiels de balises canoniques
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

// Fonction pour trouver tous les fichiers head.tsx
function findHeadFiles(dir) {
    const files = [];
    
    function traverse(currentDir) {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                traverse(fullPath);
            } else if (item === 'head.tsx') {
                files.push(fullPath);
            }
        }
    }
    
    traverse(dir);
    return files;
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

// Fonction pour supprimer les balises canoniques en double dans les fichiers HTML
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

// Fonction pour analyser les fichiers head.tsx
function analyzeHeadFiles(headFiles) {
    const issues = [];
    
    for (const filePath of headFiles) {
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`📄 Analyse: ${relativePath}`);
        
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const canonicals = findCanonicalTags(content);
            
            if (canonicals.length > 1) {
                console.log(`  ⚠️  ${canonicals.length} balise(s) canonique(s) trouvée(s) dans head.tsx`);
                issues.push({
                    file: filePath,
                    type: 'multiple_canonicals',
                    count: canonicals.length
                });
            } else if (canonicals.length === 1) {
                console.log(`  ✅ 1 balise canonique trouvée`);
            } else {
                console.log(`  ℹ️  Aucune balise canonique trouvée`);
            }
            
        } catch (error) {
            console.error(`  ❌ Erreur lors de l'analyse: ${error.message}`);
            issues.push({
                file: filePath,
                type: 'error',
                error: error.message
            });
        }
        
        console.log('');
    }
    
    return issues;
}

// Fonction pour nettoyer les fichiers head.tsx
function cleanHeadFiles(headFiles) {
    let cleanedCount = 0;
    
    for (const filePath of headFiles) {
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`🧹 Nettoyage: ${relativePath}`);
        
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const canonicals = findCanonicalTags(content);
            
            if (canonicals.length > 1) {
                // Garder seulement la première balise canonique
                let cleanedContent = content;
                for (let i = 1; i < canonicals.length; i++) {
                    cleanedContent = cleanedContent.replace(canonicals[i].tag, '');
                }
                
                fs.writeFileSync(filePath, cleanedContent, 'utf8');
                console.log(`  ✅ Supprimé ${canonicals.length - 1} balise(s) canonique(s) en double`);
                cleanedCount++;
            } else {
                console.log(`  ℹ️  Aucun nettoyage nécessaire`);
            }
            
        } catch (error) {
            console.error(`  ❌ Erreur lors du nettoyage: ${error.message}`);
        }
        
        console.log('');
    }
    
    return cleanedCount;
}

// Fonction pour générer un rapport
function generateReport(htmlResults, headIssues, cleanedHeadFiles) {
    console.log('📊 RAPPORT FINAL');
    console.log('================');
    console.log('');
    
    console.log('📁 Fichiers HTML traités:');
    console.log(`  - Total: ${htmlResults.totalFiles}`);
    console.log(`  - Modifiés: ${htmlResults.modifiedFiles}`);
    console.log(`  - Modifications: ${htmlResults.totalChanges}`);
    console.log('');
    
    console.log('📄 Fichiers head.tsx analysés:');
    console.log(`  - Total: ${headIssues.length}`);
    console.log(`  - Nettoyés: ${cleanedHeadFiles}`);
    console.log('');
    
    if (headIssues.length > 0) {
        console.log('⚠️  Problèmes détectés:');
        headIssues.forEach(issue => {
            const relativePath = path.relative(process.cwd(), issue.file);
            if (issue.type === 'multiple_canonicals') {
                console.log(`  - ${relativePath}: ${issue.count} balises canoniques`);
            } else if (issue.type === 'error') {
                console.log(`  - ${relativePath}: Erreur - ${issue.error}`);
            }
        });
        console.log('');
    }
    
    if (htmlResults.totalChanges > 0 || cleanedHeadFiles > 0) {
        console.log('✅ Nettoyage terminé avec succès');
    } else {
        console.log('ℹ️  Aucun nettoyage nécessaire');
    }
}

// Fonction principale
function main() {
    const args = process.argv.slice(2);
    const cleanHeadFiles = args.includes('--clean-head');
    const outDir = path.join(__dirname, '..', 'out');
    const srcDir = path.join(__dirname, '..', 'src');
    
    console.log('🔍 Script de nettoyage des balises canoniques');
    console.log('=============================================');
    console.log('');
    
    // Traiter les fichiers HTML générés
    if (fs.existsSync(outDir)) {
        console.log('📁 Traitement des fichiers HTML générés...');
        const htmlFiles = findHtmlFiles(outDir);
        
        if (htmlFiles.length === 0) {
            console.log('ℹ️  Aucun fichier HTML trouvé dans le dossier "out"');
        } else {
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
            
            var htmlResults = {
                totalFiles: htmlFiles.length,
                modifiedFiles: filesWithChanges,
                totalChanges: totalChanges
            };
        }
    } else {
        console.log('⚠️  Le dossier "out" n\'existe pas');
        var htmlResults = {
            totalFiles: 0,
            modifiedFiles: 0,
            totalChanges: 0
        };
    }
    
    // Traiter les fichiers head.tsx
    let headIssues = [];
    let cleanedHeadFiles = 0;
    
    if (fs.existsSync(srcDir)) {
        console.log('📄 Analyse des fichiers head.tsx...');
        const headFiles = findHeadFiles(srcDir);
        
        if (headFiles.length === 0) {
            console.log('ℹ️  Aucun fichier head.tsx trouvé');
        } else {
            console.log(`📄 ${headFiles.length} fichier(s) head.tsx trouvé(s)`);
            console.log('');
            
            headIssues = analyzeHeadFiles(headFiles);
            
            if (cleanHeadFiles) {
                console.log('🧹 Nettoyage des fichiers head.tsx...');
                cleanedHeadFiles = cleanHeadFiles(headFiles);
            } else {
                console.log('ℹ️  Utilisez --clean-head pour nettoyer les fichiers head.tsx');
            }
        }
    } else {
        console.log('⚠️  Le dossier "src" n\'existe pas');
    }
    
    // Générer le rapport final
    generateReport(htmlResults, headIssues, cleanedHeadFiles);
}

// Afficher l'aide
function showHelp() {
    console.log('Usage: node clean-canonical-tags.js [options]');
    console.log('');
    console.log('Options:');
    console.log('  --clean-head    Nettoyer les fichiers head.tsx');
    console.log('  --help          Afficher cette aide');
    console.log('');
    console.log('Exemples:');
    console.log('  node clean-canonical-tags.js');
    console.log('  node clean-canonical-tags.js --clean-head');
}

// Exécuter le script
if (require.main === module) {
    if (process.argv.includes('--help')) {
        showHelp();
    } else {
        main();
    }
}

module.exports = {
    findHtmlFiles,
    findHeadFiles,
    findCanonicalTags,
    extractHeadContent,
    extractBodyContent,
    removeDuplicateCanonicalTags,
    analyzeHeadFiles,
    cleanHeadFiles
};
