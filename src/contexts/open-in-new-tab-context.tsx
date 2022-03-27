import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import browser from "webextension-polyfill";

interface OpenInNewTabContextValues {
  openInNewTab: boolean;
  toggleOpenInNewTab: () => void;
}

export const OpenInNewTabContext =
  React.createContext<OpenInNewTabContextValues>({
    openInNewTab: false,
    toggleOpenInNewTab: () => {},
  });

const openInNewTabStorageKey = "aemExplorerOpenInNewTab";

export const OpenInNewTabContextProvider: FC = ({ children }) => {
  const [openInNewTab, setOpenInNewTab] = useState<boolean>(false);
  useEffect(() => {
    const restoreFromStorage = async () => {
      const saved = await browser.storage?.sync.get(openInNewTabStorageKey);
      const restoredOpenInNewTab = saved[openInNewTabStorageKey] || false;
      setOpenInNewTab(restoredOpenInNewTab);
    };

    restoreFromStorage();
  }, []);

  useEffect(() => {
    browser.storage?.sync.set({ [openInNewTabStorageKey]: openInNewTab });
  }, [openInNewTab]);

  const toggleOpenInNewTab = () => {
    setOpenInNewTab((newTab) => !newTab);
  };

  const value = useMemo(
    () => ({
      openInNewTab,
      toggleOpenInNewTab,
    }),
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
