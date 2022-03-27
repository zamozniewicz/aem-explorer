import browser from "webextension-polyfill";
import { mockTab } from "../model/mock-tab";

export const getCurrentTab = async (): Promise<browser.Tabs.Tab> => {
  if (browser.tabs === undefined) {
    return Promise.resolve(mockTab({ url: window.location.href }));
  }

  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await browser.tabs.query(queryOptions);
  return Promise.resolve(tab);
};
