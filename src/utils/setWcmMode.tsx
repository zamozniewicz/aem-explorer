import { editorPath, Mode, modeParam } from "../model/modes";
import getCurrentTab from "./getCurrentTab";

export const setWcmDisabled = (tab: chrome.tabs.Tab) => {
  if (tab.id === undefined || tab.url === undefined) {
    return;
  }

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

  if (mode === "disabled") {
    setWcmDisabled(tab);
    return;
  }

  if (tab.id === undefined || tab.url === undefined) {
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
