import { FC, useEffect, useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  ToggleButton,
  Tooltip,
} from "@mui/material";
import { WcmMode, wcmModes } from "../../model/modes";
import { setWcmMode } from "../../utils/setWcmMode";
import { detectWcmMode } from "../../utils/detectWcmMode";
import { debugClientLibs } from "../../utils/debugClientLibs";
import { Section } from "../section/Section";
import { isDebuggingClientLibs } from "../../utils/isDebuggingClientLibs";

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
  const [currentMode, setCurrentMode] = useState<WcmMode | null>(null);
  useEffect(() => {
    detectWcmMode().then((mode) => setCurrentMode(mode));
  }, []);

  const [debugChecked, setDebugChecked] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebugChecked(isDebugging));
  }, []);

  const handleModeChange = (mode: WcmMode) => {
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
        {wcmModes.map((mode) => (
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
