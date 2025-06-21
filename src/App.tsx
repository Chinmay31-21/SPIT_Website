import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { SearchEngine } from './components/Search/SearchEngine';
import { useSearch } from './hooks/useSearch';
import { SEOLayout } from './components/Layout/SEOLayout';

import {
  Search,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import { PowerUpAnimation } from './components/PowerUpAnimation';
import { BrowserRouter as Router, Routes, Route, useLocation, NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Students } from './pages/Students';
import { Research } from './pages/Research';
import { Library } from './pages/Library';
import { Placements } from './pages/Placements';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { NAAC } from './pages/accreditation/NAAC';
import { NIRF } from './pages/accreditation/NIRF';
import { IIC } from './pages/accreditation/IIC';
import { ARIIA } from './pages/accreditation/ARIIA';
import { NBA } from './pages/accreditation/NBA';
import { IQAC } from './pages/accreditation/IQAC';
import { AICTE } from './pages/accreditation/AICTE';
import { MandatoryDisclosure } from './pages/resources/MandatoryDisclosure';
import { Tender } from './pages/resources/MandatoryDisclosure';
import { AntiRagging } from './pages/resources/MandatoryDisclosure';
import { RTI } from './pages/resources/MandatoryDisclosure';
import { Grievance } from './pages/resources/MandatoryDisclosure';
import { AlumniNetworkDemo } from './pages/AlumniNetworkDemo';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [showPowerUp, setShowPowerUp] = useState(() => {
    // Only show power-up animation on first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  const { search, isLoading: searchLoading } = useSearch();

  useEffect(() => {
    if (!showPowerUp) {
      // Mark as visited for this session
      sessionStorage.setItem('hasVisited', 'true');
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, 1500);
    }
  }, [showPowerUp]);

  const handleSearch = async (query: string, filters: any) => {
    const results = await search(query, filters);
    setSearchResults(results);
  };

  if (showPowerUp) {
    return <PowerUpAnimation onComplete={() => setShowPowerUp(false)} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center justify-center">
        <div className={`relative w-40 h-40 ${isAnimating ? 'animate-coin-flip' : ''}`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] shadow-lg transform-gpu backface-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
                alt="SPIT Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SEOLayout>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex flex-col">
          <header className="relative border-t-2 border-[#4169E1] bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex items-start gap-4 w-full md:w-auto">
                  <Link to="/" className="flex items-center gap-4">
                    <img
                      src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
                      alt="SPIT Logo"
                      className="w-16 h-16 object-contain animate-float"
                    />
                    <div>
                      <p className="text-[#FFFFFF]/80 dark:text-white/80 text-sm">Bhartiya Vidya Bhavan's</p>
                      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] dark:from-[#FFFFFF] dark:to-[#FFFFFF] bg-clip-text text-transparent animate-glow">
                        Sardar Patel Institute of Technology
                      </h1>
                      <p className="text-[#FFFFFF] dark:text-white text-xs mt-1">
                        Autonomous Institute Affiliated to Mumbai University
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative w-full max-w-2xl mx-auto">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-[#4169E1]/30 text-[#0A0A0A] dark:text-white placeholder-[#0A0A0A]/50 dark:placeholder-white/50 focus:outline-none focus:border-[#4169E1] transition-all backdrop-blur-lg"
                      onFocus={() => setShowSearch(true)}
                      readOnly
                    />
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4169E1] hover:text-[#FFD700] transition-colors"
                      onClick={() => setShowSearch(true)}
                    >
                      <Search size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
                  <ThemeToggle />
                  <a href="#" aria-label="Instagram" className="text-white/80 hover:text-[#4169E1] transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/school/bhartiya-vidya-bhavans-sardar-patel-institute-of-technology-munshi-nagar-andheri-mumbai/" aria-label="LinkedIn" className="text-white/80 hover:text-[#4169E1] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/bvbspit" aria-label="Twitter" className="text-white/80 hover:text-[#4169E1] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.youtube.com/@SPITMedia-tu5rk" aria-label="Youtube" className="text-white/80 hover:text-[#4169E1] transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.facebook.com/SPITCOLLEGE/" aria-label="Facebook" className="text-white/80 hover:text-[#4169E1] transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
                <NavLink to="/accreditation/NAAC" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>NAAC</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/NIRF" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>NIRF</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/IIC" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>IIC</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/ARIIA" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>ARIIA</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/NBA" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>NBA</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/IQAC" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>IQAC</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/accreditation/AICTE" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>AICTE</NavLink>
                <span className="text-[#663399]">|</span>
                <NavLink to="/alumni-network" className={({ isActive }) => isActive ? "text-[#FFFFFF] font-semibold transition-colors" : "text-white hover:text-[#FFD700] transition-colors"}>Alumni Network</NavLink>
              </div>
            </div>
          </header>

          <Navbar />

          <PageTransition>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/academics/*" element={<Academics />} />
              <Route path="/students/*" element={<Students />} />
              <Route path="/research/*" element={<Research />} />
              <Route path="/library/*" element={<Library />} />
              <Route path="/placements/*" element={<Placements />} />
              <Route path="/admissions/*" element={<Admissions />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/accreditation/NAAC" element={<NAAC />} />
              <Route path="/accreditation/NIRF" element={<NIRF />} />
              <Route path="/accreditation/IIC" element={<IIC />} />
              <Route path="/accreditation/ARIIA" element={<ARIIA />} />
              <Route path="/accreditation/NBA" element={<NBA />} />
              <Route path="/accreditation/IQAC" element={<IQAC />} />
              <Route path="/accreditation/AICTE" element={<AICTE />} />
              <Route path="/resources/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/resources/tender" element={<Tender />} />
              <Route path="/resources/antiragging" element={<AntiRagging />} />
              <Route path="/resources/rti" element={<RTI />} />
              <Route path="/resources/grievance" element={<Grievance />} />
              <Route path="/alumni-network" element={<AlumniNetworkDemo />} />
            </Routes>
          </PageTransition>

          <Footer />

          {/* Search Engine Modal */}
          <SearchEngine
            isOpen={showSearch}
            onClose={() => setShowSearch(false)}
            onSearch={handleSearch}
            results={searchResults}
            isLoading={searchLoading}
          />
        </div>
      </Router>
    </SEOLayout>
  );
}

export default App;