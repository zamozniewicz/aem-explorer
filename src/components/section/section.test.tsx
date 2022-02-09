import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ToggleButton } from "@mui/material";
import { ThemeContext } from "../../contexts/theme-context";
import { Section } from "./section";

describe("Section component", () => {
  it("renders content", () => {
    render(<Section>test content</Section>);

    expect(screen.getByText("test content")).toBeInTheDocument();
  });

  describe("Section Title", () => {
    it("renders heading in comfortable theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "comfortable", color: "light" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Section.Title>Title</Section.Title>
        </ThemeContext.Provider>
      );

      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("does not render heading in compact theme", () => {
      render(
        <ThemeContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            theme: { size: "compact", color: "light" },
            toggleThemeSize: () => {},
            toggleThemeColor: () => {},
          }}
        >
          <Section.Title>Title</Section.Title>
        </ThemeContext.Provider>
      );

      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });
  });

  describe("Section Buttons", () => {
    it("renders", () => {
      render(
        <Section.Buttons value="current" onChange={() => {}}>
          <ToggleButton value="value">button</ToggleButton>
        </Section.Buttons>
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
