import { FC, useContext } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { asMock } from "../test/as-mock";
import {
  ThemeAction,
  ThemeContext,
  ThemeContextProvider,
  themeReducer,
} from "./theme-context";

const mockedChromeStorageSyncGet = asMock(chrome.storage.sync.get);

const MockComponent: FC = () => {
  const { theme, toggleThemeSize, toggleThemeColor } = useContext(ThemeContext);
  return (
    <>
      <h1>Mock Component</h1>
      <p title="size">{theme.size}</p>
      <p title="color">{theme.color}</p>
      <button type="button" onClick={() => toggleThemeSize()}>
        Toggle theme size
      </button>
      <button type="button" onClick={() => toggleThemeColor()}>
        Toggle theme color
      </button>
    </>
  );
};

const setup = () => {
  render(
    <ThemeContextProvider>
      <MockComponent />
    </ThemeContextProvider>
  );
};

describe("ThemeContextProvider", () => {
  it("renders children", () => {
    setup();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("falls back to default settings when no theme is saved", () => {
    mockedChromeStorageSyncGet.mockImplementationOnce((key: any, callback) => {
      callback({});
    });

    setup();

    expect(screen.getByTitle("size")).toHaveTextContent("compact");
    expect(screen.getByTitle("color")).toHaveTextContent("dark");
  });

  it("restores saved theme", () => {
    mockedChromeStorageSyncGet.mockImplementationOnce((key: any, callback) => {
      callback({
        [key]: { size: "comfortable", color: "light" },
      });
    });

    setup();

    expect(screen.getByTitle("size")).toHaveTextContent("comfortable");
    expect(screen.getByTitle("color")).toHaveTextContent("light");
  });

  it("toggles theme size", () => {
    setup();

    const button = screen.getByRole("button", { name: "Toggle theme size" });
    expect(screen.getByTitle("size")).toHaveTextContent("compact");

    userEvent.click(button);
    expect(screen.getByTitle("size")).toHaveTextContent("comfortable");

    userEvent.click(button);
    expect(screen.getByTitle("size")).toHaveTextContent("compact");
  });

  it("toggles theme color", () => {
    setup();

    const button = screen.getByRole("button", { name: "Toggle theme color" });
    expect(screen.getByTitle("color")).toHaveTextContent("dark");

    userEvent.click(button);
    expect(screen.getByTitle("color")).toHaveTextContent("light");

    userEvent.click(button);
    expect(screen.getByTitle("color")).toHaveTextContent("dark");
  });

  describe("themeReducer", () => {
    it("should handle reset action", () => {
      const resetAction: ThemeAction = {
        type: "reset",
        payload: { size: "compact", color: "dark" },
      };

      expect(
        themeReducer({ size: "comfortable", color: "light" }, resetAction)
      ).toEqual({ size: "compact", color: "dark" });
    });

    it("should handle size action", () => {
      const sizeAction: ThemeAction = {
        type: "size",
        payload: "compact",
      };

      expect(
        themeReducer({ size: "comfortable", color: "light" }, sizeAction)
      ).toEqual({ size: "compact", color: "light" });
    });

    it("should handle color action", () => {
      const colorAction: ThemeAction = {
        type: "color",
        payload: "dark",
      };

      expect(
        themeReducer({ size: "comfortable", color: "light" }, colorAction)
      ).toEqual({ size: "comfortable", color: "dark" });
    });

    it("should handle unknown actions", () => {
      const unknownAction = {
        type: "foo",
      };

      expect(
        themeReducer(
          { size: "comfortable", color: "light" },
          unknownAction as ThemeAction
        )
      ).toEqual({ size: "comfortable", color: "light" });
    });
  });
});
