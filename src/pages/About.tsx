import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Infrastructure } from './About/Infrastructure'; // Adjust path if needed

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
                  to="/about/institutional-values"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Institutional Values
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
              <li>
                <Link
                  to="/about/smcommittees"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Some More Committees
                </Link>
              </li>
              <li>
                <Link
                  to="/about/institutional-ethics-committee"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Institutional Ethics Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/about/organogram"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Organogram
                </Link>
              </li>
              <li>
                <Link
                  to="/about/deans"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Deans
                </Link>
              </li>
              <li>
                <Link
                  to="/about/employment"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Employment
                </Link>
              </li>
              <li>
                <Link
                  to="/about/bhartiya-vidya-bhavans-trustee"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Bhartiya Vidya Bhavan's Trustee
                </Link>
              </li>
              <li>
                <Link
                  to="/about/campus"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Campus
                </Link>
              </li>
              <li>
                <Link
                    to="/about/infrastructure"
                         className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                         >
                         Infrastructure
                            </Link>
              </li>
              <li>
                <Link
                  to="/about/contact-us"
                  className="block text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#00BFFF]/20 hover:text-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<AboutOverview />} />
            <Route path="institutional-values" element={<InstitutionalValues />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="principal-message" element={<PrincipalMessage />} />
            <Route path="founders" element={<Founders />} />
            <Route path="committees" element={<Committees />} />
            <Route path="institutional-ethics-committee" element={<InstitutionalEthicsCommittee />} />
            <Route path="organogram" element={<Organogram />} />
            <Route path="deans" element={<Deans />} />
            <Route path="employment" element={<Employment />} />
            <Route path="bhartiya-vidya-bhavans-trustee" element={<BhartiyaVidyaBhavansTrustee />} />
            <Route path="campus" element={<Campus />} />
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="smcommittees" element={<SomeMoreCommittees />} />
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

const AboutOverview = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">About SPIT</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        The institute is located in 47 acres of green campus at Andheri (W), the fastest growing suburb of Mumbai. The campus also houses four Bhavan’s Institutions of great repute namely Bhavan’s College (the arts, commerce and science college), Sardar Patel College of Engineering – Government aided Engineering college, S.P. Jain Institute of Management and Research, a management institute and A.H. Wadia, higher secondary school.
      </p>
      <p>
       In 1957, the Bharatiya Vidya Bhavan conceived the idea of establishing an engineering college in Mumbai. Sardar Patel College of Engineering was inaugurated on 19th August 1962.
      </p>
      <p>
       In 1995 self-financed engineering courses were added to it and it functioned as Sardar Patel College of Engineering (Unaided-wing) conducting Electronics Engineering, Computer Engineering and Information Technology Courses and Masters course in Electronics since 2005 till 2008. These courses have earned a great reputation in the field of engineering education,
      </p>
      <p>
        With a strong emphasis on innovation, sustainability, and ethical values, SPIT prepares students to become industry-ready professionals and responsible global citizens. Its close ties with industry and a culture of continuous learning contribute to its reputation as one of the premier engineering institutes in Maharashtra.
      </p>
    </div>
  </PageSection>
);

const InstitutionalValues = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Institutional Values</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        1. Integrity – Integrity is defined as the quality of being honest and having strong moral principles. In an educational institution, where the sole aim of the organisation is to life the mindset of the students to soar new heights, integrity is of paramount importance. Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology takes pride in working with integrity and a sense of righteousness to hold itself to consistent moral and ethical standards.
      </p>
      <p>
       2. Excellence – Excellence is the hallmark of consistency. Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology has consistently ranked among the top educational institutions in the city and state. It currently occupies a position in the 101 to 150 bracket of the National Institute Ranking Framework (NIRF). All this has been possible with dedicated input from the management and faculty members, who consistently try to mould the institution towards constant improvement and progress.
      </p>
      <p>
       3. Social Sensitivity – The prime goal of an educational institution like Sardar Patel Institute of Technology, under the aegis of management like Bharatiya Vidya Bhavan, strives to make the society better in all respects by providing quality education. One of the highlights of the new curriculum under autonomy has been to provide relevant education that would make a difference to the society. The institution also tries to instill the values of social service among its students and faculty members by being a part of various social welfare schemes, and tie-ups with NGOs from time to time.
      </p>
      <p>
        4. Globalization: Vasudev Kutumbakam – The whole universe is our family. With a strong belief in Vasudev Kutumbakam, Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology extends its services in education to one and all without any discrimination on any grounds whatsoever. It strives to consistently uplift the standard of education provided, with relevance to the current global trends and standards.
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
          <img src="/assets/Principalbg.png" alt="B.N.Chaudhari" />
        </div>
      </div>
      <div className="md:w-2/3 space-y-4 text-white/80 leading-relaxed">
        <p>I have great pleasure in expressing my thoughts as the Principal of Sardar Patel Institute of Technology (SPIT), the Numero Uno, self-financed, autonomous Institution of Maharashtra. We are a constituent of Bharatiya Vidya Bhavan, not just a conglomeration of more than 300 institutions, but a culture, a saga, a holy journey, started by Dr. K.M. Munshi with the support of Mahatma Gandhi in 1938. Imparting value-based education with Indian cultural ethos has always been the motto of Bhavan.</p>
        <p>Engineers & technologists form the backbone of any nation’s economic development. The world is presently undergoing very unprecedented, extraordinary, challenging time. A new normal is anticipated in many walks of life, including education. Such disruptions will come again and again in one or the other form. Engineers will work for 40-50 years of their life, they will have 3 to 4 diversified careers in technologies we are even unaware of. To make aspiring minds confident and future-proof, education must prepare them for a “marathon” rather than a “sprint”. SPIT makes continuous, sincere efforts towards this.</p>
        <p>We focus on “How to learn?” rather than “What to learn?”. We believe in multidisciplinary exposure to the learners, yet ensuring growth in one vertical, cherishing human sensitivity and empathy. We have thoughtfully articulated a unique academic model towards this. Our splendid academic performance, sparkling placements (quantitative and qualitative), enrollment for higher studies at the best places of the world, prizes won by our students in national/international level technical competitions, in past many years are the true testimonials for this.</p>
        <p>With the support of a dedicated and hardworking faculty and staff, the institute has achieved enviable visibility and ranking in a short span. On behalf of all stakeholders of SPIT, I welcome you to this family and look forward to your valuable association with us for a better tomorrow. Four years of engineering education at Sardar Patel Institute of Technology or two years post-graduation, will undoubtedly empower you to lead a successful life. <br />Let’s grow together…</p>
        <p className="font-semibold">— Dr. B.N. Chaudhari, Principal, SPIT</p>
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
          <img src="/assets/KMMM.jpg" alt="Kulpati Dr. K. M. Munshi" />
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Kulpati Dr. K. M. Munshi</h3>
        <p className="text-white/80">
          “Education would fail ignominiously in its objective if it manufactures only a robot and called him an economic man stressing the adjective economic and forgetting the substantive man. A university cannot afford to ignore the cultural aspects of education whatever studies it specilizes in. Science is a means, not an end. Whereas culture is an end in itself. Even though you may ultimately become a scientist, a doctor, or an engineer, you must while in college, absorb fundamental values which will make you a man of culture. An engineer has not merely to build bridges; he has to be a devoted husband, a kind father, a friendly neighbour, a dutiful citizen, and a man true to himself. He will have trials and tribulations; his heart will fail him at times; he will then need the strength which true culture alone can give.”
        </p>
      </div>
      <div className="space-y-4">
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          <img src="/assets/BVBT.jpg" alt="Bharitya Vidya Bhavan's Trustee" />
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Bhavan's Education Trust</h3>
        <p className="text-white/80">
          Bhavans Education Trust—formally Bharatiya Vidya Bhavan—is a prestigious non‑profit educational trust founded in 1938 by Dr. K. M. Munshi in Mumbai. It oversees a vast network of over 367 institutions in India (and several abroad), offering education spanning from kindergarten to postgraduate, across disciplines like arts, science, commerce, engineering, management, technology, and Indian culture
        </p>
        <p  className="text-white/80">A notable pillar of this network is Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology (SPIT) in Andheri, Mumbai. SPIT began in 1995 as the unaided engineering wing of Sardar Patel College of Engineering and became an independent, self-financed institute in 2005. In 2017, it achieved autonomous status under Mumbai University, marking a significant milestone</p>
        <p  className="text-white/80">
          Bhavans Education Trust has been instrumental in SPIT’s journey—from seeding its inception under Bhavan’s wing, to overseeing its infrastructure, funding, governance, and value-driven educational philosophy—helping SPIT emerge as one of Mumbai’s top autonomous engineering institutes.
        </p>
      </div>
    </div>
  </PageSection>
);

const Committees = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Committees</h2>
    <div className="space-y-3">
      {[
        {
          title: "Governing Body Committee",
          description: "Provides overall governance and strategic direction for the institution, ensuring alignment with its mission and vision.",
          pdfLink: <a href="/assets/GoverningBody.pdf" style={{ fontWeight: 'bold' }}>Governing Body.pdf</a>
          },
        {
          title: "Anti-Ragging Committee (Recent)",
          description: "Creates a ragging-free environment with proactive measures, awareness campaigns, and strict enforcement of anti-ragging policies to ensure student safety.",
          pdfLink: <a href="/assets/AntiRagging.pdf" style={{ fontWeight: 'bold' }}>Anti-Ragging Committee(Recent).pdf</a> 
        },
        {
          title: "Anti-Ragging Committee (Previous))",
          description: "",
          pdfLink: <a href="/assets/AntiRaggingprev.pdf" style={{ fontWeight: 'bold' }}>Anti-Ragging Committee(Previous).pdf</a> 
        },
        {
          title: "Grievance Redressal Committee",
          description: "Addresses student grievances and ensures a fair and transparent process for resolving issues.",
          pdfLink: <a href="/assets/GrievanceCommittee.pdf" style={{ fontWeight: 'bold' }}>Grievance Redressal Committee.pdf</a>
        },
        {
          title: "Grievance Redressal Committee (Previous)",
          description: "",
          pdfLink: <a href="/assets/GrievanceCommitteeprev.pdf" style={{ fontWeight: 'bold' }}>Grievance Redressal Committee (Previous).pdf</a>
        },
        {
          title: "Internal Complaints Committee (Recent)",
          description: "The Internal Complaints Committee (ICC) is responsible for addressing complaints related to sexual harassment and ensuring a safe and inclusive environment for all members of the institute.",
          pdfLink: <a href="/assets/ICCMembers.pdf" style={{ fontWeight: 'bold' }}>Internal Complaints Committee (Recent).pdf</a>
        },
        {
          title: "Internal Complaints Committee (Previous)",
          description: "",
          pdfLink: <a href="/assets/ICCMembersprev.pdf" style={{ fontWeight: 'bold' }}>Internal Complaints Committee (Previous).pdf</a>
        },
        {
          title: "ICC/WDC Portal",
          description: "",
          pdfLink: <a href="http://wdc.spit.ac.in/" style={{ fontWeight: 'bold' }}>ICC/WDC Portal</a>
        },
        {
          title: "SC/ST Committee",
          description: "Supports the welfare and development of Scheduled Castes and Scheduled Tribes students, ensuring their rights and opportunities are upheld.",
          pdfLink: <a href="/assets/SCSTMembers.pdf" style={{ fontWeight: 'bold' }}>SC/ST Committee.pdf</a>
        },
        {
          title: "SC/ST Committee (Previous)",
          description: "",
          pdfLink: <a href="/assets/SCSTMembersprev.pdf" style={{ fontWeight: 'bold' }}>SC/ST Committee (Previous).pdf</a>
        },
        {
          title: "SC/ST Committee Portal",
          description: "",
          pdfLink: <a href="http://scst.spit.ac.in/" style={{ fontWeight: 'bold' }}>SC/ST Committee Portal</a>
        }
      ].map(({ title, description, pdfLink }) => (
        <div className="p-4 bg-black/50 rounded-lg" key={title}>
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
          <p className="text-white/80">{pdfLink}</p>
        </div>
      ))}
    </div>
  </PageSection>
);



const SomeMoreCommittees = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Some More Committees and Offices</h2>
    <ul className="list-disc list-inside text-white/80 space-y-2">
      {[
        { name: "Academic Calendar", link: "#" },
        { name: "ACE", link: "#" },
        { name: "Admission Committee", link: "#" },
        { name: "Alumni Committee", link: "#" },
        { name: "CSI", link: "https://csi.spit.ac.in/" },
        { name: "E-Cell Committee", link: "https://ecell.spit.ac.in/" },
        { name: "ERP", link: "#" },
        { name: "ESA", link: "#" },
        { name: "Examination Committee", link: "/assets/ExaminationCommittee.pdf" },
        { name: "Extended Principal's Office", link: "#" },
        { name: "FACE", link: "https://face.spit.ac.in/" },
        { name: "FETS", link: "https://fets.spit.ac.in/" },
        { name: "IQAC", link: "https://iqac.spit.ac.in/" },
        { name: "Grievance Redressal Committee", link: "/assets/GrievanceCommittee.pdf" },
        { name: "IEDC", link: "#" },
        { name: "IEEE", link: "https://ieee.spit.ac.in/" },
        { name: "IETE", link: "https://iete.spit.ac.in/" },
        { name: "IIC", link: "/assets/IICCommitee.pdf" },
        { name: "IIC Committee 2023", link: "/assets/IICCommittee2023.pdf" },
        { name: "Institutional Ethics Committee", link: "/about/institutional-ethics-committee" },
        { name: "Placement Cell", link: "https://placement.spit.ac.in/" },
        { name: "IR Cell", link: "#" },
        { name: "ISTE", link: "#" },
        { name: "ITSA", link: "#" },
        { name: "Library Committee", link: "#" },
        { name: "Magazine Committee", link: "#" },
        { name: "NAAC", link: "./pages/accreditation/NAAC" },
        { name: "NIRF", link: "./pages/accreditation/NIRF" },
        { name: "Purchase Committee", link: "#" },
        { name: "R&D Committee", link: "https://www.spit.ac.in/faculty-research/rd-committee/" },
        { name: "Student Welfare Committee", link: "#" },
        { name: "Student Council", link: "/assets/StudentCouncil2425.pdf" },
        { name: "Timetable Committee", link: "#" },
        { name: "Training & Placement", link: "https://placements.spit.ac.in/" },
        { name: "Unfair Means", link: "#" },
        { name: "Vigilance Squad", link: "#" },
        { name: "Website", link: "#" },
        { name: "WIE", link: "http://wie.spit.ac.in/" },
      ].map(({ name, link }) => (
        <li key={name}>
          {link.startsWith('http') || link.endsWith('.pdf') || link === "#" ? (
            <a
              href={link}
              className="text-[#00BFFF] hover:underline font-semibold"
              target={link.startsWith('http') ? "_blank" : undefined}
              rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              {name}
            </a>
          ) : (
            <Link
              to={link}
              className="text-[#00BFFF] hover:underline font-semibold"
            >
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </PageSection>
);

const InstitutionalEthicsCommittee = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">IEC Committees</h2>
    <div className="space-y-6">
      {[
        {
          title: "IEC Appointment_Letter 2020-21",
          description: "The Institutional Ethics Committee (IEC) is responsible for overseeing ethical standards in research and academic activities, ensuring compliance with regulations and guidelines.",
          pdfLink: "/assets/IEC-Appointment_Letter-2020-21.pdf"
        },
        {
          title: "IIC-SPIT Committee Details",
          description: "The IIC-SPIT Committee is dedicated to promoting innovation and entrepreneurship within the institute, fostering a culture of creativity and technological advancement.",
          pdfLink: "/assets/IIC-SPIT.pdf"
        },
        {
          title: "Annexure-1 Application Form",
          description: "The Annexure-1 Application Form is used for submitting research proposals to the IEC, ensuring that all necessary information is provided for ethical review.",
          pdfLink: "/assets/Annexure-1-Application-Form.pdf"
        },
      ].map(({ title, description, pdfLink }) => (
        <div className="p-4 bg-black/50 rounded-lg" key={title}>
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
          {pdfLink && (
            <p className="text-white/80">
              <a href={pdfLink} className="font-semibold" style={{ fontWeight: 'bold' }}>
                {title}.pdf
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  </PageSection>
);

const Organogram = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Organogram</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        The Organogram of SPIT illustrates the hierarchical structure of the institution, showcasing the various departments, committees, and their interrelations. It serves as a visual representation of the governance and administrative framework that supports the institute's operations and academic activities.
      </p>
     <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          <img src="/assets/Organo.png" alt="Organogram" />
        </div>
    </div>
  </PageSection>
);


const Deans = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Deans</h2>
    <div className="space-y-6">
      {[
        {
          name: "Dr. Sudhir Dhage",
          designation: "Dean (Administration and Quality Assurance)",
          description: "Oversees administrative functions and ensures quality assurance processes are in place.",
          photo: "/assets/SND.png",
        },
        {
          name: "Dr. Y. S. Rao",
          designation: "Dean (Academics and Research)",
          description: "Responsible for academic policies, curriculum development, and promoting research initiatives.",
          photo: "/assets/YSRAO.png",
        },
        {
          name: "Prof. Kiran Talele",
          designation: "Dean (Students, Alumini and External Relations)",
          description: "Focuses on student engagement, alumni relations, and building partnerships with external organizations.",
          photo: "/assets/KTT.png",
        },
      ].map(({ name, designation, description, photo }) => (
        <div className="flex items-center gap-6 p-4 bg-black/50 rounded-lg" key={name}>
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-black/30 flex items-center justify-center">
            <img src={photo} alt={name} className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{name}</h3>
            <p className="text-white/80">{designation}</p>
            <p className="text-white/80">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </PageSection>
);


const Employment = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Employment</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
       Advertisement for faculty & staff positions are published in newspapers and posted on the website periodically.
      </p>
      <p>
        For Adhoc faculty application please submit your details on our job portal: <a href="http://jobs.spit.ac.in/" style={{ fontWeight: 'bold' }}>http://jobs.spit.ac.in/</a>
      </p>
      <p><a href="/assets/General-Service-Policy.pdf" style={{ fontWeight: 'bold' }}>General Service Policy (Recent)</a></p>
    </div>
  </PageSection>
);

const BhartiyaVidyaBhavansTrustee = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Bhartiya Vidya Bhavan's Trustee</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        The Bhartiya Vidya Bhavan's Trustee plays a crucial role in overseeing the operations and governance of SPIT. The trustee ensures that the institute adheres to its mission and vision, maintaining high standards of education and ethical practices.
      </p>
      <p>
        The trustee also facilitates collaborations with other educational institutions and industry partners, enhancing the overall academic and research environment at SPIT.
      </p>
      <p><a href="https://www.bhavans.info/" style={{ fontWeight: 'bold' }}>Bhartiya Vidya Bhavan's</a></p>
    </div>
  </PageSection>
);

const Campus = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Campus</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        SPIT is situated in a sprawling 47-acre green campus in Andheri (W), Mumbai. The campus is designed to provide a conducive environment for learning, with state-of-the-art facilities, modern classrooms, well-equipped laboratories, and extensive libraries.
      </p>
      <p>
        The campus also houses several other prestigious institutions under the Bhartiya Vidya Bhavan umbrella, including Bhavan's College, Sardar Patel College of Engineering, S.P. Jain Institute of Management and Research, and A.H. Wadia Higher Secondary School.
      </p>
      <p>For Virtual Tour Campus follow this link : <a href="https://tour.spit.ac.in" style={{ fontWeight: 'bold' }}>SPIT's Virtual Campus Tour</a></p>
    </div>
  </PageSection>
);

const ContactUs = () => (
  <PageSection>
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
    <div className="text-white/80 leading-relaxed space-y-4">
      <p>
        For any inquiries or further information, please feel free to reach out to us:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Email: <a href="mailto:info@spit.ac.in">info@spit.ac.in</a></li>
        <li>Phone: <a href="tel:+912234567890">+91 22 3456 7890</a></li>
        <li>Address: <a href="https://www.google.com/maps?q=SPIT,+Andheri,+Mumbai" target="_blank" style={{ fontWeight: 'bold' }}>SPIT, Andheri, Mumbai</a></li>
        <li>Website: <a href="https://www.spit.ac.in" target="_blank" style={{ fontWeight: 'bold' }}>www.spit.ac.in</a></li>
        <li>For any Query: <a href="/contact"  style={{ fontWeight: 'bold' }}>Contact Us</a></li>
      </ul>
    </div>
  </PageSection>
);

export const About = AboutLayout;
