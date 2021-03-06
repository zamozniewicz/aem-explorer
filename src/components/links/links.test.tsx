import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ThemeContext } from "../../contexts/theme-context";
import { Links } from "./links";

const linksGroups = [
  {
    title: "Group 1",
    id: "group1",
    links: [{ pathname: "/link11", label: "Link 1 1" }],
  },
  {
    id: "group2",
    links: [
      { pathname: "/link21", label: "Link 2/1" },
      { pathname: "/link22", label: "Link 2/2" },
    ],
  },
];

describe("Links component", () => {
  it("renders buttons", () => {
    render(<Links linksGroups={linksGroups} />);

    const links = screen.getAllByRole("button");
    expect(links).toHaveLength(3);
  });

  it("renders group headings in comfortable theme", () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: { size: "comfortable", color: "light" },
          toggleThemeSize: () => {},
          toggleThemeColor: () => {},
        }}
      >
        <Links linksGroups={linksGroups} />
      </ThemeContext.Provider>
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Group 1" })
    ).toBeInTheDocument();
  });

  it("does not render group headings in compact theme", () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: { size: "compact", color: "light" },
          toggleThemeSize: () => {},
          toggleThemeColor: () => {},
        }}
      >
        <Links linksGroups={linksGroups} />
      </ThemeContext.Provider>
    );

    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });
});
