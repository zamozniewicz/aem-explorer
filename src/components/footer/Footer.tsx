import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useThemeContext } from "../../contexts/ThemeContext";

export const Footer = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1">AEM Explorer</Typography>
        <Box sx={{ flexGrow: 1 }} />
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
