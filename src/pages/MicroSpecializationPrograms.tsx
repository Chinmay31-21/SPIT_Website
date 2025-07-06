import React from 'react';
import { Link } from 'react-router-dom';
// This component displays the results section with cards for each result
// Each card includes a title, link, date, and type of result
// The cards are styled with a gradient background and hover effects
// The results are displayed in a responsive grid layout
//                     />
//                   </div> 
const SpeicializationCards = [
  {
    title: "Certification on IIOT",
    link: "/assets/brocher-12-1-23-1.pdf",
    date: "2025",
    type: "Minors"
  },
  {
    title: "IBM Data Science",
    link: "/assets/Data-Science-IBM-INNOVATION-CENTRE-FOR-EDUCATION-2.pdf",
    date: "2023",
    type: "Minors"
  },
  
  {
    title: "IBM Artificial Intelligence and Machine Learning",
    link: "/assets/IBM-INNOVATION-CENTRE-FOR-EDUCATION.pdf",
    date: "2025",
    type: "Minors"
  },
  {
    title: "Microspecialisation in Data Intelligence",
    link: "/assets/Microspecialisation-in-Data-Intelligence.pdf",
    date: "2025",
    type: "Minors"
  },
  {
    title: "Microspecialisation in Industry Coding Techniques",
    link: "/assets/Micro-specialisation-in-Industry-Coding-Techniques.pdf",
    date: "2025",
    type: "Minors"
  },
  {
    title: "Microspecialization Brochure on Blockchain Technology",
    link: "/assets/Micro-specialisation-in-Industry-Coding-Techniques.pdf",
    date: "2025",
    type: "Minors"
  },
  
  // ...add more as needed
];

const MicroSpecializationPrograms = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Micro Specialization Programs</h2>
    <div className="responsive-grid">
      {SpeicializationCards.map((card, idx) => (
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

export default MicroSpecializationPrograms;