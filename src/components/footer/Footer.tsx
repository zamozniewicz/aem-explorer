import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useThemeContext } from "../../contexts/theme-context";
import { useOpenInNewTabContext } from "../../contexts/open-in-new-tab-context";

export const Footer = () => {
  const { theme, toggleThemeSize, toggleThemeColor } = useThemeContext();
  const { openInNewTab, toggleOpenInNewTab } = useOpenInNewTabContext();

  return (
    <AppBar position="sticky" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
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

        <Box sx={{ flexGrow: 1 }} />

        <Tooltip
          title={`Switch to
            ${theme.color === "dark" ? "light" : "dark"}
          theme`}
        >
          <IconButton
            size="small"
            color="inherit"
            onClick={() => toggleThemeColor()}
          >
            {theme.color === "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>

        <Tooltip
          title={`Switch to ${
            theme.size === "comfortable" ? "compact" : "comfortable"
          } theme`}
        >
          <IconButton
            size="small"
            color="inherit"
            onClick={() => toggleThemeSize()}
          >
            {theme.size === "comfortable" ? (
              <UnfoldMoreIcon />
            ) : (
              <UnfoldLessIcon />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
