import { FC } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import browser from "webextension-polyfill";
import { asMock } from "../test/as-mock";
import {
  OpenInNewTabContextProvider,
  useOpenInNewTabContext,
} from "./open-in-new-tab-context";

const mockedBrowserStorageSyncGet = asMock(browser.storage.sync.get);

const MockComponent: FC = () => {
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();

  return (
    <>
      <h1>Mock Component</h1>
      <input
        type="checkbox"
        checked={openInNewTab}
        onChange={() => toggleOpenInNewTab()}
      />
    </>
  );
};

const setup = () => {
  render(
    <OpenInNewTabContextProvider>
      <MockComponent />
    </OpenInNewTabContextProvider>
  );
};

describe("OpenInNewTabContextProvider", () => {
  it("renders children", () => {
    setup();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("initializes from storage", async () => {
    mockedBrowserStorageSyncGet.mockResolvedValueOnce({
      aemExplorerOpenInNewTab: true,
    });

    setup();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("handles undefined saved in storage", async () => {
    mockedBrowserStorageSyncGet.mockResolvedValueOnce({});

    setup();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("toggles open in new tab", () => {
    setup();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
