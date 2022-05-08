import React, { FC, useContext, useMemo } from "react";
import { useOpenInNewTab } from "../hooks/use-open-in-new-tab";

export const PreferencesContext = React.createContext<{
  openInNewTab: boolean;
  toggleOpenInNewTab: () => void;
}>({
  openInNewTab: false,
  toggleOpenInNewTab: () => undefined,
});

export const PreferencesContextProvider: FC = ({ children }) => {
  const [openInNewTab, toggleOpenInNewTab] = useOpenInNewTab();

  const value = useMemo(() => {
    return {
      openInNewTab,
      toggleOpenInNewTab,
    };
  }, [openInNewTab, toggleOpenInNewTab]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferencesContext = () => {
  return useContext(PreferencesContext);
};
