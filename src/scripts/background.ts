chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "aemExplorer",
    title: "AEM Explorer",
    contexts: ["page"],
  });
});

export {};
