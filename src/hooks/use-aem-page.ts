import { usePreferencesContext } from "../contexts/preferences-context";
import { getCurrentTab } from "../utils/get-current-tab";
import { isTab } from "../utils/is-tab";
import { openUrl } from "../utils/open-url";

export const useAemPage = () => {
  const { openInNewTab } = usePreferencesContext();

  const openAemPage = async (pathname: string) => {
    const tab = await getCurrentTab();

    if (!isTab(tab)) {
      return;
    }

    const { origin } = new URL(tab.url);
    const url = `${origin}${pathname}`;
    openUrl({ tab, url, openInNewTab });

    window.close();
  };

  return { openAemPage };
};
