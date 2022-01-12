import { debugClientLibsParam } from "../model/modes";
import { getCurrentTab } from "./getCurrentTab";

export const isDebuggingClientLibs = async (): Promise<boolean> => {
  const { url } = await getCurrentTab();

  if (url === undefined) {
    return Promise.resolve(false);
  }

  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);
  const debugClientLibs = searchParams.get(debugClientLibsParam);

  return Promise.resolve(debugClientLibs === "true");
};
