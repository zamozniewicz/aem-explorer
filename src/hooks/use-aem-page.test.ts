import { renderHook } from "@testing-library/react-hooks";
import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
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

const mockedGetCurrentTab = asMock(getCurrentTab);
const mockedIsTab = asMock(isTab);
const mockedWindowClose = jest.fn();
const originalWindowClose = window.close;

describe("useAemPage hook", () => {
  beforeEach(() => {
    window.close = mockedWindowClose;

    jest.clearAllMocks();
  });

  afterEach(() => {
    window.close = originalWindowClose;
  });

  it("allows you to change pathname", async () => {
    mockedIsTab.mockReturnValueOnce(true);
    mockedGetCurrentTab.mockResolvedValueOnce(mockTab());

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(openUrl).toHaveBeenCalledWith({
      tabId: 0,
      url: "http://localhost:4502/sample/path",
      openInNewTab: false,
    });
  });

  it("closes popup when called", async () => {
    mockedIsTab.mockReturnValueOnce(true);
    mockedGetCurrentTab.mockResolvedValueOnce(mockTab());

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(mockedWindowClose).toHaveBeenCalledWith();
  });

  it("ignores change when tab is not set", async () => {
    mockedIsTab.mockReturnValueOnce(false);
    mockedGetCurrentTab.mockResolvedValueOnce(mockTab());

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(openUrl).not.toHaveBeenCalledWith();
  });
});
