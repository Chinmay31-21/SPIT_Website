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
  </div>
);


const VisionMission = () => (
  <div className="bg-black/30 p-6 rounded-lg">
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
          <li>
            To provide a conducive academic and research environment that stimulates learning, promotes intellectual growth, and ensures professional development of students, faculty, and staff.
          </li>
          <li>
            To collaborate with renowned industry, academic institutions, and research laboratories for academics and research to solve real life problems.
          </li>
          <li>
            To leverage the strength of alumni to foster industry-relevant coaching and mentoring of the students.
          </li>
          <li>
            To nurture values with a sense of social responsibility and inculcate attitude and skills required for holistic development of the students.
          </li>
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
        {/* Replace the div below with an actual principal photo if available */}
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Principal Photo
        </div>
      </div>
      <div className="md:w-2/3">
        <p className="text-white/80 leading-relaxed">
          It is my privilege to welcome you to Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (SPIT), a premier institute dedicated to nurturing future leaders in engineering and technology.
        </p>
        <p className="text-white/80 leading-relaxed mt-4">
          At SPIT, we are committed to fostering a culture of academic excellence, innovation, and ethical values. Our faculty and staff strive to provide an enriching learning environment that encourages research, creativity, and holistic development.
        </p>
        <p className="text-white/80 leading-relaxed mt-4">
          We aim to equip our students with the knowledge, skills, and social sensitivity required to excel globally and contribute meaningfully to society. Together, we work towards shaping a brighter future through education and technology.
        </p>
        <p className="text-white/80 leading-relaxed mt-6 font-semibold">
          — Dr. [Principal's Name], Principal, SPIT
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
        {/* Replace below div with founder’s image */}
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Founder Photo
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Dr. K. M. Munshi</h3>
        <p className="text-white/80">
          Founder of Bharatiya Vidya Bhavan, Dr. Kanhaiyalal Maneklal Munshi was a visionary leader, freedom fighter, and educationist who laid the foundation for SPIT with a mission to promote quality education rooted in Indian culture and values.
        </p>
      </div>

      <div className="space-y-4">
        {/* Add additional founders here if applicable */}
        <div className="aspect-square bg-black/50 rounded-lg flex items-center justify-center text-white/50">
          Founder Photo
        </div>
        <h3 className="text-xl font-semibold text-[#00BFFF]">Bhavan's Education Trust</h3>
        <p className="text-white/80">
          Bhavan's Education Trust has played a pivotal role in nurturing SPIT's growth by providing steadfast support and vision to develop it into a premier institution for technical education.
        </p>
      </div>
    </div>
  </div>
);

const Committees = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Committees</h2>
    <div className="space-y-6">

      <div className="p-4 bg-black/50 rounded-lg">
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Academic Council</h3>
        <p className="text-white/80">
          The Academic Council is the highest academic body of the Institute. It ensures the maintenance of academic standards and quality of education and research. It is responsible for approving academic regulations, curriculum, syllabi, and policies related to teaching and examination.
        </p>
      </div>

      <div className="p-4 bg-black/50 rounded-lg">
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Board of Studies</h3>
        <p className="text-white/80">
          The Board of Studies formulates and revises the curriculum and syllabi for various academic programs. It consults with experts from academia and industry to keep the syllabus updated, ensuring students are trained with relevant knowledge and skills aligned to industry requirements.
        </p>
      </div>

      <div className="p-4 bg-black/50 rounded-lg">
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Anti-Ragging Committee</h3>
        <p className="text-white/80">
          This committee is dedicated to creating a ragging-free campus. It undertakes proactive measures to prevent ragging incidents by raising awareness, monitoring student behavior, and promptly addressing complaints. Strict disciplinary action is taken against anyone found guilty of ragging.
        </p>
      </div>

      <div className="p-4 bg-black/50 rounded-lg">
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Women Development Cell</h3>
        <p className="text-white/80">
          The Women Development Cell works to empower women students and staff by promoting gender equality, safety, and awareness. It conducts workshops, counseling, and activities to sensitize the campus community on women’s issues and create a supportive environment.
        </p>
      </div>

    </div>
  </div>
);


export const About = AboutLayout;