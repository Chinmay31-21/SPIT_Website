import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const AcademicsLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8">Academics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 bg-black/30 p-4 rounded-lg">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/academics" className="text-white hover:text-[#00BFFF] transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/academics/departments" className="text-white hover:text-[#00BFFF] transition-colors">Departments</Link>
              </li>
              <li>
                <Link to="/academics/faculty" className="text-white hover:text-[#00BFFF] transition-colors">Faculty</Link>
              </li>
              <li>
                <Link to="/academics/curriculum" className="text-white hover:text-[#00BFFF] transition-colors">Curriculum</Link>
              </li>
              <li>
                <Link to="/academics/calendar" className="text-white hover:text-[#00BFFF] transition-colors">Academic Calendar</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<Programs />} />
            <Route path="departments" element={<Departments />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};



const Programs = () => (
  <div className="space-y-6">
    <BTechSection />
    <MTechSection />
    <PhDSection />
  </div>
);

const BTechSection = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">B.Tech Programs</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Computer Engineering</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 180
        </p>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Duration :</span> 4 Years
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates are equipped for careers in software development, IT consulting, system architecture, and research, with opportunities in both industry and academia.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Computer Science and Engineering (AI & ML)</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 60
        </p>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Duration :</span> 4 Years
        </p>
        
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates can pursue roles in AI research, data science, robotics, and advanced software engineering, contributing to cutting-edge technological advancements.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Electronics and Telecommunication Engineering</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 120
        </p>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Duration :</span> 4 Years
        </p>
        
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates are prepared for careers in telecommunications, embedded systems, IoT, electronics design, and research in next-generation communication technologies.
        </p>
      </div>
    </div>
  </div>
);

const MTechSection = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">M.Tech Programs</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Masters of Computer Application (MCA)</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 60
        </p>
        <p className="text-white/80">
          The MCA program provides advanced knowledge in software development, database management, web technologies, and mobile application development. It prepares students for high-level roles in software engineering and IT management.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates can pursue careers in software development, IT consultancy, project management, and research, with opportunities in both domestic and international markets.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Electronics and Telecommunication Engineering</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 18
        </p>
        <p className="text-white/80">
          This program focuses on advanced topics in VLSI design, embedded systems, wireless communication, and signal processing. Students gain expertise in designing and analyzing modern electronic and communication systems.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates can pursue careers in R&D, telecommunications, semiconductor industries, and higher education.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Computer Enginnering</h3>
        <p className="text-white/80 mb-1">
          <span className="font-semibold text-[#FFD700]">Seats Available:</span> 18
        </p>
        <p className="text-white/80">
          The M.Tech in Computer Engineering program offers advanced studies in computer architecture, distributed systems, and software engineering. It prepares students for leadership roles in technology development and innovation.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates are equipped for careers in software development, system architecture, IT consultancy, and research, with opportunities in both industry and academia.
        </p>
      </div>
    </div>
  </div>
);

const PhDSection = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Ph.D Programs</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Computer Engineering</h3>
        <p className="text-white/80">
          The Ph.D in Computer Engineering program is designed for scholars interested in advanced research in areas such as algorithms, artificial intelligence, cybersecurity, and distributed systems. Students work closely with faculty on innovative projects and publish in reputed journals.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates pursue careers as researchers, academicians, and leaders in technology-driven organizations.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Electronics and Telecommunication Engineering</h3>
        <p className="text-white/80">
          This Ph.D program focuses on research in communication systems, VLSI design, embedded systems, and signal processing. Scholars contribute to advancements in electronics and telecommunication through original research and interdisciplinary collaboration.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates become experts in their field, contributing to academia, industry R&D, and government research labs.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Interdisciplinary Research</h3>
        <p className="text-white/80">
          SPIT encourages interdisciplinary Ph.D research across engineering, data science, and emerging technologies. Students are supported to work on real-world problems, often in collaboration with industry and research organizations.
        </p>
        <p className="text-white/70 mt-1">
          <span className="font-semibold">Broader Perspective:</span> Graduates are equipped for leadership roles in research, innovation, and policy-making.
        </p>
      </div>
    </div>
  </div>
);


const Departments = () => (
  <div className="space-y-6">
    <CE />
    <CSE />
    <EXTC />
  </div>
);

const CE = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Computer Engineering</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Overview</h3>
        <p className="text-white/80">
         Computer Engineering program provides a comprehensive foundation in computer science, software engineering, and hardware systems. Students learn programming, data structures, algorithms, and system design.
        </p>
        
      </div>
      
    </div>
  </div>
);

const CSE = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Computer Science and Engineering</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Overview</h3>
        
         <p className="text-white/80">
          This program emphasizes core computer science concepts along with specialized training in Artificial Intelligence and Machine Learning. Students gain hands-on experience in data science, neural networks, deep learning, and intelligent systems.
        </p>
        
      </div>
      
    </div>
  </div>
);

const EXTC = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Electronics and TeleCommunication Engineering</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">Overview</h3>
        <p className="text-white/80">
          Electronics and Telecommunication Engineering program covers electronic circuits, communication systems, signal processing, embedded systems, and wireless technologies. Students learn to design and analyze modern communication networks and electronic devices.
        </p>
        </div>
    </div>
  </div>
);

const Faculty = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Faculty Directory</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-4 bg-black/50 rounded-lg">
          <div className="aspect-square bg-black/70 rounded-lg mb-4"><img src="/assets/user.jpg" alt="Faculty" /></div>
          <h3 className="text-lg font-semibold text-[#00BFFF]">Professor Name</h3>
          <p className="text-white/80 text-sm">Department</p>
        </div>
      ))}
    </div>
  </div>
);

const Curriculum = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Curriculum</h2>
    <div className="space-y-6">
      {['First Year', 'Second Year', 'Third Year', 'Final Year'].map((year) => (
        <div key={year} className="p-4 bg-black/50 rounded-lg">
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{year}</h3>
          <p className="text-white/80">Curriculum details for {year} students.</p>
        </div>
      ))}
    </div>
  </div>
);

const Calendar = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Academic Calendar</h2>
    <div className="space-y-6">
      {['Odd Semester', 'Even Semester', 'Summer Term'].map((term) => (
        <div key={term} className="p-4 bg-black/50 rounded-lg">
          <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">{term}</h3>
          <p className="text-white/80">Calendar details for {term}.</p>
        </div>
      ))}
    </div>
  </div>
);

export const Academics = AcademicsLayout;