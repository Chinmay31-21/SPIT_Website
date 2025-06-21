import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Rocket } from 'lucide-react';

export const StudentsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b (from-[#02365E] to-[#30036B])">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center"
        >
          Student Life at SPIT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Academic Excellence",
              description: "Access to cutting-edge resources and expert faculty guidance"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Vibrant Community",
              description: "Join diverse clubs and participate in cultural events"
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Leadership",
              description: "Develop leadership skills through various initiatives"
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Innovation",
              description: "State-of-the-art facilities for research and development"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl border border-[#00BFFF]/20 p-6 hover:border-[#00BFFF]/40 transition-all"
            >
              <div className="text-[#FFD700] mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="aspect-video rounded-xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
              alt="Campus Life"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-4">Experience Campus Life</h3>
            <p className="dark:text-white/100 mb-6 light:text-black/90">
              At SPIT, we believe in holistic development. Our campus buzzes with activities, 
              from technical workshops to cultural festivals, providing students with countless 
              opportunities to learn, grow, and create lasting memories.
            </p>
            <button className="bg-[#00BFFF]/20 text-[#00BFFF] px-6 py-3 rounded-lg border border-[#00BFFF]/30 hover:bg-[#00BFFF]/30 transition-colors w-fit">
              Explore Student Activities
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};