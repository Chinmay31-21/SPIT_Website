import React from 'react';

// Mandatory Disclosure Page
export const MandatoryDisclosure = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Mandatory Disclosure</h1>
    <p className="mb-4">Sardar Patel Institute of Technology is committed to transparency and compliance with the regulations set by AICTE and other statutory bodies. The mandatory disclosure document contains detailed information about our governance, programs, faculty, infrastructure, financial status, and other institutional data required to ensure quality and accountability in higher education.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>AICTE Approval:</strong> Regularly updated approval letters from AICTE for all programs.</li>
      <li><strong>Governing Body:</strong> Composition of the governing body including industry experts, academicians, and representatives from management.</li>
      <li><strong>Faculty Details:</strong> Qualifications, experience, and designations of all teaching staff.</li>
      <li><strong>Infrastructure:</strong> Availability of laboratories, classrooms, internet, and library resources.</li>
      <li><strong>Financial Resources:</strong> Annual budgets and audited financial statements.</li>
      <li><strong>Student Admissions:</strong> Year-wise student intake and admission statistics.</li>
      <li><strong>Placement Record:</strong> Statistics on student placements and recruiters.</li>
    </ul>
    <p className="mt-6">To view or download the full Mandatory Disclosure document, please click below:</p>
    <a
      href="/assets/mandatory-disclosure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      View PDF
    </a>
  </section>
);

// IQAC Page
export const IQAC = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Internal Quality Assurance Cell (IQAC)</h1>
    <p className="mb-4">The IQAC at SPIT plays a pivotal role in maintaining and enhancing the quality of education. It ensures systematic academic planning, execution, and continuous improvement through feedback and innovation.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Ensures continuous academic excellence and administrative improvements.</li>
      <li>Organizes academic and administrative audits.</li>
      <li>Promotes quality culture through workshops and best practices.</li>
      <li>Maintains institutional data for decision-making.</li>
    </ul>
    <a
      href="/assets/iqac-report.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      Download IQAC Report
    </a>
  </section>
);

// NIRF Page
export const NIRF = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">National Institutional Ranking Framework (NIRF)</h1>
    <p className="mb-4">SPIT participates in the annual NIRF ranking exercise conducted by the Ministry of Education, Government of India. This promotes competitive excellence and transparency in institutional performance.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Annual submissions for Engineering and Overall categories.</li>
      <li>Performance measured across Teaching, Learning, Research, Graduation Outcomes, Outreach, and Perception.</li>
    </ul>
    <a
      href="https://www.nirfindia.org"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      Visit NIRF Portal
    </a>
  </section>
);

// NAAC Page
export const NAAC = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">NAAC Accreditation</h1>
    <p className="mb-4">SPIT is accredited by the National Assessment and Accreditation Council (NAAC), reaffirming our commitment to excellence in higher education through regular assessment and institutional performance improvement.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Achieved NAAC Accreditation with a strong score.</li>
      <li>Regular self-assessment and strategic quality enhancement.</li>
      <li>Participation in SSR (Self Study Reports) and peer team visits.</li>
    </ul>
    <a
      href="/assets/naac-report.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      View NAAC Report
    </a>
  </section>
);

// Tender Page
export const Tender = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
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

// Anti-Ragging Policy Page
export const AntiRagging = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Anti-Ragging Policy</h1>
    <p className="mb-4">SPIT maintains a strict anti-ragging policy in compliance with UGC guidelines. Any act of ragging is treated with zero tolerance and strict disciplinary action.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Anti-ragging committee and squad formation every academic year.</li>
      <li>Regular awareness sessions and affidavit submission from students and parents.</li>
      <li>Online complaint redressal mechanism.</li>
    </ul>
    <a
      href="/assets/anti-ragging-policy.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      Download Policy Document
    </a>
  </section>
);

// RTI Page
export const RTI = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
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

// Grievance Page
export const Grievance = () => (
  <section className="px-6 py-16 md:px-20 max-w-6xl mx-auto text-white">
    <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Grievance Redressal Cell</h1>
    <p className="mb-4">The Grievance Redressal Cell at SPIT aims to address complaints and concerns from students and staff in a confidential, timely, and effective manner. We are committed to promoting fairness and transparency.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Online and offline grievance submission forms.</li>
      <li>Regular meetings and prompt resolution.</li>
      <li>Feedback mechanism for students and faculty.</li>
    </ul>
    <a
      href="/assets/grievance-policy.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-2 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      Submit or View Grievances
    </a>
  </section>
);
