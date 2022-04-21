import { getCurrentTab } from "../utils/get-current-tab";
import { isTab } from "../utils/is-tab";
import { openUrl } from "../utils/open-url";
import { useOpenInNewTab } from "./use-open-in-new-tab";

export const useAemPage = () => {
  const [openInNewTab] = useOpenInNewTab();

  const openAemPage = async (pathname: string) => {
    const tab = await getCurrentTab();

    if (!isTab(tab)) {
      return;
    }

    const { origin } = new URL(tab.url);
    const url = `${origin}${pathname}`;
    openUrl({ tabId: tab.id, url, openInNewTab });

    window.close();
  };

  return { openAemPage };
};
