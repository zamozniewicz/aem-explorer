import { WcmMode, wcmModes } from "../model/modes";

export const isMode = (mode: string): mode is WcmMode => {
  return wcmModes.includes(mode as WcmMode);
};
