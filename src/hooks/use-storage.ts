import { useState, useEffect } from "react";

export const useStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  useEffect(() => {
    chrome.storage?.sync.get(key, (storage) => {
      const saved = storage[key] || defaultValue;
      setStoredValue(saved);
    });
  }, [key, defaultValue]);

  const setValue = (value: T | ((value: T) => T)): void => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;

    chrome.storage?.sync.set({ [key]: valueToStore });
    setStoredValue(valueToStore);
  };

  return [storedValue, setValue] as const;
};
