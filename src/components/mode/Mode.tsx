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
  const [currentWcmMode, setCurrentWcmMode] = useState<WcmMode | null>(null);
  useEffect(() => {
    detectWcmMode().then((mode) => setCurrentWcmMode(mode));
  }, []);

  const [debugChecked, setDebugChecked] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebugChecked(isDebugging));
  }, []);

  const handleModeChange = (mode: WcmMode) => {
    setCurrentWcmMode(mode);
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
        value={currentWcmMode}
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
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "flex-end" }}>
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
