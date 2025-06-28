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
              href="/assets/extc-scheme-2023-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              EXTC-Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/extc-syll-2023-27.pdf"
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
              href="/assets/CE_2022-2026_Scheme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-ds-scheme-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – Data Science Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-aiml-scheme-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – AIML Scheme
            </a>
          </li>
          <li>
            <a
              href="/assets/B. Tech. EXTC_2022-2026_Scheme_modified.pdf"
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
              href="/assets/CE_2021-2025_Scheme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Computer
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-ds-scheme-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – Data Science
            </a>
          </li>
          <li>
            <a
              href="/assets/cse-aiml-scheme-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CSE – AIML
            </a>
          </li>
          <li>
            <a
              href="/assets/B. Tech. EXTC_2021-2025_Scheme_modified.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Electronics and Telecommunication
            </a>
          </li>
          <li>
            <a
              href="/assets/OAE-2021-22.pdf"
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
);
const Moodle = () => (
  <PageSection>
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
      Moodle
    </h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Welcome to the Moodle platform of Sardar Patel Institute of Technology. Moodle is an online learning management system that provides students and faculty with access to course materials, assignments, and other resources.
      </p>
      <div className="mt-4">
        <a
          href="https://moodle.spit.ac.in/login/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold hover:underline"
        >
          Click here to access Moodle
        </a>
      </div>
    </div>
  </PageSection>
);
const Scope = () => (
  <PageSection>
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
      SCOPE
    </h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Welcome to the SCOPE platform of Sardar Patel Institute of Technology. SCOPE provides students and faculty with access to various resources and tools for academic and professional development.
      </p>
      <p>
        You can manually access the SCOPE platform by clicking the link below:
      </p>
      <div className="mt-4">
        <a
          href="https://scope.spit.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold hover:underline"
        >
          Click here to access SCOPE
        </a>
      </div>
    </div>
  </PageSection>
);
const ProfessionalEducation = () => (
  <PageSection>
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
      Professional Education
    </h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <p>
        Sardar Patel Institute of Technology offers a variety of certificate courses and workshops designed to enhance professional skills and knowledge in various domains. Below are the details of the programs offered:
      </p>

      {/* Certificate Courses */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Certificate Courses</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Information Security:</strong> Introduction to Enterprise System Security, Penetration Testing, System Scanning & Probing, Network Sniffing & Traffic Analysis, OS Fingerprinting & Hardening OS, Understanding Logging & Log Monitoring, Patch Management & Monitoring, Implementing & Maintaining Firewall, Implementing Intrusion Detection Systems (IDS), Security Information Management. <em>100% Hands-On-Lab workshop</em>.
          </li>
          <li>
            <strong>Private Cloud Setup using Open Source Tools:</strong> Introduction to Cloud Computing, Virtualization, Install Configure Deploy Private Cloud, Creating and Managing Machine Images, Launching MI as instances, Attaching Block Storage to instances, RDP/SSH to instance.
          </li>
          <li>
            <strong>Neural Network & Fuzzy Logic:</strong> Introduction to Neural Network, Neural network architecture & Learning Algorithms, Single Layer & Multilayer Perceptron, Backpropagation algorithm, HopField Neural Network & case studies, Fuzzy controller design with case studies, Research topics based on Neural network & fuzzy systems.
          </li>
          <li>
            <strong>Electromagnetic Waves & Its Applications:</strong> Fundamentals of Electromagnetism, Uniform plane wave, Antenna and Wave propagation, Transmission lines and waveguides, Applications of Electromagnetism in various fields, Understanding Electromagnetic Wave Theory (EWT) fundamentals, Effective Classroom Teaching of EWT, Applications of EWT in various Communication Fields.
          </li>
          <li>
            <strong>Foundation Mathematics for DSP, Computer Networks, and Information Theory/Cryptography:</strong>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li><strong>DSP:</strong> Mathematical Logic, Calculus and Real Analysis, Basic Signals and Systems.</li>
              <li><strong>Networks:</strong> Basic Probability Theory, Random Variable, Stochastic Processes, Queuing Theory.</li>
              <li><strong>Information Theory and Cryptography:</strong> Topics in Number Theory, Finite Fields and Quadratic Residues, Elementary Cryptography, Public Key, Primality and Factoring, An Introduction to Codes, Efficient Coding, Noiseless Coding.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Application Development Certificate Program */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Application Development Certificate Program (ADCP)</h3>
        <p>
          Using VB.NET & ADO.NET: Introduction, Windows Forms, Taking Advantage of the Form Event Model, Common Windows Forms Controls, Exception Handling, Working with Strings and Dates, Accessing Data, Data Binding Techniques, Using the Data Controls, Handling Input/Output Tasks, Project Settings in Visual Studio, Debugging Applications, Container Controls, Menus and Toolbars, Complex Windows Forms Controls, Namespace.
        </p>
      </div>

      {/* Other Programs */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Other Programs</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Computer Networking and System Security:</strong> Core Networking concepts, mobile communication, Linux and Windows Networking, Network security, TCP/IP concepts and Management, Network Protocol Analysis, Switchgear & Protection Seminar on PLC Programming Self-awareness.
          </li>
          <li>
            <strong>Fundamentals of Circuit Simulation:</strong> Techniques for systematically assembling circuit equations, Nonlinear equations and use of the Newton-Raphson method, Transient simulation of circuits, numerical methods for solving ODEs, simulation package SEQUEL, applications of SEQUEL in networks, filter design, and power electronics with hands-on.
          </li>
          <li>
            <strong>Embedded Systems Design and Programming:</strong> Introduction to Embedded systems, microcontrollers & DSP processors, interface methods, Basic concepts of data synchronization, Parallel I/O interface examples, external interrupts design approach, Timing generation and measurements, Serial communications: SCI, SPI, Interfacing with switches, keyboards, LED’s, LCD’s, Computer-controlled current switches, relays, solenoids, DC, AC motors and stepper motors, Analog interfacing and data acquisition systems, Transducers used in embedded systems, Fuzzy logic control systems, Digital filters, PCB design, RTOS.
          </li>
          <li>
            <strong>Hardware Description Languages:</strong> Introduction to HDL, Design flow and designing with VHDL, Behavioral modeling in VHDL, Advanced VHDL, Simulation Issues, synthesis issues, test benches and assertion statement, Introduction to Verilog, capabilities of Verilog, syntax and Semantics of Verilog, examples of design using Verilog.
          </li>
          <li>
            <strong>Real-time Digital Signal Processing:</strong> Z-Transform and Introduction to DT system, analysis of DT systems, DFT, FFT, IIR Filter design, FIR filter design, practical considerations, DSP processors, DSP applications.
          </li>
          <li>
            <strong>ARM Processors and Real-Time Operating Systems (RTOS):</strong> Introduction to ARM, Design approaches CISC, RISC, ARM’s approach towards RISC, ARM processor architecture, ARM instruction set, THUMB instruction set, ARM assembly language programming, writing and optimizing ARM assembly code, architectural support for High-level languages, architectural support for system development, architectural support for operating systems ARM processor cores, Real-Time Operating system concepts, kernel structure, multitasking, task management, time management, schedulers, event control locks, priorities, deadlocks, synchronization, semaphore management, memory management, RTOS implementation, board support package implementation for uclinux, drivers for RD-232, USB 2.0, Ethernet, Device Port I/O.
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
);
const CustomizedCourses = () => (
  <PageSection>
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">
      Customized Courses
    </h2>
    <div className="text-white/80 leading-relaxed space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-black">
          We at S.P.I.T. are ready to partner in your company’s success by creating unique content to meet your specific requirements for professional skill training. Our faculty will create unique content to meet your staff’s specific needs.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Salient Features:</h3>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Training for multiple people from your company</li>
          <li>Schedule as per your convenience</li>
          <li>Practical, hands-on experience</li>
        </ul>
      </div>
      <p className="text-white">
        For more information on bringing our courses to you, kindly email your requirements at <a href="mailto:principal@spit.ac.in" className="text-red-600 hover:underline">principal@spit.ac.in</a>.
      </p>
    </div>
  </PageSection>
);
const CentersInitiatives = () => <PageSection>Details about Centers & Initiatives</PageSection>;
const CDEEP = () => <PageSection>Details about CDEEP Courses</PageSection>;

export default AcademicsLayout;