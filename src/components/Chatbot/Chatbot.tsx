import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, FileText, ExternalLink, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  sources?: string[];
  links?: { title: string; url: string }[];
}

interface ChatbotProps {
  className?: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m SPIT AI Assistant. I can help you with information about admissions, academics, placements, infrastructure, and more. What would you like to know?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Knowledge base for SPIT information
  const knowledgeBase = {
    admissions: {
      keywords: ['admission', 'apply', 'eligibility', 'fee', 'cutoff', 'entrance', 'application'],
      responses: [
        {
          content: 'SPIT offers B.Tech, M.Tech, and MCA programs. Admissions are based on JEE Main scores for B.Tech and GATE scores for M.Tech. The application process typically starts in March.',
          links: [
            { title: 'Admission Process', url: '/admissions' },
            { title: 'Fee Structure', url: '/admissions#fees' }
          ]
        }
      ]
    },
    placements: {
      keywords: ['placement', 'job', 'company', 'package', 'salary', 'recruit', 'career'],
      responses: [
        {
          content: 'SPIT has an excellent placement record with 95% placement rate. The highest package offered is ₹42 LPA and average package is ₹12 LPA. Top recruiters include Google, Microsoft, Amazon, and many more.',
          links: [
            { title: 'Placement Statistics', url: '/placements' },
            { title: 'Top Recruiters', url: '/placements#recruiters' }
          ]
        }
      ]
    },
    academics: {
      keywords: ['course', 'program', 'curriculum', 'faculty', 'department', 'syllabus'],
      responses: [
        {
          content: 'SPIT offers B.Tech in Computer Engineering, Information Technology, and Electronics & Telecommunication. We also have M.Tech and MCA programs. All programs are designed with industry-relevant curriculum.',
          links: [
            { title: 'Academic Programs', url: '/academics' },
            { title: 'Departments', url: '/academics/departments' }
          ]
        }
      ]
    },
    infrastructure: {
      keywords: ['infrastructure', 'lab', 'library', 'facility', 'campus', 'building'],
      responses: [
        {
          content: 'SPIT has state-of-the-art infrastructure including modern laboratories, well-equipped library, sports facilities, and Wi-Fi enabled campus spread across 47 acres.',
          links: [
            { title: 'Infrastructure Details', url: '/about/infrastructure' },
            { title: 'Campus Tour', url: 'https://tour.spit.ac.in' }
          ]
        }
      ]
    },
    about: {
      keywords: ['about', 'history', 'vision', 'mission', 'principal', 'founder'],
      responses: [
        {
          content: 'SPIT is an autonomous engineering institute established in 1995, affiliated with Mumbai University. We have NAAC A+ grade and are ranked among top engineering colleges in India.',
          links: [
            { title: 'About SPIT', url: '/about' },
            { title: 'Vision & Mission', url: '/about#vision-mission' }
          ]
        }
      ]
    },
    contact: {
      keywords: ['contact', 'address', 'phone', 'email', 'location', 'reach'],
      responses: [
        {
          content: 'SPIT is located at Bhavan\'s Campus, Munshi Nagar, Andheri (West), Mumbai 400058. Phone: +91 (22) 2670 7440, Email: info@spit.ac.in',
          links: [
            { title: 'Contact Details', url: '/contact' },
            { title: 'Campus Map', url: '/contact#map' }
          ]
        }
      ]
    }
  };

  const quickSuggestions = [
    'Tell me about admissions',
    'What are the placement statistics?',
    'Show me the fee structure',
    'What courses are offered?',
    'How to contact SPIT?',
    'Tell me about campus facilities'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const findBestResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    Object.entries(knowledgeBase).forEach(([category, data]) => {
      const score = data.keywords.reduce((acc, keyword) => {
        return acc + (lowerQuery.includes(keyword) ? 1 : 0);
      }, 0);

      if (score > maxScore) {
        maxScore = score;
        bestMatch = data.responses[0];
      }
    });

    if (bestMatch) {
      return bestMatch;
    }

    // Default response for unmatched queries
    return {
      content: 'I\'m here to help with information about SPIT! You can ask me about admissions, academics, placements, infrastructure, or any other aspect of the institute. Try asking something like "Tell me about admissions" or "What are the placement statistics?"',
      links: [
        { title: 'Explore SPIT', url: '/' },
        { title: 'Contact Us', url: '/contact' }
      ]
    };
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = findBestResponse(content);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: response.content,
      timestamp: new Date(),
      links: response.links,
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#4169E1] to-[#FFD700] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        
        {/* Notification dot for new users */}
        {!isOpen && messages.length === 1 && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">SPIT AI Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px] custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-[#4169E1]' 
                        : 'bg-gradient-to-r from-[#FFD700] to-[#DAA520]'
                    }`}>
                      {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className={`rounded-2xl p-3 ${
                      message.type === 'user'
                        ? 'bg-[#4169E1] text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      
                      {message.links && message.links.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target={link.url.startsWith('http') ? '_blank' : '_self'}
                              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="flex items-center gap-2 text-xs text-[#FFD700] hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                            >
                              <FileText size={12} />
                              {link.title}
                              {link.url.startsWith('http') && <ExternalLink size={10} />}
                            </a>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-3">
                      <div className="flex items-center gap-1">
                        <Loader2 size={16} className="animate-spin text-[#FFD700]" />
                        <span className="text-sm text-white/70">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-white/10">
                <p className="text-xs text-white/60 mb-2">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickSuggestion(suggestion)}
                      className="text-xs bg-white/10 hover:bg-white/20 text-white/80 px-3 py-1 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about SPIT..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#4169E1] text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] text-white p-2 rounded-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};