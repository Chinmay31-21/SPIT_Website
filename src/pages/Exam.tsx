// File: src/pages/Exam.tsx
import React from 'react';
import { Routes, Route, NavLink, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Example exam data (replace with real data/fetch as needed)
const examCards = [
  {
    title: "Fees Structure for the Academic Year 2023-24",
    link: "/exam/feestructure",
    date: "November 16th, 2024",
    type: "posted by administrator@spit.ac.in under Fees"
  },
  {
    title: "Regular Result Dec 2022",
    link: "/exam/examination",
    date: "Dec 2022",
    type: "Result"
  },
  {
    title: "Special Examination Odd Even Semester 2023-24 Gazettes",
    link: "/exam/specialexaminationoddevensemester202324gazettes",
    date: "November 15th, 2024",
    type: "posted by administrator@spit.ac.in under Rules"
  },
  {
    title: "Re-Examination January 2024 Results",
    link: "/exam/reexaminationjanuary2024results",
    date: "November 12th, 2024",
    type: "posted by administrator@spit.ac.in under Results"
  },
  {
    title: "Odd Semester Results 2023–24",
    link: "/exam/oddsemresults2324",
    date: "November 5th, 2024",
    type: "posted by administrator@spit.ac.in under Results"
  },
  // ...add more as needed
];
const FeeStructure = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
            Fees Structure for the Academic Year 2023-24
          </h1>
          <div className="text-white/70 text-sm mb-4">
            posted by{" "}
            <span className="font-semibold">administrator@spit.ac.in</span> on
            November 16th, 2024 under{" "}
            <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Fees</span>
          </div>
          <hr className="border-[#FFD700]/40 mb-6" />
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/2023-24.pdf">2023-24</a></span>
            </div>
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Special-Exam-July-2024.pdf">Special Exam July-2024</a></span>
                
             
            </div>
            <div>
             <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Special-Eexam-July-Aug-2024.pdf">Special Exam July-Aug-2024</a></span>
                
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Re-Exam-Grade-Improvement-Jan-2024.pdf">Re-Exam-Grade-Improvement Jan-2024</a></span>
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Re-Exam-Grade-Improvement-Jan-2024-1.pdf">Re-Exam-Grade-Improvement Jan-2024</a></span>
            </div> 
          </div>
          {/* Add link to Exam All Notifications */}
        </div>
      </section>
);

const SEOESGazettes = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
            Special Examination Odd Even Semester 2023-24 Gazettes
          </h1>
          <div className="text-white/70 text-sm mb-4">
            posted by{" "}
            <span className="font-semibold">administrator@spit.ac.in</span> on
            November 16th, 2024 under{" "}
            <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Rules</span>
          </div>
          <hr className="border-[#FFD700]/40 mb-6" />
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/DSE EXTC Odd SEM III August 2024 Special -Exam Gazette.pdf">DSE EXTC Odd SEM III August 2024 Special -Exam Gazette</a></span>
            </div>
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/DSE-AIML-Odd-SEM-III-August-2024-Special-Exam-Gazette.pdf">DSE AIML Odd SEM III August 2024 Special -Exam Gazette</a></span>
                
             
            </div>
            <div>
             <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/DSE-COMP-Odd-SEM-III-August-2024-Special-Exam-Gazette.pdf">DSE COMP Odd SEM III August 2024 Special -Exam Gazette</a></span>
                
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Comp-Odd-Sem-I-August-2024-Special-Examination-Gazette.pdf">Comp Odd Sem I August 2024 Special Examination Gazette</a></span>
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSE-Odd-Sem-I-August-2024-Special-Examination-Gazette.pdf">CSE Odd Sem I August 2024 Special Examination Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-Odd-Sem-I-August-2024-Special-Examination-Gazette.pdf">EXTC Odd Sem I August 2024 Special Examination Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-II-Comp-August-2024-Special-Exam-Gazette.pdf">Even SEM II Comp August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-II-CSE-August-2024-Special-Exam-Gazette.pdf">Even SEM II CSE August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-II-EXTC-August-2024-Special-Exam-Gazette.pdf">Even SEM II EXTC August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/DSE-Comp-Even-Sem-IV-Special-Exam-August-2024-Gazette.pdf">DSE Comp Even Sem IV Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/DSE-EXTC-Even-Sem-IV-Special-Exam-August-2024-Gazette.pdf">DSE EXTC Even Sem IV Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-VI-AIML-INHOUSE-Special-Exam-August-2024-Gazette.pdf">Even SEM VI AIML INHOUSE Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-VI-EXTC-INHOUSE-Special-Exam-August-2024-Gazette.pdf">Even SEM VI EXTC INHOUSE Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-VI-CSDS-INHOUSE-Special-Exam-August-2024-Gazette.pdf">Even SEM VI CSDS INHOUSE Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-SEM-VI-COMP-INHOUSE-Special-Exam-August-2024-Gazette.pdf">Even SEM VI COMP INHOUSE Special Exam August 2024 Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Odd-Sem-III-Aiml-August-2024-Special-Exam-Gazette.pdf">Odd Sem III Aiml August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Odd-Sem-III-Extc-August-2024-Special-Exam-Gazette.pdf">Odd Sem III Extc August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Odd-Sem-III-Comp-August-2024-Special-Exam-Gazette.pdf">Odd Sem III Comp August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Odd-Sem-III-Csds-August-2024-Special-Exam-Gazette.pdf">Odd Sem III Csds August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-Sem-IV-Comp-August-2024-Special-Exam-Gazette.pdf">Even Sem IV Comp August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-Sem-IV-Csds-August-2024-Special-Exam-Gazette.pdf">Even Sem IV Csds August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-Sem-IV-Aiml-August-2024-Special-Exam-Gazette.pdf">Even Sem IV Aiml August 2024 Special Exam Gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Even-Sem-IV-Extc-August-2024-Special-Exam-Gazette.pdf">Even Sem IV Extc August 2024 Special Exam Gazette</a></span>
            </div> 
          </div>
        </div>
      </section>
);

const ReExamSection = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
           Re-Examination January 2024 Results
          </h1>
          <div className="text-white/70 text-sm mb-4">
            posted by{" "}
            <span className="font-semibold">administrator@spit.ac.in</span>  on November 12th, 2024 under{" "}
            <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Rules</span>
          </div>
          <hr className="border-[#FFD700]/40 mb-6" />
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/COMP-SEM-V-Jan-2024-Re-Exam-.pdf">_COMP SEM V Jan 2024 Re – Exam</a></span>
            </div>
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/AIML-SEM-V-Jan-2024-Re-Exam-.pdf">AIML SEM V Jan 2024 Re -Exam</a></span>
                
             
            </div>
            <div>
             <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSDS-SEM-V-Jan-2024-Re-Exam-.pdf">CSDS SEM V Jan 2024 Re Exam</a></span>
                
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-V-Jan-2024-Re-exam.pdf">EXTC SEM V Jan 2024 Re exam</a></span>
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/COMP-SEM-I-Jan-2024-Re-Exam-.pdf">COMP SEM I Jan 2024 Re- Exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSE-SEM-I-Jan-2024-RE-Exam.pdf">CSE SEM I Jan 2024 RE – Exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-I-Jan-2024-Re-Exam.pdf">EXTC SEM I Jan 2024 Re -Exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/ETRX-SEM-VII-Jan-2024-Re-Exam-.pdf">ETRX SEM VII Jan 2024 Re- Exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-VII-Jan-2024-Re-Exam-.pdf">EXTC SEM VII Jan 2024 Re Exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FE-AIML-RE-EXAM-22-23-GAZETTE-SEM-I-JANUARY-2024.pdf">FE AIML RE EXAM 22-23 GAZETTE SEM I JANUARY 2024</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FE-AIML-SEM-II-RE-EXAM-22-23-GAZETTE-January-2024.pdf">FE AIML SEM II RE EXAM 22-23 GAZETTE January 2024</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FE-COMP-RE-EXAM-22-23-GAZETTE-SEM-I-JANUARY-2024.pdf">FE COMP RE EXAM 22-23 GAZETTE SEM I JANUARY 2024</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FE-COMP-RE-EXAM-GAZETTE-SEM-II-21-22-batch-Jan-2024-re-exam.pdf">FE COMP RE EXAM GAZETTE SEM II 21-22 batch Jan 2024 re exam</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FE-COMP-SEM-II-JANUARY-2024-RE-EXAM-22-23-batch.pdf">FE COMP SEM II JANUARY 2024 RE EXAM 22-23 batch</a></span>
            </div> 
          </div>
        </div>
      </section>
);

const OddSemResults2324 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
            Special Examination Odd Even Semester 2023-24 Gazettes
          </h1>
          <div className="text-white/70 text-sm mb-4">
            posted by{" "}
            <span className="font-semibold">administrator@spit.ac.in</span> on
            November 5th, 2024 under{" "}
            <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Rules</span>
          </div>
          <hr className="border-[#FFD700]/40 mb-6" />
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FINAL-RESULT-COMP-SEM-VII-DEC-2023-GAZETTE.pdf">FINAL RESULT COMP SEM VII DEC 2023 GAZETTE</a></span>
            </div>
            <div>
              <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FINAL-ETRX-SEM-VII-DEC-2023-GAZETTE.pdf">FINAL ETRX SEM VII DEC 2023 GAZETTE</a></span>
                
             
            </div>
            <div>
             <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FINAL-SEM-VII-EXTC-gazette-dec-2023.pdf">FINAL SEM VII EXTC gazette dec 2023</a></span>
                
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FINAL-BE-IT-SEM-VII-DEC-2023-gazette.pdf">FINAL BE IT SEM VII DEC 2023 gazette</a></span>
            </div>
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/MCA-SEM-III-DEC-2023-GAZETTE-NON-COMP-IT.pdf">MCA SEM III DEC 2023 GAZETTE NON COMP IT</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/MCA-SEM-III-DEC-2023-GAZETTE-comp-It.pdf">MCA SEM III DEC 2023 GAZETTE comp It</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FYMCA-SEM-I-Dec-2023-RESULT-NON-COMP-IT.pdf">FYMCA SEM I Dec 2023 RESULT NON COMP IT</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/FYMCA-SEM-I-Dec-2023-RESULT-COMP-IT.pdf">FYMCA SEM I Dec 2023 RESULT COMP IT</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-V-Dec-2023-gazette.pdf">EXTC SEM V Dec 2023 gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/AIML-SEM-V-Dec-2023-gazette.pdf">AIML SEM V Dec 2023 gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSDS-SEM-V-Dec-2023-gazette.pdf">CSDS SEM V Dec 2023 gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/COMP-SEM-V-Dec-2023-gazette.pdf">COMP SEM V Dec 2023 gazette</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Revised-DSE-COMP-SEM-III-Dec-2023.pdf">Revised DSE COMP SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Revised-DSE-AIML-SEM-III-Dec-2023.pdf">Revised DSE AIML SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Revised-DSE-EXTC-SEM-III-Dec-2023.pdf">Revised DSE EXTC SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/Revised-DSE-CSDS-SEM-III-Dec-2023.pdf">Revised DSE CSDS SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSE-SEM-I-Dec-2023.pdf">CSE SEM I Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/COMP-SEM-I-Dec-2023.pdf">COMP SEM I Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-I-Dec-2023.pdf">EXTC SEM I Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/AIML-SEM-III-Dec-2023.pdf">AIML SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/EXTC-SEM-III-Dec-2023.pdf">EXTC SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/CSDS-SEM-III-Dec-2023.pdf">CSDS SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/COMP-SEM-III-Dec-2023.pdf">COMP SEM III Dec 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/M-Tech-Computer-Engineering-Sem-III-2023-24-December-2023.pdf">M Tech Computer Engineering Sem III 2023-24 December 2023</a></span>
            </div> 
            <div>
               <span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="/assets/M-Tech-Computer-Engineering-Sem-I-2023-24-December-2023.pdf">M Tech Computer Engineering Sem I 2023-24 December 2023</a></span>
            </div> 
          </div>
          {/* Add link to Exam All Notifications */}
        
          {/* Add link to Exam All Notifications */}
        </div>
      </section>
);


const sections = [
  { id: "notifications", label: "All Notifications" },
  { id: "results", label: "Results" },
  { id: "fees", label: "Fees" },
  { id: "timetable", label: "Timetable" },
  { id: "manual", label: "Examination Manual" },
  { id: "staff", label: "Exam Staff" },
  { id: "contact", label: "Contact Us" },
];

// Section Components
const NotificationsSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">All Notifications</h2>
    <div className="responsive-grid">
      {examCards.map((card, idx) => (
        <div
          key={idx}
          className="card bg-black/30 backdrop-blur-lg p-5 flex flex-col justify-between min-h-[160px] hover:shadow-xl transition-all"
        >
          <div>
            <div className="text-lg font-semibold text-white mb-2">{card.title}</div>
            <div className="text-white/70 text-xs mb-4">{card.date} &middot; {card.type}</div>
          </div>
          {/* Use <Link> for internal navigation, <a> for external/PDF */}
          {card.link.startsWith('/exam/') ? (
            <Link
              to={card.link}
              className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
            >
              View Details
            </Link>
          ) : (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
            >
              View PDF
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

const ResultsSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Results</h2>
    <p>Latest exam results and archives will be listed here.</p>
  </section>
);

const FeesSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Fees</h2>
    <p>Examination fee details and payment instructions.</p>
  </section>
);

const TimetableSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Timetable</h2>
    <p>Upcoming and past exam timetables.</p>
  </section>
);

const ManualSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Examination Manual</h2>
    <p>Download the examination manual and guidelines.</p>
  </section>
);

const StaffSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Exam Staff</h2>
    <p>Contact details and roles of examination staff.</p>
  </section>
);

const ContactSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
    <p>For exam-related queries, contact examcell@spit.ac.in</p>
  </section>
);

// Standalone page for All Notifications only
export const ExamNotificationsPage = () => (
  <section className="container mx-auto px-4 py-12 max-w-6xl">
    <NotificationsSection />
  </section>
);

// Main Exams page with sidebar and sections
export const Exams = () => {
  const location = useLocation();
  const currentSection = location.pathname.split('/').pop() || "notifications";

  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/3 bg-[#E9E9E9] rounded-xl p-6 font-medium flex flex-col gap-2 min-w-[220px] max-w-xs">
          {sections.map((sec) => (
            <NavLink
              key={sec.id}
              to={`/exam/${sec.id}`}
              className={({ isActive }) =>
                `text-left px-4 py-2 rounded transition font-semibold ${
                  isActive || currentSection === sec.id
                    ? "bg-[#2B107E] text-[#FFD700]"
                    : "hover:text-[#2B107E] hover:bg-[#9AD4D6]/90"
                }`
              }
              end
            >
              {sec.label}
            </NavLink>
          ))}
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8">
          <Routes>
            <Route path="/feestructure" element={<FeeStructure />} />
            <Route path="/examination" element={<ReExamSection />} />
            <Route path="/oddsemresults2324" element={<OddSemResults2324 />} />
            <Route path="/reexaminationjanuary2024results" element={<ReExamSection />}/>
            <Route path="/specialexaminationoddevensemester202324gazettes" element={<SEOESGazettes />} />
            <Route path="/notifications" element={<NotificationsSection />} />
            <Route path="/results" element={<ResultsSection />} />
            <Route path="/fees" element={<FeesSection />} />
            <Route path="/timetable" element={<TimetableSection />} />
            <Route path="/manual" element={<ManualSection />} />
            <Route path="/staff" element={<StaffSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/" element={<NotificationsSection />} />
          </Routes>
        </main>
      </div>
    </section>
  );
};

