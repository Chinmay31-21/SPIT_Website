import React, { useState, useEffect } from 'react';
import { RotateCw, Clipboard, AlertTriangle, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Update {
  id: string;
  title: string;
  link: string;
  isNew: boolean;
  isSeen: boolean;
  isChrome: boolean;
  timestamp: string;
}

export const UpdatePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: '1',
      title: 'FY BTECH Admission 2024-25',
      link: '#',
      isNew: true,
      isSeen: false,
      isChrome: false,
      timestamp: 'Just now'
    },
    {
      id: '2',
      title: 'Tender for GPU Lab (2025)',
      link: '#',
      isNew: true,
      isSeen: false,
      isChrome: false,
      timestamp: '2 hours ago'
    },
    // Add more updates as needed
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markAsSeen = (id: string) => {
    setUpdates(updates.map(update => 
      update.id === id ? { ...update, isSeen: true } : update
    ));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          className="fixed right-0 top-1/4 w-80 h-[60vh] bg-black/80 backdrop-blur-lg border-l border-[#00BFFF]/30 z-50"
        >
          {/* Notification Bell */}
          <div className="absolute -left-12 top-4 bg-black/80 p-2 rounded-l-lg border-l border-y border-[#00BFFF]/30">
            <Bell className="w-6 h-6 text-[#FFD700] animate-pulse" />
            {updates.some(update => update.isNew && !update.isSeen) && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            )}
          </div>

          {/* Updates Content */}
          <div className="h-full p-4 overflow-y-auto custom-scrollbar">
            <h3 className="text-[#FFD700] font-bold mb-4 flex items-center gap-2">
              <RotateCw className="w-4 h-4 animate-spin" />
              Latest Updates
            </h3>

            <div className="space-y-4">
              {updates.map(update => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg transition-colors ${
                    update.isNew && !update.isSeen
                      ? 'bg-[#FFD700]/10 border border-[#FFD700]/30'
                      : 'bg-white/5'
                  }`}
                >
                  <a
                    href={update.link}
                    className="block"
                    onClick={() => markAsSeen(update.id)}
                  >
                    <h4 className="text-white font-medium mb-1">{update.title}</h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#00BFFF]">{update.timestamp}</span>
                      {update.isNew && !update.isSeen && (
                        <span className="text-[#FFD700] animate-pulse">NEW!</span>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};