import React from 'react';
import { Book, Search, Download, Calendar } from 'lucide-react';

export const Library = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          SPIT Library
        </h1>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books, journals, and resources..."
                className="w-full px-6 py-4 rounded-lg bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00BFFF]"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#00BFFF]" />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Digital Resources */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <Book className="text-[#FFD700] mb-4 h-8 w-8" />
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Digital Resources</h2>
            <ul className="space-y-3 text-white/80">
              <li>E-Books Collection</li>
              <li>Online Journals</li>
              <li>Research Papers</li>
              <li>Academic Databases</li>
              <li>Video Lectures</li>
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
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-4">
                <div className="aspect-[3/4] mb-4 bg-gradient-to-br from-[#00BFFF]/20 to-[#FFD700]/20 rounded-md"></div>
                <h3 className="text-white font-semibold mb-2">Book Title {i}</h3>
                <p className="text-white/60 text-sm">Author Name</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};