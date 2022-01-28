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

const getCookieUrl = (tab: Tab): string => {
  const { protocol, hostname } = new URL(tab.url);

  return `${protocol}//${hostname}`;
};

const setCookies = async (
  tab: Tab,
  cookies: Array<{ name: string; value: string }>
) => {
  const url = getCookieUrl(tab);

  const pending = cookies.map(({ name, value }) => {
    return chrome.cookies.set({
      url,
      path: "/",
      name,
      value,
    });
  });

  return Promise.all(pending);
};

export const setWcmMode = async (mode: WcmMode, openInNewTab = false) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  if (mode === "disabled") {
    openUrl({
      tabId: tab.id,
      url: getDisabledWcmUrl(tab),
      openInNewTab,
    });
    return;
  }

  if (mode === "preview") {
    await setCookies(tab, [
      { name: "wcmmode", value: "preview" },
      { name: "cq-editor-layer.page", value: "Preview" },
      { name: "cq-editor-sidepanel", value: "closed" },
    ]);
  }

  if (mode === "touch") {
    await setCookies(tab, [
      { name: "wcmmode", value: "edit" },
      { name: "cq-editor-layer.page", value: "Edit" },
    ]);
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
