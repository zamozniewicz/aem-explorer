import { useEffect, useState } from "react";
import { usePreferencesContext } from "../contexts/preferences-context";
import { WcmMode } from "../model/modes";
import { detectWcmMode } from "../utils/detect-wcm-mode";
import { setWcmMode } from "../utils/set-wcm-mode";

export const useCurrentWcmMode = () => {
  const { openInNewTab } = usePreferencesContext();
  const [currentWcmMode, setCurrentWcmMode] = useState<WcmMode | null>(null);

  useEffect(() => {
    const detectMode = async () => {
      const mode = await detectWcmMode();
      setCurrentWcmMode(mode);
    };

    detectMode();
  }, []);

  const handleWcmModeChange = (mode: WcmMode) => {
    setCurrentWcmMode(mode);
    setWcmMode(mode, openInNewTab);
  };

  return { currentWcmMode, handleWcmModeChange };
};
