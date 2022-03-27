import browser from "webextension-polyfill";

export const openUrl = ({
  tabId,
  url,
  openInNewTab = false,
}: {
  tabId: number;
  url: string;
  openInNewTab?: boolean;
}) => {
  const properties = { url };
  if (openInNewTab) {
    browser.tabs?.create(properties);
  } else {
    browser.tabs?.update(tabId, properties);
  }
};
