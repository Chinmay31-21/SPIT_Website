import { useState, useEffect, useMemo } from 'react';

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

interface SearchIndex {
  id: string;
  title: string;
  content: string;
  url: string;
  type: string;
  metadata: any;
  keywords: string[];
}

export const useSearch = () => {
  const [searchIndex, setSearchIndex] = useState<SearchIndex[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState<Map<string, SearchResult[]>>(new Map());

  // Build search index
  useEffect(() => {
    const buildSearchIndex = () => {
      const index: SearchIndex[] = [
        // Alumni data
        {
          id: 'alumni-priya',
          title: 'Priya Sharma - Senior Software Engineer at Google',
          content: 'Priya Sharma Google Senior Software Engineer Computer Engineering 2020 Mountain View scalable systems machine learning search algorithms',
          url: '/alumni/priya-sharma',
          type: 'alumni',
          metadata: { year: 2020, industry: 'Technology', location: 'Mountain View, CA', department: 'Computer Engineering' },
          keywords: ['google', 'software engineer', 'machine learning', 'computer engineering']
        },
        {
          id: 'alumni-rahul',
          title: 'Rahul Mehta - VP of Engineering at Microsoft',
          content: 'Rahul Mehta Microsoft VP Engineering Information Technology 2018 Seattle cloud infrastructure Azure distributed systems DevOps',
          url: '/alumni/rahul-mehta',
          type: 'alumni',
          metadata: { year: 2018, industry: 'Technology', location: 'Seattle, WA', department: 'Information Technology' },
          keywords: ['microsoft', 'vp engineering', 'azure', 'cloud', 'devops']
        },
        // Pages
        {
          id: 'page-admissions',
          title: 'Admissions - SPIT Mumbai',
          content: 'Admissions process eligibility criteria fee structure scholarships important dates application form JEE Main',
          url: '/admissions',
          type: 'page',
          metadata: {},
          keywords: ['admissions', 'eligibility', 'fee', 'scholarship', 'jee main']
        },
        {
          id: 'page-placements',
          title: 'Training & Placement Cell - SPIT',
          content: 'Placement statistics companies recruiters training programs highest package average package placement rate',
          url: '/placements',
          type: 'page',
          metadata: {},
          keywords: ['placements', 'training', 'companies', 'package', 'recruiters']
        },
        {
          id: 'page-academics',
          title: 'Academics - Programs & Curriculum',
          content: 'Academic programs undergraduate postgraduate PhD computer engineering information technology electronics curriculum faculty',
          url: '/academics',
          type: 'page',
          metadata: {},
          keywords: ['academics', 'programs', 'curriculum', 'faculty', 'engineering']
        },
        // Documents
        {
          id: 'doc-naac',
          title: 'NAAC Accreditation Report',
          content: 'NAAC A+ grade accreditation report quality assurance institutional excellence academic performance',
          url: '/documents/naac-report.pdf',
          type: 'document',
          metadata: {},
          keywords: ['naac', 'accreditation', 'quality', 'report', 'a+ grade']
        },
        {
          id: 'doc-nba',
          title: 'NBA Accreditation Certificate',
          content: 'NBA accreditation certificate engineering programs quality standards curriculum assessment',
          url: '/documents/nba-certificate.pdf',
          type: 'document',
          metadata: {},
          keywords: ['nba', 'accreditation', 'certificate', 'engineering', 'quality']
        },
        // News
        {
          id: 'news-ranking',
          title: 'SPIT Achieves NIRF Ranking #42',
          content: 'SPIT achieves NIRF ranking 42 engineering category national institutional ranking framework excellence',
          url: '/news/nirf-ranking-2023',
          type: 'news',
          metadata: {},
          keywords: ['nirf', 'ranking', 'engineering', 'excellence', 'achievement']
        }
      ];

      setSearchIndex(index);
    };

    buildSearchIndex();
  }, []);

  // Fuzzy search implementation
  const fuzzyMatch = (query: string, text: string): number => {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    
    // Exact match gets highest score
    if (textLower.includes(queryLower)) {
      return 1.0;
    }

    // Calculate Levenshtein distance for fuzzy matching
    const words = queryLower.split(' ');
    const textWords = textLower.split(' ');
    
    let maxScore = 0;
    
    for (const queryWord of words) {
      for (const textWord of textWords) {
        const distance = levenshteinDistance(queryWord, textWord);
        const similarity = 1 - distance / Math.max(queryWord.length, textWord.length);
        maxScore = Math.max(maxScore, similarity);
      }
    }
    
    return maxScore;
  };

  // Levenshtein distance calculation
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Search function
  const search = async (query: string, filters: SearchFilters): Promise<SearchResult[]> => {
    if (!query.trim()) return [];

    const cacheKey = `${query}-${JSON.stringify(filters)}`;
    
    // Check cache first
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!;
    }

    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      const results: SearchResult[] = [];

      for (const item of searchIndex) {
        // Apply filters
        if (filters.type.length > 0 && !filters.type.map(t => t.toLowerCase()).includes(item.type)) {
          continue;
        }

        if (filters.year.length > 0 && item.metadata.year && !filters.year.includes(item.metadata.year)) {
          continue;
        }

        if (filters.industry.length > 0 && item.metadata.industry && !filters.industry.includes(item.metadata.industry)) {
          continue;
        }

        if (filters.location.length > 0 && item.metadata.location && !filters.location.some(loc => item.metadata.location.includes(loc))) {
          continue;
        }

        if (filters.department.length > 0 && item.metadata.department && !filters.department.includes(item.metadata.department)) {
          continue;
        }

        // Calculate relevance score
        const titleScore = fuzzyMatch(query, item.title) * 2; // Title matches are more important
        const contentScore = fuzzyMatch(query, item.content);
        const keywordScore = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query.toLowerCase())
        ) ? 1.5 : 0;

        const relevance = Math.max(titleScore, contentScore, keywordScore);

        if (relevance > 0.3) { // Threshold for relevance
          results.push({
            id: item.id,
            title: item.title,
            description: item.content.substring(0, 150) + '...',
            url: item.url,
            type: item.type as any,
            relevance,
            metadata: item.metadata
          });
        }
      }

      // Sort by relevance
      results.sort((a, b) => b.relevance - a.relevance);

      // Cache results
      setCache(prev => new Map(prev.set(cacheKey, results)));

      return results;
    } finally {
      setIsLoading(false);
    }
  };

  // Get search suggestions
  const getSuggestions = (query: string): string[] => {
    if (!query || query.length < 2) return [];

    const suggestions = new Set<string>();
    
    for (const item of searchIndex) {
      // Add title words that match
      const titleWords = item.title.toLowerCase().split(' ');
      titleWords.forEach(word => {
        if (word.includes(query.toLowerCase()) && word.length > 2) {
          suggestions.add(word);
        }
      });

      // Add keywords that match
      item.keywords.forEach(keyword => {
        if (keyword.includes(query.toLowerCase())) {
          suggestions.add(keyword);
        }
      });
    }

    return Array.from(suggestions).slice(0, 5);
  };

  return {
    search,
    getSuggestions,
    isLoading,
    clearCache: () => setCache(new Map())
  };
};