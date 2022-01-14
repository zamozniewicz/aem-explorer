import React, { FC, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "compact" | "comfortable";

interface ThemeContextValues {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextValues>({
  theme: "compact",
  setTheme: () => {},
  toggleTheme: () => {},
});

const themeStorageKey = "aemExplorerTheme";
const defaultTheme: Theme = "compact";

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  useEffect(() => {
    chrome.storage?.sync.get(themeStorageKey, (result) => {
      const savedTheme = result[themeStorageKey] || defaultTheme;
      setTheme(savedTheme);
    });
  }, []);

  useEffect(() => {
    chrome.storage?.sync.set({ [themeStorageKey]: theme });
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "comfortable" ? "compact" : "comfortable";

    setTheme(nextTheme);
  };

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
