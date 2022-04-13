import { useEffect, useState } from "react";
import { useOpenInNewTabContext } from "../contexts/open-in-new-tab-context";
import { WcmMode } from "../model/modes";
import { detectWcmMode } from "../utils/detect-wcm-mode";
import { setWcmMode } from "../utils/set-wcm-mode";

export const useCurrentWcmMode = () => {
  const { openInNewTab } = useOpenInNewTabContext();
  const [currentWcmMode, setCurrentWcmMode] = useState<WcmMode | null>(null);

  useEffect(() => {
    detectWcmMode().then((mode) => setCurrentWcmMode(mode));
  }, []);

  const handleWcmModeChange = (mode: WcmMode) => {
    setCurrentWcmMode(mode);
    setWcmMode(mode, openInNewTab);
  };

  return { currentWcmMode, handleWcmModeChange };
};
