import { editorPath, WcmMode, wcmModeParam } from "../model/modes";
import { Tab } from "../model/tab";
import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";
import { openUrl } from "./open-url";

const getDisabledWcmUrl = (tab: Tab): string => {
  const url = new URL(tab.url);
  const searchParams = new URLSearchParams(url.search);
  searchParams.set(wcmModeParam, "disabled");
  url.search = searchParams.toString();
  if (url.pathname.startsWith(editorPath)) {
    url.pathname = url.pathname.replace(editorPath, "");
  }

  return url.toString();
};

export const setWcmMode = async (mode: WcmMode, openInNewTab: boolean) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  if (mode === "disabled") {
    const url = getDisabledWcmUrl(tab);
    openUrl({
      tabId: tab.id,
      url,
      openInNewTab,
    });
    return;
  }

  const url = new URL(tab.url);
  const searchParams = new URLSearchParams(url.search);
  if (mode === "touch" || mode === null) {
    searchParams.delete(wcmModeParam);
  } else {
    searchParams.set(wcmModeParam, mode);
  }
  url.search = searchParams.toString();

  if (!url.pathname.startsWith(editorPath)) {
    url.pathname = `${editorPath}${url.pathname}`;
  }

  openUrl({
    tabId: tab.id,
    url: url.toString(),
    openInNewTab,
  });
};
