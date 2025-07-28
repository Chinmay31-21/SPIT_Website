import React, { useState } from "react";

import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Fade,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
} from "@mui/material";
import { lightTheme } from "../theme/theme";
import bgImage from "/assets/light.jpg"; // Add your image to assets folder

const sections = [
  { label: "All", key: "all" },
  { label: "Exams", key: "exams" },
  { label: "Results", key: "results" },
  { label: "Notices", key: "notices" },
  { label: "Fees", key: "fees" },
  { label: "Meetings", key: "meetings" },
  // ...add more as needed...
];

// Dummy data for demonstration
const announcements = [
  {
    
    title: <a href="/assets/Faculty_Recruitment_Notice.jpg" className="hover:text-[#F7F6C5]">Advertisement for Faculty Recruitment-2025</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Faculty Recruitment for AY 2025",
  },
  {
    title: <a href="/assets/Advertisement_Tenure.pdf" className="hover:text-[#F7F6C5]">Advertisement Tenure 3-Years</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Tenured Assistant Professor, Associate Professor,Professor, and Professor of Practice on 3 years tenure (Purely Contract basis) ",
  },
  {
    title: <a href="/assets/Application_form_for_Faculty_July-2025.docx" className="hover:text-[#F7F6C5]">Application form tenure Faculty – 2025</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Application Form for Tenure 2025",
  },
  {
   title: <a href="/assets/Cutoff_24-25.pdf" className="hover:text-[#F7F6C5]">Cut off Marks 24-25</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "MHT-CET Cut off for 2024-25",
  },
  {
   title: <a href="/assets/FRA_Fee_Approval_(ENGG,MCA,ME)_for_2025-26.pdf" className="hover:text-[#F7F6C5]">FRA Fee Approval (ENGG, MCA,ME) for 2025-26</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Fee Approval for AY 2024-25",
  },
  {
   title: <a href="/assets/Bid_for_Building_Extension_Works_at_SPIT.pdf" className="hover:text-[#F7F6C5]">Bid for Building Extension Works at SPIT</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Conditions of the Contract & Bill Of Quantities",
  },
  {
   title: <a href="/assets/B.Tech._Engg_Revised_Fee_Notice_for_2024-25..pdf" className="hover:text-[#F7F6C5]">B.Tech. Engg Revised Fee Notice for 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Balance Fees Payable for Students of Batch AY 2024-25",
  },
  {
   title: <a href="/assets/Tender_for_GPU.pdf" className="hover:text-[#F7F6C5]">Tender for GPU Server-(AI Computing Laboratory)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Quotation for GPU Servers of AI Computing Laboratory",
  },
  {
   title: <a href="/assets/2025-HK-TENDER-FINAL-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">Inviting Quotation for Providing House Keeping Services at Sardar Patel Institute of Technology.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Inviting Quotation for Providing House Keeping Services at Sardar Patel Institute of Technology.",
  },
  {
   title: <a href="/assets/phd-result-extc.pdf" className="hover:text-[#F7F6C5]">List of selected Candidates for PhD-EXTC for January 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "List of Students selected for Ph.D. Programme in Electronics and Telecommunication Engineering for 2024-25 (January)",
  },
  {
   title: <a href="/assets/phd-result-mca.pdf" className="hover:text-[#F7F6C5]">List of selected Candidates for PhD-MCA for January 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "List of Students selected for Ph.D. Programme in MCA for 2024-25 (January)",
  },
  {
   title: <a href="/assets/ANNEXURE-I.pdf" className="hover:text-[#F7F6C5]">ANNEXURE I</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-II.pdf" className="hover:text-[#F7F6C5]">ANNEXURE II</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-III-desktops-laptop-printers-1.pdf" className="hover:text-[#F7F6C5]">ANNEXURE III-desktops laptop printers</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors-2.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. -Terms and Conditions for Vendors</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25",
  },
  {
   title: <a href="/assets/FINAL-TENDER-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">PILING WORK REQUIRED FOR THE PROJECT: ALTERATION and EXTENSION to the COLLEGE BUILDING of SPIT</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Condition of Contract and Bill of Quantities",
  },
  {
   title: <a href="/assets/S.P.I.T Tender Notice 3.pdf" className="hover:text-[#F7F6C5]">S.P.I.T Tender Notice 3</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-3 _ Electronic Equipment Requirements_ AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-I.pdf" className="hover:text-[#F7F6C5]">ANNEXURE I</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-3 _ Electronic Equipment Requirements_ AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-II.pdf" className="hover:text-[#F7F6C5]">ANNEXURE II</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-3 _ Electronic Equipment Requirements_ AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-III-Equipments.pdf" className="hover:text-[#F7F6C5]">ANNEXURE III-Equipments</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-3 _ Electronic Equipment Requirements_ AY 2024-25",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. -Terms and Conditions for Vendors</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-3 _ Electronic Equipment Requirements_ AY 2024-25",
  },
  {
   title: <a href="/assets/2025-HK-TENDER-FINAL-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">2025 HK TENDER FINAL DOCUMENT</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-4 _ Desktops, Laptops, Printers, Software, etc._ AY 2024-25",
  },
  {
   title: <a href="/assets/S.P.I.T.-Tender-Notice-2.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. Tender Notice 2</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-2 _ Smart LABS-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-I.pdf" className="hover:text-[#F7F6C5]">ANNEXURE I</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-2 _ Smart LABS-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-II.pdf" className="hover:text-[#F7F6C5]">ANNEXURE II</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-2 _ Smart LABS-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE-III-OCT-2024.pdf" className="hover:text-[#F7F6C5]">ANNEXURE III OCT 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-2 _ Smart LABS-AY 2024-25",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors-1.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. -Terms and Conditions for Vendors</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-2 _ Smart LABS-AY 2024-25",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice As Of 12_00 Noon On 22 October 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Cutoff-For-2024-25-As-Of-12_00-Noon-On-22-October-2024.pdf" className="hover:text-[#F7F6C5]">Cutoff For 2024-25 As Of 12_00 Noon On 22 October 2024</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: " First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final-Merit-List-for-DSE-Vacancy-Against-Cap-2024-25_22.10.2024.pdf" className="hover:text-[#F7F6C5]">Final Merit List for DSE Vacancy Against Cap 22-10-2024</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "DSY B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/DSEB-18.10.pdf" className="hover:text-[#F7F6C5]">VACANCY NOTICE for DSE 18-10-2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for DSY B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Instructions-for-First-Year-B.Tech_.-IL-and-After-CAP-Round-5-22-10-2024.pdf" className="hover:text-[#F7F6C5]">Instructions for First Year B.Tech. IL and After CAP Round 5 – 22-10-2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/DSE_Institute_Level_advt_18-10-2024.pdf" className="hover:text-[#F7F6C5]">DSE Institute Level advt 18-10-2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">DSE VACANCY NOTICE & ROUND ON 17.10.24</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-15-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">VACANCY NOTICE 15-10-24</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-10-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice 2024-25 10.10.2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/First_Year_Ph.D._Fee_Structure_2024-25.pdf" className="hover:text-[#F7F6C5]">First Year Ph.D. Fee Structure 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/List of Certificate to be attached with the P.hD Application Form.pdf" className="hover:text-[#F7F6C5]">List of Certificate to be attached with the P.hD Application Form</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Cutoff For 2024-25 After Round IV On September 15 2024.pdf" className="hover:text-[#F7F6C5]">Cutoff For 2024-25 After Round IV On September 15 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy Notice 2024-25 For Round IV As of 14 September 2024.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice 2024-25 For Round IV As Of 09:00 PM On 14 September 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Instructions for First Year B.Tech. IL and After CAP Round 4 – 15-09-2024.pdf" className="hover:text-[#F7F6C5]">Instructions for First Year B.Tech. IL and After CAP Round 4 – 15-09-2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/IEEE India Council Industry Academia Young Professionals Committee (IAYPC) workshop.pdf" className="hover:text-[#F7F6C5]">IEEE India Council Industry Academia Young Professionals Committee (IAYPC) workshop followed by hackathon</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy Notice 2024-25 For Round IV As of 13 September 2024.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice 2024-25 For Round IV As Of 05:00 PM On 13 September 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Cutoff For 2024-25 After Round III On September 13 2024.pdf" className="hover:text-[#F7F6C5]">Cutoff For 2024-25 After Round III On September 13 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy Notice 2024-25 For Round III As Of 13 September 2024.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice 2024-25 For Round III As Of 11:00 AM On 13 September 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy Notice 2024-25 For Round III As Of 12 September 2024.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice 2024-25 For Round III As Of 07:00 PM On 12 September 2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Schedule of FY B Tech Induction Program AY 2024-25.pdf" className="hover:text-[#F7F6C5]">Schedule of FY B Tech Induction Program : AY 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Instructions for First Year B.Tech. IL and After CAP Round III – 13-09-2024.pdf" className="hover:text-[#F7F6C5]">Instructions for First Year B.Tech. IL and After CAP Round III – 13-09-2024</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/List of selected Candidates for PhD for AY 2024-25.pdf" className="hover:text-[#F7F6C5]">List of selected Candidates for PhD for AY 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Vacancy Position After CAP (for IL Round 2).pdf" className="hover:text-[#F7F6C5]">Vacancy Position After CAP (for IL Round 2)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Institute Level Vacancy Notice 2024-25.pdf" className="hover:text-[#F7F6C5]">Institute Level Vacancy Notice 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final Merit List 2024-25 01 MH – CET.pdf" className="hover:text-[#F7F6C5]">Final Merit List 2024-25 01 MH – CET</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final Merit List 2024-25 02 MH – JEE Only.pdf" className="hover:text-[#F7F6C5]">Final Merit List 2024-25 02 MH – JEE Only</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final Merit List 2024-25 03 OMS – CET.pdf" className="hover:text-[#F7F6C5]">Final Merit List 2024-25 03 OMS – CET</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final Merit List 2024-25 04 OMS – JEE Only.pdf" className="hover:text-[#F7F6C5]">Final Merit List 2024-25 04 OMS – JEE Only</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Final Merit List 2024-25 05 – Non-Eligible.pdf" className="hover:text-[#F7F6C5]">Final Merit List 2024-25 05 – Non-Eligible</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Classes Commencement Notice.pdf" className="hover:text-[#F7F6C5]">Classes Commencement Notice</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Schedule for Institute Level Seats and Vacant Seats After CAP Round III ENGG 2024-25.pdf" className="hover:text-[#F7F6C5]">Schedule for Institute Level Seats and Vacant Seats After CAP Round III ENGG 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/FACULTY RECRUITMENT FOR PROGRAMMING COURSES.pdf" className="hover:text-[#F7F6C5]">FACULTY RECRUITMENT FOR PROGRAMMING COURSES</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Sponsored by AICTE ATAL FDP on AI in Healthcare and Agriculture.pdf" className="hover:text-[#F7F6C5]">Sponsored by AICTE ATAL FDP on AI in Healthcare and Agriculture</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/FE IL EXTENSION NOTICE 24-25.pdf" className="hover:text-[#F7F6C5]">FE IL EXTENSION NOTICE 24-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/FE DOCUMENTS.pdf" className="hover:text-[#F7F6C5]">FE DOCUMENTS</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Academic Calendar 2024-25 First Term.pdf" className="hover:text-[#F7F6C5]">Academic Calendar 2024-25 First Term</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/" className="hover:text-[#F7F6C5]">Ph.D. Application Form</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/Ph.D. Advertisement.jpg" className="hover:text-[#F7F6C5]">Ph.D. Advertisement</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
   title: <a href="/assets/" className="hover:text-[#F7F6C5]">First Year B.Tech Institute Level Application Form 2024-25</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
     title: <a href="/assets/S.P.I.T. Tender Notice.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. Tender Notice</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE I.pdf" className="hover:text-[#F7F6C5]">ANNEXURE I</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE II.pdf" className="hover:text-[#F7F6C5]">ANNEXURE II</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25",
  },
  {
   title: <a href="/assets/ANNEXURE III.pdf" className="hover:text-[#F7F6C5]">ANNEXURE III</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors.pdf" className="hover:text-[#F7F6C5]">S.P.I.T. -Terms and Conditions for Vendors</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25",
  },
  {
   title: <a href="/assets/FRA Approved Fee For the Academic Year 2024-25.pdf" className="hover:text-[#F7F6C5]">FRA Approved Fee For the Academic Year 2024-25</a>,
    date: "November 16th, 2024",
    section: "fees",
    description: "Vacancy Notice for First Year B.Tech. 2024-25",
  },
  {
    title: (
      <a href="./pages/AllAnnouncements2324" className="hover:text-[#F7F6C5]" target="_blank" rel="opener referrer">
        Click here to read more announcements…
      </a>
    ),
    date: "",
    section: "",
    description: "",
  },
  


  // ...add more as needed...
];

function filterAnnouncements(sectionKey: string) {
  if (sectionKey === "all") return announcements;
  return announcements.filter((a) => a.section === sectionKey);
}

const AllAnnouncements: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("all");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedSection(newValue);
  };

  const filtered = filterAnnouncements(selectedSection);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          py: { xs: 2, sm: 4, md: 6 },
          px: { xs: 0, sm: 0, md: 0 },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(10,20,60,0.85) 0%, rgba(40,10,80,0.85) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Paper
          elevation={6}
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "95vw", sm: "90vw", md: 900 },
            mx: "auto",
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 4,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            background: "rgba(20, 20, 40, 0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            align="center"
            sx={{
              color: "#FFD700",
              letterSpacing: 1,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" },
              mb: { xs: 2, sm: 3 },
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            Announcements of 2024-25
          </Typography>
          <Tabs
            value={selectedSection}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: { xs: 1, sm: 2 },
              ".MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                color: "#FFA35D !important",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                px: { xs: 1, sm: 2 },
              },
              ".Mui-selected": {
                color: "#FFD700 !important",
              },
              ".MuiTabs-indicator": {
                backgroundColor: "#FFD700",
                height: 3,
                borderRadius: 2,
              },
            }}
          >
            {sections.map((section) => (
              <Tab
                key={section.key}
                label={section.label}
                value={section.key}
                sx={{
                  // ...existing code...
                }}
              />
            ))}
          </Tabs>
          <Fade in timeout={500} key={selectedSection}>
            <Box>
              {filtered.length === 0 ? (
                <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
                  No announcements in this section.
                </Typography>
              ) : (
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "transparent",
                    px: { xs: 0, sm: 1 },
                  }}
                >
                  {filtered.map((a, idx) => (
                    <React.Fragment key={a.title + a.date}>
                      <ListItem
                        alignItems="flex-start"
                        sx={{
                          px: { xs: 0, sm: 1 },
                          py: { xs: 1, sm: 2 },
                          borderRadius: 2,
                          transition: "background 0.2s",
                          "&:hover": {
                            background: "rgba(255,255,255,0.04)",
                          },
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: { xs: "flex-start", sm: "center" },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              fontWeight={600}
                              sx={{
                                color: "#FFD700",
                                fontSize: { xs: "1.05rem", sm: "1.15rem" },
                                mb: { xs: 0.5, sm: 0 },
                              }}
                            >
                              {a.title}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  fontSize: { xs: "0.9rem", sm: "1rem" },
                                  mr: 1,
                                }}
                              >
                                {a.date}
                              </Typography>
                              <br />
                              <Typography
                                component="span"
                                variant="body1"
                                color="text.primary"
                                sx={{
                                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                                }}
                              >
                                {a.description}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      {idx < filtered.length - 1 && (
                        <Divider
                          component="li"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.08)",
                            my: { xs: 0.5, sm: 1 },
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </Box>
          </Fade>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default AllAnnouncements;
