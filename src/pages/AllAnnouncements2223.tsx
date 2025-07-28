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
    
    title: <a href="/assets/List of Participants for “Internal Hackathon for KAVACH 2023”.pdf" className="hover:text-[#F7F6C5]">List of Participants for “Internal Hackathon for KAVACH 2023”</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
    title: <a href="/assets/advertisement-final-1.pdf" className="hover:text-[#F7F6C5]">Guidelines and Venue for “Internal Hackathon for KAVACH 2023”</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
    title: <a href="/assets/Application-form-for-Tenure-Faculty-2025.docx" className="hover:text-[#F7F6C5]">NOTICE for Internal Hackthon for KAVACH 2023</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Cutoff2425.pdf" className="hover:text-[#F7F6C5]">Flyer Internal Hackathon for KAVACH 2023</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "",
  },
  {
   title: <a href="/assets/FRA-Fee-Approval-ENGG-MCAME-for-2025-26.pdf" className="hover:text-[#F7F6C5]">Internal hackathon- KAVACH 2023 Shortlisted 10 Teams</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Final_1-Tendor-SPIT-Building-Extension-2025-PDF.pdf" className="hover:text-[#F7F6C5]">Internal hackathon- KAVACH 2023</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/B.Tech_.-Engg-Revised-Fee-Notice-for-2024-25.pdf" className="hover:text-[#F7F6C5]">List of Documents to be submitted by First Year Ph.D. Students</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Tender-for-GPU.pdf" className="hover:text-[#F7F6C5]">Fees Details for First Year Ph.D. Students</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/2025-HK-TENDER-FINAL-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">INSTRUCTIONS FOR DIRECT SECOND YEAR ADMISSION COUNSELING ROUND 2 on 4/12/2022 at 3:30 pm</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/phd-result-extc.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice for Direct Second Year B.Tech. 2022-23 as on 3.12.2022 at 5.00 p.m.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/phd-result-mca.pdf" className="hover:text-[#F7F6C5]">First Year Academic Calendar 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-I-2.pdf" className="hover:text-[#F7F6C5]">Academic Calendar 2022-23 Second Term</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-II-2.pdf" className="hover:text-[#F7F6C5]">INSTRUCTIONS FOR DIRECT SECOND YEAR ADMISSION COUNSELING ROUND</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-III-desktops-laptop-printers-1.pdf" className="hover:text-[#F7F6C5]">Final Merit List for DSE Vacancy Against Cap 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors-2.pdf" className="hover:text-[#F7F6C5]">FE Sem 1 Time Table</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/FINAL-TENDER-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice for Direct Second Year B.Tech. 2022-23 as on 30.11.2022 at 10.00 a.m.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/S.P.I.T Tender Notice 3.pdf" className="hover:text-[#F7F6C5]">Vacancy Notice for Direct Second Year B.Tech. 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-I.pdf" className="hover:text-[#F7F6C5]">Revised Schedule for Vacant seats after CAP Round II DSE 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-II.pdf" className="hover:text-[#F7F6C5]">Tender Notice for Electrical, Electronic itineraries (Hardware & Software) for the FY 2022-2023.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-III-Equipments.pdf" className="hover:text-[#F7F6C5]">FY BTech Time Table 28Nov-2nd Dec</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors.pdf" className="hover:text-[#F7F6C5]">Tentative allocation of divisions for FY BTech 2022-23 (Computers Div A)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/2025-HK-TENDER-FINAL-DOCUMENT.pdf" className="hover:text-[#F7F6C5]">Tentative allocation of divisions for FY BTech 2022-23 (Computers Div B)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/S.P.I.T.-Tender-Notice-2.pdf" className="hover:text-[#F7F6C5]">Tentative allocation of divisions for FY BTech 2022-23 (EXTC Div E)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-I-2.pdf" className="hover:text-[#F7F6C5]">Tentative allocation of divisions for FY BTech 2022-23 (EXTC Div F)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assetsANNEXURE-II-2.pdf" className="hover:text-[#F7F6C5]">Cutoff IL Admissions 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/ANNEXURE-III-OCT-2024.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for F.Y. B.Tech as on 20.11.2022 at 10.00 a.m.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/S.P.I.T.-Terms-and-Conditions-for-Vendors-1.pdf" className="hover:text-[#F7F6C5]">Final Merit List of MCA for Institute Level Round (Maharashtra State Candidates)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Final Merit List of MCA for Institute Level Round (OMS Candidates)</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Cutoff-For-2024-25-As-Of-12_00-Noon-On-22-October-2024.pdf" className="hover:text-[#F7F6C5]">Instructions for MCA Institute Level Round 20/11/22</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "",
  },
  {
   title: <a href="/assets/Final-Merit-List-for-DSE-Vacancy-Against-Cap-2024-25_22.10.2024.pdf" className="hover:text-[#F7F6C5]">IL Round 3 Instructions 2022-23</a>,
    date: "November 16th, 2024",
    section: "exams",
    description: "",
  },
  {
   title: <a href="/assets/DSEB-18.10.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for F.Y. B.Tech as on 18.11.2022 at 5.00 p.m.</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Instructions-for-First-Year-B.Tech_.-IL-and-After-CAP-Round-5-22-10-2024.pdf" className="hover:text-[#F7F6C5]">Tender Notice for Computational itineraries for the FY 2022-2023</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Notice for Direct Second Year and First Year MCA students</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  /*Yeah wala code se tujhe edit karna hai that's it */
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">FY B.Tech Induction Schedule from 21Nov-2nd Dec 2022</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">FY B.Tech Time Table from 21 Nov-2nd Dec 2022</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for First Year MCA after CAP Rd. III for 2022-23 as on 16/11/22 6 pm</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Induction Notice for FY B. Tech Computers and CSE AIML Students</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy position for IL round 2 as on 17-11-22 at 12.00 noon</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacant Seats After CAP and Institute level Round-II for 2022-23 as on 16-11-22 at 7pm</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for First Year MCA after CAP Rd. III for 2022-23 as on 16/11/22 6 pm</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for First Year B.Tech after CAP Rd. III and Institute Level for 2022-23 as on 16/11/22 8 am</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Schedule for Vacant seats after CAP Round III MCA 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Vacancy Position for First Year B.Tech after CAP Rd. III and Institute Level for 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Institute Level Round 2 Instructions</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Schedule for First Year B.Tech. Admission for Vacant Seat After CAP round III and vacant seats at Institute Level for 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Notice for Newly Admitted students of First Year B.Tech. for AY 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">F.Y.B.Tech Induction Schedule</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
   title: <a href="/assets/Vacancy-Notice-As-Of-12_00-Noon-On-22-October-2024.docx.pdf" className="hover:text-[#F7F6C5]">Notice for Newly Admitted students of First Year MCA for AY 2022-23</a>,
    date: "November 16th, 2024",
    section: "notices",
    description: "",
  },
  {
    title: (
      <a href="/pages/AllAnnouncements2122" className="hover:text-[#F7F6C5]" target="_blank" rel="opener referrer">
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

const AllAnnouncements2223 : React.FC = () => {
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
            Announcements of 2022-23
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

export default AllAnnouncements2223;
