import { Button, ButtonGroup, Tooltip } from "@mui/material";
import { FC } from "react";
import { useThemeContext } from "../../contexts/theme-context";
import { useAemPage } from "../../hooks/use-aem-page";
import { editorPath } from "../../model/modes";
import { getCurrentTab } from "../../utils/get-current-tab";
import { isTab } from "../../utils/is-tab";
import { Section } from "../section/section";

const pageModes = ["edit", "crxde", "properties"] as const;
type PageMode = typeof pageModes[number];

const pagePropertiesPathname =
  "/mnt/overlay/wcm/core/content/sites/properties.html";
const pagePropertiesPrefix = `${pagePropertiesPathname}?item=`;
const crxDePrefix = "/crx/de/index.jsp";

const getPath = async (): Promise<string | null> => {
  const tab = await getCurrentTab();

  if (!isTab(tab)) {
    return Promise.resolve(null);
  }

  const url = new URL(tab.url);

  if (url.pathname.startsWith(pagePropertiesPathname)) {
    const path = `${url.pathname}${url.search}`.replace(
      pagePropertiesPrefix,
      ""
    );
    return Promise.resolve(path);
  }

  if (url.pathname.startsWith(crxDePrefix)) {
    const path = url.hash.substring(1);
    return Promise.resolve(path);
  }

  const path = url.pathname.replace(editorPath, "").replace(".html", "");
  return Promise.resolve(path);
};

const getPathname = (pageMode: PageMode, path: string): string => {
  if (pageMode === "crxde") {
    return `${crxDePrefix}#${path}`;
  }

  if (pageMode === "properties") {
    return `${pagePropertiesPrefix}${path}`;
  }

  return `${editorPath}${path}.html`;
};

export const CurrentPageMode: FC = () => {
  const { theme } = useThemeContext();
  const { openAemPage } = useAemPage();

  const openInPageMode = async (pageMode: PageMode) => {
    const path = await getPath();
    if (path === null) {
      return;
    }

    const pathname = getPathname(pageMode, path);
    openAemPage(pathname);
  };

  return (
    <Section>
      <Section.Title>Open current path in</Section.Title>
      <ButtonGroup
        fullWidth
        size={theme.size === "compact" ? "small" : "medium"}
      >
        <Tooltip title="Open current page in Edit mode">
          <Button onClick={() => openInPageMode("edit")}>Edit</Button>
        </Tooltip>
        <Tooltip title="Open current page in CRXDE">
          <Button onClick={() => openInPageMode("crxde")}>CRXDE</Button>
        </Tooltip>
        <Tooltip title="Open page properties for the current page">
          <Button onClick={() => openInPageMode("properties")}>
            Properties
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Section>
  );
};
