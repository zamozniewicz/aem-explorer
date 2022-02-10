import { WcmMode } from "./modes";

export const ids = [
  "aemExplorerDisabled",
  "aemExplorerEdit",
  "aemExplorerPreview",
  "aemExplorerDesign",
] as const;

type Id = typeof ids[number];

export const contextMenus: Array<{ id: Id; title: string }> = [
  { id: "aemExplorerDisabled", title: "WCM disabled" },
  { id: "aemExplorerEdit", title: "Edit" },
  { id: "aemExplorerPreview", title: "Preview" },
  { id: "aemExplorerDesign", title: "Design" },
];

export const modes: Record<Id, WcmMode> = {
  aemExplorerDisabled: "disabled",
  aemExplorerEdit: "touch",
  aemExplorerPreview: "preview",
  aemExplorerDesign: "design",
} as const;
