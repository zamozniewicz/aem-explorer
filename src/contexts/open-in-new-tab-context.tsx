import React, { FC, useContext, useEffect, useMemo, useState } from "react";

interface OpenInNewTabContextValues {
  openInNewTab: boolean;
  toggleOpenInNewTab: () => void;
}

const OpenInNewTabContext = React.createContext<OpenInNewTabContextValues>({
  openInNewTab: false,
  toggleOpenInNewTab: () => {},
});

const openInNewTabStorageKey = "aemExplorerOpenInNewTab";

export const OpenInNewTabContextProvider: FC = ({ children }) => {
  const [openInNewTab, setOpenInNewTab] = useState<boolean>(false);
  useEffect(() => {
    chrome.storage?.sync.get(openInNewTabStorageKey, (result) => {
      const savedOpenInNewTab = result[openInNewTabStorageKey] || false;
      setOpenInNewTab(savedOpenInNewTab);
    });
  }, []);

  useEffect(() => {
    chrome.storage?.sync.set({ [openInNewTabStorageKey]: openInNewTab });
  }, [openInNewTab]);

  const toggleOpenInNewTab = () => {
    setOpenInNewTab((newTab) => !newTab);
  };

  const value = useMemo(
    () => ({ openInNewTab, toggleOpenInNewTab }),
    [openInNewTab]
  );

  return (
    <OpenInNewTabContext.Provider value={value}>
      {children}
    </OpenInNewTabContext.Provider>
  );
};

export const useOpenInNewTabContext = () => {
  return useContext(OpenInNewTabContext);
};