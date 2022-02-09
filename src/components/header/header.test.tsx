import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Header } from "./header";

describe("Header component", () => {
  it("renders logo", () => {
    render(<Header />);

    expect(screen.getByAltText("AEM Explorer logo")).toBeInTheDocument();
  });
});
