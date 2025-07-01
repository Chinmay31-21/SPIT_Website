import React from 'react';
import { FileText, Award, CheckCircle, BarChart2, Users } from 'lucide-react';

export const NAAC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          NAAC Accreditation
        </h1>

        {/* Status Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Grade A++</h2>
              <p className="text-[#00BFFF]">CGPA: 3.68 out of 4.00</p>
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
                'Quality Initiatives'
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
                { label: 'Student Satisfaction', value: '92%' },
                { label: 'Faculty with Ph.D', value: '75%' },
                { label: 'Research Publications', value: '500+' },
                { label: 'Placement Rate', value: '95%' }
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
            Internal Quality Assurance Cell (IQAC)
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
              <h3 className="text-xl text-white mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>IQAC Coordinator: Dr. John Doe</p>
                <p>Email: iqac@spit.ac.in</p>
                <p>Phone: +91-XX-XXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
