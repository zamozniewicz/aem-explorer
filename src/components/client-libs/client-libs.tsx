import { FC } from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { useDebug } from "../../hooks/use-debug";
import { openAemPage } from "../../utils/open-aem-page";
import { Section } from "../section/section";

export const ClientLibs: FC = () => {
  const { debug, handleDebugChange } = useDebug();
  const { theme } = useThemeContext();

  return (
    <Section>
      <Section.Title>ClientLibs</Section.Title>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size={theme === "compact" ? "small" : "medium"}
          onClick={() =>
            openAemPage("/libs/granite/ui/content/dumplibs.rebuild.html")
          }
        >
          Dumplibs
        </Button>
        <FormControlLabel
          sx={{ ml: 2 }}
          control={
            <Switch
              size={theme === "compact" ? "small" : "medium"}
              checked={debug}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleDebugChange(event.target.checked)
              }
            />
          }
          label="Debug clientlibs"
        />
      </Box>
    </Section>
  );
};
