import React from 'react';
import { Building2, Users, Trophy, TrendingUp } from 'lucide-react';

export const Placements = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          Training & Placement Cell
        </h1>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Building2 className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-white/60">Companies Visited</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Users className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/60">Placement Rate</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Trophy className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">42 LPA</div>
            <div className="text-white/60">Highest Package</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <TrendingUp className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">12 LPA</div>
            <div className="text-white/60">Average Package</div>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Top Recruiters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-4 aspect-square flex items-center justify-center">
                <div className="text-white font-semibold">Company {i}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Placement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Placement Talk",
                description: "Companies present their organization structure, work culture, and job profiles."
              },
              {
                title: "Online Assessment",
                description: "Technical and aptitude tests to evaluate candidates' skills."
              },
              {
                title: "Technical Interviews",
                description: "In-depth evaluation of technical knowledge and problem-solving abilities."
              },
              {
                title: "HR Interview",
                description: "Discussion about candidate's background, goals, and cultural fit."
              },
              {
                title: "Offer Roll-out",
                description: "Selected candidates receive job offers with detailed terms."
              },
              {
                title: "Post-Placement Support",
                description: "Guidance for documentation and joining formalities."
              }
            ].map((step, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
                <div className="text-[#FFD700] font-bold text-xl mb-3">{step.title}</div>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact TPO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white mb-2">Training & Placement Officer</p>
              <p className="text-white/70">Email: tpo@spit.ac.in</p>
              <p className="text-white/70">Phone: +91-XX-XXXXXXXX</p>
            </div>
            <div>
              <p className="text-white mb-2">Placement Coordinators</p>
              <p className="text-white/70">Student Coordinator: coordinator@spit.ac.in</p>
              <p className="text-white/70">Faculty Coordinator: faculty.tpo@spit.ac.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};