// File: src/pages/Exam.tsx
import React, { useState } from 'react';

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

const sections = [
  { id: "notifications", label: "All Notifications" },
  { id: "results", label: "Results" },
  { id: "fees", label: "Fees" },
  { id: "timetable", label: "Timetable" },
  { id: "manual", label: "Examination Manual" },
  { id: "staff", label: "Exam Staff" },
  { id: "contact", label: "Contact Us" },
];

export const Exams = () => {
  const [activeSection, setActiveSection] = useState("notifications");

  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/3 bg-[#E9E9E9] rounded-xl p-6 font-medium flex flex-col gap-2 min-w-[220px] max-w-xs">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`text-left px-4 py-2 rounded transition font-semibold ${
                activeSection === sec.id
                  ? "bg-[#83BFE6] text-[#2B107E]"
                  : "hover:text-[#FFD700] hover:bg-[#C0D6DF]/90"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8">
          {/* All Notifications */}
          {activeSection === "notifications" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">All Notifications</h2>
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
                      className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
                    >
                      View PDF
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Results */}
          {activeSection === "results" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Results</h2>
              <p>Latest exam results and archives will be listed here.</p>
            </section>
          )}
          {/* Fees */}
          {activeSection === "fees" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Fees</h2>
              <p>Examination fee details and payment instructions.</p>
            </section>
          )}
          {/* Timetable */}
          {activeSection === "timetable" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Timetable</h2>
              <p>Upcoming and past exam timetables.</p>
            </section>
          )}
          {/* Examination Manual */}
          {activeSection === "manual" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Examination Manual</h2>
              <p>Download the examination manual and guidelines.</p>
            </section>
          )}
          {/* Exam Staff */}
          {activeSection === "staff" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Exam Staff</h2>
              <p>Contact details and roles of examination staff.</p>
            </section>
          )}
          {/* Contact Us */}
          {activeSection === "contact" && (
            <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
              <p>For exam-related queries, contact examcell@spit.ac.in</p>
            </section>
          )}
        </main>
      </div>
    </section>
  );
};

