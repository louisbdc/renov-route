import Script from 'next/script';
import Image from 'next/image';

interface Recipe {
  name: string;
  description: string;
  image: string;
  author: {
    name: string;
    url: string;
  };
  datePublished: string;
  dateModified: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  recipeYield: string;
  recipeCategory: string;
  recipeCuisine: string;
  ingredients: string[];
  recipeInstructions: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  nutrition?: {
    calories: string;
    proteinContent: string;
    fatContent: string;
    carbohydrateContent: string;
    fiberContent: string;
    sugarContent: string;
    sodiumContent: string;
  };
}

interface SEORecipeProps {
  recipe: Recipe;
  className?: string;
}

export default function SEORecipe({ recipe, className = "" }: SEORecipeProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.name,
    "description": recipe.description,
    "image": recipe.image,
    "author": {
      "@type": "Person",
      "name": recipe.author.name,
      "url": recipe.author.url
    },
    "datePublished": recipe.datePublished,
    "dateModified": recipe.dateModified,
    "prepTime": recipe.prepTime,
    "cookTime": recipe.cookTime,
    "totalTime": recipe.totalTime,
    "recipeYield": recipe.recipeYield,
    "recipeCategory": recipe.recipeCategory,
    "recipeCuisine": recipe.recipeCuisine,
    "ingredients": recipe.ingredients,
    "recipeInstructions": recipe.recipeInstructions.map((instruction, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": instruction
    })),
    "aggregateRating": recipe.aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": recipe.aggregateRating.ratingValue,
      "reviewCount": recipe.aggregateRating.reviewCount,
      "bestRating": recipe.aggregateRating.bestRating,
      "worstRating": recipe.aggregateRating.worstRating
    } : undefined,
    "nutrition": recipe.nutrition ? {
      "@type": "NutritionInformation",
      "calories": recipe.nutrition.calories,
      "proteinContent": recipe.nutrition.proteinContent,
      "fatContent": recipe.nutrition.fatContent,
      "carbohydrateContent": recipe.nutrition.carbohydrateContent,
      "fiberContent": recipe.nutrition.fiberContent,
      "sugarContent": recipe.nutrition.sugarContent,
      "sodiumContent": recipe.nutrition.sodiumContent
    } : undefined
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
          <p className="text-gray-700 mb-4">{recipe.description}</p>
          
          <div className="mb-4">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Informations</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Temps de préparation:</span>
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Temps de cuisson:</span>
                  <span>{recipe.cookTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Temps total:</span>
                  <span>{recipe.totalTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Portions:</span>
                  <span>{recipe.recipeYield}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Catégorie:</span>
                  <span>{recipe.recipeCategory}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Cuisine:</span>
                  <span>{recipe.recipeCuisine}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingrédients</h3>
              <ul className="space-y-1 text-sm">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Instructions</h3>
            <ol className="space-y-2 text-sm">
              {recipe.recipeInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {recipe.aggregateRating && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Note</h3>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(recipe.aggregateRating!.ratingValue) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>
                  {recipe.aggregateRating.ratingValue}/5 ({recipe.aggregateRating.reviewCount} avis)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Script
        id="recipe-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
