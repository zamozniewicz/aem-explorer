import { waitFor } from "@testing-library/react";
import { mockTab } from "../model/mock-tab";
import { debugClientLibs } from "./debug-client-libs";
import { getCurrentTab } from "./get-current-tab";
import { openUrl } from "./open-url";

jest.mock("./get-current-tab");
jest.mock("./open-url", () => ({
  openUrl: jest.fn(),
}));

type MockedGetCurrentTab = jest.MockedFunction<typeof getCurrentTab>;

describe("debugClientLibs helper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("adds search param", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValueOnce(mockTab());

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
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValueOnce(
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
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValueOnce(
      mockTab({
        url: undefined,
      })
    );

    debugClientLibs(false, true);

    await waitFor(() => {
      expect(openUrl).not.toHaveBeenCalledWith();
    });
  });
});
