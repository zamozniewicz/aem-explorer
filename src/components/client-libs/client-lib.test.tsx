import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { asMock } from "../../test/as-mock";
import { useAemPage } from "../../hooks/use-aem-page";
import { useDebug } from "../../hooks/use-debug";
import { ClientLibs } from "./client-libs";

jest.mock("../../hooks/use-aem-page");
jest.mock("../../hooks/use-debug");

const mockedUseAemPage = asMock(useAemPage);
const mockedUseDebug = asMock(useDebug);

describe("ClientLibs component", () => {
  const mockOpenAemPage = jest.fn();
  const mockHandleDebugChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockedUseAemPage.mockReturnValue({
      openAemPage: mockOpenAemPage,
    });

    mockedUseDebug.mockReturnValue({
      debug: false,
      handleDebugChange: mockHandleDebugChange,
    });
  });

  it("renders controls", () => {
    render(<ClientLibs />);

    const button = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");
    expect(button).toHaveTextContent("Dumplibs");
    expect(checkbox).not.toBeChecked();
  });

  it("dumps clientlibs on button click", () => {
    render(<ClientLibs />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mockOpenAemPage).toHaveBeenCalledWith(
      "/libs/granite/ui/content/dumplibs.rebuild.html"
    );
  });

  it("toggles debugClientLibs on click", () => {
    render(<ClientLibs />);

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);

    expect(mockHandleDebugChange).toHaveBeenCalledWith(true);
  });
});
