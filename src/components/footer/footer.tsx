import {
  AppBar,
  Box,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useThemeContext } from "../../contexts/theme-context";

export const Footer = () => {
  const { theme, toggleThemeSize, toggleThemeColor } = useThemeContext();

  return (
    <AppBar position="sticky" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Link
          href="https://chrome.google.com/webstore/detail/aem-explorer/ccmaglfddhhajghfpiifkjkikabckohn"
          underline="none"
          color="white"
          target="_blank"
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <img
              src="icons/icon-128.png"
              alt="AEM Explorer logo"
              width="20"
              height="20"
            />
            <Typography variant="body1">AEM Explorer</Typography>
          </Stack>
        </Link>

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
