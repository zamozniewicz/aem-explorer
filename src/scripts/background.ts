import { contextMenus, ids, modes } from "../model/context-menus";
import { includes } from "../utils/includes";
import { setWcmMode } from "../utils/set-wcm-mode";

chrome.runtime.onInstalled.addListener(() => {
  contextMenus.forEach(({ id, title }) => {
    chrome.contextMenus.create({
      id,
      title,
      contexts: ["page"],
    });
  });
});

chrome.contextMenus.onClicked.addListener(({ menuItemId }) => {
  if (includes(ids, menuItemId)) {
    setWcmMode(modes[menuItemId]);
  }
});

export {};
