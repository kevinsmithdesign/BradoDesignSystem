import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import DefaultTheme from "../themes/DefaultTheme";
import CatherineTheme from "../themes/CatherineTheme";
import MyaTheme from "../themes/MyaTheme";
import AdminTheme from "../themes/AdminTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("Default");

  const theme = useMemo(() => {
    switch (themeName) {
      case "Catherine":
        return CatherineTheme;
      case "Mya":
        return MyaTheme;
      case "Admin":
        return AdminTheme;
      default:
        return DefaultTheme;
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
