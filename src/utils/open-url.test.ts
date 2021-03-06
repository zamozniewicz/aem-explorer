import { Tab } from "../model/tab";
import { mockTab } from "../model/mock-tab";
import { openUrl } from "./open-url";

const mockedWindowClose = jest.fn();
const originalWindowClose = window.close;

describe("openUrl helper", () => {
  const tab: Tab = mockTab();

  beforeEach(() => {
    window.close = mockedWindowClose;

    jest.clearAllMocks();
  });

  afterEach(() => {
    window.close = originalWindowClose;
  });

  it("creates a new tab", () => {
    openUrl({ tab, url: "http://example.com", openInNewTab: true });

    expect(chrome.tabs.create).toHaveBeenCalledWith({
      index: 1,
      url: "http://example.com",
    });
  });

  it("creates a new tab next to the current one", () => {
    openUrl({
      tab: { ...tab, index: 2 },
      url: "http://example.com",
      openInNewTab: true,
    });

    expect(chrome.tabs.create).toHaveBeenCalledWith(
      expect.objectContaining({
        index: 3,
      })
    );
  });

  it("updates current tab", () => {
    openUrl({ tab, url: "http://example.com", openInNewTab: false });

    expect(chrome.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });

  it("updates current tab if argument not defined", () => {
    openUrl({ tab, url: "http://example.com" });

    expect(chrome.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });
});
