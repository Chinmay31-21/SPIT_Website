import React, { useContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider'; // Assuming ThemeProvider provides the theme context

const Preamble = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Preamble</h2>
    <p>
      At Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology, research is an integral part of academic activity carried within various undergraduate and postgraduate programs. 
      The Research and Development (R&D) center facilitates various research programs by channelizing various research projects and consultancy works in various departments of the Institute. 
      The research activities include academic research and funded research projects and patents in the Faculty of Engineering and Technology. 
      The students and staff are encouraged to innovate through quality research in emerging areas.
    </p>
    <p>
      The advancement of laboratory is a key role of the Research and Development center of the institute. 
      Research and Development center acts as a liaison between funding agencies and the Institute to handle sponsored research projects and industrial consultancy assignments. 
      The main objective is to maintain the quality and breadth of its research enterprise, and particularly for its openness to multidisciplinary research.
    </p>
    <p>
      The research philosophy is to progress from inter-departmental collaboration, to inter-institutional partnerships at national and international levels. 
      The scope and scale of research has substantially evolved from the era of student theses to funded projects to interdisciplinary research programs at state and national level. 
      The Centre facilitates interaction with external agencies at national and international level.
    </p>
    <p>
      By looking at changing requirements of industry, the objective of Research and Development Cell is to ensure that we hold on to our position at the cutting edge of innovation by encouraging interdisciplinary research.
    </p>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Vision</h3>
    <p>
      <em>"To encourage interdisciplinary research and innovation leading to collaborative projects with public and private sectors that offers applied research."</em>
    </p>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Mission</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        To inculcate research-oriented approach to the future generation through research, scholarship, education, preservation, and excellent academic practice that can serve all sectors of society.
      </li>
      <li>
        To carry out free exchange of ideas in an ethical, interdependent, and diverse community of faculty, students, and alumni.
      </li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Objectives</h3>
    <p>
      The office of the Dean for research and development is responsible for managing and developing all research activities at S.P.I.T. 
      The main goal is to encourage and promote cutting-edge research based on the proven capabilities and expertise of our faculty and scholars. 
      The primary role is to help facilitate strengthening of the Institute's research capabilities; proactively promote basic research and monitor quality of research work done. 
      Research committee headed by a Dean has proposed the framework for up-scaling and enhancing the research activities at the Institute.
    </p>
    <p>It includes some of the following strategies:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identify and develop opportunities for the faculty to engage in research.</li>
      <li>Define criteria and modalities for students to avail research opportunities.</li>
      <li>Propose roundtables, conferences and working groups on a series of thematic areas central to the research work, publication of papers and reports of the students.</li>
      <li>Modalities of accepting, reviewing, and benchmarking research work.</li>
      <li>Establish linkages with institutions and universities in India and outside to secure resources to provide facilities to scholars.</li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Short Term Goals</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Sending research proposals to funding agencies.</li>
      <li>Increase the quality of publication in standard journals.</li>
      <li>Conducting faculty and students development programs for cutting-edge trends and technologies.</li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Long Term Goals</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Getting grants from national/international funding agencies for research projects.</li>
      <li>Collaborating with agencies at national/international levels for IPR and consultancy.</li>
      <li>Getting sponsorships for faculty and students development programs.</li>
    </ul>
  </div>
);

const IdeaLab = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">IdeaLab</h2>
    <p>
      IdeaLab at SPIT is a hub for innovation and creativity. It provides students and faculty with resources to develop prototypes, conduct experiments, and bring ideas to life. 
      The lab encourages interdisciplinary collaboration and entrepreneurship, fostering a culture of innovation within the institute.
    </p>
    <p>
      For more information, visit the official IdeaLab website: 
      <a 
        href="https://idealab.spit.ac.in/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#FFD700] underline hover:text-white"
      >
        https://idealab.spit.ac.in/
      </a>
    </p>
  </div>
);
const RDCommittee = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">R&D Committee</h2>
    <p>
      The Research and Development (R&D) Committee at Sardar Patel Institute of Technology (SPIT) is dedicated to fostering a culture of research and innovation among faculty and students. 
      The committee plays a pivotal role in promoting interdisciplinary research, facilitating collaborations, and ensuring the quality of research output.
    </p>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Objectives</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Encourage faculty and students to undertake research projects.</li>
      <li>Facilitate collaborations with industry and academia.</li>
      <li>Organize workshops, seminars, and conferences to promote research activities.</li>
      <li>Provide guidance and support for publishing research papers in reputed journals.</li>
      <li>Monitor the progress and quality of ongoing research projects.</li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Structure</h3>
    <p>
      The R&D Committee is headed by the Dean of Research and Development and comprises faculty members from various departments. 
      The committee works towards achieving the institute's vision of being a leader in research and innovation.
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Dean of Research and Development - Chairperson</li>
      <li>Faculty representatives from each department</li>
      <li>Industry experts and external advisors</li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Flowchart</h3>
    <p>
      Below is the flowchart representing the process of research proposal submission and approval:
    </p>
    <div className="flex justify-center">
      <img
        src="/assets/Flowchart.png" // Replace with the actual image URL
        alt="Research Flowchart"
        className="rounded-lg shadow-lg"
      />
    </div>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Achievements</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Secured grants from national and international funding agencies.</li>
      <li>Published research papers in reputed journals and conferences.</li>
      <li>Collaborated with industry for consultancy and innovation projects.</li>
    </ul>

    <p>
      The R&D Committee is committed to creating a vibrant research ecosystem at SPIT and contributing to the advancement of knowledge and technology.
    </p>
  </div>
);
const PolicyResearchAreas = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Policy & Research Areas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <span className="font-bold">Policies:</span>
        <ul className="list-none pl-6 space-y-2">
          <li>
            <a
              href="/assets/R-D-Manual-2022-23-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] underline hover:text-white"
            >
              R & D Manual 2022-23
            </a>
          </li>
          <li>
            <a
              href="/assets/R-D-Manual-2020-21-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] underline hover:text-white"
            >
              R & D Manual 2020-21
            </a>
          </li>
          <li>
            <a
              href="/assets/R-D-manual-2019-20-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] underline hover:text-white"
            >
              R & D Manual 2019-20
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <h3 className="text-2xl font-bold text-[#FFD700] mt-8">Budget</h3>
    <p>Below are the tables representing the sanctioned and proposed budgets:</p>

    {/* Table for Financial Year 2017-18 */}
    <h4 className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">Proposed Budget for Financial Year 2017-18</h4>
    <table className="table-auto border-collapse border border-[#FFD700] w-full text-left">
      <thead>
        <tr>
          <th className="border border-[#FFD700] px-4 py-2">Sr. No</th>
          <th className="border border-[#FFD700] px-4 py-2">Activities</th>
          <th className="border border-[#FFD700] px-4 py-2">Amount Budgeted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">1</td>
          <td className="border border-[#FFD700] px-4 py-2">
            Faculty Development Program
            <ul className="list-disc pl-6">
              <li>IIT PG credit Courses / Online certificate courses like Coursera can also be considered if certificate is obtained</li>
              <li>IIT/NIT DEP Summer/Winter Courses</li>
            </ul>
          </td>
          <td className="border border-[#FFD700] px-4 py-2">7,00,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">2</td>
          <td className="border border-[#FFD700] px-4 py-2">Faculty Publications</td>
          <td className="border border-[#FFD700] px-4 py-2">5,50,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">3</td>
          <td className="border border-[#FFD700] px-4 py-2">
            Patents & Copyrights
            <ul className="list-disc pl-6">
              <li>Patents</li>
              <li>Copy rights</li>
            </ul>
          </td>
          <td className="border border-[#FFD700] px-4 py-2">3,00,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">4</td>
          <td className="border border-[#FFD700] px-4 py-2">Short term courses/workshops</td>
          <td className="border border-[#FFD700] px-4 py-2">1,50,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">5</td>
          <td className="border border-[#FFD700] px-4 py-2">Skill Development (Non-teaching and Teaching)</td>
          <td className="border border-[#FFD700] px-4 py-2">1,50,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">6</td>
          <td className="border border-[#FFD700] px-4 py-2">Students Publications & R&D</td>
          <td className="border border-[#FFD700] px-4 py-2">2,00,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">7</td>
          <td className="border border-[#FFD700] px-4 py-2">
            Promotion of Research and Innovation for Undergraduate Students (PRIUS)
          </td>
          <td className="border border-[#FFD700] px-4 py-2">3,00,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">8</td>
          <td className="border border-[#FFD700] px-4 py-2">
            R&D center activities: Expert committee expenditure, Awards, Colloquium, Visits
          </td>
          <td className="border border-[#FFD700] px-4 py-2">2,50,000</td>
        </tr>
        <tr>
          <td className="border border-[#FFD700] px-4 py-2">9</td>
          <td className="border border-[#FFD700] px-4 py-2">National & International Collaborative research</td>
          <td className="border border-[#FFD700] px-4 py-2">5,00,000</td>
        </tr>
      </tbody>
    </table>
  </div>
);
const FundedProjects = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-[#FFD700] mb-8 border-b-4 border-[#FFD700] pb-2">Funded Projects</h2>
    <p className="text-lg">
      Below is the summary of funded projects carried out, including funding agencies and grants received:
    </p>

    {/* PDF Links Section */}
    <h3 className="text-2xl font-bold text-[#FFD700] mt-8 border-b-2 border-[#FFD700] pb-2">Detailed Reports</h3>
    <ul className="list-none pl-6 space-y-4">
      <li>
        <a
          href="/assets/Consultancy-and-Sponsored-Research-Projects-2022-23.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Consultancy and Sponsored Research Projects 2022-23
        </a>
      </li>
      <li>
        <a
          href="/assets/Consultancy-Projects-till-2021-22.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Consultancy Projects till 2021-22
        </a>
      </li>
      <li>
        <a
          href="/assets/Sponsored-Research-Projects-till-2021-22.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Sponsored Research Projects till 2021-22
        </a>
      </li>
      <li>
        <a
          href="/assets/Consultancy-report-2017-18.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Consultancy Report – 2017-18
        </a>
      </li>
      <li>
        <a
          href="/assets/Consultancy-report-2018-19.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Consultancy Report – 2018-19
        </a>
      </li>
      <li>
        <a
          href="/assets/Consultancy-report-2019-20.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Consultancy Report – 2019-20
        </a>
      </li>
      <li>
        <a
          href="/assets/Funded-Project-PDC-consultancy-services-2018-2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Funded Project – PDC Consultancy Services 2018-2020
        </a>
      </li>
      <li>
        <a
          href="/assets/3.2.1_funded_projects_mu_dst_iedc_csi_etc.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700] transition-all duration-300"
        >
          Funded Projects 2013-2018
        </a>
      </li>
    </ul>
  </div>
);
const InternationalConferences = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">International Conferences</h2>
    <p>
      Explore the details of the IEEE Colloquium hosted by SPIT:
    </p>
    <a
      href="https://etrx.spit.ac.in/wp-content/blogs.dir/19/files/2012/ieee_colloquium/index.html"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FFD700] underline hover:text-white transition-all duration-300"
    >
      Explore IEEE Colloquium
    </a>
  </div>
);

const StudentsTechnicalActivities = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Students Technical Activities</h2>

    <h3 className="text-2xl font-bold text-white mt-6">1. Technical Paper Presentation</h3>
    <p className="text-red-500 font-semibold mt-2">Objective description and Process of execution of Competition</p>

    <h4 className="text-xl font-bold text-white mt-4">2020-21</h4>
    <h5 className="text-lg font-bold text-white mt-2">TPP Odd Semester</h5>
    <ul className="list-none pl-6 space-y-2">
      <li>
        <a
          href="/assets/TPP-PE-Nov-2020-EXTC-Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP PE Nov 2020 EXTC Report
        </a>
      </li>
      <li>
        <a
          href="/assets/TPP-PE-Report-EXTC-2019-20-Category-I.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP PE Report EXTC 2019-20 Category I
        </a>
      </li>
      <li>
        <a
          href="/assets/TPP-COMP-2020-2021-ODD.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP COMP 2020-2021 ODD
        </a>
      </li>
      <li>
        <a
          href="/assets/TPP-Nov-2020-IT-department-report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP Nov 2020 IT Department Report
        </a>
      </li>
      <li>
        <a
          href="/assets/TPP_ETRX_Department_Report_Odd_Sem.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP ETRX Department Report Odd Sem
        </a>
      </li>
      <li>
        <a
          href="/assets/TPP_ETRX_2020-2021_ODD.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          TPP ETRX 2020-2021 ODD
        </a>
      </li>
    </ul>

    <h5 className="text-lg font-bold text-white mt-4">PE Odd Semester</h5>
    <ul className="list-none pl-6 space-y-2">
      <li>
        <a
          href="/assets/PE_Nov_2020_IT_Department_Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          PE Nov 2020 IT Department Report
        </a>
      </li>
      <li>
        <a
          href="/assets/PE_COMP_2020-2021_ODD.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          PE COMP 2020-2021 ODD
        </a>
      </li>
      <li>
        <a
          href="/assets/PE_Computer_Category_1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          PE Computer Category 1
        </a>
      </li>
      <li>
        <a
          href="/assets/PE_ETRX_2020-2021_ODD.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline hover:text-[#FFD700]"
        >
          PE ETRX 2020-2021 ODD
        </a>
      </li>
    </ul>
  </div>
);

const CurrentEventsActivities = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b]  p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Current Events & Activities</h2>
    <p>Content for Current Events & Activities section...</p>
  </div>
);

const UsefulLinks = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Useful Links</h2>
    <p className="text-lg mb-4">Explore these useful resources for research and funding opportunities:</p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="http://www.nstmis-dst.org/directory/dae.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          http://www.nstmis-dst.org/directory/dae.htm
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://meity.gov.in/content/funding-process"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://meity.gov.in/content/funding-process
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://www.serbonline.in/SERB/HomePage.do"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://www.serbonline.in/SERB/HomePage.do
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="http://www.dst.gov.in/call-for-proposals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          http://www.dst.gov.in/call-for-proposals
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://mnre.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://mnre.gov.in/
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://www.isro.gov.in/research-and-academia-interface/respond-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://www.isro.gov.in/research-and-academia-interface/respond-projects
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://www.drdo.gov.in/drdo/English/indexCorpDir.jsp?pg=application.jsp&dir=LSRB"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://www.drdo.gov.in/drdo/English/indexCorpDir.jsp?pg=application.jsp&dir=LSRB
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://twas.org/twas-voice-science-south"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://twas.org/twas-voice-science-south
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="http://centralsquarefoundation.org/grant-type/research-grants/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          http://centralsquarefoundation.org/grant-type/research-grants/
        </a>
      </li>
      <li className="p-4 border border-[#FFD700] rounded-lg bg-white/10 shadow-md">
        <a
          href="https://www.mu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold underline hover:text-[#FFD700] transition-all duration-300"
        >
          https://www.mu.ac.in
        </a>
      </li>
    </ul>
  </div>
);

const PublicationsPortal = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">Publications Portal</h2>
    <p>
      Explore the details of publications and research work at SPIT:
    </p>
    <a
      href="https://research.spit.ac.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FFD700] underline hover:text-white transition-all duration-300"
    >
      Visit Publications Portal
    </a>
  </div>
);

const IIRSISROOutreachProgramme = () => (
  <div className="text-white/80 leading-relaxed space-y-6 bg-gradient-to-r from-[#02365e] to-[#30036b] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-[#FFD700] mb-8 border-b-2 border-[#FFD700] pb-2">IIRS-ISRO Outreach Programme</h2>
    <p>
      Explore the details of the IIRS-ISRO Outreach Programme hosted by SPIT:
    </p>
    <a
      href="https://www.spit.ac.in/faculty-research/iirs-isro-outreach-programme/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FFD700] underline hover:text-white transition-all duration-300"
    >
      Visit IIRS-ISRO Outreach Programme
    </a>
  </div>
);

export const Research = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme from ThemeProvider

  return (
    <div
      className={`min-h-screen py-8 ${
        theme === 'dark' ? 'dark:from-[#0E1428] dark:to-[#27193f] mx-auto px-4 py-8 ' : 'bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] mx-auto px-4 py-8 '
      }`}
    >
      <div className=" mx-auto px-4">
        <h1
          className={`text-4xl font-bold mb-8 border-b-4 pb-2 ${
            theme === 'dark' ? 'text-[#FFD700] border-[#FFD700]' : 'text-black border-black'
          }`}
        >
          Research at SPIT
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div
            className={`md:col-span-1 p-4 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-black/30' : 'bg-gray-200'
            }`}
          >
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/research/preamble"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Preamble
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/idealab"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    IdeaLab
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/rd-committee"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    R&D Committee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/policy-research-areas"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Policy & Research Areas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/funded-projects"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Funded Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/international-conferences"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    International Conferences
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/students-technical-activities"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Students Technical Activities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/current-events-activities"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Current Events & Activities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/useful-links"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Useful Links
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/publications-portal"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    Publications Portal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research/iirs-isro-outreach-programme"
                    className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700]'
                        : 'text-black hover:bg-gray-300 hover:text-black'
                    } focus:outline-none focus:ring-2 ${
                      theme === 'dark' ? 'focus:ring-[#FFD700]' : 'focus:ring-black'
                    }`}
                  >
                    IIRS-ISRO Outreach Programme
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Routes>
              <Route path="preamble" element={<Preamble />} />
              <Route path="idealab" element={<IdeaLab />} />
              <Route path="rd-committee" element={<RDCommittee />} />
              <Route path="policy-research-areas" element={<PolicyResearchAreas />} />
              <Route path="funded-projects" element={<FundedProjects />} />
              <Route path="international-conferences" element={<InternationalConferences />} />
              <Route path="students-technical-activities" element={<StudentsTechnicalActivities />} />
              <Route path="current-events-activities" element={<CurrentEventsActivities />} />
              <Route path="useful-links" element={<UsefulLinks />} />
              <Route path="publications-portal" element={<PublicationsPortal />} />
              <Route path="iirs-isro-outreach-programme" element={<IIRSISROOutreachProgramme />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};