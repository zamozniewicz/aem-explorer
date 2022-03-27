import browser from "webextension-polyfill";

export const mockTab = (
  tab: Partial<browser.Tabs.Tab> = {}
): browser.Tabs.Tab => ({
  id: 0,
  windowId: 0,
  index: 0,
  url: "http://localhost:4502/content/en.html",
  pinned: false,
  highlighted: false,
  active: false,
  incognito: false,
  discarded: false,
  autoDiscardable: false,
  ...tab,
});
