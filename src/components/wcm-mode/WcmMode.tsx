import { FC, useEffect, useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  ToggleButton,
  Tooltip,
} from "@mui/material";
import { Mode, modes } from "../../model/modes";
import { setWcmMode } from "../../utils/setWcmMode";
import { detectMode } from "../../utils/detectMode";
import { debugClientLibs } from "../../utils/debugClientLibs";
import { Section } from "../section/Section";
import { isDebuggingClientLibs } from "../../utils/isDebuggingClientLibs";

const modeNames: Record<Mode, string> = {
  disabled: "Disabled",
  touch: "Edit",
  preview: "Preview",
  design: "Design",
};

const modeTooltips: Record<Mode, string> = {
  disabled: "WCM disabled",
  touch: "WCM in edit mode",
  preview: "WCM in preview mode",
  design: "WCM in design mode",
};

export const WcmMode: FC = () => {
  const [currentMode, setCurrentMode] = useState<Mode | null>(null);
  useEffect(() => {
    detectMode().then((mode) => setCurrentMode(mode));
  }, []);

  const [debugChecked, setDebugChecked] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebugChecked(isDebugging));
  }, []);

  const handleModeChange = (mode: Mode) => {
    setCurrentMode(mode);
    setWcmMode(mode);
  };

  const handleDebugCheckedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setDebugChecked(checked);
    debugClientLibs(checked);
  };

  return (
    <Section>
      <Section.Title>WCM mode</Section.Title>
      <Section.Buttons
        value={currentMode}
        onChange={(mode) => handleModeChange(mode)}
      >
        {modes.map((mode) => (
          <ToggleButton value={mode} key={mode}>
            <Tooltip title={modeTooltips[mode]}>
              <span>{modeNames[mode]}</span>
            </Tooltip>
          </ToggleButton>
        ))}
      </Section.Buttons>
      <Box sx={{ p: 1, mt: 1, display: "flex", justifyContent: "flex-end" }}>
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={debugChecked}
              onChange={handleDebugCheckedChange}
            />
          }
          label="Debug clientlibs"
        />
      </Box>
    </Section>
  );
};
