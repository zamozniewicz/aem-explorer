import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useThemeContext } from "../../contexts/theme-context";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";

export const Footer = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
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
          label="Open in new tab"
        />
        <Tooltip
          title={
            theme === "comfortable"
              ? "Switch to compact theme"
              : "Switch to comfortable theme"
          }
        >
          <IconButton
            size="small"
            color="inherit"
            onClick={() => toggleTheme()}
          >
            {theme === "comfortable" ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
