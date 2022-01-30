import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";

export type ThemeSize = "compact" | "comfortable";
export type ThemeBrightness = "light" | "dark";

interface ThemeContextValues {
  themeSize: ThemeSize;
  toggleThemeSize: () => void;
  themeBrightness: ThemeBrightness;
  toggleThemeBrightness: () => void;
}

const ThemeContext = React.createContext<ThemeContextValues>({
  themeSize: "compact",
  toggleThemeSize: () => {},
  themeBrightness: "dark",
  toggleThemeBrightness: () => {},
});

const themeSizeStorageKey = "aemExplorerThemeSize";
const themeBrigthnessStorageKey = "aemExplorerThemeBrigthness";
const defaultThemeSize: ThemeSize = "compact";
const defaultThemeBrightness: ThemeBrightness = "dark";

const light: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const ThemeContextProvider: FC = ({ children }) => {
  const [themeSize, setThemeSize] = useState<ThemeSize>(defaultThemeSize);
  useEffect(() => {
    chrome.storage?.sync.get(themeSizeStorageKey, (result) => {
      const savedTheme = result[themeSizeStorageKey] || defaultThemeSize;
      setThemeSize(savedTheme);
    });
  }, []);
  useEffect(() => {
    chrome.storage?.sync.set({ [themeSizeStorageKey]: themeSize });
  }, [themeSize]);

  const [themeBrightness, setThemeBrightness] = useState<ThemeBrightness>(
    defaultThemeBrightness
  );
  useEffect(() => {
    chrome.storage?.sync.get(themeBrigthnessStorageKey, (result) => {
      const savedTheme =
        result[themeBrigthnessStorageKey] || defaultThemeBrightness;
      setThemeBrightness(savedTheme);
    });
  }, []);
  useEffect(() => {
    chrome.storage?.sync.set({ [themeBrigthnessStorageKey]: themeBrightness });
  }, [themeBrightness]);

  const toggleThemeSize = () => {
    const nextThemeSize =
      themeSize === "comfortable" ? "compact" : "comfortable";

    setThemeSize(nextThemeSize);
  };

  const toggleThemeBrightness = () => {
    const nextThemeBrigthness = themeBrightness === "light" ? "dark" : "light";

    setThemeBrightness(nextThemeBrigthness);
  };

  const value = useMemo(
    () => ({
      themeSize,
      toggleThemeSize,
      themeBrightness,
      toggleThemeBrightness,
    }),
    [themeSize, themeBrightness]
  );

  return (
    <ThemeProvider
      theme={
        themeBrightness === "dark" ? createTheme(dark) : createTheme(light)
      }
    >
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
