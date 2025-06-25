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
      name: 'Samkit Shah',
      avatar: '/assets/Samkit.jpeg',
      isActive: true,
      position: 'Software Engineer',
      company: 'Amazon (USA)',
      department: 'Computer Engineering (2023)',
      graduationYear: 2023,
      location: 'Jersey City, New Jersey, United States ',
      email: '',
      linkedin: 'https://www.linkedin.com/in/samkitshah18/',
      bio: 'Passionate software engineer with a focus on machine learning and cloud computing. Currently working at Amazon, building scalable AI solutions for e-commerce platforms. Experienced in developing and deploying machine learning models in production environments.',
      achievements: ['Meta Intern', 'Amazon SDE', 'Google Summer of Code', 'AWS Certified Solutions Architect - Associate'],
      skills: ['Python', 'C++', 'Web Development', 'Flutter', 'C (Programming Language)'],
      industry: 'Technology'
    },
    {
      id: 'a2',
      name: 'Sarah Gawde',
      avatar: '/assets/Sarah.jpeg',
      isActive: true,
      position: 'Senior Software Engineer',
      company: 'Amazon (USA)',
      department: 'Computer Engineering (2021)',
      graduationYear: 2021,
      location: 'Urbana, Illinois, United States',
      email: '',
      linkedin: 'https://www.linkedin.com/in/sarah-gawde-7aa155176/',
      bio: 'A seasoned software engineer with a strong background in cloud computing and container orchestration. Currently working at Amazon, leading the development of scalable cloud solutions. Previously worked at Microsoft, where I contributed to the Azure Kubernetes Service team.',
      achievements: ['Ex-Microsoft SDE', 'AI/ML + Robotics Enthusiast ', 'AWS Certified Solutions Architect', 'Winning team at Microsoft E+D India Summer FHL 2021', 'Psychological Distress Detection, Classification and Assistance using AI'],
      skills: ['Python', 'C++', 'Web Development', 'Bootstrap', 'JavaScript', 'C (Programming Language)' , 'ReactJS', 'Node.js' ,'AngularJS' , 'Machine Learning', 'AI/ML', 'Cloud Computing', 'Microsoft Power BI'],
      industry: 'Technology'
    },
    {
      id: 'a3',
      name: 'Rahul Chari',
      avatar: '/assets/Rahul.jpg',
      isActive: true,
      position: 'CoFounder & CTO',
      company: 'PhonePe',
      department: 'Computer Engineering (1999)',
      graduationYear: 1999,
      location: 'Bengaluru, Karnataka, India ',
      email: 'rahul.chari@phonepe.com',
      linkedin: 'https://linkedin.com/in/rahulchari',
      bio: 'A visionary leader in the fintech space, co-founding PhonePe and driving its technological innovations. Previously led the technology team at Flipkart, building one of India\'s largest e-commerce platforms. Passionate about leveraging technology to transform financial services.',
      achievements: ['PhonePe : Highest No. of UPI Transactions in India', 'NPCI Merhant Award', 'IAMAI Award for Best Fintech App' , 'Launched PhonePe across in India, UAE, Singapore, and Indonesia', 'Flipkart : Led the technology team that built the largest e-commerce platform in India' , 'Outstanding Alumini Award from SPIT'],
      skills: ['Distributed Systems', 'Cloud Computing', 'Financial Modeling', 'Machine Learning', 'Blockchain', 'Scalability', 'Hadoop', 'C++', 'Java', 'Python' , 'JavaScript','Unix/Linux','Product Management','E-Commerce'],
      industry: 'Startup'
    },
    {
      id: 'a4',
      name: 'Sameer Nigam',
      avatar: '/assets/Sameer.jpg',
      isActive: true,
      position: 'CoFounder & CEO',
      company: 'PhonePe',
      department: 'Computer Engineering (1999)',
      graduationYear: 1999,
      location: 'Bengaluru, Karnataka, India ',
      email: 'sameer.nigam@phonepe.com',
      linkedin: 'https://linkedin.com/in/sanigam',
      bio: 'An experienced entrepreneur with a passion for building products that solve real-world problems. Currently leading PhonePe, one of India\'s largest digital payment platforms. Previously co-founded and led the technology team at Flipkart.',
      achievements: ['PhonePe : Highest No. of UPI Transactions in India', 'NPCI Merhant Award', 'IAMAI Award for Best Fintech App' , 'Launched PhonePe across in India, UAE, Singapore, and Indonesia'],
      skills: ['Distributed Systems', 'Cloud Computing', 'Financial Modeling', 'Machine Learning', 'Blockchain', 'Scalability', 'Hadoop', 'C++', 'Java', 'Python' , 'JavaScript','Unix/Linux','Product Management','E-Commerce'],
      industry: 'Startup'
    },
    {
      id: 'a5',
      name: 'Abhishek Mane',
      avatar: '/assets/Abhishek.jpeg',
      isActive: true,
      position: 'Software Engineer',
      company: 'Meta, London',
      department: 'Information Technology',
      graduationYear: 2021,
      location: 'London, UK',
      email: 'abhishek.mane@meta.com',
      linkedin: 'https://www.linkedin.com/in/abhishek-mane747/',
      bio: ' B.Tech in IT from SPIT. Currently working as a Software Engineer at Meta in London, focusing on building scalable backend systems for social media applications. Passionate about AI and its applications in enhancing user experience.',
      achievements: ['Building Meta Next Generation Facebook Feature Framework (F3)', 'Working on Next-Gen architecture of Scribe', 'Winner of TechCrunch Disrupt'],
      skills: ['AI/ML', 'Python', 'Production Engineer', 'C++', 'Full Stack Development'],
      industry: 'Technology'
    },
    {
      id: 'a6',
      name: 'Shashi Seshadri',
      avatar: '/assets/Shashi.jpg',
      isActive: true,
      position: 'CoFounder, Director and CEO',
      company: 'Skewb Ltd.',
      department: 'Computer Engineering (1999)',
      graduationYear: 1999,
      location: 'Royal Leamington Spa, England, United Kingdom',
      email: 'shashi.seshadri@skewb.com',
      linkedin: 'https://linkedin.com/in/shashiseshadri',
      bio: 'Enabled via process & change transformation and digital solutions embedded within core operations. UK Energy and Water market covering the span of transmission, distribution and wholesale operations. Passionate about leveraging technology to drive efficiency and innovation in the energy sector.',
      achievements: ['ex-CEO Enzen(UK)', '200th Edition of Weekly Digital Skewber Newsletter', 'Skewb Ltd. - Leading Digital Transformation in Energy Sector'],
      skills: ['Business Analyst', 'Process Transformation', 'Digital Solutions', 'Research', 'Project Management'],
      industry: 'Startup'
    },
    {
      id: 'a7',
      name: 'Urshita Koshti',
      avatar: '/assets/Urshita.jpeg',
      isActive: true,
      position: 'Technology Analyst',
      company: 'Barclays, UK',
      department: 'Information Technology (2024)',
      graduationYear: 2024,
      location: 'Glasgow, Scotland, UK',
      email: 'urshita.koshti@barclays.com',
      linkedin: 'https://www.linkedin.com/in/urshita-koshti-818353218/',
      bio: 'Technology Analyst at Barclays, UK, specializing in data-driven solutions and financial technology. Passionate about leveraging technology to enhance banking experiences and drive innovation in the financial sector.',
      achievements: ['Technology Analyst'],
      skills: ['Product Management', 'Java', 'MySQL', 'C(Programming Language)', 'Python(Programming Language)'],
      industry: 'Finance'
    },
    {
      id: 'a8',
      name: 'Jash Jain',
      avatar: '/assets/Jash.jpeg',
      isActive: true,
      position: 'Software Engineer (SDE)',
      company: 'Amazon, Berlin',
      department: 'Computer Science (2023)',
      graduationYear: 2023,
      location: 'Berlin, Germany',
      email: 'jash.jain@amazon.com',
      linkedin: 'https://linkedin.com/in/jj211',
      bio: 'Software Engineer at Amazon, Berlin, focusing on building scalable and efficient systems for e-commerce platforms. Experienced in full-stack development and cloud technologies.',
      achievements: ['Enhanced SEO, integrated messaging, and analyzed user data for remarketing for WorkIndia', 'Built real-time gift recommendations, generating $36M in sales and boosting CTR by 135%. as SDE in Amazon'],
      skills: ['Machine Learning', 'Big Data', 'AWS', 'Python', 'Java', 'Full Stack Development'],
      industry: 'Technology'
    }
  ];

  // Statistics data
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "3000+",
      label: "Global Alumni",
      description: "Spread across 50+ countries"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "100+",
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
      value: "₹50L+",
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
            className="text-5xl font-bold bg-gradient-to-r from-[#ACBED8] to-[#FFFFFF] bg-clip-text text-transparent mb-6"
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
          className="relative mb-20"
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
            {['Google', 'Microsoft', 'Meta', 'Barclays', 'Skewb', 'Goldman Sachs', 'PhonePe', 'Amazon'].map((company) => (
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
              <button className="px-6 py-3 bg-gradient-to-r from-[#48CAE4] to-[#4169E1] text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Register as Alumni
              </button>
              <button className="px-6 py-3 bg-[#CAF0F8]/80 text-[#4169E1] rounded-lg border border-[#4169E1]/30 font-semibold hover:bg-[#023E8A]/80 hover:text-[#FFFFFF] transition-colors">
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