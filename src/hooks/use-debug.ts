import { useEffect, useState } from "react";
import { debugClientLibs } from "../utils/debug-client-libs";
import { isDebuggingClientLibs } from "../utils/is-debugging-client-libs";

export const useDebug = () => {
  const [debug, setDebug] = useState(false);
  useEffect(() => {
    isDebuggingClientLibs().then((isDebugging) => setDebug(isDebugging));
  }, []);

  const handleDebugChange = (isDebugging: boolean) => {
    setDebug(isDebugging);
    debugClientLibs(isDebugging);
  };

  return { debug, handleDebugChange };
};
