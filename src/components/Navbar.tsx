import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, Search, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';


interface NavItem {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

// First row menu items - Core academic sections
const firstRowItems: NavItem[] = [
  {
    title: 'ABOUT',
    items: [
      { title: 'About SPIT', href: '/about' },
      { title: 'Infrastructure', href: '/about/infrastructure' },
      { title: 'Governing Body', href: '/about/governing-body' },
      { title: 'Achievements', href: '/about/achievements' },
      { title: 'Campus Life', href: 'https://tour.spit.ac.in/' },
      { title: 'Contact Us', href: '/contact' },
    ]
  },
  {
    title: 'ACADEMICS',
    items: [
      { title: 'UG Programme', href: '/academics/ug' },
      { title: 'PG Programme', href: '/academics/pg' },
      { title: 'Ph.D. Programme', href: '/academics/phd' },
      { title: 'Departments', href: '/academics/departments' },
      { title: 'Faculty', href: '/academics/faculty' },
      { title: 'Curriculum', href: '/academics/curriculum' },
      { title: 'Moodle', href: '/academics/moodle' },
      { title: 'SCOPE', href: '/academics/scope' },
      { title: 'Professional Education', href: '/academics/professional-education' },
      { title: 'Customized Courses', href: '/academics/customized-courses' },
      { title: 'Centers & Initiatives', href: '/academics/centers-initiatives' },
      { title: 'CDEEP Courses', href: '/academics/cdeep' },
      { title: 'Resources', href: '/academics/resources' },
      { title: 'Academic Calendar', href: '/academics/calendar' },
      { title: 'Academic Council Minutes', href: '/academics/council-minutes' },
      { title: '(TLE) Model', href: '/academics/tle-model' },
      { title: 'Rules & Regulations', href: '/academics/rules' },
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
      { title: 'Preamble', href: '/research/preamble' },
      { title: 'IdeaLab', href: '/research/idealab' },
      { title: 'R&D Committee', href: '/research/rd-committee' },
      { title: 'Policy & Research Areas', href: '/research/policy-areas' },
      { title: 'Funded Projects', href: '/research/funded-projects' },
      { title: 'International Conferences', href: '/research/conferences' },
      { title: 'Students Technical Activities', href: '/research/technical-activities' },
      { title: 'Current Events & Activities', href: '/research/events' },
      { title: 'Useful links', href: '/research/links' },
      { title: 'Publications Portal', href: '/research/publications' },
      { title: 'IIRS-ISRO Outreach Programme', href: '/research/iirs-isro' },
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
      { title: 'Scholarships', href: '/students/scholarships' },
      { title: 'Documents Collection', href: '/students/documents' },
      { title: 'Online Transcripts', href: '/students/transcripts' },
      { title: 'LOR System', href: '/students/lor' },
      { title: "Student's Council", href: '/students/council' },
      { title: 'Rules & Regulations', href: '/students/rules' },
      { title: "Students' Activities", href: '/students/activities' },
      { title: 'Anti Ragging Notification', href: '/students/anti-ragging' },
      { title: 'Links', href: '/students/links' },
      { title: 'SEVA', href: '/students/seva' },
      { title: 'Sports', href: '/students/sports' },
      { title: 'Oculus', href: '/students/oculus' },
      { title: 'Rotaract Club', href: '/students/rotaract' },
      { title: 'Alumni', href: '/students/alumni' },
      { title: 'Capacity Development Programme', href: '/students/capacity-development' },
    ]
  },
];

// Second row menu items - Student services and support
const secondRowItems: NavItem[] = [
 
  {
    title: 'LIBRARY',
    items: [
      { title: 'Dspace', href: '/Library/Dspace' },
      { title: 'Question paper', href: '/Library/question-paper' },
      { title: 'Syllabus', href: '/Library/Syllabus' },
    ]
  },
  {
    title: 'EXAM',
    items: [
      { title: 'All Notifications', href: '/exam/notifications' },
      { title: 'Results', href: '/exam/Results' },
      { title: 'Fees', href: '/exam/Fees' },
      { title: 'Timetable', href: '/exam/timetable' },
      { title: 'Examination Manual', href: '/exam/ex-manual' },
      { title: 'Exam Staff', href: '/exam/Staff' },
      { title: 'Contact Us', href: '/exam/Contact' },
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
    title: 'ENTREPRENEURSHIP',
    items: [
      { title: 'SP-TBI', href: '/e/sptbi' },
      { title: 'IEDC', href: '/e/iedc' },
      { title: 'IR-Cell', href: '/e/ircell' },
      { title: 'E-cell', href: '/e/e-cell' },
      { title: 'IPR-Cell', href: '/e/iprcell' },
      { title: 'IEEE', href: '/e/ieee' },
      { title: 'WIE', href: '/e/wie' },
      { title: 'Enactus', href: '/e/enactus' },
    ]
  },
  {
    title: 'IQAC',
    items: [
      { title: 'About IQAC', href: '/accreditation/IQAC' },
      { title: 'Composition', href: '/accreditation/iqac#iqac-committee' },
      { title: 'Constitution', href: '/accreditation/iqac#iqac-documents' },
      { title: 'MoM', href: '/accreditation/iqac#iqac-meetings' },
      { title: 'Perspective Plan', href: '/accreditation/iqac#iqac-documents' },
      { title: 'Roles & Responsibilities', href: '/accreditation/iqac#iqac-committee' },
      { title: 'FDP', href: '/accreditation/iqac#iqac-documents' },
      { title: 'Feedback', href: '/accreditation/iqac#iqac-documents' },
      { title: 'Institutional Distinctiveness', href: '/accreditation/iqac#iqac-documents' },
      { title: 'Code of Conduct', href: '/accreditation/iqac#iqac-contact' },
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
    title: 'CAREERS@SPIT',
    items: [
      { title: 'Current Openings', href: '/CareerAtSpit/*' },
      { title: 'Faculty Positions', href: '/CareerAtSpit/*' },
      { title: 'Staff Positions', href: '/CareerAtSpit/*' },
      { title: 'Benefits', href: '/CareerAtSpit/*' },
      { title: 'How to Apply', href: '/CareerAtSpit/*' },
      { title: 'Selection Process', href: '/CareerAtSpit/*' },
      { title: 'FAQs', href: '/CareerAtSpit/*' },
      { title: 'Contact HR', href: '/CareerAtSpit/*' },
    ]
  },
];

// Third row menu items - Administrative and compliance
const thirdRowItems: NavItem[] = [
  
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
  },
  {
    title: 'MANDATORY DISC.',
    items: [
      { title: 'Mandatory Disclosure', href: '/resources/mandatory-disclosure' },
    ]
  },
  {
    title: 'IBM',
    items: [
      { title: 'About IBM', href: '/accreditation/IBM' },
    ]
  },
  {
    title: 'PROCUREMENT',
    items: [
      { title: 'About Procurement', href: '/accreditation/procurement' },
    ]
  },
  {
    title: 'MICRO SPEC. PROG',
    items: [
      { title: 'Micro Specializations Prog', href: '/MicroSpecializationPrograms/*' },
    ]
  },
  {
    title: 'ANNUAL REPORT',
    items: [
      { title: 'About report', href: '/report' },
    ]
  },
  {
    title: 'SHRESTHA CLUB',
    items: [
      { title: 'About club', href: '/Shresthaclub/*' },
    ]
  },
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
            className="nav-item flex items-center gap-1 font-medium min-h-[30px] min-w-[30px] justify-center md:justify-start px-2 text-xs lg:text-sm"
            onMouseMove={addSparkle}
          >
            <span className="truncate">{item.title}</span>
            <ChevronDown
              size={12}
              className={`transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
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
  const allItems = [...firstRowItems, ...secondRowItems, ...thirdRowItems];

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

  // Close menu on link click or overlay click
  const handleClose = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#FFD700] transition-colors p-2 min-h-[44px] min-w-[44px]"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open main menu</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-[2px]"
              onClick={handleClose}
            />
            {/* Menu Panel - slides in from left and expands vertically */}
            <motion.nav
              key="mobilemenu"
              initial={{ x: '-100%', height: 0 }}
              animate={{ x: 0, height: '100vh' }}
              exit={{ x: '-100%', height: 0 }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed top-0 left-0 w-full h-full z-[9999] bg-gradient-to-br from-[#240046] via-[#30036B] to-[#02365E] flex flex-col"
              style={{ touchAction: 'none' }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#4169E1]/30">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors"
                  onClick={handleClose}
                >
                  <Home size={28} />
                  <span className="font-bold text-lg">Home</span>
                </Link>
                <button
                  onClick={handleClose}
                  className="text-white hover:text-[#FFD700] transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
              </div>
              <div className="px-6 py-4 flex-1 overflow-y-auto">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#4169E1]/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFD700]"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                </div>
                <div>
                  {filteredItems.map((item) => (
                    <div key={item.title} className="mb-4">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer text-white hover:text-[#FFD700] transition-colors text-lg font-semibold py-2 px-2 rounded">
                          {item.title}
                          <ChevronDown className="transform transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 mt-2 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              onClick={handleClose}
                              className="block py-2 px-2 text-white/90 hover:text-[#FFD700] transition-colors rounded hover:bg-[#4169E1]/10 text-base"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
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
        {/* First Row - Core Academic Sections */}
        <div className="hidden lg:flex items-center justify-between h-14 border-b border-[#4169E1]/10">
          <div className="flex items-center justify-between w-full">
            {firstRowItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title} item={item} />
              ) : (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-item font-medium min-h-[44px] flex items-center px-2 text-xs lg:text-sm"
                >
                  {item.title}
                </Link>
              )
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Second Row - Student Services */}
        <div className="hidden lg:flex items-center justify-between h-14 border-b border-[#4169E1]/10">
          <div className="flex items-center justify-between w-full">
            {secondRowItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title} item={item} />
              ) : (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-item font-medium min-h-[44px] flex items-center px-2 text-xs lg:text-sm"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Third Row - Administrative & Compliance */}
        <div className="hidden lg:flex items-center justify-between h-14">
          <div className="flex items-center justify-between w-full">
            {thirdRowItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title} item={item} />
              ) : (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-item font-medium min-h-[44px] flex items-center px-2 text-xs lg:text-sm"
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