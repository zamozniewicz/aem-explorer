import React, { FC, useContext, useMemo } from "react";
import { useOpenInNewTab } from "../hooks/use-open-in-new-tab";
import { usePersistDisabled } from "../hooks/use-persist-disabled";

export const PreferencesContext = React.createContext<{
  openInNewTab: boolean;
  toggleOpenInNewTab: () => void;
  persistDisabled: boolean;
  togglePersistDisabled: () => void;
}>({
  openInNewTab: false,
  toggleOpenInNewTab: () => undefined,
  persistDisabled: false,
  togglePersistDisabled: () => undefined,
});

export const PreferencesContextProvider: FC = ({ children }) => {
  const [openInNewTab, toggleOpenInNewTab] = useOpenInNewTab();
  const [persistDisabled, togglePersistDisabled] = usePersistDisabled();

  const value = useMemo(() => {
    return {
      openInNewTab,
      toggleOpenInNewTab,
      persistDisabled,
      togglePersistDisabled,
    };
  }, [
    openInNewTab,
    toggleOpenInNewTab,
    persistDisabled,
    togglePersistDisabled,
  ]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferencesContext = () => {
  return useContext(PreferencesContext);
};
