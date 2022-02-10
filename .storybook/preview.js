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

export const globalTypes = {
  theme: {
    name: "Theme color",
    description: "Global theme color",
    defaultValue: "dark",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

const themes = {
  light: {
    palette: { mode: "light" },
  },
  dark: {
    palette: { mode: "dark" },
  }
};

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme];

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Box sx={{
          minWidth: "calc(100vw - 2em)",
          minHeight: "calc(100vh - 2em)",
          bgcolor: "background.paper",
          p: "1em"
        }}
      >
        <Story {...context} />
      </Box>
    </ThemeProvider>
  )
};

export const decorators = [
  withThemeProvider
];