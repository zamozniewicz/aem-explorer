import { debugClientLibsParam } from "../model/modes";
import { getCurrentTab } from "./getCurrentTab";
import { isTab } from "./isTab";

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
