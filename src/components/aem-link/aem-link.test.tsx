import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { openAemPage } from "../../utils/open-aem-page";
import { AemLink } from "./aem-link";

jest.mock("../../utils/open-aem-page", () => ({
  openAemPage: jest.fn(),
}));

jest.mock("../../contexts/open-in-new-tab-context", () => ({
  useOpenInNewTabContext: () => ({
    openInNewTab: false,
  }),
}));

describe("AemLink component", () => {
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

    expect(openAemPage).toHaveBeenCalledWith(pathname, false);
  });
});
