export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return Promise.resolve(tab);
};
