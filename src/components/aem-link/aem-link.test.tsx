import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { asMock } from "../../test/as-mock";
import { useAemPage } from "../../hooks/use-aem-page";
import { useOpenInNewTab } from "../../hooks/use-open-in-new-tab";
import { AemLink } from "./aem-link";

jest.mock("../../hooks/use-aem-page");
jest.mock("../../hooks/use-open-in-new-tab");

const mockedUseAemPage = asMock(useAemPage);
const mockedUseOpenInNewTab = asMock(useOpenInNewTab);

describe("AemLink component", () => {
  const mockOpenAemPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockedUseAemPage.mockReturnValue({
      openAemPage: mockOpenAemPage,
    });
  });

  it("renders a button", () => {
    const text = "I'm a button";
    render(<AemLink pathname="/path/name" text={text} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(text);
  });

  it("opens a new page on click", () => {
    const pathname = "/path/name";
    render(<AemLink pathname={pathname} text="I'm a button" />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mockOpenAemPage).toHaveBeenCalledWith(pathname);
  });
});
