import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PaginationPage = () => {
  const theme = useTheme();
  return (
    <Stack>
      <Typography variant="h2" mb={2}>
        Pagination
      </Typography>
    </Stack>
  );
};

export default PaginationPage;
