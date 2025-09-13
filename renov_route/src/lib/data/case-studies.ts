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

