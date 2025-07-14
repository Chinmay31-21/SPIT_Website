import React from 'react';
import { Award, CheckCircle, FileText, Users, BarChart2 } from 'lucide-react';

export const NBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8">
          NBA Accreditation
        </h1>

        {/* Status Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Accredited Programs</h2>
              <p className="text-[#00BFFF]">Valid till 2030</p>
            </div>
          </div>
        </div>

        {/* Accredited Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              program: "Computer Engineering",
              status: "Not Accredited",
              validity: "Not Elligible",
              intake: "240 seats"
            },
            {
              program: "Computer Science and Engineering",
              status: "Not Accredited",
              validity: "Not Elligible",
              intake: "120 seats"
            },
            {
              program: "Electronics and Telecommunication Engineering",
              status: "Accredited",
              validity: "2024-2030",
              intake: "120 seats"
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
                "Student-Faculty Ratio: 12:1",
                "Faculty with Ph.D: 80%",
                "Research Publications: 300+",
                "Patents Filed: 30+",
                "Placement Rate: 99.83%",
                "Higher Studies: 18%",
                "Industry Collaboration: 60+"
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
            For Complete NBA Documentation, follow this link:  <button className=""><a href="https://nbawebpage.vercel.app/" className='bg-gradient-to-r from-[#5E035E] to-[#30036B] hover:bg-gradient-to-l hover:from-[#FED99B] hover:to-[#FED18C] rounded-lg backdrop-blur-md text-[#D6EFFF] hover:text-[#022F40] px-4 py-0 transition-colors duration-300'>
              NBA
             </a> </button>
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
              <h3 className="text-xl text-white mb-4">What is NBA?</h3>
              
                <p>T<div className="space-y-2 text-white/80">he National Board of Accreditation (NBA) is an autonomous body that evaluates and accredits technical programs in India.</p>
                <p>It aims to enhance the quality of education and promote excellence in technical institutions.</p>
                <p>NBA accreditation is a mark of quality and recognition for engineering programs.</p> 
                <p>It ensures that programs meet global standards and prepare students for industry challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
