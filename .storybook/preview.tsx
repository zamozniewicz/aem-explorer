import { createTheme, ThemeProvider, Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeContext } from "../src/contexts/theme-context";

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
  themeColor: {
    name: "Theme color",
    description: "Global theme color",
    defaultValue: "dark",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      showName: true,
    },
  },
  themeSize: {
    name: "Theme size",
    description: "Global theme size",
    defaultValue: "comfortable",
    toolbar: {
      icon: "zoom",
      items: ["compact", "comfortable"],
      showName: true,
    },
  }
};

const withMuiThemeProvider = (Story, context) => {
  const muiThemes = {
    light: { palette: { mode: "light", } },
    dark: { palette: { mode: "dark" } },
  };
  const themeColor = muiThemes[context.globals.themeColor];

  return (
    <ThemeProvider theme={createTheme(themeColor)}>
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

const withThemeSizeProvider = (Story, context) => {
  const { themeSize, themeColor } = context.globals;

  return (
    <ThemeContext.Provider value={{
      theme: {
        color: themeColor,
        size: themeSize,
      },
      toggleThemeSize: ()=> {},
      toggleThemeColor: ()=> {},
    }}>
      <Story {...context} />
    </ThemeContext.Provider>
  )
}

export const decorators = [
  withThemeSizeProvider,
  withMuiThemeProvider,
];
