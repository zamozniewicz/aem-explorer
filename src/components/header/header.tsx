import { FC } from "react";
import {
  AppBar,
  Box,
  FormControlLabel,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";

export const Header: FC = () => {
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <img
            src="icons/icon-128.png"
            alt="AEM Explorer logo"
            width="20"
            height="20"
          />
          <Typography variant="body1">AEM Explorer</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <FormControlLabel
          sx={{ mx: 2 }}
          control={
            <Switch
              size="small"
              checked={openInNewTab}
              onChange={() => toggleOpenInNewTab()}
            />
          }
          label="New tab"
        />
      </Toolbar>
    </AppBar>
  );
};
