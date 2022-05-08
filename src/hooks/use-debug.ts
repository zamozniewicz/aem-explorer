import { useEffect, useState } from "react";
import { usePreferencesContext } from "../contexts/preferences-context";
import { debugClientLibs } from "../utils/debug-client-libs";
import { isDebuggingClientLibs } from "../utils/is-debugging-client-libs";

export const useDebug = () => {
  const [debug, setDebug] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebug(isDebugging));
  }, []);
  const { openInNewTab } = usePreferencesContext();

  const handleDebugChange = (isDebugging: boolean) => {
    setDebug(isDebugging);
    debugClientLibs(isDebugging, openInNewTab);
  };

  return { debug, handleDebugChange };
};
