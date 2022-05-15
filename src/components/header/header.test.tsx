import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { PreferencesContext } from "../../contexts/preferences-context";
import { Header } from "./header";

describe("Header component", () => {
  describe("New tab switch", () => {
    const newTabName = "New tab";

    it("renders checked new tab switch", () => {
      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
            persistDisabled: false,
            togglePersistDisabled: () => {},
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
            persistDisabled: false,
            togglePersistDisabled: () => {},
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
            persistDisabled: false,
            togglePersistDisabled: () => {},
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
      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
            persistDisabled: false,
            togglePersistDisabled: () => {},
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const persistDisabled = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(persistDisabled).not.toBeChecked();
    });

    it("renders checked persist disabled switch", () => {
      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
            persistDisabled: true,
            togglePersistDisabled: () => {},
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(newPersitDisabledSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockTogglePersistDisabled = jest.fn();

      render(
        <PreferencesContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
            persistDisabled: false,
            togglePersistDisabled: mockTogglePersistDisabled,
          }}
        >
          <Header />
        </PreferencesContext.Provider>
      );

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });

      userEvent.click(newPersitDisabledSwitch);
      expect(mockTogglePersistDisabled).toBeCalled();
    });
  });
});
