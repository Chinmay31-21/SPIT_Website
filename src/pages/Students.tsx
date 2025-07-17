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
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Anti-Ragging Policy: Ensuring a Safe and Respectful Campus</h2>
    
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <p className="text-lg mb-4">
          At SPIT, we are absolutely committed to fostering a **zero-tolerance environment towards ragging**. 
          Our primary goal is to nurture a campus where every student feels secure, respected, and empowered to thrive academically and personally, free from any fear or intimidation. 
          Ragging, in any form, is a severe criminal offense and will lead to strict disciplinary action as per UGC regulations and Indian law.
        </p>
        <p className="text-lg">
          Our comprehensive anti-ragging policy is designed to ensure the **well-being and security** of all individuals within our community. We actively promote a culture of mutual respect, harmony, and academic excellence, where positive interactions are encouraged and celebrated.
        </p>
        <p className="text-lg mt-4">
          <span className="font-bold">For a detailed understanding of our anti-ragging policies, guidelines, and available reporting mechanisms, please refer to the official document:</span>{' '}
          <a
            href="/assets/Ragging-UGC-27-June-2019 (1).pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
          >
            Click here to view the Anti-Ragging Policy PDF
          </a>
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: **Consider replacing with an image specific to SPIT or a more relevant stock image.**
          alt="Students interacting positively in a college environment, symbolizing safety and support."
          className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#00BFFF]/50"
        />
        <p className="text-center text-sm text-white/60 mt-2">
          Cultivating an atmosphere of respect and support among all students.
        </p>
      </div>
    </div>
    
    ---

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4 border-b-2 border-[#FFD700] pb-2">Understanding What Constitutes Ragging</h3>
    <p className="text-lg">
      Ragging encompasses any act that causes or is likely to cause annoyance, hardship, or psychological harm to a fresher or junior student. This broad definition includes, but is not limited to:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-lg">
      <li>Any **disorderly conduct**, whether through spoken words, written communication, or physical acts.</li>
      <li>Teasing, treating, or handling a fresher or junior student with **rudeness or disrespect**.</li>
      <li>Engaging in **rowdy or undisciplined activities** that disturb the peace of the campus.</li>
      <li>Causing **psychological harm, fear, or apprehension** in a student.</li>
      <li>Forcing a student to perform acts that lead to **shame, torment, embarrassment**, or adversely affect their self-respect.</li>
    </ul>

    ---

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4 border-b-2 border-[#FFD700] pb-2">Report an Incident: Your Voice Matters</h3>
    <p className="text-lg">
      If you, or anyone you know, experiences or witnesses an act of ragging, it is crucial to **report it immediately**. Your identity will be protected, and prompt action will be taken.
    </p>
    <p className="text-lg font-bold text-red-400">
      **National Anti-Ragging Helpline: 1800-180-5522** (Toll-Free, available 24x7)
    </p>
    <a
      href="https://www.antiragging.in/Complaint.aspx"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 text-lg font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 mt-4"
    >
      Register an Online Complaint Here
    </a>

    <h3 className="text-3xl font-bold text-[#FFD700] mt-8 mb-4 border-b-2 border-[#FFD700] pb-2">Additional Online Support</h3>
    <p className="text-lg">
      For further information, FAQs, and additional resources regarding anti-ragging initiatives and support, you can visit the official online portal:
    </p>
    <a
      href="https://www.antiragging.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 text-lg font-bold text-white bg-[#00BFFF] rounded-lg hover:bg-[#00A0E0] transition-all duration-300 mt-4"
    >
      Visit the National Anti-Ragging Portal
    </a>
  </div>
);
const Seva = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2">Seva: Social Education through Various Activities</h2>
    <p className="text-lg mb-4">
      The **SEVA initiative** at Sardar Patel Institute of Technology (SPIT) stands for "**Social Education through Various Activities**." This program is dedicated to encouraging students to participate actively in a diverse range of social and community-oriented endeavors, fostering a sense of social responsibility and civic engagement.
    </p>

    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold text-[#FFD700] mb-4 border-b-2 border-[#FFD700] pb-2">Key Activities and Contributions</h3>
        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>
            **Volunteering for Public Services:** Students actively volunteer for organizations like the Mumbai Fire Brigade, contributing to crucial public safety efforts.
          </li>
          <li>
            **Educational Support:** Assisting schools in improving their laboratories by developing experimental setups and educating economically disadvantaged children.
          </li>
          <li>
            **Disaster Relief:** Volunteering during national calamities such as earthquakes and floods, providing essential support to affected communities.
          </li>
          <li>
            **Environmental Initiatives:** Participating in tree planting and maintenance drives, and contributing to national campaigns like Swachh Bharat Abhiyan.
          </li>
          <li>
            **Digital Literacy:** Contributing to the Digital India initiative, promoting technological literacy and access.
          </li>
          <li>
            **Research and Awareness:** Engaging in field visits and scientific case studies on pressing rural and urban issues (e.g., traffic congestion), and conducting case studies on Indian culture.
          </li>
          <li>
            **Community Education:** Delivering voluntary lectures in village schools, sharing knowledge and inspiring younger generations.
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        {/* IMAGE PLACEHOLDER 1 */}
        <img
          src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Students engaged in a community service activity, like teaching or helping"
          className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#00BFFF]/50"
        />
        <p className="text-center text-sm text-white/60 mt-2">
          SPIT students actively participating in community service.
        </p>
      </div>
    </div>

    ---

    <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
      <div className="md:w-1/2 order-2 md:order-1">
        {/* IMAGE PLACEHOLDER 2 */}
        <img
          src="https://images.pexels.com/photos/593152/pexels-photo-593152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Students collaborating with an external organization, symbolizing partnerships"
          className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#00BFFF]/50"
        />
        <p className="text-center text-sm text-white/60 mt-2">
          Collaborating for a greater social impact.
        </p>
      </div>
      <div className="md:w-1/2 order-1 md:order-2">
        <h3 className="text-3xl font-bold text-[#FFD700] mb-4 border-b-2 border-[#FFD700] pb-2">Collaborations and Engagements</h3>
        <p className="text-lg mb-4">
          SPIT's SEVA program also collaborates with various reputable organizations to amplify its impact and reach:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>
            **Fire and Security Association of India (FSAI):** Working together on initiatives related to fire safety and security.
          </li>
          <li>
            **Make a Difference (MAD):** Partnering to empower children at risk through education.
          </li>
          <li>
            **Rally for Rivers (RFR):** Supporting efforts for river revitalization and environmental sustainability.
          </li>
        </ul>
        <p className="text-lg">
          Furthermore, SEVA promotes **Liberal Arts Education**, encouraging a holistic development approach that extends beyond technical studies.
        </p>
      </div>
    </div>

    <p className="text-lg mt-8 text-center">
      For more details on the Seva initiative at SPIT, you can visit the official page: {' '}
      <a
        href="https://www.spit.ac.in/seva/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
      >
        Learn more about SPIT Seva
      </a>
    </p>
  </div>
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