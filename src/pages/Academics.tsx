import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Smooth scrolling globally (ensure this is in index.css or global CSS):
// html { scroll-behavior: smooth; }

const AcademicsLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
        Academics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 bg-black/30 p-4 rounded-lg shadow-lg">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/academics/ug-programme"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  UG Programme
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/pg-programme"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  PG Programme
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/phd-programme"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Ph.D. Programme
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/departments"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/faculty"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/curriculum"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/moodle"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Moodle
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/scope"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  SCOPE
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/professional-education"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Professional Education
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/customized-courses"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Customized Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/centers-initiatives"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Centers & Initiatives
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/cdeep-courses"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  CDEEP Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route path="ug-programme" element={<UGProgramme />} />
            <Route path="pg-programme" element={<PGProgramme />} />
            <Route path="phd-programme" element={<PhDProgramme />} />
            <Route path="departments" element={<Departments />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="moodle" element={<Moodle />} />
            <Route path="scope" element={<Scope />} />
            <Route path="professional-education" element={<ProfessionalEducation />} />
            <Route path="customized-courses" element={<CustomizedCourses />} />
            <Route path="centers-initiatives" element={<CentersInitiatives />} />
            <Route path="cdeep-courses" element={<CDEEP />} />
            <Route path="*" element={<div className="text-white">Page Not Found</div>} />
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

// Placeholder components for each section
const UGProgramme = () => <PageSection>Details about UG Programme</PageSection>;
const PGProgramme = () => <PageSection>Details about PG Programme</PageSection>;
const PhDProgramme = () => <PageSection>Details about Ph.D. Programme</PageSection>;

const Departments = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Departments</h2>
    <div className="space-y-4">
      {[
        {
          name: "Department of Electronics & Telecommunications Engineering",
          link: "https://extc.spit.ac.in/#/",
        },
        {
          name: "Department of Computer Engineering",
          link: "https://comp.spit.ac.in/",
        },
        {
          name: "Department of Computer Science & Engineering",
          link: "https://cse.spit.ac.in/",
        },
        {
          name: "Department of Applied Sciences, Mathematics and Humanities (ASMH)",
          link: "https://ash.spit.ac.in/",
        },
        {
          name: "Department of Electronics Engineering",
          link: "https://etrx.spit.ac.in/",
        },
        {
          name: "Department of Information Technology",
          link: "https://it.spit.ac.in/",
        },
        {
          name: "Ph.D. Centre at Sardar Patel Institute of Technology",
          link: "https://phd.spit.ac.in/",
        },
      ].map(({ name, link }) => (
        <div
          key={name}
          className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#FFD700]/10 transition-all duration-300"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold hover:underline"
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  </PageSection>
);

const Faculty = () => <PageSection>Details about Faculty</PageSection>;
const Curriculum = () => <PageSection>Details about Curriculum</PageSection>;
const Moodle = () => <PageSection>Details about Moodle</PageSection>;
const Scope = () => <PageSection>Details about SCOPE</PageSection>;
const ProfessionalEducation = () => <PageSection>Details about Professional Education</PageSection>;
const CustomizedCourses = () => <PageSection>Details about Customized Courses</PageSection>;
const CentersInitiatives = () => <PageSection>Details about Centers & Initiatives</PageSection>;
const CDEEP = () => <PageSection>Details about CDEEP Courses</PageSection>;

export default AcademicsLayout;