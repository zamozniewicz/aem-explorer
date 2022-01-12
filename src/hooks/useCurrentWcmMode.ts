import { useEffect, useState } from "react";
import { WcmMode } from "../model/modes";
import { detectWcmMode } from "../utils/detectWcmMode";
import { setWcmMode } from "../utils/setWcmMode";

export const useCurrentWcmMode = () => {
  const [currentWcmMode, setCurrentWcmMode] = useState<WcmMode | null>(null);
  useEffect(() => {
    detectWcmMode().then((mode) => setCurrentWcmMode(mode));
  }, []);

  const handleWcmModeChange = (mode: WcmMode) => {
    setCurrentWcmMode(mode);
    setWcmMode(mode);
  };

  return { currentWcmMode, handleWcmModeChange };
};
