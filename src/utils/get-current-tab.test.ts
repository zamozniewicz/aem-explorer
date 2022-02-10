import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";

Object.assign(global, require("jest-chrome"));

type MockedTabsQuery = jest.MockedFunction<typeof chrome.tabs.query>;

describe("getCurrentTab helper", () => {
  it("resolves with the current tab", async () => {
    (chrome.tabs.query as MockedTabsQuery).mockImplementation(() =>
      Promise.resolve([mockTab()])
    );
    await getCurrentTab();

    expect(chrome.tabs.query).toHaveBeenCalled();
  });
});
