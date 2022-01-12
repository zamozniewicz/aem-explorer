import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";

export const openAemPage = async (pathname: string) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  const { origin } = new URL(tab.url);
  chrome.tabs?.update(tab.id, { url: `${origin}${pathname}` });
};
