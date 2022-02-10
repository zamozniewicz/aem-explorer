import { waitFor } from "@testing-library/react";
import { mockTab } from "../model/mock-tab";
import { debugClientLibs } from "./debug-client-libs";
import { getCurrentTab } from "./get-current-tab";
import { openUrl } from "./open-url";

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
    ).mockResolvedValueOnce(
      mockTab({ url: "http://localhost:4502/content/en.html" })
    );

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
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValueOnce(
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
});
