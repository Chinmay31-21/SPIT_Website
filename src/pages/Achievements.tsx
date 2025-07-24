import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookCopy, Zap, Users, Star, GraduationCap, Building, Briefcase, Download } from 'lucide-react';
import bgImage from '/assets/Achievement.jpg'; // Adjust the filename as needed

// Helper component for animated number count-up effect from AnnualReport page
const AnimatedNumber = ({ value, suffix = '' }) => {
  const [currentNumber, setCurrentNumber] = React.useState(0);

  React.useEffect(() => {
    const end = parseFloat(value);
    const duration = 1500;
    let startTime = null;

    const animateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = progress * end;
      setCurrentNumber(current);
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [value]);

  const formattedValue = Number.isInteger(parseFloat(value)) ? Math.floor(currentNumber) : currentNumber.toFixed(1);

  return (
    <div className="text-4xl font-bold text-blue-300 mb-1 drop-shadow-md">
      {formattedValue}{suffix}
    </div>
  );
};


// Data extracted from the PDF
const facultyAchievements = {
  awards: [
    { name: "Dr. Sudhir Dhage", detail: "Received two Best Paper awards at ICEI 4.0-2022 and IEEE SPICON 2022." },
    { name: "Dr. Sujata Kulkarni", detail: "Received Best Paper Award at CLIP2022 and a grant from IEEE Bombay Section." },
    { name: "Dr. Narendra Bhagat", detail: "Honored with the Best Paper Award at the 7th International Conference ICIRTE 2022." },
    { name: "Prof. Priya Deshpande", detail: "Won Best Project Award at 'The Inventors Challenge-2022' for 'Structural Monitoring of Road Conditions'." },
    { name: "Prof. Pallavi Nair", detail: "Secured Best Paper award at the IEEE MTTS APS-MAPCON conference." },
   { name: "Prestigious Awards", detail: "Faculty have received multiple 'Best Paper' awards at national and international conferences, including IEEE SPICON 2022 and ICEI 4.0-2022." },
    { name: "Major Research Grants", detail: "Secured significant grants from AICTE for MODROB (₹17 Lakhs), Faculty Development Programs (₹5.6 Lakhs), and Short Term Training Programs (₹3.3 Lakhs)." },
    { name: "International Recognition", detail: "Dr. [cite_start]D. R. Kalbande was honored with the International Scientist Award on Engineering, Science and Medicine." },

  ],
  patents: [
    { name: "Dr. D. R. Kalbande", detail: "Granted a patent for 'GRANT AUTO WALAS: AN APP FOR VEHICLE MANAGEMENT'." },
    { name: "Prof. K. T. Talele", detail: "Granted a patent for 'Sustainable PICOHYDRO POWER GENERATION SYSTEM'." },
    { name: "Dr. Sudhir Dhage", detail: "Published three patents related to breast cancer detection and information retrieval." },
    { name: "Patents & Research", detail: "In 2022-23 alone, faculty were granted 2 patents and published 4 more in fields like AI Health Monitoring and Sustainable Energy." },
    { name: "Doctorates Awarded", detail: "A total of 9 faculty members were awarded a Ph.D. from the University of Mumbai in the 2022-23 academic year." },
  ],
  phds: [
    { count: 9, detail: "Faculty members awarded Ph.D. from the University of Mumbai." },
    { count: 2, detail: "Faculty from ASH Department obtained Ph.D. from the University of Bhopal under QIP Scheme." },
  ]
};

const studentAchievements = {
  competitions: [
    { name: "Smart India Hackathon (SIH)", detail: "Multiple teams have won First Prize at national-level hackathons, securing significant cash prizes including ₹1,00,000." },
    { name: "J.P. Morgan 'Code for Good'", detail: "Numerous students have been winners in the prestigious annual corporate hackathon, leading to job offers." },
    { name: "Top Corporate Challenges", detail: "Podium finishes and top recognitions from major companies like Nomura (2nd Place, Kakushin 5.0) and Deloitte ('Changemaker' award)." },
    { name: "Pan-IIT & IIM Dominance", detail: "Consistent winners and finalists in high-profile events at IIT Bombay (NEC, e-Yantra), IIM Bangalore (National Runner-up), and IIM Ahmedabad (National Finalist)." },
    { name: "Global Recognition & Records", detail: "A student was part of a team setting a Guinness World Record, while others have achieved high ranks (World #142) in the IEEE Xtreme Programming Competition." },
    { name: "The Inventors Challenge-2022", detail: "A team of third-year students received the Best Project Award among 258 ideas." },
    { name: "Dr. APJ Abdul Kalam Satellite Launch Vehicle Mission-2023", detail: "Anashka Pilera received a Certificate of Merit for her participation." },
    { name: "National Level Hackathons", detail: "Students have consistently excelled in national hackathons, winning top prizes and recognition." },
    { name: "IEEE SPICON 2022", detail: "A team won the Best Paper Award for their research on 'A Novel Approach for Breast Cancer Detection using Machine Learning'." },
    { name: "e-Yantra Robotics Competition", detail: "Students secured the 2nd position in the prestigious e-Yantra Robotics Competition at IIT Bombay." },
    { name: "IEEE Xtreme Programming", detail: "Demonstrating elite coding skills on a global stage, a team achieved a World Ranking of 142 in the prestigious IEEE Xtreme Programming Competition." },
  ],
  internships: [
    { count: 236, detail: "B.Tech students underwent 6-month industry internships, including placements at Amazon." },
    { name: "Mitacs Globalink Research Internship", detail: "A prestigious, fully-funded international research internship was awarded for work at Simon Fraser University, Canada." },
    { count: 49, detail: "Students are pursuing research internships at IIT Bombay, working on high-impact projects." },
    { name: "Contactless Biometry Project", detail: "A student team signed an MoU with UIDAI (Aadhaar) for a project developed at IITB." },
  ],
  academics: [
    { name: "Manas Abhyankar", detail: "Secured All India Rank 90 in the GATE (CS) 2023 examination." },
    { name: "International Research Papers", detail: "Students have co-authored and won 'Best Paper' awards at international E-Conferences and IEEE events for their novel research." },
    { name: "National Level Competitions", detail: "Students won various coding and business plan contests at IIM Indore, Nomura (KakushIN 6.0), and more." },
  ]
};

const alumniAchievements = {
    entrepreneurship: [
      { name: "Startup Founders", detail: "Over 25+ alumni have founded successful tech startups, securing millions in venture funding." },
      { name: "Unicorn Leaders", detail: "Alumni hold key product and engineering leadership roles in several unicorn companies." },
      { name: "Global University Placements", detail: "In the 2021-22 academic year, 65 students secured admissions to prestigious post-graduate institutions worldwide." },
      { name: "Elite US Universities", detail: "Admissions to top-tier US universities including Stanford University [cite: 8][cite_start], Carnegie Mellon University , University of Pennsylvania , Columbia University , and Georgia Institute of Technology." },
      { name: "Top European Institutions", detail: "Admissions to leading European universities such as ETH Zurich , Imperial College London , and the Technical University of Munich." },
      { name: "Premier Indian Institutes", detail: "Secured places at premier national institutes including IIT Bombay and IIM Calcutta." },
    ],
    corporate: [
      { name: "FAANG & Top MNCs", detail: "Hundreds of alumni are making an impact at top global companies like Google, Microsoft, Amazon, and Apple." },
      { name: "C-Suite Executives", detail: "Many alumni have risen to C-suite positions (CEO, CTO, CIO) in leading technology firms." },
    ],
    research: [
      { name: "Leading Researchers", detail: "Alumni are contributing to cutting-edge research at world-renowned universities and corporate R&D labs." },
      { name: "Patents & Publications", detail: "Our alumni network collectively holds over 100 patents and has published numerous papers in prestigious journals." },
    ]
};

// Add PDF reports data
const reports = [
    {
      title: "Faculty & Student Achievements 2022-23",
      description: "The latest compilation of awards, patents, and competition wins.",
      link: "/assets/Faculty_Students_Achievements_2022_2023.pdf" // IMPORTANT: Replace with your actual PDF path
    },
    {
      title: "Faculty Achievements (Till 2021-22)",
      description: "A comprehensive list of faculty awards and recognitions over the years.",
      link: "/assets/Faculty-Achievement-till-2021-22.pdf" // IMPORTANT: Replace with your actual PDF path
    },
    {
      title: "Student Achievements (Till 2021-22)",
      description: "A comprehensive list of student awards and recognitions over the years.",
      link: "/assets/Student-Achievement-till-2021-22-part1.pdf" // IMPORTANT: Replace with your actual PDF path
    },
    {
      title: "Faculty & Student Achievements 2019-20",
      description: "A record of accomplishments from the 2019-20 academic year.",
      link: "/assets/Faculty-and-Student-Achievements-for-2019-20.pdf" // IMPORTANT: Replace with your actual PDF path
    },
    {
      title: "Higher Education Admissions Report",
      description: "Details on students admitted to top universities for higher studies.",
      link: "/assets/UG_Admissions_Top_University-Details.pdf" // IMPORTANT: Replace with your actual PDF path
    },
];


export const Achievements = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center py-12 font-inter overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-950/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFD700] mb-4 drop-shadow-xl tracking-wide">
            A Legacy of Achievement
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            Celebrating the remarkable accomplishments of our faculty, students, and alumni who continue to push the boundaries of innovation and excellence.
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Key Statistics Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
            <div className="text-center p-5 bg-black/50 backdrop-blur-md rounded-lg shadow-md border border-blue-700/40">
              <AnimatedNumber value="11" suffix="+" />
              <div className="text-sm text-gray-200">PhDs Awarded to Faculty</div>
            </div>
            <div className="text-center p-5 bg-black/50 backdrop-blur-md rounded-lg shadow-md border border-green-700/40">
              <AnimatedNumber value="10" suffix="+" />
              <div className="text-sm text-gray-200">National Competition Wins</div>
            </div>
            <div className="text-center p-5 bg-black/50 backdrop-blur-md rounded-lg shadow-md border border-red-700/40">
                <AnimatedNumber value="6" />
                <div className="text-sm text-gray-200">Patents Granted & Published</div>
            </div>
            <div className="text-center p-5 bg-black/50 backdrop-blur-md rounded-lg shadow-md border border-yellow-700/40">
                <AnimatedNumber value="250" suffix="+" />
                <div className="text-sm text-gray-200">Industry & Research Internships</div>
            </div>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Faculty Achievements */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 transform transition-all duration-500 hover:scale-[1.015] hover:shadow-3xl"
            >
                <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3 flex items-center gap-3"><GraduationCap/> Faculty Excellence</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><Award/>Awards & Recognition</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {facultyAchievements.awards.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><BookCopy/>Patents</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                             {facultyAchievements.patents.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Student Achievements */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 transform transition-all duration-500 hover:scale-[1.015] hover:shadow-3xl"
            >
                <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3 flex items-center gap-3"><Zap/> Student Success</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><Star/>Competition Wins</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {studentAchievements.competitions.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><Briefcase/>Internships & Research</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {studentAchievements.internships.map(item => <li key={item.count || item.name}><strong>{item.count ? `${item.count} Students` : item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                </div>
            </motion.div>
            
            {/* Alumni Achievements */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-[#00BFFF]/40 transform transition-all duration-500 hover:scale-[1.015] hover:shadow-3xl"
            >
                <h2 className="text-3xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3 flex items-center gap-3"><Users/> Alumni Impact</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><Building/>Entrepreneurship</h3>
                         <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {alumniAchievements.entrepreneurship.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2"><Briefcase/>Corporate Leadership</h3>
                         <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {alumniAchievements.corporate.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.detail}</li>)}
                        </ul>
                    </div>
                </div>
            </motion.div>

        </div>
        {/* --- Download Reports Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-12">Download Full Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {reports.slice(0, 5).map((report, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-[#00BFFF]/40 flex flex-col text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">{report.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{report.description}</p>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FFD700] hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors"
                >
                  <Download size={16} />
                  View PDF
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Achievements;