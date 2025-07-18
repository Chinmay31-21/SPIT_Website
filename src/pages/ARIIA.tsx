import React from 'react';
import { Award, Target, BarChart2, Users, Rocket } from 'lucide-react';

export const ARIIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] mx-auto px-4 py-8 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          ARIIA Rankings
        </h1>

        {/* Ranking Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Band 'Excellent'</h2>
              <p className="text-[#00BFFF]">ARIIA Rankings 2023</p>
            </div>
          </div>
        </div>

        {/* Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Programs & Activities",
              score: "85/100",
              metrics: [
                "Innovation Clubs",
                "Annual Innovation Contests",
                "Entrepreneurship Programs",
                "Learning Programs"
              ]
            },
            {
              icon: <BarChart2 className="w-6 h-6" />,
              title: "Infrastructure & Facilities",
              score: "90/100",
              metrics: [
                "Innovation Labs",
                "Incubation Centers",
                "Research Facilities",
                "Industry Partnerships"
              ]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Startup & Innovation Output",
              score: "88/100",
              metrics: [
                "Startups Incubated",
                "Patents Filed",
                "Technology Transfers",
                "Industry Collaborations"
              ]
            }
          ].map((param, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-[#FFD700]">{param.icon}</div>
                <h2 className="text-xl font-bold text-white">{param.title}</h2>
              </div>
              <div className="text-[#00BFFF] text-2xl font-bold mb-4">{param.score}</div>
              <ul className="space-y-2">
                {param.metrics.map((metric, i) => (
                  <li key={i} className="text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Innovation Highlights */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            Innovation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Student Innovations",
                items: [
                  "50+ Innovation Projects",
                  "20+ Patents Filed",
                  "10+ Startups Launched",
                  "Multiple National Awards"
                ]
              },
              {
                title: "Industry Connect",
                items: [
                  "30+ Industry Partnerships",
                  "Regular Industry Workshops",
                  "Technology Transfer Programs",
                  "Industry Mentorship"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="p-4 bg-black/50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00BFFF] mb-4">{section.title}</h3>
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
        </div>

        {/* Resources Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Resources & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Important Documents</h3>
              <ul className="space-y-3">
                {[
                  'ARIIA Report 2023',
                  'Innovation Policy',
                  'Success Stories',
                  'Annual Innovation Report'
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
                <p>ARIIA Coordinator: Dr. Sarah Wilson</p>
                <p>Email: ariia@spit.ac.in</p>
                <p>Phone: +91-XX-XXXXXXXX</p>
                <p>Location: Innovation Center, SPIT Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
