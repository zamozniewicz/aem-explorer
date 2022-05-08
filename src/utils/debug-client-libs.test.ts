import { waitFor } from "@testing-library/react";
import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
import { debugClientLibs } from "./debug-client-libs";
import { getCurrentTab } from "./get-current-tab";
import { isTab } from "./is-tab";
import { openUrl } from "./open-url";

jest.mock("./get-current-tab");
jest.mock("./open-url", () => ({
  openUrl: jest.fn(),
}));
jest.mock("./is-tab");

const mockedGetCurrentTab = asMock(getCurrentTab);
const mockedIsTab = asMock(isTab);
const mockedTab = mockTab();

describe("debugClientLibs helper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockedIsTab.mockReturnValue(true);
  });

  it("adds search param", async () => {
    mockedGetCurrentTab.mockResolvedValueOnce(mockTab());

    debugClientLibs(true, true);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tab: mockedTab,
        url: "http://localhost:4502/content/en.html?debugClientLibs=true",
        openInNewTab: true,
      });
    });
  });

  it("removes search param", async () => {
    const tab = mockTab({
      url: "http://localhost:4502/content/en.html?foo=bar&debugClientLibs=true",
    });
    mockedGetCurrentTab.mockResolvedValueOnce(tab);

    debugClientLibs(false, true);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tab,
        url: "http://localhost:4502/content/en.html?foo=bar",
        openInNewTab: true,
      });
    });
  });

  it("handles incorrect tabs", async () => {
    mockedGetCurrentTab.mockResolvedValueOnce(
      mockTab({
        url: undefined,
      })
    );
    mockedIsTab.mockReturnValueOnce(false);

    debugClientLibs(false, true);

    await waitFor(() => {
      expect(isTab).toHaveBeenCalled();
    });

    expect(openUrl).not.toHaveBeenCalledWith();
  });
});
