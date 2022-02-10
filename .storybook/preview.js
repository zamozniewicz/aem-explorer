import { createTheme, ThemeProvider, Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const light = {
  palette: { mode: "light" },
};

const dark = {
  palette: { mode: "dark" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme(dark)}>
      <Box sx={{
          minWidth: "calc(100vw - 2em)",
          minHeight: "calc(100vh - 2em)",
          bgcolor: "background.paper",
          p: "1em"
        }}
      >
        <Story />
      </Box>
    </ThemeProvider>
  ),
];