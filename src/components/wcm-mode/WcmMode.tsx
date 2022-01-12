import { FC, useEffect, useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  ToggleButton,
  Tooltip,
} from "@mui/material";
import { Mode, modes } from "../../model/modes";
import setWcmMode from "../../utils/setWcmMode";
import detectMode from "../../utils/detectMode";
import debugClientLibs from "../../utils/debugClientLibs";
import Section from "../section/Section";

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

const WcmMode: FC = () => {
  const [currentMode, setCurrentMode] = useState<Mode | null>(null);
  useEffect(() => {
    detectMode().then((mode) => setCurrentMode(mode));
  }, []);

  const [debugging, setDebugging] = useState(false);

  const handleModeChange = (mode: Mode) => {
    setCurrentMode(mode);
    setWcmMode(mode);
  };

  const handleDebuggingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isDebugging = event.target.checked;
    setDebugging(isDebugging);
    debugClientLibs(isDebugging);
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
      <Box>
        <FormControlLabel
          control={
            <Switch checked={debugging} onChange={handleDebuggingChange} />
          }
          label="Debug clientlibs"
        />
      </Box>
    </Section>
  );
};

export default WcmMode;
