import { render } from "@testing-library/react";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { mockTab } from "../../model/mock-tab";
import { useAemPage } from "../../hooks/use-aem-page";
import { getCurrentTab } from "../../utils/get-current-tab";
import { CurrentPageMode } from "./current-page-mode";

jest.mock("../../hooks/use-aem-page");
jest.mock("../../utils/get-current-tab");

describe("CurrentPageMode component", () => {
  const mockOpenAemPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (useAemPage as jest.MockedFunction<typeof useAemPage>).mockReturnValue({
      openAemPage: mockOpenAemPage,
    });

    (
      getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
    ).mockResolvedValue(
      mockTab({ url: "http://localhost:4502/content/en.html" })
    );
  });

  it("renders buttons", () => {
    render(<CurrentPageMode />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  describe("Changing modes", () => {
    it("switches from CRXDE to Edit", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/crx/de/index.jsp#/content/en",
        })
      );

      render(<CurrentPageMode />);

      const editButton = screen.getByRole("button", {
        name: "Open current page in Edit mode",
      });
      fireEvent.click(editButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/editor.html/content/en.html"
        );
      });
    });

    it("switches from Properties to Edit", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en",
        })
      );

      render(<CurrentPageMode />);

      const editButton = screen.getByRole("button", {
        name: "Open current page in Edit mode",
      });
      fireEvent.click(editButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/editor.html/content/en.html"
        );
      });
    });

    it("switches from CRXDE to Properties", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/crx/de/index.jsp#/content/en",
        })
      );

      render(<CurrentPageMode />);

      const propertiesButton = screen.getByRole("button", {
        name: "Open page properties for the current page",
      });
      fireEvent.click(propertiesButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en"
        );
      });
    });

    it("switches from Edit to Properties", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/editor.html/content/en.html",
        })
      );

      render(<CurrentPageMode />);

      const propertiesButton = screen.getByRole("button", {
        name: "Open page properties for the current page",
      });
      fireEvent.click(propertiesButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en"
        );
      });
    });

    it("switches from Edit to CRXDE", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/editor.html/content/en.html",
        })
      );

      render(<CurrentPageMode />);

      const crxdeButton = screen.getByRole("button", {
        name: "Open current page in CRXDE",
      });
      fireEvent.click(crxdeButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/crx/de/index.jsp#/content/en"
        );
      });
    });

    it("switches from Properties to CRXDE", async () => {
      (
        getCurrentTab as jest.MockedFunction<typeof getCurrentTab>
      ).mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en",
        })
      );

      render(<CurrentPageMode />);

      const crxdeButton = screen.getByRole("button", {
        name: "Open current page in CRXDE",
      });
      fireEvent.click(crxdeButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/crx/de/index.jsp#/content/en"
        );
      });
    });
  });
});
