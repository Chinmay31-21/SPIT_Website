import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Calendar, Mail, Linkedin, Award, ExternalLink } from 'lucide-react';

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

interface CircularVisualizationProps {
  alumni: AlumniMember[];
  onAlumniSelect: (alumni: AlumniMember) => void;
  searchQuery?: string;
}

export const CircularVisualization: React.FC<CircularVisualizationProps> = ({
  alumni,
  onAlumniSelect,
  searchQuery = ''
}) => {
  const [hoveredAlumni, setHoveredAlumni] = useState<string | null>(null);
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniMember | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter alumni based on search query
  const filteredAlumni = alumni.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: Math.max(width, 400), height: Math.max(height, 400) });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate positions for multiple concentric circles
  const getAlumniPositions = () => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const baseRadius = Math.min(dimensions.width, dimensions.height) * 0.15;
    
    const circles = [
      { radius: baseRadius * 1.2, count: Math.min(4, filteredAlumni.length) },
      { radius: baseRadius * 2, count: Math.min(6, Math.max(0, filteredAlumni.length - 4)) },
      { radius: baseRadius * 2.8, count: Math.max(0, filteredAlumni.length - 10) }
    ];
    
    let alumniIndex = 0;
    const positions: any[] = [];
    
    circles.forEach((circle, circleIndex) => {
      for (let i = 0; i < circle.count && alumniIndex < filteredAlumni.length; i++) {
        const angle = (i / circle.count) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + Math.cos(angle) * circle.radius;
        const y = centerY + Math.sin(angle) * circle.radius;
        
        positions.push({
          ...filteredAlumni[alumniIndex],
          x,
          y,
          angle,
          circleIndex,
          radius: circle.radius
        });
        alumniIndex++;
      }
    });
    
    return positions;
  };

  const alumniPositions = getAlumniPositions();

  const handleAlumniClick = (alumni: AlumniMember) => {
    setSelectedAlumni(alumni);
    onAlumniSelect(alumni);
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Technology': '#8B5CF6',
      'Finance': '#06D6A0',
      'Healthcare': '#EF476F',
      'Education': '#FFB700',
      'Consulting': '#26547C',
      'Manufacturing': '#6B7280',
      'Startup': '#F72585',
      'Government': '#277DA1'
    };
    return colors[industry as keyof typeof colors] || '#8B5CF6';
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[800px] overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #1a0b2e 0%, #16213e 50%, #0f1419 100%)'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * dimensions.width],
              y: [0, Math.random() * dimensions.height],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * dimensions.width,
              top: Math.random() * dimensions.height
            }}
          />
        ))}
      </div>

      {/* Concentric circles background */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="circleGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        
        {/* Concentric circles */}
        {[1.2, 2, 2.8].map((multiplier, index) => (
          <motion.circle
            key={index}
            cx={dimensions.width / 2}
            cy={dimensions.height / 2}
            r={Math.min(dimensions.width, dimensions.height) * 0.12 * multiplier}
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 100 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {/* Center Hub - SPIT Logo */}
      <motion.div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{
          left: dimensions.width / 2.21,
          top: dimensions.height / 2.25
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center shadow-2xl border-4 border-purple-400/50">
            <img
              src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
              alt="SPIT Logo"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
          <div className="absolute -inset-4 rounded-full border border-purple-300/20 animate-ping"></div>
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F72585" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {alumniPositions.map((alumni, index) => (
          <motion.line
            key={`line-${alumni.id}`}
            x1={dimensions.width / 2}
            y1={dimensions.height / 2}
            x2={alumni.x}
            y2={alumni.y}
            stroke={hoveredAlumni === alumni.id ? getIndustryColor(alumni.industry) : "url(#connectionGradient)"}
            strokeWidth={hoveredAlumni === alumni.id ? 3 : 1.5}
            strokeOpacity={hoveredAlumni === alumni.id ? 1 : 0.4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
          />
        ))}
      </svg>

      {/* Alumni Nodes */}
      {alumniPositions.map((alumni, index) => (
        <motion.div
          key={alumni.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-30"
          style={{ left: alumni.x, top: alumni.y }}
          initial={{ scale: 0, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5 + index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          onMouseEnter={() => setHoveredAlumni(alumni.id)}
          onMouseLeave={() => setHoveredAlumni(null)}
          onClick={() => handleAlumniClick(alumni)}
          whileHover={{ scale: 1.5, z: 50 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Alumni Avatar Container */}
          <div className="relative">
            {/* Outer ring animation */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-purple-400/50"
              animate={hoveredAlumni === alumni.id ? {
                rotate: 360,
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Main avatar */}
            <div 
              className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                hoveredAlumni === alumni.id 
                  ? 'border-purple-400 shadow-lg shadow-purple-400/50 scale-110' 
                  : 'border-purple-600/70'
              }`}
              style={{
                borderColor: hoveredAlumni === alumni.id ? getIndustryColor(alumni.industry) : undefined,
                boxShadow: hoveredAlumni === alumni.id ? `0 0 20px ${getIndustryColor(alumni.industry)}40` : undefined
              }}
            >
              <img
                src={alumni.avatar}
                alt={alumni.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=8B5CF6&color=fff&size=64`;
                }}
              />
            </div>

            {/* Status Indicator */}
            <div 
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                alumni.isActive ? 'bg-green-400' : 'bg-gray-500'
              } shadow-lg`}
            />

            {/* Industry Badge */}
            <div 
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
              style={{ backgroundColor: getIndustryColor(alumni.industry) }}
            >
              {alumni.industry.charAt(0)}
            </div>

            {/* Company label for major companies */}
            {['Google', 'Meta', 'Amazon', 'Microsoft', 'PhonePe'].some(company => 
              alumni.company.toLowerCase().includes(company.toLowerCase())
            ) && (
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: hoveredAlumni === alumni.id ? 1 : 0, y: 0 }}
              >
                {alumni.company.split(' ')[0]}
              </motion.div>
            )}
          </div>

          {/* Enhanced Hover Tooltip */}
          <AnimatePresence>
            {hoveredAlumni === alumni.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute bottom-full mb-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-900/95 to-purple-800/95 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 min-w-[280px] z-50 shadow-2xl"
                style={{
                  boxShadow: `0 20px 40px rgba(139, 92, 246, 0.3)`
                }}
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-sm mb-1">{alumni.name}</h3>
                  <p className="text-purple-300 text-xs mb-1 font-medium">{alumni.position}</p>
                  <p className="text-white/80 text-xs mb-3 font-semibold">{alumni.company}</p>
                  
                  <div className="flex justify-center gap-4 text-xs text-white/70 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{alumni.graduationYear}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{alumni.location.split(',')[0]}</span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <div 
                      className={`w-2 h-2 rounded-full ${alumni.isActive ? 'bg-green-400' : 'bg-gray-400'}`}
                    />
                    <span className="text-xs text-white/60">
                      {alumni.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                {/* Tooltip Arrow */}
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent"
                  style={{ borderTopColor: 'rgba(107, 33, 168, 0.95)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Enhanced Legend */}
      <motion.div 
        className="absolute bottom-6 left-6 bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 shadow-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <h4 className="text-white font-bold text-sm mb-3">Industries</h4>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries({
            'Technology': '#8B5CF6',
            'Finance': '#06D6A0',
            'Startup': '#F72585',
            'Healthcare': '#EF476F'
          }).map(([industry, color]) => (
            <div key={industry} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: color }}
              />
              <span className="text-white/80 text-xs font-medium">{industry}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Stats Panel */}
      <motion.div 
        className="absolute bottom-6 right-6 bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl border border-purple-400/30 rounded-xl p-4 shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-center">
          <motion.div 
            className="text-3xl font-bold text-white mb-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            {filteredAlumni.length}
          </motion.div>
          <div className="text-purple-300 text-xs font-medium mb-3">Alumni</div>
        </div>
        <div className="text-center">
          <motion.div 
            className="text-xl font-bold text-green-400 mb-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, type: "spring" }}
          >
            {filteredAlumni.filter(a => a.isActive).length}
          </motion.div>
          <div className="text-green-300/70 text-xs font-medium">Active</div>
        </div>
      </motion.div>

      {/* Search Results Indicator */}
      {searchQuery && (
        <motion.div 
          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-xl border border-purple-400/50 rounded-xl px-6 py-3 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-white text-sm font-medium text-center">
            <span className="text-purple-200">Showing</span>{' '}
            <span className="font-bold text-white">{filteredAlumni.length}</span>{' '}
            <span className="text-purple-200">results for</span>{' '}
            <span className="font-bold text-purple-100">"{searchQuery}"</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};