import browser from "webextension-polyfill";
import { contextMenus, ids, modes } from "../model/context-menus";
import { includes } from "../utils/includes";
import { setWcmMode } from "../utils/set-wcm-mode";

browser.runtime.onInstalled.addListener(() => {
  contextMenus.forEach(({ id, title }) => {
    browser.contextMenus.create({
      id,
      title,
      contexts: ["page"],
    });
  });
});

browser.contextMenus.onClicked.addListener(({ menuItemId }) => {
  if (includes(ids, menuItemId)) {
    setWcmMode(modes[menuItemId]);
  }
});

export {};
