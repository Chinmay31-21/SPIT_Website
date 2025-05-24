import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, GraduationCap, Calculator } from 'lucide-react';

export const Admissions = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8"
        >
          Admissions
        </motion.h1>

        {/* Important Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Application Start",
              date: "March 1, 2024"
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Last Date",
              date: "April 30, 2024"
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Merit List",
              date: "May 15, 2024"
            },
            {
              icon: <Calculator className="w-8 h-8" />,
              title: "Fee Payment",
              date: "May 20-30, 2024"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <div className="text-[#FFD700] mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#00BFFF]">{item.date}</p>
            </div>
          ))}
        </motion.div>

        {/* Programs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Programs Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "B.Tech Computer Engineering",
                seats: 120,
                duration: "4 years"
              },
              {
                name: "B.Tech Information Technology",
                seats: 60,
                duration: "4 years"
              },
              {
                name: "B.Tech Electronics & Telecom",
                seats: 60,
                duration: "4 years"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{program.name}</h3>
                <div className="space-y-2 text-white/80">
                  <p>Seats: {program.seats}</p>
                  <p>Duration: {program.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Eligibility & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Eligibility Criteria</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Minimum 60% in PCM for 12th standard</li>
              <li>• Valid JEE Main score</li>
              <li>• Maharashtra State domicile (for state quota)</li>
              <li>• Passed HSC or equivalent examination</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Required Documents</h2>
            <ul className="space-y-3 text-white/80">
              <li>• JEE Main score card</li>
              <li>• 12th marksheet and passing certificate</li>
              <li>• Domicile certificate</li>
              <li>• Category certificate (if applicable)</li>
              <li>• Aadhar card</li>
            </ul>
          </motion.div>
        </div>

        {/* Fee Structure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-[#00BFFF]/30">
                  <th className="py-4 px-6 text-left">Category</th>
                  <th className="py-4 px-6 text-right">First Year</th>
                  <th className="py-4 px-6 text-right">Second Year</th>
                  <th className="py-4 px-6 text-right">Third Year</th>
                  <th className="py-4 px-6 text-right">Fourth Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#00BFFF]/30">
                  <td className="py-4 px-6">Open</td>
                  <td className="py-4 px-6 text-right">₹1,45,000</td>
                  <td className="py-4 px-6 text-right">₹1,45,000</td>
                  <td className="py-4 px-6 text-right">₹1,45,000</td>
                  <td className="py-4 px-6 text-right">₹1,45,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Reserved</td>
                  <td className="py-4 px-6 text-right">₹15,000</td>
                  <td className="py-4 px-6 text-right">₹15,000</td>
                  <td className="py-4 px-6 text-right">₹15,000</td>
                  <td className="py-4 px-6 text-right">₹15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};