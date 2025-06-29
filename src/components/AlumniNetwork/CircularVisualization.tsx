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

  // Responsive dimensions based on window size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Use viewport width for mobile, container width for desktop
        const vw = Math.min(window.innerWidth, window.innerHeight);
        let size = 800;
        if (window.innerWidth < 640) {
          // Mobile: use 90vw or 90vh, whichever is smaller, minus some padding
          size = Math.max(260, Math.min(vw * 0.9, 400));
        } else if (containerRef.current) {
          const { width } = containerRef.current.getBoundingClientRect();
          size = Math.max(320, Math.min(width, 800));
        }
        setDimensions({ width: size, height: size });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate positions for multiple concentric circles
  const getAlumniPositions = () => {
    // Center based on SVG center (not CSS)
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    // Adjust base radius for mobile so avatars don't overflow
    const baseRadius = Math.min(dimensions.width, dimensions.height) * (dimensions.width < 400 ? 0.18 : 0.15);

    // Distribute alumni more evenly for small screens
    const circles =
      dimensions.width < 400
        ? [
            { radius: baseRadius * 1.1, count: Math.min(3, filteredAlumni.length) },
            { radius: baseRadius * 1.7, count: Math.min(5, Math.max(0, filteredAlumni.length - 3)) },
            { radius: baseRadius * 2.2, count: Math.max(0, filteredAlumni.length - 8) }
          ]
        : [
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
      className="relative mx-auto w-full flex justify-center items-center"
      style={{
        minHeight: dimensions.height + (dimensions.width < 500 ? 120 : 180),
        height: dimensions.height + (dimensions.width < 500 ? 120 : 180),
        maxWidth: 800,
        width: '100%',
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
      {dimensions.width < 500 ? (
        // Mobile: position circles relative to shifted logo/alumni
        <svg
          className="absolute z-10"
          style={{
            left: `calc(50% - 0px)`,
            top: `calc(50% - 50px)`,
            transform: 'translate(-50%, -50%)'
          }}
          width={dimensions.width}
          height={dimensions.height}
        >
          <defs>
            <radialGradient id="circleGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          {(dimensions.width < 400 ? [1.1, 1.7, 2.2] : [1.2, 2, 2.8]).map((multiplier, index) => (
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
      ) : (
        // Desktop: keep circles centered
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width={dimensions.width}
          height={dimensions.height}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        >
          <defs>
            <radialGradient id="circleGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </radialGradient>
          </defs>
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
      )}

      {/* Center Hub - SPIT Logo */}
      <motion.div
        className="absolute z-20"
        style={
          dimensions.width < 500
            ? {
                left: `calc(50% - 26px)`, // Center horizontally for mobile
                top: `calc(50% + ${alumniPositions.length
                  ? (alumniPositions[0].y - dimensions.height / 2) * 1
                  : 0}px)`, // Move logo closer to the first alumni node
                transform: 'translate(-50%, -50%)'
              }
            : {
                left: '45%',
                top: `calc(50% - 50px)`,
                transform: 'translate(-50%, -50%)'
              }
        }
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <div className="relative flex items-center justify-center">
          <div
            className="rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center shadow-2xl border-4 border-purple-400/50"
            style={{
              width:
                dimensions.width < 350
                  ? 48
                  : dimensions.width < 500
                  ? 60
                  : 96,
              height:
                dimensions.width < 350
                  ? 48
                  : dimensions.width < 500
                  ? 60
                  : 96
            }}
          >
            <img
              src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
              alt="SPIT Logo"
              className="object-contain rounded-full"
              style={{
                width:
                  dimensions.width < 350
                    ? 28
                    : dimensions.width < 500
                    ? 36
                    : 64,
                height:
                  dimensions.width < 350
                    ? 28
                    : dimensions.width < 500
                    ? 36
                    : 64
              }}
            />
          </div>
          <div
            className="absolute rounded-full border-2 border-purple-400/30 animate-pulse"
            style={{
              inset:
                dimensions.width < 350
                  ? -4
                  : dimensions.width < 500
                  ? -6
                  : -8
            }}
          ></div>
          <div
            className="absolute rounded-full border border-purple-300/20 animate-ping"
            style={{
              inset:
                dimensions.width < 350
                  ? -8
                  : dimensions.width < 500
                  ? -12
                  : -16
            }}
          ></div>
        </div>
      </motion.div>
      {/* Connection Lines */}
      <svg
        className="absolute left-1/2 pointer-events-none z-10"
        style={{
          top: `calc(50% - ${dimensions.width < 500 ? 40 : 50}px)`,
          transform: 'translate(-50%, -50%)'
        }}
        width={dimensions.width}
        height={dimensions.height}
      >
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
          className="absolute z-30"
          style={{
            left: `calc(50% + ${(alumni.x - dimensions.width / 1.875)}px)`,
            top: `calc(50% + ${(alumni.y - dimensions.height / 2) - (dimensions.width < 500 ? 55 : 50)}px)`, // Shift up
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
          }}
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
          <div className="relative">
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-purple-400/50"
              animate={hoveredAlumni === alumni.id ? {
                rotate: 360,
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                inset:
                  dimensions.width < 350
                    ? -2
                    : dimensions.width < 500
                    ? -3
                    : -8
              }}
            />
            <div
              className={`rounded-full overflow-hidden border-3 transition-all duration-300 ${
                hoveredAlumni === alumni.id
                  ? 'border-purple-400 shadow-lg shadow-purple-400/50 scale-110'
                  : 'border-purple-600/70'
              }`}
              style={{
                width:
                  dimensions.width < 350
                    ? 24
                    : dimensions.width < 500
                    ? 32
                    : 64,
                height:
                  dimensions.width < 350
                    ? 24
                    : dimensions.width < 500
                    ? 32
                    : 64,
                borderColor: hoveredAlumni === alumni.id ? getIndustryColor(alumni.industry) : undefined,
                boxShadow: hoveredAlumni === alumni.id ? `0 0 20px ${getIndustryColor(alumni.industry)}40` : undefined
              }}
            >
              <img
                src={alumni.avatar}
                alt={alumni.name}
                className="w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=8B5CF6&color=fff&size=64`;
                }}
              />
            </div>

            {/* Status Indicator */}
            <div 
              className={`absolute -bottom-1 -right-1 rounded-full border-2 border-white ${
                alumni.isActive ? 'bg-green-400' : 'bg-gray-500'
              } shadow-lg`}
              style={{
                width:
                  dimensions.width < 350
                    ? 8
                    : dimensions.width < 500
                    ? 10
                    : 16,
                height:
                  dimensions.width < 350
                    ? 8
                    : dimensions.width < 500
                    ? 10
                    : 16,
                borderWidth:
                  dimensions.width < 350
                    ? 1
                    : dimensions.width < 500
                    ? 1.5
                    : 2
              }}
            />

            {/* Industry Badge */}
            <div 
              className="absolute -top-2 -left-2 flex items-center justify-center text-xs font-bold text-white shadow-lg"
              style={{
                width:
                  dimensions.width < 350
                    ? 12
                    : dimensions.width < 500
                    ? 16
                    : 24,
                height:
                  dimensions.width < 350
                    ? 12
                    : dimensions.width < 500
                    ? 16
                    : 24,
                fontSize:
                  dimensions.width < 350
                    ? 7
                    : dimensions.width < 500
                    ? 9
                    : 13,
                backgroundColor: getIndustryColor(alumni.industry),
                borderRadius: '50%'
              }}
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
        className="absolute left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl border border-purple-400/30 rounded-xl shadow-2xl"
        style={{
          bottom: dimensions.width < 500 ? 12 : 32,
          padding: dimensions.width < 350 ? 8 : dimensions.width < 500 ? 12 : 16,
          minWidth: dimensions.width < 350 ? 90 : dimensions.width < 500 ? 120 : 160,
          fontSize: dimensions.width < 350 ? 10 : dimensions.width < 500 ? 12 : 14
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <h4
          className="text-white font-bold mb-2"
          style={{
            fontSize: dimensions.width < 350 ? 11 : dimensions.width < 500 ? 13 : 16
          }}
        >
          Industries
        </h4>
        <div
          className="grid grid-cols-1 gap-2"
          style={{
            gap: dimensions.width < 350 ? 2 : 4
          }}
        >
          {Object.entries({
            'Technology': '#8B5CF6',
            'Finance': '#06D6A0',
            'Startup': '#F72585',
            'Healthcare': '#EF476F'
          }).map(([industry, color]) => (
            <div
              key={industry}
              className="flex items-center"
              style={{
                gap: dimensions.width < 350 ? 3 : 6
              }}
            >
              <div
                className="rounded-full shadow-sm"
                style={{
                  width: dimensions.width < 350 ? 8 : 12,
                  height: dimensions.width < 350 ? 8 : 12,
                  backgroundColor: color
                }}
              />
              <span
                className="text-white/80 font-medium"
                style={{
                  fontSize: dimensions.width < 350 ? 9 : dimensions.width < 500 ? 11 : 13
                }}
              >
                {industry}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Stats Panel */}
      <motion.div
        className="absolute right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0 bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl border border-purple-400/30 rounded-xl shadow-2xl"
        style={{
          bottom: dimensions.width < 500 ? 12 : 32,
          padding: dimensions.width < 350 ? 8 : dimensions.width < 500 ? 12 : 16,
          minWidth: dimensions.width < 350 ? 90 : dimensions.width < 500 ? 120 : 160,
          fontSize: dimensions.width < 350 ? 10 : dimensions.width < 500 ? 12 : 14
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-center">
          <motion.div
            className="font-bold text-white mb-1"
            style={{
              fontSize: dimensions.width < 350 ? 18 : dimensions.width < 500 ? 22 : 28
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            {filteredAlumni.length}
          </motion.div>
          <div
            className="text-purple-300 font-medium mb-2"
            style={{
              fontSize: dimensions.width < 350 ? 9 : dimensions.width < 500 ? 11 : 13
            }}
          >
            Alumni
          </div>
        </div>
        <div className="text-center">
          <motion.div
            className="font-bold text-green-400 mb-1"
            style={{
              fontSize: dimensions.width < 350 ? 14 : dimensions.width < 500 ? 16 : 22
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, type: "spring" }}
          >
            {filteredAlumni.filter(a => a.isActive).length}
          </motion.div>
          <div
            className="text-green-300/70 font-medium"
            style={{
              fontSize: dimensions.width < 350 ? 9 : dimensions.width < 500 ? 11 : 13
            }}
          >
            Active
          </div>
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