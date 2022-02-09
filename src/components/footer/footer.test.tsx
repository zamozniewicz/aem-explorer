import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { OpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { ThemeContext } from "../../contexts/theme-context";
import { Footer } from "./footer";

describe("Footer component", () => {
  describe("New tab switch", () => {
    it("renders checked new tab switch", () => {
      render(
        <OpenInNewTabContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Footer />
        </OpenInNewTabContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox");
      expect(newTabSwitch).not.toBeChecked();
    });

    it("renders unchecked new tab switch", () => {
      render(
        <OpenInNewTabContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            openInNewTab: true,
            toggleOpenInNewTab: () => {},
          }}
        >
          <Footer />
        </OpenInNewTabContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox");
      expect(newTabSwitch).toBeChecked();
    });

    it("toggles tab switch", () => {
      const mockToggleOpenInNewTab = jest.fn();

      render(
        <OpenInNewTabContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            openInNewTab: false,
            toggleOpenInNewTab: mockToggleOpenInNewTab,
          }}
        >
          <Footer />
        </OpenInNewTabContext.Provider>
      );

      const newTabSwitch = screen.getByRole("checkbox");

      fireEvent.click(newTabSwitch);
      expect(mockToggleOpenInNewTab).toBeCalled();
    });
  });

  describe("Theme color", () => {
    it("renders color switch in light theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "light" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      expect(
        screen.getByRole("button", {
          name: "Switch to dark theme",
        })
      ).toBeInTheDocument();
    });

    it("renders color switch in dark theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "dark" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      expect(
        screen.getByRole("button", {
          name: "Switch to light theme",
        })
      ).toBeInTheDocument();
    });

    it("toggles theme color", () => {
      const mockToggleThemeColor = jest.fn();

      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "dark" },
            toggleThemeSize: () => {},
            toggleThemeColor: mockToggleThemeColor,
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      const button = screen.getByRole("button", {
        name: "Switch to light theme",
      });
      fireEvent.click(button);

      expect(mockToggleThemeColor).toHaveBeenCalled();
    });
  });

  describe("Theme size", () => {
    it("renders size switch in comfortable theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "dark" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      expect(
        screen.getByRole("button", {
          name: "Switch to compact theme",
        })
      ).toBeInTheDocument();
    });

    it("renders size switch in compact theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "compact", color: "dark" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      expect(
        screen.getByRole("button", {
          name: "Switch to comfortable theme",
        })
      ).toBeInTheDocument();
    });

    it("toggles theme size", () => {
      const mockToggleThemeSize = jest.fn();

      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "dark" },
            toggleThemeSize: mockToggleThemeSize,
            toggleThemeColor: () => {},
          }}
        >
          <Footer />
        </ThemeContext.Provider>
      );

      const button = screen.getByRole("button", {
        name: "Switch to compact theme",
      });
      fireEvent.click(button);

      expect(mockToggleThemeSize).toHaveBeenCalled();
    });
  });
});
