import React from 'react';
import { motion } from 'framer-motion';

const PageSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black/30 p-6 rounded-lg shadow-md"
  >
    {children}
  </motion.div>
);

export const Grievance = () => (
  <section className="container mx-auto px-4 py-16 md:px-20 max-w-6xl text-black">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Grievance Redressal Cell</h1>
    <p className="mb-4">The Grievance Redressal Cell at SPIT aims to address complaints and concerns from students and staff in a confidential, timely, and effective manner. We are committed to promoting fairness and transparency.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Online and offline grievance submission forms.</li>
      <li>Regular meetings and prompt resolution.</li>
      <li>Feedback mechanism for students and faculty.</li>
    </ul>
    <a
      href="http://grievances.spit.ac.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      Submit or View Grievances
    </a>
  </section>
);