import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// First row menu items
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

          <Menu.Items className="absolute z-50 mt-2 w-80 rounded-lg bg-black/95 backdrop-blur-lg border border-[#00BFFF]/30 shadow-lg focus:outline-none">
            <div className="p-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {item.items?.map((subItem) => (
                <Menu.Item key={subItem.title}>
                  {({ active }) => (
                    <Link
                      to={subItem.href}
                      className={`dropdown-item group flex items-center px-4 py-2 text-sm rounded-md min-h-[44px] ${
                        active ? 'text-[#FFD700] bg-[#00BFFF]/10' : 'text-white'
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

  const allItems = [...firstRowItems, ...secondRowItems];

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-lg shadow-lg z-50"
          >
            <div className="p-4 overflow-y-auto h-full">
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#00BFFF]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00BFFF] min-h-[44px]"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                </div>
              </div>

              {allItems.map((item) => (
                <div key={item.title} className="py-2">
                  {item.items ? (
                    <details className="group">
                      <summary className="mobile-nav-item flex items-center justify-between cursor-pointer min-h-[44px]">
                        {item.title}
                        <ChevronDown
                          size={16}
                          className="transform transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="pl-4 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="mobile-nav-item pl-8 min-h-[44px] flex items-center"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link 
                      to={item.href || '#'} 
                      className="mobile-nav-item min-h-[44px] flex items-center"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
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
      className={`sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#00BFFF]/30 transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-[#00BFFF]/10' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="hidden lg:flex items-center justify-between h-16 border-b border-[#00BFFF]/10">
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
          <div className="flex-1" />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};