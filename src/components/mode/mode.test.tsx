import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { asMock } from "../../test/as-mock";
import { wcmModes } from "../../model/modes";
import { useCurrentWcmMode } from "../../hooks/use-current-wcm-mode";
import { Mode } from "./mode";

jest.mock("../../hooks/use-current-wcm-mode");

const mockedUseCurrentWcmMode = asMock(useCurrentWcmMode);

describe("Mode component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockHandleWcmModeChange = jest.fn();
  beforeEach(() => {
    mockedUseCurrentWcmMode.mockReturnValue({
      currentWcmMode: "disabled",
      handleWcmModeChange: mockHandleWcmModeChange,
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

  it("handles mode change", () => {
    render(<Mode />);

    const button = screen.getByRole("button", {
      name: "WCM in preview mode",
    });
    userEvent.click(button);

    expect(mockHandleWcmModeChange).toHaveBeenCalledWith("preview");
  });
});
