import { caseStudiesData } from './case-studies-data';

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  stack: string[];
  summary: string;
  thumbnail: string;
  heroMedia: string;
  images: string[]; // Tableau d'images supplémentaires
  /**
   * Texte alternatif de chaque image, dans le même ordre que `images`.
   *
   * Sans ce champ, toutes les photos d'un projet héritaient du titre du projet :
   * 88 des 102 images du site partageaient un alt identique, ce qui empêche
   * Google de les différencier en recherche d'images (289 impressions image
   * seulement, pour un métier pourtant très visuel).
   *
   * Décrire ce que montre la photo, pas le projet. Si l'entrée manque ou est
   * vide, le titre du projet sert de repli.
   */
  imageAlts?: string[];
  kpis: Array<{ label: string; value: string }>;
  body: string;
  category: 'parking' | 'industrial' | 'commercial' | 'municipal' | 'residential';
}

export const caseStudies: CaseStudy[] = caseStudiesData as CaseStudy[];

// Génération dynamique des catégories à partir des données existantes
const categoryLabels: Record<string, string> = {
  'commercial': 'Commercial',
  'municipal': 'Municipal', 
  'industrial': 'Industriel',
  'parking': 'Parking',
  'residential': 'Résidentiel'
};

export const categories = Object.entries(
  caseStudies.reduce((acc, study) => {
    acc[study.category] = (acc[study.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
)
.map(([category, count]) => ({
  id: category,
  label: categoryLabels[category] || category,
  count
}))
.sort((a, b) => b.count - a.count); // Trier par nombre de projets décroissant

// Génération dynamique des industries à partir des données existantes
export const industries = Array.from(new Set(caseStudies.map(study => study.industry)))
  .sort();

// Génération dynamique des années à partir des données existantes
export const years = Array.from(new Set(caseStudies.map(study => study.year)))
  .sort((a, b) => b - a); // Trier par année décroissante

