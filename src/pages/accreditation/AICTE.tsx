import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle, Calendar, Download, Building, Users, BookOpen } from 'lucide-react';

export const AICTE = () => {
  const approvals = [
    {
      program: "B.Tech Computer Engineering",
      intake: 120,
      validity: "2024-2025",
      status: "Approved"
    },
    {
      program: "B.Tech Information Technology",
      intake: 60,
      validity: "2024-2025",
      status: "Approved"
    },
    {
      program: "B.Tech Electronics & Telecommunication",
      intake: 60,
      validity: "2024-2025",
      status: "Approved"
    },
    {
      program: "M.Tech Computer Engineering",
      intake: 18,
      validity: "2024-2025",
      status: "Approved"
    }
  ];

  const mandatoryDisclosures = [
    { title: "AICTE Approval Letter 2024-25", type: "PDF", size: "2.1 MB" },
    { title: "Faculty Details", type: "PDF", size: "1.8 MB" },
    { title: "Infrastructure Details", type: "PDF", size: "3.2 MB" },
    { title: "Fee Structure", type: "PDF", size: "0.9 MB" },
    { title: "Academic Calendar", type: "PDF", size: "1.2 MB" },
    { title: "Grievance Redressal Mechanism", type: "PDF", size: "1.5 MB" }
  ];

  const compliance = [
    "Faculty-Student Ratio maintained as per AICTE norms",
    "Infrastructure facilities as per AICTE requirements",
    "Library resources meeting AICTE standards",
    "Laboratory equipment and facilities updated",
    "Regular faculty development programs conducted",
    "Student feedback mechanism implemented",
    "Anti-ragging measures in place",
    "Grievance redressal cell operational"
  ];

  const facilities = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Infrastructure",
      details: ["Modern Classrooms", "Well-equipped Laboratories", "Library with Digital Resources", "Sports Complex"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Faculty",
      details: ["Qualified Teaching Staff", "Industry Experience", "Research Publications", "Continuous Training"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Resources",
      details: ["Updated Curriculum", "Industry Partnerships", "Research Projects", "Innovation Labs"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#4169E1] bg-clip-text text-transparent mb-8 text-center"
        >
          AICTE Approval & Compliance
        </motion.h1>

        {/* Status Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">AICTE Approved Institution</h2>
              <p className="text-[#4169E1]">All India Council for Technical Education</p>
            </div>
          </div>
          
          <div className="bg-black/50 rounded-lg p-4">
            <p className="text-white/80 leading-relaxed">
              Sardar Patel Institute of Technology is approved by the All India Council for Technical Education (AICTE) 
              for conducting undergraduate and postgraduate programs in engineering and technology. The institute maintains 
              full compliance with AICTE norms and regulations.
            </p>
          </div>
        </motion.div>

        {/* Approved Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">AICTE Approved Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approvals.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{program.program}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Intake:</span>
                    <span className="text-[#4169E1] font-semibold">{program.intake} seats</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Validity:</span>
                    <span className="text-white">{program.validity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Status:</span>
                    <span className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      {program.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities & Infrastructure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">AICTE Compliant Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#FFD700]">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                </div>
                <ul className="space-y-2">
                  {facility.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#4169E1]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance & Mandatory Disclosures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6">AICTE Compliance</h2>
            <div className="space-y-3">
              {compliance.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4169E1] mt-1 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
              <Download className="w-6 h-6" />
              Mandatory Disclosures
            </h2>
            <div className="space-y-4">
              {mandatoryDisclosures.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/50 rounded-lg hover:bg-black/70 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-white font-semibold">{doc.title}</h4>
                    <p className="text-white/60 text-sm">{doc.type} • {doc.size}</p>
                  </div>
                  <Download className="w-5 h-5 text-[#4169E1]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Important Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">AICTE Approval Details</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Institution Code:</strong> 1-2345678901</p>
                <p><strong>University:</strong> University of Mumbai</p>
                <p><strong>State:</strong> Maharashtra</p>
                <p><strong>Approval Status:</strong> Permanent Affiliation</p>
                <p><strong>Last Inspection:</strong> March 2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Key Statistics</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Total Intake:</strong> 258 students</p>
                <p><strong>Faculty Strength:</strong> 85 members</p>
                <p><strong>Student-Faculty Ratio:</strong> 15:1</p>
                <p><strong>Infrastructure Area:</strong> 47 acres</p>
                <p><strong>Library Books:</strong> 50,000+</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">AICTE Compliance Officer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Contact Details</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Dr. Amit Patel</strong></p>
                <p>AICTE Compliance Officer</p>
                <p>Email: aicte@spit.ac.in</p>
                <p>Phone: +91 (22) 2670 7446</p>
                <p>Office: Administrative Block, Room 301</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-white/80">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
                <br />
                <p><strong>For AICTE related queries:</strong></p>
                <p>compliance@spit.ac.in</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
