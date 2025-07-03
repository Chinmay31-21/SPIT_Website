import React from 'react';

export const RTI: React.FC = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-black">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Right to Information (RTI)</h1>
    <p className="mb-4">SPIT adheres to the provisions of the Right to Information Act 2005, ensuring transparency and accountability in its functioning. We have designated Public Information Officers to respond to queries under RTI.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>RTI Officer details and contact information publicly available.</li>
      <li>RTI requests accepted in prescribed format.</li>
      <li>Annual RTI reports submitted as per norms.</li>
    </ul>
    <a
      href="/assets/rti-disclosure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      RTI Details
    </a>
  </section>
);
