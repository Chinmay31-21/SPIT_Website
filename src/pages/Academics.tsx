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

// UG Programme Section
const UGProgramme = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">UG Programme</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        Sardar Patel Institute of Technology offers degree programs in the following areas. Our goal is to educate students who excel in engineering and applied science and also have a working knowledge of other disciplines.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Degree Awarded</h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>B.Tech. Computer Engineering – 240 seats</li>
          <li>B.Tech. Electronics and Telecommunication Engineering – 120 seats</li>
          <li>B.Tech. Computer Science And Engineering – 120 seats</li>
        </ul>
      </div>
    </div>
  </PageSection>
);

// PG Programme Section
const PGProgramme = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">PG Programme</h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Sardar Patel Institute of Technology offers postgraduate programs designed to provide advanced knowledge and skills in engineering and technology. These programs aim to prepare students for research, industry, and academic careers.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Degree Awarded</h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>M.Tech. Computer Engineering</li>
          <li>M.Tech. Electronics and Telecommunication Engineering</li>
          <li>M.Tech. Information Technology</li>
        </ul>
      </div>
    </div>
  </PageSection>
);

// Ph.D. Programme Section
const PhDProgramme = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Ph.D. Programme</h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Sardar Patel Institute of Technology offers a Ph.D. programme in Engineering and Technology, providing opportunities for advanced research and innovation. The programme is designed to foster academic excellence and contribute to the development of cutting-edge technologies.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Research Areas</h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Computer Engineering</li>
          <li>Electronics and Telecommunication Engineering</li>
          <li>Information Technology</li>
        </ul>
      </div>
    </div>
  </PageSection>
);

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
const Curriculum = () => (
  <PageSection>
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
      Curriculum
    </h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      {/* Multidisciplinary Minors Section */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          Syllabi for Multidisciplinary Minors (M.D.M.) W. E. F. 2023-27 Batch
        </h3>
        <ul className="list-disc list-inside text-red-600 space-y-2">
          <li>
            <a
              href="/assets/Introduction-Page.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Introduction Page
            </a>
          </li>
          <li>
            <a
              href="/assets/SPIT_MDM_2023-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SPIT MDM 2023-24
            </a>
          </li>
        </ul>
      </div>

      {/* UG Syllabus Scheme Batch 2023-27 */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          UG SYLLABUS Scheme batch 2023-27
        </h3>
        <ul className="list-disc list-inside text-red-600 space-y-2">
          <li>
            <a
              href="/assets/ce-scheme-2023-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer-Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/ce-syll-2023-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer-curriculum
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-scheme-2023-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE-Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-syll-2023-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE-curriculum
            </a>
          </li>
          <li>
            <a
              href="/assets/EXTC-Scheme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              EXTC-Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/EXTC-Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              EXTC-curriculum
            </a>
          </li>
        </ul>
      </div>

      {/* UG Syllabus Scheme Batch 2022-26 */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          UG SYLLABUS Scheme batch 2022-26
        </h3>
        <ul className="list-disc list-inside text-red-600 space-y-2">
          <li>
            <a
              href="/assets/Computer-Scheme-2022-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/CSE-Data-Science-Scheme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – Data Science Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/CSE-AIML-Scheme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – AIML Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/EXTC-Scheme-2022-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Electronics and Telecommunication Scheme
            </a>
          </li>
        </ul>
      </div>

      {/* UG Syllabus Scheme Academic Year 2021-25 */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          UG SYLLABUS Scheme Academic Year 2021-25
        </h3>
        <ul className="list-disc list-inside text-red-600 space-y-2">
          <li>
            <a
              href="/assets/Computer-Scheme-2021-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer
            </a>
          </li>
          <li>
            <a
              href="/assets/CSE-Data-Science-Scheme-2021-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – Data Science
            </a>
          </li>
          <li>
            <a
              href="/assets/CSE-AIML-Scheme-2021-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – AIML
            </a>
          </li>
          <li>
            <a
              href="/assets/EXTC-Scheme-2021-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Electronics and Telecommunication
            </a>
          </li>
          <li>
            <a
              href="/assets/Open-Electives-2021-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Open Electives
            </a>
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
);const Moodle = () => <PageSection>Details about Moodle</PageSection>;
const Scope = () => <PageSection>Details about SCOPE</PageSection>;
const ProfessionalEducation = () => <PageSection>Details about Professional Education</PageSection>;
const CustomizedCourses = () => <PageSection>Details about Customized Courses</PageSection>;
const CentersInitiatives = () => <PageSection>Details about Centers & Initiatives</PageSection>;
const CDEEP = () => <PageSection>Details about CDEEP Courses</PageSection>;

export default AcademicsLayout;