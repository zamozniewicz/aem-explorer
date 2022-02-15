import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";

const mockedChromeTabsQuery = asMock(chrome.tabs.query);

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
    mockedChromeTabsQuery.mockImplementationOnce(() =>
      Promise.resolve([mockTab()])
    );
    await getCurrentTab();

    expect(chrome.tabs.query).toHaveBeenCalled();
  });

  it("works in a browser environment", async () => {
    (chrome.tabs as unknown) = undefined;

    const tab = await getCurrentTab();
    expect(tab.url).toBe("http://example.com");
  });
});
