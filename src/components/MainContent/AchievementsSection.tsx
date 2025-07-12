import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "NAAC A+ Grade",
      description: "Highest accreditation for academic excellence"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "NIRF Ranking",
      description: "Among top 50 engineering institutes in India"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Research Excellence",
      description: "100+ research papers published annually"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Strong ties with leading tech companies"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-tl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center"
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl border border-[#00BFFF]/20 p-6"
            >
              <div className="text-[#FFD700] mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-white/70">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
              title: "Innovation Hub",
              description: "State-of-the-art facilities fostering innovation"
            },
            {
              image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
              title: "Research Center",
              description: "Cutting-edge research in emerging technologies"
            },
            {
              image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
              title: "Global Recognition",
              description: "International collaborations and partnerships"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};