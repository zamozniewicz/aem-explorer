import { getCurrentTab } from "./get-current-tab";
import { isDebuggingClientLibs } from "./is-debugging-client-libs";

jest.mock("./get-current-tab");

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

describe("isDebuggingClientLibs helper", () => {
  it("returns false for undefined url", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue({
      ...mockTab,
      url: "http://localhost:4502/content/en.html",
    });

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });

  it("returns true if search param set", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue({
      ...mockTab,
      url: "http://localhost:4502/content/en.html?debugClientLibs=true",
    });

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(true);
  });

  it("returns false if search param is false", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue({
      ...mockTab,
      url: "http://localhost:4502/content/en.html?debugClientLibs=false",
    });

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });

  it("returns false if search param is not set", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue({
      ...mockTab,
      url: "http://localhost:4502/content/en.html",
    });

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });
});
