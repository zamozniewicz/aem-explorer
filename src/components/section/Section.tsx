import { ReactNode } from "react";
import { Box, ButtonGroup, Paper, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <Paper elevation={2} sx={{ p: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </Box>
    </Paper>
  );
};

interface TitleProps {
  children: ReactNode;
}

Section.Title = ({ children }: TitleProps) => {
  return (
    <Typography variant="overline" component="h2">
      {children}
    </Typography>
  );
};

Section.Buttons = ({ children }: TitleProps) => {
  return (
    <ButtonGroup variant="outlined" size="small">
      {children}
    </ButtonGroup>
  );
};

export default Section;
