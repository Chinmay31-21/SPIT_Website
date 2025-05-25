import React, { useState, useEffect } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, Search, X, Home, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeProvider';

const firstRowItems = [
  {
    title: 'ABOUT',
    items: [
      { title: 'About SPIT', href: '/about' },
      { title: 'Vision & Mission', href: '/about/vision-mission' },
      { title: "Principal's Message", href: '/about/principal-message' },
      { title: 'Governing Body', href: '/about/governing-body' },
      { title: 'Infrastructure', href: '/about/infrastructure' },
      { title: 'Achievements', href: '/about/achievements' },
      { title: 'Campus Life', href: '/about/campus-life' },
      { title: 'Contact Us', href: '/about/contact' },
    ]
  },
  {
    title: 'ACADEMICS',
    items: [
      { title: 'Undergraduate Programs', href: '/academics/ug' },
      { title: 'Postgraduate Programs', href: '/academics/pg' },
      { title: 'Doctoral Programs', href: '/academics/phd' },
      { title: 'Academic Calendar', href: '/academics/calendar' },
      { title: 'Departments', href: '/academics/departments' },
      { title: 'Faculty', href: '/academics/faculty' },
      { title: 'Research Centers', href: '/academics/research-centers' },
      { title: 'Academic Regulations', href: '/academics/regulations' },
    ]
  },
  {
    title: 'ADMISSIONS',
    items: [
      { title: 'Admission Process', href: '/admissions/process' },
      { title: 'Eligibility Criteria', href: '/admissions/eligibility' },
      { title: 'Fee Structure', href: '/admissions/fees' },
      { title: 'Scholarships', href: '/admissions/scholarships' },
      { title: 'Important Dates', href: '/admissions/dates' },
      { title: 'FAQs', href: '/admissions/faqs' },
      { title: 'Contact Admission Cell', href: '/admissions/contact' },
      { title: 'Apply Now', href: '/admissions/apply' },
    ]
  },
  {
    title: 'RESEARCH',
    items: [
      { title: 'Research Areas', href: '/research/areas' },
      { title: 'Publications', href: '/research/publications' },
      { title: 'Projects', href: '/research/projects' },
      { title: 'Collaborations', href: '/research/collaborations' },
      { title: 'Research Facilities', href: '/research/facilities' },
      { title: 'Patents', href: '/research/patents' },
      { title: 'Research Groups', href: '/research/groups' },
      { title: 'Research Opportunities', href: '/research/opportunities' },
    ]
  },
  {
    title: 'PLACEMENTS',
    items: [
      { title: 'Overview', href: '/placements' },
      { title: 'Statistics', href: '/placements/statistics' },
      { title: 'Our Recruiters', href: '/placements/recruiters' },
      { title: 'Internships', href: '/placements/internships' },
      { title: 'Placement Process', href: '/placements/process' },
      { title: 'Training Programs', href: '/placements/training' },
      { title: 'Success Stories', href: '/placements/success-stories' },
      { title: 'Contact TPO', href: '/placements/contact' },
    ]
  },
  {
    title: 'STUDENTS',
    items: [
      { title: 'Student Life', href: '/students' },
      { title: 'Clubs & Societies', href: '/students/clubs' },
      { title: 'Sports & Culture', href: '/students/sports' },
      { title: 'Hostel', href: '/students/hostel' },
      { title: 'Student Council', href: '/students/council' },
      { title: 'Alumni Network', href: '/students/alumni' },
      { title: 'Student Services', href: '/students/services' },
      { title: 'Grievance Redressal', href: '/students/grievance' },
    ]
  },
  {
    title: 'FACILITIES',
    items: [
      { title: 'Library', href: '/facilities/library' },
      { title: 'Laboratories', href: '/facilities/labs' },
      { title: 'Computing Facilities', href: '/facilities/computing' },
      { title: 'Sports Complex', href: '/facilities/sports' },
      { title: 'Cafeteria', href: '/facilities/cafeteria' },
      { title: 'Healthcare', href: '/facilities/healthcare' },
      { title: 'Transportation', href: '/facilities/transport' },
      { title: 'Wi-Fi Campus', href: '/facilities/wifi' },
    ]
  },
  {
    title: 'CAMPUS LIFE',
    items: [
      { title: 'Events & Activities', href: '/campus/events' },
      { title: 'Technical Festivals', href: '/campus/tech-fests' },
      { title: 'Cultural Festivals', href: '/campus/cultural-fests' },
      { title: 'Student Chapters', href: '/campus/chapters' },
      { title: 'Innovation Cell', href: '/campus/innovation' },
      { title: 'Entrepreneurship', href: '/campus/entrepreneurship' },
      { title: 'Campus News', href: '/campus/news' },
      { title: 'Photo Gallery', href: '/campus/gallery' },
    ]
  }
];

// Second row menu items
const secondRowItems = [
  {
    title: 'IQAC',
    items: [
      { title: 'About IQAC', href: '/iqac' },
      { title: 'Quality Policy', href: '/iqac/policy' },
      { title: 'Committees', href: '/iqac/committees' },
      { title: 'Reports', href: '/iqac/reports' },
      { title: 'Best Practices', href: '/iqac/practices' },
      { title: 'Feedback', href: '/iqac/feedback' },
      { title: 'Activities', href: '/iqac/activities' },
      { title: 'Documentation', href: '/iqac/docs' },
    ]
  },
  {
    title: 'NIRF',
    items: [
      { title: 'NIRF Ranking', href: '/nirf' },
      { title: 'Reports', href: '/nirf/reports' },
      { title: 'Data Submission', href: '/nirf/data' },
      { title: 'Parameters', href: '/nirf/parameters' },
      { title: 'Analysis', href: '/nirf/analysis' },
      { title: 'Improvements', href: '/nirf/improvements' },
      { title: 'Downloads', href: '/nirf/downloads' },
      { title: 'Contact', href: '/nirf/contact' },
    ]
  },
  {
    title: 'NBA',
    items: [
      { title: 'NBA Accreditation', href: '/nba' },
      { title: 'Status', href: '/nba/status' },
      { title: 'Reports', href: '/nba/reports' },
      { title: 'Compliance', href: '/nba/compliance' },
      { title: 'Quality Metrics', href: '/nba/metrics' },
      { title: 'Documentation', href: '/nba/docs' },
      { title: 'Updates', href: '/nba/updates' },
      { title: 'Contact', href: '/nba/contact' },
    ]
  },
  {
    title: 'NAAC',
    items: [
      { title: 'NAAC Status', href: '/naac' },
      { title: 'SSR', href: '/naac/ssr' },
      { title: 'Criteria', href: '/naac/criteria' },
      { title: 'Reports', href: '/naac/reports' },
      { title: 'Quality Initiatives', href: '/naac/initiatives' },
      { title: 'Documentation', href: '/naac/docs' },
      { title: 'Updates', href: '/naac/updates' },
      { title: 'Contact', href: '/naac/contact' },
    ]
  },
  {
    title: 'AICTE',
    items: [
      { title: 'AICTE Approval', href: '/aicte' },
      { title: 'Compliance', href: '/aicte/compliance' },
      { title: 'Mandatory Disclosure', href: '/aicte/disclosure' },
      { title: 'Reports', href: '/aicte/reports' },
      { title: 'Guidelines', href: '/aicte/guidelines' },
      { title: 'Documentation', href: '/aicte/docs' },
      { title: 'Updates', href: '/aicte/updates' },
      { title: 'Contact', href: '/aicte/contact' },
    ]
  },
  {
    title: 'RTI',
    items: [
      { title: 'RTI Information', href: '/rti' },
      { title: 'Filing Process', href: '/rti/process' },
      { title: 'Officers', href: '/rti/officers' },
      { title: 'Guidelines', href: '/rti/guidelines' },
      { title: 'FAQs', href: '/rti/faqs' },
      { title: 'Downloads', href: '/rti/downloads' },
      { title: 'Status', href: '/rti/status' },
      { title: 'Contact', href: '/rti/contact' },
    ]
  },
  {
    title: 'CAREERS',
    items: [
      { title: 'Current Openings', href: '/careers' },
      { title: 'Faculty Positions', href: '/careers/faculty' },
      { title: 'Staff Positions', href: '/careers/staff' },
      { title: 'Benefits', href: '/careers/benefits' },
      { title: 'How to Apply', href: '/careers/apply' },
      { title: 'Selection Process', href: '/careers/process' },
      { title: 'FAQs', href: '/careers/faqs' },
      { title: 'Contact HR', href: '/careers/contact' },
    ]
  },
  {
    title: 'TENDER',
    items: [
      { title: 'Active Tenders', href: '/tender' },
      { title: 'Archived Tenders', href: '/tender/archive' },
      { title: 'Process', href: '/tender/process' },
      { title: 'Guidelines', href: '/tender/guidelines' },
      { title: 'Downloads', href: '/tender/downloads' },
      { title: 'Vendor Registration', href: '/tender/register' },
      { title: 'Status', href: '/tender/status' },
      { title: 'Contact', href: '/tender/contact' },
    ]
  }
];

const DropdownMenu = ({ item }: { item: NavItem }) => {
  // Your DropdownMenu code unchanged
};

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const allItems = [...firstRowItems, ...secondRowItems];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.items?.some(subItem =>
      subItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: 'circle(0% at top right)' }}
          animate={{ clipPath: 'circle(150% at top right)' }}
          exit={{ clipPath: 'circle(0% at top right)' }}
          transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home size={24} />
                <span>Home</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#FFD700] transition-colors p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="space-y-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {item.items
                        .filter((subItem) =>
                          subItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white hover:text-[#FFD700] transition-colors px-4 py-2 rounded-md bg-white/5 hover:bg-[#FFD700]/10"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No results found.</p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-black shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-black dark:text-white">
        <Link to="/">SPIT</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-black dark:text-white">
        {firstRowItems.map((item) => (
          <DropdownMenu key={item.title} item={item} />
        ))}
        {/* Optionally add secondRowItems here if desired */}
      </div>

      {/* Desktop Theme Toggle */}
      <div className="hidden md:flex ml-4">
        <ThemeToggle />
      </div>

      {/* Mobile Menu Toggle and Theme Toggle */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-[#FFD700] transition-colors p-2 min-h-[44px] min-w-[44px]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
