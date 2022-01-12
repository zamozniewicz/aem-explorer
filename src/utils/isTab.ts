import { Tab } from "../model/tab";

const isTab = (tab: chrome.tabs.Tab): tab is Tab => {
  return tab.id !== undefined && tab.url !== undefined;
};

export default isTab;
