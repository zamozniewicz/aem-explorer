import { PropsWithChildren, ReactNode } from "react";
import { Box, Card, ToggleButtonGroup, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

interface Props {
  children: ReactNode;
}

export const Section = ({ children }: Props) => {
  const { theme } = useThemeContext();

  return (
    <Card
      sx={{
        p: 2,
        mb: theme === "compact" ? 1 : 2,
      }}
    >
      {children}
    </Card>
  );
};

Section.Title = ({ children }: PropsWithChildren<{}>) => {
  const { theme } = useThemeContext();

  return theme === "compact" ? null : (
    <Box>
      <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
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
  const { theme } = useThemeContext();

  return (
    <ToggleButtonGroup
      size={theme === "compact" ? "small" : "large"}
      color="primary"
      value={value}
      exclusive
      fullWidth
      onChange={(event, nextValue) => onChange(nextValue)}
    >
      {children}
    </ToggleButtonGroup>
  );
};
