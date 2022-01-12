const getMockedTab = (): chrome.tabs.Tab => {
  return {
    id: 0,
    groupId: 0,
    windowId: 0,
    index: 0,
    url: window.location.href,
    pinned: false,
    highlighted: false,
    active: false,
    incognito: false,
    selected: false,
    discarded: false,
    autoDiscardable: false,
  };
};

export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
  const queryOptions = { active: true, currentWindow: true };

  if (chrome.tabs === undefined) {
    return Promise.resolve(getMockedTab());
  }

  const [tab] = await chrome.tabs.query(queryOptions);
  return Promise.resolve(tab);
};
