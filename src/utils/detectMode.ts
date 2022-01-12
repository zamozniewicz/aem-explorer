import { Mode, modeParam, modes } from "../model/modes";
import { getCurrentTab } from "./getCurrentTab";

const isMode = (mode: string): mode is Mode => {
  return modes.includes(mode as Mode);
};

export const detectMode = async (): Promise<Mode | null> => {
  const { url } = await getCurrentTab();

  if (url === undefined) {
    return Promise.resolve(null);
  }

  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);
  const mode = searchParams.get(modeParam);

  if (mode === null) {
    return Promise.resolve("touch");
  }

  if (isMode(mode)) {
    return Promise.resolve(mode);
  }

  return Promise.resolve(null);
};
