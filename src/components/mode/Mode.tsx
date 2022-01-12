import { FC } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  ToggleButton,
  Tooltip,
} from "@mui/material";
import { WcmMode, wcmModes } from "../../model/modes";
import { useCurrentWcmMode } from "../../hooks/useCurrentWcmMode";
import { useDebug } from "../../hooks/useDebug";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Section } from "../section/Section";

const modeNames: Record<WcmMode, string> = {
  disabled: "Disabled",
  touch: "Edit",
  preview: "Preview",
  design: "Design",
};

const modeTooltips: Record<WcmMode, string> = {
  disabled: "WCM disabled",
  touch: "WCM in edit mode",
  preview: "WCM in preview mode",
  design: "WCM in design mode",
};

export const Mode: FC = () => {
  const { currentWcmMode, handleWcmModeChange } = useCurrentWcmMode();
  const { debug, handleDebugChange } = useDebug();
  const { theme } = useThemeContext();

  return (
    <Section>
      <Section.Title>WCM mode</Section.Title>
      <Section.Buttons
        value={currentWcmMode}
        onChange={(mode) => handleWcmModeChange(mode)}
      >
        {wcmModes.map((mode) => (
          <ToggleButton value={mode} key={mode}>
            <Tooltip title={modeTooltips[mode]}>
              <span>{modeNames[mode]}</span>
            </Tooltip>
          </ToggleButton>
        ))}
      </Section.Buttons>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "flex-end" }}>
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
      </Box>
    </Section>
  );
};
