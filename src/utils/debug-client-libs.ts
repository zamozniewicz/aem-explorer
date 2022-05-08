import { debugClientLibsParam } from "../model/modes";
import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";
import { openUrl } from "./open-url";

export const debugClientLibs = async (
  isDebugging: boolean,
  openInNewTab: boolean
) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  const url = new URL(tab.url);
  const searchParams = new URLSearchParams(url.search);
  if (isDebugging) {
    searchParams.set(debugClientLibsParam, "true");
  } else {
    searchParams.delete(debugClientLibsParam);
  }
  url.search = searchParams.toString();

  openUrl({ tab, url: url.toString(), openInNewTab });
};
