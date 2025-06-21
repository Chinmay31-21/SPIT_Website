import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, X, Clock, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'alumni' | 'page' | 'document' | 'news';
  relevance: number;
  metadata?: {
    year?: number;
    industry?: string;
    location?: string;
    department?: string;
  };
}

interface SearchFilters {
  type: string[];
  year: number[];
  industry: string[];
  location: string[];
  department: string[];
}

interface SearchEngineProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string, filters: SearchFilters) => void;
  results: SearchResult[];
  isLoading: boolean;
}

export const SearchEngine: React.FC<SearchEngineProps> = ({
  isOpen,
  onClose,
  onSearch,
  results,
  isLoading
}) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    type: [],
    year: [],
    industry: [],
    location: [],
    department: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Sample data for filters
  const filterOptions = {
    type: ['Alumni', 'Pages', 'Documents', 'News'],
    year: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    industry: ['Technology', 'Finance', 'Healthcare', 'Education', 'Consulting', 'Manufacturing', 'Startup'],
    location: ['Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'USA', 'UK', 'Canada'],
    department: ['Computer Engineering', 'Information Technology', 'Electronics & Telecom', 'Mechanical', 'Civil']
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Generate search suggestions
  const searchSuggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const suggestions = [
      'Alumni in Technology',
      'Computer Engineering graduates',
      'Alumni at Google',
      'Mumbai based alumni',
      'Class of 2020',
      'Research publications',
      'Placement statistics',
      'Faculty directory'
    ];

    return suggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) return;

    // Add to recent searches
    const newRecentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));

    // Perform search
    onSearch(query, filters);

    // Track search analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'search', {
        search_term: query,
        filters: JSON.stringify(filters)
      });
    }
  };

  const handleFilterChange = (category: keyof SearchFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value as never)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value as never]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      year: [],
      industry: [],
      location: [],
      department: []
    });
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'alumni': return '👨‍🎓';
      case 'page': return '📄';
      case 'document': return '📋';
      case 'news': return '📰';
      default: return '🔍';
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-[#FFD700]/30 text-white rounded px-1">
          {part}
        </mark>
      ) : part
    );
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-b border-white/20 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Search SPIT</h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search alumni, pages, documents..."
                className="w-full pl-12 pr-4 py-4 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#4169E1] text-lg"
                autoFocus
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors ${
                  showFilters ? 'bg-[#4169E1] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <Filter size={20} />
              </button>
            </div>

            {/* Search Suggestions */}
            <AnimatePresence>
              {query && searchSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/20 rounded-lg overflow-hidden z-10"
                >
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(suggestion);
                        setSuggestions([]);
                      }}
                      className="w-full px-4 py-3 text-left text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <Search className="inline w-4 h-4 mr-3 text-white/40" />
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="bg-black/30 border border-white/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Filters</h3>
                    <button
                      onClick={clearFilters}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(filterOptions).map(([category, options]) => (
                      <div key={category}>
                        <h4 className="text-white/80 font-medium mb-2 capitalize">{category}</h4>
                        <div className="space-y-1 max-h-32 overflow-y-auto">
                          {options.map((option) => (
                            <label key={option} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters[category as keyof SearchFilters].includes(option as never)}
                                onChange={() => handleFilterChange(category as keyof SearchFilters, option)}
                                className="rounded border-white/20 bg-black/30 text-[#4169E1] focus:ring-[#4169E1]"
                              />
                              <span className="text-white/70 text-sm">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white/80 font-medium mb-3 flex items-center gap-2">
                <Clock size={16} />
                Recent Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors text-sm"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Button */}
          <div className="flex gap-3">
            <button
              onClick={handleSearch}
              disabled={!query.trim() || isLoading}
              className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#FFD700] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto p-6 max-h-[60vh] overflow-y-auto">
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">
                  {results.length} results found
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <TrendingUp size={16} />
                  Sorted by relevance
                </div>
              </div>

              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-white/20 rounded-lg p-4 hover:bg-black/40 transition-colors cursor-pointer"
                  onClick={() => window.open(result.url, '_blank')}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{getResultIcon(result.type)}</span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {highlightText(result.title, query)}
                      </h4>
                      <p className="text-white/70 text-sm mb-2">
                        {highlightText(result.description, query)}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span className="capitalize">{result.type}</span>
                        <span>Relevance: {Math.round(result.relevance * 100)}%</span>
                        {result.metadata?.year && <span>Year: {result.metadata.year}</span>}
                        {result.metadata?.industry && <span>Industry: {result.metadata.industry}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {query && results.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white font-semibold mb-2">No results found</h3>
            <p className="text-white/60">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};