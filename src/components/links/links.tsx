import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { openAemPage } from "../../utils/open-aem-page";
import { Section } from "../section/section";
import { useThemeContext } from "../../contexts/theme-context";

type AemLink = {
  pathname: string;
  label: string;
};

type LinksGroup = {
  id: string;
  title?: string;
  links: AemLink[];
};

const linksGroups: LinksGroup[] = [
  {
    title: "Admin",
    id: "Admin",
    links: [
      {
        pathname: "/system/console/configMgr",
        label: "ConfigMgr",
      },
      {
        pathname: "/system/console/status-slinglogs",
        label: "Logs",
      },
      {
        pathname: "/system/console/jmx",
        label: "JMX",
      },
    ],
  },
  {
    id: "admin-2",
    links: [
      {
        pathname: "/libs/cq/search/content/querydebug.html",
        label: "Query Builder",
      },
      {
        pathname: "/libs/cq/tagging/gui/content/tags.html/etc/tags",
        label: "Tags",
      },
      {
        pathname: "/libs/cq/i18n/translator.html",
        label: "Dictionaries",
      },
    ],
  },
  {
    title: "Console",
    id: "console",
    links: [
      {
        pathname: "/crx/de/index.jsp",
        label: "CRXDE",
      },
      {
        pathname: "/crx/packmgr/index.jsp",
        label: "PackMgr",
      },
      {
        pathname: "/system/console/bundles",
        label: "Bundles",
      },
    ],
  },
  {
    title: "Sites and DAM",
    id: "sites-dam",
    links: [
      {
        pathname: "/assets.html/content/dam",
        label: "DAM",
      },
      {
        pathname: "/libs/wcm/core/content/sites/templates.html/conf",
        label: "Templates",
      },
      {
        pathname: "/aem/experience-fragments.html/content/experience-fragments",
        label: "Exp. fragments",
      },
      {
        pathname: "/sites.html/content",
        label: "Sites",
      },
    ],
  },
];

export const Links: FC = () => {
  const { theme } = useThemeContext();

  return (
    <Section>
      <Section.Title>Links</Section.Title>
      {linksGroups.map(({ title, id, links }) => (
        <div key={id}>
          {theme === "comfortable" && (
            <Typography variant="body1" component="h3" sx={{ mb: 1 }}>
              {title}
            </Typography>
          )}
          <Stack sx={{ mb: 2 }} spacing={2} direction="row">
            {links.map(({ pathname, label }) => (
              <Button
                size="small"
                variant="contained"
                key={pathname}
                onClick={() => openAemPage(pathname)}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </div>
      ))}
    </Section>
  );
};
