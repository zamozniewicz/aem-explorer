import browser from "webextension-polyfill";
import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";

const mockedBrowserTabsQuery = asMock(browser.tabs.query);

describe("getCurrentTab helper", () => {
  const { location } = window;

  beforeAll(() => {
    delete (window as any).location;
    (window as any).location = { href: "http://example.com" };
  });

  afterAll(() => {
    window.location = location;
  });

  it("resolves with the current tab", async () => {
    mockedBrowserTabsQuery.mockResolvedValueOnce([mockTab()]);
    await getCurrentTab();

    expect(browser.tabs.query).toHaveBeenCalled();
  });

  it("works in a browser environment", async () => {
    (browser.tabs as unknown) = undefined;

    const tab = await getCurrentTab();
    expect(tab.url).toBe("http://example.com");
  });
});
