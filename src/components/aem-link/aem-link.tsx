import { FC } from "react";
import { Button } from "@mui/material";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { openAemPage } from "../../utils/open-aem-page";
import { useThemeContext } from "../../contexts/theme-context";

type AemLinkProps = { pathname: string; text: string };

export const AemLink: FC<AemLinkProps> = ({ pathname, text }) => {
  const { openInNewTab } = useOpenInNewTabContext();
  const { themeSize } = useThemeContext();

  const buttonStyles = themeSize === "compact" ? { px: 0.75, py: 0.125 } : {};

  return (
    <Button
      size="small"
      sx={{ ...buttonStyles }}
      variant="contained"
      key={pathname}
      onClick={() => openAemPage(pathname, openInNewTab)}
    >
      {text}
    </Button>
  );
};
