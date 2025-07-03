// filepath: c:\Users\lalee\Documents\GitHub\SPIT_Website\src\pages\Exams.tsx
import React from 'react';

// Example exam data (replace with real data/fetch as needed)
const examCards = [
  {
    title: "Re-examination result Nov 2022 (2021-2022 Batch)",
    link: "/assets/results/nov-2022.pdf",
    date: "Nov 2022",
    type: "Result"
  },
  {
    title: "Regular Result Dec 2022",
    link: "/assets/results/dec-2022.pdf",
    date: "Dec 2022",
    type: "Result"
  },
  {
    title: "Re Examination Result Jan 2023",
    link: "/assets/results/jan-2023.pdf",
    date: "Jan 2023",
    type: "Result"
  },
  {
    title: "ESE Examination Timetable 2021-22",
    link: "/assets/results/ese-timetable-2021-22.pdf",
    date: "2021-22",
    type: "Timetable"
  },
  // ...add more as needed
];

export const Exams = () => (
  <section className="container mx-auto px-4 py-12 max-w-5xl">
    <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-8">Exam Results & Timetables</h1>
    <div className="responsive-grid">
      {examCards.map((card, idx) => (
        <div
          key={idx}
          className="card bg-black/30 backdrop-blur-lg p-5 flex flex-col justify-between min-h-[160px] hover:shadow-xl transition-all"
        >
          <div>
            <div className="text-lg font-semibold text-white mb-2">{card.title}</div>
            <div className="text-white/70 text-xs mb-4">{card.date} &middot; {card.type}</div>
          </div>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#4169E1] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#FFD700] hover:text-white transition"
             >
            View PDF
          </a>
        </div>
      ))}
    </div>
  </section>
);