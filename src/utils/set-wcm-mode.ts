import { editorPath, WcmMode, wcmModeParam } from "../model/modes";
import { Tab } from "../model/tab";
import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";
import { openUrl } from "./open-url";

const previewCookies = [
  { name: "wcmmode", value: "preview" },
  { name: "cq-editor-layer.page", value: "Preview" },
  { name: "cq-editor-sidepanel", value: "closed" },
];

const touchCookies = [
  { name: "wcmmode", value: "edit" },
  { name: "cq-editor-layer.page", value: "Edit" },
];

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

const setWcmModeDisabled = (tab: Tab, openInNewTab = false) => {
  openUrl({
    tab,
    url: getDisabledWcmUrl(tab),
    openInNewTab,
  });
};

const getModeUrl = (tab: Tab, mode: WcmMode): string => {
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

  return url.toString();
};

export const setWcmMode = async (mode: WcmMode, openInNewTab = false) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  if (mode === "disabled") {
    setWcmModeDisabled(tab, openInNewTab);
    return;
  }

  if (mode === "preview") {
    await setCookies(tab, previewCookies);
  }

  if (mode === "touch") {
    await setCookies(tab, touchCookies);
  }

  openUrl({
    tab,
    url: getModeUrl(tab, mode),
    openInNewTab,
  });
};
