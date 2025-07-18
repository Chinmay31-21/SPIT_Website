import React, { useState } from 'react';
import { Book, Search, Download, Calendar, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Sample data for search (expanded with engineering books)
const resources = [
  { type: 'Digital', title: 'E-Books Collection' },
  { type: 'Digital', title: 'Online Journals' },
  { type: 'Digital', title: 'Research Papers' },
  { type: 'Digital', title: 'Academic Databases' },
  { type: 'Digital', title: 'Video Lectures' },
  { type: 'Engineering', title: 'Introduction to Algorithms by Cormen, Leiserson, Rivest, Stein' },
  { type: 'Engineering', title: 'Fundamentals of Engineering Thermodynamics by Moran & Shapiro' },
  { type: 'Engineering', title: 'Digital Design by M. Morris Mano' },
  { type: 'Engineering', title: 'Mechanics of Materials by Gere & Timoshenko' },
  { type: 'Engineering', title: 'Signals and Systems by Oppenheim & Willsky' },
  { type: 'Study', title: 'Previous Year Papers' },
  { type: 'Study', title: 'Course Notes' },
  { type: 'Study', title: 'Sample Papers' },
  { type: 'Study', title: 'Reference Books' },
  { type: 'Study', title: 'Practice Sets' },
  { type: 'Service', title: 'Book Borrowing' },
  { type: 'Service', title: 'Inter-Library Loan' },
  { type: 'Service', title: 'Reference Services' },
  { type: 'Service', title: 'Reading Rooms' },
  { type: 'Service', title: 'Print & Copy' },
];

const engineeringBooks = [
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    cover: '/assets/BLTharejaVol1.jpeg', // Add cover image URL if available
    url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms-third-edition/',
  },
  {
    title: 'Fundamentals of Engineering Thermodynamics',
    author: 'Michael J. Moran, Howard N. Shapiro',
    cover: '',
    url: 'https://www.wiley.com/en-us/Fundamentals+of+Engineering+Thermodynamics%2C+9th+Edition-p-9781119723026',
  },
  {
    title: 'Digital Design',
    author: 'M. Morris Mano',
    cover: '',
    url: 'https://www.pearson.com/store/p/digital-design/P100000677978',
  },
  {
    title: 'Mechanics of Materials',
    author: 'James M. Gere, Stephen P. Timoshenko',
    cover: '',
    url: 'https://www.pearson.com/store/p/mechanics-of-materials/P100000677978',
  },
  {
    title: 'Signals and Systems',
    author: 'Alan V. Oppenheim, Alan S. Willsky',
    cover: '',
    url: 'https://www.pearson.com/store/p/signals-and-systems/P100000677978',
  },
];

export const Library = () => {
  const [search, setSearch] = useState('');
  const filteredResources = resources.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredBooks = engineeringBooks.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  // Dynamic SEO based on search
  const seoTitle = search
    ? `SPIT Library | Results for "${search}"`
    : 'SPIT Library | Engineering Books, Digital Resources, DSpace, Moodle';
  const seoDescription = search
    ? `Search results for "${search}" in SPIT Library. Find engineering books, digital resources, DSpace, Moodle, and more.`
    : 'SPIT Library: Find top engineering books, digital resources, e-books, DSpace repository, Moodle platform, study materials, and academic services for students and faculty.';
  const seoKeywords = search
    ? `${search}, SPIT Library, engineering books, DSpace, Moodle, study materials`
    : 'SPIT Library, engineering books, Introduction to Algorithms, Thermodynamics, Digital Design, Mechanics of Materials, Signals and Systems, DSpace, Moodle, e-books, journals, study materials, research papers';

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        {/* Open Graph tags */}
        <meta property="og:title" content="SPIT Library | Engineering Books & Digital Resources" />
        <meta property="og:description" content="Discover engineering books, digital resources, DSpace, Moodle, and more at SPIT Library." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spit.ac.in/library" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SPIT Library | Engineering Books & Digital Resources" />
        <meta name="twitter:description" content="Discover engineering books, digital resources, DSpace, Moodle, and more at SPIT Library." />
        {/* Structured Data for Library and Books */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Library",
            "name": "SPIT Library",
            "url": "https://spit.ac.in/library",
            "description": "SPIT Library offers engineering books, digital resources, DSpace repository, Moodle platform, and academic services.",
            "hasBook": [
              ${engineeringBooks.map(book => `
                {
                  "@type": "Book",
                  "name": "${book.title}",
                  "author": "${book.author}",
                  "url": "${book.url}"
                }
              `).join(',')}
            ]
          }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8 text-center">
            SPIT Library
          </h1>

          {/* Search Section */}
          <div className="mb-12 ">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#5E035E] to-[#30036B] ">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search books, journals, engineering books, and resources..."
                  className="w-full px-6 py-4 rounded-lg bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00BFFF]"
                  aria-label="Search library resources"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#00BFFF]" />
              </div>
              {search && (
                <div className="mt-4 bg-black/40 rounded-lg p-4">
                  <h3 className="text-[#FFD700] font-semibold mb-2">Search Results:</h3>
                  <ul className="space-y-2 text-white/80">
                    {filteredResources.map((r, idx) => (
                      <li key={idx}>{r.title}</li>
                    ))}
                    {filteredBooks.map((b, idx) => (
                      <li key={`book-${idx}`}>
                        <a
                          href={b.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FFD700] underline"
                        >
                          {b.title} <span className="text-white/60">by {b.author}</span>
                        </a>
                      </li>
                    ))}
                    {filteredResources.length === 0 && filteredBooks.length === 0 && (
                      <li>No results found.</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Important Section: DSpace & Moodle */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="http://dspace.spit.ac.in/xmlui/handle/123456789/6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black/30 backdrop-blur-md border border-[#FFD700]/40 rounded-lg p-6 hover:bg-black/40 transition"
              >
                <Book className="text-[#FFD700] mr-4 h-8 w-8" />
                <div>
                  <h2 className="text-xl font-bold text-[#FFD700]">DSpace Repository</h2>
                  <p className="text-white/80 text-sm">Access SPIT's institutional repository for research papers, theses, and digital collections.</p>
                </div>
                <ExternalLink className="ml-auto text-[#FFD700]" />
              </a>
              <a
                href="http://moodle.spit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black/30 backdrop-blur-md border border-[#FFD700]/40 rounded-lg p-6 hover:bg-black/40 transition"
              >
                <Download className="text-[#FFD700] mr-4 h-8 w-8" />
                <div>
                  <h2 className="text-xl font-bold text-[#FFD700]">Moodle Platform</h2>
                  <p className="text-white/80 text-sm">Access course materials, assignments, and online learning resources.</p>
                </div>
                <ExternalLink className="ml-auto text-[#FFD700]" />
              </a>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Resources */}
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <Book className="text-[#FFD700] mb-4 h-8 w-8" />
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Digital Resources & Engineering Books</h2>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a
                    href="http://dspace.spit.ac.in/xmlui/handle/123456789/6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-[#FFD700] transition"
                  >
                    DSpace Repository <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://moodle.spit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-[#FFD700] transition"
                  >
                    Moodle Platform <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </li>
                <li>E-Books Collection</li>
                <li>Online Journals</li>
                <li>Research Papers</li>
                <li>Academic Databases</li>
                <li>Video Lectures</li>
                {/* Engineering books for SEO */}
                {engineeringBooks.map((book, idx) => (
                  <li key={idx}>
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFD700] underline"
                    >
                      {book.title} <span className="text-white/60">by {book.author}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Materials */}
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <Download className="text-[#FFD700] mb-4 h-8 w-8" />
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Study Materials</h2>
              <ul className="space-y-3 text-white/80">
                <li>Previous Year Papers</li>
                <li>Course Notes</li>
                <li>Sample Papers</li>
                <li>Reference Books</li>
                <li>Practice Sets</li>
              </ul>
            </div>

            {/* Library Services */}
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <Calendar className="text-[#FFD700] mb-4 h-8 w-8" />
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Library Services</h2>
              <ul className="space-y-3 text-white/80">
                <li>Book Borrowing</li>
                <li>Inter-Library Loan</li>
                <li>Reference Services</li>
                <li>Reading Rooms</li>
                <li>Print & Copy</li>
              </ul>
            </div>
          </div>

          {/* New Arrivals */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-6">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringBooks.map((book, idx) => (
                <div key={idx} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-4">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="aspect-[3/4] mb-4 rounded-md object-cover w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-[3/4] mb-4 bg-gradient-to-br from-[#00BFFF]/20 to-[#FFD700]/20 rounded-md"></div>
                  )}
                  <h3 className="text-white font-semibold mb-2">{book.title}</h3>
                  <p className="text-white/60 text-sm">{book.author}</p>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD700] underline text-sm"
                  >
                    View Book
                  </a>
                </div>
              ))}
              {/* ...existing code for other books if needed... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};