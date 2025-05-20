import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const StudentsLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8">Students</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-4">
          <nav className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-[#00BFFF]/30">
            <ul className="space-y-2">
              {[
                { path: "", title: "Overview" },
                { path: "scholarship", title: "Scholarship" },
                { path: "documents", title: "Document Collection" },
                { path: "transcript", title: "Online Transcript" },
                { path: "lor", title: "LOR System" },
                { path: "council", title: "Students Council" },
                { path: "rules", title: "Rules & Regulations" },
                { path: "activities", title: "Student Activities" },
                { path: "anti-ragging", title: "Anti-ragging" },
                { path: "seva", title: "Seva" },
                { path: "sports", title: "Sports" },
                { path: "oculus", title: "Oculus" },
                { path: "rotaract", title: "Rotaract Club" },
                { path: "alumni", title: "Alumni" }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-[#00BFFF]/10 rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="md:col-span-3 bg-black/30 backdrop-blur-md p-6 rounded-lg border border-[#00BFFF]/30">
          <Routes>
            <Route path="" element={<StudentsOverview />} />
            <Route path="scholarship" element={<Scholarship />} />
            <Route path="documents" element={<Documents />} />
            <Route path="transcript" element={<Transcript />} />
            <Route path="lor" element={<LOR />} />
            <Route path="council" element={<Council />} />
            <Route path="rules" element={<Rules />} />
            <Route path="activities" element={<Activities />} />
            <Route path="anti-ragging" element={<AntiRagging />} />
            <Route path="seva" element={<Seva />} />
            <Route path="sports" element={<Sports />} />
            <Route path="oculus" element={<Oculus />} />
            <Route path="rotaract" element={<Rotaract />} />
            <Route path="alumni" element={<Alumni />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const StudentsOverview = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-[#FFD700]">Student Life at SPIT</h2>
    <p className="text-white/80 leading-relaxed">
      SPIT offers a vibrant campus life with numerous opportunities for academic, professional, and personal growth. From technical clubs to cultural activities, students can engage in a wide range of extracurricular activities.
    </p>
    <img
      src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
      alt="Student Life"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
);

// Placeholder components for other routes
const Scholarship = () => (
  <div className="text-white/80">Scholarship Content</div>
);
const Documents = () => (
  <div className="text-white/80">Document Collection Content</div>
);
const Transcript = () => (
  <div className="text-white/80">Online Transcript Content</div>
);
const LOR = () => (
  <div className="text-white/80">LOR System Content</div>
);
const Council = () => (
  <div className="text-white/80">Students Council Content</div>
);
const Rules = () => (
  <div className="text-white/80">Rules & Regulations Content</div>
);
const Activities = () => (
  <div className="text-white/80">Student Activities Content</div>
);
const AntiRagging = () => (
  <div className="text-white/80">Anti-ragging Content</div>
);
const Seva = () => (
  <div className="text-white/80">Seva Content</div>
);
const Sports = () => (
  <div className="text-white/80">Sports Content</div>
);
const Oculus = () => (
  <div className="text-white/80">Oculus Content</div>
);
const Rotaract = () => (
  <div className="text-white/80">Rotaract Club Content</div>
);
const Alumni = () => (
  <div className="text-white/80">Alumni Content</div>
);

export const Students = StudentsLayout;