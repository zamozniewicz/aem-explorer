export const editorPath = "/editor.html";
export const debugClientLibsParam = "debugClientLibs";
export const wcmModeParam = "wcmmode";
export const wcmModes = ["disabled", "touch", "preview", "design"] as const;
export type WcmMode = typeof wcmModes[number];
