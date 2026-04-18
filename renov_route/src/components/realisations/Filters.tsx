'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, industries, years } from '@/lib/data/case-studies';
import { GoogleAnalytics } from '@/lib/analytics';
import { useDebounce } from '@/hooks/useAnalyticsTracking';

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

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const ga = GoogleAnalytics.getInstance();
  const debouncedSearch = useDebounce(filters.search, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      ga.trackFilterSearch(debouncedSearch);
    }
  }, [debouncedSearch, ga]);

  const toggleFilter = (key: 'categories' | 'industries' | 'years', value: string) => {
    setFilters(prev => {
      const currentArray = prev[key];
      const isSelected = currentArray.includes(value);
      ga.trackFilterToggle(key, value, isSelected ? 'remove' : 'add');
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
    ga.trackFilterClear();
    setFilters({ categories: [], industries: [], years: [], search: '' });
  };

  const advancedFiltersCount = filters.categories.length + filters.industries.length + filters.years.length;
  const totalActiveCount = advancedFiltersCount + (filters.search ? 1 : 0);

  return (
    <section className={className}>
      {/* Search bar + Filter toggle — single row */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher un projet, un client, un secteur…"
            value={filters.search}
            onChange={(e) => updateSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-sm text-[#0F172A] placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#0F172A] transition-colors"
          />
          {filters.search && (
            <button
              type="button"
              onClick={() => updateSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-[#0F172A] transition-colors"
              aria-label="Effacer la recherche"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(v => !v)}
          aria-expanded={isExpanded}
          className={`inline-flex items-center justify-center gap-3 px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors border ${
            isExpanded || advancedFiltersCount > 0
              ? 'bg-[#0F172A] text-white border-[#0F172A]'
              : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#0F172A]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filtres
          {advancedFiltersCount > 0 && (
            <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-black rounded-sm ${
              isExpanded || advancedFiltersCount > 0 ? 'bg-[#FACC15] text-[#0F172A]' : 'bg-[#0F172A] text-white'
            }`}>
              {advancedFiltersCount}
            </span>
          )}
          <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {totalActiveCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#0F172A] transition-colors"
          >
            Effacer
          </button>
        )}
      </div>

      {/* Expandable advanced filters */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 bg-white border border-slate-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Categories */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                    Catégorie
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const isSelected = filters.categories.includes(category.id);
                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => toggleFilter('categories', category.id)}
                          className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-black uppercase tracking-tight rounded-sm border transition-colors ${
                            isSelected
                              ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15]'
                              : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#0F172A]'
                          }`}
                        >
                          {category.label}
                          <span className="text-[10px] opacity-60 tabular-nums">{category.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                    Secteur
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => {
                      const isSelected = filters.industries.includes(industry);
                      return (
                        <button
                          key={industry}
                          type="button"
                          onClick={() => toggleFilter('industries', industry)}
                          className={`px-3 py-2 text-xs font-black uppercase tracking-tight rounded-sm border transition-colors ${
                            isSelected
                              ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15]'
                              : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#0F172A]'
                          }`}
                        >
                          {industry}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Years */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-4">
                    Année
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {years.map((year) => {
                      const yearStr = year.toString();
                      const isSelected = filters.years.includes(yearStr);
                      return (
                        <button
                          key={year}
                          type="button"
                          onClick={() => toggleFilter('years', yearStr)}
                          className={`px-3 py-2 text-xs font-black tabular-nums rounded-sm border transition-colors ${
                            isSelected
                              ? 'bg-[#FACC15] text-[#0F172A] border-[#FACC15]'
                              : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#0F172A]'
                          }`}
                        >
                          {year}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
