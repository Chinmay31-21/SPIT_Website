import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Infrastructure } from './Infrastructure';
import { GoverningBody } from './GoverningBody';
import { Achievements } from './Achievements';
import { CampusLife } from './CampusLife';
import { ContactUs } from './ContactUs';

const AboutLayout = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/about', title: 'Overview', exact: true },
    { path: '/about/infrastructure', title: 'Infrastructure' },
    { path: '/about/governing-body', title: 'Governing Body' },
    { path: '/about/achievements', title: 'Achievements' },
    { path: '/about/campus-life', title: 'Campus Life' },
    { path: '/about/contact', title: 'Contact Us' }
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8 text-center"
        >
          About SPIT
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-4 sticky top-8">
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive(item.path, item.exact)
                            ? 'bg-[#00BFFF]/20 text-[#00BFFF] border-l-4 border-[#00BFFF]'
                            : 'text-white hover:bg-[#00BFFF]/10 hover:text-[#00BFFF]'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-8">
              <Routes>
                <Route index element={<AboutOverview />} />
                <Route path="infrastructure" element={<Infrastructure />} />
                <Route path="governing-body" element={<GoverningBody />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="campus-life" element={<CampusLife />} />
                <Route path="contact" element={<ContactUs />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#FFD700] mb-4">About SPIT</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] mx-auto mb-6"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="space-y-6">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
            alt="SPIT Campus"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="text-white/90 leading-relaxed space-y-4">
          <p>
            Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology (SPIT) is an autonomous, 
            unaided engineering institute affiliated with the University of Mumbai. Originally 
            established in 1995 as part of Sardar Patel College of Engineering, it gained 
            independence as SPIT in 2005.
          </p>
          <p>
            The institute is located in the heart of Mumbai on a lush 47-acre campus in Andheri (West). 
            This educational complex is also home to prestigious institutions such as Bhavan's College, 
            Sardar Patel College of Engineering, S.P. Jain Institute of Management and Research, 
            and A.H. Wadia High School.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-black/50 rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Vision & Mission</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold text-[#00BFFF] mb-3">Vision</h4>
          <p className="text-white/80 leading-relaxed">
            To be a leading technical institution constantly pursuing excellence to develop 
            holistic contributors for the society.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-[#00BFFF] mb-3">Mission</h4>
          <ul className="text-white/80 space-y-2">
            <li>• Provide conducive academic and research environment</li>
            <li>• Collaborate with renowned industry and institutions</li>
            <li>• Leverage alumni strength for mentoring</li>
            <li>• Nurture values with social responsibility</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Academic Excellence",
          description: "NAAC A+ grade with CGPA 3.68, ensuring highest quality education",
          icon: "🎓"
        },
        {
          title: "Industry Connect",
          description: "Strong partnerships with 200+ companies for placements and internships",
          icon: "🏢"
        },
        {
          title: "Research Focus",
          description: "500+ research papers published with focus on innovation and technology",
          icon: "🔬"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-black/50 rounded-lg p-6 text-center"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
          <p className="text-white/70">{item.description}</p>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12">
      <p className="text-white/80 leading-relaxed max-w-4xl mx-auto">
        With a strong emphasis on innovation, sustainability, and ethical values, SPIT prepares 
        students to become industry-ready professionals and responsible global citizens. Its close 
        ties with industry and a culture of continuous learning contribute to its reputation as one 
        of the premier engineering institutes in Maharashtra.
      </p>
    </div>
  </motion.div>
);

export const About = AboutLayout;