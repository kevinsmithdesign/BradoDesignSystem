import { createTheme } from "@mui/material";

// Theme One
const jsonConfig = {
  primaryColor: "#5F44FF",
  secondaryColor: "#4486FF",
  errorColor: "#D9534F",
  warningColor: "#F0AD4E",
  infoColor: "#5BC0DE",
  successColor: "#5CB85C",
};

const theme = createTheme({
  palette: {
    primary: {
      main: jsonConfig.primaryColor,
    },
    secondary: {
      main: jsonConfig.secondaryColor,
    },
    error: {
      main: jsonConfig.errorColor,
    },
    warning: {
      main: jsonConfig.warningColor,
    },
    info: {
      main: jsonConfig.infoColor,
    },
    success: {
      main: jsonConfig.successColor,
    },
  },
  typography: {
    h1: {
      fontSize: "46px",
      fontWeight: "normal",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "normal",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "normal",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "none",
          fontWeight: "600",
        },
      },
    },
  },
});

export default theme;
