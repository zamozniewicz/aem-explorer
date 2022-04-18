import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { OpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { PersistDisabledContext } from "../../contexts/persist-disabled-context";
import { Header } from "./header";

describe("Header component", () => {
  describe("New tab switch", () => {
    const newTabName = "New tab";

    it("renders checked new tab switch", () => {
      render(
        <OpenInNewTabContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Header />
        </OpenInNewTabContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox", { name: newTabName });
      expect(newTabSwitch).not.toBeChecked();
    });

    it("renders checked new tab switch", () => {
      render(
        <OpenInNewTabContext.Provider
          value={{
            openInNewTab: true,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Header />
        </OpenInNewTabContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox", { name: newTabName });
      expect(newTabSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockToggleOpenInNewTab = jest.fn();

      render(
        <OpenInNewTabContext.Provider
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: mockToggleOpenInNewTab,
          }}
        >
          <Header />
        </OpenInNewTabContext.Provider>
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
        <PersistDisabledContext.Provider
          value={{
            persistDisabled: false,
            togglePersistDisabled: () => {},
          }}
        >
          <Header />
        </PersistDisabledContext.Provider>
      );

      const persistDisabled = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(persistDisabled).not.toBeChecked();
    });

    it("renders checked persist disabled switch", () => {
      render(
        <PersistDisabledContext.Provider
          value={{
            persistDisabled: true,
            togglePersistDisabled: () => {},
          }}
        >
          <Header />
        </PersistDisabledContext.Provider>
      );

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });
      expect(newPersitDisabledSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockTogglePersistDisabled = jest.fn();

      render(
        <PersistDisabledContext.Provider
          value={{
            persistDisabled: false,
            togglePersistDisabled: mockTogglePersistDisabled,
          }}
        >
          <Header />
        </PersistDisabledContext.Provider>
      );

      const newPersitDisabledSwitch = screen.getByRole("checkbox", {
        name: persistDisabledName,
      });

      userEvent.click(newPersitDisabledSwitch);
      expect(mockTogglePersistDisabled).toBeCalled();
    });
  });
});
