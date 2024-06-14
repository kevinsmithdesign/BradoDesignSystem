import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

const TopNav = () => {
  const { themeName, setThemeName } = useTheme();
  const [toggle, setToggle] = useState(false);

  const toggleHamburgerMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleThemeChange = (theme) => {
    setThemeName(theme);
    setToggle(false); // Close menu after selection
  };

  return (
    <>
      {" "}
      {/* Nav Starts */}
      <Stack
        flexDirection="row"
        sx={{
          background: "#000",
          // backgroundColor: theme.palette.primary.main,
          padding: "16px",
        }}
      >
        <Stack sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 400, color: "#fff" }}>
            Brado Design System
          </Typography>
        </Stack>
        <Stack
          onClick={toggleHamburgerMenu}
          sx={{
            height: "23px",
            alignItems: "center",
            justifyContent: "center",
            mt: 0.5,
            cursor: "pointer",
          }}
        >
          <Stack
            sx={{
              width: "24px",
              height: "3px",
              background: "#fff",
              borderRadius: "8px",
              mb: 0.5,
            }}
          />
          <Stack
            sx={{
              width: "24px",
              height: "3px",
              background: "#fff",
              borderRadius: "8px",
              mb: 0.5,
            }}
          />
          <Stack
            sx={{
              width: "24px",
              height: "3px",
              background: "#fff",
              borderRadius: "8px",
            }}
          />
        </Stack>
      </Stack>
      {toggle && (
        <Stack
          sx={{
            position: "absolute",
            top: 73,
            right: 10,
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("admin")}
          >
            Admin
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("default")}
          >
            Default
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("catherine")}
          >
            Catherine
          </Typography>
          <Typography
            sx={{ paddingBottom: "8px", cursor: "pointer" }}
            onClick={() => handleThemeChange("mya")}
          >
            Mya
          </Typography>
        </Stack>
      )}
      {/* Nav Ends */}
    </>
  );
};

export default TopNav;
