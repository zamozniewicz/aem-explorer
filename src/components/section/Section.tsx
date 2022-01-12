import { PropsWithChildren, ReactNode } from "react";
import { Box, Paper, ToggleButtonGroup, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <Paper elevation={1} sx={{ p: 1 }}>
      {children}
    </Paper>
  );
};

Section.Title = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box>
      <Typography variant="subtitle2" component="h1" sx={{ mb: 1 }}>
        {children}
      </Typography>
    </Box>
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
