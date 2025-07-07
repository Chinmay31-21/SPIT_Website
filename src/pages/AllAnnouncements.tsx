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
} from "@mui/material";
// ...import your theme if needed...

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
    title: "Fees Structure for the Academic Year 2023-24",
    date: "November 16th, 2024",
    section: "fees",
    description: "Fee details for the academic year 2023-24.",
  },
  {
    title: "Last Five Years Topper Students",
    date: "November 15th, 2024",
    section: "notices",
    description: "List of toppers for the last five years.",
  },
  {
    title: "Examination",
    date: "November 15th, 2024",
    section: "exams",
    description: "Exam schedule and instructions.",
  },
  {
    title: "Re-Examination January 2024 Results",
    date: "November 12th, 2024",
    section: "results",
    description: "Results for January 2024 re-examination.",
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
    <Box
      sx={{
        minHeight: "100vh",
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.background.default} 60%, ${theme.palette.primary.light} 100%)`,
        py: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: 3,
          borderRadius: 3,
          background: (theme) => theme.palette.background.paper,
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Announcements
        </Typography>
        <Tabs
          value={selectedSection}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 2 }}
        >
          {sections.map((section) => (
            <Tab
              key={section.key}
              label={section.label}
              value={section.key}
              sx={{ fontWeight: 600, textTransform: "none" }}
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
              <List>
                {filtered.map((a, idx) => (
                  <React.Fragment key={a.title + a.date}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Typography variant="h6" fontWeight={600}>
                            {a.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.secondary"
                            >
                              {a.date}
                            </Typography>
                            <br />
                            <Typography
                              component="span"
                              variant="body1"
                              color="text.primary"
                            >
                              {a.description}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {idx < filtered.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            )}
          </Box>
        </Fade>
      </Paper>
    </Box>
  );
};

export default AllAnnouncements;
