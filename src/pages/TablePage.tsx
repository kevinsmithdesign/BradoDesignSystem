import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TablePage = () => {
  const theme = useTheme();
  return (
    <Stack>
      <Typography variant="h2" mb={2}>
        Table
      </Typography>
    </Stack>
  );
};

export default TablePage;
