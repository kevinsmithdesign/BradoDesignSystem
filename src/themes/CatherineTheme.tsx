import { createTheme } from "@mui/material";

const jsonConfig = {
  primaryText: "#313B5A",
  secondaryText: "#313C4C",
  disabledText: "#9CA3AF",
  primaryColor: "#3653B0",
  primaryDarkColor: "#253A7B",
  primaryLightColor: "#5E75BF",
  secondaryColor: "#3690B0",
  errorColor: "#C42014",
  warningColor: "#C67F00",
  infoColor: "#4230C6",
  successColor: "#128129",
};

const theme = createTheme({
  palette: {
    text: {
      primary: jsonConfig.primaryText,
      secondary: jsonConfig.secondaryText,
      disabled: jsonConfig.disabledText,
    },
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
      fontWeight: "bold",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
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
