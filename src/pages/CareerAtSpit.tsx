import React from 'react';
import { Link } from 'react-router-dom';
// This component displays the results section with cards for each result
// Each card includes a title, link, date, and type of result
// The cards are styled with a gradient background and hover effects
// The results are displayed in a responsive grid layout
//                     />
//                   </div> 
const resultCards = [
  {
    title: "Advertisement for Faculty Recruitment-2025",
    link: "/assets/newspaper-22-05-2025.pdf",
    date: "2025",
    type: "Advertisement"
  },
  {
    title: "Advertisement Tenure 3 Years",
    link: "/assets/advertisement-final-1.pdf",
    date: "21 May 2025",
    type: "Advertisement"
  },
  
  {
    title: "Application form tenure Faculty – 2025",
    link: "/assets/Application-form-tenure-faculty-2025.docx",
    date: "2025",
    type: "Application Form"
  },
  
  // ...add more as needed
];

const CareerAtSpit = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Career @ SPIT</h2>
    <div className="responsive-grid">
      {resultCards.map((card, idx) => (
        <div
          key={idx}
          className="card bg-black/30 backdrop-blur-lg p-5 flex flex-col justify-between min-h-[160px] hover:shadow-xl transition-all"
        >
          <div>
            <div className="text-lg font-semibold text-white mb-2">{card.title}</div>
            <div className="text-white/70 text-xs mb-4">{card.date} &middot; {card.type}</div>
          </div>
          {/* Use <Link> for internal navigation, <a> for external/PDF */}
          {card.link.startsWith('/exam/') ? (
            <Link
              to={card.link}
              className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
            >
              View Details
            </Link>
          ) : (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
            >
              View PDF
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default CareerAtSpit;