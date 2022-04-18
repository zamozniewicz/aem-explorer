import React, { FC, useContext, useEffect, useMemo, useState } from "react";

interface PersistDisabledContextValues {
  persistDisabled: boolean;
  togglePersistDisabled: () => void;
}

export const PersistDisabledContext =
  React.createContext<PersistDisabledContextValues>({
    persistDisabled: false,
    togglePersistDisabled: () => {},
  });

const persistDisabledStorageKey = "aemExplorerPersistDisabled";

export const PersistDisabledContextProvider: FC = ({ children }) => {
  const [persistDisabled, setPersistDisabled] = useState<boolean>(false);
  useEffect(() => {
    chrome.storage?.sync.get(persistDisabledStorageKey, (storage) => {
      const saved = storage[persistDisabledStorageKey] || false;
      setPersistDisabled(saved);
    });
  }, []);

  useEffect(() => {
    chrome.storage?.sync.set({ [persistDisabledStorageKey]: persistDisabled });
  }, [persistDisabled]);

  const togglePersistDisabled = () => {
    setPersistDisabled((persist) => !persist);
  };

  const value = useMemo(
    () => ({ persistDisabled, togglePersistDisabled }),
    [persistDisabled]
  );

  return (
    <PersistDisabledContext.Provider value={value}>
      {children}
    </PersistDisabledContext.Provider>
  );
};

export const usePersistDisabledContext = () => {
  return useContext(PersistDisabledContext);
};
