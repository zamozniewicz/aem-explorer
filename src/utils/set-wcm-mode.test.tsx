import { waitFor } from "@testing-library/react";
import { setWcmMode } from "./set-wcm-mode";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";
import { openUrl } from "./open-url";
import { isTab } from "./is-tab";

jest.mock("./open-url");
jest.mock("./get-current-tab");
jest.mock("./is-tab");

Object.assign(global, require("jest-chrome"));

type MockedGetCurrentTab = jest.MockedFunction<typeof getCurrentTab>;

describe("setWcmMode helper", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (isTab as jest.MockedFunction<typeof isTab>).mockReturnValue(true);
  });

  it("sets wcmmode=disabled", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/editor.html/content/en.html?wcmmode=preview",
      })
    );

    setWcmMode("disabled", false);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tabId: 0,
        url: "http://localhost:4502/content/en.html?wcmmode=disabled",
        openInNewTab: false,
      });
    });
  });

  it("sets edit wcmmode", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/editor.html/content/en.html?wcmmode=preview",
      })
    );

    setWcmMode("touch", false);

    await waitFor(() => {
      expect(openUrl).toHaveBeenCalledWith({
        tabId: 0,
        url: "http://localhost:4502/editor.html/content/en.html",
        openInNewTab: false,
      });
    });

    expect(chrome.cookies.set).toHaveBeenCalledWith({
      url: "http://localhost",
      path: "/",
      name: "wcmmode",
      value: "edit",
    });

    expect(chrome.cookies.set).toHaveBeenCalledWith({
      url: "http://localhost",
      path: "/",
      name: "cq-editor-layer.page",
      value: "Edit",
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

    expect(chrome.cookies.set).toHaveBeenCalledWith({
      url: "http://localhost",
      path: "/",
      name: "wcmmode",
      value: "preview",
    });

    expect(chrome.cookies.set).toHaveBeenCalledWith({
      url: "http://localhost",
      path: "/",
      name: "cq-editor-layer.page",
      value: "Preview",
    });

    expect(chrome.cookies.set).toHaveBeenCalledWith({
      url: "http://localhost",
      path: "/",
      name: "cq-editor-sidepanel",
      value: "closed",
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

  it("skips setting mode for incorrect tabs", async () => {
    (getCurrentTab as MockedGetCurrentTab).mockResolvedValue(
      mockTab({ url: undefined })
    );
    (isTab as jest.MockedFunction<typeof isTab>).mockReturnValueOnce(false);

    setWcmMode("disabled", false);

    await waitFor(() => {
      expect(isTab).toHaveBeenCalled();
    });

    expect(openUrl).not.toHaveBeenCalled();
  });
});
