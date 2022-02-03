import { styled, Typography } from "@mui/material";

export const CustomText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));
