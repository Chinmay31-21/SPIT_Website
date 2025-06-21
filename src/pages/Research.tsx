import React from 'react';

export const Research = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b (from-[#02365E] to-[#30036B]) py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8">
          Research at SPIT
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Research Areas */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Research Areas</h2>
            <ul className="space-y-2 text-white/80">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Internet of Things (IoT)</li>
              <li>Cybersecurity</li>
              <li>Cloud Computing</li>
              <li>Data Analytics</li>
              <li>Blockchain Technology</li>
            </ul>
          </div>

          {/* Funded Projects */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Funded Projects</h2>
            <ul className="space-y-2 text-white/80">
              <li>Smart City Development</li>
              <li>Healthcare Analytics</li>
              <li>Renewable Energy Solutions</li>
              <li>Educational Technology</li>
              <li>Environmental Monitoring</li>
            </ul>
          </div>

          {/* Research Facilities */}
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Research Facilities</h2>
            <ul className="space-y-2 text-white/80">
              <li>Advanced Computing Lab</li>
              <li>IoT Research Center</li>
              <li>Data Science Lab</li>
              <li>Robotics Workshop</li>
              <li>Innovation Hub</li>
            </ul>
          </div>
        </div>

        {/* Publications */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Recent Publications</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Research Paper Title {i}
                </h3>
                <p className="text-white/70 mb-4">
                  Authors: John Doe, Jane Smith, et al.
                </p>
                <p className="text-white/60">
                  Published in International Journal of Technology, 2024
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};