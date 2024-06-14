import React from "react";
import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ButtonPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const codeString = `
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  `;

  const buttonColorStyles = `
    <Button variant="contained">Primary</Button>
    <Button variant="contained" color="secondary">Secondary</Button>
  `;

  return (
    <Stack>
      <Typography variant="h2" mb={4}>
        Button
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ mb: 3, borderBottom: "1px solid #ddd" }}
      >
        <Tab label="Design" {...a11yProps(0)} />
        <Tab label="Code" {...a11yProps(1)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Variants
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Stack>
        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Colors
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            {/* <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button> */}
          </Stack>
        </Stack>
        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Outlined
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            {/* <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" color="warning">
              Warning
            </Button>
            <Button variant="outlined" color="info">
              Info
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button> */}
          </Stack>
        </Stack>

        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Sizing
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Box sx={{ "& button": { m: 1 } }}>
              <div>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
              <div>
                <Button variant="outlined" size="small">
                  Small
                </Button>
                <Button variant="outlined" size="medium">
                  Medium
                </Button>
                <Button variant="outlined" size="large">
                  Large
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="medium">
                  Medium
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
              </div>
            </Box>
          </Stack>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Variants
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Stack>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={codeString} />
        </Stack>
        <Stack mb={4} sx={{ borderBottom: "1px solid #ddd" }}>
          <Typography variant="h5" mb={3}>
            Button Colors
          </Typography>
          <Stack flexDirection="row" gap={1} mb={4}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            {/* <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button> */}
          </Stack>
        </Stack>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={buttonColorStyles} />
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default ButtonPage;
