import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Book, 
  Search, 
  Download, 
  Calendar, 
  ExternalLink, 
  Library as LibraryIcon,
  CheckCircle,
  XCircle,
  MapPin,
  ChevronRight,
  FileText,
  Server
} from 'lucide-react';
import { ClassNames } from '@emotion/react';

// --- TYPE DEFINITION FOR OUR DATA (for TypeScript) ---
interface LibraryResource {
  id: string;
  type: 'Book' | 'E-Books' | 'Online Journals' | 'Research Papers' | 'Academic Databases' | 'Previous Year Papers' | 'Course Notes' | 'Reference Books' | 'Service';
  title: string;
  author?: string;
  status?: 'Available' | 'Checked Out';
  location?: string;
  coverImage?: string;
  url?: string;
  description: string;
  isbn?: string;
}

// --- CENTRALIZED & ENHANCED DATA SOURCE ---
const libraryData: LibraryResource[] = [
  // Engineering Books
  {
    id: 'b001',
    type: 'Book',
    title: 'Basic Electrical Engineering',
    author: 'Ravish R. Singh',
    status: 'Available',
    location: 'FE-BEE-12',
    coverImage: '/assets/BEE_RavishSingh.jpeg', // Use an actual path like '/covers/clrs.jpg' or leave empty
    url: '/assets/Basic-Electrical-Engineering-Ravish-R.-Singh.pdf',
    description: 'A comprehensive introduction to electrical engineering concepts, covering circuits, systems, and applications.',
    isbn: '978-0262046305',
  },
  {
    id: 'b002',
    type: 'Book',
    title: 'Basic Electrical Engineering',
    author: 'D C Kulshresta',
    status: 'Available',
    location: 'FE-BEE-05',
    coverImage: '/assets/D C Kulshresta.jpeg', // Use an actual path like '/covers/clrs.jpg' or leave empty
    url: '/assets/D C Kulshresta.pdf',
    description: 'A foundational text for understanding electrical engineering principles, focusing on circuit analysis and electrical machines.',
    isbn: '978-1119723026',
  },
  {
    id: 'b003',
    type: 'Book',
    title: 'Power Electronics: A First Course',
    author: 'Ned Mohan, Tore M. Undeland, William P. Robbins',
    status: 'Available',
    location: 'FE-BEE-01',
    coverImage: '/assets/PowerElectronicsNedMohan.jpeg', // Use an actual path like '/covers/clrs.jpg' or leave empty
    url: '/assets/Power Electronics A First Course Book by Ned Mohan.pdf',
    description: 'An introductory text on power electronics, covering converters, inverters, and applications in modern electrical systems.',
    isbn: '978-0134549897',
  },
  {
    id: 'b004',
    type: 'Book',
    title: 'Fundamental of Mathematics Sem-1 by G V Kumbhojkar',
    author: 'G V Kumbhojkar',
    status: 'Available',
    location: 'FE-Maths-11',
    coverImage: '/assets/GVKUMSem1.jpeg',
    url: '/assets/G V Kumbhojkar SEM-1.pdf',
    description: 'A comprehensive introduction to mathematical concepts and techniques for engineering students.',
    isbn: '978-1337093347',
  },
  {
    id: 'b005',
    type: 'Book',
    title: 'Signals and Systems',
    author: 'Alan V. Oppenheim, Alan S. Willsky',
    status: 'Checked Out',
    location: 'ECE-F-08',
    coverImage: '',
    url: 'https://www.pearson.com/en-us/subject-catalog/p/signals-and-systems/P200000000201',
    description: 'A comprehensive treatment of signals and systems, an core subject in electrical engineering.',
    isbn: '978-0138147570',
  },

  // Digital & Study Resources (as searchable items)
  { id: 'r001', type: 'E-Books', title: 'E-Books Collection', description: 'Access our vast digital library of e-books across all engineering disciplines.' },
  { id: 'r002', type: 'Online Journals', title: 'Online Journals Access', description: 'Read the latest research from IEEE, ACM, Springer, and more.' },
  { id: 'r003', type: 'Research Papers', title: 'Faculty Research Papers', description: 'A collection of papers published by SPIT faculty.' },
  { id: 'r004', type: 'Academic Databases', title: 'Academic Databases Portal', description: 'Search Scopus, Web of Science, and other academic databases.' },
  { id: 'r005', type: 'Previous Year Papers', title: 'Previous Year Question Papers', description: 'Download question papers from previous university examinations.' },
  { id: 'r006', type: 'Course Notes', title: 'Shared Course Notes', description: 'Find notes and study material uploaded by faculty and students.' },
  
  // Services (as searchable items)
  { id: 's001', type: 'Service', title: 'Book Borrowing', description: 'Information on borrowing policies, duration, and renewals.' },
  { id: 's002', type: 'Service', title: 'Inter-Library Loan', description: 'Request books or articles not available in the SPIT library.' },
];


// --- HELPER COMPONENTS (Co-located for simplicity) ---

// BookCard Component
const BookCard: React.FC<{ book: LibraryResource }> = ({ book }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
  };
  const isAvailable = book.status === 'Available';

  return (
    <motion.div
      variants={cardVariants}
      className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:border-[#00BFFF]/50"
    >
      {book.coverImage ? (
        <img src={book.coverImage} alt={`Cover of ${book.title}`} className="aspect-[3/4] w-full object-cover rounded-md mb-4 shadow-lg" />
      ) : (
        <div className="aspect-[3/4] w-full bg-gradient-to-br from-[#00BFFF]/20 to-[#FFD700]/20 rounded-md mb-4 flex items-center justify-center">
          <Book className="h-12 w-12 text-white/20" />
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-white text-md mb-1 flex-grow">{book.title}</h3>
        {book.author && <p className="text-sm text-white/60 mb-3">{book.author}</p>}
        <div className="text-xs space-y-2 mt-auto">
            {book.status && (
              <div className={`flex items-center ${isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                {isAvailable ? <CheckCircle className="h-4 w-4 mr-2"/> : <XCircle className="h-4 w-4 mr-2"/>}
                {book.status}
              </div>
            )}
            {book.location && (
              <div className="flex items-center text-white/70">
                <MapPin className="h-4 w-4 mr-2"/>
                Location: {book.location}
              </div>
            )}
        </div>
        {book.url && (
          <a href={book.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-center w-full bg-[#00BFFF]/80 text-white font-semibold py-2 rounded-md text-sm hover:bg-[#00BFFF] transition-colors flex items-center justify-center gap-2">
            View Details <ExternalLink className="h-4 w-4"/>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ResourceSection Component
const ResourceSection: React.FC<{ icon: React.ReactNode; title: string; items: string[]; onItemClick: (item: string) => void; }> = ({ icon, title, items, onItemClick }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full flex flex-col"
        >
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-2xl font-bold text-[#FFD700] ml-3">{title}</h3>
        </div>
        <ul className="space-y-3 text-white mt-2 flex-grow">
            {items.map((item, idx) => (
            <li key={idx}>
                <button onClick={() => onItemClick(item)} className="flex items-center w-full text-left text-white hover:text-[#FFD700] hover:translate-x-1 transition-all duration-200 group">
                <ChevronRight className="h-5 w-5 mr-2 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors" />
                {item}
                </button>
            </li>
            ))}
        </ul>
        </motion.div>
    );
};

// SearchResults Component
const SearchResults: React.FC<{ results: LibraryResource[] }> = ({ results }) => {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

    if (results.length === 0) {
        return <div className="text-center py-16"><h3 className="text-2xl font-semibold text-white/80">No Results Found</h3><p className="text-white/60 mt-2">Try a different search term or check your spelling.</p></div>;
    }
  
    const books = results.filter(item => item.type === 'Book');
    const otherResources = results.filter(item => item.type !== 'Book');

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show">
        <h2 className="text-2xl font-bold mb-6 text-[#00BFFF]">Search Results ({results.length})</h2>
        {books.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {books.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
        )}
        {otherResources.length > 0 && (
            <div className="space-y-4">
                {otherResources.map((item) => (
                    <motion.div key={item.id} variants={itemVariants} className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center gap-4">
                        {item.type === 'Service' ? <Server className="h-6 w-6 text-[#FFD700]"/> : <FileText className="h-6 w-6 text-[#FFD700]"/>}
                        <div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-sm text-white/60">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        )}
        </motion.div>
    );
};

// NewArrivals Component
const NewArrivals = () => {
    const newBooks = libraryData.filter((item) => item.type === 'Book').slice(0, 4);
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

    return (
        <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-[#4C2A85] dark:bg-[#BCEDF6]">New Arrivals</h2>
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newBooks.map((book) => <BookCard key={book.id} book={book} />)}
        </motion.div>
        </div>
    );
};


// --- MAIN LIBRARY COMPONENT ---
export const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<LibraryResource[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') { setSearchResults([]); return; }
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = libraryData.filter(item =>
        item.title.toLowerCase().includes(lowercasedTerm) ||
        (item.author && item.author.toLowerCase().includes(lowercasedTerm)) ||
        item.type.toLowerCase().includes(lowercasedTerm) ||
        item.description.toLowerCase().includes(lowercasedTerm)
    );
    setSearchResults(filtered);
  }, [searchTerm]);

  const handleResourceClick = (resourceTitle: string) => setSearchTerm(resourceTitle);

  const seoTitle = searchTerm ? `SPIT Library | Results for "${searchTerm}"` : 'SPIT Library | Advanced Engineering Book Search & Digital Resources';
  const seoDescription = searchTerm ? `Find results for "${searchTerm}" in the SPIT Library catalogue. Check availability, location, and access digital resources.` : 'SPIT Library: Your gateway to knowledge. Search for engineering books with real-time availability, access our DSpace repository, Moodle platform, and a vast collection of digital resources.';
  const seoKeywords = 'SPIT Library, engineering books, book availability, DSpace, Moodle, digital library, online catalogue, computer science books, mechanical engineering books';

  const bookSchema = libraryData
    .filter((item) => item.type === 'Book')
    .map(book => `{
      "@type": "Book",
      "name": "${book.title}",
      "author": {"@type": "Person", "name": "${book.author}"},
      "isbn": "${book.isbn}",
      "url": "${book.url}",
      "description": "${book.description.replace(/"/g, '\\"')}",
      "bookFormat": "https://schema.org/Hardcover"
    }`).join(',');

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{"@context": "https://schema.org", "@type": "Library", "name": "SPIT Library", "url": "https://spit.ac.in/library", "hasPart": [${bookSchema}]}`}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] mx-auto px-4 py-8">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#3993DD] to-[#2F4858] mb-2">SPIT Library Portal</h1>
            <p className="text-lg text-white/70">Your Advanced Gateway to Knowledge</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search the entire library catalogue..." className="w-full px-6 py-4 rounded-full bg-black/30 backdrop-blur-sm border border-[#00BFFF]/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300" aria-label="Search library catalogue"/>
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#00BFFF] h-6 w-6" />
            </div>
          </div>
          
          {searchTerm ? (
            <SearchResults results={searchResults} />
          ) : (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <a href="http://dspace.spit.ac.in/xmlui/handle/123456789/6" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-6 rounded-xl border border-transparent hover:border-[#FFD700]/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 flex items-center gap-4">
                  <Book className="text-[#FFD700] h-10 w-10" />
                  <div><h2 className="text-xl font-bold text-[#FFD700]">DSpace Repository</h2><p className="text-white/70">Access research papers, theses, and digital collections.</p></div>
                </a>
                <a href="http://moodle.spit.ac.in" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-6 rounded-xl border border-transparent hover:border-[#00BFFF]/50 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300 flex items-center gap-4">
                  <Download className="text-[#00BFFF] h-10 w-10" />
                  <div><h2 className="text-xl font-bold text-[#00BFFF]">Moodle Platform</h2><p className="text-white/70">Find course materials, assignments, and online resources.</p></div>
                </a>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <ResourceSection icon={<LibraryIcon className="text-[#FFD700] h-8 w-8" />} title="Digital Resources" items={["E-Books", "Online Journals", "Research Papers", "Academic Databases"]} onItemClick={handleResourceClick} />
                <ResourceSection icon={<Download className="text-[#FFD700] h-8 w-8" />} title="Study Materials" items={["Previous Year Papers", "Course Notes", "Reference Books"]} onItemClick={handleResourceClick} />
                <ResourceSection icon={<Calendar className="text-[#FFD700] h-8 w-8" />} title="Library Services" items={["Book Borrowing", "Inter-Library Loan", "Reading Rooms"]} onItemClick={handleResourceClick} />
              </div>
              <NewArrivals />
            </>
          )}
        </div>
      </div>
    </>
  );
};