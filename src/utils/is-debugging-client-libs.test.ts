import { asMock } from "../test/as-mock";
import { mockTab } from "../model/mock-tab";
import { getCurrentTab } from "./get-current-tab";
import { isDebuggingClientLibs } from "./is-debugging-client-libs";

jest.mock("./get-current-tab");

const mockedGetCurrentTab = asMock(getCurrentTab);

describe("isDebuggingClientLibs helper", () => {
  it("returns false for undefined url", async () => {
    mockedGetCurrentTab.mockResolvedValue(
      mockTab({
        url: undefined,
      })
    );

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });

  it("returns true if search param set", async () => {
    mockedGetCurrentTab.mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/content/en.html?debugClientLibs=true",
      })
    );

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(true);
  });

  it("returns false if search param is false", async () => {
    mockedGetCurrentTab.mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/content/en.html?debugClientLibs=false",
      })
    );

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });

  it("returns false if search param is not set", async () => {
    mockedGetCurrentTab.mockResolvedValue(mockTab());

    const isDebugging = await isDebuggingClientLibs();
    expect(isDebugging).toEqual(false);
  });
});
