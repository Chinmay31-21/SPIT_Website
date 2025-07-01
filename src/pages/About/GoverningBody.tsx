import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Building2 } from 'lucide-react';

export const GoverningBody = () => {
  const members = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chairman",
      qualification: "Ph.D. in Management",
      experience: "25+ years in Education Administration"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice-Chairman",
      qualification: "M.Tech, Ph.D.",
      experience: "20+ years in Academic Leadership"
    },
    {
      name: "Mr. Amit Patel",
      position: "Secretary",
      qualification: "MBA, CA",
      experience: "15+ years in Finance & Administration"
    },
    {
      name: "Dr. Priya Mehta",
      position: "Academic Member",
      qualification: "Ph.D. in Computer Science",
      experience: "18+ years in Research & Teaching"
    },
    {
      name: "Mr. Ravi Singh",
      position: "Industry Representative",
      qualification: "B.Tech, MBA",
      experience: "22+ years in IT Industry"
    },
    {
      name: "Dr. Kavita Joshi",
      position: "External Expert",
      qualification: "Ph.D. in Engineering",
      experience: "20+ years in Higher Education"
    }
  ];

  const committees = [
    {
      name: "Academic Committee",
      purpose: "Oversees curriculum development and academic policies",
      members: 8
    },
    {
      name: "Finance Committee",
      purpose: "Manages financial planning and budget allocation",
      members: 6
    },
    {
      name: "Infrastructure Committee",
      purpose: "Plans and monitors infrastructure development",
      members: 7
    },
    {
      name: "Student Welfare Committee",
      purpose: "Addresses student concerns and welfare activities",
      members: 9
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Governing Body</h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          Our governing body comprises distinguished academicians, industry experts, and administrators 
          who provide strategic direction and ensure the highest standards of education and governance.
        </p>
      </motion.div>

      {/* Governing Body Members */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Board Members
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <div className="aspect-square bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white/50" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-[#00BFFF] font-semibold mb-2">{member.position}</p>
              <p className="text-white/70 text-sm mb-2">{member.qualification}</p>
              <p className="text-white/60 text-sm">{member.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Committees */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          Committees
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-2">{committee.name}</h4>
              <p className="text-white/70 mb-3">{committee.purpose}</p>
              <div className="flex items-center gap-2 text-[#00BFFF]">
                <Award className="w-4 h-4" />
                <span>{committee.members} Members</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Governance Structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Governance Structure</h3>
        <div className="space-y-4 text-white/80">
          <p>
            The governing body operates under the guidelines of Bharatiya Vidya Bhavan and follows 
            the regulations set by AICTE and the University of Mumbai.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
              Regular board meetings held quarterly
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
              Annual strategic planning sessions
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
              Transparent decision-making processes
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
              Regular performance reviews and audits
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};