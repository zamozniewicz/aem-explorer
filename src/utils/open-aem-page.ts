import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";
import { openUrl } from "./open-url";

export const openAemPage = async (pathname: string, openInNewTab: boolean) => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return;
  }

  const { origin } = new URL(tab.url);
  const url = `${origin}${pathname}`;
  openUrl({ tabId: tab.id, url, openInNewTab });
};
