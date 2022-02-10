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
    chrome.tabs?.create(properties);
  } else {
    chrome.tabs?.update(tabId, properties);
  }
};
