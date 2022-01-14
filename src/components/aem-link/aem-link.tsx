import { FC } from "react";
import { Button } from "@mui/material";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { openAemPage } from "../../utils/open-aem-page";

type AemLinkProps = { pathname: string; text: string };

export const AemLink: FC<AemLinkProps> = ({ pathname, text }) => {
  const { openInNewTab } = useOpenInNewTabContext();

  return (
    <Button
      size="small"
      variant="contained"
      key={pathname}
      onClick={() => openAemPage(pathname, openInNewTab)}
    >
      {text}
    </Button>
  );
};
