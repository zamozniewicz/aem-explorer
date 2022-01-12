import { debugClientLibsParam } from "../model/modes";
import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";

export const debugClientLibs = async (isDebugging: boolean) => {
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

  chrome.tabs?.update(tab.id, { url: url.toString() });
};
