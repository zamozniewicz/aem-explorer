import { FC, useEffect, useState } from "react";
import { ToggleButton, Tooltip } from "@mui/material";
import { Mode, modes } from "../../model/modes";
import { setWcmMode } from "../../utils/setWcmMode";
import detectMode from "../../utils/detectMode";
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

  const handleChange = (mode: Mode) => {
    setCurrentMode(mode);
    setWcmMode(mode);
  };

  return (
    <Section>
      <Section.Title>WCM mode</Section.Title>
      <Section.Buttons
        value={currentMode}
        onChange={(mode) => handleChange(mode)}
      >
        {modes.map((mode) => (
          <ToggleButton value={mode} size="small" key={mode}>
            <Tooltip title={modeTooltips[mode]}>
              <span>{modeNames[mode]}</span>
            </Tooltip>
          </ToggleButton>
        ))}
      </Section.Buttons>
    </Section>
  );
};

export default WcmMode;
