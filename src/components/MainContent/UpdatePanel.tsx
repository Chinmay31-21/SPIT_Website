import React, { useState, useEffect } from 'react';
import { RotateCw, Clipboard, AlertTriangle, Bell, ChevronRight, ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { documentsAPI } from '../../services/api';

interface Update {
  id: number;
  title: string;
  description: string;
  document_type: string;
  file: string;
  is_active: boolean;
  uploaded_at: string;
  file_size_display?: string;
  isSeen: boolean;
}

export const UpdatePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch documents from API
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const response = await documentsAPI.getAll({ 
        ordering: '-uploaded_at',
        is_active: 'true',
        page_size: 20
      });
      
      // Map API response to Update format
      const documents = response.data.results.map((doc: any) => ({
        ...doc,
        isSeen: false
      }));
      
      setUpdates(documents);
      setError('');
    } catch (err) {
      console.error('Failed to fetch documents:', err);
      setError('Failed to load updates');
      // Fallback to showing empty or cached data
    } finally {
      setLoading(false);
    }
  };

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

  const markAsSeen = (id: number) => {
    setUpdates(updates.map(update => 
      update.id === id ? { ...update, isSeen: true } : update
    ));
  };

  const hasNewUpdates = updates.some(update => update.is_active && !update.isSeen);

  const formatTimestamp = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      notice: 'text-blue-400',
      circular: 'text-purple-400',
      syllabus: 'text-green-400',
      timetable: 'text-orange-400',
      form: 'text-pink-400',
      other: 'text-gray-400',
    };
    return colors[type] || colors.other;
  };

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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#FFD700] font-bold flex items-center gap-2">
                      {loading ? (
                        <RotateCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                      Latest Updates
                    </h3>
                    <button
                      onClick={fetchDocuments}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                      title="Refresh"
                    >
                      <RotateCw className={`w-4 h-4 text-[#00BFFF] ${loading ? 'animate-spin' : ''}`} />
                    </button>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {loading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="w-8 h-8 border-2 border-[#00BFFF] border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {updates.length > 0 ? (
                        updates.map(update => (
                          <motion.div
                            key={update.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-3 rounded-lg transition-all hover:bg-white/10 ${
                              !update.isSeen
                                ? 'bg-[#FFD700]/10 border border-[#FFD700]/30'
                                : 'bg-white/5 border border-transparent'
                            }`}
                          >
                            <a
                              href={update.file}
                              target='_blank'
                              rel='noopener noreferrer'
                              className="block"
                              onClick={() => markAsSeen(update.id)}
                            >
                              <div className="flex items-start gap-2 mb-2">
                                <FileText className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getTypeColor(update.document_type)}`} />
                                <h4 className="text-white font-medium text-sm leading-tight">{update.title}</h4>
                              </div>
                              
                              {update.description && (
                                <p className="text-gray-400 text-xs mb-2 line-clamp-2">{update.description}</p>
                              )}
                              
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-[#00BFFF]">{formatTimestamp(update.uploaded_at)}</span>
                                <div className="flex items-center gap-2">
                                  <span className={`px-2 py-0.5 rounded-full ${getTypeColor(update.document_type)} bg-white/5`}>
                                    {update.document_type.toUpperCase()}
                                  </span>
                                  {!update.isSeen && (
                                    <span className="text-[#FFD700] animate-pulse font-semibold">NEW!</span>
                                  )}
                                </div>
                              </div>
                            </a>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-400">
                          <FileText className="w-12 h-12 mx-auto mb-2 opacity-30" />
                          <p className="text-sm">No updates available</p>
                        </div>
                      )}
                      
                      {updates.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pt-3 border-t border-white/10"
                        >
                          <a
                            href="/allannouncements"
                            className="block p-3 text-center bg-gradient-to-r from-[#FFD700]/10 to-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg text-[#00BFFF] hover:text-[#FFD700] font-medium text-sm transition-colors"
                          >
                            View All Announcements →
                          </a>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};
