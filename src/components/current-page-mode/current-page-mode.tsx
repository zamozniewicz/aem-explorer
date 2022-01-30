import { Button, ButtonGroup, Tooltip } from "@mui/material";
import { FC } from "react";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { useThemeContext } from "../../contexts/theme-context";
import { getCurrentTab } from "../../utils/get-current-tab";
import { isTab } from "../../utils/is-tab";
import { openAemPage } from "../../utils/open-aem-page";
import { Section } from "../section/section";

type PageMode = "edit" | "crxde" | "properties";

const pagePropertiesPathname =
  "/mnt/overlay/wcm/core/content/sites/properties.html";
const pagePropertiesPrefix = `${pagePropertiesPathname}?item=`;
const crxDePrefix = "/crx/de/index.jsp";
const editPrefix = "/editor.html";

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

  const path = url.pathname.replace(editPrefix, "").replace(".html", "");
  return Promise.resolve(path);
};

const getPathname = (pageMode: PageMode, path: string): string => {
  if (pageMode === "crxde") {
    return `${crxDePrefix}#${path}`;
  }

  if (pageMode === "properties") {
    return `${pagePropertiesPrefix}${path}`;
  }

  return `${editPrefix}${path}.html`;
};

const openInPageMode = async (pageMode: PageMode, openInNewTab: boolean) => {
  const path = await getPath();
  if (path === null) {
    return;
  }

  const pathname = getPathname(pageMode, path);
  openAemPage(pathname, openInNewTab);
};

export const CurrentPageMode: FC = () => {
  const { themeSize } = useThemeContext();
  const { openInNewTab } = useOpenInNewTabContext();

  return (
    <Section>
      <Section.Title>Open current path in</Section.Title>
      <ButtonGroup
        fullWidth
        size={themeSize === "compact" ? "small" : "medium"}
      >
        <Tooltip title="Open current page in Edit mode">
          <Button onClick={() => openInPageMode("edit", openInNewTab)}>
            Edit
          </Button>
        </Tooltip>
        <Tooltip title="Open current page in CRXDE">
          <Button onClick={() => openInPageMode("crxde", openInNewTab)}>
            CRXDE
          </Button>
        </Tooltip>
        <Tooltip title="Open page properties for the current page">
          <Button onClick={() => openInPageMode("properties", openInNewTab)}>
            Properties
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Section>
  );
};
