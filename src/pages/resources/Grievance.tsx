import React from 'react';

export const Grievance: React.FC = () => (
   <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Grievance Redressal Cell</h1>
    <p className="mb-4">The Grievance Redressal Cell at SPIT aims to address complaints and concerns from students and staff in a confidential, timely, and effective manner. We are committed to promoting fairness and transparency.</p>
    <ul className="list-disc pl-6 space-y-2 light:text-grey dark:text-white">
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