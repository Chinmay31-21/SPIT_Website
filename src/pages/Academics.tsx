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
          <li>B.Tech. Computer Engineering – 240</li>
          <li>B.Tech. Electronics and Telecommunication Engineering – 120</li>
          <li>B.Tech. Computer Science And Engineering – 120</li>
        </ul>
      </div>
    </div>
  </PageSection>
);
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
      <div className="bg-[#00BFFF]/10 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Program Highlights</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>State-of-the-art laboratories and research facilities.</li>
          <li>Industry-oriented curriculum with a focus on emerging technologies.</li>
          <li>Opportunities for internships and collaborative projects.</li>
          <li>Experienced faculty with strong academic and industry backgrounds.</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Eligibility Criteria</h3>
        <p className="text-black">
          Candidates must have a bachelor's degree in engineering or technology with a minimum of 50% marks. Admission is based on GATE scores and institute-level entrance tests.
        </p>
      </div>
      <div className="bg-[#FFD700]/10 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Why Choose SPIT?</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Ranked among the top engineering institutes in Maharashtra.</li>
          <li>Strong industry connections and placement opportunities.</li>
          <li>Focus on innovation, sustainability, and ethical values.</li>
          <li>Collaborations with leading academic and research institutions.</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Specializations</h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Data Science and Big Data Analytics</li>
          <li>Embedded Systems and IoT</li>
          <li>Wireless Communication and Networking</li>
        </ul>
      </div>
      <div className="bg-[#00BFFF]/10 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Research Opportunities</h3>
        <p className="text-white/80">
          SPIT provides excellent research opportunities in cutting-edge areas such as Artificial Intelligence, Cybersecurity, and Renewable Energy. Students are encouraged to publish their work in reputed journals and conferences.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Placement Support</h3>
        <p className="text-black">
          SPIT has a dedicated placement cell that ensures students are well-prepared for industry roles. Top recruiters include Google, Microsoft, TCS, Infosys, and more.
        </p>
      </div>
    </div>
  </PageSection>
);
const PhDProgramme = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Ph.D. Programme</h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Sardar Patel Institute of Technology offers a Ph.D. programme in Engineering and Technology, providing opportunities for advanced research and innovation. The programme is designed to foster academic excellence and contribute to the development of cutting-edge technologies.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Degree Awarded</h3>
        <ul className="space-y-4">
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-black">Ph.D. Electronics and Telecommunication</h4>
              <p className="text-black">Intake – 20 seats</p>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-black">Ph.D. Computer Engineering</h4>
              <p className="text-black">Intake – 30 seats</p>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-black">Ph.D. Electronics Engineering</h4>
              <p className="text-black">Intake – 10 seats</p>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-black">Ph.D. Master of Computer Applications</h4>
              <p className="text-black">Intake – 10 seats</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#00BFFF]/10 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Eligibility Criteria</h3>
        <p className="text-white/80">
          Candidates must have a Master's degree in Engineering/Technology or equivalent with a minimum of 55% marks. Admission is based on performance in the Ph.D. entrance test and interview conducted by the institute.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Programme Highlights</h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Access to state-of-the-art research facilities and laboratories.</li>
          <li>Guidance from experienced faculty with strong academic and industry backgrounds.</li>
          <li>Opportunities to collaborate with leading academic and research institutions.</li>
          <li>Focus on publishing research in reputed journals and conferences.</li>
        </ul>
      </div>
      <div className="bg-[#FFD700]/10 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Why Choose SPIT for Ph.D.?</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Ranked among the top engineering institutes in Maharashtra.</li>
          <li>Strong emphasis on innovation and sustainability.</li>
          <li>Collaborations with industry and academia for impactful research.</li>
          <li>Supportive environment for academic and professional growth.</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-black mb-2">Contact Information</h3>
        <p className="text-black">
          For inquiries regarding the Ph.D. programme, please contact:
        </p>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Email: <a href="mailto:phd@spit.ac.in" className="text-[#00BFFF] hover:underline">phd@spit.ac.in</a></li>
          <li>Phone: <a href="tel:+912234567890" className="text-[#00BFFF] hover:underline">+91 22 3456 7890</a></li>
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
const Curriculum = () => <PageSection>Details about Curriculum</PageSection>;
const Moodle = () => <PageSection>Details about Moodle</PageSection>;
const Scope = () => <PageSection>Details about SCOPE</PageSection>;
const ProfessionalEducation = () => <PageSection>Details about Professional Education</PageSection>;
const CustomizedCourses = () => <PageSection>Details about Customized Courses</PageSection>;
const CentersInitiatives = () => <PageSection>Details about Centers & Initiatives</PageSection>;
const CDEEP = () => <PageSection>Details about CDEEP Courses</PageSection>;

export default AcademicsLayout;