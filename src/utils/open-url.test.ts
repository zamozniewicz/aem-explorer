import { openUrl } from "./open-url";

Object.assign(global, require("jest-chrome"));

describe("openUrl helper", () => {
  it("creates a new tab", () => {
    openUrl({ tabId: 0, url: "http://example.com", openInNewTab: true });

    expect(chrome.tabs.create).toHaveBeenCalledWith({
      url: "http://example.com",
    });
  });

  it("update current tab", () => {
    openUrl({ tabId: 0, url: "http://example.com", openInNewTab: false });

    expect(chrome.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });

  it("update current tab if argument not defined", () => {
    openUrl({ tabId: 0, url: "http://example.com" });

    expect(chrome.tabs.update).toHaveBeenCalledWith(0, {
      url: "http://example.com",
    });
  });
});
