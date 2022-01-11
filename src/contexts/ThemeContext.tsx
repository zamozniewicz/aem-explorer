import React, { FC, useContext, useMemo, useState } from "react";

export type Theme = "compact" | "comfortable";

interface ThemeContextValues {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextValues>({
  theme: "comfortable",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("comfortable");
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
