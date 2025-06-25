import React from 'react';
import { motion } from 'framer-motion';
import { Building, Wifi, Car, Coffee, Heart, BookOpen } from 'lucide-react';

export const Infrastructure = () => {
  const facilities = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Academic Buildings",
      description: "Modern classrooms with smart boards and audio-visual equipment",
      features: ["50+ Classrooms", "Smart Boards", "AC Facilities", "Wi-Fi Enabled"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Laboratories",
      description: "State-of-the-art labs for all engineering disciplines",
      features: ["Computer Labs", "Electronics Labs", "Mechanical Workshop", "Research Labs"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "High-speed internet and modern computing facilities",
      features: ["1 Gbps Internet", "Campus-wide Wi-Fi", "Cloud Services", "Digital(DSpace)Library"]
      
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Convenient transport facilities for students and staff",
      features: ["Bus Service", "Parking Facilities", "Metro Connectivity", "Shuttle Service"]
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cafeteria & Recreation",
      description: "Modern dining and recreational facilities",
      features: ["Multi-cuisine Cafeteria", "Recreation Center", "Sports Complex", "Student Lounge"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Medical facilities and wellness programs",
      features: ["Medical Center", "First Aid", "Health Checkups", "Counseling Services"]
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Infrastructure</h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          SPIT boasts world-class infrastructure designed to provide an optimal learning environment 
          with modern facilities that support academic excellence and student development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6 hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="text-[#FFD700] mb-4">{facility.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
            <p className="text-white/70 mb-4">{facility.description}</p>
            <ul className="space-y-2">
              {facility.features.map((feature, i) => (
                <li key={i} className="text-white/60 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Campus Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">Campus Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400"
          ].map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Campus facility ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};