import { FC } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { chrome } from "jest-chrome";
import { asMock } from "../test/as-mock";
import {
  OpenInNewTabContextProvider,
  useOpenInNewTabContext,
} from "./open-in-new-tab-context";

const mockedChromeStorageSyncGet = asMock(chrome.storage.sync.get);

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
    mockedChromeStorageSyncGet.mockImplementation((key, callback) => {
      callback({ [key as string]: true });
    });

    setup();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("handles undefined saved in storage", async () => {
    mockedChromeStorageSyncGet.mockImplementation((key, callback) => {
      callback({});
    });

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
