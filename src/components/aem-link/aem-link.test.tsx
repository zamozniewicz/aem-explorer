import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { useAemPage } from "../../hooks/use-aem-page";
import { AemLink } from "./aem-link";

jest.mock("../../hooks/use-aem-page");
jest.mock("../../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({
    openInNewTab: false,
  }),
}));

describe("AemLink component", () => {
  let mockOpenAemPage: jest.Mock;
  beforeEach(() => {
    mockOpenAemPage = jest.fn();
    (useAemPage as jest.Mock).mockReturnValue({
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
    fireEvent.click(button);

    expect(mockOpenAemPage).toHaveBeenCalledWith(pathname);
  });
});
