import { mockTab } from "../model/mock-tab";
import { isTab } from "./is-tab";

describe("isTest helper", () => {
  it("returns true if tab has id and url", () => {
    const value = isTab(mockTab());

    expect(value).toBe(true);
  });

  it("returns false if tab id is not defined", () => {
    const value = isTab(mockTab({ id: undefined }));

    expect(value).toBe(false);
  });

  it("returns false if tab url is not defined", () => {
    const value = isTab(mockTab({ url: undefined }));

    expect(value).toBe(false);
  });
});
