import { PropsWithChildren, ReactNode } from "react";
import { Card, ToggleButtonGroup } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";

interface Props {
  children: ReactNode;
}

export const Section = ({ children }: Props) => {
  const { theme } = useThemeContext();

  return (
    <Card
      sx={{
        px: 2,
        py: 1,
        mb: theme.size === "compact" ? 1 : 2,
      }}
    >
      {children}
    </Card>
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
      fullWidth
      onChange={(event, nextValue) => onChange(nextValue)}
    >
      {children}
    </ToggleButtonGroup>
  );
};
