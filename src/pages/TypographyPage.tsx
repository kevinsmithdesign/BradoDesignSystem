import React from "react";
import { Stack, Typography, Tabs, Tab, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";

const typographyStyles = [
  { variant: "h1", label: "h1" },
  { variant: "h2", label: "h2" },
  { variant: "h3", label: "h3" },
  { variant: "h4", label: "h4" },
  { variant: "h5", label: "h5" },
  { variant: "h6", label: "h6" },
  { variant: "body1", label: "body1" },
  { variant: "body2", label: "body2" },
];

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

const TypographyPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const codeString = `
  <Typography variant="h1" gutterBottom>
    h1. Heading
  </Typography>
  <Typography variant="h2" gutterBottom>
    h2. Heading
  </Typography>
  <Typography variant="h3" gutterBottom>
    h3. Heading
  </Typography>
  <Typography variant="h4" gutterBottom>
    h4. Heading
  </Typography>
  <Typography variant="h5" gutterBottom>
    h5. Heading
  </Typography>
  <Typography variant="h6" gutterBottom>
    h6. Heading
  </Typography>
  `;

  const bodyCopyCode = `
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
  `;

  return (
    <Stack>
      <Typography variant="h2" mb={4}>
        Typography
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
        <Stack flexDirection="row" alignItems="center" mb={3}>
          <Stack sx={{ width: "160px" }}>
            <Typography variant="body1">Style Name</Typography>
          </Stack>
          <Stack sx={{ width: "160px" }}>
            <Typography variant="body1">Font Size</Typography>
          </Stack>
          <Stack flex={1}>
            <Typography variant="body1">Sample</Typography>
          </Stack>
        </Stack>
        {typographyStyles.map((style, index) => (
          <Stack
            key={index}
            flexDirection="row"
            alignItems="center"
            sx={{ borderBottom: "1px solid #ddd" }}
            mb={2}
          >
            <Stack sx={{ width: "160px" }}>
              <Typography variant={style.variant}>{style.label}</Typography>
            </Stack>
            <Stack sx={{ width: "160px" }}>
              <Typography variant="body1">
                {theme.typography[style.variant].fontSize}
              </Typography>
            </Stack>
            <Stack flex={1} mb={2}>
              <Typography variant={style.variant}>Typography</Typography>
            </Stack>
          </Stack>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5" mb={3}>
          Typography Header
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={codeString} />
        </Stack>
        <Typography variant="h5" mb={3}>
          Typography Body Copy
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={bodyCopyCode} />
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default TypographyPage;
