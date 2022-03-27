import browser from "webextension-polyfill";
import { Tab } from "../model/tab";

export const isTab = (tab: browser.Tabs.Tab): tab is Tab => {
  return tab.id !== undefined && tab.url !== undefined;
};
