import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Music, Trophy, BookOpen, Heart } from 'lucide-react';

export const CampusLife = () => {
  const activities = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Clubs",
      description: "Join various technical and cultural clubs",
      count: "25+ Active Clubs"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Festivals",
      description: "Annual technical and cultural festivals",
      count: "50+ Events/Year"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Cultural Activities",
      description: "Music, dance, drama, and art competitions",
      count: "Year-round Programs"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports & Recreation",
      description: "Indoor and outdoor sports facilities",
      count: "15+ Sports"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Societies",
      description: "Professional development and learning",
      count: "10+ Societies"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Social Service",
      description: "Community outreach and volunteer programs",
      count: "Regular Initiatives"
    }
  ];

  const clubs = [
    {
      name: "IEEE Student Branch",
      category: "Technical",
      description: "Professional development in electrical and electronics engineering"
    },
    {
      name: "Computer Society of India",
      category: "Technical",
      description: "Advancing computer science and IT knowledge"
    },
    {
      name: "Robotics Club",
      category: "Technical",
      description: "Building and programming robots for competitions"
    },
    {
      name: "Cultural Committee",
      category: "Cultural",
      description: "Organizing cultural events and festivals"
    },
    {
      name: "Photography Club",
      category: "Creative",
      description: "Capturing campus life and events"
    },
    {
      name: "Debate Society",
      category: "Literary",
      description: "Developing public speaking and debate skills"
    },
    {
      name: "Environmental Club",
      category: "Social",
      description: "Promoting environmental awareness and sustainability"
    },
    {
      name: "Entrepreneurship Cell",
      category: "Business",
      description: "Fostering startup culture and innovation"
    }
  ];

  const events = [
    {
      name: "Technovanza",
      type: "Technical Festival",
      description: "Annual technical symposium with competitions and workshops",
      duration: "3 Days"
    },
    {
      name: "Culturals",
      type: "Cultural Festival",
      description: "Celebration of arts, music, and cultural diversity",
      duration: "2 Days"
    },
    {
      name: "Sports Week",
      type: "Sports Event",
      description: "Inter-department sports competitions",
      duration: "1 Week"
    },
    {
      name: "Industry Connect",
      type: "Professional",
      description: "Industry experts sharing insights and opportunities",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Campus Life</h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          Experience a vibrant campus life at SPIT with diverse opportunities for personal growth, 
          skill development, and lifelong friendships through various clubs, events, and activities.
        </p>
      </motion.div>

      {/* Activities Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6 text-center hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="text-[#FFD700] mb-4 flex justify-center">{activity.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
            <p className="text-white/70 mb-3">{activity.description}</p>
            <span className="text-[#00BFFF] font-semibold">{activity.count}</span>
          </motion.div>
        ))}
      </div>

      {/* Student Clubs */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Student Clubs & Societies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">{club.name}</h4>
                <span className="text-xs bg-[#00BFFF]/20 text-[#00BFFF] px-2 py-1 rounded">
                  {club.category}
                </span>
              </div>
              <p className="text-white/70">{club.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Major Events */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Major Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-white">{event.name}</h4>
                <span className="text-xs bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded">
                  {event.duration}
                </span>
              </div>
              <p className="text-[#00BFFF] font-semibold mb-2">{event.type}</p>
              <p className="text-white/70">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Campus Facilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Campus Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Recreation</h4>
            <ul className="space-y-2 text-white/70">
              <li>• Student Recreation Center</li>
              <li>• Gaming Zone</li>
              <li>• Music Room</li>
              <li>• Art Studio</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Sports</h4>
            <ul className="space-y-2 text-white/70">
              <li>• Basketball Court</li>
              <li>• Cricket Ground</li>
              <li>• Table Tennis</li>
              <li>• Badminton Court</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Amenities</h4>
            <ul className="space-y-2 text-white/70">
              <li>• Multi-cuisine Cafeteria</li>
              <li>• Student Lounge</li>
              <li>• Wi-Fi Campus</li>
              <li>• Medical Center</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Campus Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">Campus Life Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
            "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400"
          ].map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Campus life ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};