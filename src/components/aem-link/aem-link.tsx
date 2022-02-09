import { FC } from "react";
import { Button } from "@mui/material";
import { useThemeContext } from "../../contexts/theme-context";
import { useAemPage } from "../../hooks/use-aem-page";

type AemLinkProps = { pathname: string; text: string };

export const AemLink: FC<AemLinkProps> = ({ pathname, text }) => {
  const { openAemPage } = useAemPage();
  const { theme } = useThemeContext();

  const buttonStyles = theme.size === "compact" ? { px: 0.75, py: 0.125 } : {};

  return (
    <Button
      size="small"
      sx={{ ...buttonStyles }}
      variant="contained"
      key={pathname}
      onClick={() => openAemPage(pathname)}
    >
      {text}
    </Button>
  );
};
