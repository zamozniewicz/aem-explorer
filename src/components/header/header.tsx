import { FC } from "react";
import { AppBar, Box, FormControlLabel, Switch, Toolbar } from "@mui/material";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";

export const Header: FC = () => {
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar variant="dense">
        <FormControlLabel
          sx={{ mx: 2 }}
          control={
            <Switch
              size="small"
              color="default"
              checked={openInNewTab}
              onChange={() => toggleOpenInNewTab()}
            />
          }
          label="New tab"
        />
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};
