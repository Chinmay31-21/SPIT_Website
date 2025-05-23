import React, { useEffect, useState } from 'react';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Students } from './pages/Students';
import { Research } from './pages/Research';
import { Library } from './pages/Library';
import { Placements } from './pages/Placements';

function App() {
  const [showPowerUp, setShowPowerUp] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!showPowerUp) {
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, 1500);
    }
  }, [showPowerUp]);

  if (showPowerUp) {
    return <PowerUpAnimation onComplete={() => setShowPowerUp(false)} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div
          className={`relative w-40 h-40 ${
            isAnimating ? 'animate-coin-flip' : ''
          }`}
        >
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
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
        <header className="relative border-t-2 border-[#00BFFF] bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex items-start gap-4 w-full md:w-auto">
                <img
                  src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
                  alt="SPIT Logo"
                  className="w-16 h-16 object-contain animate-float"
                />
                <div>
                  <p className="text-[#F0F0F0]/80 text-sm">
                    Bhartiya Vidya Bhavan's
                  </p>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent animate-glow">
                    <a href="">Sardar Patel Institute of Technology</a>
                  </h1>
                  <p className="text-[#CCCCCC] text-xs mt-1">
                    Autonomous Institute Affiliated to Mumbai University
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <div className="relative w-full max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#00BFFF]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00BFFF] transition-all backdrop-blur-lg"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00BFFF] hover:text-[#FFD700] transition-colors">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
                <a
                  href="#"
                  className="text-white/80 hover:text-[#00BFFF] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#00BFFF] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#00BFFF] transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#00BFFF] transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#00BFFF] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                NAAC
              </a>
              <span className="text-[#8B3A3A]">|</span>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                NIRF
              </a>
              <span className="text-[#8B3A3A]">|</span>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                IIC
              </a>
              <span className="text-[#8B3A3A]">|</span>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                ARIIA
              </a>
              <span className="text-[#8B3A3A]">|</span>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                NBA
              </a>
            </div>
          </div>
        </header>

        <Navbar />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/academics/*" element={<Academics />} />
          <Route path="/students/*" element={<Students />} />
          <Route path="/research/*" element={<Research />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/placements/*" element={<Placements />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
