import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, Search, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

// First row menu items
const firstRowItems: NavItem[] = [
  {
    title: 'ABOUT',
    items: [
      { title: 'About SPIT', href: '/about' },
      { title: 'Infrastructure', href: '/about/infrastructure' },
      { title: 'Governing Body', href: '/about/governing-body' },
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

// Second row menu items with cross-linking
const secondRowItems: NavItem[] = [
  {
    title: 'IQAC',
    items: [
      { title: 'About IQAC', href: '/accreditation/IQAC' },
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
      { title: 'NIRF Ranking', href: '/accreditation/nirf' },
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
      { title: 'NBA Accreditation', href: '/accreditation/nba' },
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
      { title: 'NAAC Status', href: '/accreditation/naac' },
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
      { title: 'AICTE Approval', href: '/accreditation/AICTE' },
      { title: 'Compliance', href: '/aicte/compliance' },
      { title: 'Mandatory Disclosure', href: '/resources/mandatory-disclosure' },
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
      { title: 'RTI Information', href: '/resources/rti' },
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
      { title: 'Active Tenders', href: '/resources/tender' },
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
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  const addSparkle = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newSparkle = { id: Date.now(), x, y };
    setSparkles((prev) => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 800);
  };

  return (
    <Menu as="div" className="relative group">
      {({ open }) => (
        <>
          <Menu.Button 
            className="nav-item flex items-center gap-2 font-medium min-h-[44px] min-w-[44px] justify-center md:justify-start px-4"
            onMouseMove={addSparkle}
          >
            {item.title}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
            {sparkles.map((sparkle) => (
              <span
                key={sparkle.id}
                className="sparkle"
                style={{ left: `${sparkle.x}px`, top: `${sparkle.y}px` }}
              />
            ))}
          </Menu.Button>

          <Menu.Items className="absolute z-50 mt-2 w-80 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-lg border border-[#4169E1]/30 shadow-lg focus:outline-none">
            <div className="p-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {item.items?.map((subItem) => (
                <Menu.Item key={subItem.title}>
                  {({ active }) => (
                    <Link
                      to={subItem.href}
                      className={`dropdown-item group flex items-center px-4 py-2 text-sm rounded-md min-h-[44px] ${
                        active
                          ? 'text-[#FFD700] bg-[#4169E1]/10'
                          : 'text-[#0A0A0A] dark:text-white'
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#FFD700] transition-colors p-2 min-h-[44px] min-w-[44px]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

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
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#4169E1]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#4169E1]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              </div>

              <div className="space-y-6">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-white text-lg font-semibold mb-2">
                        {item.title}
                        <ChevronDown className="transform transition-transform group-open:rotate-180" />
                      </summary>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-4 text-white/80 hover:text-[#FFD700] hover:bg-white/5 rounded transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-[#4169E1]/30 transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-[#4169E1]/10' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="hidden lg:flex items-center justify-between h-16 border-b border-[#4169E1]/10">
          <div className="flex items-center justify-between w-full">
            {firstRowItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title} item={item} />
              ) : (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-item font-medium min-h-[44px] flex items-center px-4"
                >
                  {item.title}
                </Link>
              )
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Second Row */}
        <div className="hidden lg:flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            {secondRowItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title} item={item} />
              ) : (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-item font-medium min-h-[44px] flex items-center px-4"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
