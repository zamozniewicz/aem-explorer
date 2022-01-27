import { WcmMode } from "../model/modes";
import { includes } from "../utils/includes";
import { setWcmMode } from "../utils/set-wcm-mode";

const ids = [
  "aemExplorerDisabled",
  "aemExplorerEdit",
  "aemExplorerPreview",
  "aemExplorerDesign",
] as const;

type Id = typeof ids[number];

const modes: Record<Id, WcmMode> = {
  aemExplorerDisabled: "disabled",
  aemExplorerEdit: "touch",
  aemExplorerPreview: "preview",
  aemExplorerDesign: "design",
} as const;

chrome.runtime.onInstalled.addListener(() => {
  const contextMenus: Array<{ id: Id; title: string }> = [
    { id: "aemExplorerDisabled", title: "WCM disabled" },
    { id: "aemExplorerEdit", title: "Edit" },
    { id: "aemExplorerPreview", title: "Preview" },
    { id: "aemExplorerDesign", title: "Design" },
  ];

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
