import React, { useState, useEffect } from 'react';
import { RotateCw, Clipboard, AlertTriangle, Bell, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Update {
  id: string;
  title: string;
  link: string;
  isNew: boolean;
  isSeen: boolean;
  timestamp: string;
}

export const UpdatePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: '1',
      title: 'Advertisement for Faculty Recruitment-2025',
      link: '/assets/newspaper-22-05-2025.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '16 hours ago'
    },
    {
      id: '2',
      title: 'Advertisement Tenure 3-Years',
      link: '/assets/advertisement-final-1.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '3 June 2025'
    },
    {
      id: '3',
      title: 'Application form tenure Faculty – 2025',
      link: '/assets/Application-form-for-Tenure-Faculty-2025.docx',
      isNew: true,
      isSeen: false,
      timestamp: '17 May 2025'
    },
    {
      id: '4',
      title: 'Cut off Marks 24-25',
      link: '/assets/Cutoff2425.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '16 April 2025'
    },
    {
      id: '5',
      title: 'FRA Fee Approval (ENGG, MCA,ME) for 2025-26',
      link: '/assets/FRA-Fee-Approval-ENGG-MCAME-for-2025-26.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '4 April 2025'
    },
    {
      id: '6',
      title: 'Bid for Building Extension Works at SPIT',
      link: '/assets/Final_1-Tendor-SPIT-Building-Extension-2025-PDF.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '30 March 2025'
    },
    {
      id: '7',
      title: 'B.Tech. Engg Revised Fee Notice for 2024-25',
      link: '/assets/B.Tech_.-Engg-Revised-Fee-Notice-for-2024-25.pdf',
      isNew: true,
      isSeen: false,
      timestamp: '24 March 2025'
    },
    {
      id: '8',
      title: 'Click Here for Older Announcements',
      link: './pages/AllAnnouncements/*',
      isNew: true,
      isSeen: false,
      timestamp: '1 hour ago'
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const markAsSeen = (id: string) => {
    setUpdates(updates.map(update => 
      update.id === id ? { ...update, isSeen: true } : update
    ));
  };

  const hasNewUpdates = updates.some(update => update.isNew && !update.isSeen);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Toggle Button */}
          <motion.button
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            className="fixed right-0 top-1/4 z-50 bg-black/80 p-3 rounded-l-lg border-l border-y border-[#00BFFF]/30 group"
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            aria-label="Toggle updates panel"
          >
            <motion.div
              animate={{ rotate: isPanelOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`transform ${hasNewUpdates ? 'animate-pulse' : ''}`}
            >
              {isPanelOpen ? (
                <ChevronDown className="w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronRight className="w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform" />
              )}
            </motion.div>
            {hasNewUpdates && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            )}
          </motion.button>

          {/* Updates Panel */}
          <AnimatePresence>
            {isPanelOpen && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed right-0 top-1/4 w-80 h-[60vh] bg-black/80 backdrop-blur-lg border-l border-[#00BFFF]/30 z-40"
              >
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
                          target='_blank'
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
        </>
      )}
    </AnimatePresence>
  );
};
