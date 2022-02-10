import { mockTab } from "../model/mock-tab";
import { detectWcmMode } from "./detect-wcm-mode";
import { getCurrentTab } from "./get-current-tab";

jest.mock("./get-current-tab");

describe("detectWcmMode helper", () => {
  it("returns null if url is not defined", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue(mockTab({ url: undefined }));

    const mode = await detectWcmMode();
    expect(mode).toEqual(null);
  });

  it("returns mode from search param", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/content/en.html?wcmmode=design",
      })
    );

    const mode = await detectWcmMode();
    expect(mode).toEqual("design");
  });

  it("returns null for invalid search param value", async () => {
    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue(
      mockTab({
        url: "http://localhost:4502/content/en.html?wcmmode=xyz",
      })
    );

    const mode = await detectWcmMode();
    expect(mode).toEqual(null);
  });
});
