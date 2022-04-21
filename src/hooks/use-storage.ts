import { useState, useEffect } from "react";

export const useStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    chrome.storage?.sync.get(key, (storage) => {
      const saved = storage[key] || defaultValue;
      setValue(saved);
    });
  }, [key, defaultValue]);

  useEffect(() => {
    chrome.storage?.sync.set({ [key]: value });
  }, [value]);

  return [value, setValue] as const;
};
