import { FC } from "react";
import { AppBar, Box, FormControlLabel, Switch, Toolbar } from "@mui/material";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";
import { usePersistDisabledContext } from "../../contexts/persist-disabled-context";

export const Header: FC = () => {
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();
  const { persistDisabled, togglePersistDisabled } =
    usePersistDisabledContext();

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
        <FormControlLabel
          sx={{ mx: 2 }}
          control={
            <Switch
              size="small"
              color="default"
              checked={persistDisabled}
              onChange={() => togglePersistDisabled()}
            />
          }
          label="Persist disabled mode"
        />
      </Toolbar>
    </AppBar>
  );
};
