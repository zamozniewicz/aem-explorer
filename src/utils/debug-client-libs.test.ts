import { waitFor } from "@testing-library/dom";
import { debugClientLibs } from "./debug-client-libs";
import { getCurrentTab } from "./get-current-tab";
import { openUrl } from "./open-url";

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

jest.mock("./get-current-tab");

jest.mock("./open-url", () => ({
  openUrl: jest.fn(),
}));

describe("debugClientLibs helper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("adds search param", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValueOnce({
      ...mockTab,
      url: "http://localhost:4502/content/en.html",
    });

    debugClientLibs(true, true);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        url: "http://localhost:4502/content/en.html?debugClientLibs=true",
        tabId: mockTab.id,
        openInNewTab: true,
      });
    });
  });

  it("removes search param", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValueOnce({
      ...mockTab,
      url: "http://localhost:4502/content/en.html?foo=bar&debugClientLibs=true",
    });

    debugClientLibs(false, true);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        url: "http://localhost:4502/content/en.html?foo=bar",
        tabId: mockTab.id,
        openInNewTab: true,
      });
    });
  });
});
