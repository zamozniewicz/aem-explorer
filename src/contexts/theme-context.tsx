import React, { FC, useContext, useEffect, useMemo, useReducer } from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import browser from "webextension-polyfill";

const themeStorageKey = "aemExplorerTheme";

const light: ThemeOptions = {
  palette: { mode: "light" },
};

const dark: ThemeOptions = {
  palette: { mode: "dark" },
};

export type Theme = {
  size: "compact" | "comfortable";
  color: "light" | "dark";
};

const initialState: Theme = {
  size: "compact",
  color: "dark",
};

export const ThemeContext = React.createContext<{
  theme: Theme;
  toggleThemeSize: () => void;
  toggleThemeColor: () => void;
}>({
  theme: initialState,
  toggleThemeSize: () => {},
  toggleThemeColor: () => {},
});

export type ThemeAction =
  | { type: "reset"; payload: Theme }
  | { type: "size"; payload: Theme["size"] }
  | { type: "color"; payload: Theme["color"] };

export const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "size": {
      return { ...state, size: action.payload };
    }
    case "color": {
      return { ...state, color: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const restoreSavedTheme = async () => {
      const saved = await browser.storage?.sync.get(themeStorageKey);
      const savedTheme = saved[themeStorageKey];
      if (savedTheme) {
        themeDispatch({ type: "reset", payload: savedTheme });
      }
    };

    restoreSavedTheme();
  }, []);

  useEffect(() => {
    browser.storage?.sync.set({ [themeStorageKey]: theme });
  }, [theme]);

  const toggleThemeSize = () => {
    themeDispatch({
      type: "size",
      payload: theme.size === "comfortable" ? "compact" : "comfortable",
    });
  };

  const toggleThemeColor = () => {
    themeDispatch({
      type: "color",
      payload: theme.color === "light" ? "dark" : "light",
    });
  };

  const value = useMemo(
    () => ({
      theme,
      toggleThemeSize,
      toggleThemeColor,
    }),
    [theme]
  );

  return (
    <ThemeProvider
      theme={theme.color === "dark" ? createTheme(dark) : createTheme(light)}
    >
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
