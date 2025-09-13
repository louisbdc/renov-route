const fs = require('fs');
const path = require('path');

// Liste des images à créer
const images = [
  'em-lyon-parking-thumb.jpg',
  'em-lyon-parking-hero.jpg',
  'lidl-vienne-logos-thumb.jpg',
  'lidl-vienne-logos-hero.jpg',
  'intermarche-neuville-thumb.jpg',
  'intermarche-neuville-hero.jpg',
  'avenieres-pmr-thumb.jpg',
  'avenieres-pmr-hero.jpg',
  'lidl-verpiliere-thumb.jpg',
  'lidl-verpiliere-hero.jpg',
  'civrieux-zebra-thumb.jpg',
  'civrieux-zebra-hero.jpg',
  'lidl-venissieux-thumb.jpg',
  'lidl-venissieux-hero.jpg',
  'em-lyon-bornes-thumb.jpg',
  'em-lyon-bornes-hero.jpg',
  'carglass-angouleme-thumb.jpg',
  'carglass-angouleme-hero.jpg',
  'richardson-st-etienne-thumb.jpg',
  'richardson-st-etienne-hero.jpg',
  'feu-vert-places-thumb.jpg',
  'feu-vert-places-hero.jpg',
  'lidl-pmr-resine-thumb.jpg',
  'lidl-pmr-resine-hero.jpg'
];

// Créer le dossier s'il n'existe pas
const dir = path.join(__dirname, 'public', 'assets', 'images', 'realisations');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Créer des fichiers placeholder
images.forEach(imageName => {
  const filePath = path.join(dir, imageName);
  
  // Créer un fichier SVG placeholder simple
  const isThumb = imageName.includes('-thumb');
  const width = isThumb ? 300 : 1200;
  const height = isThumb ? 200 : 800;
  
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1f2937"/>
  <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="#374151" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="50%" y="50%" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="${isThumb ? '14' : '24'}">
    ${imageName.replace('.jpg', '').replace('-thumb', '').replace('-hero', '').replace(/-/g, ' ').toUpperCase()}
  </text>
  <text x="50%" y="60%" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="${isThumb ? '10' : '16'}">
    ${isThumb ? '300x200' : '1200x800'} - Placeholder
  </text>
</svg>`;
  
  // Écrire le fichier SVG (on peut le renommer en .jpg pour la compatibilité)
  fs.writeFileSync(filePath.replace('.jpg', '.svg'), svgContent);
  
  console.log(`✅ Créé: ${imageName.replace('.jpg', '.svg')}`);
});

console.log('\n🎉 Tous les placeholders ont été créés !');
console.log('📝 Remplacez ces fichiers SVG par les vraies images JPG/AVIF quand elles seront disponibles.');
console.log('📖 Consultez IMAGES_PLACEHOLDER_README.md pour plus d\'informations.');
