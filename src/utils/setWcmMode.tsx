import { editorPath, Mode, modeParam } from "../model/modes";
import { Tab } from "../model/tab";
import { getCurrentTab } from "./getCurrentTab";
import { isTab } from "./isTab";

const disableWcm = (tab: Tab): void => {
  const url = new URL(tab.url);
  const searchParams = new URLSearchParams(url.search);
  searchParams.set(modeParam, "disabled");
  url.search = searchParams.toString();
  if (url.pathname.startsWith(editorPath)) {
    url.pathname = url.pathname.replace(editorPath, "");
  }

  chrome.tabs.update(tab.id, { url: url.toString() });
};

export const setWcmMode = async (mode: Mode) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  if (mode === "disabled") {
    disableWcm(tab);
    return;
  }

  const url = new URL(tab.url);
  const searchParams = new URLSearchParams(url.search);
  if (mode === "touch") {
    searchParams.delete(modeParam);
  } else {
    searchParams.set(modeParam, mode);
  }
  url.search = searchParams.toString();

  if (!url.pathname.startsWith(editorPath)) {
    url.pathname = `${editorPath}${url.pathname}`;
  }

  chrome.tabs.update(tab.id, { url: url.toString() });
};
