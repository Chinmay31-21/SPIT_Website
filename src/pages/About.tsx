import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const AboutLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8">About SPIT</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 bg-black/30 p-4 rounded-lg">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white hover:text-[#00BFFF] transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/about/vision-mission" className="text-white hover:text-[#00BFFF] transition-colors">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/about/principal-message" className="text-white hover:text-[#00BFFF] transition-colors">Principal's Message</Link>
              </li>
              <li>
                <Link to="/about/founders" className="text-white hover:text-[#00BFFF] transition-colors">Founders</Link>
              </li>
              <li>
                <Link to="/about/committees" className="text-white hover:text-[#00BFFF] transition-colors">Committees</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<AboutOverview />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="principal-message" element={<PrincipalMessage />} />
            <Route path="founders" element={<Founders />} />
            <Route path="committees" element={<Committees />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AboutOverview = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">About SPIT</h2>
    <p className="text-white/80 leading-relaxed">
      Sardar Patel Institute of Technology (SPIT) is one of the premier engineering institutes in Mumbai.
      Established in 1995, SPIT has been consistently ranked among the top engineering colleges in India.
    </p>
  </div>
);

const VisionMission = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Vision & Mission</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Vision</h3>
        <p className="text-white/80">To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Mission</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Provide high quality education in engineering and technology.</li>
          <li>Provide a conducive environment for research and development.</li>
          <li>Develop professionals with competency and sensitivity.</li>
        </ul>
      </div>
    </div>
  </div>
);

const PrincipalMessage = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Principal's Message</h2>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="aspect-square bg-black/50 rounded-lg"></div>
      </div>
      <div className="md:w-2/3">
        <p className="text-white/80 leading-relaxed">
          Welcome to Sardar Patel Institute of Technology, where we strive for excellence in engineering education
          and research. Our institute is committed to providing quality education and developing well-rounded
          professionals who can contribute meaningfully to society.
        </p>
      </div>
    </div>
  </div>
);

const Founders = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Founders</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="aspect-square bg-black/50 rounded-lg"></div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Founder Name</h3>
        <p className="text-white/80">Brief description about the founder and their vision for SPIT.</p>
      </div>
    </div>
  </div>
);

const Committees = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Committees</h2>
    <div className="space-y-6">
      {['Academic Council', 'Board of Studies', 'Anti-Ragging Committee', 'Women Development Cell'].map((committee) => (
        <div key={committee} className="p-4 bg-black/50 rounded-lg">
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{committee}</h3>
          <p className="text-white/80">Description of the committee's role and responsibilities.</p>
        </div>
      ))}
    </div>
  </div>
);

export const About = AboutLayout;