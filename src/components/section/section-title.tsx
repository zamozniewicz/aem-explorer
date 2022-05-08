import { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";

export const SectionTitle = ({ children }: PropsWithChildren<{}>) => {
  const { theme } = useThemeContext();

  return theme.size === "compact" ? null : (
    <Box>
      <Typography variant="subtitle1" component="h2" sx={{ mb: 1 }}>
        {children}
      </Typography>
    </Box>
  );
};
