import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { asMock } from "../../test/as-mock";
import { mockTab } from "../../model/mock-tab";
import { useAemPage } from "../../hooks/use-aem-page";
import { getCurrentTab } from "../../utils/get-current-tab";
import { CurrentPageMode } from "./current-page-mode";

jest.mock("../../hooks/use-aem-page");
jest.mock("../../utils/get-current-tab");

const mockedGetCurrentTab = asMock(getCurrentTab);
const mockedUseAemPage = asMock(useAemPage);

describe("CurrentPageMode component", () => {
  const mockOpenAemPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockedUseAemPage.mockReturnValue({
      openAemPage: mockOpenAemPage,
    });

    mockedGetCurrentTab.mockResolvedValue(mockTab());
  });

  it("renders buttons", () => {
    render(<CurrentPageMode />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  describe("Changing modes", () => {
    it("terminates for incorrect tabs", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: undefined,
        })
      );

      render(<CurrentPageMode />);

      const editButton = screen.getByRole("button", {
        name: "Open current page in Edit mode",
      });
      userEvent.click(editButton);

      expect(mockOpenAemPage).not.toHaveBeenCalled();
    });

    it("switches from CRXDE to Edit", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/crx/de/index.jsp#/content/en",
        })
      );

      render(<CurrentPageMode />);

      const editButton = screen.getByRole("button", {
        name: "Open current page in Edit mode",
      });
      userEvent.click(editButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/editor.html/content/en.html"
        );
      });
    });

    it("switches from Properties to Edit", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en",
        })
      );

      render(<CurrentPageMode />);

      const editButton = screen.getByRole("button", {
        name: "Open current page in Edit mode",
      });
      userEvent.click(editButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/editor.html/content/en.html"
        );
      });
    });

    it("switches from CRXDE to Properties", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/crx/de/index.jsp#/content/en",
        })
      );

      render(<CurrentPageMode />);

      const propertiesButton = screen.getByRole("button", {
        name: "Open page properties for the current page",
      });
      userEvent.click(propertiesButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en"
        );
      });
    });

    it("switches from Edit to Properties", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/editor.html/content/en.html",
        })
      );

      render(<CurrentPageMode />);

      const propertiesButton = screen.getByRole("button", {
        name: "Open page properties for the current page",
      });
      userEvent.click(propertiesButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en"
        );
      });
    });

    it("switches from Edit to CRXDE", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/editor.html/content/en.html",
        })
      );

      render(<CurrentPageMode />);

      const crxdeButton = screen.getByRole("button", {
        name: "Open current page in CRXDE",
      });
      userEvent.click(crxdeButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/crx/de/index.jsp#/content/en"
        );
      });
    });

    it("switches from Properties to CRXDE", async () => {
      mockedGetCurrentTab.mockResolvedValueOnce(
        mockTab({
          url: "http://localhost:4502/mnt/overlay/wcm/core/content/sites/properties.html?item=/content/en",
        })
      );

      render(<CurrentPageMode />);

      const crxdeButton = screen.getByRole("button", {
        name: "Open current page in CRXDE",
      });
      userEvent.click(crxdeButton);

      await waitFor(() => {
        expect(mockOpenAemPage).toHaveBeenCalledWith(
          "/crx/de/index.jsp#/content/en"
        );
      });
    });
  });
});
