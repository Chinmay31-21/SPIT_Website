import React from 'react';
import { Award, CheckCircle, FileText, Users, BarChart2 } from 'lucide-react';

export const NBA = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          NBA Accreditation
        </h1>

        {/* Status Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Accredited Programs</h2>
              <p className="text-[#00BFFF]">Valid till 2025</p>
            </div>
          </div>
        </div>

        {/* Accredited Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              program: "Computer Engineering",
              status: "Accredited",
              validity: "2022-2025",
              intake: "120 seats"
            },
            {
              program: "Information Technology",
              status: "Accredited",
              validity: "2022-2025",
              intake: "120 seats"
            },
            {
              program: "Electronics Engineering",
              status: "Accredited",
              validity: "2022-2025",
              intake: "60 seats"
            }
          ].map((program, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">{program.program}</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#00BFFF]">
                  <CheckCircle className="w-4 h-4" />
                  <span>{program.status}</span>
                </div>
                <p className="text-white/80">Validity: {program.validity}</p>
                <p className="text-white/80">Intake: {program.intake}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Program Criteria",
              items: [
                "Vision, Mission and Program Educational Objectives",
                "Program Curriculum and Teaching-Learning Processes",
                "Course Outcomes and Program Outcomes",
                "Students' Performance",
                "Faculty Contributions",
                "Facilities and Technical Support",
                "Continuous Improvement"
              ]
            },
            {
              icon: <BarChart2 className="w-6 h-6" />,
              title: "Quality Metrics",
              items: [
                "Student-Faculty Ratio: 15:1",
                "Faculty with Ph.D: 75%",
                "Research Publications: 200+",
                "Patents Filed: 25+",
                "Placement Rate: 95%",
                "Higher Studies: 20%",
                "Industry Collaboration: 50+"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-[#FFD700]">{section.icon}</div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Resources & Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Important Documents</h3>
              <ul className="space-y-3">
                {[
                  'Self Assessment Report',
                  'Program Educational Objectives',
                  'Course Outcomes',
                  'Quality Policy',
                  'Best Practices'
                ].map((doc) => (
                  <li key={doc} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">
                      {doc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-white/80">
                <p>NBA Coordinator: Dr. Michael Brown</p>
                <p>Email: nba@spit.ac.in</p>
                <p>Phone: +91-XX-XXXXXXXX</p>
                <p>Office: Academic Building, Room 301</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
