import { useEffect, useState } from "react";
import { debugClientLibs } from "../utils/debug-client-libs";
import { isDebuggingClientLibs } from "../utils/is-debugging-client-libs";
import { useOpenInNewTab } from "./use-open-in-new-tab";

export const useDebug = () => {
  const [debug, setDebug] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebug(isDebugging));
  }, []);
  const [openInNewTab] = useOpenInNewTab();

  const handleDebugChange = (isDebugging: boolean) => {
    setDebug(isDebugging);
    debugClientLibs(isDebugging, openInNewTab);
  };

  return { debug, handleDebugChange };
};
