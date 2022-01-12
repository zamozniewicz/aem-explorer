import { Mode, modes } from "../model/modes";

export const isMode = (mode: string): mode is Mode => {
  return modes.includes(mode as Mode);
};
