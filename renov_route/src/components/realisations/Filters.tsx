'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, industries, years } from '@/lib/data/case-studies';
import { GoogleAnalytics } from '@/lib/analytics';
import { useDebounce } from '@/hooks/useAnalyticsTracking';

// Hook pour gérer la taille de l'écran de manière sûre
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return { isDesktop, isClient };
}

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

export interface FilterState {
  categories: string[];
  industries: string[];
  years: string[];
  search: string;
}

export default function Filters({ onFilterChange, className = '' }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    industries: [],
    years: [],
    search: ''
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const { isDesktop, isClient } = useIsDesktop();

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const ga = GoogleAnalytics.getInstance()
  const debouncedSearch = useDebounce(filters.search, 1000)

  useEffect(() => {
    if (debouncedSearch) {
      ga.trackFilterSearch(debouncedSearch)
    }
  }, [debouncedSearch, ga])

  const toggleFilter = (key: 'categories' | 'industries' | 'years', value: string) => {
    setFilters(prev => {
      const currentArray = prev[key];
      const isSelected = currentArray.includes(value);

      ga.trackFilterToggle(key, value, isSelected ? 'remove' : 'add')

      const newArray = isSelected
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];

      return { ...prev, [key]: newArray };
    });
  };

  const updateSearch = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const clearFilters = () => {
    ga.trackFilterClear()
    setFilters({
      categories: [],
      industries: [],
      years: [],
      search: ''
    });
  };

  const activeFiltersCount = filters.categories.length + filters.industries.length + filters.years.length + (filters.search ? 1 : 0);

  return (
    <section className={`bg-white border border-slate-200 p-8 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A]">Filtrer les projets</h2>
          {activeFiltersCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-[#FACC15] text-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm"
            >
              {activeFiltersCount}
            </motion.span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0F172A] text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] rounded-sm transition-colors focus-ring"
          >
            {isExpanded ? 'Masquer' : 'Filtres'} ({activeFiltersCount})
          </button>

          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#0F172A] transition-colors focus-ring"
            >
              Effacer tout
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {(isExpanded || (isClient && isDesktop)) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={filters.search}
                onChange={(e) => updateSearch(e.target.value)}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A] focus-ring transition-colors duration-200 font-medium"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Catégorie
                </label>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isSelected = filters.categories.includes(category.id);
                    return (
                      <motion.button
                        key={category.id}
                        onClick={() => toggleFilter('categories', category.id)}
                        className={`w-full text-left px-3 py-2.5 text-xs font-bold transition-all duration-200 focus-ring group relative overflow-hidden rounded-sm ${
                          isSelected
                            ? 'bg-[#FACC15] text-[#0F172A] border border-[#FACC15]'
                            : 'bg-white hover:bg-[#F8FAFC] border border-slate-200 text-[#0F172A]'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-2 h-2 bg-[#0F172A]"
                          />
                        )}
                        
                        <span className="flex items-center justify-between">
                          <span className="font-bold uppercase tracking-tight text-xs">
                            {category.label}
                          </span>
                          <span className="text-[10px] font-bold opacity-70">
                            ({category.count})
                          </span>
                        </span>
                        
                        {/* Effet de brillance pour les éléments sélectionnés */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Secteur
                </label>
                <div className="space-y-2">
                  {industries.map((industry) => {
                    const isSelected = filters.industries.includes(industry);
                    return (
                      <motion.button
                        key={industry}
                        onClick={() => toggleFilter('industries', industry)}
                        className={`w-full text-left px-3 py-2.5 text-xs font-bold transition-all duration-200 focus-ring group relative overflow-hidden rounded-sm ${
                          isSelected
                            ? 'bg-[#FACC15] text-[#0F172A] border border-[#FACC15]'
                            : 'bg-white hover:bg-[#F8FAFC] border border-slate-200 text-[#0F172A]'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-2 h-2 bg-[#0F172A]"
                          />
                        )}
                        
                        <span className="font-bold uppercase tracking-tight text-xs">
                          {industry}
                        </span>
                        
                        {/* Effet de brillance pour les éléments sélectionnés */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Année
                </label>
                <div className="space-y-2">
                  {years.map((year) => {
                    const yearStr = year.toString();
                    const isSelected = filters.years.includes(yearStr);
                    return (
                      <motion.button
                        key={year}
                        onClick={() => toggleFilter('years', yearStr)}
                        className={`w-full text-left px-3 py-2.5 text-xs font-bold transition-all duration-200 focus-ring group relative overflow-hidden rounded-sm ${
                          isSelected
                            ? 'bg-[#FACC15] text-[#0F172A] border border-[#FACC15]'
                            : 'bg-white hover:bg-[#F8FAFC] border border-slate-200 text-[#0F172A]'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-2 h-2 bg-[#0F172A]"
                          />
                        )}
                        
                        <span className="font-bold text-xs tabular-nums">
                          {year}
                        </span>
                        
                        {/* Effet de brillance pour les éléments sélectionnés */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
