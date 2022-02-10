import { waitFor } from "@testing-library/react";
import { setWcmMode } from "./set-wcm-mode";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";
import { openUrl } from "./open-url";

jest.mock("./open-url");
jest.mock("./get-current-tab");

Object.assign(global, require("jest-chrome"));

type MockedGetCurrentTab = jest.MockedFunction<typeof getCurrentTab>;

describe("setWcmMode helper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets wcmmode=disabled", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(mockTab());

    setWcmMode("disabled", false);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tabId: 0,
        url: "http://localhost:4502/content/en.html?wcmmode=disabled",
        openInNewTab: false,
      });
    });
  });

  it("sets wcmmode=preview", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(mockTab());

    setWcmMode("preview", false);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tabId: 0,
        url: "http://localhost:4502/editor.html/content/en.html?wcmmode=preview",
        openInNewTab: false,
      });
    });
  });

  it("sets wcmmode=design", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(mockTab());

    setWcmMode("design", false);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tabId: 0,
        url: "http://localhost:4502/editor.html/content/en.html?wcmmode=design",
        openInNewTab: false,
      });
    });
  });
});
