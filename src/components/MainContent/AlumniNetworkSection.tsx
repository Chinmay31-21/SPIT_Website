import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, MapPin } from 'lucide-react';

interface AlumniNode {
  id: string;
  name: string;
  company: string;
  position: string;
  image: string;
  angle: number;
  radius: number;
  companyLogo?: string;
}

export const AlumniNetworkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  // Alumni data with major tech companies
  const alumniNodes: AlumniNode[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      company: 'Google',
      position: 'Senior Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      angle: 0,
      radius: 180,
    },
    {
      id: '2',
      name: 'Rahul Mehta',
      company: 'Microsoft',
      position: 'Principal Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      angle: 45,
      radius: 220,
    },
    {
      id: '3',
      name: 'Anita Desai',
      company: 'Apple',
      position: 'iOS Lead Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      angle: 90,
      radius: 200,
    },
    {
      id: '4',
      name: 'Vikram Singh',
      company: 'Amazon',
      position: 'Solutions Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      angle: 135,
      radius: 240,
    },
    {
      id: '5',
      name: 'Kavya Patel',
      company: 'NVIDIA',
      position: 'AI Research Scientist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      angle: 180,
      radius: 190,
    },
    {
      id: '6',
      name: 'Arjun Kumar',
      company: 'Meta',
      position: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      angle: 225,
      radius: 210,
    },
    {
      id: '7',
      name: 'Sneha Reddy',
      company: 'Tesla',
      position: 'Autopilot Engineer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      angle: 270,
      radius: 230,
    },
    {
      id: '8',
      name: 'Rohan Gupta',
      company: 'Netflix',
      position: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      angle: 315,
      radius: 200,
    },
  ];

  // Company colors for network lines
  const companyColors = {
    'Google': '#4285F4',
    'Microsoft': '#00BCF2',
    'Apple': '#007AFF',
    'Amazon': '#FF9900',
    'NVIDIA': '#76B900',
    'Meta': '#1877F2',
    'Tesla': '#CC0000',
    'Netflix': '#E50914',
  };

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

  // Draw network connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw connections
    alumniNodes.forEach((node, index) => {
      const x1 = centerX + Math.cos((node.angle * Math.PI) / 180) * node.radius;
      const y1 = centerY + Math.sin((node.angle * Math.PI) / 180) * node.radius;

      // Draw connection to center
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = hoveredNode === node.id 
        ? companyColors[node.company as keyof typeof companyColors] || '#00BFFF'
        : 'rgba(0, 191, 255, 0.2)';
      ctx.lineWidth = hoveredNode === node.id ? 3 : 1;
      ctx.stroke();

      // Draw connections to nearby nodes
      alumniNodes.forEach((otherNode, otherIndex) => {
        if (index !== otherIndex && Math.abs(index - otherIndex) <= 2) {
          const x2 = centerX + Math.cos((otherNode.angle * Math.PI) / 180) * otherNode.radius;
          const y2 = centerY + Math.sin((otherNode.angle * Math.PI) / 180) * otherNode.radius;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = 'rgba(255, 215, 0, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw pulsing effect for hovered node
      if (hoveredNode === node.id) {
        const gradient = ctx.createRadialGradient(x1, y1, 0, x1, y1, 30);
        gradient.addColorStop(0, companyColors[node.company as keyof typeof companyColors] + '40');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x1, y1, 30, 0, 2 * Math.PI);
        ctx.fill();
      }
    });

    // Draw center hub
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(1, '#DAA520');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
    ctx.fill();

    // Add SPIT logo text in center
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('SPIT', centerX, centerY + 4);

  }, [hoveredNode, mousePosition]);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] dark:from-[#0D0D0D] dark:to-[#1A1A1A] light:from-[#f8fafc] light:to-[#e2e8f0] relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/10 to-[#FFD700]/10 dark:from-[#00BFFF]/10 dark:to-[#FFD700]/10 light:from-[#1e40af]/10 light:to-[#a16207]/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF]/5 dark:bg-[#00BFFF]/5 light:bg-[#1e40af]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/5 dark:bg-[#FFD700]/5 light:bg-[#a16207]/5 rounded-full blur-3xl"></div>
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
            className="text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] dark:from-[#FFD700] dark:to-[#DAA520] light:from-[#1e40af] light:to-[#a16207] bg-clip-text text-transparent mb-6"
          >
            Our Global Alumni Network
          </motion.h2>
          <p className="text-xl text-white/80 dark:text-white/80 light:text-slate-600 max-w-3xl mx-auto leading-relaxed">
            SPIT graduates are making their mark across the globe, leading innovation at the world's most prestigious companies and driving technological advancement.
          </p>
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
              className="bg-black/30 dark:bg-black/30 light:bg-white/90 backdrop-blur-lg border border-[#00BFFF]/30 dark:border-[#00BFFF]/30 light:border-[#1e40af]/30 rounded-xl p-6 text-center hover:border-[#00BFFF]/50 dark:hover:border-[#00BFFF]/50 light:hover:border-[#1e40af]/50 transition-all group"
            >
              <div className="text-[#FFD700] dark:text-[#FFD700] light:text-[#1e40af] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-[#00BFFF] dark:text-[#00BFFF] light:text-[#1e40af] font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 dark:text-white/60 light:text-slate-500 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-black/20 dark:bg-black/20 light:bg-white/80 backdrop-blur-lg border border-[#00BFFF]/30 dark:border-[#00BFFF]/30 light:border-[#1e40af]/30 rounded-2xl p-8 mb-16">
            <div 
              className="relative w-full h-[600px] overflow-hidden rounded-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Canvas for network lines */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />

              {/* Alumni nodes */}
              {alumniNodes.map((node, index) => {
                const centerX = 50; // 50% of container width
                const centerY = 50; // 50% of container height
                const x = centerX + (Math.cos((node.angle * Math.PI) / 180) * node.radius) / 6; // Adjust for percentage
                const y = centerY + (Math.sin((node.angle * Math.PI) / 180) * node.radius) / 6;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Profile Image */}
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                        hoveredNode === node.id 
                          ? 'border-[#FFD700] dark:border-[#FFD700] light:border-[#1e40af] scale-110 shadow-lg' 
                          : 'border-[#00BFFF]/50 dark:border-[#00BFFF]/50 light:border-[#1e40af]/50'
                      }`}>
                        <img
                          src={node.image}
                          alt={node.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Company indicator */}
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white transition-all duration-300 ${
                        hoveredNode === node.id ? 'scale-110' : ''
                      }`}
                      style={{ backgroundColor: companyColors[node.company as keyof typeof companyColors] || '#00BFFF' }}>
                        {node.company.charAt(0)}
                      </div>
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredNode === node.id ? 1 : 0,
                        y: hoveredNode === node.id ? 0 : 10
                      }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/90 dark:bg-black/90 light:bg-white/95 backdrop-blur-lg border border-[#00BFFF]/30 dark:border-[#00BFFF]/30 light:border-[#1e40af]/30 rounded-lg p-3 min-w-[200px] z-10"
                    >
                      <div className="text-white dark:text-white light:text-slate-900 font-semibold text-sm">
                        {node.name}
                      </div>
                      <div className="text-[#00BFFF] dark:text-[#00BFFF] light:text-[#1e40af] text-xs">
                        {node.position}
                      </div>
                      <div className="text-white/70 dark:text-white/70 light:text-slate-600 text-xs">
                        {node.company}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] dark:from-[#FFD700] dark:to-[#DAA520] light:from-[#1e40af] light:to-[#a16207] flex items-center justify-center shadow-xl border-4 border-white/20"
                >
                  <img
                    src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
                    alt="SPIT Logo"
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-8">
            Our Alumni Work At
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {Object.entries(companyColors).map(([company, color]) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-white dark:text-white light:text-slate-700 font-semibold text-lg transition-all cursor-pointer"
                style={{ color }}
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
          <div className="bg-black/30 dark:bg-black/30 light:bg-white/90 backdrop-blur-lg border border-[#00BFFF]/30 dark:border-[#00BFFF]/30 light:border-[#1e40af]/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              Join Our Alumni Network
            </h3>
            <p className="text-white/80 dark:text-white/80 light:text-slate-600 mb-6">
              Connect with fellow SPIT graduates, share opportunities, and contribute to the growth of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#DAA520] dark:from-[#FFD700] dark:to-[#DAA520] light:from-[#1e40af] light:to-[#a16207] text-black dark:text-black light:text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Register as Alumni
              </button>
              <button className="px-6 py-3 bg-[#00BFFF]/20 dark:bg-[#00BFFF]/20 light:bg-[#1e40af]/20 text-[#00BFFF] dark:text-[#00BFFF] light:text-[#1e40af] rounded-lg border border-[#00BFFF]/30 dark:border-[#00BFFF]/30 light:border-[#1e40af]/30 font-semibold hover:bg-[#00BFFF]/30 dark:hover:bg-[#00BFFF]/30 light:hover:bg-[#1e40af]/30 transition-colors">
                Explore Network
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};