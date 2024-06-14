import React, { useState } from "react";
import { Stack, Typography, Grid, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Helper function to convert CSS color to hex if needed
const toHex = (color) => {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle;
};

const ColorPage = () => {
  const theme = useTheme();

  console.log("theme", theme);
  const colors = [
    {
      title: "Primary Main",
      backgroundColor: theme.palette.primary.main,
      hex: theme.palette.primary.main,
      copyValue: "theme.palette.primary.main",
    },
    {
      title: "Primary Dark",
      backgroundColor: theme.palette.primary.dark,
      hex: toHex(theme.palette.primary.dark),
      copyValue: "theme.palette.primary.dark",
    },
    {
      title: "Primary Light",
      backgroundColor: theme.palette.primary.light,
      hex: toHex(theme.palette.primary.light),
      copyValue: "theme.palette.primary.light",
    },
  ];

  const primaryTextColors = [
    {
      title: "Primary Text",
      backgroundColor: theme.palette.text.primary,
      hex: theme.palette.text.secondary,
      copyValue: "theme.palette.text.disabled",
    },
    {
      title: "Secondary Text",
      backgroundColor: theme.palette.text.secondary,
      hex: toHex(theme.palette.text.secondary),
      copyValue: "theme.palette.text.secondary",
    },
    {
      title: "Disabled Text",
      backgroundColor: theme.palette.text.disabled,
      hex: toHex(theme.palette.text.disabled),
      copyValue: "theme.palette.text.disabled",
    },
  ];

  const secondaryColors = [
    {
      title: "Secondary Main",
      backgroundColor: theme.palette.secondary.main,
      hex: theme.palette.secondary.main,
      copyValue: "theme.palette.secondary.main",
    },
    {
      title: "Secondary Dark",
      backgroundColor: theme.palette.secondary.dark,
      hex: toHex(theme.palette.secondary.dark),
      copyValue: "theme.palette.secondary.dark",
    },
    {
      title: "Secondary Light",
      backgroundColor: theme.palette.secondary.light,
      hex: toHex(theme.palette.secondary.light),
      copyValue: "theme.palette.secondary.light",
    },
  ];

  const successColors = [
    {
      title: "Success Main",
      backgroundColor: theme.palette.success.main,
      hex: theme.palette.success.main,
      copyValue: "theme.palette.success.main",
    },
    {
      title: "Success Dark",
      backgroundColor: theme.palette.success.dark,
      hex: toHex(theme.palette.success.dark),
      copyValue: "theme.palette.success.dark",
    },
    {
      title: "Success Light",
      backgroundColor: theme.palette.success.light,
      hex: toHex(theme.palette.success.light),
      copyValue: "theme.palette.success.light",
    },
  ];

  const warningColors = [
    {
      title: "Warning Main",
      backgroundColor: theme.palette.warning.main,
      hex: theme.palette.warning.main,
      copyValue: "theme.palette.warning.main",
    },
    {
      title: "Warning Dark",
      backgroundColor: theme.palette.warning.dark,
      hex: toHex(theme.palette.warning.dark),
      copyValue: "theme.palette.warning.dark",
    },
    {
      title: "Warning Light",
      backgroundColor: theme.palette.warning.light,
      hex: toHex(theme.palette.warning.light),
      copyValue: "theme.palette.warning.light",
    },
  ];

  const errorColors = [
    {
      title: "Error Main",
      backgroundColor: theme.palette.error.main,
      hex: theme.palette.error.main,
      copyValue: "theme.palette.error.main",
    },
    {
      title: "Error Dark",
      backgroundColor: theme.palette.error.dark,
      hex: toHex(theme.palette.error.dark),
      copyValue: "theme.palette.error.dark",
    },
    {
      title: "Error Light",
      backgroundColor: theme.palette.error.light,
      hex: toHex(theme.palette.error.light),
      copyValue: "theme.palette.error.light",
    },
  ];

  const infoColors = [
    {
      title: "Info Main",
      backgroundColor: theme.palette.info.main,
      hex: theme.palette.info.main,
      copyValue: "theme.palette.info.main",
    },
    {
      title: "Info Dark",
      backgroundColor: theme.palette.info.dark,
      hex: toHex(theme.palette.info.dark),
      copyValue: "theme.palette.info.dark",
    },
    {
      title: "Info Light",
      backgroundColor: theme.palette.info.light,
      hex: toHex(theme.palette.info.light),
      copyValue: "theme.palette.info.light",
    },
  ];

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async (colorCode) => {
    try {
      await navigator.clipboard.writeText(colorCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <Stack>
      <Typography variant="h2" mb={4}>
        Colors
      </Typography>
      <Typography variant="h5" mb={1}>
        Primary Text Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {primaryTextColors.map(
          ({ title, backgroundColor, hex, copyValue }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <React.Fragment>
                <Stack
                  sx={{
                    position: "relative",
                    height: "140px",
                    width: "100%",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    background: backgroundColor,
                  }}
                >
                  <Tooltip
                    title={copySuccess ? "Copied!" : "Copy to clipboard"}
                    arrow
                  >
                    <IconButton
                      onClick={() => handleCopy(copyValue)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack
                  sx={{
                    background: "#fff",
                    padding: "16px 24px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    mb={0.5}
                    sx={{ color: "#222" }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "#222" }}>{hex}</Typography>
                </Stack>
              </React.Fragment>
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h5" mb={1}>
        Primary Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {colors.map(({ title, backgroundColor, hex, copyValue }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <React.Fragment>
              <Stack
                sx={{
                  position: "relative",
                  height: "140px",
                  width: "100%",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  background: backgroundColor,
                }}
              >
                <Tooltip
                  title={copySuccess ? "Copied!" : "Copy to clipboard"}
                  arrow
                >
                  <IconButton
                    onClick={() => handleCopy(copyValue)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      zIndex: 1,
                      color: "#fff",
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack
                sx={{
                  background: "#fff",
                  padding: "16px 24px",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  mb={0.5}
                  sx={{ color: "#222" }}
                >
                  {title}
                </Typography>
                <Typography sx={{ color: "#222" }}>{hex}</Typography>
              </Stack>
            </React.Fragment>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" mb={1}>
        Secondary Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {secondaryColors.map(
          ({ title, backgroundColor, hex, copyValue }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <React.Fragment>
                <Stack
                  sx={{
                    position: "relative",
                    height: "140px",
                    width: "100%",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    background: backgroundColor,
                  }}
                >
                  <Tooltip
                    title={copySuccess ? "Copied!" : "Copy to clipboard"}
                    arrow
                  >
                    <IconButton
                      onClick={() => handleCopy(copyValue)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack
                  sx={{
                    background: "#fff",
                    padding: "16px 24px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    mb={0.5}
                    sx={{ color: "#222" }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "#222" }}>{hex}</Typography>
                </Stack>
              </React.Fragment>
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h5" mb={1}>
        Success Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {successColors.map(
          ({ title, backgroundColor, hex, copyValue }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <React.Fragment>
                <Stack
                  sx={{
                    position: "relative",
                    height: "140px",
                    width: "100%",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    background: backgroundColor,
                  }}
                >
                  <Tooltip
                    title={copySuccess ? "Copied!" : "Copy to clipboard"}
                    arrow
                  >
                    <IconButton
                      onClick={() => handleCopy(copyValue)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack
                  sx={{
                    background: "#fff",
                    padding: "16px 24px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    mb={0.5}
                    sx={{ color: "#222" }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "#222" }}>{hex}</Typography>
                </Stack>
              </React.Fragment>
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h5" mb={1}>
        Warning Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {warningColors.map(
          ({ title, backgroundColor, hex, copyValue }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <React.Fragment>
                <Stack
                  sx={{
                    position: "relative",
                    height: "140px",
                    width: "100%",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    background: backgroundColor,
                  }}
                >
                  <Tooltip
                    title={copySuccess ? "Copied!" : "Copy to clipboard"}
                    arrow
                  >
                    <IconButton
                      onClick={() => handleCopy(copyValue)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack
                  sx={{
                    background: "#fff",
                    padding: "16px 24px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    mb={0.5}
                    sx={{ color: "#222" }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "#222" }}>{hex}</Typography>
                </Stack>
              </React.Fragment>
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h5" mb={1}>
        Error Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {errorColors.map(
          ({ title, backgroundColor, hex, copyValue }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <React.Fragment>
                <Stack
                  sx={{
                    position: "relative",
                    height: "140px",
                    width: "100%",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    background: backgroundColor,
                  }}
                >
                  <Tooltip
                    title={copySuccess ? "Copied!" : "Copy to clipboard"}
                    arrow
                  >
                    <IconButton
                      onClick={() => handleCopy(copyValue)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        zIndex: 1,
                        color: "#fff",
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack
                  sx={{
                    background: "#fff",
                    padding: "16px 24px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    mb={0.5}
                    sx={{ color: "#222" }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "#222" }}>{hex}</Typography>
                </Stack>
              </React.Fragment>
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h5" mb={1}>
        Info Colors
      </Typography>
      <Grid container spacing={4} mb={4}>
        {infoColors.map(({ title, backgroundColor, hex, copyValue }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <React.Fragment>
              <Stack
                sx={{
                  position: "relative",
                  height: "140px",
                  width: "100%",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  background: backgroundColor,
                }}
              >
                <Tooltip
                  title={copySuccess ? "Copied!" : "Copy to clipboard"}
                  arrow
                >
                  <IconButton
                    onClick={() => handleCopy(copyValue)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      zIndex: 1,
                      color: "#fff",
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack
                sx={{
                  background: "#fff",
                  padding: "16px 24px",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  mb={0.5}
                  sx={{ color: "#222" }}
                >
                  {title}
                </Typography>
                <Typography sx={{ color: "#222" }}>{hex}</Typography>
              </Stack>
            </React.Fragment>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ColorPage;
