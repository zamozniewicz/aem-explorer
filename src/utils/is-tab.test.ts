import { isTab } from "./is-tab";

const mockTab: chrome.tabs.Tab = {
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
};

describe("isTest helper", () => {
  it("returns true if tab has id and url", () => {
    const value = isTab(mockTab);

    expect(value).toBe(true);
  });

  it("returns false if tab id is not defined", () => {
    const value = isTab({ ...mockTab, id: undefined });

    expect(value).toBe(false);
  });

  it("returns false if tab url is not defined", () => {
    const value = isTab({ ...mockTab, url: undefined });

    expect(value).toBe(false);
  });
});
