import { Tab } from "../model/tab";

export const openUrl = ({
  tab,
  url,
  openInNewTab = false,
}: {
  tab: Tab;
  url: string;
  openInNewTab?: boolean;
}) => {
  if (openInNewTab) {
    chrome.tabs?.create({ url, index: tab.index });
  } else {
    chrome.tabs?.update(tab.id, { url });
  }

  window.close();
};
