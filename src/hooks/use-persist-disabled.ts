import { useStorage } from "./use-storage";

export const usePersistDisabled = () => {
  const [persistDisabled, setPersistDisabled] = useStorage(
    "aemExplorerPersistDisabled",
    false
  );

  const togglePersistDisabled = () => {
    setPersistDisabled((v) => !v);
  };

  return [persistDisabled, togglePersistDisabled] as const;
};
