import React from 'react';

export const Tender: React.FC = () => (
   <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-black">
      <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Tenders</h1>
      <p className="mb-4">SPIT follows a transparent tendering process for procurement of goods and services, in line with government norms. All tenders are published with clear specifications, eligibility criteria, and deadlines.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Open and fair tendering policy.</li>
        <li>Published on our official website and government portals.</li>
        <li>Encourages participation from reputed vendors and service providers.</li>
      </ul>
      <a
        href="/assets/tenders.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        View Tender Notices
      </a>
    </section>
);
