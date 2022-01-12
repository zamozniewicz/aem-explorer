import { useEffect, useState } from "react";
import { debugClientLibs } from "../utils/debugClientLibs";
import { isDebuggingClientLibs } from "../utils/isDebuggingClientLibs";

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
