import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
      paper: "#fff",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFC800",
    },
    primary: {
      main: "#1e40af",
      light: "#3b82f6",
      dark: "#1e3a8a",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
        }
        body {
          min-height: 100vh;
        }
      `,
    },
  },
  transitions: {
    duration: {
      standard: 300,
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #2d2d2d 100%)",
      paper: "#181818",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#60a5fa",
    },
    primary: {
      main: "#1e40af",
      light: "#3b82f6",
      dark: "#1e3a8a",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
        }
        body {
          min-height: 100vh;
        }
      `,
    },
  },
  transitions: {
    duration: {
      standard: 300,
    }
  }
});