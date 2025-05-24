import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, X } from 'lucide-react';

const firstRowItems = [
  {
    title: 'Academics',
    items: [
      { title: 'Programs', href: '/academics/programs' },
      { title: 'Departments', href: '/academics/departments' },
      { title: 'Faculty', href: '/academics/faculty' },
    ],
  },
  {
    title: 'Admissions',
    items: [
      { title: 'Undergraduate', href: '/admissions/undergraduate' },
      { title: 'Postgraduate', href: '/admissions/postgraduate' },
      { title: 'International', href: '/admissions/international' },
    ],
  },
];

const secondRowItems = [
  {
    title: 'Campus Life',
    items: [
      { title: 'Hostels', href: '/campus/hostels' },
      { title: 'Clubs', href: '/campus/clubs' },
      { title: 'Events', href: '/campus/events' },
    ],
  },
  {
    title: 'Research',
    items: [
      { title: 'Projects', href: '/research/projects' },
      { title: 'Publications', href: '/research/publications' },
    ],
  },
];

const sparkleEffect = () => {
  return Array.from({ length: 3 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 30,
  }));
};

const DropdownMenu = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(sparkleEffect());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="inline-flex items-center px-4 py-2 text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors"
        aria-haspopup="true"
      >
        Explore
        <span className="ml-2"><Sparkles size={16} /></span>
      </Menu.Button>

      <AnimatePresence>
        <Menu.Items
          as={motion.div}
          static
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-50 mt-2 w-screen max-w-4xl left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 text-white"
        >
          {[...firstRowItems, ...secondRowItems].map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-yellow-400 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className="hover:text-yellow-300 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {sparkles.map((sparkle) => (
            <motion.span
              key={sparkle.id}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
            />
          ))}
        </Menu.Items>
      </AnimatePresence>
    </Menu>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const allItems = [...firstRowItems, ...secondRowItems];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return allItems.map(section => ({
      ...section,
      items: section.items.filter(sub =>
        sub.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 text-white p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 pr-10 bg-white/10 text-white placeholder-white/60 rounded-md"
              />
              <Search className="absolute right-3 top-3 text-white/50" size={20} />
            </div>

            <div className="space-y-6">
              {filteredItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-[#FFD700] mb-2">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 rounded-md text-white hover:bg-[#00BFFF]/10 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { DropdownMenu, MobileMenu };
