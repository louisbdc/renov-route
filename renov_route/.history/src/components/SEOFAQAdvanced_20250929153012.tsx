'use client';

import Script from 'next/script';
import { useState } from 'react';

interface FAQCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
  lastUpdated?: string;
  helpful?: number;
  notHelpful?: number;
  views?: number;
  related?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  author?: string;
  source?: string;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
}

interface SEOFAQAdvancedProps {
  categories: FAQCategory[];
  faqs: FAQItem[];
  className?: string;
  showStats?: boolean;
  showDifficulty?: boolean;
  showRelated?: boolean;
  showAttachments?: boolean;
  collapsible?: boolean;
  searchable?: boolean;
}

export default function SEOFAQAdvanced({ 
  categories, 
  faqs, 
  className = "",
  showStats = true,
  showDifficulty = true,
  showRelated = true,
  showAttachments = true,
  collapsible = true,
  searchable = true
}: SEOFAQAdvancedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    if (!collapsible) return;
    
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Débutant';
      case 'intermediate':
        return 'Intermédiaire';
      case 'advanced':
        return 'Avancé';
      default:
        return 'Général';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "dateCreated": faq.lastUpdated || new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": faq.author || "Renov Route"
        }
      },
      "keywords": faq.keywords?.join(", ") || "",
      "category": faq.category
    }))
  };

  return (
    <>
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            
            {searchable && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Rechercher dans les FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Toutes les catégories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon && <span className="mr-1">{category.icon}</span>}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      {faq.difficulty && showDifficulty && (
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(faq.difficulty)}`}>
                          {getDifficultyLabel(faq.difficulty)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === faq.category)?.name || faq.category}
                      </span>
                      {faq.estimatedTime && (
                        <span>⏱️ {faq.estimatedTime}</span>
                      )}
                      {faq.author && (
                        <span>👤 {faq.author}</span>
                      )}
                    </div>
                    
                    {collapsible ? (
                      <div>
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-3"
                        >
                          {openItems.has(faq.id) ? 'Masquer la réponse' : 'Voir la réponse'}
                          <svg
                            className={`w-4 h-4 ml-1 transition-transform ${openItems.has(faq.id) ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {openItems.has(faq.id) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <div className="prose prose-sm max-w-none">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                            
                            {showAttachments && faq.attachments && faq.attachments.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Pièces jointes</h4>
                                <div className="space-y-2">
                                  {faq.attachments.map((attachment, index) => (
                                    <a
                                      key={index}
                                      href={attachment.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                      </svg>
                                      {attachment.name} ({attachment.type})
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {showRelated && faq.related && faq.related.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Questions liées</h4>
                                <div className="flex flex-wrap gap-1">
                                  {faq.related.map((relatedId, index) => {
                                    const relatedFaq = faqs.find(f => f.id === relatedId);
                                    return relatedFaq ? (
                                      <button
                                        key={index}
                                        onClick={() => {
                                          setSearchTerm(relatedFaq.question);
                                          setSelectedCategory(relatedFaq.category);
                                        }}
                                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hover:bg-blue-200"
                                      >
                                        {relatedFaq.question}
                                      </button>
                                    ) : null;
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="prose prose-sm max-w-none">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {showStats && (
                      <div className="mt-4 flex items-center space-x-4 text-xs text-gray-600">
                        {faq.views && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {faq.views} vues
                          </span>
                        )}
                        {faq.helpful !== undefined && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8z" />
                            </svg>
                            {faq.helpful} utiles
                          </span>
                        )}
                        {faq.notHelpful !== undefined && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 019.263 3h4.017c.163 0 .326.02.485.06L17 4m-7 10V6m7 8a2 2 0 01-2 2h-2a2 2 0 01-2-2v8a2 2 0 012-2h2a2 2 0 012-2v8z" />
                            </svg>
                            {faq.notHelpful} pas utiles
                          </span>
                        )}
                      </div>
                    )}
                    
                    {faq.keywords && faq.keywords.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-1">
                          {faq.keywords.map((keyword, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              #{keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Script
        id="faq-advanced-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}