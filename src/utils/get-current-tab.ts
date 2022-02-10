import { mockTab } from "../model/mock-tab";

export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
  if (chrome.tabs === undefined) {
    return Promise.resolve(mockTab({ url: window.location.href }));
  }

  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return Promise.resolve(tab);
};
