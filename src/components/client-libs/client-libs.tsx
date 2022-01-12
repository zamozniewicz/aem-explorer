import { FC } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { useDebug } from "../../hooks/use-debug";
import { Section } from "../section/section";

export const ClientLibs: FC = () => {
  const { debug, handleDebugChange } = useDebug();
  const { theme } = useThemeContext();

  return (
    <Section>
      <Section.Title>ClientLibs</Section.Title>
      <FormControlLabel
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
    </Section>
  );
};
