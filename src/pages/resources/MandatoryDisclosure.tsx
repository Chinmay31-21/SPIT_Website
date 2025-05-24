import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export const MandatoryDisclosure = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8"
        >
          Mandatory Disclosure
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Latest Disclosures</h2>
            <div className="space-y-4">
              {[
                "AICTE Mandatory Disclosure 2023-24",
                "Financial Statements 2023",
                "Academic Performance Report",
                "Infrastructure Details",
                "Faculty Information"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#00BFFF]" />
                    <span className="text-white">{item}</span>
                  </div>
                  <button className="p-2 hover:bg-[#00BFFF]/10 rounded-full transition-colors">
                    <Download className="text-[#00BFFF]" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Important Information</h2>
              <ul className="space-y-3 text-white/80">
                <li>• Approved Intake</li>
                <li>• Student Enrollment</li>
                <li>• Faculty Details</li>
                <li>• Infrastructure Information</li>
                <li>• Research Publications</li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact for Information</h2>
              <p className="text-white/80 mb-4">
                For any queries regarding mandatory disclosures, please contact:
              </p>
              <div className="text-white/80">
                <p>Email: info@spit.ac.in</p>
                <p>Phone: +91 (22) 2670 7440</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};