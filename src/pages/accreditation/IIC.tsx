import React from 'react';
import { Lightbulb, Target, Users, Award, Rocket } from 'lucide-react';

export const IIC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8 text-center">
          Institution's Innovation Council
        </h1>

        {/* Vision Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Lightbulb className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-[#00BFFF]">Fostering Innovation and Entrepreneurship</p>
            </div>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Key Objectives",
              items: [
                "Promote Innovation Culture",
                "Support Start-up Ecosystem",
                "Develop Problem-solving Mindset",
                "Industry Collaboration"
              ]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Activities",
              items: [
                "Innovation Workshops",
                "Ideation Sessions",
                "Entrepreneurship Seminars",
                "Industry Visits"
              ]
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Achievements",
              items: [
                "20+ Start-ups Incubated",
                "50+ Patents Filed",
                "100+ Innovation Projects",
                "Multiple National Awards"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-[#FFD700]">{section.icon}</div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-3">
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

        {/* Programs Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            Innovation Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Startup Incubation",
                description: "Comprehensive support for student startups including mentorship, funding, and infrastructure.",
                features: ["24/7 Workspace", "Mentor Network", "Seed Funding", "Legal Support"]
              },
              {
                title: "Innovation Lab",
                description: "State-of-the-art facility for prototyping and experimentation.",
                features: ["3D Printers", "IoT Lab", "AI/ML Tools", "Testing Equipment"]
              }
            ].map((program, index) => (
              <div key={index} className="p-4 bg-black/50 rounded-lg">
                <h3 className="text-xl font-bold text-[#00BFFF] mb-2">{program.title}</h3>
                <p className="text-white/80 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="text-white/60 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Contact IIC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Get in Touch</h3>
              <div className="space-y-2 text-white/80">
                <p>IIC President: Dr. Robert Johnson</p>
                <p>Email: iic@spit.ac.in</p>
                <p>Phone: +91-XX-XXXXXXXX</p>
                <p>Location: Innovation Hub, SPIT Campus</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  'Submit Innovation Idea',
                  'Book Lab Facilities',
                  'Mentor Connect',
                  'Upcoming Events'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
