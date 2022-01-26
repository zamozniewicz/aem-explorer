import { FC } from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <img src="icons/icon-128.png" alt="" width="20" height="20" />
          <Typography variant="body1">AEM Explorer</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
