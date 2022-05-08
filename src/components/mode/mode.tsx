import { FC } from "react";
import { ToggleButton, Tooltip } from "@mui/material";
import { WcmMode, wcmModes } from "../../model/modes";
import { useCurrentWcmMode } from "../../hooks/use-current-wcm-mode";
import { Section } from "../section/section";
import { SectionTitle } from "../section/section-title";

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

  return (
    <Section>
      <SectionTitle>WCM mode</SectionTitle>
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
    </Section>
  );
};
