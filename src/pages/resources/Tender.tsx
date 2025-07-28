import React from 'react';
import { ExternalLink, Download } from 'lucide-react'; // Ensure Download is imported for multi-doc icon

const tenderNotices = [
  // Latest Tenders (based on the browsed content, marked as isLatest)
  // --- MODIFIED: Notice Inviting Tender-4 now has a 'documents' array ---
  { 
    title: 'Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25', 
    isLatest: true, 
    documents: [
      { label: 'Main Tender Document', url: '/assets/tenders/NIT_4_AY24-25_Main.pdf' },
      { label: 'Technical Specifications', url: '/assets/tenders/NIT_4_AY24-25_Tech_Specs.pdf' },
      { label: 'Financial Bid Form', url: '/assets/tenders/NIT_4_AY24-25_Financial_Bid.pdf' },
      { label: 'Terms & Conditions', url: '/assets/tenders/NIT_4_AY24-25_T&C.pdf' },
    ]
  },
  // --- Original single-link tenders (converted to 'documents' array for consistency in rendering logic) ---
  { title: 'Tendor SPIT Building Extension 2025', isLatest: true, documents: [{ label: 'Tender Document', url: '/assets/Final_1-Tendor-SPIT-Building-Extension-2025-PDF.pdf' }] },
  { title: 'Tender for GPU Server – (AI Computing Laboratory)', isLatest: true, documents: [{ label: 'Tender Document', url: '/assets/Tender-for-GPU.pdf' }] },
  { title: 'PILING WORK REQUIRED FOR THE PROJECT: ALTERATION and EXTENSION to the COLLEGE BUILDING of SPIT', isLatest: true, documents: [{ label: 'Tender Document', url: '/assets/tenders/Piling_Work_SPIT_Extension.pdf' }] },
  { title: '2025 HK TENDER FINAL DOCUMENT', isLatest: true, documents: [{ label: 'Tender Document', url: '/assets/tenders/HK_Tender_2025_Final.pdf' }] },
  
  // Archived Tenders (converted to 'documents' array for consistency in rendering logic)
  { title: 'Notice Inviting Tender-3 – Electronic Equipment Requirements – AY 2024-25', documents: [{ label: 'Tender Document', url: '/assets/tenders/NIT_3_AY24-25.pdf' }] },
  { title: 'Notice Inviting Tender-2 _ Smart LABS-AY 2024-25', documents: [{ label: 'Tender Document', url: '/assets/tenders/NIT_2_Smart_Labs_AY24-25.pdf' }] },
  { title: 'Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25', documents: [{ label: 'Tender Document', url: '/assets/tenders/NIT_1_Smart_Classrooms_AY24-25.pdf' }] },
  { title: 'ALTERATION and REFURBISHMENT of Room 008, 104 and 105 of the COLLEGE BUILDING', documents: [{ label: 'Tender Document', url: '/assets/tenders/Room_Alteration_Refurbishment.pdf' }] },
  /******Not a pdf, a link to a pdf******/
  { title: 'Notice Inviting Tender-2 _ OCTOBER_2023', documents: [{ label: 'Tender Document', url: '/assets/tenders/NIT_2_Oct_2023.pdf' }] },
  /**************************************/
  { title: 'Tender for Canteen', documents: [{ label: 'Tender Document', url: '/assets/Request-for-quotation.pdf' }] },
  { title: 'Tender for Datacenter Development', documents: [{ label: 'Tender Document', url: '/assets/RFQ-for-Datacenter.pdf' }] },
  { title: 'Tender for Internet Bandwidth', documents: [{ label: 'Tender Document', url: '/assets/SPIT_IT-Infrastructure.pdf' }] },
  { title: 'Tender Notice Power Electronics', documents: [{ label: 'Tender Document', url: '/assets/Tender-Notice-Power-Electronics-27-7-2022.pdf' }] },
  { title: 'Tender Notice for open air duct shade work', documents: [{ label: 'Tender Document', url: '/assets/Tender-Notice-for-open-air-duct-shade-work.pdf' }] },
  { title: 'Tender Notice for 3rd floor passage shade work', documents: [{ label: 'Tender Document', url: '/assets/Tender-Notice-for-3rd-floor-passage-shade-work.pdf' }] },
  { title: 'Tender Notice for Visitor Bench', documents: [{ label: 'Tender Document', url: '/assets/Tender-Notice-for-Visitor-Bench.pdf' }] },
  { title: 'IT Infrastructure Requirements List', documents: [{ label: 'Tender Document', url: '/assets/Updated-IT-Infrastructure-Requirements-List-v2.1-1.pdf' }] },
  { title: 'CCTV Tender Notice', documents: [{ label: 'Tender Document', url: '/assets/cctv-tender-15-3-22.pdf' }] },
  { title: 'Security Tender', documents: [{ label: 'Tender Document', url: '/assets/Tender-Security-2022-23.pdf' }] },
  { title: 'Housekeeping tender', documents: [{ label: 'Tender Document', url: '/assets/ousekeeping-tender.pdf' }] },
  { title: 'Electrical Maintenance Services Tender', documents: [{ label: 'Tender Document', url: '/assets/EWC-Maint-Tender-Final_April-2022.pdf' }] },
];

const Tender: React.FC = () => {
  const latestTenders = tenderNotices.filter(tender => tender.isLatest);
  const archivedTenders = tenderNotices.filter(tender => !tender.isLatest);

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center py-12 font-inter overflow-hidden"
      style={{
        // Professional background image for a formal/institutional feel
        backgroundImage: `url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates a subtle parallax effect
      }}
    >
      {/* Dark gradient overlay for readability and thematic depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-950/80 backdrop-blur-sm animate-gradient-subtle-shift"></div>
      
      {/* Subtle animated pattern overlay for extra depth */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pattern-flow" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM2 34v-4H0v4H4v2H0v4h2v-4h4v-2H2zm0-30V0H0v4H4v2H0v4h2V6h4V4H2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', 
                   backgroundSize: '30px 30px' }}></div>


      {/* Main content container, positioned above the overlay */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl"> {/* Increased max-width for more content */}
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFD700] mb-4 drop-shadow-xl tracking-wide animate-text-pop">
            Tender Notices
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            Stay updated with the latest procurement opportunities and archived tender documents from Sardar Patel Institute of Technology.
          </p>
          {/* Subtle separator */}
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full animate-fade-in-down" style={{animationDelay: '0.3s'}}></div>
        </div>

        {/* Latest Tenders Section */}
        <div className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 mb-10 border border-[#00BFFF]/40 
                        transform transition-all duration-500 hover:scale-[1.005] hover:shadow-3xl animate-fade-in-up"> {/* Slightly reduced hover scale */}
          <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3">
            Latest Tender Notices
          </h2>
          <div className="grid gap-4">
            {latestTenders.length > 0 ? (
              latestTenders.map((tender, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-800/70 to-purple-800/70 border-blue-700/80 
                             transition-all duration-300 shadow-md transform hover:scale-[1.01] 
                             ring-2 ring-[#FFD700] ring-offset-2 ring-offset-black/20 relative overflow-hidden animate-pulse-subtle
                             group" // Added group class for inner hover effects
                >
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                  <div className="flex items-center justify-between mb-2"> {/* Adjusted margin-bottom */}
                    <span className="flex-1 text-gray-100 text-lg font-medium relative z-10">
                      <span className="text-[#FFD700] font-extrabold mr-2">✨ NEW:</span> {tender.title}
                    </span>
                    {/* Icon for the main tender card - indicates if it has multiple documents */}
                    {tender.documents && tender.documents.length > 1 ? (
                        <span className="text-white drop-shadow-md">
                            <Download className="w-6 h-6" /> {/* Use Download for multiple docs */}
                        </span>
                    ) : (
                        // If there's only one document, link directly and use ExternalLink icon
                        <a href={tender.documents?.[0]?.url} target="_blank" rel="noopener noreferrer" className="text-white drop-shadow-md">
                            <ExternalLink className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                        </a>
                    )}
                  </div>
                  
                  {/* Render individual document links if available and more than one */}
                  {tender.documents && tender.documents.length > 1 && (
                    <div className="mt-2 pt-2 border-t border-white/20">
                      <p className="text-sm text-gray-200 mb-1">Available Documents:</p>
                      <ul className="space-y-1">
                        {tender.documents.map((doc, docIndex) => (
                          <li key={docIndex}>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-300 hover:text-[#FFD700] transition-colors duration-200 text-sm"
                            >
                              {doc.label}
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-300 text-lg text-center py-4">No latest tender notices available at the moment. Please check back soon!</p>
            )}
          </div>
        </div>

        {/* Tender Archives Section */}
        <div className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 
                        transform transition-all duration-500 hover:scale-[1.005] hover:shadow-3xl animate-fade-in-up"
                        style={{animationDelay: '0.2s'}}> {/* Slight delay for this section */}
          <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3">
            Tender Archives
          </h2>
          <div className="grid gap-4">
            {archivedTenders.length > 0 ? (
              archivedTenders.map((tender, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-gray-800/50 border-gray-700/60 
                             hover:bg-gray-700/70 transition-all duration-300 shadow-md transform hover:scale-[1.01] relative overflow-hidden
                             group" // Added group class for inner hover effects
                >
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                  <div className="flex items-center justify-between mb-2"> {/* Adjusted margin-bottom */}
                    <span className="flex-1 text-gray-100 text-lg font-medium relative z-10">
                      {tender.title}
                    </span>
                    {/* Icon for the main tender card - indicates if it has multiple documents */}
                    {tender.documents && tender.documents.length > 1 ? (
                        <span className="text-blue-400">
                            <Download className="w-6 h-6" />
                        </span>
                    ) : (
                        // If there's only one document, link directly and use ExternalLink icon
                        <a href={tender.documents?.[0]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                            <ExternalLink className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                        </a>
                    )}
                  </div>

                  {/* Render individual document links if available and more than one */}
                  {tender.documents && tender.documents.length > 1 && (
                    <div className="mt-2 pt-2 border-t border-white/20">
                      <p className="text-sm text-gray-200 mb-1">Available Documents:</p>
                      <ul className="space-y-1">
                        {tender.documents.map((doc, docIndex) => (
                          <li key={docIndex}>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-300 hover:text-[#FFD700] transition-colors duration-200 text-sm"
                            >
                              {doc.label}
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-300 text-lg text-center py-4">No archived tenders available.</p>
            )}
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

export default Tender;
