import { debugParam } from "../model/modes";
import { getCurrentTab } from "./getCurrentTab";

export const isDebuggingClientLibs = async (): Promise<boolean> => {
  const { url } = await getCurrentTab();

  if (url === undefined) {
    return Promise.resolve(false);
  }

  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);
  const debugClientLibs = searchParams.get(debugParam);

  return Promise.resolve(debugClientLibs === "true");
};
