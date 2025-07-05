import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, FileText, BarChart3, CheckCircle, Calendar, Download } from 'lucide-react';

export const IQAC = () => {
  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Enhancement",
      description: "Develop and apply quality benchmarks/parameters for various academic and administrative activities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stakeholder Feedback",
      description: "Facilitate creation of a learner-centric environment conducive to quality education"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Continuous Improvement",
      description: "Arrangement for feedback from students, parents and other stakeholders on quality-related institutional processes"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Dissemination of information on various quality parameters to all stakeholders"
    }
  ];

  const activities = [
    "Development and application of quality benchmarks",
    "Facilitating the creation of a learner-centric environment",
    "Collection and analysis of feedback from stakeholders",
    "Preparation of Annual Quality Assurance Report (AQAR)",
    "Documentation of various programs and activities",
    "Organization of workshops and seminars on quality issues",
    "Coordination of quality-related activities",
    "Promotion of quality culture in the institution"
  ];

  const documents = [
    { title: "IQAC Constitution 2024-25", type: "PDF", size: "166 KB", link: "/assets/IQAC_Constitution_2024.pdf" },
    { title: "IQAC Constitution 2022-23", type: "PDF", size: "339 KB", link: "/assets/IQAC-Constitution-2022-23.pdf" },
    { title: "IQAC Constitution 2021-22", type: "PDF", size: "331 KB", link: "/assets/IQAC-Constitution-2021-22.pdf" },
    { title: "IQAC Constitution 2019-20", type: "PDF", size: "340 KB", link: "/assets/IQAC-Constitution-2019-20.pdf" },
    { title: "IQAC Constitution 2018-19", type: "PDF", size: "343 KB", link: "/assets/IQAC-Constitution-2018-19.pdf" },
    { title: "Institutional Perspective Plan", type: "PDF", size: "30.5 MB", link: "/assets/Institutional Perspective Plan-1.pdf" },
    { title: "Two days Faculty Development Programme on “Continuous Quality Improvement” on 13th & 14th March", type: "JPG", size: "1036 KB", link: "/assets/FacultyDevelopmentProgrammeIQAC.jpg" },
    { title: "Institutional Distinctiveness", type: "PDF", size: "547 KB", link: "/assets/Placements-1.pdf " },
    { title: "Code of Conduct 2023", type: "PDF", size: "4.9 MB", link: "/assets/Institutional_Values_and_Code_of_Conduct_2022_23.pdf " },
    { title: "Code of Conduct 2021", type: "PDF", size: "899 KB", link: "/assets/Code-of-Conduct_2021.pdf " }
  ];

  const meetings = [
    { date: "AY 2024-25", agenda: "MoM (2024-25)", status: "In Progress" },
    { date: "AY 2023-24", agenda: <a href="/assets/IQAC-Minutes-2023-24.pdf">MoM (2023-24)</a> , status: "Completed" },
    { date: "AY 2021-22", agenda: <a href="/assets/AY-2021-22.pdf">MoM (2021-22)</a>, status: "Completed" },
    { date: "AY 2020-21", agenda: <a href="/assets/AY-2020-21.pdf">MoM (2020-21)</a>, status: "Completed" },
    { date: "AY 2020-21", agenda: <a href="/assets/AY-2019-20.pdf">MoM (2019-20)</a>, status: "Completed" },
    { date: "AY 2020-21", agenda: <a href="/assets/AY-2018-19.pdf">MoM (2018-19)</a>, status: "Completed" }
  ];

  return (
    <div className="min-h-screen dark:bg-[#0A0A0A] light:bg-gradient-to-r from-[#02365E] to-[#30036B] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#EDAE49] bg-clip-text text-transparent mb-8 text-center"
        >
          Internal Quality Assurance Cell (IQAC)
        </motion.h1>

        {/* Vision & Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
          id="iqac-vision-mission"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Vision & Mission</h2>
              <p className="text-[#4169E1]">Ensuring Quality in Higher Education</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">Vision</h3>
              <p className="text-white/80">
                To develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">Mission</h3>
              <p className="text-white/80">
                To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Objectives */}
        <div className="mb-12" id="iqac-objectives">
          <h2 className="text-3xl font-bold text-[#5E035E] dark:text-[#FFD700] mb-6 text-center">Key Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#FFD700] mt-1">{objective.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{objective.title}</h3>
                    <p className="text-white/70">{objective.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
          id="iqac-activities"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">IQAC Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4169E1] mt-1 flex-shrink-0" />
                <span className="text-white/80">{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Documents & Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" id="iqac-documents">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
              <Download className="w-6 h-6" />
              Documents & Reports
            </h2>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                  <div>
                    <h4 className="text-white font-semibold">{doc.title}</h4>
                    <p className="text-white/60 text-sm">{doc.type} • {doc.size}</p>
                  </div>
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#4169E1] hover:text-[#FFD700] transition"
                  >
                    <Download className="w-5 h-5" />
                    <span className="sr-only">Download</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Meetings */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
            id='iqac-meetings'
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Recent Meetings
            </h2>
            <div className="space-y-4">
              {meetings.map((meeting, index) => (
                <div key={index} className="p-4 bg-black/50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#4169E1] font-semibold">{meeting.date}</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {meeting.status}
                    </span>
                  </div>
                  <p className="text-white/80">{meeting.agenda}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Committee Members */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
          id="iqac-committee"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">IQAC Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/*
              Updated committee members list as per the provided data
            */}
            { [
              { name: "Principal Dr.B.N.Chaudhari", role: "Chairperson", department: "" },
              { name: "Dr. Sudhir Dhage", role: "IQAC Coordinator", department: "" },
              { name: "Dr. S. G. Bhirud", role: "Management Representative", department: "" },
              { name: "Dr. M. S. Sutaone", role: "External Domain Expert", department: "" },
              { name: "Dr. A. N. Awale", role: "External Domain Expert", department: "" },
              { name: "Dr. Vahida Attar", role: "External Domain Expert", department: "" },
              { name: "Mr. Jay Borhade", role: "Industry Expert", department: "" },
              { name: "Dr. Prashant Kasambe", role: "NBA/NAAC/NIRF Coordinator", department: "" },
              { name: "Prof. Anand Godbole", role: "Member", department: "" },
              { name: "Prof. Disha Sail", role: "Member", department: "" },
              { name: "Prof. Swapnali Kurhade", role: "Member", department: "" },
              { name: "Prof. Pramod Bide", role: "Member", department: "" },
              { name: "Dr. Sujnta Kulkarni", role: "Member", department: "" },
              { name: "Prof. Harshil Kanakia", role: "Member", department: "" },
              { name: "Dr. Deepak Karia", role: "Member", department: "" },
              { name: "Dr. Anand Mane", role: "Member", department: "" },
              { name: "Prof. Ananthalaxmi", role: "Member", department: "" },
              { name: "Smt. Pallavi More", role: "Administrative Member", department: "" },
              { name: "Mr. Vedant Agrawal", role: "Alumni Representative", department: "" },
              { name: "Mrs. Sphurti Asawa", role: "Student Representative", department: "" },
              { name: "Prof. Nitin M. Deshmukh", role: "Parent Representative", department: "" }
            ].map((member, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#02365E] to-[#30036B] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold">{member.name}</h4>
                <p className="text-[#FFD700] text-sm">{member.role}</p>
                {/* department is left blank as per your data */}
              </div>
            ))}
          </div>
          <p className="text-white/60 text-xs mt-4">
            *Representative in the category will be invited for the meeting
            as per the agenda. The committee may co-opt members from time to time as per the requirements.
          </p>
          <br />
          <p><h2 className='text-white font-bold'>Roles & Responsibilities</h2></p>
          <ul className='text-white/80 list-disc pl-6'>
            <li>To obtain the feedback regarding the evaluation and assessment methods</li>
            <li>To maintain up-to-date information for national and international accreditation.</li>
            <li>To contribute and lead academic audit (Internal/External).</li>
            <li>To work across the department to ensure a system to provide material and information necessary for AICTE, AISHE, NBA, NAAC etc.</li>
          </ul>
          <p></p>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          id="iqac-contact"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Contact IQAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Coordinator</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Prof. Sudhir Dhage</strong></p>
                <p>IQAC Coordinator</p>
                <p>Email: iqac@spit.ac.in</p>
                <p>Phone: +91 (22) 2670 7445</p>
                <p>Office: Administrative Block, Room 205</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-white/80">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
                <br />
                <p><strong>For urgent matters:</strong></p>
                <p>Emergency Contact: +91 98765 43210</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
