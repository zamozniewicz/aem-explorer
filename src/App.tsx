import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

type Theme = "compact" | "comfortable";

function App() {
  const [theme, setTheme] = useState<Theme>("comfortable");

  const handleThemeChange = (): void => {
    const nextTheme: Theme =
      theme === "comfortable" ? "compact" : "comfortable";
    setTheme(nextTheme);
  };

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        AEM Explorer
      </Typography>

      <Box sx={{ display: "flex" }}>
        <ModeIcon color="primary" />
        <Box sx={{ flexGrow: 1 }} />
        <ButtonGroup variant="outlined" size="small">
          <Button size="small">Disabled</Button>
          <Button size="small">Edit</Button>
          <Button size="small">Design</Button>
          <Button size="small">Preview</Button>
        </ButtonGroup>
      </Box>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="small"
            color="inherit"
            onClick={() => handleThemeChange()}
          >
            {theme === "comfortable" ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
