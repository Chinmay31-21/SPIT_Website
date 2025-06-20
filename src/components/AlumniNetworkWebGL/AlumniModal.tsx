import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar, Building, Mail, Linkedin, Award, Code } from 'lucide-react';
import type { AlumniMember } from './types';

interface AlumniModalProps {
  alumni: AlumniMember;
  onClose: () => void;
}

export const AlumniModal: React.FC<AlumniModalProps> = ({ alumni, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={alumni.avatar}
                alt={alumni.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#7B2FFE]"
              />
              <div 
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                  alumni.isActive ? 'bg-[#00FF94]' : 'bg-[#FF69B4]'
                }`}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{alumni.name}</h2>
              <p className="text-[#7B2FFE] font-semibold">{alumni.position}</p>
              <p className="text-white/70">{alumni.company}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-white/80 leading-relaxed">{alumni.bio}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/70">
              <Building size={18} />
              <span>{alumni.department}</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Calendar size={18} />
              <span>Class of {alumni.graduationYear}</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <MapPin size={18} />
              <span>{alumni.location}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {alumni.email && (
              <div className="flex items-center gap-3 text-white/70">
                <Mail size={18} />
                <a 
                  href={`mailto:${alumni.email}`}
                  className="hover:text-[#7B2FFE] transition-colors"
                >
                  {alumni.email}
                </a>
              </div>
            )}
            {alumni.linkedIn && (
              <div className="flex items-center gap-3 text-white/70">
                <Linkedin size={18} />
                <a 
                  href={alumni.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7B2FFE] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Award size={20} />
            Achievements
          </h3>
          <ul className="space-y-2">
            {alumni.achievements.map((achievement, index) => (
              <li key={index} className="text-white/70 flex items-start gap-2">
                <span className="text-[#00FF94] mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Code size={20} />
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {alumni.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#7B2FFE]/20 border border-[#7B2FFE]/40 rounded-full text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-[#7B2FFE] to-[#FF69B4] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Connect
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Message
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};