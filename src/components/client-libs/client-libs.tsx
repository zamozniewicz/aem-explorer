import { FC } from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { useDebug } from "../../hooks/use-debug";
import { useAemPage } from "../../hooks/use-aem-page";
import { Section } from "../section/section";
import { SectionTitle } from "../section/section-title";

export const ClientLibs: FC = () => {
  const { debug, handleDebugChange } = useDebug();
  const { theme } = useThemeContext();
  const { openAemPage } = useAemPage();

  return (
    <Section>
      <SectionTitle>ClientLibs</SectionTitle>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size={theme.size === "compact" ? "small" : "medium"}
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
              size="small"
              color="default"
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
