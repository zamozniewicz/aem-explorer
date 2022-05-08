import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { asMock } from "../../test/as-mock";
import { PreferencesContext } from "../../contexts/preferences-context";
import { usePersistDisabled } from "../../hooks/use-persist-disabled";
import { Header } from "./header";

jest.mock("../../hooks/use-open-in-new-tab");
jest.mock("../../hooks/use-persist-disabled");

const mockedUsePersistDisabled = asMock(usePersistDisabled);

describe("Header component", () => {
  beforeEach(() => {
    mockedUsePersistDisabled.mockReturnValue([false, () => {}]);
  });

  describe("New tab switch", () => {
    const newTabName = "New tab";

    it("renders checked new tab switch", () => {
      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox", { name: newTabName });
      expect(newTabSwitch).not.toBeChecked();
    });

    it("renders checked new tab switch", () => {
      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: true,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox", { name: newTabName });
      expect(newTabSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockToggleOpenInNewTab = jest.fn();

      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: mockToggleOpenInNewTab,
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox", { name: newTabName });

      userEvent.click(newTabSwitch);
      expect(mockToggleOpenInNewTab).toBeCalled();
    });
  });

  describe("Persist disabled switch", () => {
    const persistDisabledName = "Persist disabled mode";

    it("renders persist disabled switch", () => {
      mockedUsePersistDisabled.mockReturnValue([false, () => {}]);

      render(<Header />);

      const persistDisabled = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(persistDisabled).not.toBeChecked();
    });

    it("renders checked persist disabled switch", () => {
      mockedUsePersistDisabled.mockReturnValue([true, () => {}]);

      render(<Header />);

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(newPersitDisabledSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockTogglePersistDisabled = jest.fn();
      mockedUsePersistDisabled.mockReturnValue([
        false,
        mockTogglePersistDisabled,
      ]);

      render(<Header />);

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });

      userEvent.click(newPersitDisabledSwitch);
      expect(mockTogglePersistDisabled).toBeCalled();
    });
  });
});
