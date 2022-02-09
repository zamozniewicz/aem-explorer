import { renderHook, act } from "@testing-library/react-hooks";
import { setWcmMode } from "../utils/set-wcm-mode";
import { useCurrentWcmMode } from "./use-current-wcm-mode";

jest.mock("../utils/set-wcm-mode", () => ({
  setWcmMode: jest.fn(),
}));
jest.mock("../utils/detect-wcm-mode", () => ({
  detectWcmMode: () => Promise.resolve("disabled"),
}));
jest.mock("../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({ openInNewTab: false }),
}));

describe("useCurrentWcmMode hook", () => {
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
