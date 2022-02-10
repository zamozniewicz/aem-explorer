export const mockTab = (
  tab: Partial<chrome.tabs.Tab> = {}
): chrome.tabs.Tab => ({
  id: 0,
  groupId: 0,
  windowId: 0,
  index: 0,
  url: "http://localhost:4502/content/en.html",
  pinned: false,
  highlighted: false,
  active: false,
  incognito: false,
  selected: false,
  discarded: false,
  autoDiscardable: false,
  ...tab,
});
