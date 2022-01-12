import { PropsWithChildren, ReactNode } from "react";
import { Box, Paper, ToggleButtonGroup, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <Paper elevation={2} sx={{ p: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

Section.Title = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Typography variant="overline" component="h2">
      {children}
    </Typography>
  );
};

interface SectionButtonsProps<T> {
  children: ReactNode;
  value: T | null;
  onChange: (value: T) => void;
}

Section.Buttons = <T extends {}>({
  children,
  value,
  onChange,
}: PropsWithChildren<SectionButtonsProps<T>>) => {
  return (
    <ToggleButtonGroup
      size="small"
      color="primary"
      value={value}
      exclusive
      onChange={(event, nextValue) => onChange(nextValue)}
    >
      {children}
    </ToggleButtonGroup>
  );
};

export default Section;
