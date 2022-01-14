import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { openAemPage } from "../../utils/open-aem-page";
import { linksGroups } from "../../model/links";
import { Section } from "../section/section";

export const Links: FC = () => {
  const { theme } = useThemeContext();
  const { openInNewTab } = useOpenInNewTabContext();

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
                onClick={() => openAemPage(pathname, openInNewTab)}
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
