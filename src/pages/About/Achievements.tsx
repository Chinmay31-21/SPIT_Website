import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal, Target, TrendingUp } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "NAAC A+ Grade",
      description: "Achieved highest accreditation grade with CGPA 3.68",
      year: "2023"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "NIRF Ranking #42",
      description: "Among top 50 engineering institutes in India",
      year: "2023"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "NBA Accreditation",
      description: "All major programs accredited by NBA",
      year: "2022-2025"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "ARIIA Band Excellent",
      description: "Excellence in innovation and research",
      year: "2023"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "95% Placement Rate",
      description: "Consistent high placement record",
      year: "2023"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "42 LPA Highest Package",
      description: "Record-breaking placement offers",
      year: "2023"
    }
  ];

  const awards = [
    {
      category: "Academic Excellence",
      awards: [
        "Best Engineering College Award - Maharashtra",
        "Excellence in Technical Education",
        "Outstanding Academic Performance",
        "Innovation in Curriculum Design"
      ]
    },
    {
      category: "Research & Innovation",
      awards: [
        "Best Research Institute Award",
        "Innovation Excellence Award",
        "Outstanding Patent Filing",
        "Technology Transfer Excellence"
      ]
    },
    {
      category: "Industry Recognition",
      awards: [
        "Industry-Academia Collaboration Award",
        "Best Placement Record",
        "Corporate Partnership Excellence",
        "Alumni Achievement Recognition"
      ]
    },
    {
      category: "Social Impact",
      awards: [
        "Community Service Excellence",
        "Environmental Sustainability Award",
        "Social Responsibility Recognition",
        "Rural Development Contribution"
      ]
    }
  ];

  const milestones = [
    { year: "1995", event: "Establishment of SPIT" },
    { year: "2005", event: "Gained Autonomous Status" },
    { year: "2010", event: "First NAAC Accreditation" },
    { year: "2015", event: "NBA Accreditation for all programs" },
    { year: "2020", event: "NAAC A+ Grade Achievement" },
    { year: "2023", event: "NIRF Ranking #42" }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Achievements</h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          SPIT has consistently achieved excellence in academics, research, and industry collaboration, 
          earning recognition from prestigious national and international bodies.
        </p>
      </motion.div>

      {/* Major Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6 text-center hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="text-[#FFD700] mb-4 flex justify-center">{achievement.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-white/70 mb-3">{achievement.description}</p>
            <span className="text-[#00BFFF] font-semibold">{achievement.year}</span>
          </motion.div>
        ))}
      </div>

      {/* Awards by Category */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">Awards & Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">{category.category}</h4>
              <ul className="space-y-3">
                {category.awards.map((award, i) => (
                  <li key={i} className="text-white/70 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FFD700]" />
                    {award}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">Milestone Timeline</h3>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#00BFFF]/20 rounded-full flex items-center justify-center">
                <span className="text-[#00BFFF] font-bold">{milestone.year}</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "28", label: "Years of Excellence" },
          { number: "10000+", label: "Alumni Network" },
          { number: "200+", label: "Industry Partners" },
          { number: "500+", label: "Research Papers" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.number}</div>
            <div className="text-white/70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};