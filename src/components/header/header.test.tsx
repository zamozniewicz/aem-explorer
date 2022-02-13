import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { OpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { Header } from "./header";

describe("Header component", () => {
  it("renders logo", () => {
    render(<Header />);

    expect(screen.getByAltText("AEM Explorer logo")).toBeInTheDocument();
  });

  describe("New tab switch", () => {
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

      const newTabSwitch = screen.getByRole("checkbox");
      expect(newTabSwitch).not.toBeChecked();
    });

    it("renders unchecked new tab switch", () => {
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

      const newTabSwitch = screen.getByRole("checkbox");
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

      const newTabSwitch = screen.getByRole("checkbox");

      userEvent.click(newTabSwitch);
      expect(mockToggleOpenInNewTab).toBeCalled();
    });
  });
});
