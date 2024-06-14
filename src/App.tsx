// App.jsx

import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./themes/ThemeContext";

import { Stack, Typography, Button } from "@mui/material";
import ColorPage from "./pages/ColorsPage";
import ButtonPage from "./pages/ButtonPage";
import TypographyPage from "./pages/TypographyPage";
import PaginationPage from "./pages/PaginationPage";
import TablePage from "./pages/TablePage";

const links = [
  { to: "/colors", title: "Colors" },
  { to: "/typography", title: "Typography" },
  { to: "/button", title: "Button" },
  { to: "/pagination", title: "Pagination" },
  { to: "/table", title: "Table" },
];

const AppContent = () => {
  const { themeName, setThemeName, theme } = useTheme();

  console.log("setThemeName", theme.palette.primary.main);

  const [toggle, setToggle] = useState(false);

  const toggleHamburgerMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleThemeChange = (theme) => {
    setThemeName(theme);
    setToggle(false); // Close menu after selection
  };

  return (
    <Stack flexDirection="column" sx={{ height: "100%", flex: 1 }}>
      {/* Nav Starts */}
      <Stack
        flexDirection="row"
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: "16px",
        }}
      >
        <Stack sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "32px",
              color: theme.palette.primary.contrastText,
            }}
          >
            {themeName} Style Guide
          </Typography>
        </Stack>
        <Button
          sx={{
            background: theme.palette.primary.contrastText,
            "&:hover": {
              background: theme.palette.primary.contrastText,
            },
          }}
          onClick={toggleHamburgerMenu}
        >
          Change Brand
        </Button>
      </Stack>
      {toggle && (
        <Stack
          sx={{
            position: "absolute",
            top: 70,
            right: 16,
            zIndex: "1000",
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
            width: "120px",
          }}
        >
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("Admin")}
          >
            Admin
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("Default")}
          >
            Default
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("Catherine")}
          >
            Catherine
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("Mya")}
          >
            Mya
          </Typography>
        </Stack>
      )}
      {/* Nav Ends */}

      <Stack flexDirection="row" sx={{ flex: 1 }}>
        <Stack sx={{ width: "260px" }}>
          <Stack>
            {links.map(({ to, title }, index) => (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: "#222",
                  borderBottom: "1px solid #eee",
                  padding: "16px",
                }}
                to={to}
              >
                <Typography>{title}</Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            background: "#eee",
            padding: "32px 48px",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Typography>Design System</Typography>} />
            <Route path="/colors" element={<ColorPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/table" element={<TablePage />} />
          </Routes>
        </Stack>
      </Stack>
    </Stack>
  );
};

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
