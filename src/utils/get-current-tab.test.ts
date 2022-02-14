import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";

const mockedChromeTabsQuery = asMock(chrome.tabs.query);

describe("getCurrentTab helper", () => {
  it("resolves with the current tab", async () => {
    mockedChromeTabsQuery.mockImplementationOnce(() =>
      Promise.resolve([mockTab()])
    );
    await getCurrentTab();

    expect(chrome.tabs.query).toHaveBeenCalled();
  });
});
