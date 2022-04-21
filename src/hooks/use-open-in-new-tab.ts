import { useStorage } from "./use-storage";

export const useOpenInNewTab = () => {
  const [openInNewTab, setOpenInNewTab] = useStorage(
    "aemExplorerOpenInNewTab",
    false
  );

  const toggleOpenInNewTab = () => {
    setOpenInNewTab((v) => !v);
  };

  return [openInNewTab, toggleOpenInNewTab] as const;
};
