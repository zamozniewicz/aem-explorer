import browser from "webextension-polyfill";
import { openUrl } from "./open-url";

describe("openUrl helper", () => {
  it("creates a new tab", () => {
    openUrl({ tabId: 0, url: "http://example.com", openInNewTab: true });

    expect(browser.tabs.create).toHaveBeenCalledWith({
      url: "http://example.com",
    });
  });

  it("update current tab", () => {
    openUrl({ tabId: 0, url: "http://example.com", openInNewTab: false });

    expect(browser.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });

  it("update current tab if argument not defined", () => {
    openUrl({ tabId: 0, url: "http://example.com" });

    expect(browser.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });
});
