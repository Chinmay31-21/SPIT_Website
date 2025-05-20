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
    {['B.Tech', 'M.Tech', 'Ph.D'].map((program) => (
      <div key={program} className="bg-black/30 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">{program} Programs</h2>
        <div className="space-y-4">
          <p className="text-white/80">
            Detailed information about the {program} programs offered at SPIT.
          </p>
        </div>
      </div>
    ))}
  </div>
);

const Departments = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {['Computer Engineering', 'Information Technology', 'Electronics & Telecommunication'].map((dept) => (
      <div key={dept} className="bg-black/30 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-[#FFD700] mb-4">{dept}</h2>
        <p className="text-white/80">
          Overview of the {dept} department and its specializations.
        </p>
      </div>
    ))}
  </div>
);

const Faculty = () => (
  <div className="bg-black/30 p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Faculty Directory</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-4 bg-black/50 rounded-lg">
          <div className="aspect-square bg-black/70 rounded-lg mb-4"></div>
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