import { renderHook, act } from "@testing-library/react-hooks";
import { asMock } from "../test/as-mock";
import { setWcmMode } from "../utils/set-wcm-mode";
import { useCurrentWcmMode } from "./use-current-wcm-mode";
import { useOpenInNewTab } from "./use-open-in-new-tab";

jest.mock("../utils/set-wcm-mode", () => ({
  setWcmMode: jest.fn(),
}));
jest.mock("../utils/detect-wcm-mode", () => ({
  detectWcmMode: () => Promise.resolve("disabled"),
}));
jest.mock("./use-open-in-new-tab");

const mockedUseOpenInNewTab = asMock(useOpenInNewTab);

describe("useCurrentWcmMode hook", () => {
  beforeEach(() => {
    mockedUseOpenInNewTab.mockReturnValue([false, () => {}]);
  });

  it("allows you to switch wcm modes", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCurrentWcmMode());
    await waitForNextUpdate();

    expect(result.current.currentWcmMode).toBe("disabled");

    act(() => {
      result.current.handleWcmModeChange("touch");
    });

    expect(result.current.currentWcmMode).toBe("touch");
    expect(setWcmMode).toHaveBeenCalledTimes(1);
    expect(setWcmMode).toHaveBeenCalledWith("touch", false);

    act(() => {
      result.current.handleWcmModeChange("preview");
    });

    expect(result.current.currentWcmMode).toBe("preview");
    expect(setWcmMode).toHaveBeenCalledTimes(2);
    expect(setWcmMode).toHaveBeenCalledWith("preview", false);
  });
});
