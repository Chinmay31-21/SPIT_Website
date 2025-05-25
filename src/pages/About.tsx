import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Smooth scrolling globally (ensure this is in index.css or global CSS):
// html { scroll-behavior: smooth; }

const AboutLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
        About SPIT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 bg-black/30 p-4 rounded-lg shadow-lg">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about/vision-mission"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about/principal-message"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Principal's Message
                </Link>
              </li>
              <li>
                <Link
                  to="/about/founders"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Founders
                </Link>
              </li>
              <li>
                <Link
                  to="/about/committees"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Committees
                </Link>
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

// Animation wrapper
const PageSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black/30 p-6 rounded-lg shadow-md"
  >
    {children}
  </motion.div>
);

const AboutOverview = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">About SPIT</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (SPIT) is an autonomous, unaided engineering institute affiliated with the University of Mumbai. Originally established in 1995 as part of Sardar Patel College of Engineering, it gained independence as SPIT in 2005.
      </p>
      <p>
        The institute is located in the heart of Mumbai on a lush 47-acre campus in Andheri (West). This educational complex is also home to prestigious institutions such as Bhavan's College, Sardar Patel College of Engineering, S.P. Jain Institute of Management and Research, and A.H. Wadia High School.
      </p>
      <p>
        SPIT offers undergraduate, postgraduate, and doctoral programs in engineering and computer applications. The institute is widely recognized for its academic excellence, experienced faculty, research-driven environment, and vibrant student life.
      </p>
      <p>
        With a strong emphasis on innovation, sustainability, and ethical values, SPIT prepares students to become industry-ready professionals and responsible global citizens. Its close ties with industry and a culture of continuous learning contribute to its reputation as one of the premier engineering institutes in Maharashtra.
      </p>
    </div>
  </PageSection>
);

const VisionMission = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Vision & Mission</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Vision</h3>
        <p className="text-white/80">
          To be a leading technical institution constantly pursuing excellence to develop holistic contributors for the society.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Mission</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>To provide a conducive academic and research environment that stimulates learning...</li>
          <li>To collaborate with renowned industry, academic institutions, and research labs...</li>
          <li>To leverage the strength of alumni to foster industry-relevant mentoring...</li>
          <li>To nurture values with a sense of social responsibility...</li>
        </ul>
      </div>
    </div>
  </PageSection>
);

const PrincipalMessage = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Principal's Message</h2>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Principal Photo
        </div>
      </div>
      <div className="md:w-2/3 space-y-4 text-white/80 leading-relaxed">
        <p>It is my privilege to welcome you to Bharatiya Vidya Bhavan's SPIT...</p>
        <p>At SPIT, we are committed to fostering a culture of academic excellence, innovation...</p>
        <p>We aim to equip our students with the knowledge, skills, and social sensitivity...</p>
        <p className="font-semibold">— Dr. [Principal's Name], Principal, SPIT</p>
      </div>
    </div>
  </PageSection>
);

const Founders = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Founders</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Founder Photo
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Dr. K. M. Munshi</h3>
        <p className="text-white/80">
          Founder of Bharatiya Vidya Bhavan, Dr. Munshi was a visionary leader...
        </p>
      </div>
      <div className="space-y-4">
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Founder Photo
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Bhavan's Education Trust</h3>
        <p className="text-white/80">
          Bhavan's Education Trust has played a pivotal role in SPIT’s growth...
        </p>
      </div>
    </div>
  </PageSection>
);

const Committees = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Committees</h2>
    <div className="space-y-6">
      {[
        {
          title: "Academic Council",
          description: "The highest academic body ensuring quality and standards...",
        },
        {
          title: "Board of Studies",
          description: "Responsible for curriculum formulation and review...",
        },
        {
          title: "Anti-Ragging Committee",
          description: "Creates a ragging-free environment with proactive measures...",
        },
        {
          title: "Women Development Cell",
          description: "Empowers women on campus through workshops and awareness...",
        },
      ].map(({ title, description }) => (
        <div className="p-4 bg-black/50 rounded-lg" key={title}>
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      ))}
    </div>
  </PageSection>
);

export const About = AboutLayout;
