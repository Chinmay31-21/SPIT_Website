import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, MapPin, Search } from 'lucide-react';
import { CircularVisualization } from '../AlumniNetwork/CircularVisualization';
import { AlumniModal } from '../AlumniNetwork/AlumniModal';
import { AnimatePresence } from 'framer-motion';

interface AlumniMember {
  id: string;
  name: string;
  company: string;
  position: string;
  graduationYear: number;
  department: string;
  location: string;
  avatar: string;
  email?: string;
  linkedin?: string;
  bio: string;
  achievements: string[];
  skills: string[];
  industry: string;
  isActive: boolean;
}

export const AlumniNetworkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniMember | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredAlumni, setHoveredAlumni] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  // Enhanced alumni data with more realistic information
  const alumniData: AlumniMember[] = [
    {
      id: 'a1',
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      isActive: true,
      position: 'Senior Software Engineer',
      company: 'Google',
      department: 'Computer Engineering',
      graduationYear: 2020,
      location: 'Mountain View, CA',
      email: 'priya.sharma@gmail.com',
      linkedin: 'https://linkedin.com/in/priyasharma',
      bio: 'Passionate about scalable systems and machine learning. Leading the development of next-generation search algorithms at Google.',
      achievements: ['Published 3 IEEE papers on ML algorithms', 'Google Excellence Award 2023', 'Speaker at Google I/O 2023'],
      skills: ['Python', 'TensorFlow', 'Kubernetes', 'React', 'Go'],
      industry: 'Technology'
    },
    {
      id: 'a2',
      name: 'Rahul Mehta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      isActive: false,
      position: 'VP of Engineering',
      company: 'Microsoft',
      department: 'Information Technology',
      graduationYear: 2018,
      location: 'Seattle, WA',
      email: 'rahul.mehta@microsoft.com',
      linkedin: 'https://linkedin.com/in/rahulmehta',
      bio: 'Leading cloud infrastructure teams at Microsoft Azure. Expert in distributed systems and DevOps practices.',
      achievements: ['Microsoft Technical Fellow', 'Led Azure Kubernetes Service team', 'Patent holder for container orchestration'],
      skills: ['Azure', 'Kubernetes', 'C#', 'Docker', 'Terraform'],
      industry: 'Technology'
    },
    {
      id: 'a3',
      name: 'Anita Desai',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      isActive: true,
      position: 'Investment Director',
      company: 'Goldman Sachs',
      department: 'Electronics & Telecom',
      graduationYear: 2019,
      location: 'New York, NY',
      email: 'anita.desai@gs.com',
      linkedin: 'https://linkedin.com/in/anitadesai',
      bio: 'Specializing in fintech investments and quantitative trading strategies. Bridging technology and finance.',
      achievements: ['Top performer 2022-2023', 'Led $50M+ investment rounds', 'CFA Charter holder'],
      skills: ['Python', 'R', 'Financial Modeling', 'Machine Learning', 'Blockchain'],
      industry: 'Finance'
    },
    {
      id: 'a4',
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      isActive: false,
      position: 'Principal Consultant',
      company: 'McKinsey & Company',
      department: 'Computer Engineering',
      graduationYear: 2017,
      location: 'Mumbai, India',
      email: 'vikram.singh@mckinsey.com',
      linkedin: 'https://linkedin.com/in/vikramsingh',
      bio: 'Digital transformation consultant helping Fortune 500 companies modernize their technology stack.',
      achievements: ['McKinsey Digital Expert', 'Led 20+ transformation projects', 'Published in Harvard Business Review'],
      skills: ['Strategy', 'Digital Transformation', 'Agile', 'Cloud Architecture', 'Data Analytics'],
      industry: 'Consulting'
    },
    {
      id: 'a5',
      name: 'Kavya Patel',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      isActive: true,
      position: 'Founder & CEO',
      company: 'HealthTech Innovations',
      department: 'Information Technology',
      graduationYear: 2021,
      location: 'Bangalore, India',
      email: 'kavya@healthtech.in',
      linkedin: 'https://linkedin.com/in/kavyapatel',
      bio: 'Building AI-powered healthcare solutions to make quality healthcare accessible to everyone.',
      achievements: ['Forbes 30 Under 30', 'Raised $5M Series A', 'Winner of TechCrunch Disrupt'],
      skills: ['AI/ML', 'Healthcare', 'Product Management', 'Fundraising', 'Team Building'],
      industry: 'Startup'
    },
    {
      id: 'a6',
      name: 'Arjun Kumar',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      isActive: true,
      position: 'Research Scientist',
      company: 'Meta AI',
      department: 'Computer Engineering',
      graduationYear: 2019,
      location: 'Menlo Park, CA',
      email: 'arjun.kumar@meta.com',
      linkedin: 'https://linkedin.com/in/arjunkumar',
      bio: 'Researching computer vision and natural language processing at Meta AI. PhD from Stanford.',
      achievements: ['10+ publications in top-tier conferences', 'CVPR Best Paper Award', 'Meta AI Excellence Award'],
      skills: ['PyTorch', 'Computer Vision', 'NLP', 'Research', 'Deep Learning'],
      industry: 'Technology'
    },
    {
      id: 'a7',
      name: 'Sneha Reddy',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      isActive: false,
      position: 'Product Manager',
      company: 'Tesla',
      department: 'Electronics & Telecom',
      graduationYear: 2018,
      location: 'Austin, TX',
      email: 'sneha.reddy@tesla.com',
      linkedin: 'https://linkedin.com/in/snehareddy',
      bio: 'Leading product development for Tesla\'s autonomous driving features. Passionate about sustainable transportation.',
      achievements: ['Led Autopilot v11 launch', 'Tesla Innovation Award', 'Patent for sensor fusion algorithms'],
      skills: ['Product Management', 'Autonomous Systems', 'Hardware', 'Software Integration', 'Agile'],
      industry: 'Technology'
    },
    {
      id: 'a8',
      name: 'Rohan Gupta',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      isActive: true,
      position: 'Data Science Manager',
      company: 'Netflix',
      department: 'Information Technology',
      graduationYear: 2020,
      location: 'Los Gatos, CA',
      email: 'rohan.gupta@netflix.com',
      linkedin: 'https://linkedin.com/in/rohangupta',
      bio: 'Building recommendation systems that help millions discover content they love. Expert in large-scale ML systems.',
      achievements: ['Improved recommendation CTR by 15%', 'Netflix Tech Talk speaker', 'Mentored 10+ data scientists'],
      skills: ['Machine Learning', 'Big Data', 'Spark', 'Python', 'A/B Testing'],
      industry: 'Technology'
    }
  ];

  // Statistics data
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Global Alumni",
      description: "Spread across 50+ countries"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "500+",
      label: "Top Companies",
      description: "Fortune 500 & Unicorn Startups"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "85%",
      label: "Leadership Roles",
      description: "In senior positions globally"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "₹25L+",
      label: "Average Package",
      description: "First job after graduation"
    }
  ];

  const handleAlumniSelect = (alumni: AlumniMember) => {
    setSelectedAlumni(alumni);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1]/10 to-[#FFD700]/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169E1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#4169E1] bg-clip-text text-transparent mb-6"
          >
            Our Global Alumni Network
          </motion.h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            SPIT graduates are making their mark across the globe, leading innovation at the world's most prestigious companies and driving technological advancement.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search alumni by name, company, or industry..."
              className="w-full pl-12 pr-4 py-4 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#4169E1] backdrop-blur-lg"
            />
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#4169E1]/30 rounded-xl p-6 text-center hover:border-[#4169E1]/50 transition-all group"
            >
              <div className="text-[#FFD700] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#4169E1] font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Circular Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="bg-black/20 backdrop-blur-lg border border-[#4169E1]/30 rounded-2xl p-8">
            <CircularVisualization
              alumni={alumniData}
              onAlumniSelect={handleAlumniSelect}
              searchQuery={searchQuery}
            />
          </div>
        </motion.div>

        {/* Company Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Our Alumni Work At
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Meta', 'Tesla', 'Netflix', 'Goldman Sachs', 'McKinsey', 'Amazon'].map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-white font-semibold text-lg transition-all cursor-pointer hover:text-[#4169E1]"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-black/30 backdrop-blur-lg border border-[#4169E1]/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Alumni Network
            </h3>
            <p className="text-white/80 mb-6">
              Connect with fellow SPIT graduates, share opportunities, and contribute to the growth of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#4169E1] text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Register as Alumni
              </button>
              <button className="px-6 py-3 bg-[#4169E1]/20 text-[#4169E1] rounded-lg border border-[#4169E1]/30 font-semibold hover:bg-[#4169E1]/30 transition-colors">
                Explore Network
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Alumni Modal */}
      <AnimatePresence>
        {selectedAlumni && (
          <AlumniModal
            alumni={selectedAlumni}
            onClose={() => setSelectedAlumni(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};