import { FC } from "react";
import { AppBar, Box, FormControlLabel, Switch, Toolbar } from "@mui/material";
import { useOpenInNewTab } from "../../hooks/use-open-in-new-tab";
import { usePersistDisabled } from "../../hooks/use-persist-disabled";

export const Header: FC = () => {
  const [openInNewTab, toggleOpenInNewTab] = useOpenInNewTab();
  const [persistDisabled, togglePersistDisabled] = usePersistDisabled();

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
