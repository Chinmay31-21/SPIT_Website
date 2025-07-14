import React from 'react';
import { FileText, Award, CheckCircle, BarChart2, Users } from 'lucide-react';

export const NAAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8">
          NAAC Accreditation
        </h1>

        {/* Status Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Grade A+</h2>
              <p className="text-[#00BFFF]">CGPA: 3.38 out of 4.00</p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Criteria */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Assessment Criteria
            </h2>
            <ul className="space-y-3 text-white/80">
              <li>Curricular Aspects</li>
              <li>Teaching-Learning & Evaluation</li>
              <li>Research & Extension</li>
              <li>Infrastructure & Learning Resources</li>
              <li>Student Support & Progression</li>
              <li>Governance & Leadership</li>
              <li>Institutional Values</li>
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Key Documents
            </h2>
            <ul className="space-y-3">
              {[
                'Self Study Report (SSR)',
                'Annual Quality Assurance Report',
                'Academic Calendar',
                'Best Practices',
                'Institutional Distinctiveness',
                'Quality Initiatives',
                'DVV Clarification',
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

          {/* Quality Metrics */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
              <BarChart2 className="w-5 h-5" />
              Quality Metrics
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Student Satisfaction', value: '90%' },
                { label: 'Faculty with Ph.D', value: '80%' },
                { label: 'Research Publications', value: '300+' },
                { label: 'Placement Rate', value: '99.83%' }
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between items-center">
                  <span className="text-white/80">{metric.label}</span>
                  <span className="text-[#00BFFF] font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IQAC Section */}
        <div className="mt-8 bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            NAAC Total Disclosure and Criteria Follow this link : <button className=""><a href="#" className='bg-gradient-to-r from-[#5E035E] to-[#30036B] hover:bg-gradient-to-l hover:from-[#FED99B] hover:to-[#FED18C] rounded-lg backdrop-blur-md text-[#D6EFFF] hover:text-[#022F40] px-4 py-0 transition-colors duration-300'>
              NAAC
             </a> </button>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Objectives</h3>
              <ul className="space-y-2 text-white/80">
                <li>Development of quality benchmarks</li>
                <li>Promotion of innovative practices</li>
                <li>Documentation of various programs/activities</li>
                <li>Stakeholder feedback analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Functions</h3>
              <ul className="space-y-2 text-white/80">
                <li>Coordination of quality assurance activities</li>
                <li>Preparation of AQAR and SSR</li>
                <li>Organizing workshops and seminars</li>
                <li>Collaboration with other institutions</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl text-white mb-4'>What is NAAC?</h3>
              <div className="space-y-2 text-white/80">
                <p>The National Assessment and Accreditation Council (NAAC) is an autonomous body that assesses and accredits higher education institutions in India.
                It aims to promote quality education and enhance the overall performance of institutions.</p>
                <p>NAAC accreditation is a recognition of the quality and standards of education provided by an institution.
                It helps institutions identify their strengths and areas for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
