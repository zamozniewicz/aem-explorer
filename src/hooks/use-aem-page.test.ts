import { renderHook } from "@testing-library/react-hooks";
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
jest.mock("../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({ openInNewTab: false }),
}));

const mockedGetCurrentTab = getCurrentTab as jest.MockedFunction<
  typeof getCurrentTab
>;
const mockedIsTab = isTab as jest.MockedFunction<typeof isTab>;

describe("useAemPage hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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

  it("ignores change when tab is not set", async () => {
    mockedGetCurrentTab.mockResolvedValueOnce(mockTab());
    mockedIsTab.mockReturnValueOnce(false);

    const { result } = renderHook(() => useAemPage());

    await result.current.openAemPage("/sample/path");
    expect(openUrl).not.toHaveBeenCalledWith();
  });
});
