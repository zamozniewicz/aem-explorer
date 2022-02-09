import { renderHook } from "@testing-library/react-hooks";
import { getCurrentTab } from "../utils/get-current-tab";
import { isTab } from "../utils/is-tab";
import { openUrl } from "../utils/open-url";
import { useAemPage } from "./use-aem-page";

jest.mock("../utils/get-current-tab", () => ({
  getCurrentTab: jest.fn(),
}));
jest.mock("../utils/is-tab");
jest.mock("../utils/open-url", () => ({
  openUrl: jest.fn(),
}));
jest.mock("../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({ openInNewTab: false }),
}));

const mockTab: chrome.tabs.Tab = {
  id: 0,
  groupId: 0,
  windowId: 0,
  index: 0,
  url: "http://localhost:4502/content/en.html",
  pinned: false,
  highlighted: false,
  active: false,
  incognito: false,
  selected: false,
  discarded: false,
  autoDiscardable: false,
};

describe("useAemPage hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("allows you to change pathname", async () => {
    (isTab as jest.MockedFunction<typeof isTab>).mockReturnValueOnce(true);
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValueOnce(mockTab);

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(openUrl).toHaveBeenCalledWith({
      tabId: 0,
      url: "http://localhost:4502/sample/path",
      openInNewTab: false,
    });
  });

  it("ignores change when tab is not set", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValueOnce(mockTab);
    (isTab as jest.MockedFunction<typeof isTab>).mockReturnValueOnce(false);

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(openUrl).not.toHaveBeenCalledWith();
  });
});