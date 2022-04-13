import { editorPath, WcmMode, wcmModeParam, wcmModes } from "../model/modes";
import { getCurrentTab } from "./get-current-tab";
import { includes } from "./includes";

export const detectWcmMode = async (): Promise<WcmMode | null> => {
  const { url } = await getCurrentTab();

  if (url === undefined) {
    return Promise.resolve(null);
  }

  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);
  const mode = searchParams.get(wcmModeParam);

  if (url.includes(editorPath)) {
    return Promise.resolve("touch");
  }

  if (includes(wcmModes, mode)) {
    return Promise.resolve(mode);
  }

  return Promise.resolve(null);
};
