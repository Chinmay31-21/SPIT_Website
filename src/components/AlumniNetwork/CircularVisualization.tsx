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
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });
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

  // Calculate positions for circular layout
  const getAlumniPositions = () => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.30;
    
    return filteredAlumni.map((member, index) => {
      const angle = (index / filteredAlumni.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      return {
        ...member,
        x,
        y,
        angle
      };
    });
  };

  const alumniPositions = getAlumniPositions();

  const handleAlumniClick = (alumni: AlumniMember) => {
    setSelectedAlumni(alumni);
    onAlumniSelect(alumni);
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Technology': '#3B82F6',
      'Finance': '#10B981',
      'Healthcare': '#EF4444',
      'Education': '#8B5CF6',
      'Consulting': '#F59E0B',
      'Manufacturing': '#6B7280',
      'Startup': '#EC4899',
      'Government': '#14B8A6'
    };
    return colors[industry as keyof typeof colors] || '#6B7280';
  };

  return (
    <div ref={containerRef} className="relative w-full h-[600px] bg-black/20 rounded-2xl overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Center Hub */}
      <motion.div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: dimensions.width / 2.15,
          top: dimensions.height / 2.42
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#4169E1] flex items-center justify-center shadow-xl">
          <img
            src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
            alt="SPIT Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white font-semibold text-sm">SPIT Alumni</p>
          <p className="text-white/60 text-xs">{filteredAlumni.length} Members</p>
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {alumniPositions.map((alumni, index) => (
          <motion.line
            key={`line-${alumni.id}`}
            x1={dimensions.width / 2}
            y1={dimensions.height / 2}
            x2={alumni.x}
            y2={alumni.y}
            stroke={hoveredAlumni === alumni.id ? getIndustryColor(alumni.industry) : '#4169E1'}
            strokeWidth={hoveredAlumni === alumni.id ? 2 : 1}
            strokeOpacity={hoveredAlumni === alumni.id ? 0.8 : 0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
          />
        ))}
      </svg>

      {/* Alumni Nodes */}
      {alumniPositions.map((alumni, index) => (
        <motion.div
          key={alumni.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: alumni.x, top: alumni.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredAlumni(alumni.id)}
          onMouseLeave={() => setHoveredAlumni(null)}
          onClick={() => handleAlumniClick(alumni)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Alumni Avatar */}
          <div 
            className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
              hoveredAlumni === alumni.id 
                ? 'border-[#FFD700] shadow-lg shadow-[#FFD700]/50' 
                : 'border-[#4169E1]/50'
            }`}
            style={{
              borderColor: hoveredAlumni === alumni.id ? getIndustryColor(alumni.industry) : undefined
            }}
          >
            <img
              src={alumni.avatar}
              alt={alumni.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=4169E1&color=fff&size=64`;
              }}
            />
          </div>

          {/* Status Indicator */}
          <div 
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              alumni.isActive ? 'bg-green-500' : 'bg-gray-400'
            }`}
          />

          {/* Industry Badge */}
          <div 
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: getIndustryColor(alumni.industry) }}
          >
            {alumni.industry.charAt(0)}
          </div>

          {/* Hover Tooltip */}
          <AnimatePresence>
            {hoveredAlumni === alumni.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg p-4 min-w-[250px] z-10"
              >
                <h3 className="text-white font-semibold text-sm mb-1">{alumni.name}</h3>
                <p className="text-[#4169E1] text-xs mb-1">{alumni.position}</p>
                <p className="text-white/70 text-xs mb-2">{alumni.company}</p>
                
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{alumni.graduationYear}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{alumni.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div 
                    className={`w-2 h-2 rounded-full ${alumni.isActive ? 'bg-green-500' : 'bg-gray-400'}`}
                  />
                  <span className="text-xs text-white/60">
                    {alumni.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg p-4">
        <h4 className="text-white font-semibold text-sm mb-3">Industries</h4>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries({
            'Technology': '#3B82F6',
            'Finance': '#10B981',
            'Healthcare': '#EF4444',
            'Education': '#8B5CF6',
            'Consulting': '#F59E0B',
            'Startup': '#EC4899'
          }).map(([industry, color]) => (
            <div key={industry} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-white/70 text-xs">{industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{filteredAlumni.length}</div>
          <div className="text-white/60 text-xs">Alumni</div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-lg font-semibold text-green-400">
            {filteredAlumni.filter(a => a.isActive).length}
          </div>
          <div className="text-white/60 text-xs">Active</div>
        </div>
      </div>

      {/* Search Highlight */}
      {searchQuery && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#4169E1]/20 border border-[#4169E1]/50 rounded-lg px-4 py-2">
          <p className="text-white text-sm">
            Showing {filteredAlumni.length} results for "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};