import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { ThemeContext } from "../../contexts/theme-context";
import { Footer } from "./footer";

describe("Footer component", () => {
  it("renders logo", () => {
    render(<Footer />);

    expect(screen.getByAltText("AEM Explorer logo")).toBeInTheDocument();
  });

  describe("Theme color", () => {
    it("renders color switch in light theme", () => {
      render(
        <ThemeContext.Provider
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
      userEvent.click(button);

      expect(mockToggleThemeColor).toHaveBeenCalled();
    });
  });

  describe("Theme size", () => {
    it("renders size switch in comfortable theme", () => {
      render(
        <ThemeContext.Provider
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
      userEvent.click(button);

      expect(mockToggleThemeSize).toHaveBeenCalled();
    });
  });
});
