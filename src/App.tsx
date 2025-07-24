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
import AcademicsLayout from './pages/Academics'; // Corrected import
import { Students } from './pages/Students';
import { Research } from './pages/Research';
import { Library } from './pages/Library';
import { Placements } from './pages/Placements';
import { Procurement } from './pages/Procurement';
import { Admissions } from './pages/Admissions';
import { Exams } from './pages/Exam';
 import  ShresthaClub  from './pages/ShresthaClub';
import CareerAtSpit from './pages/CareerAtSpit';
import AllAnnouncements from './pages/AllAnnouncements';
import AllAnnouncements2122 from './pages/AllAnnouncements2122';
import AllAnnouncements2223 from './pages/AllAnnouncements2223';
import AllAnnouncements2324 from './pages/AllAnnouncements2324';
import MicroSpecializationPrograms from './pages/MicroSpecializationPrograms';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';
import { NAAC } from './pages/accreditation/NAAC';
import { NIRF } from './pages/accreditation/NIRF';
import { IIC } from './pages/accreditation/IIC';
import { ARIIA } from './pages/accreditation/ARIIA';
import { NBA } from './pages/accreditation/NBA';
import { IQAC } from './pages/accreditation/IQAC';
import { AICTE } from './pages/accreditation/AICTE';
import { MandatoryDisclosure } from './pages/resources/MandatoryDisclosure';
import Tender from './pages/resources/Tender';
import { AntiRagging } from './pages/resources/AntiRagging';
import { RTI } from './pages/resources/RTI';
import { Grievance } from './pages/resources/Grievance';
import { FeesRegulatory } from './pages/resources/FeesRegulatory';
import { Smartclassroom2425 } from './pages/resources/SmartClassroom2425';
import { NoticeTenderOctober2023 } from './pages/resources/NoticeTenderOctober2023';
import { AlumniNetworkDemo } from './pages/AlumniNetworkDemo';
import AnnualReport from './pages/AnnualReport';

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

  const [showPopup, setShowPopup] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Carousel data: image, headline, description
  const carouselSlides = [
    {
      src: "/assets/alumni.jpg",
      headline: "SPIT Alumni Network",
      description: "Connect, collaborate, and grow with our vibrant alumni community. Discover success stories and opportunities."
    },
    {
      src: "/assets/phonepe.jpg",
      headline: "PhonePe Placement Drive",
      description: "Our students excel in top tech companies. Congratulations to the latest batch placed at PhonePe!"
    },
    {
      src: "/assets/jpmc.jpg",
      headline: "J.P. Morgan Chase Careers",
      description: "SPIT graduates making an impact at global financial leaders. Explore our placement highlights."
    }
  ];

  // Show popup only after coin flip animation is done
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowPopup(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Auto-slide carousel every 3s, pause on hover
  useEffect(() => {
    if (!showPopup || isCarouselHovered) return;
    const interval = setInterval(() => {
      setCarouselIndex(idx => (idx + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showPopup, isCarouselHovered, carouselSlides.length]);

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
                src="/assets/SPIT_Logo.png"
                alt="SPIT Logo"
                className="w-45 h-45 object-contain"
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
        <>
          {/* Popup only after coin flip animation */}
          {showPopup && (
            <div className="popup-overlay flex items-center justify-center z-[9999]">
              <div
                className="popup-container relative flex flex-col items-center bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] dark:from-[#18181b] dark:via-[#192351] dark:to-[#27193f] rounded-xl shadow-2xl p-0 w-full max-w-lg"
                style={{ minHeight: 380 }}
              >
                <button
                  className="popup-close absolute top-4 left-4 bg-[#1e40af] hover:bg-[#FFD700] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow transition-colors"
                  onClick={() => setShowPopup(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                {/* Headline above image */}
                <h2 className="w-full text-center text-xl md:text-2xl font-bold text-[#1e40af] dark:text-[#FFD700] mt-8 mb-2 px-4">
                  {carouselSlides[carouselIndex].headline}
                </h2>
                <div
                  className="w-full flex-1 flex items-center justify-center px-8 pt-2 pb-2"
                  onMouseEnter={() => setIsCarouselHovered(true)}
                  onMouseLeave={() => setIsCarouselHovered(false)}
                >
                  <img
                    src={carouselSlides[carouselIndex].src}
                    alt={carouselSlides[carouselIndex].headline}
                    className="w-full max-h-[55vh] object-contain rounded-lg shadow-lg transition duration-500"
                  />
                </div>
                {/* Description below image */}
                <p className="w-full text-center text-base text-[#222] dark:text-[#e9ecef] mb-2 px-6">
                  {carouselSlides[carouselIndex].description}
                </p>
                <div className="flex justify-between items-center w-full px-8 pb-6">
                  <button
                    className="popup-carousel-arrow left bg-[#e9ecef] dark:bg-[#1e40af]/20 hover:bg-[#1e40af] dark:hover:bg-[#FFD700] text-[#1e40af] dark:text-[#FFD700] rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold shadow transition-colors"
                    onClick={() =>
                      setCarouselIndex((carouselIndex - 1 + carouselSlides.length) % carouselSlides.length)
                    }
                    aria-label="Previous"
                  >
                    &#8592;
                  </button>
                  <div className="popup-carousel-indicators flex gap-2">
                    {carouselSlides.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot w-3 h-3 rounded-full cursor-pointer transition-colors ${
                          carouselIndex === idx
                            ? "bg-[#1e40af] dark:bg-[#FFD700] shadow"
                            : "bg-[#e9ecef] dark:bg-[#192351]"
                        }`}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    className="popup-carousel-arrow right bg-[#e9ecef] dark:bg-[#1e40af]/20 hover:bg-[#1e40af] dark:hover:bg-[#FFD700] text-[#1e40af] dark:text-[#FFD700] rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold shadow transition-colors"
                    onClick={() =>
                      setCarouselIndex((carouselIndex + 1) % carouselSlides.length)
                    }
                    aria-label="Next"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
        <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex flex-col">
          <header className="relative border-t-2 border-[#4169E1] bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex items-start gap-4 w-full md:w-auto">
                  <Link to="/" className="flex items-center gap-4">
                    <img
                      src="/assets/SPIT_Logo.png"
                      alt="SPIT Logo"
                      className="w-20 h-20 object-contain animate-float"
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
              <Route path="/academics/*" element={<AcademicsLayout />} />
              <Route path="/students/*" element={<Students />} />
              <Route path="/research/*" element={<Research />} />
              <Route path="/library/*" element={<Library />} />
              <Route path="/placements/*" element={<Placements />} />
              <Route path="/admissions/*" element={<Admissions />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/exam/*" element={<Exams />} />
              <Route path="/shresthaclub/*" element={<ShresthaClub />} />
              <Route path="/careeratspit/*" element={<CareerAtSpit />} />
              <Route path="/microspecializationprograms/*" element={<MicroSpecializationPrograms/>}/>
              <Route path="/achievements/*" element={<Achievements/>}/>
              <Route path="/procurement/*" element={<Procurement />} />
              <Route path="/allannouncements/*" element={<AllAnnouncements/>}/>
              <Route path="/pages/allannouncements2122/*" element={<AllAnnouncements2122/>}/> 
              <Route path="/pages/allannouncements2223/*" element={<AllAnnouncements2223/>}/>    
              <Route path="/pages/allannouncements2324/*" element={<AllAnnouncements2324/>}/>
              <Route path="/accreditation/NAAC" element={<NAAC />} />
              <Route path="/accreditation/NIRF" element={<NIRF />} />
              <Route path="/accreditation/IIC" element={<IIC />} />
              <Route path="/accreditation/ARIIA" element={<ARIIA />} />
              <Route path="/accreditation/NBA" element={<NBA />} />
              <Route path="/accreditation/IQAC" element={<IQAC />} />
              <Route path="/accreditation/AICTE" element={<AICTE />} />
              <Route path="/resources/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/resources/FeesRegulatory" element={<FeesRegulatory />} />
              <Route path="/resources/tender" element={<Tender />} />
              <Route path="/resources/antiragging" element={<AntiRagging />} />
              <Route path="/resources/rti" element={<RTI />} />
              <Route path="/resources/grievance" element={<Grievance />} />
              <Route path="/resources/smartclassroom2425" element={<Smartclassroom2425 />} />
              <Route path="/resources/noticetenderoctober2023" element={<NoticeTenderOctober2023 />} />
              <Route path="/alumni-network" element={<AlumniNetworkDemo />} />
              <Route path="/report/*" element={<AnnualReport />} />
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