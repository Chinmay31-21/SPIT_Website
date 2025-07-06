import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const StudentsLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-8">Students</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-4">
          <nav className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-[#00BFFF]/30">
            <ul className="space-y-2">
              {[
                { path: "", title: "Overview" },
                { path: "scholarship", title: "Scholarship" },
                { path: "documents", title: "Document Collection" },
                { path: "transcript", title: "Online Transcript" },
                { path: "lor", title: "LOR System" },
                { path: "council", title: "Students Council" },
                { path: "rules", title: "Rules & Regulations" },
                { path: "activities", title: "Student Activities" },
                { path: "anti-ragging", title: "Anti-ragging" },
                { path: "seva", title: "Seva" },
                { path: "sports", title: "Sports" },
                { path: "oculus", title: "Oculus" },
                { path: "rotaract", title: "Rotaract Club" },
                { path: "alumni", title: "Alumni" }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-[#00BFFF]/10 rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="md:col-span-3 bg-black/30 backdrop-blur-md p-6 rounded-lg border border-[#00BFFF]/30">
          <Routes>
            <Route path="" element={<StudentsOverview />} />
            <Route path="scholarship" element={<Scholarship />} />
            <Route path="documents" element={<Documents />} />
            <Route path="transcript" element={<Transcript />} />
            <Route path="lor" element={<LOR />} />
            <Route path="council" element={<Council />} />
            <Route path="rules" element={<Rules />} />
            <Route path="activities" element={<Activities />} />
            <Route path="anti-ragging" element={<AntiRagging />} />
            <Route path="seva" element={<Seva />} />
            <Route path="sports" element={<Sports />} />
            <Route path="oculus" element={<Oculus />} />
            <Route path="rotaract" element={<Rotaract />} />
            <Route path="alumni" element={<Alumni />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const StudentsOverview = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-[#FFD700]">Student Life at SPIT</h2>
    <p className="text-white/80 leading-relaxed">
      SPIT offers a vibrant campus life with numerous opportunities for academic, professional, and personal growth. From technical clubs to cultural activities, students can engage in a wide range of extracurricular activities.
    </p>
    <img
      src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
      alt="Student Life"
      className="w-full h-79 object-cover rounded-lg"
    />
  </div>
);

// Placeholder components for other routes
const Scholarship = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-4 border-b-2 border-[#FFD700] pb-2">Vidya Lakshmi Portal</h2>
    <p>
      National Securities Depository Limited (NSDSL) e-Governance Infrastructure Ltd., has developed Vidya Lakshmi Portal. 
      This portal has facilities of education loan, scholarship, and other student-friendly facilities through one link. 
      The portal is a gateway to Banks for education loans and also has linkages with the National e-Scholarship Portal (NeSP).
    </p>
    <p>
      40 banks have been registered so far, and 71 loan schemes have been uploaded in Vidya Lakshmi Portal.
    </p>
    <p>
      <span className="font-bold">Link to:</span>{' '}
      <a
        href="https://www.vidyalakshmi.co.in/Students/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        Vidya Lakshmi Portal
      </a>
    </p>

    <h2 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4 border-b-2 border-[#FFD700] pb-2">National Scholarship Foundation</h2>
    <p>
      The National Scholarship Foundation provides various scholarship opportunities for students to support their education and career growth. 
      It aims to empower students by offering financial assistance and resources to achieve their academic goals.
    </p>
    <p>
      <span className="font-bold">Link to:</span>{' '}
      <a
        href="https://nsfoundation.co.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        National Scholarship Foundation
      </a>
    </p>
  </div>
);
const Documents = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Document Collection After Graduation</h2>
    <p className="text-lg">
      Students can collect their official documents, such as transcripts, degree certificates, and other records, after graduation. 
      Ensure you follow the guidelines and procedures for document collection to avoid delays.
    </p>
    <p className="text-lg">
      <span className="font-bold">To know more:</span>{' '}
      <a
        href="/assets/Doc_collection_process.pdf" // Replace with the actual path to the PDF
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        Click here to view the guidelines
      </a>
    </p>
  </div>
);
const Transcript = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Online Transcripts</h2>
    <p className="text-lg">
      <span className="font-bold text-red-500">
        To apply for transcripts online,{' '}
        <a
          href="https://truecopy.in/transcripts/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#FFD700] transition-all duration-300"
        >
          click here
        </a>
      </span>{' '}
      (for current students and past students applying to other universities for higher education).
    </p>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">How it works</h3>
    <h4 className="text-2xl font-bold text-[#FFD700] mb-4">Transcripts</h4>
    <p className="text-lg">
      You now have to submit your transcript application for approval online from{' '}
      <a
        href="https://spit.truecopy.in/v2/files/submitdoctranscript.tc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        here
      </a>
      . When you submit your transcript for approval, you will be directed to a payment gateway for making an online payment. There is a fee of Rs 3239/- for getting your transcript approved. Once you have made your payment, your document is forwarded for review. After your transcript is approved by the Institute (may take 2-3 days), you will receive an email with a stamped PDF version of your approved transcript and 3 attested hard copies that Truecopy will courier to the applicant’s local address. You can use the PDF to upload with your online application to US universities. This approved PDF will also be retained in the S.P.I.T. account on Truecopy for future use if required by the student.
    </p>
    <p className="text-lg">
      If you need to send official transcripts to universities, you now have two options:
    </p>
    <ol className="list-decimal pl-6 space-y-4 text-lg">
      <li>
        <span className="font-bold">eTranscripts:</span> S.P.I.T. can send eTranscripts to most universities in the US. (See{' '}
        <a
          href="https://www.aacrao.org/resources/resources-detail-view/it-s-here--authentic-indian-transcripts-sent-via-the-parchment-exchange-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          http://www.aacrao.org/resources/resources-detail-view/it-s-here-authentic-indian-transcripts-sent-via-the-parchment-exchange-platform
        </a>
        ). To send eTranscripts, you can apply online specifying the recipient university, and the eTranscript will go directly from S.P.I.T. You will receive acknowledgment of delivery in email. The charge for this service is Rs. 885/- per destination.
      </li>
      <li>
        <span className="font-bold">Paper Transcripts:</span> You can send stamped paper transcripts to universities as well by applying online. Truecopy will courier to the applicant’s local address or to the overseas address as requested. The cost of this is Rs. 472/- per copy to local address and Rs. 1888/- to overseas universities.
      </li>
    </ol>
  </div>
);
const LOR = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">LOR System</h2>
    <p className="text-lg">
      The Letter of Recommendation (LOR) system at SPIT provides students with a streamlined process to request and manage their LORs for higher education or professional opportunities. 
      Faculty members can review and approve LOR requests efficiently, ensuring timely delivery of recommendations.
    </p>
    <p className="text-lg">
      The system is designed to simplify the process and maintain transparency, making it easier for students to apply to universities or organizations worldwide.
    </p>
    <a
      href="https://lor.spit.ac.in/login"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 text-lg font-bold text-white bg-[#FFD700] rounded-lg hover:bg-[#FFC300] transition-all duration-300"
    >
      Learn More
    </a>
  </div>
);
const Council = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-5xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Student Council</h2>
    <p className="text-xl">
      The Student Council at SPIT serves as the voice of the student body, fostering communication between students and the administration. 
      It organizes various events, promotes extracurricular activities, and ensures the welfare of students. 
      The council is committed to creating a vibrant and inclusive campus environment where every student feels empowered to contribute and grow.
    </p>
    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Roles and Responsibilities</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li>Acting as a bridge between students and the administration to address concerns and suggestions.</li>
      <li>Organizing cultural, technical, and sports events to promote holistic development.</li>
      <li>Encouraging student participation in extracurricular activities and fostering leadership skills.</li>
      <li>Ensuring the welfare and inclusivity of all students on campus.</li>
      <li>Representing SPIT at intercollegiate events and competitions.</li>
    </ul>
    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Major Events Organized</h3>
    <p className="text-lg">
      The Student Council organizes several flagship events throughout the year, including:
    </p>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li><span className="font-bold">Oculus:</span> SPIT's annual technical and cultural fest, featuring workshops, competitions, and performances.</li>
      <li><span className="font-bold">Sports Week:</span> A week-long celebration of sportsmanship and athleticism with various tournaments.</li>
      <li><span className="font-bold">Seva:</span> Community service initiatives aimed at giving back to society.</li>
      <li><span className="font-bold">Rotaract Club Activities:</span> Leadership and social service programs under the Rotaract Club.</li>
    </ul>
    <p className="text-lg">
      <span className="font-bold">To know more:</span>{' '}
      <a
        href="/assets/Student_Council.pdf" // Replace with the actual path to the PDF
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        Click here to view the Student Council PDF
      </a>
    </p>
  </div>
);
const Rules = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-5xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Rules & Regulations</h2>
    <p className="text-xl">
      SPIT is committed to maintaining a disciplined and respectful environment for all students. The rules and regulations are designed to ensure the safety, integrity, and academic excellence of the institution. Students are expected to adhere to the code of conduct and uphold the values of SPIT.
    </p>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">General Rules</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li>Students must carry their ID cards at all times while on campus.</li>
      <li>Attendance in classes and labs is mandatory, and students must meet the minimum attendance criteria.</li>
      <li>Use of mobile phones during lectures and labs is strictly prohibited.</li>
      <li>Students must maintain cleanliness and avoid littering on campus.</li>
      <li>Any form of misconduct, including bullying or harassment, will result in strict disciplinary action.</li>
    </ul>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Academic Integrity</h3>
    <p className="text-lg">
      SPIT places a strong emphasis on academic integrity. Students are expected to:
    </p>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li>Submit original work and avoid plagiarism in assignments and projects.</li>
      <li>Refrain from cheating during examinations or assessments.</li>
      <li>Respect intellectual property rights and acknowledge sources appropriately.</li>
    </ul>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Code of Conduct</h3>
    <p className="text-lg">
      The Code of Conduct outlines the expected behavior of students on campus. It includes guidelines for maintaining decorum, respecting faculty and peers, and adhering to institutional policies.
    </p>
    <p className="text-lg">
      <span className="font-bold">To know more:</span>{' '}
      <a
        href="/assets/Code-of-conduct-for-students.pdf" // Replace with the actual path to the PDF
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        Click here to view the Code of Conduct for Students
      </a>
    </p>
  </div>
);
const Activities = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-5xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Student Activities</h2>
    <p className="text-xl">
      SPIT offers a vibrant campus life with numerous opportunities for students to engage in academic, cultural, and social activities. 
      These activities are designed to foster holistic development, leadership skills, and a sense of community among students.
    </p>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Technical Clubs</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li><span className="font-bold">CSI-SPIT:</span> The Computer Society of India chapter at SPIT organizes workshops, hackathons, and coding competitions.</li>
      <li><span className="font-bold">IEEE-SPIT:</span> The IEEE chapter promotes innovation and research through technical events and seminars.</li>
      <li><span className="font-bold">Robotics Club:</span> A platform for students to explore robotics and automation through hands-on projects.</li>
    </ul>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Cultural Activities</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li><span className="font-bold">Drama Club:</span> A space for students to showcase their acting and storytelling skills.</li>
      <li><span className="font-bold">Music Club:</span> Encourages students to explore their musical talents through performances and jam sessions.</li>
      <li><span className="font-bold">Dance Club:</span> A vibrant community for students passionate about dance.</li>
    </ul>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Social Initiatives</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li><span className="font-bold">Rotaract Club:</span> Focuses on leadership and community service through various initiatives.</li>
      <li><span className="font-bold">Seva:</span> A platform for students to contribute to social causes and give back to society.</li>
    </ul>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Sports</h3>
    <p className="text-lg">
      SPIT encourages students to participate in sports and physical activities to promote teamwork, discipline, and a healthy lifestyle. 
      The annual Sports Week features tournaments in cricket, football, basketball, and more.
    </p>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4">Flagship Events</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg">
      <li><span className="font-bold">Oculus:</span> SPIT's annual technical and cultural fest, featuring workshops, competitions, and performances.</li>
      <li><span className="font-bold">Hackathons:</span> Opportunities for students to showcase their coding and problem-solving skills.</li>
    </ul>
  </div>
);
const AntiRagging = () => (
  <div className="text-white/80">Anti-ragging Content</div>
);
const Seva = () => (
  <div className="text-white/80">Seva Content</div>
);
const Sports = () => (
  <div className="text-white/80">Sports Content</div>
);
const Oculus = () => (
  <div className="text-white/80">Oculus Content</div>
);
const Rotaract = () => (
  <div className="text-white/80">Rotaract Club Content</div>
);
const Alumni = () => (
  <div className="text-white/80">Alumni Content</div>
);

export const Students = StudentsLayout;