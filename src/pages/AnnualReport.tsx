import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const AnnualReport = () => {
  // Consolidate all reports into a single array, with the latest first
  const allReports = [
    { year: '2023-24', link: '/assets/Anual-Report-2023-24.pdf', isLatest: true },
    { year: '2022-23', link: '/assets/2022-23_Anual-Report.pdf' },
    { year: '2021-22', link: '/assets/Annual_Report_2021_22.pdf' },
    { year: '2020-21', link: '/assets/5_Final_Layout_IQAC_AR_2021.pdf' },
  ];

  // State for animating numbers
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    // Trigger stats animation after a short delay on component mount
    const timer = setTimeout(() => {
      setStatsAnimated(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  // Helper component for animated number count-up effect
  const AnimatedNumber = ({ value, suffix = '' }) => {
    const [currentNumber, setCurrentNumber] = useState(0); 

    useEffect(() => {
      if (statsAnimated) {
        let start = 0;
        const end = parseFloat(value); 
        const duration = 1000; // Animation duration in milliseconds
        let startTime = null;

        const animateCount = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;
          const current = Math.min(progress, 1) * end;
          setCurrentNumber(current); 

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          }
        };

        requestAnimationFrame(animateCount);
      }
    }, [statsAnimated, value]); 

    // Format the number to a string ONLY when rendering
    let formattedValue;
    if (suffix === '%') {
      formattedValue = currentNumber.toFixed(2); // For percentages like 99.83
    } else {
      formattedValue = Math.floor(currentNumber); // For integers
    }

    return (
      <div className="text-4xl font-bold text-blue-300 mb-1 drop-shadow-md">
        {formattedValue}{suffix}
      </div>
    );
  };


  return (
    <div 
      className="relative min-h-screen flex items-center justify-center py-12 font-inter overflow-hidden"
      style={{
        // NEW, more visible background image (abstract data/network theme from Pexels)
        backgroundImage: `url('https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates a subtle parallax effect
      }}
    >
      {/* Dynamic gradient overlay for readability and thematic depth - slightly reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-950/80 backdrop-blur-sm animate-gradient-subtle-shift"></div>
      
      {/* Subtle animated pattern overlay for extra depth */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pattern-flow" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM2 34v-4H0v4H4v2H0v4h2v-4h4v-2H2zm0-30V0H0v4H4v2H0v4h2V6h4V4H2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', 
                     backgroundSize: '30px 30px' }}></div>


      {/* Main content container, positioned above the overlay */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFD700] mb-4 drop-shadow-xl tracking-wide animate-text-pop">
            Annual Reports
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            Dive deep into SPIT's journey of excellence. Our comprehensive annual reports document key academic achievements, groundbreaking research initiatives, and significant institutional developments, reflecting our commitment to progress and transparency.
          </p>
          {/* Subtle separator */}
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full animate-fade-in-down" style={{animationDelay: '0.3s'}}></div>
        </div>

        {/* Reports Section - Now combines latest and previous */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Annual Reports Archive */}
          <div className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 
                          transform transition-all duration-500 hover:scale-[1.015] hover:shadow-3xl animate-fade-in-left
                          relative group overflow-hidden"> {/* Added group for advanced hover */}
            <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3">
              Annual Reports Archive
            </h2>
            <div className="grid gap-4">
              {allReports.map((report) => (
                <a
                  key={report.year}
                  href={report.link}
                  target="_blank" // Ensure PDF opens in a new window
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-lg 
                             transition-all duration-300 shadow-md transform hover:scale-[1.03] 
                             ${report.isLatest 
                                ? 'bg-gradient-to-r from-blue-800/70 to-purple-800/70 border-blue-700/80 hover:from-blue-700 hover:to-purple-700 animate-pulse-subtle' 
                                : 'bg-gray-800/50 border-gray-700/60 hover:bg-gray-700/70'
                             }
                             ${report.isLatest ? 'ring-2 ring-[#FFD700] ring-offset-2 ring-offset-black/20' : ''}
                             relative overflow-hidden
                             `}
                >
                  {/* Hover effect overlay for each link */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

                  <span className="text-gray-100 text-lg font-medium relative z-10">
                    {report.isLatest ? <span className="text-[#FFD700] font-extrabold mr-2">⭐ LATEST:</span> : 'Academic Year '} 
                    <span className="text-[#FFD700] font-bold">{report.year}</span>
                  </span>
                  <Download className={`w-6 h-6 transform transition-transform duration-200 hover:scale-110 
                                       ${report.isLatest ? 'text-white drop-shadow-md' : 'text-blue-400'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 
                          transform transition-all duration-500 hover:scale-[1.015] hover:shadow-3xl animate-fade-in-right">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3">
              Key Institutional Statistics
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-5 bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-lg shadow-md 
                              transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-700/40">
                <AnimatedNumber value="100" suffix="+" />
                <div className="text-sm text-gray-200">Research Papers</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-lg shadow-md 
                              transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-green-700/40">
                <AnimatedNumber value="99.83" suffix="%" />
                <div className="text-sm text-gray-200">Placement Rate</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-red-800/50 to-orange-800/50 rounded-lg shadow-md 
                              transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-red-700/40">
                <AnimatedNumber value="150" suffix="+" />
                <div className="text-sm text-gray-200">Events Conducted</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-yellow-800/50 to-amber-800/50 rounded-lg shadow-md 
                              transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-yellow-700/40">
                <AnimatedNumber value="30" suffix="+" />
                <div className="text-sm text-gray-200">MoUs Signed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Required Tailwind CSS keyframes for animations */}
       <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0px rgba(255, 215, 0, 0); }
          50% { transform: scale(1.01); box-shadow: 0 0 10px rgba(255, 215, 0, 0.4); }
        }
        @keyframes gradient-subtle-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes text-pop {
          0% { transform: scale(0.95); opacity: 0; }
          80% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes pattern-flow {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; } /* Should match pattern size */
        }

        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
        .animate-gradient-subtle-shift { animation: gradient-subtle-shift 25s ease infinite alternate; }
        .animate-text-pop { animation: text-pop 0.6s ease-out forwards; }
        .animate-pattern-flow { animation: pattern-flow 60s linear infinite; }
      `}</style>
    </div>
  );
};

export default AnnualReport;
