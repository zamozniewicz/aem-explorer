import { waitFor } from "@testing-library/react";
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

const mockedGetCurrentTab = getCurrentTab as jest.MockedFunction<
  typeof getCurrentTab
>;
const mockedIsTab = isTab as jest.MockedFunction<typeof isTab>;

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
        url: "http://localhost:4502/content/en.html?debugClientLibs=true",
        tabId: 0,
        openInNewTab: true,
      });
    });
  });

  it("removes search param", async () => {
    mockedGetCurrentTab.mockResolvedValueOnce(
      mockTab({
        url: "http://localhost:4502/content/en.html?foo=bar&debugClientLibs=true",
      })
    );

    debugClientLibs(false, true);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        url: "http://localhost:4502/content/en.html?foo=bar",
        tabId: 0,
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
