import { renderHook, act } from "@testing-library/react-hooks";
import { debugClientLibs } from "../utils/debug-client-libs";
import { isDebuggingClientLibs } from "../utils/is-debugging-client-libs";
import { useDebug } from "./use-debug";

jest.mock("../utils/debug-client-libs", () => ({
  debugClientLibs: jest.fn(),
}));
jest.mock("../utils/is-debugging-client-libs", () => ({
  isDebuggingClientLibs: jest.fn(),
}));
jest.mock("../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({ openInNewTab: false }),
}));

const mockedIsDebuggingClientLibs =
  isDebuggingClientLibs as jest.MockedFunction<typeof isDebuggingClientLibs>;

describe("useDebug hook", () => {
  it("allows you to switch debug mode", async () => {
    mockedIsDebuggingClientLibs.mockResolvedValueOnce(true);
    const { result, waitForNextUpdate } = renderHook(() => useDebug());
    await waitForNextUpdate();

    expect(result.current.debug).toBe(true);
    expect(debugClientLibs).not.toHaveBeenCalled();

    act(() => {
      result.current.handleDebugChange(false);
    });

    expect(result.current.debug).toBe(false);
    expect(debugClientLibs).toHaveBeenCalledTimes(1);
    expect(debugClientLibs).toHaveBeenCalledWith(false, false);

    act(() => {
      result.current.handleDebugChange(true);
    });

    expect(result.current.debug).toBe(true);
    expect(debugClientLibs).toHaveBeenCalledTimes(2);
    expect(debugClientLibs).toHaveBeenCalledWith(true, false);
  });
});
