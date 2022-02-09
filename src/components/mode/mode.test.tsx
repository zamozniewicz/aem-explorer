import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { wcmModes } from "../../model/modes";
import { Mode } from "./mode";
import { useCurrentWcmMode } from "../../hooks/use-current-wcm-mode";

jest.mock("../../hooks/use-current-wcm-mode");

describe("Mode component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (
      useCurrentWcmMode as jest.MockedFunction<typeof useCurrentWcmMode>
    ).mockReturnValue({
      currentWcmMode: "disabled",
      handleWcmModeChange: () => {},
    });
  });

  it("renders buttons", () => {
    render(<Mode />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(wcmModes.length);
  });

  it("sets active button", () => {
    render(<Mode />);

    const button = screen.getByRole("button", {
      pressed: true,
      name: "WCM disabled",
    });
    expect(button).toBeInTheDocument();
    expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(
      wcmModes.length - 1
    );
  });
});
