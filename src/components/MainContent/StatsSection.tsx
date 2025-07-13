import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Building2, GraduationCap } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "52 LPA",
      label: "Highest Package (2024-25)",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "99.83%",
      label: "Placement Rate",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "100+",
      label: "Recruiting Companies",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "5000+",
      label: "Alumni Network",
    },
  ];

  return (
    <div className="py-16  bg-gradient-to-t from-[#C6B8FF] to-[#B8F3FF]  dark:from-[#0E1428] dark:to-[#27193f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-black/30 backdrop-blur-lg rounded-xl border border-[#00BFFF]/20"
            >
              <div className="text-[#FFD700] mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-[#00BFFF]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};