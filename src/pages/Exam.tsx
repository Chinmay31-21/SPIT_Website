// File: src/pages/Exam.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { Routes, Route, NavLink, useLocation, Link } from 'react-router-dom';

// --- 1. CONSOLIDATED & EXPANDED DATA SOURCE ---
// This single array now powers all notification-based sections.
const examCards = [
  {
    title: "Fees Structure for the Academic Year 2023-24",
    link: "/exam/feestructure",
    date: "November 16th, 2024",
    type: "posted by administrator@spit.ac.in under Fees",
    category: ["fees"]
  },
  {
    title: "Special Examination Odd/Even Semester 2023-24 Gazettes",
    link: "/exam/specialexaminationoddevensemester202324gazettes",
    date: "November 15th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Re-Examination January 2024 Results",
    link: "/exam/reexaminationjanuary2024results",
    date: "November 12th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Odd Semester Results 2023–24",
    link: "/exam/oddsemresults2324",
    date: "November 5th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Even Semester Results 2023–24",
    link: "/exam/evensemresults2324",
    date: "October 26th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "PGDUX Results 2022-23",
    link: "/exam/pgduxresults2223",
    date: "October 26th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Re-Examination Even Semester 2023-24 Gazettes",
    link: "/exam/reexamevensem2324",
    date: "August 15th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "GRADE IMPROVEMENT EXAMINATION III AND IV RESULTS JULY 2023 AND AUGUST 2023",
    link: "/exam/giejulyaug2023",
    date: "April 23rd, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Sem V ETRX March 2024 Re Examination result",
    link: "#",
    date: "March 6th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "MCA SEM VI JAN 2024 RE EXAM RESULT",
    link: "#",
    date: "January 30th, 2024",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Odd Semester 2022-23",
    link: "/exam/oddsem2223",
    date: "January 22nd, 2024",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["announcements", "exam", "results"]
  },
  {
    title: "Even Semester 2022-23",
    link: "/exam/evensem2223",
    date: "January 22nd, 2024",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["announcements", "exam", "results"]
  },
  {
    title: "B tech sem VII IT Nov2023 Re Examination",
    link: "/exam/btechsemviitnov2023reexam",
    date: "December 14th, 2023",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["results"]
  },
  {
    title: "T.E. Even Semester VI November 2020 Re-examination (2018-19 batch)",
    link: "/exam/teeevensemvi2020reexam",
    date: "August 24th, 2023",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["results"]
  },
  {
    title: "M Tech Comp Sem III & IV July 2023 Batch 2019-21 result",
    link: "/exam/mtechcompsemiiiivjuly2023batch201921result",
    date: "August 24th, 2023",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["results"]
  },
  {
    title: "Special Exam fail students list of FE SE TE and SYMCA for aug 2023",
    link: "/exam/special-exam-fail-students-list",
    date: "August 24th, 2023",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["notifications", "results"]
  },
  {
    title: "Fees Structure for the Academic Year 2022-23",
    link: "/exam/fees-structure-2022-23",
    date: "July 31st, 2023",
    type: "posted by administrator@spit.ac.in under Fees",
    category: ["fees"]
  },
  {
    title: "Re examination result March 2023",
    link: "/exam/re-examination-result-march-2023",
    date: "July 4th, 2023",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Re examination result August 2022",
    link: "/exam/re-examination-result-august-2022",
    date: "June 19th, 2023",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "ESE Examination Time Table May 2023",
    link: "/exam/ese-examination-time-table-may-2023",
    date: "May 19th, 2023",
    type: "posted by administrator@spit.ac.in under Timetable",
    category: ["timetable"]
  },
  {
    title: "Failed Students list 0f 2021-22 & 2022-23",
    link: "/exam/failed-students-list-2021-22-2022-23",
    date: "May 4th, 2023",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "Even Semester May 2023 exam Notice",
    link: "/exam/even-semester-may-2023-exam-notice",
    date: "April 20th, 2023",
    type: "posted by administrator@spit.ac.in under notifications",
    category: ["notifications"]
  },
  {
    title: "Re Examination Result Sem VIII comp September 2022",
    link: "/exam/re-examination-result-sem-viii-comp-september-2022",
    date: "April 6th, 2023",
    type: "posted by administrator@spit.ac.in under Results",
    category: ["results"]
  },
  {
    title: "older notifications",
    link: "/exam/older-notifications",
    date: "",
    type: "posted by administrator@spit.ac.in under notifications",
    category: ["notifications"]
  },
  ,
];

// --- 2. DETAIL PAGE COMPONENTS (for links in examCards) ---

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
            Odd Semester Results 2023–24
          </h1>
          <div className="text-white/70 text-sm mb-4">
            posted by{" "}
            <span className="font-semibold">administrator@spit.ac.in</span> on
            November 5th, 2024 under{" "}
            <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Results</span>
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
const EvenSemResults2324 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
        EVEN SEM Results 2023-24
      </h1>
      <div className="text-white/70 text-sm mb-4">
        posted by{" "}
        <span className="font-semibold">administrator@spit.ac.in</span> on
        October 28th, 2024 under{" "}
        <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Results</span>
      </div>
      <hr className="border-[#FFD700]/40 mb-6" />
      <div className="flex flex-col gap-4 mt-4">
        {/* Content from the image */}
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FYMCA SEM II MAY 2024 NON COMP IT GAZETTE</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FYMCA SEM II MAY 2024 COMP IT GAZETTE</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">COMP SEM II MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">EXTC SEM II MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">CSE SEM II MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE EXTC SEM IV MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE AIML SEM IV MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE COMP SEM IV MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE CSDS SEM IV MAY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FINAL COMP SEM IV May 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FINAL CSDS SEM IV May 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FINAL EXTC SEM IV May 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FINAL AIML SEM IV May 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">TE EXTC SEM VI RESEARCH INTERSHIP JULY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">TE AIML SEM VI RESEARCH INTERSHIP JULY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">TE COMP SEM VI RESEARCH INTERSHIP JULY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">TE CSDS SEM VI RESEARCH INTERSHIP JULY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SYMCA SEM IV JULY 2024 RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">COMP SEM VIII MAY 2024 INHOUSE RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">EXTC SEM VIII MAY 2024 INHOUSE RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">ETRX SEM VIII MAY 2024 INHOUSE RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">IT SEM VIII MAY 2024 INHOUSE RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">COMP SEM VIII INTERNSHIP RESULT JULY 2024</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">ETRX SEM VIII JULY 2024 INTERNSHIP RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">IT SEM VIII july 2024 internship result</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">EXTC SEM VIII JULY 2024 INTERNSHIP RESULT</a></span></div>
      </div>
    </div>
  </section>
);
const PGDUXResults2324 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
        EVEN SEM Results 2023-24
      </h1>
      <div className="text-white/70 text-sm mb-4">
        posted by{" "}
        <span className="font-semibold">administrator@spit.ac.in</span> on
        October 28th, 2024 under{" "}
        <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Results</span>
      </div>
      <hr className="border-[#FFD700]/40 mb-6" />
      <div className="flex flex-col gap-4 mt-4">
        {/* Content from the image */}
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">PGDUX SEM I MARCH 2023 RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem II PGD UX Result July 2023</a></span></div>
      </div>
    </div>
  </section>
);
const ReExamEvenSem2324 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
        Re-Examination Even Semester 2023-24 Gazettes
      </h1>
      <div className="text-white/70 text-sm mb-4">
        posted by{" "}
        <span className="font-semibold">administrator@spit.ac.in</span> on
        August 18th, 2024 under{" "}
        <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Results</span>
      </div>
      <hr className="border-[#FFD700]/40 mb-6" />
      <div className="flex flex-col gap-4 mt-4">
        {/* Content from the image */}
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem EXTC Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem COMP Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem CSDS Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem AIML Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem AIML Sem VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem COMP Sem VI July 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem AIML Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem COMP Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem COMP Sem II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem CSDS Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem CSDS Sem VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem CSE Sem II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC Sem II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC Sem VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem IT Sem VIII July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Aiml SemI V July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Comp Sem II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem CSDS Sem II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC SEM II JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Comp SEM IV JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem CSDS Sem IV JULY 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem AIML SEM IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem COMP Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem CSDS Sem IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSE Even Sem EXTC SEM IV July 2024 Re Exam Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Comp SEM VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Aiml SEM VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem EXTC SEM VI JULY 2024 Re Exam In House Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Even Sem Csds SEM VI JULY 2024 Re Exam In House Gazette</a></span></div>
      </div>
    </div>
  </section>
);
const GIEJulyAug2324 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
        Re-Examination Even Semester 2023-24 Gazettes
      </h1>
      <div className="text-white/70 text-sm mb-4">
        posted by{" "}
        <span className="font-semibold">administrator@spit.ac.in</span> on
        August 18th, 2024 under{" "}
        <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Results</span>
      </div>
      <hr className="border-[#FFD700]/40 mb-6" />
      <div className="flex flex-col gap-4 mt-4">
        {/* Content from the image */}
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III AIML GRADE IMPROVEMENT EXAMINATION AUG 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III CSDS GRADE IMPROVEMENT EXAMINATION AUG 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III EXTC GRADE IMPROVEMENT EXAMINATION AUG 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">EXTC SEM IV July 2023 GRADE improvement</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">CSDS SEM IV July 2023 GRADE IMPROVEMENT</a></span></div>
      </div>
    </div>
  </section>
);
const OddSem2223 = () => (
  <section className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
        Odd Semester 2022-23
      </h1>
      <div className="text-white/70 text-sm mb-4">
        posted by{" "}
        <span className="font-semibold">administrator@spit.ac.in</span> on
        January 22nd, 2024 under{" "}
        <span className="text-[#FFD700] hover:text-[#F7ACCF] font-semibold">Announcements, EXAM, Results</span>
      </div>
      <hr className="border-[#FFD700]/40 mb-6" />
      <div className="flex flex-col gap-4 mt-4">
        {/* Content from the images */}
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSY CSDS SEM III JAN 2023 EXAMINATION</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSY AIML SEM III JAN 2023 EXAMINATION</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSY COMP SEM III JAN 2023 EXAMINATION</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">DSY EXTC SEM III JAN 2023 RESULT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SYMCA SEM III MAY 2023 NON COMP IT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Final MCA SEM I NON COMP IT March 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Final MCA SEM I March 2023 comp IT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SYMCA SEM III MAY 2023 COMP IT</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 1 OCT 2023 RE EXAM</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 4 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 2 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 3 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 1 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 5 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 8 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 6 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 7 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 9 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 10 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 11 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 13 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 12 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 14 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 15 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII ETRX GR 16 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem V IT finSEM VII COMP GR 5 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 1 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 3 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 2 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 4 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 6 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 9 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 10 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 7 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 8 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 11 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 12 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 14 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 13 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 15 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">SEM VII COMP GR 16 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Oct 2023 Sem VII EXTC GR 3 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">OCT 2023 Sem VII EXTC GR 7 Re examination</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 2 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 3 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 1 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 5 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 4 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 6 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII EXTC GR 7 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">RE EXAM GOPANI Sem VII IT GR 8 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">OCT 2023 Re Exam Sem VII IT GR 8 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">KUDE SHARLI RE EXAMINATION Sem VII IT GR 5 OCT 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 2 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 1 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 6 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 4 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 7 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 5 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 3 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 12 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 11 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 10 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 8 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 9 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 13 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 16 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 14 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 17 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 15 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 19 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 18 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 21 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 22 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 20 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem VII IT GR 23 DEC 2022 Gazette</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem V COMP final result dec 2022 (2)</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">_FE AIML FINAL GAZETTE SEM I MARCH 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">_FE COMP FINAL GAZETTE SEM I MARCH 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">FE EXTC FINAL GAZETTE SEM I March 2023</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III AIML Final Result Dec 2022</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III COMP Final Result Dec 2022</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III CSDS Final Result Dec 2022</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem III EXTC Final Result Dec 2022</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem V ETRX final result dec 2022 (2)</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">Sem V EXTC final result dec 2022 (2)</a></span></div>
        <div><span className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg"><a href="#">_FE CSDS FINAL GAZETTE SEM I March 2023</a></span></div>
      </div>
    </div>
  </section>
);
// New Detail Page Components
const ExamTimetableNovDec2024 = () => (
    <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow-lg animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">Regular End Semester Examination Timetable - Nov/Dec 2024</h1>
        <div className="text-white/70 text-sm mb-4">posted on November 17th, 2024 under <span className="text-[#FFD700] font-semibold">Timetable</span></div>
        <hr className="border-[#FFD700]/40 mb-6" />
        <p className="mb-4">The timetable for the upcoming end-semester examinations is now available. Please download the relevant PDF for your branch and semester.</p>
        <div className="flex flex-col gap-4 mt-4">
            <div><a href="#" className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg">First Year (All Branches)</a></div>
            <div><a href="#" className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg">Computer & AIML/CSDS</a></div>
            <div><a href="#" className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg">EXTC & ETRX</a></div>
        </div>
    </section>
);
const ExamRules2024 = () => (
    <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow-lg animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">Updated Examination Rules and Regulations 2024</h1>
        <div className="text-white/70 text-sm mb-4">posted on November 16th, 2024 under <span className="text-[#FFD700] font-semibold">Rules</span></div>
        <hr className="border-[#FFD700]/40 mb-6" />
        <p>All students are required to read and adhere to the updated examination rules and regulations. The document covers guidelines on conduct, grading, and re-evaluation procedures.</p>
        <div className="mt-4">
             <a href="#" className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg">Download Rules & Regulations PDF</a>
        </div>
    </section>
);
const ExaminationManual2024 = () => (
     <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow-lg animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">Examination Manual for Students & Faculty (2024 Edition)</h1>
        <div className="text-white/70 text-sm mb-4">posted on November 10th, 2024 under <span className="text-[#FFD700] font-semibold">Manual</span></div>
        <hr className="border-[#FFD700]/40 mb-6" />
        <p>This comprehensive manual provides detailed procedures for all examination-related activities. It is a critical resource for both students and faculty members.</p>
        <div className="mt-4">
            <a href="#" className="font-bold text-[#96BBFF] hover:text-[#F7ACCF] text-lg">Download Examination Manual PDF</a>
        </div>
    </section>
);


// --- 3. SIDEBAR CONFIGURATION ---
// Added "Rules" to the sidebar navigation.
const sections = [
  { id: "notifications", label: "All Notifications" },
  { id: "exam", label: "Exams" },
  { id: "announcements", label: "Announcements" },
  { id: "results", label: "Results" },
  { id: "fees", label: "Fees" },
  { id: "timetable", label: "Timetable" },
  { id: "rules", label: "Rules" },
  { id: "manual", label: "Examination Manual" },
  { id: "staff", label: "Exam Staff" },
  { id: "contact", label: "Contact Us" },
];

// --- 4. GENERIC CARD COMPONENT (to reduce repetition) ---
const Card = ({ card }) => (
    <div className="card bg-black/30 backdrop-blur-lg p-5 flex flex-col justify-between min-h-[160px] hover:shadow-xl transition-all">
        <div>
            <div className="text-lg font-semibold text-white mb-2">{card.title}</div>
            <div className="text-white/70 text-xs mb-4">{card.date} &middot; {card.type}</div>
        </div>
        <Link
            to={card.link}
            className="inline-block mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#B3DEE2] to-[#83BFE6] text-black font-bold text-sm hover:from-[#4169E1] hover:to-[#2B107E] hover:text-white transition"
        >
            View Details
        </Link>
    </div>
);

// --- 5. SECTION COMPONENTS ---

// This component shows ALL cards.
const NotificationsSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-4">All Notifications</h2>
    <div className="responsive-grid">
      {examCards.map((card) => <Card key={card.title} card={card} />)}
    </div>
  </section>
);

// Generic Section component that filters cards by category
const FilteredSection = ({ category, title }) => (
    <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">{title}</h2>
        <div className="responsive-grid">
            {examCards
                .filter(card => Array.isArray(card.category) && card.category.includes(category))
                .map((card) => <Card key={card.title} card={card} />)
            }
        </div>
    </section>
);

// --- 6. DEDICATED CONTENT FOR STAFF & CONTACT ---

const StaffSection = () => {
  // Data extracted from the image
  const staffDetails = [
    { name: "1. Dr. Sukanya Kulkarni", designation: "Controller of Examination", email: "coe@spit.ac.in" },
    { name: "2. Smt. Rajashri Govilkar", designation: "Head Clerk", email: "rajashri_govilkar@spit.ac.in" },
    { name: "3. Mr. Sandesh Nalawade", designation: "Junior Clerk", email: "sandesh_nalawade@spit.ac.in" },
    { name: "4. Smt. Pratima Solanki", designation: "Junior Clerk", email: "exam1@spit.ac.in" },
    { name: "5. Ms. Dipti Padyal", designation: "Junior Clerk", email: "exam2@spit.ac.in" },
    { name: "6. Ms. Ankita Tambe", designation: "Junior Clerk", email: "exam3@spit.ac.in" },
    { name: "7. Mr. Ravindra Rathod", designation: "Attendant", email: null },
    { name: "8. Mr. Shyam Jadhav", designation: "Attendant", email: null }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow-lg"
    >
      <h2 className="text-3xl font-bold text-[#FFD700] mb-2">Exam Staff</h2>
      <p className="text-white/70 text-sm mb-6">
        posted on November 16th, 2023 under Contact
      </p>

      <h3 className="text-2xl font-semibold text-white mb-4">Examination Staff Contact Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 text-left">
        {/* Grid Headers */}
        <div className="font-bold text-[#FFD700] text-lg border-b border-white/20 pb-2">Name</div>
        <div className="font-bold text-[#FFD700] text-lg border-b border-white/20 pb-2">Designation</div>
        <div className="font-bold text-[#FFD700] text-lg border-b border-white/20 pb-2">Email id's</div>

        {/* Staff Data Rows */}
        {staffDetails.map((staff, index) => (
          <React.Fragment key={index}>
            <div className="py-2 text-white/90">{staff.name}</div>
            <div className="py-2 text-white/90">{staff.designation}</div>
            <div className="py-2">
              {staff.email ? (
                <a href={`mailto:${staff.email}`} className="text-[#96BBFF] hover:text-[#F7ACCF] break-all">
                  {staff.email}
                </a>
              ) : (
                <span className="text-white/50">-</span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

const ContactSection = () => (
  <section className="bg-gradient-to-br from-[#2B107E] to-[#02365E] rounded-xl p-8 text-white shadow animate-fade-in">
    <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Contact the Examination Cell</h2>
    <div className="space-y-4 text-lg">
        <div>
            <p className="font-semibold text-white">Email Address:</p>
            <a href="mailto:examcell@spit.ac.in" className="text-[#96BBFF] hover:text-[#F7ACCF]">examcell@spit.ac.in</a>
        </div>
        <div>
            <p className="font-semibold text-white">Phone Numbers:</p>
            <p className="text-white/80">(022) 1234-5678 (Ext. 101)</p>
            <p className="text-white/80">(022) 1234-5679 (Ext. 102)</p>
        </div>
         <div>
            <p className="font-semibold text-white">Office Location:</p>
            <p className="text-white/80">Room No. 105, First Floor, Main Building</p>
        </div>
        <div>
            <p className="font-semibold text-white">Office Hours:</p>
            <p className="text-white/80">Monday - Friday: 10:00 AM to 4:00 PM</p>
            <p className="text-white/80">(Closed on Saturdays, Sundays, and Public Holidays)</p>
        </div>
    </div>
  </section>
);


// --- 7. MAIN EXAM PAGE COMPONENT ---
export const Exams = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean).pop();
  const isDetailPage = examCards.some(card => card.link.endsWith(currentPath));

  return (
    <section className="bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] mx-auto px-4 py-12 \">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 text-white bg-gradient-to-b from-[#30036B] to-[#241E4E] dark:from-[#3D348B] dark:to-[#241E4E] rounded-xl p-6 font-medium flex flex-col gap-2 min-w-[220px] max-w-xs self-start">
          {sections.map((sec) => (
            <NavLink
              key={sec.id}
              to={`/exam/${sec.id}`}
              className={({ isActive }) =>
                `text-left px-4 py-2 rounded transition font-semibold ${
                  isActive && !isDetailPage
                    ? "bg-[#2B107E] text-[#FFD700]"
                    : "hover:text-[#2B107E] hover:bg-[#9AD4D6]/90"
                }`
              }
            >
              {sec.label}
            </NavLink>
          ))}
        </aside>
        <main className="flex-1 flex flex-col gap-8">
          <Routes>
            {/* Detail Page Routes */}
            <Route path="/feestructure" element={<FeeStructure />} />
            <Route path="/timetable-nov-dec-2024" element={<ExamTimetableNovDec2024 />} />
            <Route path="/exam-rules-2024" element={<ExamRules2024 />} />
            <Route path="/examination-manual-2024" element={<ExaminationManual2024 />} />
            <Route path="/specialexaminationoddevensemester202324gazettes" element={<SEOESGazettes />} />
            <Route path="/reexaminationjanuary2024results" element={<ReExamSection />} />
            <Route path="/oddsemresults2324" element={<OddSemResults2324 />} />
            <Route path="/evensemresults2324" element={<EvenSemResults2324/>}/>
            <Route path="/pgduxresults2324" element={<PGDUXResults2324 />} />
            <Route path="/reexamevensem2324" element={<ReExamEvenSem2324/>}/>
            <Route path="/giejulyaug2324" element={<GIEJulyAug2324 />} />
            <Route path="/oddsem2223" element={<OddSem2223 />} />
            
            {/* Section Routes */}
            <Route path="/notifications" element={<NotificationsSection />} />
            <Route path="/results" element={<FilteredSection category="results" title="Results Section" />} />
            <Route path="/fees" element={<FilteredSection category="fees" title="Fees Section" />} />
            <Route path="/timetable" element={<FilteredSection category="timetable" title="Timetable Section" />} />
            <Route path="/rules" element={<FilteredSection category="rules" title="Rules Section" />} />
            <Route path="/manual" element={<FilteredSection category="manual" title="Examination Manuals" />} />
            <Route path="/exam" element={<FilteredSection category="exam" title="Examination Section" />} />
            <Route path="/announcements" element={<FilteredSection category="announcements" title="Announcements Section" />} />
            
            {/* Dedicated Content Routes */}
            <Route path="/staff" element={<StaffSection />} />
            <Route path="/contact" element={<ContactSection />} />

            {/* Default Route */}
            <Route path="/" element={<NotificationsSection />} />
          </Routes>
        </main>
      </div>
    </section>
  );
};