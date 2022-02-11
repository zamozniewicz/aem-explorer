import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { Section } from "../section/section";
import { AemLink } from "../aem-link/aem-link";

export type LinksProps = {
  linksGroups: Array<{
    id: string;
    title?: string;
    links: Array<{
      pathname: string;
      label: string;
    }>;
  }>;
};

export const Links: FC<LinksProps> = ({ linksGroups }) => {
  const { theme } = useThemeContext();

  return (
    <Section>
      {linksGroups.map(({ title, id, links }) => (
        <Box key={id} sx={{ mb: 2 }}>
          {theme.size === "comfortable" && (
            <Typography variant="body1" component="h3" sx={{ mb: 1 }}>
              {title}
            </Typography>
          )}
          <Stack spacing={2} direction="row">
            {links.map(({ pathname, label }) => (
              <AemLink key={pathname} pathname={pathname} text={label} />
            ))}
          </Stack>
        </Box>
      ))}
    </Section>
  );
};
