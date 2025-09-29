#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

// Test sur le fichier conseil-expertise
const filePath = '/Users/louisdecaumont/code/renov-route/renov_route/out/competences/conseil-expertise/index.html';

console.log('🔍 Analyse du fichier conseil-expertise/index.html');
console.log('');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    console.log('📄 Contenu du fichier:');
    console.log(`  - Taille: ${content.length} caractères`);
    console.log('');
    
    // Trouver toutes les balises canoniques
    const allCanonicals = findCanonicalTags(content);
    console.log(`🔗 Balises canoniques trouvées: ${allCanonicals.length}`);
    
    for (let i = 0; i < allCanonicals.length; i++) {
        console.log(`  ${i + 1}. ${allCanonicals[i].tag}`);
    }
    console.log('');
    
    // Analyser le head
    const headContent = extractHeadContent(content);
    console.log('📋 Contenu du <head>:');
    console.log(`  - Taille: ${headContent.length} caractères`);
    
    const headCanonicals = findCanonicalTags(headContent);
    console.log(`  - Balises canoniques dans <head>: ${headCanonicals.length}`);
    
    for (let i = 0; i < headCanonicals.length; i++) {
        console.log(`    ${i + 1}. ${headCanonicals[i].tag}`);
    }
    console.log('');
    
    // Analyser le body
    const bodyContent = extractBodyContent(content);
    console.log('📄 Contenu du <body>:');
    console.log(`  - Taille: ${bodyContent.length} caractères`);
    
    const bodyCanonicals = findCanonicalTags(bodyContent);
    console.log(`  - Balises canoniques dans <body>: ${bodyCanonicals.length}`);
    
    for (let i = 0; i < bodyCanonicals.length; i++) {
        console.log(`    ${i + 1}. ${bodyCanonicals[i].tag}`);
    }
    
} catch (error) {
    console.error('❌ Erreur:', error.message);
}
